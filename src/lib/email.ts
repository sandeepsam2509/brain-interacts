// Sends email through Resend's HTTP API (https://resend.com/docs/api-reference/emails/send-email).
// Settings come from environment variables set in Vercel, never from the code.

export type SendResult = { ok: true; delivered: boolean } | { ok: false; error: string };

type Attachment = { filename: string; content: string /* base64 */ };

export const emailConfig = {
  apiKey: process.env.RESEND_API_KEY,
  to: process.env.ENQUIRY_TO,
  from: process.env.ENQUIRY_FROM ?? "Brain Interacts <website@braininteracts.com>",
};

const isProduction = process.env.VERCEL_ENV === "production";

/** True when the site can actually send email. */
export const emailReady = () => Boolean(emailConfig.apiKey && emailConfig.to);

export async function sendEmail(message: {
  to: string | string[];
  subject: string;
  html: string;
  replyTo?: string;
  attachments?: Attachment[];
}): Promise<SendResult> {
  if (!emailConfig.apiKey) {
    // On preview links without a key, report success without sending so the forms can be tried out.
    // On the live site a missing key is an error, so no submission is ever silently lost.
    if (!isProduction) {
      console.warn(`[email] RESEND_API_KEY not set; not sending "${message.subject}"`);
      return { ok: true, delivered: false };
    }
    return { ok: false, error: "Email is not configured." };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${emailConfig.apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: emailConfig.from,
      to: message.to,
      subject: message.subject,
      html: message.html,
      reply_to: message.replyTo,
      attachments: message.attachments,
    }),
  });

  if (!res.ok) {
    console.error("[email] Resend error", res.status, await res.text().catch(() => ""));
    return { ok: false, error: "We couldn't send your message. Please try again or email us directly." };
  }
  return { ok: true, delivered: true };
}

/** Escape text before putting it into an HTML email. */
export function esc(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** A simple two-column table of submitted fields for the team inbox. */
export function fieldsTable(fields: [string, unknown][]): string {
  const rows = fields
    .filter(([, v]) => v !== undefined && v !== null && String(v).trim() !== "")
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 12px;border-bottom:1px solid #E1E6EE;font-weight:700;vertical-align:top;white-space:nowrap">${esc(k)}</td><td style="padding:8px 12px;border-bottom:1px solid #E1E6EE;white-space:pre-wrap">${esc(v)}</td></tr>`,
    )
    .join("");
  return `<table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;color:#0A1628">${rows}</table>`;
}
