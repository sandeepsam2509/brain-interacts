import type { Metadata } from "next";
import { UnlockCheckout } from "@/components/UnlockCheckout";
import { Eyebrow, Section } from "@/components/ui";
import { enquiryHref } from "@/lib/enquiries";
import { FULL_REPORT, paymentsReady } from "@/lib/razorpay";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Unlock Your Full Report",
  description: "Your detailed Corporate Brain report and personal action framework.",
  alternates: { canonical: routes.unlock },
  robots: { index: false },
};

type Props = { searchParams: Promise<Record<string, string | string[] | undefined>> };

export default async function UnlockPage({ searchParams }: Props) {
  const params = await searchParams;
  const one = (k: string) => {
    const v = params[k];
    return ((Array.isArray(v) ? v[0] : v) ?? "").slice(0, 120);
  };
  const archetype = one("archetype");
  const assessment = one("assessment") || "Working-style assessment";

  return (
    <Section tone="dark" innerClassName="pt-12 pb-20 md:pt-[72px] md:pb-28">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <Eyebrow icon="spark" color="gold">
            Full report · {FULL_REPORT.label}
          </Eyebrow>
          <h1 className="text-[clamp(34px,4.4vw,56px)] leading-[1.06] font-extrabold tracking-[-0.03em]">
            Unlock your full report <span className="text-lime">and action framework.</span>
          </h1>
          <p className="mt-6 max-w-[540px] text-[17px] leading-[1.7] text-on-navy">
            Go deeper than your free snapshot. Our experts prepare your detailed Corporate Brain report and a personal action
            framework, and email it to you.
          </p>
          {archetype && (
            <p className="mt-6 inline-flex rounded-full bg-navy-raised px-4 py-2 text-sm ring-1 ring-navy-line">
              Your archetype: <strong className="ml-1.5 text-white">{archetype}</strong>
            </p>
          )}
          <ul className="mt-8 list-none p-0 text-[15px] leading-[1.6] text-on-navy-soft">
            {["Prepared by our experts from your assessment", "A personal action framework you can use straight away", "Secure payment by Razorpay: UPI, cards and net banking"].map((t) => (
              <li key={t} className="flex gap-3 py-1.5">
                <span aria-hidden="true" className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime text-xs font-bold text-navy">
                  ✓
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[20px] bg-white p-6 text-ink md:p-8">
          {paymentsReady() ? (
            <UnlockCheckout email={one("email")} archetype={archetype} assessment={assessment} />
          ) : (
            <div>
              <p className="text-lg font-extrabold">Online payment is coming soon</p>
              <p className="mt-2 text-[15px] leading-[1.6] text-ink-body">Leave your details and we&apos;ll send you a payment link and next steps.</p>
              <a
                href={enquiryHref("full-report", { archetype, assessment })}
                className="mt-5 flex w-full items-center justify-center rounded-lg bg-navy px-6 py-4 text-base font-bold text-white no-underline hover:bg-[#1e3a66]"
              >
                Request my full report
              </a>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
