// Builds the branded working-style report as a PDF (attached to the report email).
// Uses pdf-lib with the built-in Helvetica fonts, so it runs anywhere with no extra files.

import { PDFDocument, PDFFont, PDFName, PDFPage, PDFString, rgb, StandardFonts } from "pdf-lib";
import { LOGO_PNG_BASE64 } from "./logoPng";

export type ReportPdfData = {
  leadership: boolean;
  main: { name: string; similarity: number; how: string; watch: string; manage: string };
  secondary: { name: string; similarity: number; how: string; watch: string; manage: string } | null;
  noSecondaryNote: string;
  traits: { key: string; name: string; score: number; level: string; text: string }[];
  ranked: { name: string; similarity: number; strong: boolean }[];
  modifiers: { name: string; effect: string }[];
  unlockUrl: string;
  ctaLead: string;
  ctaLabel: string;
  ctaUrl: string;
  email: string;
  phone: string;
};

const hex = (h: string) => rgb(parseInt(h.slice(1, 3), 16) / 255, parseInt(h.slice(3, 5), 16) / 255, parseInt(h.slice(5, 7), 16) / 255);
const C = {
  navy: hex("#0F172A"),
  raised: hex("#1E293B"),
  lime: hex("#F4C20D"),
  gold: hex("#F4C20D"),
  sky: hex("#CBD5E1"),
  green: hex("#15803D"),
  orange: hex("#B91C1C"),
  ink: hex("#0F172A"),
  body: hex("#475569"),
  muted: hex("#64748B"),
  rule: hex("#DCE3EB"),
  band: hex("#EEF2F6"),
  grey: hex("#94A3B8"),
  onNavy: hex("#CBD5E1"),
  onNavyMuted: hex("#94A3B8"),
  link: hex("#0F172A"),
  white: rgb(1, 1, 1),
};
const TRAIT_COLOR: Record<string, ReturnType<typeof rgb>> = { O: C.gold, C: C.sky, E: C.lime, A: C.green, N: C.orange };

const W = 595.28;
const H = 841.89;
const M = 44; // side margin
const CW = W - 2 * M; // content width

// Helvetica only covers Latin-1 (WinAnsi); swap anything else for a safe equivalent.
function safe(t: string) {
  return t
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[–—]/g, "-")
    .replace(/→/g, "->")
    .replace(/₹/g, "INR ")
    .replace(/[^\x20-\x7E -ÿ]/g, "");
}

function wrap(text: string, font: PDFFont, size: number, width: number): string[] {
  const words = safe(text).split(/\s+/);
  const lines: string[] = [];
  let line = "";
  for (const w of words) {
    const next = line ? `${line} ${w}` : w;
    if (font.widthOfTextAtSize(next, size) > width && line) {
      lines.push(line);
      line = w;
    } else line = next;
  }
  if (line) lines.push(line);
  return lines;
}

function addLink(doc: PDFDocument, page: PDFPage, x: number, y: number, w: number, h: number, url: string) {
  const annot = doc.context.obj({
    Type: "Annot",
    Subtype: "Link",
    Rect: [x, y, x + w, y + h],
    Border: [0, 0, 0],
    A: { Type: "Action", S: "URI", URI: PDFString.of(url) },
  });
  const ref = doc.context.register(annot);
  const annots = page.node.lookup(PDFName.of("Annots"));
  if (annots && "push" in annots) (annots as unknown as { push: (r: unknown) => void }).push(ref);
  else page.node.set(PDFName.of("Annots"), doc.context.obj([ref]));
}

export async function buildReportPdf(d: ReportPdfData): Promise<Uint8Array> {
  const doc = await PDFDocument.create();
  doc.setTitle(d.leadership ? "Executive working-style report" : "Working-style report");
  doc.setAuthor("Brain Interacts");
  doc.setCreator("Corporate Brain");
  const reg = await doc.embedFont(StandardFonts.Helvetica);
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);
  const mono = await doc.embedFont(StandardFonts.Courier);
  const logo = await doc.embedPng(Buffer.from(LOGO_PNG_BASE64, "base64"));

  let page = doc.addPage([W, H]);
  let y = H; // cursor from the top; drawing uses PDF coordinates (origin bottom-left)

  const text = (t: string, x: number, yy: number, size: number, font: PDFFont, color = C.ink) =>
    page.drawText(safe(t), { x, y: yy, size, font, color });

  const para = (t: string, x: number, size: number, font: PDFFont, color: ReturnType<typeof rgb>, width: number, lead = 1.5) => {
    for (const l of wrap(t, font, size, width)) {
      y -= size * lead;
      text(l, x, y, size, font, color);
    }
  };

  const footer = () => {
    page.drawRectangle({ x: 0, y: 0, width: W, height: 46, color: C.navy });
    page.drawImage(logo, { x: M, y: 15, width: 80, height: 20 });
    const contact = `${d.email}  |  ${d.phone}`;
    text(contact, W - M - reg.widthOfTextAtSize(safe(contact), 8.5), 20, 8.5, reg, C.onNavyMuted);
  };

  const ensure = (need: number) => {
    if (y - need < 70) {
      footer();
      page = doc.addPage([W, H]);
      y = H - 48;
    }
  };

  const eyebrow = (t: string, color = C.link) => {
    y -= 12;
    text(t.toUpperCase(), M, y, 8, mono, color);
  };
  const heading = (t: string) => {
    y -= 22;
    text(t, M, y, 16, bold);
    y -= 4;
  };

  // ---- Navy header with the primary archetype ----
  const headerBottomEstimate = 300;
  page.drawRectangle({ x: 0, y: H - headerBottomEstimate, width: W, height: headerBottomEstimate, color: C.navy });
  page.drawImage(logo, { x: M, y: H - 64, width: 136, height: 34 });
  y = H - 96;
  text((d.leadership ? "Corporate Brain - Executive report" : "Corporate Brain - Working-style report").toUpperCase(), M, y, 8.5, mono, C.lime);
  y -= 22;
  text("Your primary archetype", M, y, 11, reg, C.onNavy);
  y -= 34;
  text(d.main.name, M, y, 32, bold, C.white);
  if (d.secondary) text(`with ${/^[AEIOU]/.test(d.secondary.name) ? "an" : "a"} ${d.secondary.name} side`, M + bold.widthOfTextAtSize(safe(d.main.name), 32) + 10, y + 2, 13, bold, C.onNavyMuted);
  // match pill
  const pill = `${d.main.similarity.toFixed(1)} / 100 match`;
  const pw = mono.widthOfTextAtSize(pill, 9.5) + 20;
  y -= 30;
  page.drawRectangle({ x: M, y: y - 5, width: pw, height: 19, color: C.lime });
  text(pill, M + 10, y + 1, 9.5, mono, C.navy);
  y -= 8;
  para(d.main.how, M, 11.5, reg, C.white, CW);
  // watch / manage box
  const colW = (CW - 24) / 2;
  const watchLines = wrap(d.main.watch, reg, 10, colW - 4);
  const manageLines = wrap(d.main.manage, reg, 10, colW - 4);
  const boxH = 30 + Math.max(watchLines.length, manageLines.length) * 14;
  y -= 14;
  page.drawRectangle({ x: M, y: y - boxH, width: CW, height: boxH, color: C.raised });
  text("WATCH FOR", M + 14, y - 18, 7.5, mono, C.gold);
  text((d.leadership ? "Works best when" : "Best managed with").toUpperCase(), M + 14 + colW + 12, y - 18, 7.5, mono, C.lime);
  watchLines.forEach((l, i) => text(l, M + 14, y - 34 - i * 14, 10, reg, C.onNavy));
  manageLines.forEach((l, i) => text(l, M + 14 + colW + 12, y - 34 - i * 14, 10, reg, C.onNavy));
  y -= boxH + 22;
  // extend the navy band to the real header height
  const headerH = H - y;
  if (headerH > headerBottomEstimate) page.drawRectangle({ x: 0, y, width: W, height: headerH - headerBottomEstimate, color: C.navy });
  if (headerH < headerBottomEstimate) page.drawRectangle({ x: 0, y: H - headerBottomEstimate, width: W, height: headerBottomEstimate - headerH, color: C.white });

  // ---- Secondary archetype ----
  y -= 14;
  eyebrow("Secondary archetype");
  if (d.secondary) {
    const s = d.secondary;
    const lines = [...wrap(s.how, reg, 10.5, CW - 30)];
    const w2 = wrap(`Watch for: ${s.watch}`, reg, 10, CW - 30);
    const m2 = wrap(`${d.leadership ? "Works best when" : "Best managed with"}: ${s.manage}`, reg, 10, CW - 30);
    const h = 54 + (lines.length + w2.length + m2.length) * 14.5;
    ensure(h + 10);
    y -= 8;
    page.drawRectangle({ x: M, y: y - h, width: CW, height: h, borderColor: C.rule, borderWidth: 1, color: C.white });
    page.drawRectangle({ x: M, y: y - h, width: 4, height: h, color: C.gold });
    text(`${s.similarity.toFixed(1)} / 100 MATCH`, M + 18, y - 18, 7.5, mono, C.muted);
    text(s.name, M + 18, y - 38, 17, bold);
    let yy = y - 40;
    for (const l of lines) text(l, M + 18, (yy -= 14.5), 10.5, reg, C.ink);
    for (const l of w2) text(l, M + 18, (yy -= 14.5), 10, reg, C.body);
    for (const l of m2) text(l, M + 18, (yy -= 14.5), 10, reg, C.body);
    y -= h;
  } else {
    para(d.noSecondaryNote, M, 10.5, reg, C.body, CW);
  }

  // ---- Trait scores ----
  y -= 18;
  ensure(60);
  eyebrow("Big Five");
  heading("Your five trait scores");
  for (const t of d.traits) {
    const desc = wrap(`${t.level} - ${t.text}`, reg, 9.5, CW);
    ensure(36 + desc.length * 13);
    y -= 18;
    text(t.name, M, y, 11, bold);
    const sc = `${t.score} / 100`;
    text(sc, W - M - mono.widthOfTextAtSize(sc, 10), y, 10, mono, C.ink);
    y -= 12;
    page.drawRectangle({ x: M, y, width: CW, height: 6, color: C.rule });
    page.drawRectangle({ x: M, y, width: Math.max((CW * t.score) / 100, 4), height: 6, color: TRAIT_COLOR[t.key] ?? C.navy });
    for (const l of desc) text(l, M, (y -= 13), 9.5, reg, C.body);
    y -= 6;
    page.drawLine({ start: { x: M, y }, end: { x: W - M, y }, thickness: 0.6, color: C.rule });
  }
  para("Scores run from 0 to 100. 60 or more counts as High. For neuroticism, a higher score means more sensitivity to stress.", M, 8.5, reg, C.muted, CW);

  // ---- Archetype ranking ----
  y -= 18;
  ensure(150);
  eyebrow("Archetype match");
  heading("Your closest archetypes");
  for (const [i, r] of d.ranked.entries()) {
    y -= 20;
    text(`0${i + 1}`, M, y, 9, mono, C.muted);
    text(r.name, M + 26, y, 10.5, r.strong ? bold : reg);
    const bx = M + 130;
    const bw = CW - 130 - 46;
    page.drawRectangle({ x: bx, y: y + 1, width: bw, height: 5, color: C.rule });
    page.drawRectangle({ x: bx, y: y + 1, width: (bw * r.similarity) / 100, height: 5, color: r.strong ? C.navy : C.grey });
    const v = r.similarity.toFixed(1);
    text(v, W - M - mono.widthOfTextAtSize(v, 10), y, 10, mono, C.ink);
  }

  // ---- Modifiers ----
  y -= 22;
  ensure(80);
  eyebrow("Modifiers");
  heading("What adjusts the guidance");
  if (d.modifiers.length) {
    for (const m of d.modifiers) {
      ensure(20);
      y -= 18;
      page.drawCircle({ x: M + 3, y: y + 3.5, size: 3, color: C.lime });
      text(m.name, M + 12, y, 10.5, bold);
      text(`- ${m.effect}`, M + 16 + bold.widthOfTextAtSize(safe(m.name), 10.5), y, 10.5, reg, C.body);
    }
  } else para("None of your scores crossed a modifier threshold, so the archetype guidance applies as it is.", M, 10.5, reg, C.body, CW);

  // ---- How to use ----
  const use =
    "Treat it as the start of a conversation, not a label: ask yourself whether it sounds right, and correct it where it doesn't. Working styles change, so it's worth retaking in 3 to 6 months. This is a 20-statement self-report, not a clinical assessment, and it should never be the only input for a hiring, promotion or other decision.";
  const useLines = wrap(use, reg, 9.5, CW - 32);
  const useH = 34 + useLines.length * 13.5;
  y -= 22;
  ensure(useH + 10);
  page.drawRectangle({ x: M, y: y - useH, width: CW, height: useH, color: C.band });
  text("HOW TO USE THIS", M + 16, y - 18, 7.5, mono, C.muted);
  useLines.forEach((l, i) => text(l, M + 16, y - 34 - i * 13.5, 9.5, reg, C.body));
  y -= useH;

  // ---- Unlock full report (INR 999) ----
  const unlockH = 108;
  y -= 18;
  ensure(unlockH + 10);
  page.drawRectangle({ x: M, y: y - unlockH, width: CW, height: unlockH, color: C.navy });
  text("FULL REPORT  -  INR 999", M + 20, y - 24, 8, mono, C.gold);
  text("Unlock your full report and action framework", M + 20, y - 46, 15, bold, C.white);
  const btn = "Unlock full report and action framework at INR 999/-";
  const btnW = bold.widthOfTextAtSize(btn, 10.5) + 28;
  page.drawRectangle({ x: M + 20, y: y - 92, width: btnW, height: 30, color: C.lime });
  text(btn, M + 34, y - 81, 10.5, bold, C.navy);
  addLink(doc, page, M + 20, y - 92, btnW, 30, d.unlockUrl);
  y -= unlockH;

  // ---- Demo CTA ----
  y -= 16;
  ensure(30);
  y -= 14;
  text(d.ctaLead, M, y, 10.5, reg, C.body);
  const linkX = M + reg.widthOfTextAtSize(safe(d.ctaLead), 10.5) + 6;
  text(`${d.ctaLabel} ->`, linkX, y, 10.5, bold, C.link);
  addLink(doc, page, linkX, y - 3, bold.widthOfTextAtSize(safe(`${d.ctaLabel} ->`), 10.5), 14, d.ctaUrl);

  footer();
  return doc.save();
}
