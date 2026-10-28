import type { Metadata } from "next";
import { CtaBlock, PageHero } from "@/components/blocks";
import { Section, type Tone } from "@/components/ui";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Customer Stories",
  description:
    "How facilities, manufacturing, IT and automation companies use Brain Interacts products to align teams and assign work. Client names are kept confidential.",
  alternates: { canonical: routes.stories },
};

type Story = { industry: string; color: string; title: string; who: string; challenge: string; how: string; result: string };

// Clients are anonymised. Each result is confirmed with the client before it is published.
const PENDING = "[To be confirmed with the client before publishing]";
const stories: Story[] = [
  {
    industry: "Facilities management",
    color: "text-gold-ink",
    title: "Staffing large, distributed teams around strengths",
    who: "A leading national facilities management firm with a large frontline and supervisory workforce across many client sites.",
    challenge: "Site supervisors were promoted for reliability, not leadership, and team performance varied widely from site to site.",
    how: "Corporate Brain mapped working styles across supervisors and site managers; Root Cause Analytics compared high- and low-performing sites.",
    result: PENDING,
  },
  {
    industry: "Manufacturing",
    color: "text-sky",
    title: "Building balanced plant leadership teams",
    who: "A global automotive manufacturer's India operations.",
    challenge: "Plant and project teams were stacked with similar, execution-heavy profiles, and change initiatives stalled.",
    how: "The team composition view showed which working styles each leadership team was missing; managers used task suggestions to staff improvement projects.",
    result: PENDING,
  },
  {
    industry: "Manufacturing",
    color: "text-green-ink",
    title: "Promoting the right people into supervision",
    who: "A large Indian manufacturing group with multiple plants.",
    challenge: "Strong operators were being promoted into supervisor roles that did not suit them.",
    how: "Gamified Assessments and Corporate Brain profiles gave HR a structured view of leadership potential, alongside interviews and performance records.",
    result: PENDING,
  },
  {
    industry: "IT services",
    color: "text-gold",
    title: "Assigning work by strengths across delivery teams",
    who: "A top-tier global IT services enterprise.",
    challenge: "Project allocation relied on availability, leaving specialists on generalist work and key people overloaded.",
    how: "Brain suggests ranked the best and second-best person for each workstream by skills, working style and workload, with reasons managers reviewed.",
    result: PENDING,
  },
  {
    industry: "IT",
    color: "text-ink-link",
    title: "Understanding why a high-growth team lost momentum",
    who: "A fast-growing technology services company.",
    challenge: "Delivery slipped after rapid hiring, and exit interviews gave no clear reason.",
    how: "A Corporate Culture Study and Root Cause Analytics traced the slowdown to manager–team style mismatches and unclear handoffs.",
    result: PENDING,
  },
  {
    industry: "Industrial automation",
    color: "text-lime",
    title: "Aligning engineering and customer teams",
    who: "An industrial automation and smart-infrastructure company.",
    challenge: "Engineering and customer-facing teams worked in silos, slowing installations and handovers.",
    how: "Corporate Brain mapped both teams' working styles, and Leadership seats tracked alignment against operational and customer goals.",
    result: PENDING,
  },
];

function StoryBlock({ story, tone }: { story: Story; tone: Tone }) {
  const body = tone === "dark" ? "text-on-navy" : "text-ink-body";
  const rule = tone === "dark" ? "border-navy-line" : "border-rule";
  const rows = [
    ["Challenge", story.challenge],
    ["How they used Brain", story.how],
    ["Result", story.result],
  ];
  return (
    <Section tone={tone}>
      <article className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div>
          <p className={`font-mono text-[13px] uppercase ${story.color}`}>{story.industry}</p>
          <h2 className="mt-3 text-[clamp(28px,3vw,40px)] leading-[1.12] font-extrabold tracking-[-0.02em]">{story.title}</h2>
          <p className={`mt-4 leading-[1.7] ${body}`}>{story.who}</p>
        </div>
        <dl className="m-0">
          {rows.map(([label, text]) => (
            <div key={label} className={`grid gap-1 border-b py-5 md:grid-cols-[200px_1fr] md:gap-6 ${rule}`}>
              <dt className="font-bold">{label}</dt>
              <dd className={`m-0 leading-[1.7] ${body} ${text === PENDING ? "italic" : ""}`}>{text}</dd>
            </div>
          ))}
        </dl>
      </article>
    </Section>
  );
}

export default function CustomerStoriesPage() {
  return (
    <>
      <PageHero
        trail={[{ label: "Home", href: routes.home }, { label: "Customer Stories" }]}
        label={{ icon: "quote", text: "Customer stories", color: "lime" }}
        title="Teams making people decisions"
        accent="with evidence."
        accentColor="lime"
        lead="How facilities, manufacturing, IT and automation companies use Brain products to align teams and assign work. Client names are kept confidential."
        actions={[{ label: "Get a demo", href: routes.demo }]}
      />
      {stories.map((story, i) => (
        <StoryBlock key={story.title} story={story} tone={i % 2 === 0 ? "light" : "dark"} />
      ))}
      <CtaBlock
        tone="light"
        title="Want results like these?"
        text="See how Corporate Brain would read your teams."
        actions={[{ label: "Get a demo", href: routes.demo, variant: "navy" }]}
      />
    </>
  );
}
