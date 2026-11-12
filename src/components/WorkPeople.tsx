import { Eyebrow, H2, Section, type Tone } from "@/components/ui";

// "Work and people decisions in the same place": three cards, each with a small
// illustration of how the feature works, so the idea reads at a glance.
const cards = [
  {
    title: "Projects",
    accent: "bg-gold",
    ink: "text-gold-ink",
    text: "Plan milestones and timelines, and get the best-fit lead and team suggested from working style, skills and workload.",
    visual: (
      <div className="space-y-2">
        {[
          ["Discovery", "w-[38%]", "ml-0"],
          ["Build", "w-[46%]", "ml-[30%]"],
          ["Launch", "w-[24%]", "ml-[70%]"],
        ].map(([label, w, ml]) => (
          <div key={label} className="flex items-center gap-2">
            <span className="w-16 shrink-0 text-[11px] text-ink-muted">{label}</span>
            <span className="relative h-2 flex-1 rounded-full bg-rule/60">
              <span className={`absolute top-0 h-2 rounded-full bg-gold ${w} ${ml}`} />
            </span>
          </div>
        ))}
        <p className="pt-1 text-[11px] font-semibold text-ink-body">Suggested lead: Integrator · 92% fit</p>
      </div>
    ),
  },
  {
    title: "Tasks with review",
    accent: "bg-sky",
    ink: "text-ink-link",
    text: "Nothing counts as done until it is reviewed and approved, so quality is checked, not assumed.",
    visual: (
      <div className="flex items-center gap-1.5 text-[11px] font-semibold">
        {["Done", "In review", "Approved"].map((s, i) => (
          <span key={s} className="flex items-center gap-1.5">
            <span className={`rounded-full px-2.5 py-1 ${i === 2 ? "bg-sky text-navy" : "bg-rule/60 text-ink-body"}`}>{s}</span>
            {i < 2 && <span className="text-ink-muted">→</span>}
          </span>
        ))}
      </div>
    ),
  },
  {
    title: "Hiring",
    accent: "bg-lime",
    ink: "text-green-ink",
    text: "Link each opening to a project, send the matching assessment, track every stage from Applied to Hired, and compare fit side by side.",
    visual: (
      <div className="grid grid-cols-4 gap-1.5 text-center text-[10px] font-semibold">
        {[["Applied", 24], ["Assessed", 11], ["Interview", 5], ["Hired", 1]].map(([s, n], i) => (
          <div key={s} className={`rounded-lg py-1.5 ${i === 3 ? "bg-brand-red text-white" : "bg-rule/60 text-ink-body"}`}>
            <span className="block text-[14px] font-extrabold">{n}</span>
            {s}
          </div>
        ))}
      </div>
    ),
  },
];

export function WorkPeople({ tone = "light" }: { tone?: Tone }) {
  return (
    <Section tone={tone}>
      <Eyebrow icon="briefcase" color={tone === "dark" ? "gold" : "goldInk"}>
        Projects, tasks and hiring
      </Eyebrow>
      <H2 className="mb-8 max-w-[760px]">Work and people decisions, in one place.</H2>
      <div className="grid gap-5 md:grid-cols-3">
        {cards.map((c) => (
          <article key={c.title} className="flex flex-col overflow-hidden rounded-2xl border border-rule bg-white transition hover:-translate-y-0.5 hover:shadow-lg">
            <span className={`h-1 ${c.accent}`} />
            <div className="flex flex-1 flex-col p-6">
              <h3 className={`text-lg font-extrabold ${c.ink}`}>{c.title}</h3>
              <p className="mt-2 text-[15px] leading-[1.6] text-ink-body">{c.text}</p>
              <div className="mt-auto pt-6">
                <div className="rounded-xl bg-[#F5F7FA] p-4" aria-hidden="true">{c.visual}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
