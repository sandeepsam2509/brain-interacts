import type { Metadata } from "next";
import { CardGrid, CompareTable, CtaBlock, FeatureSplit, PageHero, ScreenshotPlaceholder } from "@/components/blocks";
import { Eyebrow, H2, Section } from "@/components/ui";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Corporate Brain — People Analytics Platform",
  description:
    "Corporate Brain joins working-style and skills data, projects, tasks and hiring in one platform, with Leadership, Manager and Employee portals.",
  alternates: { canonical: routes.corporateBrain },
};

const trail = [{ label: "Home", href: routes.home }, { label: "Products", href: routes.corporateBrain }, { label: "Corporate Brain" }];

export default function CorporateBrainPage() {
  return (
    <>
      <PageHero
        trail={trail}
        label={{ icon: "grid", text: "Corporate Brain", color: "gold" }}
        title="People analytics that tells you"
        accent="who should do what next."
        lead="Corporate Brain joins working-style and skills data, projects and tasks, and hiring in one platform — with three portals so every level of your company sees exactly what it needs."
        actions={[
          { label: "Get a demo", href: routes.demo },
          { label: "Download a sample team dashboard", href: routes.resources, variant: "outlineDark" },
        ]}
      />

      <CompareTable
        tone="light"
        label={{ icon: "people", text: "Three portals, one sign-in", color: "link" }}
        title="Every role sees what it needs. Nothing more."
        headings={["Portal", "For", "What they do"]}
        highlightLast={false}
        rows={[
          ["Leadership", "Founders, directors, heads of function", "See where the company stands, decide where to step in, plan projects, hire and read company-wide reports"],
          ["Manager", "Team leads", "Run the team day to day: allocate work, send assessments, review progress, hold 1:1s"],
          ["Employee", "Everyone else", "See their own work and progress, plan their time, find teammates and request time away"],
        ]}
      />

      <FeatureSplit
        tone="dark"
        label={{ icon: "people", text: "Leadership portal", color: "gold" }}
        title="Know where you stand — and where to step in."
        features={[
          { title: "Needs your attention", text: "Delayed projects and work awaiting approval, each with its next step." },
          { title: "Team analytics", text: "Compare teams on work finished, overdue tasks, people free for work and assessments completed." },
          { title: "People analytics", text: "Working-style and skills patterns across the whole company." },
          { title: "Reports you can share", text: "Progress, teams and behavioral analysis — exported to PDF or Excel." },
        ]}
        visual={<ScreenshotPlaceholder tone="dark" title="Leadership View" caption="Organization-wide team mix against the six company goals" />}
      />

      <FeatureSplit
        tone="light"
        visualFirst
        label={{ icon: "people", text: "Manager portal", color: "green" }}
        title="Everything that needs a manager, in one place."
        features={[
          { title: "Management actions", text: "Work waiting for review, 1:1 check-ins that are due, and team requests." },
          { title: "Allocation", text: "See who has capacity and who is overloaded, and assign work in one click." },
          { title: "Brain suggests", text: "The best and second-best person for every task, with reasons. You decide." },
          { title: "Remarks", text: "Feedback, recognition or development notes the employee sees in My progress." },
        ]}
        visual={<ScreenshotPlaceholder tone="light" title="Task Suggestion with reasoning" caption="Best and second-best person for a task, with the reasons" />}
      />

      <FeatureSplit
        tone="dark"
        label={{ icon: "people", text: "Employee portal", color: "sky" }}
        title="Every employee gets a clear view of their own growth."
        features={[
          { title: "My progress", text: "Traits and how they've changed, skill areas, tasks finished on time, and feedback." },
          { title: "Personal SWOT", text: "Strengths, weaknesses, opportunities and threats from results and real work." },
          { title: "Workload planner", text: "The next 8 weeks at a glance, with private calendar entries." },
          { title: "Find a teammate & Time away", text: "Search across teams by skill, and see who could cover open tasks." },
        ]}
        visual={<ScreenshotPlaceholder tone="dark" title="Archetype Profile" caption="An employee's working style, trait bars and strengths" />}
      />

      <CardGrid
        tone="light"
        label={{ icon: "briefcase", text: "Projects, tasks and hiring", color: "goldInk" }}
        title="Work and people decisions in the same place."
        cards={[
          { title: "Projects", rule: "amber", text: "Milestones, timelines and dashboards, with the best-fitting lead and team recommended from working style, skills and workload." },
          { title: "Tasks with review", rule: "blue", text: "Finished work is reviewed and approved before it counts as done." },
          { title: "Hiring", rule: "green", text: "Openings linked to projects, matching assessments, stages from Applied to Hired, and fit comparison." },
        ]}
      />

      <Section tone="dark">
        <Eyebrow icon="people" color="lime">
          Built for every department
        </Eyebrow>
        <H2 className="mb-6 max-w-[820px]">Goal-linked guidance for every team.</H2>
        <p className="max-w-[760px] text-[17px] leading-[1.75] text-on-navy">
          Corporate Brain links each working style to six company goals — financial, growth, customer, operational, innovation and
          capability — and gives each department guidance on who to put on which objective and how to manage them.
        </p>
        <p className="mt-6 text-[15px] text-on-navy-soft">
          Role-based access · Two-step sign-in · Admin-controlled backups · Employees can request correction or deletion
        </p>
      </Section>

      <CtaBlock
        tone="light"
        title="See it on your own teams."
        text="A live walkthrough of Corporate Brain, built around your org structure."
        actions={[
          { label: "Get a demo", href: routes.demo, variant: "navy" },
          { label: "Download a sample working-style report", href: routes.resources, variant: "outlineLight" },
        ]}
      />
    </>
  );
}
