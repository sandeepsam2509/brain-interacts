import type { Metadata } from "next";
import { CardGrid, CompareTable, CtaBlock, PageHero } from "@/components/blocks";
import { Eyebrow, H2, Section } from "@/components/ui";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Psychometric Methodologies",
  description:
    "How Corporate Brain turns a few minutes of answers into scores, archetypes and recommendations, with people reviewing every step.",
  alternates: { canonical: routes.scienceMethodology },
};

const archetypes = [
  ["Driver", "H-H-H-H-H"],
  ["Operator", "L-H-H-H-H"],
  ["Integrator", "H-H-L-H-H"],
  ["Dominant", "H-H-H-L-H"],
  ["Builder", "H-H-L-L-H"],
  ["Visionary", "H-L-H-H-H"],
  ["Rainmaker", "H-L-H-L-H"],
  ["Creator", "H-L-L-H-H"],
  ["Supporter", "L-H-L-H-H"],
  ["Executor", "L-H-L-L-H"],
];

export default function MethodologyPage() {
  return (
    <>
      <PageHero
        trail={[{ label: "Home", href: routes.home }, { label: "The Science", href: routes.science }, { label: "Psychometric methodologies" }]}
        label={{ icon: "grid", text: "Psychometric methodologies", color: "lime" }}
        title="From answers"
        accent="to suggestions."
        accentColor="lime"
        lead="Exactly how Corporate Brain turns a few minutes of answers into scores, archetypes and recommendations — with people reviewing every step."
      />

      <CardGrid
        tone="light"
        columns={4}
        label={{ icon: "flow", text: "Scoring", color: "link" }}
        title="How a score is produced."
        cards={[
          { tag: "Step 01", title: "Rate", rule: "amber", text: "Each statement is rated from 1 (very inaccurate) to 5 (very accurate)." },
          { tag: "Step 02", title: "Reverse", rule: "blue", text: "Reverse-worded statements are flipped." },
          { tag: "Step 03", title: "Average", rule: "green", text: "The four answers per trait are averaged and converted to 0–100." },
          { tag: "Step 04", title: "Classify", rule: "navy", text: "60 or more is High, below 60 is Low. Within 7 points of 60 is marked borderline." },
        ]}
      />

      <Section tone="dark">
        <Eyebrow icon="people" color="gold">
          Archetypes
        </Eyebrow>
        <H2 className="mb-5">32 patterns, 10 base archetypes.</H2>
        <p className="mb-10 max-w-[760px] text-[17px] leading-[1.75] text-on-navy">
          Each trait is High (H) or Low (L), read in the order Openness, Conscientiousness, Extraversion, Agreeableness, Emotional
          stability. Five traits with two settings give 32 patterns; the other 22 are shown as the nearest base archetype plus a
          secondary one.
        </p>
        <dl className="m-0 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-5">
          {archetypes.map(([name, code]) => (
            <div key={name} className="border-t border-navy-line pt-4">
              <dt className="text-lg font-bold">{name}</dt>
              <dd className="m-0 mt-1 font-mono text-sm text-on-navy">{code}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-10 max-w-[760px] text-[15px] leading-[1.7] text-on-navy-muted">
          Archetypes are Corporate Brain&apos;s own working model, built from Big Five patterns. They are not an independently
          validated typology — use them as shorthand for a style, not a label for a person.
        </p>
      </Section>

      <CompareTable
        tone="light"
        label={{ icon: "chart", text: "Technical assessment", color: "green" }}
        title="Skills, scored in three bands."
        headings={["Band", "Score", "Meaning"]}
        template="md:grid-cols-[1fr_1fr_2fr]"
        highlightLast={false}
        rows={[
          ["Strong", "75 or more", "Confident on the foundations; can guide others"],
          ["Working", "50 to 74", "Knows the basics; benefits from practice"],
          ["Gap", "Below 50", "A clear development need — a training signal, not a verdict"],
        ]}
      />

      <CardGrid
        tone="dark"
        columns={4}
        label={{ icon: "spark", text: "Suggestions", color: "sky" }}
        title="The platform ranks and explains. A person decides."
        cards={[
          { title: "Projects", rule: "gold", text: "A lead and members from goal, archetype, skills and workload." },
          { title: "Tasks", rule: "sky", text: "Best and second-best person by skill fit and capacity." },
          { title: "Cover", rule: "lime", text: "Who can pick up open tasks while someone is away." },
          { title: "Hiring", rule: "white", text: "How a candidate's results match an opening." },
        ]}
      />

      <CtaBlock
        tone="light"
        title="See it on your own team."
        text="Book a walkthrough of Corporate Brain."
        actions={[{ label: "Get a demo", href: routes.demo, variant: "navy" }]}
      />
    </>
  );
}
