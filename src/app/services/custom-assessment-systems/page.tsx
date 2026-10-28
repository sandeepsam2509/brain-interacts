import type { Metadata } from "next";
import { CardGrid, CompareTable, CtaBlock, PageHero, SplitIntro, Steps } from "@/components/blocks";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Custom Psychological Assessment Systems",
  description:
    "Our experts design assessment systems around your roles, culture and decisions, so every hire, promotion and team change rests on evidence you can trust.",
  alternates: { canonical: routes.customAssessments },
};

const trail = [
  { label: "Home", href: routes.home },
  { label: "Solutions", href: routes.customAssessments },
  { label: "Custom Psychological Assessment Systems" },
];

export default function CustomAssessmentsPage() {
  return (
    <>
      <PageHero
        trail={trail}
        label={{ icon: "grid", text: "Custom assessment systems", color: "gold" }}
        title="Assessments built around"
        accent="your roles, not a catalogue."
        lead="Our experts design assessment systems around the roles, culture and decisions specific to your organization — so every hire, promotion and team change rests on evidence you can trust."
        actions={[
          { label: "Get a demo", href: routes.demo, variant: "gold" },
          { label: "See how it works", href: "#how-we-work", variant: "outlineDark" },
        ]}
      />

      <SplitIntro
        tone="light"
        label={{ icon: "target", text: "The gap", color: "link" }}
        title="Off-the-shelf tests measure people in general. Your roles are not general."
        paragraphs={[
          "Generic assessments miss what success actually looks like in your teams. The result is mis-hires, stalled promotions and friction that shows up months too late.",
          "A custom system closes that gap. It measures what matters in your context and turns it into clear, comparable insight.",
        ]}
      />

      <CardGrid
        tone="dark"
        columns={4}
        label={{ icon: "grid", text: "What we assess", color: "lime" }}
        title="Four building blocks, from the individual to the whole organization."
        cards={[
          { tag: "Individual", title: "Role-specific aptitude tests", rule: "gold", text: "Reasoning, judgment and job-relevant problem solving, set to the level each role demands." },
          { tag: "Individual", title: "Working-style profiles", rule: "sky", text: "Motivators, communication style and how people respond under pressure." },
          { tag: "Organization", title: "Leadership readiness", rule: "lime", text: "Succession planning, leadership alignment and decision-making at the top." },
          { tag: "Organization", title: "Role benchmarks & talent reviews", rule: "white", text: "Success profiles for each key role, used to compare candidates and current staff." },
        ]}
      />

      <CompareTable
        tone="light"
        label={{ icon: "target", text: "Problems we solve", color: "goldInk" }}
        title="The usual fix vs. a custom assessment system."
        headings={["Challenge", "The usual approach", "With a custom system"]}
        rows={[
          ["High executive turnover", "Hiring on CV and interview impressions", "Measuring motivators and fit with your culture"],
          ["Team conflict", "Workshops after friction starts", "Balancing complementary working styles"],
          ["Failed promotions", "Promoting top performers into management", "Checking leadership potential and delegation first"],
          ["Inconsistent hiring", "Unstructured interviews, manager bias", "The same role benchmark for every candidate"],
        ]}
      />

      <div id="how-we-work" className="scroll-mt-20">
        <Steps
          tone="dark"
          label={{ icon: "flow", text: "How we work", color: "sky" }}
          title="Four steps, from design to rollout."
          steps={[
            { title: "Discover", accent: "gold", text: "Our experts study your top performers, roles and culture to define what success looks like." },
            { title: "Design", accent: "sky", text: "We build the assessment around those success profiles — questionnaire or game-based." },
            { title: "Deploy", accent: "lime", text: "Candidates and teams take it, and results flow into clear individual and team reports." },
            { title: "Refine", accent: "white", text: "We review outcomes with you and adjust the system as your roles and teams change." },
          ]}
        />
      </div>

      <CtaBlock
        tone="light"
        title="Build an assessment system"
        accent="that fits your organization."
        text="Talk to our experts about the roles and decisions you want to get right."
        actions={[{ label: "Get a demo", href: routes.demo, variant: "navy" }]}
      />
    </>
  );
}
