"use client";

import Link from "next/link";
import { useState } from "react";
import { enquiryHref } from "@/lib/enquiries";
import { routes } from "@/lib/site";
import { ANSWER_LABELS, archetypeInfo, archetypes, CUTOFF, QUESTIONS, scoreAnswers, TRAIT_LEADERSHIP, TRAIT_NAMES, traitOrder } from "@/lib/snapshot";
import { useSubmit } from "../forms/useSubmit";
import { WidgetShell } from "./WidgetShell";

type Step = "intro" | "quiz" | "email" | "done";

/**
 * Executive version of the free working-style assessment: the same 20 research-based
 * statements and scoring, with a leadership-focused report emailed to the visitor.
 */
export function LeadershipAssessment() {
  const [step, setStep] = useState<Step>("intro");
  const [answers, setAnswers] = useState<number[]>([]);
  const [email, setEmail] = useState("");
  const { status, submit, reset } = useSubmit("/api/snapshot");

  const q = answers.length;
  const scores = step === "email" || step === "done" ? scoreAnswers(answers) : null;
  const styles = scores ? archetypes(scores) : null;

  function answer(v: number) {
    const next = [...answers, v];
    setAnswers(next);
    if (next.length === QUESTIONS.length) setStep("email");
  }

  async function send(e: React.FormEvent) {
    e.preventDefault();
    if (await submit({ email: email.trim(), answers, variant: "leadership" })) setStep("done");
  }

  function restart() {
    reset();
    setAnswers([]);
    setEmail("");
    setStep("intro");
  }

  const progress = step === "intro" ? 0 : step === "quiz" ? q / QUESTIONS.length : 1;

  return (
    <WidgetShell
      title="Leadership style self-assessment"
      subtitle={step === "quiz" ? `Statement ${q + 1} of ${QUESTIONS.length}` : "20 statements · about 4 minutes · free"}
      badge="Executive report"
      progress={progress}
    >
      {step === "intro" && (
        <div className="grid gap-8 p-5 md:grid-cols-[1.2fr_1fr] md:p-7">
          <div>
            <h3 className="text-2xl font-extrabold tracking-[-0.02em]">How do you lead when it matters?</h3>
            <p className="mt-3 leading-[1.7] text-ink-body">
              Rate 20 short statements about how you usually work. You&apos;ll see your primary archetype straight away, and get
              a free executive report by email: your primary and secondary archetype with match scores, your five trait scores, and how each one tends to show
              up in the way you lead.
            </p>
            <button type="button" onClick={() => setStep("quiz")} className="mt-6 rounded-lg bg-navy px-6 py-4 text-base font-bold text-white hover:bg-[#1e3a66]">
              Start the self-assessment
            </button>
            <p className="mt-3 text-xs text-ink-muted">Built on the Big Five, the most widely researched model of personality.</p>
          </div>
          <ul className="m-0 list-none self-center rounded-xl bg-[#F6F7F9] p-5 text-[14px] text-ink-body">
            {["Your primary and secondary Corporate Brain archetype", "Five trait scores, each explained for leaders", "Where your style helps, and where to watch out", "Your full report by email in minutes"].map((t) => (
              <li key={t} className="flex gap-3 py-2">
                <span aria-hidden="true" className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime text-xs font-bold text-navy">
                  ✓
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      )}

      {step === "quiz" && (
        <div className="p-5 md:p-7">
          <p className="font-mono text-xs text-ink-muted uppercase">How well does this describe you?</p>
          <p key={q} className="mt-3 min-h-[3.5em] text-[clamp(16px,1.9vw,21px)] leading-snug font-bold tracking-[-0.01em]">
            {QUESTIONS[q][0]}
          </p>
          <div role="group" aria-label="Your answer" className="mt-6 grid gap-2 sm:grid-cols-5">
            {ANSWER_LABELS.map((label, i) => (
              <button
                key={label}
                type="button"
                onClick={() => answer(i + 1)}
                className="min-h-12 rounded-xl border border-rule-strong bg-white px-3 py-3 text-sm font-semibold transition-colors hover:border-navy hover:bg-navy hover:text-white"
              >
                {label}
              </button>
            ))}
          </div>
          {q > 0 && (
            <button type="button" onClick={() => setAnswers((a) => a.slice(0, -1))} className="mt-5 text-sm font-semibold text-ink-muted underline">
              ← Previous statement
            </button>
          )}
        </div>
      )}

      {(step === "email" || step === "done") && scores && styles && (
        <div className="grid lg:grid-cols-[1.3fr_1fr]" aria-live="polite">
          <div className="p-5 md:p-7">
            <p className="font-mono text-xs text-ink-muted uppercase">Your primary archetype</p>
            <p className="mt-2 text-[clamp(21px,2.4vw,27px)] leading-tight font-extrabold tracking-[-0.02em]">
              {styles.main}{" "}
              {styles.secondary && <span className="text-lg font-bold text-ink-muted">with {/^[AEIOU]/.test(styles.secondary) ? "an" : "a"} {styles.secondary} side</span>}
            </p>
            <p className="mt-2 text-[14px] leading-[1.6] text-ink-body">{archetypeInfo(styles.main).how}</p>
            <p className="mt-1 font-mono text-xs text-ink-muted">{styles.ranked[0].similarity.toFixed(1)} / 100 match with the {styles.main} archetype</p>
            <ul className="m-0 mt-5 list-none p-0">
              {traitOrder.map((k) => {
                const v = scores[k];
                const high = v >= CUTOFF;
                return (
                  <li key={k} className="border-b border-rule py-3 last:border-b-0">
                    <div className="flex items-center justify-between gap-3 text-sm">
                      <strong>{TRAIT_NAMES[k]}</strong>
                      <span className="font-mono text-ink-muted">{v}</span>
                    </div>
                    <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-rule">
                      <span className={`block h-full rounded-full ${high ? "bg-navy" : "bg-sky"}`} style={{ width: `${Math.max(v, 4)}%` }} />
                    </div>
                    <p className="mt-1.5 text-[13px] leading-[1.55] text-ink-body">{high ? TRAIT_LEADERSHIP[k].high : TRAIT_LEADERSHIP[k].low}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col border-t border-rule bg-[#F6F7F9] p-5 md:p-7 lg:border-t-0 lg:border-l">
            {step === "email" ? (
              <form onSubmit={send}>
                <p className="text-lg font-extrabold">Get your full executive report</p>
                <p className="mt-2 text-[14px] leading-[1.6] text-ink-body">We&apos;ll email it straight away: your archetype match scores, your five trait scores, what each means for how you lead, and what adjusts the guidance.</p>
                <label htmlFor="la-email" className="mt-5 mb-1.5 block text-sm font-bold">
                  Work email
                </label>
                <input
                  id="la-email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status.state === "error") reset();
                  }}
                  className="w-full rounded-lg border border-rule-strong bg-white px-4 py-3.5 text-base"
                />
                <button type="submit" disabled={status.state === "sending"} className="mt-3 w-full rounded-lg bg-lime px-6 py-4 text-base font-bold text-navy hover:bg-[#c7ea72] disabled:opacity-60">
                  {status.state === "sending" ? "Sending…" : "Email my report"}
                </button>
                {status.state === "error" && (
                  <p role="alert" className="mt-3 text-sm font-semibold text-[#B42318]">
                    {status.message}
                  </p>
                )}
                <p className="mt-3 text-xs leading-[1.5] text-ink-muted">
                  We&apos;ll use your email to send your report. See our{" "}
                  <a href={routes.privacy} className="underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            ) : (
              <div role="status">
                <p className="text-lg font-extrabold text-green-ink">Your report is on its way.</p>
                <p className="mt-2 text-[14px] leading-[1.6] text-ink-body">
                  It&apos;s been sent to <strong className="text-ink">{email}</strong> and should arrive within a few minutes. Check your spam folder if you can&apos;t see it.
                  {status.state === "sent" && !status.delivered && " (Preview link: email sending isn't connected here, so nothing was sent.)"}
                </p>
                <Link
                  href={enquiryHref("executive-briefing", { "self-assessment": `${styles.main}${styles.secondary ? ` / ${styles.secondary}` : ""}` })}
                  className="mt-5 flex w-full items-center justify-center rounded-lg bg-navy px-6 py-4 text-base font-bold text-white no-underline hover:bg-[#1e3a66]"
                >
                  See your whole leadership team
                </Link>
                <button type="button" onClick={restart} className="mt-3 w-full text-sm font-semibold text-ink-muted underline">
                  Take it again
                </button>
              </div>
            )}
            <p className="mt-auto pt-6 text-xs leading-[1.5] text-ink-muted">
              A self-report snapshot, not a clinical assessment. Use it to reflect, not to make decisions about anyone.
            </p>
          </div>
        </div>
      )}
    </WidgetShell>
  );
}
