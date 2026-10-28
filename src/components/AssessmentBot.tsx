"use client";

import { useEffect, useRef, useState } from "react";
import { routes } from "@/lib/site";
import { ANSWER_LABELS, QUESTIONS } from "@/lib/snapshot";
import { useSubmit } from "./forms/useSubmit";
import { BrandMark } from "./BrandMark";

type Step = "intro" | "quiz" | "email" | "done";
type Msg = { id: number; from: "bot" | "me"; text: string };

const INTRO =
  "Hi! This free assessment shows your working style across the Big Five personality traits.\n\nRate how well each of the 20 statements describes you. There are no right or wrong answers.";

const question = (i: number) => `Question ${i + 1} of ${QUESTIONS.length}\n${QUESTIONS[i][0]}`;

/**
 * Free working-style snapshot, as a chat in the bottom-right corner.
 * Opens from the launcher button or from any link to "/#snapshot".
 */
export function AssessmentBot() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("intro");
  const [answers, setAnswers] = useState<number[]>([]);
  const [msgs, setMsgs] = useState<Msg[]>([{ id: 0, from: "bot", text: INTRO }]);
  const [email, setEmail] = useState("");
  const { status, submit, reset } = useSubmit("/api/snapshot");
  const logRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const nextId = useRef(1);

  const add = (...items: Omit<Msg, "id">[]) => setMsgs((m) => [...m, ...items.map((it) => ({ ...it, id: nextId.current++ }))]);

  // Links to the snapshot ("Take the free snapshot") open the bot.
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const link = (e.target as HTMLElement).closest("a");
      if (!link || e.defaultPrevented || e.button !== 0) return;
      const url = new URL(link.href, window.location.href);
      if (url.origin === window.location.origin && url.hash === "#snapshot") {
        // Capture phase + stopPropagation so the page link doesn't navigate first.
        e.preventDefault();
        e.stopPropagation();
        setOpen(true);
      }
    }
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  // Keep the newest message in view; move focus into the panel when it opens.
  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight });
  }, [msgs, open]);
  useEffect(() => {
    if (open) panelRef.current?.focus();
  }, [open]);

  // Escape closes the panel.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        launcherRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function start() {
    setAnswers([]);
    setStep("quiz");
    add({ from: "me", text: "Let's start" }, { from: "bot", text: question(0) });
  }

  function answer(value: number) {
    const next = [...answers, value];
    setAnswers(next);
    if (next.length < QUESTIONS.length) {
      add({ from: "me", text: ANSWER_LABELS[value - 1] }, { from: "bot", text: question(next.length) });
    } else {
      setStep("email");
      add(
        { from: "me", text: ANSWER_LABELS[value - 1] },
        { from: "bot", text: "That's all 20 — thank you!\n\nWhat's your work email? We'll send your personalized working-style report there." },
      );
    }
  }

  async function send(e: React.FormEvent) {
    e.preventDefault();
    const address = email.trim();
    const ok = await submit({ email: address, answers });
    if (ok) {
      setStep("done");
      add({ from: "me", text: address }, { from: "bot", text: `Thanks! Your report is on its way.\n\nYou'll receive it at ${address} within 24 hours.` });
    }
  }

  function restart() {
    reset();
    setStep("intro");
    setAnswers([]);
    setEmail("");
    setMsgs([{ id: nextId.current++, from: "bot", text: INTRO }]);
  }

  const progress = step === "intro" ? 0 : Math.min(answers.length, QUESTIONS.length);
  const progressText =
    step === "intro" ? "Not started" : answers.length < QUESTIONS.length ? `Question ${answers.length + 1} of ${QUESTIONS.length}` : "All questions answered";

  return (
    <>
      {open && (
        <section
          ref={panelRef}
          tabIndex={-1}
          aria-label="Free working-style assessment"
          className="fixed inset-0 z-[70] flex flex-col overflow-hidden bg-white text-ink outline-none sm:inset-auto sm:right-5 sm:bottom-24 sm:h-[600px] sm:max-h-[calc(100dvh-120px)] sm:w-[380px] sm:rounded-[18px] sm:shadow-[0_20px_56px_rgba(10,22,40,0.30)]"
        >
          <div className="bg-navy px-[18px] pt-[18px] pb-3.5 text-white">
            <div className="flex items-center gap-3">
              <BrandMark size={34} />
              <div className="flex-1">
                <p className="font-extrabold">Free working-style assessment</p>
                <p className="mt-0.5 text-[13px] text-on-navy">20 questions · about 4 minutes</p>
              </div>
              <button
                type="button"
                aria-label="Close assessment"
                onClick={() => {
                  setOpen(false);
                  launcherRef.current?.focus();
                }}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-line"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <div aria-hidden="true" className="mt-3.5 flex gap-[3px]">
              {QUESTIONS.map((_, i) => (
                <span key={i} className={`h-1 flex-1 rounded-sm ${i < progress ? "bg-lime" : "bg-navy-line"}`} />
              ))}
            </div>
            <p className="mt-2 text-xs text-on-navy-muted">{progressText}</p>
          </div>

          <div ref={logRef} role="log" aria-live="polite" className="flex flex-1 flex-col gap-2.5 overflow-y-auto bg-[#F6F7F9] p-4">
            {msgs.map((m) =>
              m.from === "bot" ? (
                <p key={m.id} className="max-w-[85%] self-start rounded-[14px_14px_14px_4px] border border-rule bg-white px-3.5 py-3 text-[15px] leading-normal whitespace-pre-line">
                  {m.text}
                </p>
              ) : (
                <p key={m.id} className="max-w-[85%] self-end rounded-[14px_14px_4px_14px] bg-navy px-3.5 py-2.5 text-[15px] leading-normal text-white">
                  {m.text}
                </p>
              ),
            )}
          </div>

          <div className="border-t border-rule bg-white px-4 pt-3.5 pb-4">
            {step === "intro" && (
              <>
                <button type="button" onClick={start} className="w-full rounded-[10px] bg-navy p-3.5 text-[15px] font-bold text-white">
                  Start the assessment
                </button>
                <p className="mt-2.5 text-center text-xs text-ink-muted">Free · No sign-up needed to start</p>
              </>
            )}
            {step === "quiz" && (
              <div role="group" aria-label="Your answer" className="flex flex-col gap-1.5">
                {ANSWER_LABELS.map((label, i) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => answer(i + 1)}
                    className="min-h-11 w-full rounded-[10px] border border-rule-strong bg-white px-3.5 py-2.5 text-left text-sm font-semibold hover:border-navy"
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
            {step === "email" && (
              <form onSubmit={send}>
                <label htmlFor="bot-email" className="mb-1.5 block text-[13px] font-bold">
                  Work email
                </label>
                <div className="flex gap-2">
                  <input
                    id="bot-email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status.state === "error") reset();
                    }}
                    className="min-w-0 flex-1 rounded-[10px] border border-rule-strong px-3.5 py-3 text-[15px]"
                  />
                  <button type="submit" disabled={status.state === "sending"} className="rounded-[10px] bg-lime px-[18px] py-3 text-[15px] font-bold text-navy disabled:opacity-60">
                    {status.state === "sending" ? "…" : "Send"}
                  </button>
                </div>
                {status.state === "error" && (
                  <p role="alert" className="mt-2 text-[13px] text-[#B42318]">
                    {status.message}
                  </p>
                )}
                <p className="mt-2.5 text-xs leading-normal text-ink-muted">
                  We&apos;ll use your email to send your report. See our{" "}
                  <a href={routes.privacy} className="underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            )}
            {step === "done" && (
              <>
                {status.state === "sent" && !status.delivered && (
                  <p className="mb-2.5 text-xs text-ink-muted">Preview link: email sending isn&apos;t connected yet, so no report was sent.</p>
                )}
                <button type="button" onClick={restart} className="w-full rounded-[10px] border border-rule-strong bg-white p-3.5 text-[15px] font-bold">
                  Take it again
                </button>
              </>
            )}
          </div>
        </section>
      )}

      <button
        ref={launcherRef}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={open ? "Close the free assessment" : "Open the free assessment"}
        className={`bot-launcher fixed right-4 bottom-4 z-[60] flex h-14 items-center gap-2.5 rounded-full bg-navy pr-5 pl-3 text-[15px] font-bold text-white shadow-[0_10px_28px_rgba(10,22,40,0.35)] sm:right-5 sm:bottom-5 sm:h-[60px] ${open ? "max-sm:hidden" : ""}`}
      >
        <BrandMark size={30} />
        {open ? "Close" : "Free assessment"}
      </button>
    </>
  );
}
