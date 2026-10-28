"use client";

import { routes } from "@/lib/site";
import { Field, FormStatus, Honeypot, inputClass } from "./fields";
import { useSubmit } from "./useSubmit";

export function ApplicationForm({ roles }: { roles: string[] }) {
  const { status, submit } = useSubmit("/api/careers");
  const sending = status.state === "sending";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const cv = (form.elements.namedItem("cv") as HTMLInputElement).files?.[0];
    if (cv && cv.size > 4 * 1024 * 1024) {
      await submit(new FormData()); // server explains; keep messages in one place
      return;
    }
    if (await submit(new FormData(form))) form.reset();
  }

  return (
    <form onSubmit={onSubmit} className="relative grid gap-5 md:grid-cols-2" encType="multipart/form-data">
      <Honeypot />
      <Field id="ap-name" label="Full name" required>
        <input id="ap-name" name="name" required autoComplete="name" className={inputClass()} />
      </Field>
      <Field id="ap-email" label="Email" required>
        <input id="ap-email" name="email" type="email" required autoComplete="email" className={inputClass()} />
      </Field>
      <Field id="ap-phone" label="Phone">
        <input id="ap-phone" name="phone" type="tel" autoComplete="tel" className={inputClass()} />
      </Field>
      <Field id="ap-link" label="LinkedIn or portfolio URL">
        <input id="ap-link" name="link" type="url" className={inputClass()} />
      </Field>
      <Field id="ap-role" label="Role you're applying for" required>
        <select id="ap-role" name="role" required defaultValue="" className={inputClass()}>
          <option value="" disabled>
            Choose a role
          </option>
          {roles.map((r) => (
            <option key={r}>{r}</option>
          ))}
          <option>General application</option>
        </select>
      </Field>
      <Field id="ap-cv" label="Resume / CV (PDF, under 4 MB)" required>
        <input id="ap-cv" name="cv" type="file" accept="application/pdf" required className={`${inputClass()} py-3 text-sm`} />
      </Field>
      <Field id="ap-why" label="Why Brain Interacts?" className="md:col-span-2">
        <textarea id="ap-why" name="why" rows={5} className={inputClass()} />
      </Field>
      <label className="flex gap-3 text-sm leading-[1.6] text-ink-body md:col-span-2">
        <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 shrink-0" />
        <span>
          I agree to Brain Interacts storing my application for recruitment purposes. See our{" "}
          <a href={routes.privacy} className="text-ink-link underline">
            Privacy Policy
          </a>
          .
        </span>
      </label>
      <div className="md:col-span-2">
        <button type="submit" disabled={sending} className="rounded-lg bg-navy px-6 py-4 text-base font-bold text-white hover:bg-[#1e3a66] disabled:opacity-60 max-md:w-full">
          {sending ? "Sending…" : "Submit application"}
        </button>
        <FormStatus status={status} sentText="Thanks — your application is in. We'll get back to you within two weeks." />
      </div>
    </form>
  );
}
