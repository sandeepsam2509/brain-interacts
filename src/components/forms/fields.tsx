import type { ReactNode } from "react";
import { HONEYPOT } from "@/lib/forms";
import type { Status } from "./useSubmit";

export type FieldTone = "light" | "dark";

export const inputClass = (tone: FieldTone = "light") =>
  `w-full rounded-lg border px-4 py-3.5 text-base ${
    tone === "dark"
      ? "border-navy-line bg-navy-raised text-white placeholder:text-on-navy-muted"
      : "border-rule-strong bg-white text-ink placeholder:text-ink-muted"
  }`;

export function Field({ id, label, required, children, className = "" }: { id: string; label: string; required?: boolean; children: ReactNode; className?: string }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-bold">
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      {children}
    </div>
  );
}

/** Hidden field that only bots fill in. */
export function Honeypot() {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
      <label>
        Leave this empty
        <input type="text" name={HONEYPOT} tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}

/** Status line under a form: error, or a thank-you once sent. */
export function FormStatus({ status, tone = "light", sentText }: { status: Status; tone?: FieldTone; sentText: string }) {
  if (status.state === "error") {
    return (
      <p role="alert" className={`mt-3 text-sm font-semibold ${tone === "dark" ? "text-[#FDA29B]" : "text-[#B42318]"}`}>
        {status.message}
      </p>
    );
  }
  if (status.state === "sent") {
    return (
      <p role="status" className={`mt-3 text-sm font-semibold ${tone === "dark" ? "text-lime" : "text-green-ink"}`}>
        {sentText}
        {!status.delivered && " (Preview link: email sending isn't connected yet, so nothing was sent.)"}
      </p>
    );
  }
  return null;
}
