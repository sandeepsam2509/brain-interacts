"use client";

import Image from "next/image";
import { TURNSTILE_HEADER } from "@/lib/turnstile";
import { getTurnstileToken } from "./Turnstile";
import { useEffect, useRef, useState } from "react";
import type { Whitepaper } from "@/content/whitepapers";
import { routes } from "@/lib/site";
import { Field, Honeypot, inputClass } from "./forms/fields";

type Paper = Whitepaper & { file: string; cover: string };
type Lead = { name: string; email: string; company: string; phone: string };

const LEAD_KEY = "bi-whitepaper-lead";

function readLead(): Lead | null {
  try {
    const raw = localStorage.getItem(LEAD_KEY);
    return raw ? (JSON.parse(raw) as Lead) : null;
  } catch {
    return null;
  }
}

function startDownload(url: string) {
  const a = document.createElement("a");
  a.href = url;
  a.download = "";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

/** Cover image with a soft shadow and a slight lift on hover. */
function Cover({ paper, priority = false, sizes }: { paper: Paper; priority?: boolean; sizes: string }) {
  return (
    <div className="relative overflow-hidden rounded-[10px] bg-white shadow-[0_18px_40px_rgba(0,0,0,0.35)] ring-1 ring-white/10 transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:rotate-[-0.6deg] motion-reduce:transition-none">
      <Image src={paper.cover} alt={`Cover of the whitepaper ${paper.title}`} width={720} height={1018} sizes={sizes} priority={priority} className="h-auto w-full" />
    </div>
  );
}

/**
 * Whitepaper covers with a download button. The first download asks for name, work email,
 * company and mobile number (sent to the team as a lead); later downloads in the same
 * browser start straight away.
 */
/** Opens the download form for a whitepaper from anywhere on the page (used by the Resource Library). */
export const openWhitepaper = (slug: string) => window.dispatchEvent(new CustomEvent("bi:whitepaper", { detail: slug }));

export function WhitepaperLibrary({ papers, variant = "grid" }: { papers: Paper[]; variant?: "grid" | "compact" | "dialog" }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<Paper | null>(null);
  const [saved, setSaved] = useState<Lead | null>(null);
  const [state, setState] = useState<{ status: "idle" | "sending" | "done" | "error"; message?: string }>({ status: "idle" });

  useEffect(() => setSaved(readLead()), []);

  // "dialog" variant: no list of its own; other components open it with openWhitepaper(slug).
  useEffect(() => {
    if (variant !== "dialog") return;
    const onOpen = (e: Event) => {
      const paper = papers.find((p) => p.slug === (e as CustomEvent<string>).detail);
      if (paper) open(paper);
    };
    window.addEventListener("bi:whitepaper", onOpen);
    return () => window.removeEventListener("bi:whitepaper", onOpen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variant, papers]);

  async function submit(paper: Paper, lead: Lead, extra: Record<string, unknown> = {}) {
    setState({ status: "sending" });
    try {
      const token = await getTurnstileToken();
      const res = await fetch("/api/whitepaper", {
        method: "POST",
        headers: { "Content-Type": "application/json", ...(token ? { [TURNSTILE_HEADER]: token } : {}) },
        body: JSON.stringify({ ...lead, ...extra, consent: true, slug: paper.slug, page: window.location.pathname }),
      });
      const data = (await res.json().catch(() => null)) as { ok: boolean; url?: string; error?: string } | null;
      if (data?.ok && data.url) {
        try {
          localStorage.setItem(LEAD_KEY, JSON.stringify(lead));
        } catch {
          /* storage blocked: they'll see the form again next time */
        }
        setSaved(lead);
        startDownload(data.url);
        setState({ status: "done" });
        return true;
      }
      setState({ status: "error", message: data?.error ?? "Something went wrong. Please try again." });
    } catch {
      setState({ status: "error", message: "We couldn't reach the server. Check your connection and try again." });
    }
    return false;
  }

  function open(paper: Paper) {
    setActive(paper);
    setState({ status: "idle" });
    dialogRef.current?.showModal();
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!active) return;
    const f = new FormData(e.currentTarget);
    if (f.get("consent") !== "on") {
      setState({ status: "error", message: "Please tick the consent box." });
      return;
    }
    const lead: Lead = {
      name: String(f.get("name") ?? "").trim(),
      email: String(f.get("email") ?? "").trim(),
      company: String(f.get("company") ?? "").trim(),
      phone: String(f.get("phone") ?? "").trim(),
    };
    await submit(active, lead, { website: f.get("website") });
  }

  const sending = state.status === "sending";

  return (
    <>
      {variant === "dialog" ? null : variant === "grid" ? (
        <ul className="m-0 grid list-none grid-cols-1 gap-x-8 gap-y-14 p-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {papers.map((p, i) => (
            <li key={p.slug} className="group flex flex-col">
              <button type="button" onClick={() => open(p)} className="block text-left" aria-label={`Download ${p.title}`}>
                <Cover paper={p} priority={i < 4} sizes="(min-width: 1280px) 280px, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw" />
              </button>
              <h3 className="mt-6 text-xl leading-snug font-bold">{p.title}</h3>
              <p className="mt-2 leading-[1.65] text-on-navy">{p.summary}</p>
              <p className="mt-2 mb-5 text-sm text-on-navy-muted">
                For {p.audience} · {p.pages} pages
              </p>
              <button
                type="button"
                onClick={() => open(p)}
                className="mt-auto inline-flex w-fit items-center gap-2 rounded-lg bg-lime px-5 py-3 text-[15px] font-bold text-navy transition-colors hover:bg-[#c7ea72]"
              >
                Download PDF <span aria-hidden="true">↓</span>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="m-0 grid list-none grid-cols-3 gap-4 p-0 sm:grid-cols-4 lg:grid-cols-4">
          {papers.map((p) => (
            <li key={p.slug} className="group">
              <button type="button" onClick={() => open(p)} className="block w-full text-left" aria-label={`Download ${p.title}`}>
                <Cover paper={p} sizes="(min-width: 1024px) 140px, 30vw" />
                <span className="mt-2 block text-[13px] leading-snug font-semibold text-on-navy-soft">{p.title}</span>
              </button>
            </li>
          ))}
        </ul>
      )}

      <dialog
        ref={dialogRef}
        aria-labelledby="wp-dialog-title"
        onClick={(e) => e.target === dialogRef.current && dialogRef.current?.close()}
        className="m-auto max-h-[94dvh] w-[min(760px,calc(100vw-24px))] overflow-y-auto rounded-[20px] bg-white p-0 text-ink shadow-[0_24px_64px_rgba(10,22,40,0.45)] backdrop:bg-navy/70 backdrop:backdrop-blur-sm"
      >
        {active && (
          <div className="grid md:grid-cols-[230px_1fr]">
            <div className="hidden bg-navy p-6 md:block">
              <Cover paper={active} sizes="200px" />
              <p className="mt-4 text-sm text-on-navy">
                {active.pages} pages · PDF
              </p>
            </div>
            <div className="p-6 md:p-8">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[13px] text-ink-link">Free whitepaper</p>
                  <h2 id="wp-dialog-title" className="mt-1.5 text-2xl leading-tight font-extrabold tracking-[-0.02em]">
                    {active.title}
                  </h2>
                </div>
                <button
                  type="button"
                  aria-label="Close"
                  onClick={() => dialogRef.current?.close()}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-rule-strong"
                >
                  <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {state.status === "done" ? (
                <div role="status">
                  <p className="text-lg font-bold text-green-ink">Your download has started.</p>
                  <p className="mt-2 leading-[1.7] text-ink-body">
                    If it didn&apos;t,{" "}
                    <a href={active.file} download className="font-bold text-ink-link underline">
                      click here to download {active.title}
                    </a>
                    .
                  </p>
                  <button type="button" onClick={() => dialogRef.current?.close()} className="mt-6 rounded-lg bg-navy px-5 py-3 font-bold text-white">
                    Done
                  </button>
                </div>
              ) : saved ? (
                <div>
                  <p className="leading-[1.7] text-ink-body">
                    Downloading as <strong className="text-ink">{saved.name}</strong>, {saved.company}.
                  </p>
                  <button
                    type="button"
                    disabled={sending}
                    onClick={() => submit(active, saved)}
                    className="mt-5 w-full rounded-lg bg-lime px-6 py-4 text-base font-bold text-navy hover:bg-[#c7ea72] disabled:opacity-60"
                  >
                    {sending ? "Preparing…" : "Download PDF"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      try {
                        localStorage.removeItem(LEAD_KEY);
                      } catch {
                        /* ignore */
                      }
                      setSaved(null);
                    }}
                    className="mt-3 text-sm text-ink-muted underline"
                  >
                    Not you? Use different details
                  </button>
                  {state.status === "error" && (
                    <p role="alert" className="mt-3 text-sm font-semibold text-[#B42318]">
                      {state.message}
                    </p>
                  )}
                </div>
              ) : (
                <form onSubmit={onSubmit} className="relative grid gap-4 sm:grid-cols-2">
                  <Honeypot />
                  <p className="text-[15px] leading-[1.6] text-ink-body sm:col-span-2">Tell us where to send updates, and your download starts right away.</p>
                  <Field id="wp-name" label="Full name" required>
                    <input id="wp-name" name="name" required autoComplete="name" className={inputClass()} />
                  </Field>
                  <Field id="wp-email" label="Work email" required>
                    <input id="wp-email" name="email" type="email" required autoComplete="email" className={inputClass()} />
                  </Field>
                  <Field id="wp-company" label="Company" required>
                    <input id="wp-company" name="company" required autoComplete="organization" className={inputClass()} />
                  </Field>
                  <Field id="wp-phone" label="Mobile number" required>
                    <input
                      id="wp-phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      inputMode="tel"
                      placeholder="+91 98765 43210"
                      pattern="[+0-9 ()-]{10,20}"
                      title="Enter a mobile number with at least 10 digits"
                      className={inputClass()}
                    />
                  </Field>
                  <label className="flex gap-3 text-sm leading-[1.6] text-ink-body sm:col-span-2">
                    <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 shrink-0" />
                    <span>
                      I agree to Brain Interacts storing my details and contacting me about this whitepaper and related services. See our{" "}
                      <a href={routes.privacy} className="text-ink-link underline">
                        Privacy Policy
                      </a>
                      .
                    </span>
                  </label>
                  <div className="sm:col-span-2">
                    <button type="submit" disabled={sending} className="w-full rounded-lg bg-lime px-6 py-4 text-base font-bold text-navy hover:bg-[#c7ea72] disabled:opacity-60">
                      {sending ? "Preparing…" : "Download PDF"}
                    </button>
                    {state.status === "error" && (
                      <p role="alert" className="mt-3 text-sm font-semibold text-[#B42318]">
                        {state.message}
                      </p>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
