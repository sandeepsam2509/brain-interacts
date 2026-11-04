import type { Metadata } from "next";
import Image from "next/image";
import { CardGrid, CtaBlock, PageHero, SplitIntro } from "@/components/blocks";
import { Eyebrow, H2, Section } from "@/components/ui";
import { enquiryHref } from "@/lib/enquiries";
import { routes } from "@/lib/site";

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

const team = [
  { name: "Srishti Sharma", role: "Co-Founder and Chief Research Officer", photo: "/team/srishti-sharma.webp" },
  { name: "Sandeep Kumar", role: "Co-Founder and VP of Sales and Marketing", photo: "/team/sandeep-kumar.webp" },
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
          { title: "Working style", rule: "gold", text: "A short assessment built on the Big Five — the most widely studied model of personality — gives every person a primary and secondary archetype, matched to ten Corporate Brain archetypes." },
          { title: "Skills", rule: "sky", text: "A foundation-level technical check for each function shows where knowledge is strong, working or needs development." },
          { title: "Company goals", rule: "lime", text: "Leadership picks a goal — financial, growth, customer, operational, innovation or capability — and the platform recommends how each team and person should pursue it." },
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
            link: { label: "Explore FinCheck", href: routes.finCheck, accent: "sky" },
          },
          {
            title: "Gamified Assessments",
            text: "Game-based assessments that show how people decide under real conditions.",
            link: { label: "Explore", href: routes.gamified, accent: "gold" },
          },
        ]}
      />

      <Section tone="light" id="team" className="scroll-mt-20">
        <Eyebrow icon="people" color="goldInk">
          The team
        </Eyebrow>
        <H2 className="mb-10 md:mb-14">The people behind Brain Interacts.</H2>
        <ul className="m-0 grid max-w-[720px] list-none grid-cols-1 gap-10 p-0 sm:grid-cols-2 md:gap-8">
          {team.map((person) => (
            <li key={person.name}>
              <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-rule">
                <Image
                  src={person.photo}
                  alt={`${person.name}, ${person.role}`}
                  width={800}
                  height={1000}
                  sizes="(min-width: 640px) 340px, 100vw"
                  className="h-auto w-full"
                />
              </div>
              <h3 className="mt-5 text-[21px] font-bold">{person.name}</h3>
              <p className="mt-1 text-[15px] text-ink-muted">{person.role}</p>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBlock
        tone="dark"
        title="Let's build teams that"
        accent="fit the work."
        text="Consultancies, HR tech platforms and research partners: let's talk about building better teams together."
        actions={[
          { label: "Partner with us", href: enquiryHref("partnership") },
          { label: "Meet the founders", href: "#team", variant: "outlineDark" },
        ]}
      />
    </>
  );
}
