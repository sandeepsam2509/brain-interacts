import type { Metadata } from "next";
import { CompareTable, CtaBlock, PageHero, SplitIntro, Stats } from "@/components/blocks";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Research Frameworks",
  description:
    "The models behind Corporate Brain: the Big Five, the public-domain International Personality Item Pool, and archetypes linked to six company goals.",
  alternates: { canonical: routes.scienceFrameworks },
};

export default function FrameworksPage() {
  return (
    <>
      <PageHero
        trail={[{ label: "Home", href: routes.home }, { label: "The Science", href: routes.science }, { label: "Research frameworks" }]}
        label={{ icon: "grid", text: "Research frameworks", color: "sky" }}
        title="The models behind"
        accent="every result."
        accentColor="sky"
        lead="Corporate Brain combines a widely validated personality model, a public-domain item pool, and a goal framework inspired by the balanced scorecard."
      />

      <CompareTable
        tone="light"
        label={{ icon: "grid", text: "Framework 01 · The Big Five", color: "goldInk" }}
        title="Five broad dimensions of personality."
        intro="Decades of research found that people describe each other along five broad dimensions. None is good or bad on its own — each has strengths in some work and costs in other work."
        headings={["Trait", "What it describes", "High scorers tend to", "Low scorers tend to"]}
        template="md:grid-cols-[1fr_1.2fr_1.2fr_1.2fr]"
        highlightLast={false}
        rows={[
          ["Openness", "Interest in ideas and new approaches", "Explore, imagine, question", "Prefer proven methods"],
          ["Conscientiousness", "Organisation and follow-through", "Plan, finish, keep standards", "Work flexibly, improvise"],
          ["Extraversion", "Energy from people and activity", "Speak up, take the lead", "Reflect first, work independently"],
          ["Agreeableness", "Concern for others and harmony", "Cooperate, support", "Challenge, give blunt feedback"],
          ["Emotional stability", "Calm under pressure", "Stay steady when things go wrong", "React strongly to stress"],
        ]}
      />

      <SplitIntro
        tone="dark"
        label={{ icon: "grid", text: "Framework 02 · The item pool", color: "sky" }}
        title="Public-domain, research-maintained questions."
        paragraphs={[
          "Our questions come from the Mini-IPIP, a 20-statement short form drawn from the International Personality Item Pool — a public collection of personality items maintained by researchers.",
          "Each trait is measured by four statements, some worded in reverse so that agreeing with everything doesn't inflate a score.",
        ]}
      />

      <Stats
        tone="light"
        label={{ icon: "grid", text: "Framework 03 · Company goals", color: "green" }}
        title="Archetypes linked to six company goals."
        intro="Similar in spirit to the balanced scorecard (Kaplan & Norton, 1992), each archetype is linked to the goals it tends to serve best. Corporate Brain uses this when suggesting who should lead or join a project."
        stats={[
          { value: "Financial", accent: "amber", small: true },
          { value: "Growth", accent: "blue", small: true },
          { value: "Customer", accent: "green", small: true },
          { value: "Operational", accent: "navy", small: true },
          { value: "Innovation", accent: "amber", small: true },
          { value: "Capability", accent: "blue", small: true },
        ]}
      />

      <CtaBlock
        tone="dark"
        title="See how it all fits together."
        text="Read how answers become scores and archetypes."
        actions={[{ label: "Psychometric methodologies", href: routes.scienceMethodology }]}
      />
    </>
  );
}
