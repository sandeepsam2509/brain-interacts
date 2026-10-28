"use client";

import { routes } from "@/lib/site";
import { Field, FormStatus, Honeypot, inputClass } from "./fields";
import { useSubmit } from "./useSubmit";

const topics = {
  Products: ["Corporate Brain", "FinCheck", "Gamified Assessments"],
  Solutions: ["Custom Psychological Assessment Systems", "Corporate Culture Study", "Root Cause Analytics"],
  Other: ["Hiring query", "General query"],
};

export function ContactForm() {
  const { status, submit } = useSubmit("/api/contact");
  const sending = status.state === "sending";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);
    const ok = await submit({
      kind: "message",
      name: f.get("name"),
      email: f.get("email"),
      company: f.get("company"),
      phone: f.get("phone"),
      topic: f.get("topic"),
      message: f.get("message"),
      consent: f.get("consent") === "on",
      website: f.get("website"),
    });
    if (ok) form.reset();
  }

  return (
    <form onSubmit={onSubmit} className="relative grid gap-5 md:grid-cols-2" noValidate={false}>
      <Honeypot />
      <Field id="c-name" label="Full name" required>
        <input id="c-name" name="name" required autoComplete="name" className={inputClass()} />
      </Field>
      <Field id="c-email" label="Work email" required>
        <input id="c-email" name="email" type="email" required autoComplete="email" className={inputClass()} />
      </Field>
      <Field id="c-company" label="Company">
        <input id="c-company" name="company" autoComplete="organization" className={inputClass()} />
      </Field>
      <Field id="c-phone" label="Phone">
        <input id="c-phone" name="phone" type="tel" autoComplete="tel" className={inputClass()} />
      </Field>
      <Field id="c-topic" label="Why would you like to reach us?" required className="md:col-span-2">
        <select id="c-topic" name="topic" required defaultValue="" className={inputClass()}>
          <option value="" disabled>
            Choose a topic
          </option>
          {Object.entries(topics).map(([group, items]) => (
            <optgroup key={group} label={group}>
              {items.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </optgroup>
          ))}
        </select>
      </Field>
      <Field id="c-message" label="How can we help?" required className="md:col-span-2">
        <textarea id="c-message" name="message" required rows={5} className={inputClass()} />
      </Field>
      <label className="flex gap-3 text-sm leading-[1.6] text-ink-body md:col-span-2">
        <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 shrink-0" />
        <span>
          I agree to Brain Interacts storing my details to respond to this enquiry. See our{" "}
          <a href={routes.privacy} className="text-ink-link underline">
            Privacy Policy
          </a>
          .
        </span>
      </label>
      <div className="md:col-span-2">
        <button type="submit" disabled={sending} className="rounded-lg bg-navy px-6 py-4 text-base font-bold text-white hover:bg-[#1e3a66] disabled:opacity-60 max-md:w-full">
          {sending ? "Sending…" : "Send message"}
        </button>
        <FormStatus status={status} sentText="Thanks — your message is with our team. We'll reply within one working day." />
      </div>
    </form>
  );
}
