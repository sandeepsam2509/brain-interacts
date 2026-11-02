import { enquiries, isEnquiryKey } from "@/lib/enquiries";
import { emailConfig, fieldsTable, sendEmail } from "@/lib/email";
import { passesTurnstile, TURNSTILE_ERROR } from "@/lib/turnstile";
import { clean, clientKey, EMAIL_RE, type FormResponse, HONEYPOT, rateLimited } from "@/lib/forms";

// Handles the Contact page message form ("message") and every enquiry pop-up ("enquiry"),
// such as demo requests, security enquiries or quote requests. Each enquiry type gets its own
// email subject so the team can tell them apart.
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
  if (!(await passesTurnstile(req))) return reply({ ok: false, error: TURNSTILE_ERROR }, 403);

  const name = clean(data.name, 120);
  const email = clean(data.email, 200);
  const company = clean(data.company, 200);

  if (!name) return reply({ ok: false, error: "Please enter your name." }, 400);
  if (!EMAIL_RE.test(email)) return reply({ ok: false, error: "Please enter a valid work email." }, 400);

  let subject: string;
  let heading: string;
  let fields: [string, unknown][];

  if (data.kind === "message") {
    const topic = clean(data.topic, 120);
    const message = clean(data.message, 4000);
    if (!topic) return reply({ ok: false, error: "Please choose a topic." }, 400);
    if (!message) return reply({ ok: false, error: "Please tell us how we can help." }, 400);
    if (data.consent !== true) return reply({ ok: false, error: "Please tick the consent box." }, 400);
    subject = `Website enquiry: ${topic}`;
    heading = "New enquiry from the Contact page";
    fields = [
      ["Name", name],
      ["Work email", email],
      ["Company", company],
      ["Phone", clean(data.phone, 40)],
      ["Topic", topic],
      ["Message", message],
    ];
  } else {
    // Older links may still send kind "demo"; treat them as demo enquiries.
    const key = isEnquiryKey(data.enquiry) ? data.enquiry : "demo";
    const enquiry = enquiries[key];
    if (!company) return reply({ ok: false, error: "Please enter your company." }, 400);
    const message = clean(data.notes, 4000);
    if (enquiry.messageRequired && !message) return reply({ ok: false, error: `Please fill in "${enquiry.messageLabel}".` }, 400);
    const interests = Array.isArray(data.interests) ? data.interests.map((i) => clean(i, 80)).filter(Boolean) : [];
    if (enquiry.products && interests.length === 0) return reply({ ok: false, error: "Please choose at least one thing you'd like to see." }, 400);

    subject = `${enquiry.subject}: ${company}${interests.length ? ` (${interests.join(", ")})` : ""}`;
    heading = `New ${enquiry.subject.toLowerCase()} from braininteracts.com`;
    fields = [
      ["Enquiry type", enquiry.subject],
      ["Name", name],
      ["Work email", email],
      ["Company", company],
      ["Role", clean(data.role, 120)],
      ["Company size", clean(data.size, 40)],
      ["Phone", clean(data.phone, 40)],
      ["Wants to see", interests.join(", ")],
      [enquiry.messageLabel, message],
      ["Details from page", clean(data.context, 300)],
      ["Sent from page", clean(data.page, 300)],
    ];
  }

  const result = await sendEmail({
    to: emailConfig.to ?? "",
    replyTo: email,
    subject,
    html: `<p style="font-family:Arial,sans-serif">${heading}</p>${fieldsTable(fields)}`,
  });
  return result.ok ? reply(result) : reply(result, 502);
}
