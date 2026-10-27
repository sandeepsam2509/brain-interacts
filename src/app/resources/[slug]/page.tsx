import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BrandMark } from "@/components/BrandMark";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Container, TextLink } from "@/components/ui";
import { articles, author, disclaimer, getArticle } from "@/content/articles";
import { pageMetadata } from "@/lib/page";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticle((await params).slug);
  if (!article) return {};
  const meta = pageMetadata({ path: `/resources/${article.slug}`, title: article.title, description: article.excerpt });
  return { ...meta, openGraph: { ...meta.openGraph, type: "article" } };
}

export default async function ArticlePage({ params }: Props) {
  const article = getArticle((await params).slug);
  if (!article) notFound();
  const path = `/resources/${article.slug}`;
  const related = articles.filter((a) => a.slug !== article.slug && a.category === article.category).slice(0, 3);

  return (
    <>
      <PageHero
        path={path}
        hero={{
          crumbs: [{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: article.category }],
          eyebrow: `${article.category} · ${article.readTime}`,
          title: article.title,
          lead: article.excerpt,
        }}
      />
      <article className="border-t border-line/60 py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16">
          <div className="max-w-[68ch]">
            {article.body.map((s) => (
              <section key={s.heading} className="mb-12 last:mb-0">
                <h2 className="text-h3-sm font-semibold md:text-h3">{s.heading}</h2>
                {s.paragraphs.map((p) => (
                  <p key={p} className="mt-4 text-lead leading-relaxed text-secondary">
                    {p}
                  </p>
                ))}
              </section>
            ))}
            <p className="mt-12 border-t border-line pt-6 text-small text-muted">{disclaimer}</p>
          </div>
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-line bg-navy-800/50 p-6">
              <div className="flex items-center gap-3">
                <BrandMark size={28} />
                <p className="font-semibold">{author.name}</p>
              </div>
              <p className="mt-3 text-small text-secondary">{author.bio}</p>
            </div>
            <div className="rounded-2xl border border-line bg-navy-800/50 p-6">
              <p className="text-small text-muted">Explore the related platform or service</p>
              <div className="mt-3">
                <TextLink {...article.related} />
              </div>
            </div>
          </aside>
        </Container>
      </article>
      {related.length > 0 && (
        <section className="border-t border-line/60 bg-navy-800/30 py-20">
          <Container>
            <h2 className="mb-10 text-h2-sm font-semibold tracking-tight">Related guides</h2>
            <div className="grid gap-5 md:grid-cols-3">
              {related.map((a) => (
                <Link
                  key={a.slug}
                  href={`/resources/${a.slug}`}
                  className="rounded-2xl border border-line bg-navy-800/50 p-6 transition-all hover:-translate-y-1 hover:border-secondary/50"
                >
                  <p className="text-eyebrow font-medium uppercase tracking-[0.14em] text-green">{a.category}</p>
                  <h3 className="mt-3 text-h4 font-semibold leading-snug">{a.title}</h3>
                  <p className="mt-2 text-small text-secondary">{a.excerpt}</p>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
      <CtaBanner
        title="Put the evidence to work"
        body="See how Corporate Brain applies these ideas, or start with a diagnostic of one team."
        actions={[
          { label: "Request a Demo", href: "/demo" },
          { label: "Schedule a Diagnostic", href: "/diagnostic", variant: "secondary" },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.excerpt,
          author: { "@type": "Organization", name: author.name },
          publisher: { "@type": "Organization", name: site.name, url: site.url },
          mainEntityOfPage: `${site.url}${path}`,
        }}
      />
    </>
  );
}
