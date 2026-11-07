import { emailConfig, fieldsTable, sendEmail } from "@/lib/email";
import { passesTurnstile, TURNSTILE_ERROR } from "@/lib/turnstile";
import { clean, clientKey, EMAIL_RE, HONEYPOT, rateLimited } from "@/lib/forms";
import { findWhitepaper } from "@/content/whitepapers";

type Reply = { ok: true; url: string } | { ok: false; error: string };

// Whitepaper download form: checks the details, emails the lead to the team, then hands back
// the file address so the browser can start the download.
export async function POST(req: Request): Promise<Response> {
  const reply = (body: Reply, status = 200) => Response.json(body, { status });
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return reply({ ok: false, error: "Something went wrong. Please try again." }, 400);
  }

  const paper = findWhitepaper(clean(data.slug, 120));
  if (!paper) return reply({ ok: false, error: "We couldn't find that whitepaper." }, 404);
  if (clean(data[HONEYPOT])) return reply({ ok: true, url: paper.file });
  if (rateLimited(clientKey(req), 10)) return reply({ ok: false, error: "Too many attempts. Please wait a minute and try again." }, 429);
  if (!(await passesTurnstile(req))) return reply({ ok: false, error: TURNSTILE_ERROR }, 403);

  const name = clean(data.name, 120);
  const email = clean(data.email, 200);
  const company = clean(data.company, 200);
  const phone = clean(data.phone, 30);
  const digits = phone.replace(/\D/g, "");

  if (!name) return reply({ ok: false, error: "Please enter your name." }, 400);
  if (!EMAIL_RE.test(email)) return reply({ ok: false, error: "Please enter a valid work email." }, 400);
  if (!company) return reply({ ok: false, error: "Please enter your company." }, 400);
  if (digits.length < 10 || digits.length > 15) return reply({ ok: false, error: "Please enter a valid mobile number." }, 400);
  if (data.consent !== true) return reply({ ok: false, error: "Please tick the consent box." }, 400);

  const result = await sendEmail({
    to: emailConfig.to ?? "",
    replyTo: email,
    subject: `Whitepaper download: ${paper.title}, ${name}, ${company}`,
    html: `<p style="font-family:Arial,sans-serif">New whitepaper download from braininteracts.com</p>${fieldsTable([
      ["Whitepaper", paper.title],
      ["Name", name],
      ["Work email", email],
      ["Company", company],
      ["Mobile", phone],
      ["Page", clean(data.page, 300)],
    ])}`,
  });
  // The visitor still gets the paper if the lead email fails; the error is logged for the team.
  if (!result.ok) console.error(`[whitepaper] lead email failed for ${email} (${paper.slug})`);
  return reply({ ok: true, url: paper.file });
}
