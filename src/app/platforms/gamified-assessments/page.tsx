import type { Metadata } from "next";
import { CardGrid, CtaBlock, PageHero } from "@/components/blocks";
import { Eyebrow, H2, Section } from "@/components/ui";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gamified Assessments — Game-Based Hiring Simulations",
  description:
    "Short, game-based simulations that show how candidates think, recover and solve problems, not just what they say about themselves.",
  alternates: { canonical: routes.gamified },
};

const trail = [{ label: "Home", href: routes.home }, { label: "Products", href: routes.corporateBrain }, { label: "Gamified Assessments" }];

const questionnaires = [
  'Easy to answer the "right" way',
  "Score the final answer, not the thinking",
  "Text-heavy and stressful for many candidates",
  "Answer keys leak online",
];
const games = [
  "Harder to fake — we watch what people do",
  "Measure the process: hesitation, pathing, recovery",
  "Visual and engaging — candidates want to finish",
  "Scenarios vary, so there's nothing to memorize",
];

const stats = [
  { value: "~20", unit: "min", text: "One simulation, instead of long screening questionnaires", color: "text-[#B07F0E]" },
  { value: "3", text: "Kinds of evidence: personality, skills and behavior", color: "text-ink-link" },
  { value: "4", text: "Role tracks: sales, HR, tech and operations", color: "text-green-ink" },
  { value: "5", text: "Big Five traits mapped from play", color: "text-navy" },
];

export default function GamifiedPage() {
  return (
    <>
      <PageHero
        trail={trail}
        label={{ icon: "grid", text: "Gamified assessments", color: "gold" }}
        title="Stop testing how candidates answer."
        accent="See how they act."
        lead="Short, game-based simulations that show how people think, recover and solve problems — not just what they say about themselves."
        actions={[
          { label: "Get a demo", href: routes.demo, variant: "gold" },
          { label: "See the science", href: routes.science, variant: "outlineDark" },
        ]}
      />

      <Section tone="light">
        <Eyebrow icon="target" color="link">
          Why games
        </Eyebrow>
        <H2 className="mb-10 max-w-[820px] md:mb-14">Questionnaires capture answers. Games capture behavior.</H2>
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h3 className="mb-2 font-mono text-sm font-medium text-ink-muted uppercase">Static questionnaires</h3>
            <ul className="m-0 list-none p-0">
              {questionnaires.map((item) => (
                <li key={item} className="flex gap-3 border-b border-rule py-4 text-ink-body">
                  <span aria-hidden="true" className="text-ink-muted">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-mono text-sm font-medium text-ink-link uppercase">Gamified assessments</h3>
            <ul className="m-0 list-none p-0">
              {games.map((item) => (
                <li key={item} className="flex gap-3 border-b border-rule py-4 font-semibold">
                  <span aria-hidden="true" className="text-green-ink">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <CardGrid
        tone="dark"
        label={{ icon: "flow", text: "The candidate journey", color: "lime" }}
        title="Three stages. About 20 minutes."
        cards={[
          { tag: "Stage 01", title: "Baseline", rule: "gold", text: "Candidates explore a low-stakes digital world while the engine maps their Big Five traits from small decisions." },
          { tag: "Stage 02", title: "Role simulation", rule: "sky", text: "They move into a scenario built for the role you're hiring for — see the four tracks below." },
          { tag: "Stage 03", title: "Profile", rule: "lime", text: "Recruiters get a clear behavioral profile in Corporate Brain — no spreadsheets." },
        ]}
      />

      <CardGrid
        tone="light"
        columns={4}
        label={{ icon: "briefcase", text: "Role tracks", color: "goldInk" }}
        title="A simulation for every function."
        cards={[
          { title: "Sales & BD", text: "Negotiate with AI personas. Measures concessions, leverage and listening." },
          { title: "HR & management", text: "Handle team burnout and resourcing. Measures empathy and efficiency." },
          { title: "Tech & engineering", text: "Debug visual logic. Measures systematic vs trial-and-error problem-solving." },
          { title: "Operations", text: "Run high-pressure logistics. Measures crisis handling and priority switching." },
        ]}
      />

      <CardGrid
        tone="dark"
        columns={4}
        label={{ icon: "chart", text: "Under the hood", color: "sky" }}
        title="We score the process, not the final click."
        cards={[
          { title: "Recovery latency", subtitle: "Resilience", subtitleAccent: "gold", text: "How fast they get back on track after a setback." },
          { title: "Concession pacing", subtitle: "Influence", subtitleAccent: "sky", text: "Whether they give value away early or hold ground." },
          { title: "Exploration", subtitle: "Curiosity & risk", subtitleAccent: "lime", text: "Whether they test a system's limits or follow the path." },
          { title: "Debugging method", subtitle: "Conscientiousness", subtitleAccent: "white", text: "Whether they guess at fixes or trace the root cause." },
        ]}
      />

      <Section tone="light">
        <Eyebrow icon="chart" color="green">
          By the numbers
        </Eyebrow>
        <H2 className="mb-10 md:mb-14">Fast for candidates. Deep for recruiters.</H2>
        <dl className="m-0 grid gap-10 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.text} className="border-t border-rule pt-6">
              <dt className={`text-[clamp(52px,5vw,72px)] leading-none font-extrabold tracking-[-0.03em] ${s.color}`}>
                {s.value}
                {s.unit && <span className="text-[0.4em]">{s.unit}</span>}
              </dt>
              <dd className="m-0 mt-3 leading-[1.7] text-ink-body">{s.text}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-12 border-t border-rule pt-6 text-[15px] leading-[1.7] text-ink-muted">
          Results are one input to a hiring decision — best used alongside interviews, work samples and references. Profiles sync to
          your ATS through the Corporate Brain API.
        </p>
      </Section>

      <CtaBlock
        tone="dark"
        title="Stop guessing who your candidates are."
        accent="Let them show you."
        actions={[
          { label: "Get a demo", href: routes.demo },
          { label: "See the science", href: routes.science, variant: "outlineDark" },
        ]}
      />
    </>
  );
}
