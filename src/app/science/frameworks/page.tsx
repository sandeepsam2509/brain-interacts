import type { Metadata } from "next";
import { CardGrid, CompareTable, CtaBlock, PageHero, SplitIntro } from "@/components/blocks";
import { enquiryHref } from "@/lib/enquiries";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Research Frameworks",
  description:
    "The models behind Corporate Brain: the Big Five, the public-domain International Personality Item Pool, and the Corporate Brain model that links goals, functions and archetypes to 300 strategies.",
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
        lead="Corporate Brain combines a widely validated personality model, a public-domain item pool, and its own model that connects a company goal to the day-to-day work of each person."
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

      <CompareTable
        tone="light"
        label={{ icon: "grid", text: "Framework 03 · The Corporate Brain model", color: "green" }}
        title="Six goals. Leadership picks one each quarter."
        intro="The Corporate Brain model connects a company goal to the day-to-day work of each person, through what we know about how that person works. It starts with the goal."
        headings={["Goal", "The question it answers"]}
        template="md:grid-cols-[1fr_2.5fr]"
        highlightLast={false}
        rows={[
          ["Financial", "How do we make the business financially stronger?"],
          ["Growth", "How do we become bigger?"],
          ["Customer", "Are customers choosing us, succeeding with us and staying with us?"],
          ["Operational", "How do we execute better?"],
          ["Innovation", "What do we need to create that does not exist yet?"],
          ["Capability", "What capabilities do we need to become better at?"],
        ]}
      />

      <CardGrid
        tone="dark"
        columns={4}
        label={{ icon: "flow", text: "Four ingredients · 300 strategies", color: "sky" }}
        title="One goal, one function, one archetype, one strategy."
        intro="Six goals, five functions and ten archetypes give 300 combinations (6 × 5 × 10), each with its own strategy. Modifiers then adjust it for the individual."
        cards={[
          { tag: "01", title: "Goal", rule: "amber", text: "The company goal leadership chooses for the quarter." },
          { tag: "02", title: "Function", rule: "sky", text: "Marketing, Sales, IT, HR or Leadership. The same goal asks different things of each, such as return on spend from marketing and margin from sales." },
          { tag: "03", title: "Archetype", rule: "lime", text: "Each person's primary and secondary archetype, worked out from their Big Five scores." },
          { tag: "04", title: "Modifiers", rule: "white", text: "Ten adjustments that switch on when a trait crosses a threshold, such as more check-ins for high pressure sensitivity." },
        ]}
      />

      <CompareTable
        tone="light"
        label={{ icon: "people", text: "What a strategy contains", color: "goldInk" }}
        title="Same goal, same function, different advice."
        intro="Every strategy sets out the same items so managers can compare them: the objective, the person's best contribution, how to allocate and manage their work, communication, autonomy, check-in rhythm, motivation, feedback, development focus, the main risk and the KPIs to track. Here is part of two of them."
        headings={["", "Elite", "Operator"]}
        template="md:grid-cols-[1fr_1.5fr_1.5fr]"
        highlightLast={false}
        rows={[
          ["Goal and function", "Financial goal, Marketing", "Financial goal, Marketing"],
          ["Strategic objective", "Make marketing a measurable economic growth engine", "Improve marketing efficiency and predictability"],
          ["Best contribution", "Connect strategy, experimentation and execution", "Process optimisation and disciplined execution"],
          ["Manager strategy", "Give an ambitious financial outcome and authority over how to achieve it", "Set clear financial targets and thresholds, and allow optimisation within them"],
          ["Autonomy", "Very high", "High"],
          ["Check-in", "Weekly metrics and monthly strategy", "Weekly operating review"],
          ["Main risk", "Overcommitment, too many initiatives", "Optimising local metrics instead of business value"],
          ["KPIs", "CAC, ROMI, marketing-sourced revenue, contribution margin", "CAC, conversion, budget variance, ROMI"],
        ]}
      />

      <CardGrid
        tone="dark"
        columns={4}
        label={{ icon: "spark", text: "From strategy to execution", color: "lime" }}
        title="Four workspaces turn the model into daily work."
        intro="Managers assign tasks and employees update progress, while the system flags risky dependencies and approaching due dates. People are re-assessed after 3 to 6 months so the strategy can be adjusted."
        cards={[
          { title: "HR (CHRO)", rule: "amber", text: "Runs assessments and workforce decisions, including hiring and the bench of people between projects." },
          { title: "Leadership", rule: "sky", text: "Sets the company goal and chooses the active strategy." },
          { title: "Manager", rule: "lime", text: "Turns the chosen strategy into team plans, coaching and tasks." },
          { title: "Employee", rule: "white", text: "Sees personal commitments and how their work contributes." },
        ]}
      />

      <SplitIntro
        tone="light"
        label={{ icon: "grid", text: "How to use it", color: "goldInk" }}
        title="The model supports decisions. It doesn't make them."
        paragraphs={[
          "No archetype or score is a verdict on a person. Strategies are a starting point for managers, used alongside each person's own account of their work and never in place of it.",
        ]}
      />

      <CtaBlock
        tone="dark"
        title="See how it all fits together."
        text="Get the frameworks brief, or read how answers become scores and archetypes."
        actions={[{ label: "Request the frameworks brief", href: enquiryHref("frameworks-brief") }, { label: "Read the methodologies", href: routes.scienceMethodology, variant: "outlineDark" }]}
      />
    </>
  );
}
