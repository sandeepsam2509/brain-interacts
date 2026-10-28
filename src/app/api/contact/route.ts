import { emailConfig, fieldsTable, sendEmail } from "@/lib/email";
import { clean, clientKey, EMAIL_RE, type FormResponse, HONEYPOT, rateLimited } from "@/lib/forms";

// Handles the Contact form ("message") and the Get a demo form ("demo").
export async function POST(req: Request): Promise<Response> {
  const reply = (body: FormResponse, status = 200) => Response.json(body, { status });

  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return reply({ ok: false, error: "Something went wrong. Please try again." }, 400);
  }

  // Bots that fill the hidden field get a quiet "success" and nothing is sent.
  if (clean(data[HONEYPOT])) return reply({ ok: true, delivered: false });
  if (rateLimited(clientKey(req))) return reply({ ok: false, error: "Too many attempts. Please wait a minute and try again." }, 429);

  const kind = data.kind === "demo" ? "demo" : "message";
  const name = clean(data.name, 120);
  const email = clean(data.email, 200);
  const company = clean(data.company, 200);

  if (!name) return reply({ ok: false, error: "Please enter your name." }, 400);
  if (!EMAIL_RE.test(email)) return reply({ ok: false, error: "Please enter a valid work email." }, 400);

  let subject: string;
  let fields: [string, unknown][];

  if (kind === "demo") {
    if (!company) return reply({ ok: false, error: "Please enter your company." }, 400);
    const interests = Array.isArray(data.interests) ? data.interests.map((i) => clean(i, 80)).filter(Boolean) : [];
    if (interests.length === 0) return reply({ ok: false, error: "Please choose at least one thing you'd like to see." }, 400);
    subject = `Demo request: ${company} (${interests.join(", ")})`;
    fields = [
      ["Name", name],
      ["Work email", email],
      ["Company", company],
      ["Role", clean(data.role, 120)],
      ["Company size", clean(data.size, 40)],
      ["Phone", clean(data.phone, 40)],
      ["Wants to see", interests.join(", ")],
      ["Notes", clean(data.notes, 4000)],
      ["Page", clean(data.page, 300)],
    ];
  } else {
    const topic = clean(data.topic, 120);
    const message = clean(data.message, 4000);
    if (!topic) return reply({ ok: false, error: "Please choose a topic." }, 400);
    if (!message) return reply({ ok: false, error: "Please tell us how we can help." }, 400);
    if (data.consent !== true) return reply({ ok: false, error: "Please tick the consent box." }, 400);
    subject = `Website enquiry: ${topic}`;
    fields = [
      ["Name", name],
      ["Work email", email],
      ["Company", company],
      ["Phone", clean(data.phone, 40)],
      ["Topic", topic],
      ["Message", message],
    ];
  }

  const result = await sendEmail({
    to: emailConfig.to ?? "",
    replyTo: email,
    subject,
    html: `<p style="font-family:Arial,sans-serif">New ${kind === "demo" ? "demo request" : "enquiry"} from braininteracts.com</p>${fieldsTable(fields)}`,
  });
  return result.ok ? reply(result) : reply(result, 502);
}
