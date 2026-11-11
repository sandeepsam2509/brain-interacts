/* eslint-disable @next/next/no-img-element -- small client logos */
import type { Metadata } from "next";
import Link from "next/link";
import { CtaBlock } from "@/components/blocks";
import { ButtonLink, Eyebrow, H2, Section } from "@/components/ui";
import { stories, storyHref } from "@/content/stories";
import { enquiryHref } from "@/lib/enquiries";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries, People Analytics by Sector",
  description:
    "Brain Interacts researches how work happens in banking, insurance, ITES, retail, FMCG, healthcare, logistics, telecom, education and hospitality, then builds people analytics products for each.",
  alternates: { canonical: routes.industries },
};

type Industry = { id: string; name: string; intro: string; roles: string[]; challenges: string[] };

const industries: Industry[] = [
  {
    id: "banking-and-financial-services",
    name: "Banking & Financial Services",
    intro: "Branch, credit and collections teams handle money, rules and customers at the same time. Small judgement calls carry real risk.",
    roles: ["Branch banking", "Credit & lending", "Collections & recovery", "Relationship management", "Operations & compliance"],
    challenges: ["Hiring at scale for branch and sales roles", "Checking judgement on KYC, credit and compliance", "High early attrition in front-line roles"],
  },
  {
    id: "insurance",
    name: "Insurance",
    intro: "Agency, underwriting and claims teams balance selling, risk and empathy, often far from head office.",
    roles: ["Agency & distribution", "Underwriting", "Claims", "Customer service", "Bancassurance"],
    challenges: ["Finding agents who stay and perform", "Consistent judgement in underwriting and claims", "Coaching a spread-out field force"],
  },
  {
    id: "ites",
    name: "ITES",
    intro: "Contact centres and IT-enabled services run on volume, quality and shift work. Fit for the role shows up in the first weeks.",
    roles: ["Customer support", "Quality & training", "Workforce management", "Team leads", "Back-office processing"],
    challenges: ["Fast, fair hiring for large batches", "Spotting future team leads early", "Reducing attrition in the first 90 days"],
  },
  {
    id: "retail-and-e-commerce",
    name: "Retail & E-commerce",
    intro: "Store, merchandising and online operations teams work at pace, with customers and stock changing by the hour.",
    roles: ["Store sales", "Store management", "Merchandising & buying", "E-commerce operations", "Customer care"],
    challenges: ["Seasonal hiring at speed", "Building store managers from within", "Keeping service consistent across locations"],
  },
  {
    id: "fmcg-and-consumer-goods",
    name: "FMCG & Consumer Goods",
    intro: "Sales, distribution and supply chain teams keep products moving through thousands of outlets and partners.",
    roles: ["Sales & distribution", "Brand & marketing", "Supply chain & planning", "Trade marketing", "Area and territory managers"],
    challenges: ["Hiring field sales who can work alone", "Matching managers to territories", "Developing first-time managers"],
  },
  {
    id: "healthcare-and-pharmaceuticals",
    name: "Healthcare & Pharmaceuticals",
    intro: "Production, quality and medical sales teams work under strict standards where care and accuracy come first.",
    roles: ["Pharma production", "Quality control & assurance", "Medical sales", "Patient care & front office", "Regulatory affairs"],
    challenges: ["Attention to detail in regulated work", "Hiring medical representatives who build trust", "Supporting staff under pressure"],
  },
  {
    id: "logistics-and-supply-chain",
    name: "Logistics & Supply Chain",
    intro: "Warehouse, fleet and freight teams solve problems against the clock, every shift.",
    roles: ["Warehouse operations", "Transportation & fleet", "EXIM & freight forwarding", "Planning & inventory", "Last-mile operations"],
    challenges: ["Finding supervisors who stay calm under pressure", "Safety and process discipline", "Staffing peaks and new sites"],
  },
  {
    id: "telecommunication",
    name: "Telecommunication",
    intro: "Network, field and customer teams keep services running across large areas, often with little supervision.",
    roles: ["Network operations", "Field engineering", "Customer service", "Retail & distribution", "Enterprise sales"],
    challenges: ["Technical problem-solving in the field", "Hiring for large customer service teams", "Upskilling as technology changes"],
  },
  {
    id: "education",
    name: "Education",
    intro: "Teaching, admissions and learning design teams shape outcomes for students, parents and institutions.",
    roles: ["Teaching", "Admissions & counselling", "Instructional design", "Academic operations", "EdTech sales"],
    challenges: ["Hiring teachers and counsellors who fit the culture", "Supporting staff wellbeing", "Developing academic leaders"],
  },
  {
    id: "hospitality-and-travel",
    name: "Hospitality & Travel",
    intro: "Front office, food and beverage and housekeeping teams create the guest experience in every interaction.",
    roles: ["Front office", "Food & beverage", "Housekeeping", "Travel sales & operations", "Guest relations"],
    challenges: ["Service mindset at hiring", "High turnover in guest-facing roles", "Growing supervisors from within"],
  },
];

const layers = [
  { n: "01", title: "Industry research", text: "We study each sector's roles, job standards, regulations and the situations people face on an ordinary day." },
  { n: "02", title: "Role and skill models", text: "Research becomes a clear model of what good looks like in each role, by level of experience." },
  { n: "03", title: "Evidence from behavior", text: "Decode's job games and our assessments show how people actually decide, not just what they say about themselves." },
  { n: "04", title: "People intelligence", text: "Corporate Brain brings the evidence together: archetypes, team fit, gaps and who is best placed to do what." },
  { n: "05", title: "Decisions in action", text: "Leaders hire, promote, staff projects and plan development with evidence, and track the change over time." },
];

const maturity = [
  { stage: "Intuition", text: "Decisions on gut feel, tenure and CVs." },
  { stage: "Measurement", text: "Assessments and scores, kept in silos." },
  { stage: "Insight", text: "Patterns across teams, roles and locations." },
  { stage: "Prediction", text: "Early signals for attrition, fit and readiness." },
  { stage: "Flourishing", text: "Every person in the right role, growing on a plan." },
];

const pillars = [
  { n: "01", title: "Research first", text: "Every product starts with fieldwork in the industry it serves." },
  { n: "02", title: "Built for the role", text: "Situations, skills and language that match the real job." },
  { n: "03", title: "Evidence, not labels", text: "We describe what people did and how it compares, never a verdict." },
  { n: "04", title: "Private by design", text: "Each organisation sees only its own people, under India's DPDP Act." },
  { n: "05", title: "Growth, not judgement", text: "Every gap becomes a development plan, and progress is reassessed." },
];

const tints = ["bg-[#FDECEC]", "bg-[#FEF7DA]", "bg-[#E8F3EC]", "bg-[#EEF2F6]", "bg-white"];

export default function IndustriesPage() {
  const named = stories.filter((s) => s.named);
  return (
    <>
      {/* Hero */}
      <Section tone="dark" className="relative overflow-hidden" innerClassName="relative pt-14 pb-16 md:pt-20 md:pb-24">
        <svg aria-hidden="true" viewBox="0 0 72 82" className="pointer-events-none absolute -right-10 bottom-0 h-[110%] max-h-[560px] opacity-25 md:right-10">
          <circle cx="36" cy="14" r="14" fill="#B91C1C" />
          <path d="M0 80L22 40H50L72 80H52L36 64L20 80Z" fill="#F4C20D" />
          <path d="M22 40H50L36 64Z" fill="#FFFFFF" />
        </svg>
        <p className="text-[12px] font-semibold tracking-[0.08em] text-amber uppercase">Industries</p>
        <h1 className="mt-4 max-w-[900px] text-[clamp(32px,5vw,64px)] leading-[1.02] font-extrabold tracking-[-0.035em]">
          From workforce data <span className="text-amber">to people intelligence.</span>
        </h1>
        <p className="mt-6 max-w-[640px] text-[16px] leading-[1.7] text-on-navy md:text-[18px]">
          We research how work really happens in ten industries, then build products and solutions that help their people and workplaces flourish.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <ButtonLink href={enquiryHref("demo")}>Talk to us about your industry</ButtonLink>
          <ButtonLink href="#industries" variant="outlineDark">
            Explore industries
          </ButtonLink>
        </div>
      </Section>

      {/* Narrative */}
      <Section tone="light">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <Eyebrow icon="spark" color="goldInk">
              Why it matters
            </Eyebrow>
            <H2>Every industry runs on people. Few can see how their people really work.</H2>
          </div>
          <div className="space-y-5 text-[16px] leading-[1.8] text-ink-body">
            <p>
              A bank branch, a contact floor and a factory shift ask very different things of people. Yet most hiring and promotion still relies on
              CVs, interviews and tenure: what people say and what they have done, not how they act when it matters.
            </p>
            <p>
              Generic tests don&rsquo;t fix this, because they don&rsquo;t know the job. That is why we start with research in each industry and build
              from there, so the evidence reflects the work your people actually do.
            </p>
          </div>
        </div>
      </Section>

      {/* Five layers */}
      <Section tone="light" className="border-t border-rule bg-cloud">
        <Eyebrow icon="flow" color="goldInk">
          How we work
        </Eyebrow>
        <H2 className="mb-10 max-w-[820px]">Our approach is built across five connected layers.</H2>
        <ol className="m-0 list-none space-y-3 p-0">
          {layers.map((l, i) => (
            <li
              key={l.n}
              className="grid items-center gap-3 rounded-[12px] border border-rule bg-white p-5 md:grid-cols-[80px_260px_1fr] md:gap-8 md:p-6"
              style={{ marginLeft: `${i * 2}%`, marginRight: `${(4 - i) * 2}%` }}
            >
              <span className="text-[28px] leading-none font-bold text-gold-ink tabular-nums">{l.n}</span>
              <h3 className="text-[19px] font-semibold">{l.title}</h3>
              <p className="m-0 leading-[1.7] text-ink-body">{l.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Maturity model */}
      <Section tone="dark">
        <Eyebrow icon="chart" color="gold">
          People intelligence model
        </Eyebrow>
        <H2 className="mb-10 max-w-[820px] text-white">Five stages, from gut feel to a workplace that flourishes.</H2>
        <ol className="m-0 grid list-none gap-3 p-0 md:grid-cols-5">
          {maturity.map((m, i) => (
            <li key={m.stage} className="relative rounded-[12px] border border-navy-line bg-navy-raised p-5">
              <div className="mb-4 flex h-1.5 gap-1">
                {[0, 1, 2, 3, 4].map((k) => (
                  <span key={k} className={`flex-1 rounded-full ${k <= i ? ["bg-brand-red", "bg-amber", "bg-amber", "bg-brand-green", "bg-brand-green"][i] : "bg-navy-line"}`} />
                ))}
              </div>
              <p className="m-0 text-[12px] font-semibold tracking-[0.08em] text-on-navy-muted uppercase">Stage {i + 1}</p>
              <h3 className="mt-1 text-[18px] font-semibold text-white">{m.stage}</h3>
              <p className="mt-2 text-[14px] leading-[1.6] text-on-navy">{m.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Industries */}
      <Section tone="light" id="industries">
        <Eyebrow icon="briefcase" color="goldInk">
          Industries
        </Eyebrow>
        <H2 className="mb-8">Ten industries we research and serve.</H2>
        <nav aria-label="Industries" className="mb-10">
          <ul className="m-0 flex list-none flex-wrap gap-2.5 p-0">
            {industries.map((i) => (
              <li key={i.id}>
                <a href={`#${i.id}`} className="block rounded-full border border-rule bg-cloud px-4 py-2 text-[14px] font-semibold text-ink no-underline hover:border-navy">
                  {i.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="grid gap-5 lg:grid-cols-2">
          {industries.map((i) => (
            <article key={i.id} id={i.id} className="scroll-mt-28 rounded-[18px] border border-rule bg-white p-6 md:p-8">
              <h3 className="text-[22px] font-bold tracking-[-0.01em]">{i.name}</h3>
              <p className="mt-2 leading-[1.7] text-ink-body">{i.intro}</p>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="m-0 text-[12px] font-semibold tracking-[0.08em] text-gold-ink uppercase">Roles we study</p>
                  <ul className="m-0 mt-2 list-none space-y-1.5 p-0 text-[14px] text-ink-body">
                    {i.roles.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="m-0 text-[12px] font-semibold tracking-[0.08em] text-gold-ink uppercase">Where we help</p>
                  <ul className="m-0 mt-2 list-none space-y-1.5 p-0 text-[14px] text-ink-body">
                    {i.challenges.map((c) => (
                      <li key={c} className="flex gap-2">
                        <span aria-hidden="true" className="font-bold text-green-ink">✓</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Case studies carousel */}
      <Section tone="light" className="border-t border-rule bg-cloud">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow icon="quote" color="goldInk">
              Customer stories
            </Eyebrow>
            <H2>Transforming workplaces with evidence.</H2>
          </div>
          <Link href={routes.stories} className="font-semibold text-ink">
            All customer stories →
          </Link>
        </div>
        <ul className="m-0 -mx-4 flex list-none snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 md:mx-0 md:px-0" aria-label="Customer stories, scroll sideways for more">
          {named.map((s) => (
            <li key={s.slug} className="w-[82%] shrink-0 snap-start sm:w-[46%] lg:w-[31%]">
              <Link href={storyHref(s)} className="flex h-full flex-col rounded-[18px] border border-rule bg-white p-6 text-ink no-underline transition-shadow hover:shadow-[0_18px_44px_rgba(15,23,42,0.12)]">
                <div className="flex h-12 items-center">
                  {s.logo ? <img src={s.logo} alt={`${s.client} logo`} className="h-full w-auto max-w-[160px] object-contain" /> : <span className="text-[18px] font-bold">{s.client}</span>}
                </div>
                <p className="mt-5 text-[12px] font-semibold tracking-[0.08em] text-gold-ink uppercase">{s.industry}</p>
                <h3 className="mt-1.5 text-[19px] leading-[1.3] font-semibold">{s.title}</h3>
                {s.stats?.[0] && (
                  <p className="mt-auto pt-6">
                    <span className="block text-[36px] leading-none font-bold tracking-[-0.03em] tabular-nums">{s.stats[0].value}</span>
                    <span className="mt-1 block text-[14px] text-ink-muted">{s.stats[0].label}</span>
                  </p>
                )}
                <span className="mt-5 text-[14px] font-bold">Read the story →</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* Statement */}
      <Section tone="dark" innerClassName="py-16 md:py-24">
        <p className="text-[12px] font-semibold tracking-[0.08em] text-amber uppercase">Our ambition</p>
        <p className="mt-5 max-w-[1000px] text-[clamp(26px,3.6vw,46px)] leading-[1.15] font-bold tracking-[-0.025em] text-white">
          To help every workplace we serve understand its people well enough that each person can do their best work, and keep growing.
        </p>
      </Section>

      {/* Pillars */}
      <Section tone="light">
        <Eyebrow icon="target" color="goldInk">
          What guides us
        </Eyebrow>
        <H2 className="mb-10">Five principles behind everything we build.</H2>
        <ul className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((p, i) => (
            <li key={p.n} className={`rounded-[18px] border border-rule p-6 ${tints[i]}`}>
              <span className="text-[34px] leading-none font-bold text-ink tabular-nums">{p.n}</span>
              <h3 className="mt-6 text-[18px] font-semibold">{p.title}</h3>
              <p className="mt-2 text-[14px] leading-[1.65] text-ink-body">{p.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBlock
        tone="dark"
        title="Put people intelligence"
        accent="at the core."
        text="Tell us about your industry and your teams. We'll show you what the evidence looks like for your roles."
        actions={[
          { label: "Reach out to us", href: enquiryHref("demo"), variant: "gold" },
          { label: "Explore Decode", href: routes.gamified, variant: "outlineDark" },
        ]}
      />
    </>
  );
}
