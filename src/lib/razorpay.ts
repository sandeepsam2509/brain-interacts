// Razorpay payments for the INR 999 full report (https://razorpay.com/docs/api/).
// Keys come from Vercel environment variables, never from the code:
//   RAZORPAY_KEY_ID      public key id (starts rzp_live_ or rzp_test_)
//   RAZORPAY_KEY_SECRET  secret key (sensitive)
//   RAZORPAY_WEBHOOK_SECRET  optional, for the payment.captured webhook
//   REPORT_ORDER_TO      comma-separated inboxes told about each paid order

import { createHmac, timingSafeEqual } from "node:crypto";
import { emailConfig, esc, fieldsTable, sendEmail } from "./email";
import { site } from "./site";

export const FULL_REPORT = { amount: 99900, currency: "INR", label: "INR 999", title: "Full report and action framework" };

const keyId = () => process.env.RAZORPAY_KEY_ID;
const keySecret = () => process.env.RAZORPAY_KEY_SECRET;
export const paymentsReady = () => Boolean(keyId() && keySecret());
export const publicKeyId = () => keyId() ?? "";

async function api<T>(path: string, init?: { method?: string; body?: unknown }): Promise<T> {
  const auth = Buffer.from(`${keyId()}:${keySecret()}`).toString("base64");
  const res = await fetch(`https://api.razorpay.com/v1${path}`, {
    method: init?.method ?? "GET",
    headers: { Authorization: `Basic ${auth}`, "Content-Type": "application/json" },
    body: init?.body ? JSON.stringify(init.body) : undefined,
  });
  if (!res.ok) throw new Error(`Razorpay ${path} ${res.status}: ${await res.text().catch(() => "")}`);
  return (await res.json()) as T;
}

export type Buyer = { name: string; email: string; phone: string; archetype: string; assessment: string };

export async function createOrder(buyer: Buyer) {
  return api<{ id: string; amount: number; currency: string }>("/orders", {
    method: "POST",
    body: {
      amount: FULL_REPORT.amount,
      currency: FULL_REPORT.currency,
      receipt: `fr_${Date.now()}`,
      notes: { product: "full-report", ...buyer },
    },
  });
}

function safeEqualHex(a: string, b: string) {
  const x = Buffer.from(a, "hex");
  const y = Buffer.from(b, "hex");
  return x.length === y.length && timingSafeEqual(x, y);
}

/** Checkout success: signature = HMAC-SHA256(order_id|payment_id, key secret). */
export function checkoutSignatureValid(orderId: string, paymentId: string, signature: string) {
  const expected = createHmac("sha256", keySecret() ?? "").update(`${orderId}|${paymentId}`).digest("hex");
  return /^[0-9a-f]+$/i.test(signature) && safeEqualHex(expected, signature);
}

/** Webhook: signature = HMAC-SHA256(raw body, webhook secret). */
export function webhookSignatureValid(rawBody: string, signature: string) {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
  if (!secret) return false;
  const expected = createHmac("sha256", secret).update(rawBody).digest("hex");
  return /^[0-9a-f]+$/i.test(signature) && safeEqualHex(expected, signature);
}

type Payment = { id: string; order_id: string; status: string; amount: number; currency: string; email?: string; contact?: string; notes?: Record<string, string> };
type Order = { id: string; amount: number; notes?: Record<string, string> };

/**
 * Confirms the payment with Razorpay, then emails the team and the buyer once.
 * The payment's own notes record that the emails went out, so the checkout callback
 * and the webhook can both call this without sending twice.
 */
export async function fulfilPayment(paymentId: string): Promise<{ ok: boolean; already?: boolean; error?: string }> {
  let payment = await api<Payment>(`/payments/${encodeURIComponent(paymentId)}`);
  if (payment.status === "authorized") {
    payment = await api<Payment>(`/payments/${encodeURIComponent(paymentId)}/capture`, { method: "POST", body: { amount: payment.amount, currency: payment.currency } });
  }
  if (payment.status !== "captured") return { ok: false, error: `Payment is ${payment.status}` };
  if (payment.amount !== FULL_REPORT.amount || payment.currency !== FULL_REPORT.currency) return { ok: false, error: "Unexpected amount" };
  if (payment.notes?.bi_notified === "1") return { ok: true, already: true };

  const order = await api<Order>(`/orders/${encodeURIComponent(payment.order_id)}`);
  const n = order.notes ?? {};
  if (n.product !== "full-report") return { ok: false, error: "Not a full-report order" };

  // Mark first so a parallel call (webhook + browser) doesn't send twice.
  await api(`/payments/${encodeURIComponent(paymentId)}`, { method: "PATCH", body: { notes: { ...(payment.notes ?? {}), bi_notified: "1" } } });

  const buyerEmail = n.email || payment.email || "";
  const team = (process.env.REPORT_ORDER_TO ?? emailConfig.to ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  if (team.length) {
    await sendEmail({
      to: team,
      replyTo: buyerEmail || undefined,
      subject: `Required: full report (paid ${FULL_REPORT.label}): ${n.name || buyerEmail} (${n.archetype || "archetype n/a"})`,
      html: `<p style="font-family:Arial,sans-serif;font-size:15px;color:#0F172A"><strong>A full report and action framework has been paid for and is required.</strong> Please prepare it and send it to the customer.</p>${fieldsTable([
        ["Name", n.name || ""],
        ["Email", buyerEmail],
        ["Mobile", n.phone || payment.contact || ""],
        ["Archetype", n.archetype || ""],
        ["Assessment", n.assessment || ""],
        ["Amount", `${FULL_REPORT.label} (captured)`],
        ["Razorpay payment", payment.id],
        ["Razorpay order", order.id],
      ])}`,
    });
  }
  if (buyerEmail) {
    await sendEmail({
      to: buyerEmail,
      subject: "Payment received: your Corporate Brain full report",
      html: `<div style="font-family:Arial,sans-serif;color:#0F172A;font-size:15px;line-height:1.6">
        <p>Hi ${esc(n.name || "there")},</p>
        <p>Thank you. We've received your payment of <strong>${FULL_REPORT.label}</strong> for the <strong>${FULL_REPORT.title}</strong>${n.archetype ? ` (${esc(n.archetype)})` : ""}.</p>
        <p>Our experts will prepare your report and email it to you. If you have any questions, just reply to this email or write to <a href="mailto:${esc(site.email)}" style="color:#0F172A">${esc(site.email)}</a>.</p>
        <p style="color:#475569;font-size:13px">Payment reference: ${esc(payment.id)}</p>
      </div>`,
    }).catch(() => undefined);
  }
  return { ok: true };
}
