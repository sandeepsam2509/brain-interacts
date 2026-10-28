import { emailConfig, fieldsTable, sendEmail } from "@/lib/email";
import { clean, clientKey, EMAIL_RE, type FormResponse, HONEYPOT, rateLimited } from "@/lib/forms";

// Newsletter sign-ups. The team inbox receives each new subscriber to add to the mailing list.
export async function POST(req: Request): Promise<Response> {
  const reply = (body: FormResponse, status = 200) => Response.json(body, { status });
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return reply({ ok: false, error: "Something went wrong. Please try again." }, 400);
  }
  if (clean(data[HONEYPOT])) return reply({ ok: true, delivered: false });
  if (rateLimited(clientKey(req))) return reply({ ok: false, error: "Too many attempts. Please wait a minute and try again." }, 429);

  const email = clean(data.email, 200);
  if (!EMAIL_RE.test(email)) return reply({ ok: false, error: "Please enter a valid work email." }, 400);

  const result = await sendEmail({
    to: emailConfig.to ?? "",
    subject: `Newsletter sign-up: ${email}`,
    html: fieldsTable([
      ["Email", email],
      ["Signed up on", clean(data.page, 300)],
    ]),
  });
  return result.ok ? reply(result) : reply(result, 502);
}
