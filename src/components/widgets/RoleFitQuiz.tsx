"use client";

import { useState } from "react";
import { WidgetShell } from "./WidgetShell";

type Role = "eng" | "ds" | "ae";

const roles: Record<Role, { title: string; value: string; team: string; pitch: string }> = {
  eng: {
    title: "Full-Stack Engineer",
    value: "Full-Stack Engineer",
    team: "Engineering",
    pitch: "You like building things people use, and you trace problems to the root. You'd ship the product our customers run on.",
  },
  ds: {
    title: "Behavioral Data Scientist",
    value: "Behavioral Data Scientist",
    team: "Science",
    pitch: "You're curious about why people do what they do, and you trust evidence over opinion. You'd shape the science behind every score.",
  },
  ae: {
    title: "Enterprise Account Executive",
    value: "Enterprise Account Executive",
    team: "Sales",
    pitch: "You energize a room, read people well and enjoy a long, complex deal. You'd bring Corporate Brain to the leaders who need it.",
  },
};

// Each answer adds points to the roles it suits. Short, honest and only for fun: it doesn't
// feed into any hiring decision.
const questions: { q: string; options: { label: string; points: Partial<Record<Role, number>> }[] }[] = [
  {
    q: "A free afternoon at work. What do you reach for?",
    options: [
      { label: "A tricky bug or a feature I want to build", points: { eng: 2 } },
      { label: "A dataset with a question I can't stop thinking about", points: { ds: 2 } },
      { label: "Calls with people I'd like to know better", points: { ae: 2 } },
    ],
  },
  {
    q: "Something isn't working. Your first move?",
    options: [
      { label: "Reproduce it and trace the root cause", points: { eng: 2, ds: 1 } },
      { label: "Form a hypothesis and test it against data", points: { ds: 2 } },
      { label: "Talk to the people closest to it", points: { ae: 2 } },
    ],
  },
  {
    q: "Which win would make your week?",
    options: [
      { label: "Something I built goes live and just works", points: { eng: 2 } },
      { label: "A finding that changes how we think", points: { ds: 2 } },
      { label: "A customer says yes after months of work", points: { ae: 2 } },
    ],
  },
  {
    q: "In a team meeting, you're usually the one who…",
    options: [
      { label: "Asks how we'd actually build it", points: { eng: 2 } },
      { label: "Asks what the evidence says", points: { ds: 2 } },
      { label: "Keeps the energy up and gets to a decision", points: { ae: 2 } },
    ],
  },
  {
    q: "What do you want to get better at this year?",
    options: [
      { label: "System design and writing cleaner code", points: { eng: 2 } },
      { label: "Statistics and research methods", points: { ds: 2 } },
      { label: "Negotiation and leading big deals", points: { ae: 2 } },
    ],
  },
  {
    q: "Pick the sentence that sounds most like you.",
    options: [
      { label: "\"Let me prototype it and we'll see.\"", points: { eng: 2 } },
      { label: "\"Interesting, but how do we know?\"", points: { ds: 2, eng: 1 } },
      { label: "\"Let me introduce you to someone.\"", points: { ae: 2 } },
    ],
  },
];

function pickRoleInForm(value: string) {
  const select = document.getElementById("ap-role") as HTMLSelectElement | null;
  if (select) select.value = value;
  document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
  window.setTimeout(() => document.getElementById("ap-name")?.focus({ preventScroll: true }), 600);
}

export function RoleFitQuiz() {
  const [picks, setPicks] = useState<number[]>([]);
  const done = picks.length === questions.length;
  const step = Math.min(picks.length, questions.length - 1);

  const totals: Record<Role, number> = { eng: 0, ds: 0, ae: 0 };
  picks.forEach((p, i) => Object.entries(questions[i].options[p].points).forEach(([r, n]) => (totals[r as Role] += n ?? 0)));
  const max = questions.length * 2;
  const ranked = (Object.keys(totals) as Role[]).sort((a, b) => totals[b] - totals[a]);
  const best = roles[ranked[0]];

  return (
    <WidgetShell
      title="Which role fits you?"
      subtitle={done ? "Your result" : `Question ${picks.length + 1} of ${questions.length} · one minute`}
      badge="For fun"
      progress={picks.length / questions.length}
    >
      {!done ? (
        <div className="p-5 md:p-7">
          <p className="text-[clamp(16px,1.9vw,21px)] leading-snug font-bold tracking-[-0.01em]">{questions[step].q}</p>
          <div role="group" aria-label="Your answer" className="mt-5 grid gap-2">
            {questions[step].options.map((o, i) => (
              <button
                key={o.label}
                type="button"
                onClick={() => setPicks((p) => [...p, i])}
                className="flex min-h-12 items-center gap-3 rounded-xl border border-rule-strong bg-white px-4 py-3 text-left text-[14px] font-semibold transition-colors hover:border-navy hover:bg-navy hover:text-white"
              >
                <span aria-hidden="true" className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F6F7F9] font-mono text-xs text-ink">
                  {String.fromCharCode(65 + i)}
                </span>
                {o.label}
              </button>
            ))}
          </div>
          {picks.length > 0 && (
            <button type="button" onClick={() => setPicks((p) => p.slice(0, -1))} className="mt-5 text-sm font-semibold text-ink-muted underline">
              ← Back
            </button>
          )}
        </div>
      ) : (
        <div className="grid lg:grid-cols-[1.3fr_1fr]" aria-live="polite">
          <div className="p-5 md:p-7">
            <p className="font-mono text-xs text-ink-muted uppercase">Your best fit · {best.team}</p>
            <p className="mt-2 text-[clamp(21px,2.4vw,27px)] leading-tight font-extrabold tracking-[-0.02em]">{best.title}</p>
            <p className="mt-3 leading-[1.7] text-ink-body">{best.pitch}</p>
            <ul className="m-0 mt-6 list-none p-0">
              {ranked.map((r) => (
                <li key={r} className="py-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold">{roles[r].title}</span>
                    <span className="font-mono text-ink-muted">{Math.round((totals[r] / max) * 100)}%</span>
                  </div>
                  <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-rule">
                    <span className={`block h-full rounded-full ${r === ranked[0] ? "bg-lime" : "bg-navy/30"}`} style={{ width: `${Math.max(4, (totals[r] / max) * 100)}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col border-t border-rule bg-[#F6F7F9] p-5 md:p-7 lg:border-t-0 lg:border-l">
            <p className="text-lg font-extrabold">Sound like you?</p>
            <p className="mt-2 text-[14px] leading-[1.6] text-ink-body">This is how we think about fit: how you like to work, matched to what a role needs.</p>
            <button
              type="button"
              onClick={() => pickRoleInForm(best.value)}
              className="mt-5 w-full rounded-lg bg-lime px-6 py-4 text-base font-bold text-navy hover:bg-[#c7ea72]"
            >
              Apply as {best.title}
            </button>
            <button type="button" onClick={() => setPicks([])} className="mt-3 w-full text-sm font-semibold text-ink-muted underline">
              Take it again
            </button>
            <p className="mt-auto pt-6 text-xs leading-[1.5] text-ink-muted">
              Just for fun: your answers aren&apos;t saved and play no part in how we assess applications.
            </p>
          </div>
        </div>
      )}
    </WidgetShell>
  );
}
