// Section building blocks shared by the inner pages. Each block takes plain
// content so pages read as data, and the look stays consistent site-wide.

import Link from "next/link";
import type { ReactNode } from "react";
import type { IconName } from "./Icon";
import { ArrowLink, ButtonLink, type ButtonVariant, Eyebrow, type EyebrowColor, H2, Section, type Tone } from "./ui";

/** Brand colours used for accents, top rules and numbers. */
export type Accent = "gold" | "sky" | "lime" | "white" | "amber" | "blue" | "green" | "navy" | "slate" | "link";

const accentText: Record<Accent, string> = {
  gold: "text-gold",
  sky: "text-sky",
  lime: "text-lime",
  white: "text-white",
  amber: "text-[#B07F0E]",
  blue: "text-ink-link",
  green: "text-green-ink",
  navy: "text-navy",
  slate: "text-ink-muted",
  link: "text-ink-link",
};

const accentBorder: Record<Accent, string> = {
  gold: "border-gold",
  sky: "border-sky",
  lime: "border-lime",
  white: "border-white",
  amber: "border-[#D9A21F]",
  blue: "border-[#2F8FD8]",
  green: "border-[#7FB82E]",
  navy: "border-navy",
  slate: "border-ink-muted",
  link: "border-ink-link",
};

export const textFor = (accent: Accent) => accentText[accent];

export type SectionLabel = { icon: IconName; text: string; color: EyebrowColor };
export type Action = { label: string; href: string; variant?: ButtonVariant };

const bodyText = (tone: Tone) => (tone === "dark" ? "text-on-navy" : "text-ink-body");
const ruleColor = (tone: Tone) => (tone === "dark" ? "border-navy-line" : "border-rule");

function Actions({ actions, className = "" }: { actions: Action[]; className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {actions.map((a) => (
        <ButtonLink key={a.label} href={a.href} variant={a.variant}>
          {a.label}
        </ButtonLink>
      ))}
    </div>
  );
}

function SectionHead({ label, title, className = "mb-10 md:mb-14" }: { label?: SectionLabel; title: ReactNode; tone?: Tone; className?: string }) {
  return (
    <>
      {label && (
        <Eyebrow icon={label.icon} color={label.color}>
          {label.text}
        </Eyebrow>
      )}
      <H2 className={`max-w-[820px] ${className}`}>{title}</H2>
    </>
  );
}

/** "Home / Products / Corporate Brain" trail at the top of inner pages. */
export function Breadcrumbs({ trail }: { trail: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 text-sm text-on-navy-muted md:mb-10">
      <ol className="m-0 flex list-none flex-wrap gap-2 p-0">
        {trail.map((crumb, i) => (
          <li key={crumb.label} className="flex gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {crumb.href ? (
              <Link href={crumb.href} className="text-on-navy-muted no-underline hover:text-white">
                {crumb.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-white">
                {crumb.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Dark opening section of every inner page. */
export function PageHero({
  trail,
  label,
  title,
  accent,
  accentColor = "gold",
  lead,
  actions = [],
  aside,
  children,
}: {
  trail: { label: string; href?: string }[];
  label?: SectionLabel;
  title: ReactNode;
  accent?: ReactNode;
  accentColor?: Accent;
  lead?: ReactNode;
  actions?: Action[];
  aside?: ReactNode;
  children?: ReactNode;
}) {
  const text = (
    <div>
      {label && (
        <Eyebrow icon={label.icon} color={label.color}>
          {label.text}
        </Eyebrow>
      )}
      <h1 className="max-w-[980px] text-[clamp(36px,5vw,66px)] leading-[1.05] font-extrabold tracking-[-0.03em]">
        {title} {accent && <span className={textFor(accentColor)}>{accent}</span>}
      </h1>
      {lead && <p className="mt-7 max-w-[680px] text-[17px] leading-[1.7] text-on-navy md:text-[19px]">{lead}</p>}
      {children}
      {actions.length > 0 && <Actions actions={actions} className="mt-9" />}
    </div>
  );
  return (
    <Section tone="dark" innerClassName="pt-10 pb-16 md:pt-14 md:pb-24">
      <Breadcrumbs trail={trail} />
      {aside ? <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">{text}{aside}</div> : text}
    </Section>
  );
}

/** Heading on the left, a few paragraphs on the right. */
export function SplitIntro({ tone, label, title, paragraphs, emphasis }: { tone: Tone; label?: SectionLabel; title: ReactNode; paragraphs: ReactNode[]; emphasis?: ReactNode }) {
  return (
    <Section tone={tone}>
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
        <div>
          {label && (
            <Eyebrow icon={label.icon} color={label.color}>
              {label.text}
            </Eyebrow>
          )}
          <h2 className="text-[clamp(30px,3.4vw,46px)] leading-[1.12] font-extrabold tracking-[-0.02em]">{title}</h2>
        </div>
        <div className={`flex flex-col gap-5 text-[17px] leading-[1.75] md:text-lg ${tone === "dark" ? "text-on-navy" : "text-[#3A4A63]"}`}>
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          {emphasis && <p className={`font-bold ${tone === "dark" ? "text-white" : "text-ink"}`}>{emphasis}</p>}
        </div>
      </div>
    </Section>
  );
}

export type Card = {
  tag?: string;
  title: ReactNode;
  subtitle?: string;
  subtitleAccent?: Accent;
  text?: ReactNode;
  details?: { heading: string; text: string }[];
  link?: { label: string; href: string; accent?: Accent };
  rule?: Accent;
};

/** A row of flat cards, each topped with a thin or coloured rule. */
export function CardGrid({
  tone,
  label,
  title,
  cards,
  columns = 3,
  footnote,
}: {
  tone: Tone;
  label?: SectionLabel;
  title?: ReactNode;
  cards: Card[];
  columns?: 2 | 3 | 4 | 5;
  footnote?: ReactNode;
}) {
  const cols = { 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4", 5: "sm:grid-cols-2 lg:grid-cols-5" }[columns];
  return (
    <Section tone={tone}>
      {title && <SectionHead label={label} title={title} tone={tone} />}
      <div className={`grid gap-10 md:gap-8 ${cols}`}>
        {cards.map((card, i) => (
          <div key={i} className={card.rule ? `border-t-[3px] pt-6 ${accentBorder[card.rule]}` : `border-t pt-6 ${ruleColor(tone)}`}>
            {card.tag && (
              <span className={`font-mono text-xs uppercase ${tone === "dark" ? "text-on-navy-muted" : "text-ink-muted"}`}>{card.tag}</span>
            )}
            <h3 className={`text-xl leading-snug font-bold ${card.tag ? "mt-2.5" : ""}`}>{card.title}</h3>
            {card.subtitle && (
              <p className={`mt-1.5 text-[13px] font-semibold ${card.subtitleAccent ? textFor(card.subtitleAccent) : bodyText(tone)}`}>{card.subtitle}</p>
            )}
            {card.text && <p className={`mt-2.5 leading-[1.7] ${bodyText(tone)}`}>{card.text}</p>}
            {card.details?.map((d) => (
              <div key={d.heading} className="mt-4">
                <p className={`text-[15px] font-bold ${card.rule ? textFor(card.rule) : ""}`}>{d.heading}</p>
                <p className={`mt-1 leading-[1.7] ${bodyText(tone)}`}>{d.text}</p>
              </div>
            ))}
            {card.link && (
              <ArrowLink href={card.link.href} tone={tone} className={`mt-4 inline-block ${card.link.accent ? textFor(card.link.accent) : ""}`}>
                {card.link.label}
              </ArrowLink>
            )}
          </div>
        ))}
      </div>
      {footnote && <p className={`mt-12 border-t pt-6 text-[15px] leading-[1.7] ${ruleColor(tone)} ${tone === "dark" ? "text-on-navy-muted" : "text-ink-muted"}`}>{footnote}</p>}
    </Section>
  );
}

/** Comparison table. Stacks into labelled cards on phones. */
export function CompareTable({
  tone,
  label,
  title,
  headings,
  rows,
  highlightLast = true,
  template,
  intro,
  footnote,
}: {
  tone: Tone;
  label?: SectionLabel;
  title: ReactNode;
  headings: string[];
  rows: string[][];
  highlightLast?: boolean;
  /** Tailwind grid-template class for desktop, e.g. "md:grid-cols-[1fr_2fr]". */
  template?: string;
  intro?: ReactNode;
  footnote?: ReactNode;
}) {
  const cols = template ?? { 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "md:grid-cols-4" }[headings.length] ?? "md:grid-cols-3";
  const muted = tone === "dark" ? "text-on-navy-soft" : "text-ink-muted";
  const lastHead = tone === "dark" ? "text-lime" : "text-ink-link";
  return (
    <Section tone={tone}>
      <SectionHead label={label} title={title} tone={tone} className={intro ? "mb-5" : undefined} />
      {intro && <p className={`mb-10 max-w-[760px] text-[17px] leading-[1.75] md:mb-14 ${bodyText(tone)}`}>{intro}</p>}
      <div role="table" aria-label={typeof title === "string" ? title : undefined}>
        <div role="row" className={`hidden gap-6 border-b-2 pb-3 font-mono text-[13px] uppercase md:grid ${cols} ${tone === "dark" ? "border-white text-on-navy-muted" : "border-navy text-ink-muted"}`}>
          {headings.map((h, i) => (
            <span key={h} role="columnheader" className={highlightLast && i === headings.length - 1 ? lastHead : ""}>
              {h}
            </span>
          ))}
        </div>
        {rows.map((row) => (
          <div key={row[0]} role="row" className={`grid gap-2 border-b py-5 md:gap-6 ${cols} ${ruleColor(tone)}`}>
            {row.map((cell, i) => (
              <div key={i} role="cell">
                <span className={`mb-1 block font-mono text-[11px] uppercase md:hidden ${highlightLast && i === row.length - 1 ? lastHead : muted}`}>{headings[i]}</span>
                {i === 0 ? (
                  <strong className="text-[17px]">{cell}</strong>
                ) : (
                  <span className={i === row.length - 1 && highlightLast ? "" : muted}>{cell}</span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      {footnote && <p className={`mt-8 text-[15px] leading-[1.7] ${bodyText(tone)}`}>{footnote}</p>}
    </Section>
  );
}

/** Dashed box standing in for a product screenshot that hasn't been supplied yet. */
export function ScreenshotPlaceholder({ tone, title, caption }: { tone: Tone; title: string; caption: string }) {
  return (
    <div
      className={`flex aspect-video flex-col items-center justify-center gap-2 rounded-2xl border border-dashed p-6 text-center ${
        tone === "dark" ? "border-navy-line text-[#8D9AB0]" : "border-rule-strong text-ink-muted"
      }`}
    >
      <strong className={`text-base ${tone === "dark" ? "text-white" : "text-ink"}`}>[SCREENSHOT: {title}]</strong>
      <span className="text-sm">{caption}</span>
    </div>
  );
}

/** Text with a feature list on one side, a visual on the other. */
export function FeatureSplit({
  tone,
  label,
  title,
  features,
  visual,
  visualFirst = false,
}: {
  tone: Tone;
  label: SectionLabel;
  title: ReactNode;
  features: { title: string; text: string }[];
  visual: ReactNode;
  visualFirst?: boolean;
}) {
  return (
    <Section tone={tone}>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className={visualFirst ? "lg:order-2" : ""}>
          <SectionHead label={label} title={title} tone={tone} className="mb-6" />
          <FeatureRows tone={tone} features={features} />
        </div>
        <div className={visualFirst ? "lg:order-1" : ""}>{visual}</div>
      </div>
    </Section>
  );
}

export function FeatureRows({ tone, features, large = false }: { tone: Tone; features: { title: string; text: string }[]; large?: boolean }) {
  return (
    <ul className="m-0 list-none p-0">
      {features.map((f) => (
        <li key={f.title} className={`border-b py-4 ${ruleColor(tone)}`}>
          <strong className={`block ${large ? "text-lg" : ""}`}>{f.title}</strong>
          <span className={`mt-1 block leading-[1.7] ${bodyText(tone)}`}>{f.text}</span>
        </li>
      ))}
    </ul>
  );
}

/** Heading on the left, feature rows on the right. */
export function SplitList({ tone, label, title, features }: { tone: Tone; label: SectionLabel; title: ReactNode; features: { title: string; text: string }[] }) {
  return (
    <Section tone={tone}>
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHead label={label} title={title} tone={tone} className="mb-0" />
        </div>
        <FeatureRows tone={tone} features={features} large />
      </div>
    </Section>
  );
}

/** Numbered steps: 01, 02, 03… */
export function Steps({
  tone,
  label,
  title,
  steps,
  large = false,
}: {
  tone: Tone;
  label: SectionLabel;
  title: ReactNode;
  steps: { title: string; subtitle?: string; text: string; accent: Accent }[];
  large?: boolean;
}) {
  const cols = steps.length === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3";
  return (
    <Section tone={tone}>
      <SectionHead label={label} title={title} tone={tone} />
      <ol className={`m-0 grid list-none gap-10 p-0 md:gap-8 ${cols}`}>
        {steps.map((s, i) => (
          <li key={s.title} className={large ? "" : `border-t pt-6 ${ruleColor(tone)}`}>
            <span className={`font-mono font-medium ${large ? "text-[40px]" : "text-[32px]"} ${textFor(s.accent)}`}>{String(i + 1).padStart(2, "0")}</span>
            <h3 className={`mt-2 font-bold ${large ? "text-[22px]" : "text-[19px]"}`}>{s.title}</h3>
            {s.subtitle && <p className={`mt-1 text-sm font-semibold ${s.accent === "amber" ? "text-gold-ink" : textFor(s.accent)}`}>{s.subtitle}</p>}
            <p className={`mt-2.5 leading-[1.7] ${bodyText(tone)}`}>{s.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

/** Centred closing call to action. */
export function CtaBlock({
  tone,
  title,
  accent,
  accentColor,
  text,
  actions,
}: {
  tone: Tone;
  title: ReactNode;
  accent?: ReactNode;
  accentColor?: Accent;
  text?: ReactNode;
  actions: Action[];
}) {
  return (
    <Section tone={tone} className={tone === "light" ? "border-t border-rule" : ""} innerClassName="py-16 md:py-[104px]">
      <div className="text-center">
        <h2 className="mx-auto max-w-[860px] text-[clamp(32px,4vw,52px)] leading-[1.08] font-extrabold tracking-[-0.02em]">
          {title} {accent && <span className={textFor(accentColor ?? (tone === "dark" ? "gold" : "link"))}>{accent}</span>}
        </h2>
        {text && <p className={`mx-auto mt-5 max-w-[600px] text-lg leading-[1.7] ${bodyText(tone)}`}>{text}</p>}
        <Actions actions={actions} className="mt-8 justify-center" />
      </div>
    </Section>
  );
}

/** Row of big numbers with a short caption under each. */
export function Stats({
  tone,
  label,
  title,
  intro,
  stats,
  footnote,
}: {
  tone: Tone;
  label: SectionLabel;
  title: ReactNode;
  intro?: ReactNode;
  stats: { value: string; unit?: string; text?: string; accent: Accent; small?: boolean }[];
  footnote?: ReactNode;
}) {
  const cols = stats.length > 4 ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-6" : "sm:grid-cols-2 lg:grid-cols-4";
  return (
    <Section tone={tone}>
      <SectionHead label={label} title={title} className={intro ? "mb-5" : undefined} />
      {intro && <p className={`mb-10 max-w-[760px] text-[17px] leading-[1.75] md:mb-14 ${bodyText(tone)}`}>{intro}</p>}
      <dl className={`m-0 grid gap-10 md:gap-8 ${cols}`}>
        {stats.map((s) => (
          <div key={s.value + (s.text ?? "")} className={`border-t pt-6 ${ruleColor(tone)}`}>
            <dt className={`leading-none font-extrabold tracking-[-0.03em] ${s.small ? "text-[22px]" : "text-[clamp(52px,5vw,72px)]"} ${textFor(s.accent)}`}>
              {s.value}
              {s.unit && <span className="text-[0.4em]">{s.unit}</span>}
            </dt>
            {s.text && <dd className={`m-0 mt-3 leading-[1.7] ${bodyText(tone)}`}>{s.text}</dd>}
          </div>
        ))}
      </dl>
      {footnote && <p className={`mt-12 border-t pt-6 text-[15px] leading-[1.7] ${ruleColor(tone)} ${tone === "dark" ? "text-on-navy-muted" : "text-ink-muted"}`}>{footnote}</p>}
    </Section>
  );
}

/** Expandable questions and answers. Works without JavaScript. */
export function FaqList({ tone, label, title, items }: { tone: Tone; label: SectionLabel; title: ReactNode; items: { q: string; a: ReactNode }[] }) {
  return (
    <Section tone={tone}>
      <SectionHead label={label} title={title} />
      <div className="max-w-[860px]">
        {items.map((item) => (
          <details key={item.q} className={`group border-b py-5 ${ruleColor(tone)}`}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold [&::-webkit-details-marker]:hidden">
              {item.q}
              <span aria-hidden="true" className={`text-2xl leading-none transition-transform group-open:rotate-45 ${tone === "dark" ? "text-lime" : "text-ink-link"}`}>
                +
              </span>
            </summary>
            <div className={`mt-3 leading-[1.75] ${bodyText(tone)}`}>{item.a}</div>
          </details>
        ))}
      </div>
    </Section>
  );
}

/** Label, heading and a paragraph or two, with no grid. */
export function TextBlock({ tone, label, title, children }: { tone: Tone; label: SectionLabel; title: ReactNode; children: ReactNode }) {
  return (
    <Section tone={tone}>
      <SectionHead label={label} title={title} className="mb-6" />
      <div className={`flex max-w-[760px] flex-col gap-5 text-[17px] leading-[1.75] ${bodyText(tone)}`}>{children}</div>
    </Section>
  );
}
