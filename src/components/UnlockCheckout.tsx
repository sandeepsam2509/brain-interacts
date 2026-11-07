"use client";

import { useState } from "react";
import { routes } from "@/lib/site";
import { Field, Honeypot, inputClass } from "./forms/fields";

type RazorpayResponse = { razorpay_order_id: string; razorpay_payment_id: string; razorpay_signature: string };
type RazorpayInstance = { open: () => void; on: (event: string, cb: (r: { error?: { description?: string } }) => void) => void };
declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => RazorpayInstance;
  }
}

function loadCheckout(): Promise<boolean> {
  if (window.Razorpay) return Promise.resolve(true);
  return new Promise((resolve) => {
    const s = document.createElement("script");
    s.src = "https://checkout.razorpay.com/v1/checkout.js";
    s.onload = () => resolve(Boolean(window.Razorpay));
    s.onerror = () => resolve(false);
    document.body.appendChild(s);
  });
}

type State = { step: "form" } | { step: "paying" } | { step: "confirming" } | { step: "done"; paymentId: string } | { step: "error"; message: string };

/** Details form → Razorpay Checkout → server verification. */
export function UnlockCheckout({ email: initialEmail, archetype, assessment }: { email: string; archetype: string; assessment: string }) {
  const [state, setState] = useState<State>({ step: "form" });
  const [name, setName] = useState("");
  const [email, setEmail] = useState(initialEmail);
  const [phone, setPhone] = useState("");

  async function pay(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const honeypot = new FormData(e.currentTarget).get("website");
    setState({ step: "paying" });
    try {
      const [ready, res] = await Promise.all([
        loadCheckout(),
        fetch("/api/unlock/order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, phone, archetype, assessment, website: honeypot }),
        }),
      ]);
      const order = (await res.json()) as { ok: boolean; error?: string; orderId: string; amount: number; currency: string; keyId: string };
      if (!order.ok) return setState({ step: "error", message: order.error ?? "Something went wrong. Please try again." });
      if (!ready || !window.Razorpay) return setState({ step: "error", message: "The payment window couldn't load. Please check your connection and try again." });

      const rzp = new window.Razorpay({
        key: order.keyId,
        order_id: order.orderId,
        amount: order.amount,
        currency: order.currency,
        name: "Brain Interacts",
        description: "Full report and action framework",
        image: `${window.location.origin}/brand/brain-interacts-mark.svg`,
        prefill: { name, email, contact: phone },
        notes: { archetype },
        theme: { color: "#0A1628" },
        modal: { ondismiss: () => setState({ step: "form" }) },
        handler: async (r: RazorpayResponse) => {
          setState({ step: "confirming" });
          const v = await fetch("/api/unlock/verify", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(r) })
            .then((x) => x.json() as Promise<{ ok: boolean; error?: string }>)
            .catch(() => ({ ok: true }) as { ok: boolean; error?: string }); // the webhook still confirms it
          if (v.ok) setState({ step: "done", paymentId: r.razorpay_payment_id });
          else setState({ step: "error", message: `${v.error ?? "We couldn't confirm the payment."} Payment reference: ${r.razorpay_payment_id}` });
        },
      });
      rzp.on("payment.failed", (r) => setState({ step: "error", message: r.error?.description ?? "The payment didn't go through. You haven't been charged; please try again." }));
      rzp.open();
    } catch {
      setState({ step: "error", message: "Something went wrong. Please try again." });
    }
  }

  if (state.step === "done") {
    return (
      <div role="status">
        <p className="text-2xl font-extrabold text-green-ink">Payment received. Thank you!</p>
        <p className="mt-3 text-[14px] leading-[1.65] text-ink-body">
          We&apos;ve emailed a confirmation to <strong className="text-ink">{email}</strong>. Our experts will prepare your full
          report and action framework and send it to you.
        </p>
        <p className="mt-4 font-mono text-xs text-ink-muted">Payment reference: {state.paymentId}</p>
      </div>
    );
  }

  const busy = state.step === "paying" || state.step === "confirming";
  return (
    <form onSubmit={pay} className="relative grid gap-4">
      <Honeypot />
      <div className="flex items-end justify-between gap-3 border-b border-rule pb-4">
        <div>
          <p className="font-mono text-xs text-ink-muted uppercase">Full report and action framework</p>
          <p className="mt-1 text-sm text-ink-body">{assessment}</p>
        </div>
        <p className="text-3xl font-extrabold tracking-[-0.02em]">₹999</p>
      </div>
      <Field id="un-name" label="Full name" required>
        <input id="un-name" required autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} className={inputClass()} />
      </Field>
      <Field id="un-email" label="Email" required>
        <input id="un-email" type="email" required autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass()} />
      </Field>
      <Field id="un-phone" label="Mobile number" required>
        <input id="un-phone" type="tel" required autoComplete="tel" inputMode="tel" placeholder="+91" value={phone} onChange={(e) => setPhone(e.target.value)} className={inputClass()} />
      </Field>
      <button type="submit" disabled={busy} className="mt-1 w-full rounded-lg bg-lime px-6 py-4 text-base font-bold text-navy hover:bg-[#c7ea72] disabled:opacity-60">
        {state.step === "confirming" ? "Confirming your payment…" : state.step === "paying" ? "Opening secure payment…" : "Pay ₹999 securely"}
      </button>
      {state.step === "error" && (
        <p role="alert" className="text-sm font-semibold text-[#B42318]">
          {state.message}
        </p>
      )}
      <p className="text-xs leading-[1.55] text-ink-muted">
        Payments are processed securely by Razorpay; we never see your card details. By paying you agree to our{" "}
        <a href={routes.terms} className="underline">
          Terms
        </a>{" "}
        and{" "}
        <a href={routes.privacy} className="underline">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}
