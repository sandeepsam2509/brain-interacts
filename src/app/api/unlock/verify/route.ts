import { clean } from "@/lib/forms";
import { checkoutSignatureValid, fulfilPayment, paymentsReady } from "@/lib/razorpay";

// Called by the payment page after Razorpay Checkout succeeds.
export async function POST(req: Request): Promise<Response> {
  const reply = (body: Record<string, unknown>, status = 200) => Response.json(body, { status });
  if (!paymentsReady()) return reply({ ok: false, error: "Payments aren't switched on." }, 503);
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return reply({ ok: false, error: "Something went wrong." }, 400);
  }
  const orderId = clean(data.razorpay_order_id, 64);
  const paymentId = clean(data.razorpay_payment_id, 64);
  const signature = clean(data.razorpay_signature, 128);
  if (!orderId || !paymentId || !checkoutSignatureValid(orderId, paymentId, signature)) {
    return reply({ ok: false, error: "We couldn't verify the payment. If money was taken, please contact us with your payment reference." }, 400);
  }
  try {
    const result = await fulfilPayment(paymentId);
    if (!result.ok) return reply({ ok: false, error: "We couldn't confirm the payment yet. If money was taken, please contact us with your payment reference." }, 409);
    return reply({ ok: true, paymentId });
  } catch (err) {
    console.error("[unlock] verify failed", err);
    // The webhook will still pick the payment up.
    return reply({ ok: true, paymentId, pending: true });
  }
}
