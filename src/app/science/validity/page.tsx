import type { Metadata } from "next";
import { CardGrid, CompareTable, CtaBlock, PageHero, SplitIntro } from "@/components/blocks";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Scientific Validity",
  description: "What the research behind Corporate Brain supports, how reliable a short-form assessment is, and the limits we ask customers to respect.",
  alternates: { canonical: routes.scienceValidity },
};

export default function ValidityPage() {
  return (
    <>
      <PageHero
        trail={[{ label: "Home", href: routes.home }, { label: "The Science", href: routes.science }, { label: "Scientific validity" }]}
        label={{ icon: "grid", text: "Scientific validity", color: "gold" }}
        title="What the research"
        accent="supports."
        lead="We use well-established methods and we're clear about what they can and can't tell you."
      />

      <CompareTable
        tone="light"
        label={{ icon: "target", text: "The evidence", color: "link" }}
        title="Findings our approach rests on."
        headings={["Finding", "What it means", "Source"]}
        template="md:grid-cols-[1fr_1.8fr_1fr]"
        highlightLast={false}
        rows={[
          ["A proven model", "The Big Five is the most widely studied description of personality, replicated across languages and cultures.", "Goldberg, 1992; Costa & McCrae, 1992"],
          ["Linked to performance", "Conscientiousness predicts job performance across almost all kinds of work.", "Barrick & Mount, 1991"],
          ["People-facing roles", "Extraversion predicts success in roles built around people, such as sales and management.", "Judge et al., 2002"],
          ["Skills tests work best together", "Job-knowledge tests predict performance best alongside structured interviews and work samples.", "Schmidt & Hunter, 1998"],
          ["Team mix matters", "The personality make-up of a team relates to how well it performs.", "Bell, 2007"],
          ["Traits can change", "Traits are fairly stable in adulthood but shift gradually over a lifetime.", "Roberts et al., 2006"],
        ]}
      />

      <SplitIntro
        tone="dark"
        label={{ icon: "chart", text: "Reliability", color: "gold" }}
        title="A short form trades some precision for practicality."
        paragraphs={[
          "Twenty statements take a few minutes, which makes it practical to assess a whole team.",
          "Four statements per trait are less reliable than a full-length inventory, so we mark scores within 7 points of the cut-off as borderline — and treat every result as an informed starting point for a conversation, not a fixed measurement.",
        ]}
      />

      <CardGrid
        tone="light"
        columns={4}
        label={{ icon: "target", text: "Limits we ask you to respect", color: "green" }}
        title="Using results fairly."
        cards={[
          { title: "Self-report can be shaded", rule: "amber", text: "Someone who wants a job may answer as they think you want. Treat results as prompts for interview questions." },
          { title: "Traits are tendencies", rule: "blue", text: "They describe how someone usually works — not what they can learn or do." },
          { title: "Archetypes are shorthand", rule: "green", text: "Ten types can't describe everyone. The five trait scores are the more accurate picture." },
          { title: "Never the only input", rule: "navy", text: "Don't select, promote or dismiss on personality alone. Use interviews, work samples and records too." },
        ]}
      />

      <CtaBlock
        tone="dark"
        title="Questions about our methods?"
        text="Our team is happy to walk you through the research."
        actions={[{ label: "Get a demo", href: routes.demo }]}
      />
    </>
  );
}
