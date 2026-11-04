import { emailConfig, esc, fieldsTable, sendEmail } from "@/lib/email";
import { passesTurnstile, TURNSTILE_ERROR } from "@/lib/turnstile";
import { clean, clientKey, EMAIL_RE, type FormResponse, HONEYPOT, rateLimited } from "@/lib/forms";
import { activeModifiers, archetypeInfo, archetypes, BORDERLINE, SECONDARY_GAP, CUTOFF, isValidAnswers, scoreAnswers, TRAIT_LEADERSHIP, TRAIT_NAMES, TRAIT_TEXT, traitOrder } from "@/lib/snapshot";
import { site } from "@/lib/site";
import { buildReportPdf } from "@/lib/reportPdf";

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

  // Absolute base for links and images in the email. On Vercel this is the production domain
  // (brain-interacts.vercel.app today, braininteracts.com once the domain is connected).
  const base = process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : site.url;

  // Brand palette (matches the website).
  const NAVY = "#0A1628";
  const NAVY_RAISED = "#13233D";
  const LIME = "#B8E05A";
  const GOLD = "#F2C14E";
  const SKY = "#5BB8F5";
  const INK = "#0A1628";
  const BODY = "#45556E";
  const MUTED = "#6B7A90";
  const RULE = "#E1E6EE";
  const BAND = "#EEF1F6";
  const FONT = "'Manrope','Segoe UI',Arial,sans-serif";
  const MONO = "'JetBrains Mono',Consolas,monospace";
  const traitColor: Record<string, string> = { O: GOLD, C: SKY, E: LIME, A: "#7FB82E", N: "#E8833A" };

  const eyebrow = (text: string, color = MUTED) =>
    `<p style="margin:0 0 6px;font-family:${MONO};font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:${color}">${text}</p>`;
  const h2 = (text: string) => `<h2 style="margin:0 0 12px;font-family:${FONT};font-size:20px;line-height:1.25;font-weight:800;color:${INK}">${text}</h2>`;
  const section = (inner: string) => `<tr><td style="padding:28px 32px 4px">${inner}</td></tr>`;
  // Progress bar as a two-cell table with bgcolor attributes: survives Gmail, Outlook and dark mode.
  const bar = (pct: number, color: string, height: number, margin = "0") => {
    const p = Math.min(100, Math.max(1, Math.round(pct)));
    return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:${margin};border-collapse:collapse"><tr>
      <td width="${p}%" height="${height}" bgcolor="${color}" style="background:${color};height:${height}px;line-height:${height}px;font-size:0;mso-line-height-rule:exactly">&nbsp;</td>
      ${p < 100 ? `<td width="${100 - p}%" height="${height}" bgcolor="${RULE}" style="background:${RULE};height:${height}px;line-height:${height}px;font-size:0;mso-line-height-rule:exactly">&nbsp;</td>` : ""}
    </tr></table>`;
  };

  const rows = traitOrder
    .map((k) => {
      const v = scores[k];
      const high = v >= CUTOFF;
      const borderline = Math.abs(v - CUTOFF) <= BORDERLINE;
      return `<tr><td style="padding:12px 0;border-bottom:1px solid ${RULE}">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
          <td style="font-family:${FONT};font-size:15px;font-weight:700;color:${INK}">${TRAIT_NAMES[k]}</td>
          <td align="right" style="font-family:${MONO};font-size:14px;font-weight:700;color:${INK}">${v}<span style="color:${MUTED};font-weight:400"> / 100</span></td>
        </tr></table>
        ${bar(Math.max(v, 3), traitColor[k], 10, "8px 0 6px")}
        <p style="margin:0;font-family:${FONT};font-size:13px;line-height:1.55;color:${BODY}"><strong style="color:${INK}">${high ? "High" : "Low"}${borderline ? " (borderline)" : ""}</strong> · ${esc(high ? traitText[k].high : traitText[k].low)}</p>
      </td></tr>`;
    })
    .join("");

  const secondaryCard = secondaryInfo
    ? `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid ${RULE};border-left:4px solid ${GOLD};border-radius:10px"><tr><td style="padding:18px 20px">
        ${eyebrow(`Secondary archetype · ${ranked[1].similarity.toFixed(1)} / 100 match`)}
        <p style="margin:0 0 8px;font-family:${FONT};font-size:22px;font-weight:800;color:${INK}">${esc(secondaryInfo.name)}</p>
        <p style="margin:0 0 6px;font-family:${FONT};font-size:15px;line-height:1.6;color:${INK}">${esc(secondaryInfo.how)}</p>
        <p style="margin:0 0 4px;font-family:${FONT};font-size:14px;line-height:1.6;color:${BODY}"><strong style="color:${INK}">Watch for:</strong> ${esc(secondaryInfo.watch)}</p>
        <p style="margin:0;font-family:${FONT};font-size:14px;line-height:1.6;color:${BODY}"><strong style="color:${INK}">${leadership ? "Works best when" : "Best managed with"}:</strong> ${esc(secondaryInfo.manage)}</p>
        <p style="margin:12px 0 0;font-family:${FONT};font-size:13px;line-height:1.55;color:${MUTED}">Your secondary archetype adds nuance, such as where you stretch or how you respond under pressure.</p>
      </td></tr></table>`
    : `<p style="margin:0;font-family:${FONT};font-size:14px;line-height:1.6;color:${BODY}">No secondary archetype: your next-closest match, ${esc(ranked[1].name)}, is more than ${SECONDARY_GAP} points behind, so your profile points clearly to ${esc(main)}.</p>`;

  const rankRows = ranked
    .slice(0, 5)
    .map((r, i) => {
      const strong = i === 0 || (i === 1 && !!secondary);
      return `<tr>
        <td width="28" style="padding:9px 0;border-bottom:1px solid ${RULE};font-family:${MONO};font-size:12px;color:${MUTED}">0${i + 1}</td>
        <td width="120" style="padding:9px 0;border-bottom:1px solid ${RULE};font-family:${FONT};font-size:14px;font-weight:${strong ? 800 : 500};color:${INK}">${esc(r.name)}</td>
        <td style="padding:9px 12px;border-bottom:1px solid ${RULE}">${bar(r.similarity, strong ? NAVY : "#9AA6B8", 6)}</td>
        <td width="44" align="right" style="padding:9px 0;border-bottom:1px solid ${RULE};font-family:${MONO};font-size:13px;font-weight:700;color:${INK}">${r.similarity.toFixed(1)}</td>
      </tr>`;
    })
    .join("");

  const modifierList = modifiers.length
    ? modifiers
        .map(
          (m) => `<tr><td style="padding:10px 0;border-bottom:1px solid ${RULE};font-family:${FONT};font-size:14px;line-height:1.5">
            <span style="color:#7FB82E;font-size:16px;margin-right:6px">&#9679;</span><strong style="color:${INK}">${esc(m.name)}</strong><span style="color:${BODY}"> · ${esc(m.effect)}</span></td></tr>`,
        )
        .join("")
    : `<tr><td style="font-family:${FONT};font-size:14px;line-height:1.6;color:${BODY}">None of your scores crossed a modifier threshold, so the archetype guidance applies as it is.</td></tr>`;

  const ctaHref = `${base}/contact?enquiry=${leadership ? "executive-briefing" : "demo"}#enquiry`;
  const unlockHref = `${base}/contact?enquiry=full-report&${new URLSearchParams({ archetype: styleLabel, assessment: leadership ? "Leadership self-assessment" : "Working-style assessment" })}#enquiry`;
  const ctaLabel = leadership ? "Book an executive briefing" : "Get a demo of Corporate Brain";
  const ctaLead = leadership ? "See how your whole leadership team fits together." : "See how your whole team fits together.";

  const report = `<!doctype html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light only"><title>${leadership ? "Your executive working-style report" : "Your working-style report"}</title></head>
<body bgcolor="${BAND}" style="margin:0;padding:0;background:${BAND}">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" bgcolor="${BAND}" style="background:${BAND}"><tr><td align="center" style="padding:24px 12px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF" style="max-width:640px;background:#FFFFFF;border-radius:16px;overflow:hidden">

  <tr><td bgcolor="${NAVY}" style="background:${NAVY};padding:24px 32px 0">
    <img src="${base}/email/brain-interacts-logo.png" width="168" height="42" alt="Brain Interacts" style="display:block;border:0;width:168px;height:42px">
  </td></tr>
  <tr><td bgcolor="${NAVY}" style="background:${NAVY};padding:28px 32px 32px">
    ${eyebrow(leadership ? "Corporate Brain · Executive report" : "Corporate Brain · Working-style report", LIME)}
    <p style="margin:0 0 4px;font-family:${FONT};font-size:15px;color:#C9D3E2">Your primary archetype</p>
    <p style="margin:0;font-family:${FONT};font-size:40px;line-height:1.1;font-weight:800;letter-spacing:-.02em;color:#FFFFFF">${esc(main)}${secondary ? `<span style="font-size:20px;font-weight:700;color:#8EA0BA"> with ${/^[AEIOU]/.test(secondary) ? "an" : "a"} ${esc(secondary)} side</span>` : ""}</p>
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin:16px 0 0"><tr>
      <td bgcolor="${LIME}" style="background:${LIME};border-radius:999px;padding:6px 14px;font-family:${MONO};font-size:13px;font-weight:700;color:${NAVY}">${ranked[0].similarity.toFixed(1)} / 100 match</td>
    </tr></table>
    <p style="margin:18px 0 0;font-family:${FONT};font-size:16px;line-height:1.6;color:#FFFFFF">${esc(mainInfo.how)}</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" bgcolor="${NAVY_RAISED}" style="margin:20px 0 0;background:${NAVY_RAISED};border-radius:12px"><tr>
      <td valign="top" width="50%" style="padding:16px 18px;font-family:${FONT};font-size:14px;line-height:1.55;color:#C9D3E2"><span style="display:block;margin-bottom:4px;font-family:${MONO};font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:${GOLD}">Watch for</span>${esc(mainInfo.watch)}</td>
      <td valign="top" width="50%" style="padding:16px 18px;font-family:${FONT};font-size:14px;line-height:1.55;color:#C9D3E2"><span style="display:block;margin-bottom:4px;font-family:${MONO};font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:${LIME}">${leadership ? "Works best when" : "Best managed with"}</span>${esc(mainInfo.manage)}</td>
    </tr></table>
  </td></tr>

  ${section(`<p style="margin:0;font-family:${FONT};font-size:15px;line-height:1.65;color:${BODY}">${leadership ? "Thanks for taking the Brain Interacts leadership self-assessment." : "Thanks for taking the Brain Interacts working-style assessment."} Your answers were scored with the Corporate Brain model: five Big Five trait scores, matched against our ten archetypes. A PDF copy of this report is attached.</p>`)}

  ${section(`${eyebrow("Secondary archetype", "#1B5F96")}${secondaryCard}`)}

  ${section(`${eyebrow("Big Five", "#1B5F96")}${h2("Your five trait scores")}<table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows}</table>
    <p style="margin:10px 0 0;font-family:${FONT};font-size:12px;line-height:1.55;color:${MUTED}">Scores run from 0 to 100. ${CUTOFF} or more counts as High; within ${BORDERLINE} points of ${CUTOFF} is marked borderline. For neuroticism, a higher score means more sensitivity to stress.</p>`)}

  ${section(`${eyebrow("Archetype match", "#1B5F96")}${h2("Your closest archetypes")}<p style="margin:0 0 8px;font-family:${FONT};font-size:14px;line-height:1.6;color:${BODY}">How closely your scores match each Corporate Brain archetype, out of 100.</p><table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rankRows}</table>`)}

  ${section(`${eyebrow("Modifiers", "#1B5F96")}${h2("What adjusts the guidance")}<p style="margin:0 0 6px;font-family:${FONT};font-size:14px;line-height:1.6;color:${BODY}">Modifiers switch on when a trait score crosses a threshold, and fine-tune how you work best.</p><table role="presentation" width="100%" cellpadding="0" cellspacing="0">${modifierList}</table>`)}

  ${section(`<table role="presentation" width="100%" cellpadding="0" cellspacing="0" bgcolor="${BAND}" style="background:${BAND};border-radius:12px"><tr><td style="padding:18px 20px">
    ${eyebrow("How to use this", MUTED)}
    <p style="margin:0;font-family:${FONT};font-size:14px;line-height:1.65;color:${BODY}">Treat it as the start of a conversation, not a label: ask yourself whether it sounds right, and correct it where it doesn't. Working styles change, so it's worth retaking in 3 to 6 months. This is a 20-statement self-report, not a clinical assessment, and it should never be the only input for a hiring, promotion or other decision.</p>
  </td></tr></table>`)}

  <tr><td style="padding:28px 32px 0">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:2px solid ${GOLD};border-radius:14px"><tr><td style="padding:22px 24px">
      ${eyebrow("Full report · INR 999", "#9A6B00")}
      <p style="margin:0 0 6px;font-family:${FONT};font-size:19px;font-weight:800;line-height:1.3;color:${INK}">Unlock your full report and action framework</p>
      <p style="margin:0 0 16px;font-family:${FONT};font-size:14px;line-height:1.6;color:${BODY}">Go deeper than this snapshot with your detailed Corporate Brain report and a personal action framework.</p>
      <table role="presentation" cellpadding="0" cellspacing="0"><tr><td bgcolor="${NAVY}" style="background:${NAVY};border-radius:8px">
        <a href="${unlockHref}" style="display:inline-block;padding:13px 20px;font-family:${FONT};font-size:15px;font-weight:700;color:#FFFFFF;text-decoration:none">Unlock full report and action framework at INR 999/-</a>
      </td></tr></table>
    </td></tr></table>
  </td></tr>

  <tr><td style="padding:20px 32px 32px">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" bgcolor="${NAVY}" style="background:${NAVY};border-radius:14px"><tr><td style="padding:24px">
      <p style="margin:0 0 14px;font-family:${FONT};font-size:18px;font-weight:800;line-height:1.3;color:#FFFFFF">${ctaLead}</p>
      <table role="presentation" cellpadding="0" cellspacing="0"><tr><td bgcolor="${LIME}" style="background:${LIME};border-radius:8px"><a href="${ctaHref}" style="display:inline-block;padding:12px 20px;font-family:${FONT};font-size:15px;font-weight:700;color:${NAVY};text-decoration:none">${ctaLabel} &rarr;</a></td></tr></table>
    </td></tr></table>
  </td></tr>

  <tr><td bgcolor="${NAVY}" style="background:${NAVY};padding:22px 32px">
    <img src="${base}/email/brain-interacts-logo.png" width="112" height="28" alt="Brain Interacts" style="display:block;border:0;width:112px;height:28px;margin-bottom:12px">
    <p style="margin:0;font-family:${FONT};font-size:12px;line-height:1.7;color:#8EA0BA"><a href="mailto:${esc(site.email)}" style="color:#C9D3E2;text-decoration:none">${esc(site.email)}</a> · ${esc(site.phone)}<br>You received this because you asked for your report at braininteracts.com.</p>
  </td></tr>

</table>
</td></tr></table>
</body></html>`;

  // The same report as a PDF attachment. If it fails, the email still goes out without it.
  let pdf: { filename: string; content: string } | null = null;
  try {
    const bytes = await buildReportPdf({
      leadership,
      main: { name: main, similarity: ranked[0].similarity, how: mainInfo.how, watch: mainInfo.watch, manage: mainInfo.manage },
      secondary: secondaryInfo ? { name: secondaryInfo.name, similarity: ranked[1].similarity, how: secondaryInfo.how, watch: secondaryInfo.watch, manage: secondaryInfo.manage } : null,
      noSecondaryNote: `No secondary archetype: your next-closest match, ${ranked[1].name}, is more than ${SECONDARY_GAP} points behind, so your profile points clearly to ${main}.`,
      traits: traitOrder.map((k) => {
        const v = scores[k];
        const high = v >= CUTOFF;
        return { key: k, name: TRAIT_NAMES[k], score: v, level: `${high ? "High" : "Low"}${Math.abs(v - CUTOFF) <= BORDERLINE ? " (borderline)" : ""}`, text: high ? traitText[k].high : traitText[k].low };
      }),
      ranked: ranked.slice(0, 5).map((r, i) => ({ name: r.name, similarity: r.similarity, strong: i === 0 || (i === 1 && !!secondary) })),
      modifiers: modifiers.map((m) => ({ name: m.name, effect: m.effect })),
      unlockUrl: unlockHref,
      ctaLead,
      ctaLabel,
      ctaUrl: ctaHref,
      email: site.email,
      phone: site.phone,
    });
    pdf = { filename: `${leadership ? "Executive" : "Working-style"}-report-${main}.pdf`, content: Buffer.from(bytes).toString("base64") };
  } catch (err) {
    console.error("[snapshot] PDF failed", err);
  }

  const toVisitor = await sendEmail({ attachments: pdf ? [pdf] : undefined, to: email, subject: leadership ? `Your executive working-style report: ${styleLabel}` : `Your Brain Interacts working-style report: ${styleLabel}`, html: report });
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
        ["Pattern (O-C-E-A-N)", pattern],
        ...traitOrder.map((k) => [TRAIT_NAMES[k], scores[k]] as [string, number]),
      ]),
    }).catch(() => undefined);
  }
  return reply(toVisitor);
}
