import { emailConfig, esc, fieldsTable, sendEmail } from "@/lib/email";
import { passesTurnstile, TURNSTILE_ERROR } from "@/lib/turnstile";
import { clean, clientKey, EMAIL_RE, type FormResponse, HONEYPOT, rateLimited } from "@/lib/forms";
import { activeModifiers, archetypeInfo, archetypes, BORDERLINE, SECONDARY_GAP, CUTOFF, isValidAnswers, scoreAnswers, TRAIT_LEADERSHIP, TRAIT_NAMES, TRAIT_TEXT, traitOrder } from "@/lib/snapshot";
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
  if (!(await passesTurnstile(req))) return reply({ ok: false, error: TURNSTILE_ERROR }, 403);

  const email = clean(data.email, 200);
  if (!EMAIL_RE.test(email)) return reply({ ok: false, error: "Please enter a valid work email." }, 400);
  if (!isValidAnswers(data.answers)) return reply({ ok: false, error: "Some answers are missing. Please take the assessment again." }, 400);

  // "leadership" is the executive version on the For CEOs page; same scoring, leadership wording.
  const leadership = data.variant === "leadership";
  const traitText = leadership ? TRAIT_LEADERSHIP : TRAIT_TEXT;
  const scores = scoreAnswers(data.answers);
  const { main, secondary, pattern, ranked } = archetypes(scores);
  const mainInfo = archetypeInfo(main);
  const secondaryInfo = secondary ? archetypeInfo(secondary) : null;
  const modifiers = activeModifiers(scores);
  const styleLabel = secondary ? `${main} / ${secondary}` : main;

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
        <td style="padding:10px 12px;border-bottom:1px solid #E1E6EE;color:#45556E">${high ? "High" : "Low"}${borderline ? " (borderline)" : ""} · ${esc(high ? traitText[k].high : traitText[k].low)}</td>
      </tr>`;
    })
    .join("");

  const card = (label: string, info: ReturnType<typeof archetypeInfo>, similarity: number) => `
    <div style="border:1px solid #E1E6EE;border-radius:10px;padding:16px 18px;margin:0 0 12px">
      <p style="margin:0;color:#55657E;font-size:12px;text-transform:uppercase;letter-spacing:.06em">${label} · ${similarity.toFixed(1)} / 100 match</p>
      <p style="margin:4px 0 8px;font-size:22px;font-weight:700">${esc(info.name)}</p>
      <p style="margin:0 0 6px;line-height:1.6">${esc(info.how)}</p>
      <p style="margin:0 0 4px;line-height:1.6;color:#45556E"><strong style="color:#0A1628">Watch for:</strong> ${esc(info.watch)}</p>
      <p style="margin:0;line-height:1.6;color:#45556E"><strong style="color:#0A1628">${leadership ? "Works best when" : "Best managed with"}:</strong> ${esc(info.manage)}</p>
    </div>`;

  const rankRows = ranked
    .slice(0, 5)
    .map(
      (r, i) => `<tr>
        <td style="padding:6px 10px;border-bottom:1px solid #E1E6EE;color:#55657E">${i + 1}</td>
        <td style="padding:6px 10px;border-bottom:1px solid #E1E6EE;font-weight:${i === 0 || (i === 1 && secondary) ? 700 : 400}">${esc(r.name)}</td>
        <td style="padding:6px 10px;border-bottom:1px solid #E1E6EE">${r.similarity.toFixed(1)}</td>
      </tr>`,
    )
    .join("");

  const modifierList = modifiers.length
    ? `<ul style="padding-left:20px;line-height:1.7;margin:8px 0 0">${modifiers.map((m) => `<li><strong>${esc(m.name)}:</strong> ${esc(m.effect.toLowerCase())}</li>`).join("")}</ul>`
    : `<p style="color:#45556E;line-height:1.6;margin:8px 0 0">None of your scores crossed a modifier threshold, so the archetype guidance applies as it is.</p>`;

  const report = `
  <div style="font-family:Arial,sans-serif;color:#0A1628;max-width:640px">
    <h1 style="font-size:24px;margin:0 0 8px">${leadership ? "Your executive working-style report" : "Your working-style report"}</h1>
    <p style="color:#45556E;line-height:1.6">${leadership ? "Thanks for taking the Brain Interacts leadership self-assessment." : "Thanks for taking the Brain Interacts working-style assessment."} Here are your results, scored with the Corporate Brain model: your five Big Five trait scores, your closest archetypes and what they suggest about how you work best.</p>

    <h2 style="font-size:18px;margin:28px 0 12px">Your archetypes</h2>
    ${card("Primary archetype", mainInfo, ranked[0].similarity)}
    ${secondaryInfo ? card("Secondary archetype", secondaryInfo, ranked[1].similarity) : `<p style="color:#45556E;line-height:1.6">No secondary archetype: your next-closest match, ${esc(ranked[1].name)}, is more than ${SECONDARY_GAP} points behind, so your profile points clearly to ${esc(main)}.</p>`}
    ${secondary ? `<p style="color:#45556E;line-height:1.6;font-size:14px">The primary archetype is your usual way of working. The secondary adds nuance, such as where you stretch or how you respond under pressure.</p>` : ""}

    <h2 style="font-size:18px;margin:28px 0 8px">Your five trait scores</h2>
    <table style="border-collapse:collapse;font-size:14px">${rows}</table>
    <p style="color:#45556E;line-height:1.6;font-size:13px">Scores run from 0 to 100. ${CUTOFF} or more counts as High; scores within ${BORDERLINE} points of ${CUTOFF} are marked borderline.</p>

    <h2 style="font-size:18px;margin:28px 0 8px">Your closest archetypes</h2>
    <p style="color:#45556E;line-height:1.6;margin:0 0 8px;font-size:14px">How closely your scores match each of the ten Corporate Brain archetypes, out of 100.</p>
    <table style="border-collapse:collapse;font-size:14px">${rankRows}</table>

    <h2 style="font-size:18px;margin:28px 0 0">What adjusts the guidance</h2>
    <p style="color:#45556E;line-height:1.6;margin:6px 0 0;font-size:14px">Modifiers switch on when a trait score crosses a threshold, and fine-tune how you work best.</p>
    ${modifierList}

    <h2 style="font-size:18px;margin:28px 0 8px">How to use this</h2>
    <p style="color:#45556E;line-height:1.6">Treat it as the start of a conversation, not a label: ask yourself whether it sounds right, and correct it where it doesn't. Working styles change, so it's worth retaking in 3 to 6 months. This is a 20-statement self-report, not a clinical assessment, and it should never be the only input for a hiring, promotion or other decision.</p>
    <p style="line-height:1.6">${leadership ? `Want to see how your leadership team fits together? <a href="${site.url}/contact?enquiry=executive-briefing#enquiry" style="color:#1B5F96">Book an executive briefing</a>.` : `Want to see how your whole team fits together? <a href="${site.url}/contact?enquiry=demo#enquiry" style="color:#1B5F96">Get a demo of Corporate Brain</a>.`}</p>
    <p style="color:#55657E;font-size:12px;margin-top:32px">Brain Interacts · ${esc(site.email)} · ${esc(site.phone)}<br>You received this because you asked for your report at braininteracts.com.</p>
  </div>`;

  const toVisitor = await sendEmail({ to: email, subject: leadership ? `Your executive working-style report: ${styleLabel}` : `Your Brain Interacts working-style report: ${styleLabel}`, html: report });
  if (!toVisitor.ok) return reply(toVisitor, 502);

  // Team copy is best-effort: the visitor already has their report.
  if (emailConfig.to) {
    await sendEmail({
      to: emailConfig.to,
      replyTo: email,
      subject: `${leadership ? "Executive self-assessment lead" : "Assessment lead"}: ${email} (${styleLabel})`,
      html: fieldsTable([
        ["Email", email],
        ["Primary archetype", `${main} (${ranked[0].similarity})`],
        ["Secondary archetype", secondary ? `${secondary} (${ranked[1].similarity})` : `None (next is more than ${SECONDARY_GAP} points behind)`],
        ["Top 5 matches", ranked.slice(0, 5).map((r) => `${r.name} ${r.similarity}`).join(", ")],
        ["Modifiers", modifiers.map((m) => m.name).join(", ") || "None"],
        ["Pattern (O-C-E-A-ES)", pattern],
        ...traitOrder.map((k) => [TRAIT_NAMES[k], scores[k]] as [string, number]),
      ]),
    }).catch(() => undefined);
  }
  return reply(toVisitor);
}
