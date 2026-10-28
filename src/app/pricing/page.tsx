import type { Metadata } from "next";
import { CtaBlock, FaqList, PageHero } from "@/components/blocks";
import { ButtonLink, Eyebrow, H2, Section } from "@/components/ui";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Corporate Brain pricing in Indian rupees: Leadership ₹10,000, Manager ₹5,000 and Employee ₹2,000 per user per month. Mix seats across your organization.",
  alternates: { canonical: routes.pricing },
};

type Plan = { name: string; tag?: string; who: string; price: string; features: string[]; featured?: boolean };

const plans: Plan[] = [
  {
    name: "Leadership",
    tag: "For leaders",
    who: "CEOs, founders, CXOs, HR heads",
    price: "₹10,000",
    featured: true,
    features: [
      "Everything in Manager",
      "Organization-wide Leadership View",
      "Team mix against six company goals",
      "Key-person and succession insights",
      "Hiring pipeline and company reports",
    ],
  },
  {
    name: "Manager",
    who: "Team leads and department heads",
    price: "₹5,000",
    features: [
      "Everything in Employee",
      "Team dashboard and Management actions",
      "Brain suggests: task and project-lead suggestions",
      "Cover planning for time away",
      "Coaching guides for each working style",
    ],
  },
  {
    name: "Employee",
    who: "Every team member",
    price: "₹2,000",
    features: [
      "Working-style questionnaire and profile",
      "Role skills check",
      "Strengths and development areas",
      "My progress page and retakes",
      "8-week workload planner",
    ],
  },
];

function PlanCard({ plan }: { plan: Plan }) {
  const dark = plan.featured;
  return (
    <div className={`flex flex-col rounded-[20px] border p-7 md:p-8 ${dark ? "border-navy bg-navy text-white" : "border-rule bg-white text-ink"}`}>
      <div className={`items-center ${plan.tag ? "flex min-h-7" : "hidden md:flex md:min-h-7"}`}>
        {plan.tag && <span className="rounded-full bg-lime px-2.5 py-1 font-mono text-[11px] font-medium text-navy uppercase">{plan.tag}</span>}
      </div>
      <h3 className={`text-2xl font-extrabold ${plan.tag ? "mt-4" : "md:mt-4"}`}>{plan.name}</h3>
      <p className={`mt-1 ${dark ? "text-on-navy" : "text-ink-body"}`}>{plan.who}</p>
      <p className="mt-6 text-[44px] leading-none font-extrabold tracking-[-0.03em]">{plan.price}</p>
      <p className={`mt-2 text-sm ${dark ? "text-on-navy" : "text-ink-body"}`}>per user / month</p>
      <ul className={`m-0 mt-6 mb-8 flex-1 list-none p-0 ${dark ? "text-on-navy" : "text-ink-body"}`}>
        {plan.features.map((f) => (
          <li key={f} className={`flex gap-2.5 border-t py-3 ${dark ? "border-navy-line" : "border-rule"}`}>
            <span aria-hidden="true" className={dark ? "text-lime" : "text-green-ink"}>✓</span>
            {f}
          </li>
        ))}
      </ul>
      <ButtonLink href={`${routes.contact}?interest=${encodeURIComponent(`Corporate Brain – ${plan.name}`)}#demo`} variant={dark ? "lime" : "navy"} className="w-full">
        Get a demo
      </ButtonLink>
    </div>
  );
}

export default function PricingPage() {
  return (
    <>
      <PageHero
        trail={[{ label: "Home", href: routes.home }, { label: "Pricing" }]}
        label={{ icon: "chart", text: "Pricing", color: "gold" }}
        title="Simple pricing"
        accent="for every seat."
        lead="Pay for the view each person needs. Mix seats across your organization — a few leaders, your managers, and every employee."
      />

      <Section tone="light">
        <Eyebrow icon="people" color="link">
          Corporate Brain seats
        </Eyebrow>
        <H2 className="mb-10 md:mb-14">Choose the right seat for each person.</H2>
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
        <p className="mt-10 max-w-[860px] leading-[1.75] text-ink-body">
          <strong className="text-ink">Need more?</strong> Assessments run on credits: each personality or technical assessment you
          send uses credits, and the cost is shown before you send. Additional credits can be purchased separately, including for
          candidate assessments in hiring.
        </p>
        <p className="mt-4 text-sm text-ink-muted">
          Prices in Indian rupees, billed per user per month, excluding applicable GST. Every plan includes a separate database for
          your organization.
        </p>
      </Section>

      <FaqList
        tone="dark"
        label={{ icon: "target", text: "Pricing FAQ", color: "lime" }}
        title="Common questions."
        items={[
          { q: "Do all employees need the same seat?", a: "No. Most organizations combine a few Leadership seats, Manager seats for team leads, and Employee seats for everyone else." },
          { q: "What are credits?", a: "Each assessment sent — to an employee or a job candidate — uses credits from your company's balance. Admins see the balance and usage in Settings and can top up anytime." },
          { q: "Is there a minimum number of users?", a: "Get a demo and we'll confirm the right starting size for your organization." },
          { q: "Is our data kept separate?", a: "Yes. Every customer gets a separate database." },
        ]}
      />

      <CtaBlock
        tone="light"
        title="Not sure which mix fits?"
        text="Tell us your team structure and we'll recommend the right seats."
        actions={[{ label: "Get a demo", href: routes.demo, variant: "navy" }]}
      />
    </>
  );
}
