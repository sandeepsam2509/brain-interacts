import type { Metadata } from "next";
import Link from "next/link";
import { CtaBlock, PageHero } from "@/components/blocks";
import { Section } from "@/components/ui";
import { legalDocHref, legalDocs, legalGroups } from "@/content/legal";
import { enquiryHref } from "@/lib/enquiries";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Legal",
  description: "Brain Interacts agreements, policies and privacy documents, written for Indian law.",
  alternates: { canonical: routes.legal },
};

const extra = [
  { title: "Privacy Policy", group: "Privacy and data", summary: "How we collect, use and protect personal data as a Data Fiduciary.", href: routes.privacy },
  { title: "Cookie Policy", group: "Privacy and data", summary: "The cookies and similar technologies our website uses, and your choices.", href: routes.cookies },
];

export default function LegalHub() {
  const items = [...legalDocs.map((d) => ({ title: d.title, group: d.group as string, summary: d.summary, href: legalDocHref(d.slug) })), ...extra];
  return (
    <>
      <PageHero
        trail={[{ label: "Home", href: routes.home }, { label: "Legal" }]}
        label={{ icon: "grid", text: "Legal", color: "gold" }}
        title="Legal"
        lead="Our agreements, policies and privacy documents. They are governed by the laws of India."
      />
      {legalGroups.map((group) => (
        <Section key={group} tone="light">
          <h2 className="text-[clamp(21px,2.1vw,27px)] font-extrabold tracking-[-0.02em]">{group}</h2>
          <ul className="mt-8 grid list-none gap-5 p-0 md:grid-cols-2 lg:grid-cols-3">
            {items.filter((it) => it.group === group).map((it) => (
              <li key={it.href} className="min-w-0">
                <Link href={it.href} className="group flex h-full flex-col rounded-2xl border border-rule bg-white p-6 transition hover:border-ink-link hover:shadow-md">
                  <span className="text-lg font-bold text-ink group-hover:text-ink-link">{it.title}</span>
                  <span className="mt-2 text-[14px] leading-[1.6] text-ink-body">{it.summary}</span>
                  <span className="mt-auto pt-5 text-sm font-semibold text-ink-link">Read →</span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      ))}
      <CtaBlock
        tone="dark"
        title="Questions about these documents?"
        text="Our team will reply by email."
        actions={[{ label: "Contact us", href: enquiryHref("data-protection") }]}
      />
    </>
  );
}
