import { fulfilPayment, webhookSignatureValid } from "@/lib/razorpay";

// Razorpay webhook (event: payment.captured). A backup for when the buyer closes the page
// before the browser confirms; fulfilPayment makes sure emails go out only once.
export async function POST(req: Request): Promise<Response> {
  const raw = await req.text();
  if (!webhookSignatureValid(raw, req.headers.get("x-razorpay-signature") ?? "")) return new Response("invalid signature", { status: 400 });
  try {
    const event = JSON.parse(raw) as { event?: string; payload?: { payment?: { entity?: { id?: string } } } };
    const id = event.payload?.payment?.entity?.id;
    if (event.event === "payment.captured" && id) await fulfilPayment(id);
  } catch (err) {
    console.error("[unlock] webhook failed", err);
    return new Response("error", { status: 500 }); // Razorpay retries
  }
  return new Response("ok");
}
