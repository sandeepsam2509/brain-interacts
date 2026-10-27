import { BrandMark } from "./BrandMark";

const stats = [
  { value: "1,248", label: "Assessed" },
  { value: "86%", label: "Done" },
  { value: "24", label: "Teams" },
];

const signals = [
  { label: "Problem solving", value: 82, color: "bg-green" },
  { label: "Decision-making", value: 74, color: "bg-gold" },
  { label: "Collaboration", value: 91, color: "bg-blue" },
  { label: "Adaptability", value: 68, color: "bg-aqua" },
];

// Illustrative Corporate Brain team overview, rebuilt from the Framer component.
export function DashboardPreview({ className = "" }: { className?: string }) {
  return (
    <figure
      className={`relative w-full max-w-md rounded-2xl border border-line bg-navy-800/90 p-5 shadow-[0_30px_80px_-30px_rgba(59,181,232,0.35)] backdrop-blur sm:p-6 ${className}`}
    >
      <div className="flex items-center gap-3">
        <BrandMark size={22} />
        <p className="font-semibold">Corporate Brain</p>
      </div>
      <p className="mt-4 text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-green">Workforce intelligence</p>
      <p className="mt-1 text-small font-medium">Corporate Brain · Team overview</p>

      <dl className="mt-4 grid grid-cols-3 gap-2">
        {stats.map((s) => (
          <div key={s.label} className="rounded-lg border border-line bg-navy-900/60 px-3 py-2.5">
            <dt className="order-2 text-[0.6875rem] text-muted">{s.label}</dt>
            <dd className="text-lg font-semibold tabular-nums">{s.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-3 rounded-lg border border-line bg-navy-900/60 p-4">
        <p className="text-[0.75rem] text-secondary">Team capability signals</p>
        <ul className="mt-3 space-y-3">
          {signals.map((s) => (
            <li key={s.label}>
              <div className="flex justify-between text-[0.75rem]">
                <span>{s.label}</span>
                <span className="tabular-nums text-secondary">{s.value}</span>
              </div>
              <div className="mt-1.5 h-1.5 rounded-full bg-navy-700">
                <div className={`h-full rounded-full ${s.color}`} style={{ width: `${s.value}%` }} />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <figcaption className="mt-3 text-[0.6875rem] text-muted">Illustrative preview · Sample data, not client results</figcaption>
    </figure>
  );
}
