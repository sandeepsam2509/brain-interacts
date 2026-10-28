import type { Metadata } from "next";
import { CompareTable, CtaBlock, FaqList, FeatureSplit, PageHero, ScreenshotPlaceholder, SplitIntro } from "@/components/blocks";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "For CEOs and Founders",
  description:
    "Corporate Brain gives CEOs a live, behavioral view of every team: who is aligned, where friction is building, and which leaders to back next.",
  alternates: { canonical: routes.ceo },
};

export default function CeoPage() {
  return (
    <>
      <PageHero
        trail={[{ label: "Home", href: routes.home }, { label: "For CEOs" }]}
        label={{ icon: "people", text: "For CEOs and founders", color: "gold" }}
        title="See your whole organization"
        accent="at a glance."
        lead="Your strategy is only as strong as the people carrying it out. Corporate Brain gives you a live, behavioral view of every team — who is aligned, where friction is building, and which leaders to back next."
        actions={[
          { label: "Get a demo", href: routes.demo },
          { label: "Download a sample team dashboard", href: routes.resources, variant: "outlineDark" },
        ]}
      />

      <SplitIntro
        tone="light"
        label={{ icon: "target", text: "The CEO problem", color: "link" }}
        title="You see the numbers. You don't see why."
        paragraphs={[
          "Revenue, delivery and attrition reports tell you what happened. They rarely tell you that a key project has three decision-makers and nobody who finishes, or that your best manager is quietly overloaded.",
          "Corporate Brain shows the behavioral reasons behind the results, so you fix causes instead of chasing symptoms.",
        ]}
      />

      <FeatureSplit
        tone="dark"
        label={{ icon: "spark", text: "What you get", color: "lime" }}
        title="Four answers every CEO needs."
        features={[
          { title: "Is the organization aligned with our goals?", text: "Team mix mapped against financial, growth, customer, operational, innovation and capability goals." },
          { title: "Where are we exposed?", text: "Key-person dependencies, overloaded leaders and teams missing a critical working style." },
          { title: "Who should lead what?", text: "Explainable project-lead suggestions from working style, skills and workload." },
          { title: "Who is ready to step up?", text: "A clear view of leadership potential for succession planning." },
        ]}
        visual={<ScreenshotPlaceholder tone="dark" title="Leadership View" caption="Organization-wide team mix against the six company goals" />}
      />

      <CompareTable
        tone="light"
        label={{ icon: "chart", text: "Where the return comes from", color: "goldInk" }}
        title="Better people decisions, made faster."
        headings={["Lever", "How Corporate Brain helps"]}
        template="md:grid-cols-[1fr_1.4fr]"
        highlightLast={false}
        rows={[
          ["Fewer costly mis-hires and failed promotions", "Working-style and skills data inform hiring and promotion decisions alongside interviews"],
          ["Lower regretted attrition", "Spot manager–team style mismatches before they turn into resignations"],
          ["Faster project delivery", "Assign work by strengths and capacity, with reasons managers can act on"],
          ["Less leadership time firefighting", "One view of team health replaces scattered reports"],
        ]}
        footnote="Use the demo to estimate your own return: we model it on your headcount and attrition, not generic averages."
      />

      <FaqList
        tone="dark"
        label={{ icon: "target", text: "CEO FAQ", color: "sky" }}
        title="Questions CEOs ask."
        items={[
          { q: "How long until we see insights?", a: "Your first organization-wide view appears as soon as your teams complete the 4-minute working-style questionnaire." },
          { q: "Will employees feel judged?", a: "Results describe working styles, not good or bad people, and each employee sees their own profile first." },
          { q: "Is our data safe?", a: "Every customer runs on a separate database, and access is limited by role." },
        ]}
      />

      <CtaBlock
        tone="light"
        title="Lead with evidence, not instinct."
        text="A live walkthrough built around your organization."
        actions={[{ label: "Get a demo", href: routes.demo, variant: "navy" }]}
      />
    </>
  );
}
