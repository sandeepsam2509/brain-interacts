import type { Tone } from "./ui";

/**
 * Email sign-up box. Sending is switched on with the other forms in round 4;
 * until then the button is disabled so nobody submits into nothing.
 */
export function SignupForm({ tone, id, button = "Subscribe" }: { tone: Tone; id: string; button?: string }) {
  const dark = tone === "dark";
  return (
    <form className="max-w-[520px]" aria-describedby={`${id}-note`}>
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
        <button type="submit" disabled className={`rounded-lg px-6 py-4 text-base font-bold disabled:cursor-not-allowed disabled:opacity-60 ${dark ? "bg-lime text-navy" : "bg-navy text-white"}`}>
          {button}
        </button>
      </div>
      <p id={`${id}-note`} className={`mt-3 text-sm ${dark ? "text-on-navy-muted" : "text-ink-muted"}`}>
        Sign-ups open at launch.
      </p>
    </form>
  );
}
