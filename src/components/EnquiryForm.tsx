"use client";

import { useState } from "react";
import { forms, type FormDef } from "@/lib/forms";
import { site } from "@/lib/site";

type Status = { state: "idle" | "sending" | "sent" } | { state: "error"; message: string };

const inputCls =
  "w-full rounded-xl border border-line bg-navy-900/70 px-4 py-3 text-mist placeholder:text-muted transition-colors focus:border-green/70 focus:outline-none focus:ring-2 focus:ring-green/20";

export function EnquiryForm({ id, compact = false }: { id: FormDef["id"]; compact?: boolean }) {
  const form = forms[id];
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus({ state: "sending" });
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ form: id, page: window.location.pathname, ...data }),
      });
      const body = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(body.error ?? "Something went wrong.");
      setStatus({ state: "sent" });
    } catch (err) {
      setStatus({ state: "error", message: err instanceof Error ? err.message : "Something went wrong." });
    }
  }

  if (status.state === "sent") {
    return (
      <div role="status" className="rounded-2xl border border-green/40 bg-green/[0.06] p-8 text-center">
        <p className="font-semibold text-green">Received</p>
        <p className="mt-2 text-secondary">{form.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={`relative ${compact ? "flex flex-col gap-3 sm:flex-row" : "grid gap-5 sm:grid-cols-2"}`}>
      {/* Hidden from people; bots that fill it in are ignored by the API. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {form.fields.map((f) => {
        const fieldId = `${id}-${f.name}`;
        const common = { id: fieldId, name: f.name, required: f.required, autoComplete: f.autoComplete };
        return (
          <div key={f.name} className={compact ? "flex-1" : f.half ? "" : "sm:col-span-2"}>
            <label htmlFor={fieldId} className={compact ? "sr-only" : "mb-2 block text-small font-medium"}>
              {f.label}
              {f.required && !compact && <span className="text-green"> *</span>}
            </label>
            {f.type === "textarea" ? (
              <textarea {...common} rows={4} placeholder={f.placeholder ?? f.label} className={`${inputCls} resize-y`} maxLength={4000} />
            ) : f.type === "select" ? (
              <select {...common} defaultValue="" className={`${inputCls} select-arrow appearance-none pr-10`}>
                <option value="" disabled>
                  Select…
                </option>
                {f.options?.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            ) : (
              <input {...common} type={f.type} placeholder={f.placeholder ?? f.label} className={inputCls} maxLength={200} />
            )}
          </div>
        );
      })}

      {form.consent && (
        <label className="flex items-start gap-3 text-small text-secondary sm:col-span-2">
          <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 shrink-0 accent-green" />
          <span>
            I agree to Brain Interacts contacting me about this request. See our{" "}
            <a href={site.privacy} className="text-aqua underline-offset-2 hover:underline">
              Privacy Policy
            </a>
            .
          </span>
        </label>
      )}

      <div className={compact ? "" : "sm:col-span-2"}>
        <button
          type="submit"
          disabled={status.state === "sending"}
          className={`inline-flex items-center justify-center gap-2 rounded-xl bg-green px-6 py-3 font-semibold text-navy-900 transition-all hover:bg-[#a9e264] disabled:cursor-wait disabled:opacity-70 ${
            compact ? "w-full sm:w-auto" : "w-full"
          }`}
        >
          {status.state === "sending" ? "Sending…" : form.submit}
        </button>
        {status.state === "error" && (
          <p role="alert" className="mt-3 text-small text-gold">
            {status.message} You can also email us at{" "}
            <a href={`mailto:${site.email}`} className="underline">
              {site.email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
