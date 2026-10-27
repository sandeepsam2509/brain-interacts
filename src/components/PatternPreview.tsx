const tiles = ["gold", "green", "blue", "green", "blue", "gold", "blue", "gold", null] as const;
const fill = { gold: "bg-gold", green: "bg-green", blue: "bg-blue" };

// Sample gamified challenge screen for the Gamified Assessments hero.
export function PatternPreview() {
  return (
    <figure className="w-full max-w-md rounded-2xl border border-line bg-navy-800/90 p-6 shadow-[0_30px_80px_-30px_rgba(234,210,95,0.3)]">
      <p className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-gold">Decision lab / Sample challenge</p>
      <p className="mt-2 text-h3 font-semibold">Find the next pattern.</p>
      <div className="mt-5 grid grid-cols-3 gap-3">
        {tiles.map((t, i) => (
          <div
            key={i}
            className={`flex aspect-square items-center justify-center rounded-xl border ${
              t ? "border-line bg-navy-900/70" : "border-dashed border-green/60 bg-green/5"
            }`}
          >
            {t ? (
              <span className={`block h-1/3 w-1/3 ${fill[t]} ${i % 2 ? "rounded-full" : "rotate-45 rounded-sm"}`} />
            ) : (
              <span className="text-2xl font-semibold text-green">?</span>
            )}
          </div>
        ))}
      </div>
      <figcaption className="mt-4 text-[0.75rem] text-muted">Illustrative screen · Decisions, not rehearsed answers</figcaption>
    </figure>
  );
}
