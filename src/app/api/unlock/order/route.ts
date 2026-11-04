import { clean, clientKey, EMAIL_RE, HONEYPOT, rateLimited } from "@/lib/forms";
import { createOrder, FULL_REPORT, paymentsReady, publicKeyId } from "@/lib/razorpay";

// Starts a Razorpay order for the INR 999 full report.
export async function POST(req: Request): Promise<Response> {
  const reply = (body: Record<string, unknown>, status = 200) => Response.json(body, { status });
  if (!paymentsReady()) return reply({ ok: false, error: "Online payment isn't switched on yet. Please use the request form instead." }, 503);
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return reply({ ok: false, error: "Something went wrong. Please try again." }, 400);
  }
  if (clean(data[HONEYPOT])) return reply({ ok: false, error: "Something went wrong. Please try again." }, 400);
  if (rateLimited(clientKey(req), 5)) return reply({ ok: false, error: "Too many attempts. Please wait a minute and try again." }, 429);

  const name = clean(data.name, 100);
  const email = clean(data.email, 200);
  const phone = clean(data.phone, 20).replace(/[^\d+]/g, "");
  if (!name) return reply({ ok: false, error: "Please enter your name." }, 400);
  if (!EMAIL_RE.test(email)) return reply({ ok: false, error: "Please enter a valid email." }, 400);
  if (phone.replace(/\D/g, "").length < 10 || phone.replace(/\D/g, "").length > 15) return reply({ ok: false, error: "Please enter a valid mobile number." }, 400);

  try {
    const order = await createOrder({ name, email, phone, archetype: clean(data.archetype, 80), assessment: clean(data.assessment, 80) });
    return reply({ ok: true, orderId: order.id, amount: FULL_REPORT.amount, currency: FULL_REPORT.currency, keyId: publicKeyId() });
  } catch (err) {
    console.error("[unlock] order failed", err);
    return reply({ ok: false, error: "We couldn't start the payment. Please try again in a moment." }, 502);
  }
}
