import type { Metadata } from "next";
import { CardGrid, CtaBlock, PageHero, Stats } from "@/components/blocks";
import { Eyebrow, H2, Section } from "@/components/ui";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Science Behind Corporate Brain",
  description:
    "Corporate Brain rests on the Big Five, the most widely studied model of personality, and on decades of research into what predicts performance at work.",
  alternates: { canonical: routes.science },
};

const brain = [
  { title: "Trait DNA", text: "91 behavioral traits, each profiled by how it shows up at high and low levels, its key interaction partners and its risk signals." },
  { title: "Interaction Matrix", text: "All 4,095 possible trait pairings, classified into eleven interaction types, from Amplification to Risk Multiplier." },
  { title: "AI Narrative Engine", text: "AI as a constrained reasoning tool, not a content generator: it explains the interactions that matter most in a profile." },
];

const references = [
  ["Barrick & Mount (1991). The Big Five personality dimensions and job performance.", "Personnel Psychology"],
  ["Bell (2007). Deep-level composition variables as predictors of team performance.", "Journal of Applied Psychology"],
  ["Donnellan, Oswald, Baird & Lucas (2006). The Mini-IPIP scales.", "Psychological Assessment"],
  ["Goldberg (1992). The development of markers for the Big-Five factor structure.", "Psychological Assessment"],
  ["Schmidt & Hunter (1998). The validity and utility of selection methods.", "Psychological Bulletin"],
];

export default function SciencePage() {
  return (
    <>
      <PageHero
        trail={[{ label: "Home", href: routes.home }, { label: "The Science" }]}
        label={{ icon: "grid", text: "The science behind Corporate Brain", color: "gold" }}
        title="Built on research."
        accent="Honest about limits."
        lead="Corporate Brain rests on the Big Five — the most widely studied model of personality — and on decades of research into what predicts performance at work."
        // Points at the research brief PDF once it is supplied.
        actions={[{ label: "Read the research brief", href: routes.resources }]}
      />

      <Stats
        tone="light"
        label={{ icon: "chart", text: "At a glance", color: "green" }}
        title="The method in four numbers."
        stats={[
          { value: "20", text: "Short statements in the personality assessment", accent: "amber" },
          { value: "5", text: "Big Five traits, each scored 0–100", accent: "blue" },
          { value: "10", text: "Base working-style archetypes", accent: "green" },
          { value: "60", text: "The cut-off between a High and Low trait score", accent: "navy" },
        ]}
      />

      <Section tone="light" className="border-t border-rule">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow icon="spark" color="link">
              The BRAIN framework · coming to Corporate Brain
            </Eyebrow>
            <H2 className="mb-6">Traits don&apos;t act alone. Behavior lives in how they interact.</H2>
            <p className="text-[17px] leading-[1.75] text-ink-body">
              High ambition means one thing next to strong self-regulation and something very different next to weak
              self-regulation. BRAIN — the Behavioural Reasoning and Interaction Network — is Brain Interacts&apos; architecture
              for reading those combinations systematically.
            </p>
          </div>
          <ul className="m-0 list-none p-0">
            {brain.map((item) => (
              <li key={item.title} className="border-b border-rule py-5">
                <strong className="block text-lg">{item.title}</strong>
                <span className="mt-1 block leading-[1.7] text-ink-body">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CardGrid
        tone="dark"
        label={{ icon: "flow", text: "Go deeper", color: "sky" }}
        title="Three ways into the science."
        cards={[
          { tag: "01", title: "Scientific validity", rule: "gold", text: "What the research supports, how reliable a short form is, and the limits we ask you to respect.", link: { label: "Read more", href: routes.scienceValidity, accent: "gold" } },
          { tag: "02", title: "Research frameworks", rule: "sky", text: "The Big Five, the International Personality Item Pool, and how archetypes link to company goals.", link: { label: "Read more", href: routes.scienceFrameworks, accent: "sky" } },
          { tag: "03", title: "Psychometric methodologies", rule: "lime", text: "How answers become scores, scores become archetypes, and archetypes become suggestions.", link: { label: "Read more", href: routes.scienceMethodology, accent: "lime" } },
        ]}
      />

      <Section tone="light">
        <Eyebrow icon="target" color="goldInk">
          References
        </Eyebrow>
        <H2 className="mb-8">Key sources.</H2>
        <ul className="m-0 flex max-w-[860px] list-none flex-col gap-4 p-0 leading-[1.7] text-ink-body">
          {references.map(([text, journal]) => (
            <li key={text}>
              {text} <em>{journal}</em>.
            </li>
          ))}
        </ul>
      </Section>

      <CtaBlock
        tone="dark"
        title="Want the full picture?"
        text="Download our research brief on archetypes and the research behind them."
        actions={[
          { label: "Download the brief", href: routes.resources },
          { label: "Talk to our team", href: routes.contact, variant: "outlineDark" },
        ]}
      />
    </>
  );
}
