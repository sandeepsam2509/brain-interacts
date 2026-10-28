"use client";

import { FormStatus, Honeypot } from "./forms/fields";
import { useSubmit } from "./forms/useSubmit";
import type { Tone } from "./ui";

/** Newsletter sign-up box. */
export function SignupForm({ tone, id, button = "Subscribe" }: { tone: Tone; id: string; button?: string }) {
  const { status, submit } = useSubmit("/api/subscribe");
  const dark = tone === "dark";
  const sending = status.state === "sending";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);
    if (await submit({ email: f.get("email"), page: window.location.pathname, website: f.get("website") })) form.reset();
  }

  return (
    <form onSubmit={onSubmit} className="relative w-full max-w-[520px]">
      <Honeypot />
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor={id} className="sr-only">
          Work email
        </label>
        <input
          id={id}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Work email"
          className={`min-w-0 flex-1 rounded-lg border px-4 py-4 text-base ${
            dark ? "border-navy-line bg-navy-raised text-white placeholder:text-on-navy-muted" : "border-rule-strong bg-white text-ink placeholder:text-ink-muted"
          }`}
        />
        <button type="submit" disabled={sending} className={`rounded-lg px-6 py-4 text-base font-bold disabled:opacity-60 ${dark ? "bg-lime text-navy" : "bg-navy text-white"}`}>
          {sending ? "Sending…" : button}
        </button>
      </div>
      <FormStatus status={status} tone={tone} sentText="You're on the list. Look out for our next monthly email." />
    </form>
  );
}
