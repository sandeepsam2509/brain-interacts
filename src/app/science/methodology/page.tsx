import type { Metadata } from "next";
import { CardGrid, CompareTable, CtaBlock, PageHero } from "@/components/blocks";
import { Eyebrow, H2, Section } from "@/components/ui";
import { enquiryHref } from "@/lib/enquiries";
import { routes } from "@/lib/site";
import { ARCHETYPES } from "@/lib/snapshot";

export const metadata: Metadata = {
  title: "Psychometric Methodologies",
  description:
    "How Corporate Brain turns a few minutes of answers into scores, archetypes and recommendations, with people reviewing every step.",
  alternates: { canonical: routes.scienceMethodology },
};

const modifiers = [
  ["High pressure sensitivity", "Neuroticism 70 or more", "More support and check-ins"],
  ["Low execution orientation", "Conscientiousness 45 or less", "More milestones and accountability"],
  ["High social drive", "Extraversion 75 or more", "More collaboration opportunities"],
  ["Low social drive", "Extraversion 45 or less", "Fewer unnecessary meetings"],
  ["High openness", "Openness 75 or more", "More experimentation"],
  ["Low openness", "Openness 45 or less", "More structure"],
  ["High conflict risk", "Agreeableness 45 or less and neuroticism 60 or more", "Explicit behavioural boundaries"],
  ["High autonomy preference", "Conscientiousness 75 or more and extraversion 55 or less", "Less micromanagement"],
  ["Low confidence", "Neuroticism 60 or more and technical score 65 or less", "More coaching"],
  ["High overcommitment risk", "Conscientiousness 75 or more and neuroticism 60 or more", "Workload controls"],
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
          { tag: "Step 04", title: "Match", rule: "navy", text: "The five scores are compared with each archetype's reference profile to find the primary and secondary archetype." },
        ]}
      />

      <Section tone="dark">
        <Eyebrow icon="people" color="gold">
          Archetypes
        </Eyebrow>
        <H2 className="mb-5">Ten archetypes, matched by distance.</H2>
        <p className="mb-6 max-w-[760px] text-[17px] leading-[1.75] text-on-navy">
          Each of the ten core archetypes has a reference profile across Openness, Conscientiousness, Extraversion, Agreeableness and
          Neuroticism, where High is 75 and Low is 25. All ten archetypes sit low on neuroticism. We measure how far a person&apos;s five scores sit from each profile,
          turn that distance into a match score from 0 to 100, and rank all ten.
        </p>
        <ol className="mb-10 grid max-w-[900px] list-none gap-4 p-0 text-[15px] leading-[1.65] text-on-navy md:grid-cols-3">
          <li className="border-t border-navy-line pt-4">
            <strong className="block text-white">Primary archetype</strong>The closest match: the main lens for how someone works and
            how to manage them.
          </li>
          <li className="border-t border-navy-line pt-4">
            <strong className="block text-white">Secondary archetype</strong>The next-closest match, shown when it is close to the
            primary. It adds nuance, such as where someone stretches or how they respond under pressure.
          </li>
          <li className="border-t border-navy-line pt-4">
            <strong className="block text-white">Match score</strong>100 means the scores sit exactly on the reference profile; the
            further away, the lower it goes.
          </li>
        </ol>
        <dl className="m-0 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-5">
          {ARCHETYPES.map(({ name, code, how }) => (
            <div key={name} className="border-t border-navy-line pt-4">
              <dt className="text-lg font-bold">{name}</dt>
              <dd className="m-0 mt-1 font-mono text-xs text-on-navy-muted">{code.split("").join("-")}</dd>
              <dd className="m-0 mt-2 text-sm leading-[1.6] text-on-navy">{how}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-10 max-w-[760px] text-[15px] leading-[1.7] text-on-navy-muted">
          Archetypes are Corporate Brain&apos;s own working model, built from Big Five scores. They are not an independently validated
          typology: use them to start a conversation about how someone likes to work, never as a label, a ranking or a permanent
          identity.
        </p>
      </Section>

      <CompareTable
        tone="light"
        label={{ icon: "flow", text: "Modifiers", color: "link" }}
        title="Ten modifiers that fine-tune the guidance."
        headings={["Modifier", "Switches on when", "Effect on management"]}
        template="md:grid-cols-[1.1fr_1.4fr_1.2fr]"
        highlightLast={false}
        rows={modifiers}
      />

      <CompareTable
        tone="dark"
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
        tone="light"
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
        tone="dark"
        title="Want the full method?"
        text="Get the validation report, or ask our research team how any step works."
        actions={[{ label: "Request the validation report", href: enquiryHref("validation-report") }, { label: "Talk to our research team", href: enquiryHref("research-team"), variant: "outlineDark" }]}
      />
    </>
  );
}
