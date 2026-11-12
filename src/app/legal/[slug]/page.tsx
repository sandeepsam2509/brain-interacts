import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBlock } from "@/components/blocks";
import { LegalShell } from "@/components/LegalPage";
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
      <LegalShell
        title={doc.title}
        meta={`${doc.group} · Effective: ${doc.effective}`}
        active={legalDocHref(doc.slug)}
        cta={<CtaBlock tone="dark" title="Questions about this document?" text="Our team will reply by email." actions={[{ label: "Contact us", href: enquiryHref("data-protection") }]} />}
      >
          <p className="mt-0! text-[14px] text-ink-muted">{doc.summary}</p>
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
      </LegalShell>
    </>
  );
}
