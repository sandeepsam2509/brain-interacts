import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBlock, PageHero } from "@/components/blocks";
import { Section } from "@/components/ui";
import { fillLegal, legalDocHref, legalDocs } from "@/content/legal";
import { enquiryHref } from "@/lib/enquiries";
import { routes } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return legalDocs.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = legalDocs.find((d) => d.slug === slug);
  if (!doc) return {};
  return { title: doc.title, description: doc.summary, alternates: { canonical: legalDocHref(doc.slug) } };
}

export default async function LegalDocPage({ params }: Props) {
  const { slug } = await params;
  const doc = legalDocs.find((d) => d.slug === slug);
  if (!doc) notFound();
  return (
    <>
      <PageHero
        trail={[{ label: "Home", href: routes.home }, { label: "Legal", href: routes.legal }, { label: doc.title }]}
        label={{ icon: "grid", text: doc.group, color: "gold" }}
        title={doc.title}
        lead={doc.summary}
      />
      <Section tone="light">
        <div className="max-w-[780px] text-[17px] leading-[1.75] text-ink-body [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:text-ink [&_li]:mt-2 [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6">
          <p className="font-mono text-sm text-ink-muted">Effective: {doc.effective}</p>
          {doc.intro?.map((t) => <p key={t}>{fillLegal(t)}</p>)}
          {doc.sections.map((s) => (
            <section key={s.h}>
              <h2>{s.h}</h2>
              {s.p?.map((t) => <p key={t}>{fillLegal(t)}</p>)}
              {s.list && <ul>{s.list.map((t) => <li key={t}>{fillLegal(t)}</li>)}</ul>}
              {s.after?.map((t) => <p key={t}>{fillLegal(t)}</p>)}
            </section>
          ))}
          <p className="mt-12"><Link href={routes.legal} className="font-semibold text-ink-link underline">← All legal documents</Link></p>
        </div>
      </Section>
      <CtaBlock tone="dark" title="Questions about this document?" text="Our team will reply by email." actions={[{ label: "Contact us", href: enquiryHref("data-protection") }]} />
    </>
  );
}
