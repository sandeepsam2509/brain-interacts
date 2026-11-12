/* eslint-disable @next/next/no-img-element -- static photos */
import type { Metadata } from "next";
import Link from "next/link";
import { DecodeCost } from "@/components/pricing/DecodeCost";
import { PriceEstimator } from "@/components/widgets/PriceEstimator";
import { enquiryHref } from "@/lib/enquiries";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing, Corporate Brain and Decode",
  description:
    "Corporate Brain is priced per seat, per month: Leadership ₹10,000, Manager ₹5,000, Employee ₹2,000. Decode is priced per skill you assess, with prepaid credits and no subscription.",
  alternates: { canonical: routes.pricing },
};

const wrap = "mx-auto max-w-[1280px] px-4 md:px-[70px]";
const eyebrow = "text-[12px] font-semibold tracking-[0.1em] uppercase";
const h2 = "font-display text-[clamp(26px,3vw,40px)] leading-[1.12] font-semibold tracking-[-0.02em]";
const btnRed = "inline-flex items-center rounded-lg bg-brand-red px-5 py-3 text-[15px] font-semibold text-white no-underline hover:bg-brand-red-dark";
const btnGhostDark = "inline-flex items-center rounded-lg border border-navy-line px-5 py-3 text-[15px] font-semibold text-white no-underline hover:border-on-navy";

const seats = [
  {
    name: "Leadership",
    price: "₹10,000",
    who: "For CEOs, founders, CXOs and HR heads",
    lead: "Everything in Manager, plus:",
    items: ["Organization-wide Leadership View", "Team mix against six company goals", "Key-person and succession insights", "Hiring pipeline", "Company reports"],
    top: "border-brand-red",
    chip: "bg-red-tint text-brand-red",
    tick: "text-brand-red",
    cta: "bg-navy hover:bg-navy-raised",
  },
  {
    name: "Manager",
    price: "₹5,000",
    who: "For team leads and department heads",
    lead: "Everything in Employee, plus:",
    items: ["Team dashboard and management actions", "Task and project-lead suggestions from Brain", "Cover planning for time away", "Coaching guides for each working style"],
    top: "border-amber",
    chip: "bg-amber-tint text-gold-ink",
    tick: "text-gold-ink",
    cta: "bg-brand-red hover:bg-brand-red-dark",
    badge: "Most seats",
  },
  {
    name: "Employee",
    price: "₹2,000",
    who: "For every team member",
    lead: "Includes:",
    items: ["Working-style questionnaire and profile", "Role skills check", "Strengths and development areas", "Progress page with retakes", "8-week workload planner"],
    top: "border-brand-green",
    chip: "bg-green-tint text-green-ink",
    tick: "text-green-ink",
    cta: "bg-navy hover:bg-navy-raised",
  },
];

const compare = [
  ["How you pay", "Per seat, per month", "Per skill, per candidate (credits)"],
  ["Subscription", "Yes, monthly", "No"],
  ["Best for", "Running teams: work allocation, succession, culture", "Hiring and skill checks for any role"],
  ["Who uses it", "Leadership, managers, employees", "HR and hiring managers"],
  ["Try it first", "Live walkthrough on your org", "Preview any game free"],
];

const faqs = [
  ["Corporate Brain", "bg-red-tint text-brand-red", "Do all employees need the same seat?", "No. Most organizations mix a few Leadership seats, Manager seats for team leads, and Employee seats for everyone else."],
  ["Corporate Brain", "bg-red-tint text-brand-red", "Is there a minimum number of users?", "Ask for a custom quote and we will confirm the right starting size."],
  ["Decode", "bg-amber-tint text-gold-ink", "Is there a subscription for Decode?", "No. You buy credits and spend them per skill, per candidate. Previewing a game is free."],
  ["Decode", "bg-amber-tint text-gold-ink", "How do I pay for Decode?", "By UPI, card or net banking, with a receipt by email."],
  ["Both", "bg-green-tint text-green-ink", "What are credits?", "Each assessment sent to an employee or candidate uses credits. You see the cost before you send, and can top up any time."],
  ["Both", "bg-green-tint text-green-ink", "Is our data kept separate?", "Yes. Every customer's data is kept separate, and Corporate Brain gives each customer its own database."],
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pb-24 text-white md:pb-28">
        <div className={`${wrap} pt-10 text-center md:pt-14`}>
          <nav aria-label="Breadcrumb" className="text-left text-[13px] text-on-navy-muted">
            <Link href={routes.home} className="text-on-navy-muted underline">
              Home
            </Link>{" "}
            / <span className="text-white">Pricing</span>
          </nav>
          <p className={`${eyebrow} mt-6 text-amber`}>Pricing</p>
          <h1 className="mx-auto mt-4 max-w-[760px] text-[clamp(34px,4.2vw,56px)] leading-[1.08] font-semibold tracking-[-0.025em]">Two products. Pay only for what you use.</h1>
          <p className="mx-auto mt-5 max-w-[560px] text-[16px] leading-[1.65] text-on-navy">
            Corporate Brain is priced per seat, per month. Decode is priced per skill you assess, with no subscription.
          </p>
          <div className="mt-7 inline-flex rounded-xl bg-navy-raised p-1 text-[14px] font-semibold">
            <a href="#corporate-brain" className="rounded-lg bg-white px-4 py-2 text-ink no-underline">
              Corporate Brain
            </a>
            <a href="#decode" className="rounded-lg px-4 py-2 text-white no-underline">
              Decode
            </a>
          </div>
        </div>
      </section>

      {/* Product cards */}
      <section className="bg-cloud">
        <div className={`${wrap} -mt-16 grid gap-5 md:grid-cols-2`}>
          <a href="#corporate-brain" className="grid grid-cols-[38%_1fr] overflow-hidden rounded-xl bg-white text-ink no-underline shadow-[0_20px_40px_rgba(10,22,40,0.12)]">
            <img src="/site/8fc9f461.webp" alt="Leaders in a boardroom" className="h-full w-full object-cover" />
            <div className="p-5">
              <span className="rounded-full bg-red-tint px-2.5 py-1 text-[11.5px] font-semibold text-brand-red">People analytics platform</span>
              <h2 className="mt-3 text-[22px] font-semibold">Corporate Brain</h2>
              <p className="mt-2 text-[14px] leading-[1.55] text-ink-body">Per seat, per month. Mix Leadership, Manager and Employee seats.</p>
              <p className="m-0 mt-3 text-[13px] text-ink-muted">
                from <span className="font-display text-[22px] font-semibold text-ink">₹2,000</span> / user / month
              </p>
            </div>
          </a>
          <a href="#decode" className="grid grid-cols-[38%_1fr] overflow-hidden rounded-xl bg-white text-ink no-underline shadow-[0_20px_40px_rgba(10,22,40,0.12)]">
            <img src="/site/bb275f24.webp" alt="A candidate at work" className="h-full w-full object-cover" />
            <div className="p-5">
              <span className="rounded-full bg-amber-tint px-2.5 py-1 text-[11.5px] font-semibold text-gold-ink">Game-based assessments</span>
              <h2 className="mt-3 text-[22px] font-semibold">Decode</h2>
              <p className="mt-2 text-[14px] leading-[1.55] text-ink-body">Pay per skill, per candidate, with prepaid credits. No subscription.</p>
              <p className="m-0 mt-3 text-[13px] text-ink-muted">
                from <span className="font-display text-[22px] font-semibold text-ink">100 credits</span> / skill · 1 credit = ₹1
              </p>
            </div>
          </a>
        </div>

        {/* Corporate Brain seats */}
        <div id="corporate-brain" className={`${wrap} scroll-mt-24 py-16 md:py-20`}>
          <div className="grid gap-4 md:grid-cols-[1.4fr_1fr] md:items-end">
            <div>
              <p className={`${eyebrow} text-brand-red`}>1 · Corporate Brain</p>
              <h2 className={`${h2} mt-2 text-ink`}>Choose the right seat for each person.</h2>
            </div>
            <p className="m-0 text-[14.5px] leading-[1.6] text-ink-body">
              Prices in Indian rupees, billed per user per month, excluding GST. Every plan includes a separate database for your organization.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {seats.map((s) => (
              <div key={s.name} className={`relative rounded-xl border-t-[3px] bg-white p-6 ${s.top}`}>
                {s.badge && <span className="absolute -top-3.5 right-4 rounded-full bg-navy px-3 py-1 text-[12px] font-semibold text-white">{s.badge}</span>}
                <span className={`rounded-full px-2.5 py-1 text-[12px] font-semibold ${s.chip}`}>{s.name}</span>
                <p className="m-0 mt-5">
                  <span className="font-display text-[36px] font-semibold text-ink">{s.price}</span>
                  <span className="ml-1.5 text-[13px] text-ink-muted">/ user / month</span>
                </p>
                <p className="mt-2 text-[14px] text-ink-body">{s.who}</p>
                <Link href={enquiryHref("quote")} className={`mt-5 block rounded-lg py-3 text-center text-[15px] font-semibold text-white no-underline ${s.cta}`}>
                  Get a custom quote
                </Link>
                <p className="mt-5 text-[13.5px] font-semibold text-ink">{s.lead}</p>
                <ul className="m-0 mt-2 list-none space-y-2 p-0">
                  {s.items.map((i) => (
                    <li key={i} className="flex gap-2.5 text-[14px] text-ink-body">
                      <span aria-hidden="true" className={s.tick}>
                        ✓
                      </span>
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-5 flex gap-4 rounded-xl bg-white p-5">
            <span aria-hidden="true" className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-amber-tint font-semibold text-gold-ink">
              +
            </span>
            <p className="m-0 text-[14px] leading-[1.6] text-ink-body">
              <strong className="text-ink">Assessment credits.</strong> Assessments inside Corporate Brain use credits, and the cost is shown before you
              send one. Extra credits can be bought any time, including for candidate assessments in hiring.
            </p>
          </div>
        </div>
      </section>

      {/* Decode */}
      <section id="decode" className="scroll-mt-24 bg-white">
        <div className={`${wrap} py-16 md:py-24`}>
          <div className="grid gap-4 md:grid-cols-[1.4fr_1fr] md:items-end">
            <div>
              <p className={`${eyebrow} text-gold-ink`}>2 · Decode</p>
              <h2 className={`${h2} mt-2 text-ink`}>Pay per skill, only for what you assess.</h2>
            </div>
            <p className="m-0 text-[14.5px] leading-[1.6] text-ink-body">No subscription. Buy credits and spend them per candidate. Previewing any game yourself is always free.</p>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div>
              <div className="relative">
                <img src="/site/793df1a3.webp" alt="A person taking an assessment" className="h-[250px] w-full rounded-xl object-cover" />
                <span className="absolute bottom-3 left-3 rounded-md bg-white px-3 py-1.5 text-[13px] font-semibold text-ink">85 roles · 14 industries · 15–30 min games</span>
              </div>
              <ol className="m-0 mt-6 list-none space-y-4 p-0">
                {[
                  ["Pick the role", "Industry, role and level. Core skills are ticked for you."],
                  ["Choose skills", "Add or remove skills. Six core skills come in every game."],
                  ["Pay per skill", "Each skill, per candidate, uses credits. You see the cost before you send."],
                ].map(([t, d], i) => (
                  <li key={t} className="flex gap-3.5">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-amber-tint text-[13px] font-semibold text-gold-ink">{i + 1}</span>
                    <div>
                      <p className="m-0 font-semibold text-ink">{t}</p>
                      <p className="m-0 text-[14px] text-ink-body">{d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-xl border border-amber/40 bg-amber-tint/50 p-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="m-0 text-[13px] text-ink-muted">Price per credit</p>
                  <p className="m-0 font-display text-[34px] leading-tight font-semibold text-ink">₹1</p>
                  <p className="m-0 text-[12.5px] text-ink-muted">Big Five personality game: 500 credits, any level</p>
                </div>
                <a href={routes.gamified} className="rounded-lg bg-amber px-4 py-2.5 text-[14px] font-semibold text-navy no-underline hover:bg-[#F7B84A]">
                  Preview a game free
                </a>
              </div>
              <div className="mt-5">
                <DecodeCost />
              </div>
              <ul className="m-0 mt-5 grid list-none gap-2 p-0 text-[13.5px] text-ink-body sm:grid-cols-2">
                {["Six core skills in every game", "A report for every skill", "Side-by-side comparison", "Development plan from any report", "Reassess with fresh situations", "Add the Big Five personality game"].map((f) => (
                  <li key={f} className="flex gap-2">
                    <span aria-hidden="true" className="text-green-ink">
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[12.5px] text-ink-muted">The price you see is the price you pay, with a receipt by email. Pay by UPI, card or net banking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compare */}
      <section className="bg-navy text-white">
        <div className={`${wrap} py-16 md:py-24`}>
          <p className={`${eyebrow} text-amber`}>Which one do I need?</p>
          <h2 className={`${h2} mt-3`}>Use one, or connect both.</h2>
          <div className="mt-10 overflow-x-auto rounded-xl bg-white text-ink">
            <table className="w-full min-w-[640px] border-collapse text-left text-[14px]">
              <thead>
                <tr className="bg-cloud">
                  <th className="p-4" />
                  <th className="p-4 font-semibold">
                    <span aria-hidden="true" className="mr-2 inline-block h-2 w-2 rounded-full bg-brand-red" />
                    Corporate Brain
                  </th>
                  <th className="p-4 font-semibold">
                    <span aria-hidden="true" className="mr-2 inline-block h-2 w-2 rounded-full bg-amber" />
                    Decode
                  </th>
                </tr>
              </thead>
              <tbody>
                {compare.map(([k, a, b]) => (
                  <tr key={k} className="border-t border-rule">
                    <th scope="row" className="p-4 font-semibold">
                      {k}
                    </th>
                    <td className="p-4 text-ink-body">{a}</td>
                    <td className="p-4 text-ink-body">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-4 rounded-xl bg-navy-raised p-5">
            <span className="rounded-md bg-amber-tint px-3 py-1.5 text-[14px] font-semibold text-gold-ink">Decode results</span>
            <span aria-hidden="true" className="text-on-navy-muted">
              →
            </span>
            <span className="rounded-md bg-red-tint px-3 py-1.5 text-[14px] font-semibold text-brand-red">Corporate Brain hiring pipeline & task planning</span>
            <p className="m-0 text-[14px] text-on-navy md:ml-auto md:max-w-[320px]">Hire with Decode, then place and grow people in Corporate Brain, on the same Big Five model.</p>
          </div>
        </div>
      </section>

      {/* Payback */}
      <section id="payback" className="scroll-mt-24 bg-cloud">
        <div className={`${wrap} grid gap-10 py-16 md:py-24 lg:grid-cols-[1fr_1.15fr]`}>
          <div>
            <p className={`${eyebrow} text-brand-red`}>Corporate Brain payback</p>
            <h2 className={`${h2} mt-3 text-ink`}>Estimate your price and payback.</h2>
            <p className="mt-4 leading-[1.65] text-ink-body">
              Move the team size to see an estimated monthly price, and how fewer regretted exits could pay for Corporate Brain.
            </p>
            <img src="/site/631ec024.webp" alt="A team at work" className="mt-6 hidden h-[200px] w-full rounded-xl object-cover lg:block" />
          </div>
          <PriceEstimator />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className={`${wrap} grid gap-10 py-16 md:py-24 lg:grid-cols-[1fr_1.3fr]`}>
          <div>
            <p className={`${eyebrow} text-brand-red`}>FAQ</p>
            <h2 className={`${h2} mt-3 text-ink`}>Common questions.</h2>
            <img src="/site/f694d932.webp" alt="Secure server racks" className="mt-6 hidden h-[200px] w-full rounded-xl object-cover lg:block" />
          </div>
          <div>
            {faqs.map(([tag, tc, q, a], i) => (
              <details key={q} open={i === 0} className="group border-b border-rule py-4">
                <summary className="flex cursor-pointer list-none items-center gap-3 font-semibold text-ink">
                  <span aria-hidden="true" className="text-[11px] transition-transform group-open:rotate-90">
                    ▶
                  </span>
                  <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${tc}`}>{tag}</span>
                  {q}
                </summary>
                <p className="mt-2 mb-0 pl-6 leading-[1.6] text-ink-body">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy text-white">
        <img src="/site/44843417.webp" alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-navy/60" />
        <div className={`${wrap} relative py-20 text-center md:py-28`}>
          <h2 className="m-0 text-[clamp(28px,3.6vw,46px)] leading-[1.1] font-semibold tracking-[-0.02em]">Not sure where to start?</h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[17px] text-on-navy-soft">
            Share your team structure and hiring plans, and we&rsquo;ll recommend the right mix of seats and credits.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href={enquiryHref("quote")} className={btnRed}>
              Get a custom quote
            </Link>
            <a href={routes.gamified} className={btnGhostDark}>
              Preview a Decode game free
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
