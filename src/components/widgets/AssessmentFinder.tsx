"use client";

import Link from "next/link";
import { useState } from "react";
import { enquiryHref } from "@/lib/enquiries";
import { ChoiceGroup, WidgetShell } from "./WidgetShell";

type Answers = {
  who: "leadership" | "managers" | "frontline" | "sales" | "tech" | null;
  goal: "hiring" | "promotion" | "development" | "culture" | null;
  volume: "small" | "medium" | "large" | null;
  format: "questionnaire" | "games" | "unsure" | null;
};

const steps = [
  {
    key: "who",
    legend: "Who do you want to assess?",
    columns: 2,
    options: [
      { value: "leadership", label: "Senior leaders", hint: "CXOs, heads of function" },
      { value: "managers", label: "Managers", hint: "Team leads, first-line managers" },
      { value: "frontline", label: "Frontline & operations", hint: "Supervisors, site and plant teams" },
      { value: "sales", label: "Sales & business development" },
      { value: "tech", label: "Technical roles", hint: "Engineering, data, product" },
    ],
  },
  {
    key: "goal",
    legend: "What decision should it support?",
    columns: 2,
    options: [
      { value: "hiring", label: "Hiring the right people" },
      { value: "promotion", label: "Promotion & succession" },
      { value: "development", label: "Developing existing teams" },
      { value: "culture", label: "Culture & team fit" },
    ],
  },
  {
    key: "volume",
    legend: "How many people a year?",
    columns: 3,
    options: [
      { value: "small", label: "Under 50" },
      { value: "medium", label: "50 – 500" },
      { value: "large", label: "500+" },
    ],
  },
  {
    key: "format",
    legend: "Which format suits your people?",
    columns: 3,
    options: [
      { value: "questionnaire", label: "Questionnaire", hint: "Quick and familiar" },
      { value: "games", label: "Game-based", hint: "Harder to fake" },
      { value: "unsure", label: "Not sure yet" },
    ],
  },
] as const;

const labels: Record<string, string> = {
  leadership: "Senior leaders",
  managers: "Managers",
  frontline: "Frontline & operations",
  sales: "Sales & BD",
  tech: "Technical roles",
  hiring: "Hiring",
  promotion: "Promotion & succession",
  development: "Team development",
  culture: "Culture & fit",
  small: "Under 50 a year",
  medium: "50–500 a year",
  large: "500+ a year",
  questionnaire: "Questionnaire",
  games: "Game-based",
  unsure: "Format open",
};

type Block = { title: string; why: string };

/** Turns the four answers into a recommended set of building blocks. */
function recommend(a: Answers): { blocks: Block[]; delivery: string } {
  const blocks: Block[] = [{ title: "Working-style profiles", why: "Motivators, communication style and how people respond under pressure — the base layer for every decision." }];
  if (a.goal === "hiring" || a.goal === "promotion")
    blocks.push({ title: "Role benchmarks", why: "A success profile for each role, so every candidate is compared against the same bar." });
  if (a.goal === "hiring" && (a.who === "tech" || a.who === "sales" || a.who === "frontline"))
    blocks.push({ title: "Role-specific aptitude tests", why: "Reasoning and job-relevant problem solving, set to the level the role demands." });
  if (a.who === "leadership" || a.who === "managers" || a.goal === "promotion")
    blocks.push({ title: "Leadership readiness", why: "Decision-making, delegation and leadership potential, checked before a promotion — not after." });
  if (a.goal === "development" || a.goal === "culture")
    blocks.push({ title: "Team mix review", why: "Which working styles each team has too much of, and which it's missing." });
  if (a.format === "games" || (a.format === "unsure" && a.volume === "large" && a.goal === "hiring"))
    blocks.push({ title: "Game-based simulation", why: "A short, role-specific scenario that shows how people act, not just what they say." });

  const delivery =
    a.volume === "large"
      ? "Run at scale through Corporate Brain: automated scoring, dashboards and profiles synced to your ATS."
      : a.volume === "medium"
        ? "Delivered through Corporate Brain, with our experts reviewing results and benchmarks with you."
        : "Expert-led: we run the assessments and walk you through every result in a debrief.";
  return { blocks, delivery };
}

export function AssessmentFinder() {
  const [step, setStep] = useState(0);
  const [a, setA] = useState<Answers>({ who: null, goal: null, volume: null, format: null });
  const done = step >= steps.length;
  const current = steps[Math.min(step, steps.length - 1)];
  const value = a[current.key as keyof Answers];

  function choose(v: string) {
    setA((prev) => ({ ...prev, [current.key]: v }));
    // Move on after a short beat so the choice registers visually.
    window.setTimeout(() => setStep((s) => Math.min(s + 1, steps.length)), 220);
  }

  const result = done ? recommend(a) : null;
  const context = Object.fromEntries(
    (Object.keys(a) as (keyof Answers)[]).filter((k) => a[k]).map((k) => [k, labels[a[k] as string]]),
  ) as Record<string, string>;

  return (
    <WidgetShell
      title="Assessment needs finder"
      subtitle={done ? "Your recommended setup" : `Question ${step + 1} of ${steps.length} · under a minute`}
      badge="Free tool"
      progress={step / steps.length}
    >
      {!done ? (
        <div className="p-5 md:p-7">
          <ChoiceGroup
            key={current.key}
            name={`af-${current.key}`}
            legend={current.legend}
            options={current.options as unknown as { value: string; label: string; hint?: string }[]}
            value={(value as string) ?? null}
            onChange={choose}
            columns={current.columns}
          />
          {step > 0 && (
            <button type="button" onClick={() => setStep((s) => s - 1)} className="mt-5 text-sm font-semibold text-ink-muted underline">
              ← Back
            </button>
          )}
        </div>
      ) : (
        result && (
          <div className="grid lg:grid-cols-[1.4fr_1fr]" aria-live="polite">
            <div className="p-5 md:p-7">
              <p className="font-mono text-xs text-ink-muted uppercase">Recommended building blocks</p>
              <ol className="m-0 mt-4 list-none p-0">
                {result.blocks.map((b, i) => (
                  <li key={b.title} className="flex gap-4 border-b border-rule py-4 last:border-b-0">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lime font-mono text-sm font-medium text-navy">{i + 1}</span>
                    <span>
                      <strong className="block text-[15px]">{b.title}</strong>
                      <span className="mt-1 block text-[14px] leading-[1.6] text-ink-body">{b.why}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="flex flex-col border-t border-rule bg-[#F6F7F9] p-5 md:p-7 lg:border-t-0 lg:border-l">
              <p className="font-mono text-xs text-ink-muted uppercase">Based on</p>
              <ul className="m-0 mt-3 flex list-none flex-wrap gap-2 p-0">
                {Object.values(context).map((v) => (
                  <li key={v} className="rounded-full bg-white px-3 py-1 text-[13px] font-semibold ring-1 ring-rule">
                    {v}
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-mono text-xs text-ink-muted uppercase">How it would run</p>
              <p className="mt-2 text-[14px] leading-[1.6] text-ink-body">{result.delivery}</p>
              <div className="mt-auto pt-6">
                <Link
                  href={enquiryHref("assessment-requirements", context)}
                  className="flex w-full items-center justify-center rounded-lg bg-lime px-6 py-4 text-center text-base font-bold text-navy no-underline hover:bg-[#c7ea72]"
                >
                  Discuss this setup with our experts
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setA({ who: null, goal: null, volume: null, format: null });
                    setStep(0);
                  }}
                  className="mt-3 w-full text-sm font-semibold text-ink-muted underline"
                >
                  Start again
                </button>
              </div>
            </div>
          </div>
        )
      )}
    </WidgetShell>
  );
}
