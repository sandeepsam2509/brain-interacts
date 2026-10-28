import type { ReactNode } from "react";
import { PageHero } from "./blocks";
import { Section } from "./ui";
import { routes } from "@/lib/site";

// Fill in before launch: the legal pages show these in brackets until then.
export const legal = {
  entity: "[Legal entity name]",
  address: "[Registered address]",
  grievanceOfficer: "[Name]",
  city: "[city of registered office]",
  lastUpdated: "[date of publication]",
  privacyEmail: "privacy@braininteracts.com",
};

/** Shared layout for Privacy, Terms and Cookies: dark title band, then readable prose. */
export function LegalPage({ title, label, lead, children }: { title: string; label: string; lead: string; children: ReactNode }) {
  return (
    <>
      <PageHero trail={[{ label: "Home", href: routes.home }, { label: title }]} label={{ icon: "grid", text: label, color: "gold" }} title={title} lead={lead} />
      <Section tone="light">
        <div className="max-w-[780px] text-[17px] leading-[1.75] text-ink-body [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:text-ink [&_li]:mt-2 [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6">
          <p className="font-mono text-sm text-ink-muted">Last updated: {legal.lastUpdated}</p>
          {children}
        </div>
      </Section>
    </>
  );
}

/** A small table inside legal text; stacks into labelled rows on phones. */
export function LegalTable({ headings, rows }: { headings: string[]; rows: string[][] }) {
  return (
    <div role="table" className="mt-6 border-t-2 border-navy text-[15px]">
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
