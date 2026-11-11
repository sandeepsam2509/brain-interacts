import type { Metadata } from "next";
import { CtaBlock, PageHero } from "@/components/blocks";
import { Eyebrow, H2, Section } from "@/components/ui";
import { enquiryHref } from "@/lib/enquiries";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries, People Analytics by Sector",
  description:
    "Brain Interacts researches how work happens in banking, insurance, ITES, retail, FMCG, healthcare, logistics, telecom, education and hospitality, then builds people analytics products for each.",
  alternates: { canonical: routes.industries },
};

const trail = [{ label: "Home", href: routes.home }, { label: "Industries" }];

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

const approach = [
  { title: "Study the work", text: "Our research team maps the roles, job standards, rules and day-to-day situations in each industry." },
  { title: "Build for the role", text: "We turn that research into assessments, analytics and solutions that reflect the real job, not a generic test." },
  { title: "Help people flourish", text: "Organisations get clear evidence about their people; people get a fair chance to show how they work and a plan to grow." },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        trail={trail}
        title="People analytics,"
        accent="built for your industry."
        lead="Every industry hires, trains and leads differently. Brain Interacts researches how work really happens in each one, then builds products and solutions, like Corporate Brain and Decode, that help its people and workplaces flourish."
        actions={[
          { label: "Talk to us about your industry", href: enquiryHref("demo"), variant: "gold" },
          { label: "Explore Decode", href: routes.gamified, variant: "outlineDark" },
        ]}
      />

      {/* Jump list */}
      <Section tone="light" innerClassName="py-8 md:py-10">
        <nav aria-label="Industries">
          <ul className="m-0 flex list-none flex-wrap gap-2.5 p-0">
            {industries.map((i) => (
              <li key={i.id}>
                <a
                  href={`#${i.id}`}
                  className="block rounded-full border border-rule bg-cloud px-4 py-2 text-[14px] font-semibold text-ink no-underline hover:border-navy"
                >
                  {i.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Section>

      {/* Approach */}
      <Section tone="light" className="border-t border-rule">
        <Eyebrow icon="flow" color="goldInk">
          Our approach
        </Eyebrow>
        <H2 className="mb-10 max-w-[760px]">Research first. Then products that fit the work.</H2>
        <ol className="m-0 grid list-none gap-4 p-0 md:grid-cols-3">
          {approach.map((a, n) => (
            <li key={a.title} className="rounded-[12px] border border-rule bg-white p-6">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-navy text-[14px] font-bold text-white">{n + 1}</span>
              <h3 className="mt-4 text-[18px] font-semibold">{a.title}</h3>
              <p className="mt-2 leading-[1.7] text-ink-body">{a.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Industries */}
      <Section tone="light" className="border-t border-rule bg-cloud">
        <Eyebrow icon="briefcase" color="goldInk">
          Industries
        </Eyebrow>
        <H2 className="mb-10">Ten industries we research and serve.</H2>
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
                        <span aria-hidden="true" className="font-bold text-green-ink">
                          ✓
                        </span>
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

      {/* Products */}
      <Section tone="dark">
        <Eyebrow icon="grid" color="gold">
          Products
        </Eyebrow>
        <H2 className="mb-10 text-white">Two products, one goal: workplaces that flourish.</H2>
        <div className="grid gap-4 md:grid-cols-2">
          <a href={routes.corporateBrain} className="block rounded-[12px] border border-navy-line bg-navy-raised p-6 text-white no-underline hover:border-on-navy-muted">
            <h3 className="text-[20px] font-semibold">Corporate Brain →</h3>
            <p className="mt-2 leading-[1.7] text-on-navy">People analytics and task intelligence: who should lead, who should take each task, and how to support each person.</p>
          </a>
          <a href={routes.gamified} className="block rounded-[12px] border border-navy-line bg-navy-raised p-6 text-white no-underline hover:border-on-navy-muted">
            <h3 className="text-[20px] font-semibold">Decode →</h3>
            <p className="mt-2 leading-[1.7] text-on-navy">Short, animated job games that show how candidates and employees handle real situations from their industry.</p>
          </a>
        </div>
      </Section>

      <CtaBlock
        tone="dark"
        title="Don't see your industry?"
        accent="Let's talk."
        text="We are always researching new sectors and roles. Tell us about your teams and we'll show you what fits."
        actions={[{ label: "Contact us", href: routes.contact, variant: "gold" }]}
      />
    </>
  );
}
