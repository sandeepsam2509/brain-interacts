import type { Metadata } from "next";
import { CardGrid, CtaBlock, PageHero, SplitIntro } from "@/components/blocks";
import { Eyebrow, H2, Section } from "@/components/ui";
import { routes, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Brain Interacts builds a behavioral layer that connects leadership, managers and employees, turning working style, skills and everyday work into clear suggestions.",
  alternates: { canonical: routes.about },
};

const fitProblems = [
  { lead: "The right person", rest: "on the wrong work.", color: "text-gold" },
  { lead: "The same strength", rest: "three times in one team — and a missing one.", color: "text-sky" },
  { lead: "A great specialist", rest: "managed like a generalist.", color: "text-lime" },
];

const principles = [
  { title: "Archetypes are shorthand, not labels", text: "They describe how someone usually works — not what they can learn or do.", color: "text-gold-ink" },
  { title: "Look at the mix, not just the individual", text: "Seeing a team's make-up lets managers add what's missing instead of hiring more of the same.", color: "text-ink-link" },
  { title: "Every suggestion shows its reasons", text: "So it can be understood, questioned and overruled.", color: "text-green-ink" },
  { title: "Development, not only selection", text: "Results guide growth and coaching, and people can retake assessments to see how they've changed.", color: "text-gold-ink" },
  { title: "Fair by default", text: "Personality alone should never decide who is hired, promoted or let go.", color: "text-ink-link" },
  { title: "Your people's data stays yours", text: "A separate database for every customer, results shown by role, and data that can be corrected or deleted on request.", color: "text-green-ink" },
];

// Photos and names still to be supplied; placeholders mirror the design.
const team = [
  { name: "[Name]", role: "[Founder & CEO]" },
  { name: "[Name]", role: "[Role]" },
  { name: "Sandeep Kumar", role: "VP of Sales & Marketing" },
  { name: "[Name]", role: "[Role]" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        trail={[{ label: "Home", href: routes.home }, { label: "About us" }]}
        label={{ icon: "spark", text: "About us", color: "lime" }}
        title="Most performance problems are really"
        accent="fit problems."
      >
        <div className="mt-12 grid gap-6 border-t border-navy-line pt-8 text-lg leading-[1.6] text-on-navy-soft md:grid-cols-3 md:gap-8">
          {fitProblems.map((p) => (
            <p key={p.lead}>
              <span className={`font-bold ${p.color}`}>{p.lead}</span> {p.rest}
            </p>
          ))}
        </div>
        <p className="mt-10 max-w-[680px] text-[17px] leading-[1.7] font-semibold text-white md:text-[19px]">
          We started Brain Interacts because these problems are fixable — once you can actually see them.
        </p>
      </PageHero>

      <SplitIntro
        tone="light"
        label={{ icon: "target", text: "What we believe", color: "goldInk" }}
        title="How people work and what they can do are both measurable."
        paragraphs={[
          "And a company makes better decisions when it can see both, side by side with its goals.",
          "So we built a behavioral layer that connects leadership, managers and employees. It turns working style, skills and everyday interactions into clear suggestions — who should lead a project, who could take a task, and how to support each person.",
        ]}
        emphasis="The software ranks and explains. People decide."
      />

      <CardGrid
        tone="dark"
        label={{ icon: "flow", text: "How we do it", color: "sky" }}
        title="Grounded in research, written for the people who use it."
        cards={[
          { title: "Working style", rule: "gold", text: "A short assessment built on the Big Five — the most widely studied model of personality — gives every person a main and secondary archetype." },
          { title: "Skills", rule: "sky", text: "A foundation-level technical check for each function shows where knowledge is strong, working or needs development." },
          { title: "Company goals", rule: "lime", text: "Each archetype links to the goals it tends to serve best — financial, growth, customer, operational, innovation and capability." },
        ]}
      />

      <Section tone="light">
        <Eyebrow icon="target" color="green">
          Our principles
        </Eyebrow>
        <H2 className="mb-10 md:mb-14">What we hold ourselves to.</H2>
        <ol className="m-0 grid list-none gap-x-16 p-0 lg:grid-cols-2">
          {principles.map((p, i) => (
            <li key={p.title} className="flex gap-5 border-b border-rule py-6">
              <span className={`pt-1 font-mono text-sm font-medium ${p.color}`}>{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="mt-1.5 leading-[1.7] text-ink-body">{p.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <CardGrid
        tone="dark"
        label={{ icon: "grid", text: "What we build", color: "gold" }}
        title="One company, a growing family of products."
        cards={[
          {
            title: "Corporate Brain",
            text: "Working style, skills, projects and tasks in one place — for HR, founders and executive teams.",
            link: { label: "Explore", href: routes.corporateBrain },
          },
          {
            title: (
              <>
                FinCheck <span className="ml-1 align-middle font-mono text-xs font-medium text-sky">COMING SOON</span>
              </>
            ),
            text: "Behavioral analysis for neo-banks, NBFCs and banks.",
            link: { label: "Join the waitlist", href: `${routes.finCheck}#early-access`, accent: "sky" },
          },
          {
            title: "Gamified Assessments",
            text: "Game-based assessments that show how people decide under real conditions.",
            link: { label: "Explore", href: routes.gamified, accent: "gold" },
          },
        ]}
      />

      <Section tone="light">
        <Eyebrow icon="people" color="goldInk">
          The team
        </Eyebrow>
        <H2 className="mb-10 md:mb-14">The people behind Brain Interacts.</H2>
        <ul className="m-0 grid list-none grid-cols-2 gap-6 p-0 md:gap-8 lg:grid-cols-4">
          {team.map((person, i) => (
            <li key={i}>
              <div className="flex aspect-square items-center justify-center rounded-2xl bg-[#E7EBF1] text-sm text-ink-muted">[PHOTO]</div>
              <h3 className="mt-4 text-[19px] font-bold">{person.name}</h3>
              <p className="mt-1 text-[15px] text-ink-muted">{person.role}</p>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBlock
        tone="dark"
        title="Let's build teams that"
        accent="fit the work."
        text="See how Corporate Brain reads your team — and what it suggests next."
        actions={[
          { label: "Get a demo", href: routes.demo },
          { label: site.email, href: `mailto:${site.email}`, variant: "outlineDark" },
        ]}
      />
    </>
  );
}
