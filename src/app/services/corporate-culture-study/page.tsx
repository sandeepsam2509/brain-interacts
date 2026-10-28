import type { Metadata } from "next";
import { CardGrid, CompareTable, CtaBlock, PageHero, SplitIntro, Steps } from "@/components/blocks";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Corporate Culture Study",
  description:
    "Go beyond engagement surveys. We measure your real values, working dynamics and hidden silos, and show how they help or hold back execution.",
  alternates: { canonical: routes.cultureStudy },
};

const trail = [{ label: "Home", href: routes.home }, { label: "Solutions", href: routes.customAssessments }, { label: "Corporate Culture Study" }];

export default function CultureStudyPage() {
  return (
    <>
      <PageHero
        trail={trail}
        label={{ icon: "grid", text: "Corporate culture study", color: "sky" }}
        title="Make culture something"
        accent="you can measure."
        accentColor="sky"
        lead="Go beyond engagement surveys. We measure your real values, working dynamics and hidden silos — and show how they help or hold back execution."
        actions={[
          { label: "Get a demo", href: routes.demo, variant: "sky" },
          { label: "View our methodology", href: "#how-we-work", variant: "outlineDark" },
        ]}
      />

      <SplitIntro
        tone="light"
        label={{ icon: "target", text: "Why surveys fall short", color: "link" }}
        title="Surveys tell you how people feel today. Not how culture drives performance."
        paragraphs={[
          "eNPS and annual engagement surveys capture surface sentiment. They miss informal power dynamics, communication silos, value gaps between leaders and teams, and subcultures that slow everything down.",
          "Our Culture Study gives leadership an evidence-based picture of the culture you actually have.",
        ]}
      />

      <CardGrid
        tone="dark"
        columns={4}
        label={{ icon: "grid", text: "What we study", color: "lime" }}
        title="Four lenses on your culture."
        cards={[
          { tag: "People", title: "Values & traits", rule: "gold", text: "The gap between stated values and real behavior — safety, accountability, risk-taking." },
          { tag: "People", title: "Leadership alignment", rule: "sky", text: "How leaders and managers shape norms, trust and the speed of execution." },
          { tag: "Structure", title: "Network analytics", rule: "lime", text: "Formal and informal communication paths, silos, bottlenecks and key-person dependencies." },
          { tag: "Structure", title: "Subcultures & M&A", rule: "white", text: "Differences between offices, functions or acquired teams — before they cause friction." },
        ]}
      />

      <CompareTable
        tone="light"
        label={{ icon: "target", text: "Problems we solve", color: "goldInk" }}
        title="The usual fix vs. a culture diagnostic."
        headings={["Challenge", "The usual approach", "With a culture study"]}
        rows={[
          ["Rocky M&A integration", "New policies and town halls", "Mapping value gaps and friction across both teams"],
          ["Attrition in one unit", "Pay rises and exit interviews", "Finding local leadership or safety issues"],
          ["Slow decisions", "Redrawing the org chart", "Spotting approval bottlenecks and informal gatekeepers"],
          ["New initiatives stall", "Company-wide morale events", "Closing gaps between leadership and frontline mindsets"],
        ]}
      />

      <div id="how-we-work" className="scroll-mt-20">
        <Steps
          tone="dark"
          label={{ icon: "flow", text: "How we work", color: "gold" }}
          title="A four-step diagnostic."
          steps={[
            { title: "Scope", accent: "gold", text: "With leadership, we define target culture, strategic goals and key challenges." },
            { title: "Assess", accent: "sky", text: "People at every level complete behavioral assessments and network surveys." },
            { title: "Synthesize", accent: "lime", text: "We turn results into network maps, heatmaps and culture alignment scores." },
            { title: "Transform", accent: "white", text: "A clear roadmap for leadership alignment, team structure and policy changes." },
          ]}
        />
      </div>

      <CtaBlock
        tone="light"
        title="Build a culture designed"
        accent="for execution."
        text="Talk to our experts about diagnosing your culture."
        actions={[{ label: "Get a demo", href: routes.demo, variant: "navy" }]}
      />
    </>
  );
}
