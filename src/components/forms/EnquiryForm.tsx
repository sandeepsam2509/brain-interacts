"use client";

import { type EnquiryKey, enquiries } from "@/lib/enquiries";
import { routes } from "@/lib/site";
import { Field, FormStatus, Honeypot, inputClass } from "./fields";
import { useSubmit } from "./useSubmit";

const products = ["Corporate Brain", "FinCheck", "Decode", "A solution / consulting"];

/**
 * The form behind every enquiry button. The enquiry type sets the wording, whether the product
 * checkboxes show, and (on the server) the email subject.
 */
export function EnquiryForm({
  enquiryKey,
  tone = "light",
  idPrefix = "eq",
  email = "",
  context = "",
  preselect = "Corporate Brain",
}: {
  enquiryKey: EnquiryKey;
  tone?: "light" | "dark";
  idPrefix?: string;
  email?: string;
  /** Extra detail passed from the page, e.g. the pricing plan. Sent along with the enquiry. */
  context?: string;
  preselect?: string;
}) {
  const enquiry = enquiries[enquiryKey];
  const { status, submit } = useSubmit("/api/contact");
  const sending = status.state === "sending";
  const id = (s: string) => `${idPrefix}-${s}`;
  const muted = tone === "dark" ? "text-on-navy-muted" : "text-ink-muted";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);
    const ok = await submit({
      kind: "enquiry",
      enquiry: enquiryKey,
      name: f.get("name"),
      email: f.get("email"),
      company: f.get("company"),
      role: f.get("role"),
      size: f.get("size"),
      phone: f.get("phone"),
      interests: f.getAll("interests"),
      notes: f.get("notes"),
      context,
      page: window.location.pathname,
      website: f.get("website"),
    });
    if (ok) form.reset();
  }

  return (
    <form onSubmit={onSubmit} className="relative grid gap-x-4 gap-y-3 sm:grid-cols-2 md:grid-cols-3" key={enquiryKey + email}>
      <Honeypot />
      <Field id={id("name")} label="Full name" required>
        <input id={id("name")} name="name" required autoComplete="name" className={inputClass(tone)} />
      </Field>
      <Field id={id("email")} label="Work email" required>
        <input id={id("email")} name="email" type="email" required autoComplete="email" defaultValue={email} className={inputClass(tone)} />
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
      {enquiry.products && (
        <fieldset className="m-0 border-0 p-0 sm:col-span-2 md:col-span-3">
          <legend className="mb-2 text-sm font-bold">
            What would you like to see?<span aria-hidden="true"> *</span>
          </legend>
          <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
            {products.map((o) => (
              <label key={o} className={`flex min-h-9 items-center gap-2.5 rounded-lg border px-3 py-1.5 text-[13px] ${tone === "dark" ? "border-navy-line" : "border-rule-strong"}`}>
                <input type="checkbox" name="interests" value={o} defaultChecked={o === preselect} className="h-4 w-4" />
                {o}
              </label>
            ))}
          </div>
        </fieldset>
      )}
      <Field id={id("notes")} label={enquiry.messageLabel} required={enquiry.messageRequired} className="sm:col-span-2 md:col-span-3">
        <textarea id={id("notes")} name="notes" rows={2} required={enquiry.messageRequired} className={inputClass(tone)} />
      </Field>
      <div className="sm:col-span-2 md:col-span-3">
        <p className={`mb-3 text-[13px] ${muted}`}>
          By submitting, you agree to our{" "}
          <a href={routes.privacy} target="_blank" rel="noopener noreferrer" className="underline">
            Privacy Policy
          </a>
          .
        </p>
        <button type="submit" disabled={sending} className="w-full rounded-lg bg-lime px-6 py-3 text-base font-bold text-navy hover:bg-[#F7CF3D] disabled:opacity-60">
          {sending ? "Sending…" : enquiry.submit}
        </button>
        <FormStatus status={status} tone={tone} sentText={enquiry.thanks} />
      </div>
    </form>
  );
}
