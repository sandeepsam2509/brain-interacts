// Shared checks for the website forms.

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const clean = (v: unknown, max = 2000) => String(v ?? "").trim().slice(0, max);

/** Hidden "website" field: people never fill it in, simple bots do. */
export const HONEYPOT = "website";

// Very small per-instance rate limit. Serverless instances are short-lived, so this only
// slows down bursts; it is not a full defence.
const hits = new Map<string, number[]>();
export function rateLimited(key: string, limit = 5, windowMs = 60_000): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  recent.push(now);
  hits.set(key, recent);
  return recent.length > limit;
}

/** One counter per form per visitor (forms don't share a limit). */
export function clientKey(req: Request): string {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  return `${new URL(req.url).pathname}:${ip}`;
}

export type FormResponse = { ok: true; delivered: boolean } | { ok: false; error: string };
