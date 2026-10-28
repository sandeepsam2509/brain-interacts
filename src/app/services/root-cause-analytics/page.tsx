import type { Metadata } from "next";
import { CardGrid, CompareTable, CtaBlock, PageHero } from "@/components/blocks";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Root Cause Analytics",
  description:
    "Turnover, delays and dips in productivity are symptoms. Root Cause Analytics finds the behavioral, skill and structural issues underneath.",
  alternates: { canonical: routes.rootCause },
};

const trail = [{ label: "Home", href: routes.home }, { label: "Solutions", href: routes.customAssessments }, { label: "Root Cause Analytics" }];

// Illustrative heatmap cells: [fill colour, opacity] per department row.
const LOW: [string, number] = ["#5BB8F5", 0.35];
const MED: [string, number] = ["#F2C14E", 0.5];
const HIGH: [string, number] = ["#F2C14E", 0.8];
const OK: [string, number] = ["#B8E05A", 0.4];
const departments = ["Sales", "Engineering", "Operations", "HR"];
const risks = ["Skills", "Friction", "Burnout", "Turnover", "Lead"];
const cells = [
  [LOW, HIGH, LOW, MED, OK],
  [HIGH, LOW, MED, OK, LOW],
  [OK, MED, HIGH, LOW, MED],
  [LOW, OK, LOW, HIGH, OK],
];

function RiskHeatmap() {
  return (
    <figure className="m-0 rounded-2xl border border-navy-line p-6">
      <figcaption className="mb-4 flex justify-between text-sm">
        <strong>Risk heatmap</strong>
        <span className="text-on-navy-muted">Illustrative</span>
      </figcaption>
      <svg viewBox="0 0 400 220" className="h-auto w-full" role="img" aria-label="Illustrative risk heatmap of five risk areas across four departments">
        <g fontFamily="var(--font-manrope), sans-serif" fontSize="12" fill="#A9B4C6">
          {departments.map((d, r) => (
            <text key={d} x="0" y={52 + r * 44}>
              {d}
            </text>
          ))}
          {risks.map((k, c) => (
            <text key={k} x={110 + c * 62 - (c > 0 ? 4 : 0)} y="18">
              {k}
            </text>
          ))}
        </g>
        {cells.map((row, r) =>
          row.map(([fill, opacity], c) => (
            <rect key={`${r}-${c}`} x={100 + c * 62} y={32 + r * 44} width={c === 4 ? 52 : 54} height="36" rx="4" fill={fill} fillOpacity={opacity} />
          )),
        )}
      </svg>
      <div className="mt-4 flex gap-5 text-[13px] text-on-navy-muted">
        <span className="flex items-center gap-1.5"><span className="inline-block h-2.5 w-2.5 rounded-sm bg-gold" />High</span>
        <span className="flex items-center gap-1.5"><span className="inline-block h-2.5 w-2.5 rounded-sm bg-gold opacity-50" />Medium</span>
        <span className="flex items-center gap-1.5"><span className="inline-block h-2.5 w-2.5 rounded-sm bg-sky opacity-50" />Low</span>
      </div>
    </figure>
  );
}

export default function RootCausePage() {
  return (
    <>
      <PageHero
        trail={trail}
        label={{ icon: "grid", text: "Root cause analytics", color: "lime" }}
        title="Find the hidden causes"
        accent="behind the symptoms."
        accentColor="lime"
        lead="Turnover, delays and dips in productivity are symptoms. Root Cause Analytics finds the behavioral, skill and structural issues underneath."
        actions={[
          { label: "Get a demo", href: routes.demo },
          { label: "Explore the platform", href: routes.corporateBrain, variant: "outlineDark" },
        ]}
        aside={<RiskHeatmap />}
      />

      <CardGrid
        tone="light"
        columns={5}
        label={{ icon: "grid", text: "Five dimensions", color: "link" }}
        title="We diagnose across five layers — from the individual to the enterprise."
        cards={[
          { title: "Behavioral", rule: "amber", text: "Work-style archetypes, stress triggers and decision patterns." },
          { title: "Technical", rule: "blue", text: "Role skills, gaps and readiness to deliver." },
          { title: "Group", rule: "green", text: "Cross-functional friction, alignment and communication flow." },
          { title: "Team", rule: "navy", text: "Psychological safety, key-person dependency and burnout risk." },
          { title: "Company", rule: "slate", text: "Talent trajectories, culture alignment and succession readiness." },
        ]}
      />

      <CompareTable
        tone="dark"
        label={{ icon: "grid", text: "Symptom vs root cause", color: "gold" }}
        title="What you see vs. what's really happening."
        headings={["The symptom", "The root cause RCA finds"]}
        rows={[
          ["High employee turnover", "A manager's leadership style doesn't fit the team's working styles"],
          ["Missed deadlines", "Role-level skill gaps plus weak handoffs between teams"],
          ["Falling productivity", "Clashing thinking styles and unclear team roles"],
        ]}
      />

      <CtaBlock
        tone="light"
        title="Stop treating symptoms."
        accent="Start fixing causes."
        text="Book a confidential walkthrough of Root Cause Analytics with our workforce experts."
        actions={[{ label: "Get a demo", href: routes.demo, variant: "navy" }]}
      />
    </>
  );
}
