import type { ReactNode } from "react";
import Link from "next/link";
import { CtaBlock } from "./blocks";
import { Crumbs } from "./resources/parts";
import { LegalToc } from "./LegalToc";
import { enquiryHref } from "@/lib/enquiries";
import { routes } from "@/lib/site";

// Fill in before launch: the legal pages show these in brackets until then.
export const legal = {
  entity: "Brain Interacts LLP",
  address: "Smartworks 43EQ, Survey No. 43, Opp. Bharati Vidyapeeth School, Balewadi / Baner, Pune – 411045, Maharashtra, India",
  grievanceOfficer: "Srishti Sharma, Chief Research & Privacy Control Officer",
  city: "Pune, India",
  lastUpdated: "26 November 2026",
  privacyEmail: "privacy@braininteracts.com",
};

const tabs = [
  { label: "Privacy policy", href: routes.privacy },
  { label: "Terms of use", href: routes.terms },
  { label: "Cookie policy", href: routes.cookies },
  { label: "Data processing", href: "/legal/data-processing-addendum" },
];

const prose =
  "min-w-0 max-w-[780px] text-[15.5px] leading-[1.75] text-ink-body [&_h2]:font-display [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-[24px] [&_h2]:font-bold [&_h2]:text-ink [&_li]:mt-2 [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6";

/** Shared legal layout: dark title band with tabs, then an "On this page" list beside readable text. */
export function LegalShell({ title, crumbLabel, meta, active, children, cta }: { title: string; crumbLabel?: string; meta: string; active?: string; children: ReactNode; cta?: ReactNode }) {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-[1280px] px-4 pt-10 pb-10 md:px-8 md:pt-12">
          <Crumbs items={[{ label: "Home", href: routes.home }, { label: "Legal", href: routes.legal }, { label: crumbLabel ?? title }]} />
          <h1 className="text-[clamp(34px,4.4vw,52px)] leading-[1.05] font-bold">{title}</h1>
          <p className="mt-3 text-on-navy">{meta}</p>
          <nav aria-label="Legal documents" className="mt-6 flex flex-wrap gap-2">
            {tabs.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                aria-current={active === t.href ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-[13.5px] font-semibold no-underline ${active === t.href ? "bg-white text-ink" : "border border-navy-line text-white hover:border-on-navy"}`}
              >
                {t.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-4 py-12 md:px-8 md:py-16 lg:grid-cols-[220px_minmax(0,1fr)]">
          <LegalToc targetId="legal-text" />
          <div id="legal-text" className={prose}>
            {children}
          </div>
        </div>
      </section>
      {cta}
    </>
  );
}

export function LegalPage({ title, lead, children, href }: { title: string; label?: string; lead: string; children: ReactNode; href?: string }) {
  return (
    <LegalShell
      title={title}
      meta={`Last updated: ${legal.lastUpdated}`}
      active={href}
      cta={
        <CtaBlock
          tone="dark"
          title="Questions about your data?"
          text="Ask what we hold, or request access, correction or erasure. Our Data Protection team will reply by email."
          actions={[{ label: "Contact our Data Protection team", href: enquiryHref("data-protection") }]}
        />
      }
    >
      <p className="mt-0! rounded-xl bg-green-tint p-5 text-ink">{lead}</p>
      {children}
    </LegalShell>
  );
}

/** A small table inside legal text; stacks into labelled rows on phones. */
export function LegalTable({ headings, rows }: { headings: string[]; rows: string[][] }) {
  return (
    <div role="table" className="mt-6 border-t-2 border-navy text-[14px]">
      <div role="row" className="hidden gap-4 border-b border-rule py-3 font-mono text-xs text-ink-muted uppercase md:grid md:grid-cols-[1.2fr_1fr_1.4fr]">
        {headings.map((h) => (
          <span key={h} role="columnheader">
            {h}
          </span>
        ))}
      </div>
      {rows.map((row) => (
        <div key={row[0]} role="row" className="grid gap-1 border-b border-rule py-4 md:grid-cols-[1.2fr_1fr_1.4fr] md:gap-4">
          {row.map((cell, i) => (
            <div key={i} role="cell">
              <span className="block font-mono text-[11px] text-ink-muted uppercase md:hidden">{headings[i]}</span>
              {i === 0 ? <strong className="text-ink">{cell}</strong> : cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
