"use client";

import { useEffect, useState } from "react";
import { routes } from "@/lib/site";
import { Field, FormStatus, Honeypot, inputClass } from "./fields";
import { useSubmit } from "./useSubmit";

const options = ["Corporate Brain", "FinCheck", "Gamified Assessments", "A solution / consulting"];

/** Maps an "interest" hint from another page (e.g. ?interest=FinCheck) to a checkbox. */
function interestFrom(hint: string | null): string {
  if (!hint) return "Corporate Brain";
  return options.find((o) => hint.toLowerCase().startsWith(o.toLowerCase().split(" ")[0])) ?? "Corporate Brain";
}

export function DemoForm({ tone = "light", idPrefix = "d" }: { tone?: "light" | "dark"; idPrefix?: string }) {
  const { status, submit } = useSubmit("/api/contact");
  const sending = status.state === "sending";
  const [prefill, setPrefill] = useState<{ email: string; interest: string; note: string }>({ email: "", interest: "Corporate Brain", note: "" });

  // Pick up details passed from another page, e.g. the FinCheck early-access box or a pricing card.
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const hint = q.get("interest");
    setPrefill({ email: q.get("email") ?? "", interest: interestFrom(hint), note: hint && hint.includes("–") ? `Interested in: ${hint}` : "" });
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);
    const interests = f.getAll("interests");
    if (interests.length === 0) {
      await submit({ kind: "demo", interests: [] }); // let the server explain what's missing
      return;
    }
    const ok = await submit({
      kind: "demo",
      name: f.get("name"),
      email: f.get("email"),
      company: f.get("company"),
      role: f.get("role"),
      size: f.get("size"),
      phone: f.get("phone"),
      interests,
      notes: f.get("notes"),
      page: window.location.pathname,
      website: f.get("website"),
    });
    if (ok) form.reset();
  }

  const id = (s: string) => `${idPrefix}-${s}`;
  const muted = tone === "dark" ? "text-on-navy-muted" : "text-ink-muted";

  return (
    <form onSubmit={onSubmit} className="relative grid gap-5 sm:grid-cols-2" key={prefill.email + prefill.interest}>
      <Honeypot />
      <Field id={id("name")} label="Full name" required>
        <input id={id("name")} name="name" required autoComplete="name" className={inputClass(tone)} />
      </Field>
      <Field id={id("email")} label="Work email" required>
        <input id={id("email")} name="email" type="email" required autoComplete="email" defaultValue={prefill.email} className={inputClass(tone)} />
      </Field>
      <Field id={id("company")} label="Company" required>
        <input id={id("company")} name="company" required autoComplete="organization" className={inputClass(tone)} />
      </Field>
      <Field id={id("role")} label="Your role">
        <input id={id("role")} name="role" placeholder="e.g. HR Head" autoComplete="organization-title" className={inputClass(tone)} />
      </Field>
      <Field id={id("size")} label="Company size">
        <select id={id("size")} name="size" defaultValue="51–200" className={inputClass(tone)}>
          {["1–50", "51–200", "201–1,000", "1,000+"].map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </Field>
      <Field id={id("phone")} label="Phone">
        <input id={id("phone")} name="phone" type="tel" autoComplete="tel" className={inputClass(tone)} />
      </Field>
      <fieldset className="m-0 border-0 p-0 sm:col-span-2">
        <legend className="mb-2 text-sm font-bold">
          What would you like to see?<span aria-hidden="true"> *</span>
        </legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {options.map((o) => (
            <label key={o} className={`flex min-h-11 items-center gap-3 rounded-lg border px-4 py-2 text-[15px] ${tone === "dark" ? "border-navy-line" : "border-rule-strong"}`}>
              <input type="checkbox" name="interests" value={o} defaultChecked={o === prefill.interest} className="h-4 w-4" />
              {o}
            </label>
          ))}
        </div>
      </fieldset>
      <Field id={id("notes")} label="Anything we should know?" className="sm:col-span-2">
        <textarea id={id("notes")} name="notes" rows={3} defaultValue={prefill.note} className={inputClass(tone)} />
      </Field>
      <div className="sm:col-span-2">
        <p className={`mb-4 text-sm ${muted}`}>
          By submitting, you agree to our{" "}
          <a href={routes.privacy} className="underline">
            Privacy Policy
          </a>
          .
        </p>
        <button type="submit" disabled={sending} className="w-full rounded-lg bg-lime px-6 py-4 text-base font-bold text-navy hover:bg-[#c7ea72] disabled:opacity-60">
          {sending ? "Sending…" : "Get a demo"}
        </button>
        <FormStatus status={status} tone={tone} sentText="Thanks — we'll be in touch within one working day to set up your walkthrough." />
      </div>
    </form>
  );
}
