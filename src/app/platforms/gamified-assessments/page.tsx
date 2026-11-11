/* eslint-disable @next/next/no-img-element -- the Decode SVG logo doesn't need next/image */
import type { Metadata } from "next";
import { CtaBlock, PageHero } from "@/components/blocks";
import { Eyebrow, H2, Section } from "@/components/ui";
import { routes, site } from "@/lib/site";

// Content mirrors decode.braininteracts.com (the Decode product site).
export const metadata: Metadata = {
  title: "Decode, Game-Based Assessments for 85 Roles",
  description:
    "Short, animated job games for 85 roles across 14 industries. Evidence for every skill, team analytics and development plans. Pay per skill, no subscription.",
  alternates: { canonical: routes.gamified },
};

const trail = [{ label: "Home", href: routes.home }, { label: "Products", href: routes.corporateBrain }, { label: "Decode" }];

const signup = `${site.decode}/signup`;
const pricingUrl = `${site.decode}/pricing`;
const howUrl = `${site.decode}/how-it-works`;
const industriesUrl = `${site.decode}/industries`;

const sampleSkills = [
  { name: "Credit Appraisal", score: 82 },
  { name: "KYC Verification", score: 74 },
  { name: "Customer Negotiation", score: 58 },
  { name: "Learning Agility", score: 88 },
  { name: "Integrity", score: 91 },
];

const steps = [
  { title: "Choose what to assess", text: "Pick the industry, the role and the experience level. The role's core skills are ticked for you, or paste a job description and Decode suggests them." },
  { title: "Send it", text: "Invite candidates or employees by email, or upload them from a spreadsheet. Each person gets a personal link that works on a laptop or phone." },
  { title: "They play a day at work", text: "A 15 to 30 minute animated game set in their industry: customers, colleagues and decisions from the real job. No trick questions." },
  { title: "Read the report", text: "A score for every skill, how many situations it is based on, and what the person did in each one. Print or save any report as a PDF." },
  { title: "Compare and spot patterns", text: "See everyone side by side, sorted by any skill. Analytics shows completion and scores by team and location." },
  { title: "Develop and reassess", text: "Turn any report into a development plan with goals and on-the-job actions, then reassess with fresh situations to see the change." },
];

const industries = [
  { scene: "Branch counter", name: "Banking & Financial Services", roles: "Branch Banking, Credit & Lending, Collections & Recovery", n: 6, slug: "banking-and-financial-services" },
  { scene: "Policy desk", name: "Insurance", roles: "Agency & Distribution, Underwriting, Claims", n: 6, slug: "insurance" },
  { scene: "Incident room", name: "IT & Software", roles: "Software Development, Quality Assurance, Cloud & DevOps", n: 7, slug: "it-and-software" },
  { scene: "Contact floor", name: "BPO / IT-enabled Services", roles: "Customer Support, Quality & Training, Workforce Management", n: 6, slug: "bpo-it-enabled-services" },
  { scene: "Store floor", name: "Retail & E-commerce", roles: "Store Sales, Merchandising & Buying, E-commerce Operations", n: 6, slug: "retail-and-e-commerce" },
  { scene: "Market beat", name: "FMCG & Consumer Goods", roles: "Sales & Distribution, Brand & Marketing, Supply Chain & Planning", n: 6, slug: "fmcg-and-consumer-goods" },
  { scene: "Shop floor", name: "Manufacturing", roles: "Production, Quality, Maintenance", n: 6, slug: "manufacturing" },
  { scene: "Lab & ward", name: "Pharma & Healthcare", roles: "Pharma Production, Quality Control & Assurance, Medical Sales", n: 6, slug: "pharma-and-healthcare" },
  { scene: "Control room", name: "Logistics & Supply Chain", roles: "Warehouse Operations, Transportation & Fleet, EXIM & Freight Forwarding", n: 6, slug: "logistics-and-supply-chain" },
  { scene: "Network hub", name: "Telecom", roles: "Network Operations, Field Engineering, Customer Service", n: 6, slug: "telecom" },
  { scene: "Front desk", name: "Hospitality & Travel", roles: "Front Office, Food & Beverage, Housekeeping", n: 6, slug: "hospitality-and-travel" },
  { scene: "Site office", name: "Real Estate & Construction", roles: "Site Execution, Planning & Quantity Surveying, Construction Safety", n: 6, slug: "real-estate-and-construction" },
  { scene: "Staff room", name: "Education & EdTech", roles: "Teaching, Admissions & Counselling, Instructional Design", n: 6, slug: "education-and-edtech" },
  { scene: "Grid control", name: "Energy & Utilities", roles: "Power Distribution, Renewable Energy, Billing & Customer Service", n: 6, slug: "energy-and-utilities" },
];

const platform = [
  { title: "People", text: "Candidates and employees in one directory, added one by one or from a spreadsheet." },
  { title: "Analytics", text: "Skill heatmaps by team and location, hiring funnels and progress over time." },
  { title: "Development plans", text: "Every gap becomes a development area with on-the-job actions, coaching and goals." },
  { title: "Reassessment", text: "Re-test with fresh situations and see the before-and-after for each skill." },
  { title: "Big Five personality", text: "A game-based measure of the five broad traits, on its own or with any bundle." },
  { title: "Private by design", text: "Each company sees only its own people. Answer keys never reach the browser." },
];

const prices = [
  { level: "Fresher", credits: "100", note: "credits per skill · 0 to 2 years" },
  { level: "Intermediate", credits: "200", note: "credits per skill · 3 to 7 years" },
  { level: "Senior", credits: "300", note: "credits per skill · 8+ years" },
  { level: "Big Five", credits: "500", note: "credits, fixed · any level" },
];

const btnOutlineLight = "inline-flex items-center rounded-[10px] border border-rule-strong bg-white px-5 py-3 text-[15px] font-semibold text-ink no-underline hover:border-navy";

export default function DecodePage() {
  return (
    <>
      <PageHero
        trail={trail}
        logo={<img src="/brand/decode-wordmark-white.svg" alt="Decode" width={200} height={58} className="h-auto w-[170px] md:w-[200px]" />}
        title="See how people really work,"
        accent="before you hire or promote them."
        lead="Short, animated job games for 85 roles across 14 industries. Candidates and employees handle real situations from the job; you get evidence for every skill, team analytics and a development plan."
        actions={[
          { label: "Create your account", href: signup, variant: "gold" },
          { label: "See pricing", href: "#pricing", variant: "outlineDark" },
        ]}
        aside={
          <div className="rounded-[18px] bg-white p-6 text-ink shadow-[0_24px_60px_rgba(0,0,0,0.35)] md:p-7">
            <p className="m-0 text-[12px] font-semibold tracking-[0.08em] text-ink-muted uppercase">Sample report</p>
            <div className="mt-4 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-[#EEF2F6] font-bold">AK</span>
              <div className="flex-1">
                <p className="m-0 font-semibold">Aditi K.</p>
                <p className="m-0 text-[13px] text-ink-muted">Credit Officer · Fresher · Banking</p>
              </div>
              <span className="rounded-full bg-[#E8F3EC] px-3 py-1 text-[13px] font-semibold text-green-ink">Strong fit</span>
            </div>
            <ul className="m-0 mt-5 list-none space-y-3.5 p-0">
              {sampleSkills.map((s) => (
                <li key={s.name}>
                  <div className="flex justify-between text-[14px]">
                    <span>{s.name}</span>
                    <span className="font-semibold tabular-nums">{s.score}</span>
                  </div>
                  <div className="mt-1.5 h-2 rounded-full bg-[#EEF2F6]">
                    <div className={`h-2 rounded-full ${s.score >= 70 ? "bg-brand-green" : "bg-amber"}`} style={{ width: `${s.score}%` }} />
                  </div>
                </li>
              ))}
            </ul>
            <p className="m-0 mt-5 rounded-[10px] border border-[#F4C20D]/50 bg-[#FEF7DA] px-4 py-3 text-[13px] leading-[1.6]">
              <strong>Development area:</strong> Customer Negotiation. Suggested: shadow a senior officer on 3 restructuring calls.
            </p>
            <p className="m-0 mt-3 text-[12px] text-ink-muted">Sample person and scores, for illustration.</p>
          </div>
        }
      />

      {/* How it works */}
      <Section tone="light">
        <Eyebrow icon="flow" color="goldInk">
          How it works
        </Eyebrow>
        <H2 className="mb-10 max-w-[760px] md:mb-12">From the job to the evidence, in six steps.</H2>
        <ol className="m-0 grid list-none gap-4 p-0 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-[12px] border border-rule bg-white p-6">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-navy text-[14px] font-bold text-white">{i + 1}</span>
              <h3 className="mt-4 text-[18px] font-semibold">{s.title}</h3>
              <p className="mt-2 leading-[1.7] text-ink-body">{s.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={howUrl} className={btnOutlineLight}>
            See it step by step
          </a>
        </div>
      </Section>

      {/* Industries */}
      <Section tone="light" className="border-t border-rule bg-cloud">
        <Eyebrow icon="briefcase" color="goldInk">
          Industries
        </Eyebrow>
        <H2 className="mb-3 max-w-[760px]">A game for every industry, a character for every role.</H2>
        <p className="mb-10 max-w-[680px] leading-[1.7] text-ink-body">
          Built on India&rsquo;s Sector Skill Council job standards and the rules that govern each industry.
        </p>
        <ul className="m-0 grid list-none gap-3 p-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {industries.map((d) => (
            <li key={d.name}>
              <a
                href={`${industriesUrl}#${d.slug}`}
                className="block h-full rounded-[12px] border border-rule bg-white p-5 text-ink no-underline transition-colors hover:border-navy"
              >
                <span className="text-[11px] font-semibold tracking-[0.08em] text-gold-ink uppercase">{d.scene}</span>
                <span className="mt-1.5 block font-semibold">{d.name}</span>
                <span className="mt-1.5 block text-[13px] leading-[1.6] text-ink-muted">
                  {d.n} roles · {d.roles}…
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Section>

      {/* Platform */}
      <Section tone="dark">
        <Eyebrow icon="grid" color="gold">
          One platform
        </Eyebrow>
        <H2 className="mb-10 text-white md:mb-12">Hire, develop and track, in one place.</H2>
        <ul className="m-0 grid list-none gap-4 p-0 md:grid-cols-2 lg:grid-cols-3">
          {platform.map((f) => (
            <li key={f.title} className="rounded-[12px] border border-navy-line bg-navy-raised p-6">
              <h3 className="text-[18px] font-semibold text-white">{f.title}</h3>
              <p className="mt-2 leading-[1.7] text-on-navy">{f.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Pricing */}
      <Section tone="light" id="pricing">
        <Eyebrow icon="chart" color="goldInk">
          Pricing
        </Eyebrow>
        <H2 className="mb-3">Pay per skill, only for what you assess.</H2>
        <p className="mb-10 max-w-[680px] leading-[1.7] text-ink-body">Buy credits, then spend them per candidate. 1 credit = ₹1. No subscription.</p>
        <ul className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4">
          {prices.map((p) => (
            <li key={p.level} className="rounded-[12px] border border-rule bg-white p-6">
              <p className="m-0 text-[12px] font-semibold tracking-[0.08em] text-gold-ink uppercase">{p.level}</p>
              <p className="m-0 mt-3 text-[44px] leading-none font-bold tracking-[-0.03em] tabular-nums">{p.credits}</p>
              <p className="m-0 mt-2 text-[14px] text-ink-muted">{p.note}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-[760px] leading-[1.7] text-ink-body">
          Example: hiring 20 bank tellers (Fresher, 5 skills) = 20 × 500 credits = ₹10,000. Credits are used only when you send, and come back
          if you cancel before someone starts.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={pricingUrl} className={btnOutlineLight}>
            More examples and a calculator
          </a>
        </div>
      </Section>

      <CtaBlock
        tone="dark"
        title="Ready to decode"
        accent="your next hire?"
        text="Create an account in a minute. Preview any game for free."
        actions={[
          { label: "Create account", href: signup, variant: "gold" },
          { label: "Log in", href: `${site.decode}/login`, variant: "outlineDark" },
        ]}
      />
    </>
  );
}

