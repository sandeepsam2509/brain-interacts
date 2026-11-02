// Server-side check of the Cloudflare Turnstile token sent with each form.

export const TURNSTILE_HEADER = "x-turnstile-token";
export const TURNSTILE_ERROR = "We couldn't confirm you're human. Please refresh the page and try again.";

/**
 * True when the request passes. With no TURNSTILE_SECRET_KEY set (previews, local), the check
 * is skipped so forms keep working; the honeypot and rate limit still apply.
 */
export async function passesTurnstile(req: Request): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  const token = req.headers.get(TURNSTILE_HEADER);
  if (!token) return false;
  const body = new URLSearchParams({ secret, response: token });
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  if (ip) body.set("remoteip", ip);
  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", { method: "POST", body });
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch {
    // Cloudflare unreachable: let the person through rather than lose a real lead.
    return true;
  }
}
