import { NextResponse } from "next/server";
import { forms, type FormDef } from "@/lib/forms";

// Receives every enquiry form on the site and emails it to the team via Resend.
// Configure RESEND_API_KEY, ENQUIRY_TO (comma-separated) and optionally ENQUIRY_FROM.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const escapeHtml = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const form = forms[body.form as FormDef["id"]];
  if (!form) return NextResponse.json({ error: "Unknown form." }, { status: 400 });

  // Bots fill the hidden field; pretend success so they don't retry.
  if (typeof body.website === "string" && body.website.length > 0) return NextResponse.json({ ok: true });

  const values: Record<string, string> = {};
  for (const field of form.fields) {
    const raw = typeof body[field.name] === "string" ? (body[field.name] as string).trim() : "";
    if (field.required && !raw) return NextResponse.json({ error: `${field.label} is required.` }, { status: 400 });
    if (field.type === "email" && raw && !EMAIL_RE.test(raw)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }
    if (field.type === "select" && raw && !field.options?.includes(raw)) {
      return NextResponse.json({ error: `Please choose a ${field.label.toLowerCase()}.` }, { status: 400 });
    }
    values[field.label] = raw.slice(0, field.type === "textarea" ? 4000 : 200);
  }
  if (form.consent && !body.consent) return NextResponse.json({ error: "Please agree to be contacted." }, { status: 400 });

  const page = typeof body.page === "string" ? body.page.slice(0, 200) : "";
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO?.split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  if (!apiKey || !to?.length) {
    console.warn(`[enquiry] ${form.id} received but email delivery is not configured`, { page, values });
    if (process.env.NODE_ENV === "production") {
      return NextResponse.json({ error: "Our form is temporarily unavailable." }, { status: 503 });
    }
    return NextResponse.json({ ok: true });
  }

  const rows = Object.entries(values)
    .filter(([, v]) => v)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px;color:#555;vertical-align:top">${escapeHtml(k)}</td><td style="padding:6px 12px">${escapeHtml(v).replace(/\n/g, "<br>")}</td></tr>`,
    )
    .join("");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.ENQUIRY_FROM ?? "Brain Interacts Website <onboarding@resend.dev>",
      to,
      reply_to: values["Work email"] || undefined,
      subject: `New ${form.title} request${values["Company"] ? ` from ${values["Company"]}` : ""}`,
      html: `<p>New submission from <strong>${escapeHtml(page || "the website")}</strong>.</p><table>${rows}</table>`,
    }),
  });

  if (!res.ok) {
    console.error("[enquiry] Resend error", res.status, await res.text());
    return NextResponse.json({ error: "We couldn’t send your request." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
