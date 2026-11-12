"use client";

import { useState } from "react";

const LEVELS = [
  { key: "fresher", label: "Fresher", credits: 100 },
  { key: "intermediate", label: "Intermediate", credits: 200 },
  { key: "senior", label: "Senior", credits: 300 },
] as const;

/** Candidates × skills × credits per skill at the chosen level. 1 credit = ₹1. */
export function DecodeCost() {
  const [level, setLevel] = useState<(typeof LEVELS)[number]["key"]>("fresher");
  const [candidates, setCandidates] = useState(50);
  const [skills, setSkills] = useState(5);
  const per = LEVELS.find((l) => l.key === level)!.credits;
  const total = Math.max(0, candidates) * Math.max(0, skills) * per;
  const fmt = (n: number) => n.toLocaleString("en-IN");

  return (
    <div>
      <div className="grid grid-cols-3 gap-2.5" role="radiogroup" aria-label="Experience level">
        {LEVELS.map((l) => (
          <button
            key={l.key}
            type="button"
            role="radio"
            aria-checked={level === l.key}
            onClick={() => setLevel(l.key)}
            className={`rounded-lg border bg-white p-3 text-left ${level === l.key ? "border-amber ring-1 ring-amber" : "border-rule"}`}
          >
            <span className="block text-[14px] font-semibold text-ink">{l.label}</span>
            <span className="block text-[12.5px] text-ink-muted">{l.credits} credits / skill</span>
          </button>
        ))}
      </div>
      <div className="mt-4 rounded-lg bg-white p-4">
        <p className="m-0 text-[14px] font-semibold text-ink">Work out an assessment&rsquo;s cost</p>
        <div className="mt-3 flex flex-wrap items-end gap-3">
          <label className="text-[12px] text-ink-muted">
            Candidates
            <input
              type="number"
              min={1}
              value={candidates}
              onChange={(e) => setCandidates(Number(e.target.value))}
              className="mt-1 block w-24 rounded-md border border-rule-strong px-3 py-2 text-[15px] text-ink"
            />
          </label>
          <span className="pb-2 text-ink-muted">×</span>
          <label className="text-[12px] text-ink-muted">
            Skills
            <input
              type="number"
              min={1}
              value={skills}
              onChange={(e) => setSkills(Number(e.target.value))}
              className="mt-1 block w-20 rounded-md border border-rule-strong px-3 py-2 text-[15px] text-ink"
            />
          </label>
          <span className="pb-2 text-ink-muted">=</span>
          <p className="m-0 pb-1.5" aria-live="polite">
            <span className="font-display text-[22px] font-semibold text-ink">{fmt(total)} credits</span>
            <span className="ml-1.5 text-[13px] text-ink-muted">· ₹{fmt(total)}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
