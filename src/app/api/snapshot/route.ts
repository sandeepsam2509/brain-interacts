import { emailConfig, esc, fieldsTable, sendEmail } from "@/lib/email";
import { clean, clientKey, EMAIL_RE, type FormResponse, HONEYPOT, rateLimited } from "@/lib/forms";
import { archetypes, BORDERLINE, CUTOFF, isValidAnswers, scoreAnswers, TRAIT_NAMES, TRAIT_TEXT, traitOrder } from "@/lib/snapshot";
import { site } from "@/lib/site";

// Free working-style snapshot: scores the 20 answers on the server, emails the visitor
// their report, and sends the team a copy as a lead.
export async function POST(req: Request): Promise<Response> {
  const reply = (body: FormResponse, status = 200) => Response.json(body, { status });
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return reply({ ok: false, error: "Something went wrong. Please try again." }, 400);
  }
  if (clean(data[HONEYPOT])) return reply({ ok: true, delivered: false });
  if (rateLimited(clientKey(req), 3)) return reply({ ok: false, error: "Too many attempts. Please wait a minute and try again." }, 429);

  const email = clean(data.email, 200);
  if (!EMAIL_RE.test(email)) return reply({ ok: false, error: "Please enter a valid work email." }, 400);
  if (!isValidAnswers(data.answers)) return reply({ ok: false, error: "Some answers are missing. Please take the assessment again." }, 400);

  const scores = scoreAnswers(data.answers);
  const { main, secondary, pattern } = archetypes(scores);

  const rows = traitOrder
    .map((k) => {
      const v = scores[k];
      const high = v >= CUTOFF;
      const borderline = Math.abs(v - CUTOFF) <= BORDERLINE;
      return `<tr>
        <td style="padding:10px 12px;border-bottom:1px solid #E1E6EE;font-weight:700">${TRAIT_NAMES[k]}</td>
        <td style="padding:10px 12px;border-bottom:1px solid #E1E6EE">
          <div style="background:#E1E6EE;border-radius:4px;height:8px;width:160px"><div style="background:#0A1628;border-radius:4px;height:8px;width:${Math.round(1.6 * v)}px"></div></div>
        </td>
        <td style="padding:10px 12px;border-bottom:1px solid #E1E6EE;font-weight:700">${v}</td>
        <td style="padding:10px 12px;border-bottom:1px solid #E1E6EE;color:#45556E">${high ? "High" : "Low"}${borderline ? " (borderline)" : ""} · ${esc(high ? TRAIT_TEXT[k].high : TRAIT_TEXT[k].low)}</td>
      </tr>`;
    })
    .join("");

  const report = `
  <div style="font-family:Arial,sans-serif;color:#0A1628;max-width:640px">
    <h1 style="font-size:24px;margin:0 0 8px">Your working-style snapshot</h1>
    <p style="color:#45556E;line-height:1.6">Thanks for taking the Brain Interacts snapshot. Here is how your answers map onto the Big Five, the most widely researched model of working style.</p>
    <p style="font-size:18px;margin:24px 0 4px"><strong>Main working style:</strong> ${esc(main)}</p>
    <p style="font-size:16px;margin:0 0 24px"><strong>Secondary working style:</strong> ${esc(secondary)}</p>
    <table style="border-collapse:collapse;font-size:14px">${rows}</table>
    <p style="color:#45556E;line-height:1.6;margin-top:24px">Scores run from 0 to 100. ${CUTOFF} or more counts as High. Scores within ${BORDERLINE} points of ${CUTOFF} are marked borderline, because a 20-statement snapshot is a quick read rather than a precise measurement.</p>
    <p style="color:#45556E;line-height:1.6">Working styles describe how you usually work, not what you can learn or do. Please don't use this snapshot as the only input for any hiring, promotion or other decision.</p>
    <p style="line-height:1.6">Want to see how your whole team fits together? <a href="${site.url}/contact#demo" style="color:#1B5F96">Get a demo of Corporate Brain</a>.</p>
    <p style="color:#55657E;font-size:12px;margin-top:32px">Brain Interacts · ${esc(site.email)} · ${esc(site.phone)}<br>You received this because you asked for your snapshot report at braininteracts.com.</p>
  </div>`;

  const toVisitor = await sendEmail({ to: email, subject: "Your Brain Interacts working-style snapshot", html: report });
  if (!toVisitor.ok) return reply(toVisitor, 502);

  // Team copy is best-effort: the visitor already has their report.
  if (emailConfig.to) {
    await sendEmail({
      to: emailConfig.to,
      replyTo: email,
      subject: `Snapshot lead: ${email} (${main} / ${secondary})`,
      html: fieldsTable([
        ["Email", email],
        ["Main", main],
        ["Secondary", secondary],
        ["Pattern (O-C-E-A-ES)", pattern],
        ...traitOrder.map((k) => [TRAIT_NAMES[k], scores[k]] as [string, number]),
      ]),
    }).catch(() => undefined);
  }
  return reply(toVisitor);
}
