import { emailConfig, fieldsTable, sendEmail } from "@/lib/email";
import { clean, clientKey, EMAIL_RE, type FormResponse, HONEYPOT, rateLimited } from "@/lib/forms";

const MAX_CV_BYTES = 4 * 1024 * 1024; // Vercel functions accept request bodies up to 4.5 MB.

// Job applications, with the CV attached to the email sent to the team.
export async function POST(req: Request): Promise<Response> {
  const reply = (body: FormResponse, status = 200) => Response.json(body, { status });
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return reply({ ok: false, error: "Your application was too large or incomplete. Please try again." }, 400);
  }
  if (clean(form.get(HONEYPOT))) return reply({ ok: true, delivered: false });
  if (rateLimited(clientKey(req), 3)) return reply({ ok: false, error: "Too many attempts. Please wait a minute and try again." }, 429);

  const name = clean(form.get("name"), 120);
  const email = clean(form.get("email"), 200);
  const role = clean(form.get("role"), 120);
  const cv = form.get("cv");

  if (!name) return reply({ ok: false, error: "Please enter your full name." }, 400);
  if (!EMAIL_RE.test(email)) return reply({ ok: false, error: "Please enter a valid email." }, 400);
  if (!role) return reply({ ok: false, error: "Please choose a role." }, 400);
  if (form.get("consent") !== "on") return reply({ ok: false, error: "Please tick the consent box." }, 400);
  if (!(cv instanceof File) || cv.size === 0) return reply({ ok: false, error: "Please attach your CV as a PDF." }, 400);
  if (cv.size > MAX_CV_BYTES) return reply({ ok: false, error: "Your CV must be smaller than 4 MB." }, 400);

  const bytes = Buffer.from(await cv.arrayBuffer());
  // Check the file really is a PDF, not just named like one.
  if (bytes.subarray(0, 5).toString() !== "%PDF-") return reply({ ok: false, error: "Your CV must be a PDF file." }, 400);

  const safeName = `${name.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "") || "candidate"}-CV.pdf`;
  const result = await sendEmail({
    to: emailConfig.to ?? "",
    replyTo: email,
    subject: `Job application: ${role} — ${name}`,
    html: fieldsTable([
      ["Name", name],
      ["Email", email],
      ["Phone", clean(form.get("phone"), 40)],
      ["LinkedIn / portfolio", clean(form.get("link"), 300)],
      ["Role", role],
      ["Why Brain Interacts?", clean(form.get("why"), 4000)],
    ]),
    attachments: [{ filename: safeName, content: bytes.toString("base64") }],
  });
  return result.ok ? reply(result) : reply(result, 502);
}
