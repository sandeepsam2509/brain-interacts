/* eslint-disable @next/next/no-img-element -- static design images */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard, Crumbs, Eyebrow, NewsletterBand, wpHref, wrap } from "@/components/resources/parts";
import { GetPdf } from "@/components/resources/GetPdf";
import { WhitepaperLibrary } from "@/components/WhitepaperLibrary";
import { resources } from "@/content/resources";
import { findStory, storyHref } from "@/content/stories";
import { downloadable, findWhitepaper } from "@/content/whitepapers";
import { findTopic, topicInfo } from "@/content/whitepaperPages";
import { routes } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const generateStaticParams = () => topicInfo.map((t) => ({ slug: t.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = findTopic((await params).slug);
  if (!t) return {};
  return { title: `${t.topic} · Resources`, description: t.intro, alternates: { canonical: `/resources/topics/${t.slug}` } };
}

export default async function TopicPage({ params }: Props) {
  const t = findTopic((await params).slug);
  if (!t) notFound();
  const items = resources.filter((r) => r.topic === t.topic && !r.comingSoon);
  const articles = items.filter((r) => r.type === "articles" || r.type === "science");
  const papers = items.filter((r) => r.type === "whitepapers" || r.type === "research");
  const paper = t.whitepaper ? findWhitepaper(t.whitepaper) : undefined;
  const story = t.story ? findStory(t.story) : undefined;

  return (
    <>
      <section className="bg-navy text-white">
        <div className={`${wrap} grid items-center gap-10 py-12 md:py-16 lg:grid-cols-2`}>
          <div>
            <Crumbs items={[{ label: "Home", href: routes.home }, { label: "Resources", href: routes.resources }, { label: "Topics", href: `${routes.resources}#topics` }, { label: t.topic }]} />
            <Eyebrow color="amber">Topic</Eyebrow>
            <h1 className="text-[clamp(34px,4.6vw,56px)] leading-[1.04] font-bold">{t.topic}</h1>
            <p className="mt-4 max-w-[520px] text-[17px] text-on-navy">{t.intro}</p>
            <p className="mt-5 flex flex-wrap gap-5 text-[13.5px] text-on-navy">
              <span>
                <strong className="text-white">{articles.length}</strong> articles
              </span>
              {papers.length > 0 && (
                <span>
                  <strong className="text-white">{papers.length}</strong> {papers.length === 1 ? "whitepaper" : "whitepapers and research"}
                </span>
              )}
              {story && (
                <span>
                  <strong className="text-white">1</strong> customer story
                </span>
              )}
            </p>
          </div>
          <img src={t.image} alt="" className="aspect-[3/2] w-full rounded-2xl object-cover" />
        </div>
      </section>

      {(paper || story) && (
        <section className="bg-white">
          <div className={`${wrap} grid gap-5 py-14 lg:grid-cols-[1.4fr_1fr]`}>
            {paper && (
              <div className="flex flex-col gap-6 rounded-2xl bg-cloud p-6 sm:flex-row sm:items-center md:p-8">
                <Link href={wpHref(paper.slug)} className="shrink-0">
                  <Image src={paper.cover} alt={`Cover of ${paper.title}`} width={180} height={254} className="h-auto w-[130px] rounded shadow-lg" />
                </Link>
                <div>
                  <Eyebrow color="amber">Start with the whitepaper</Eyebrow>
                  <h2 className="text-[26px] font-bold text-ink">{paper.title}</h2>
                  <p className="mt-2 text-ink-body">{paper.summary}</p>
                  <div className="mt-5 flex flex-wrap items-center gap-4">
                    <GetPdf slug={paper.slug}>Get the PDF</GetPdf>
                    <Link href={wpHref(paper.slug)} className="font-semibold text-ink underline">
                      What&apos;s inside →
                    </Link>
                  </div>
                </div>
              </div>
            )}
            {story && (
              <Link href={storyHref(story)} className="group block overflow-hidden rounded-2xl bg-navy text-white no-underline">
                <img src="/site/f27e8606.webp" alt="" className="aspect-[16/6] w-full object-cover" />
                <span className="block p-6">
                  <span className="block text-[11.5px] font-semibold tracking-[0.1em] text-amber uppercase">Customer story · {story.industry}</span>
                  <span className="mt-1 block text-[17px] font-semibold">{story.title}</span>
                  {story.stats?.[0] && <span className="font-display mt-2 block text-[32px] font-bold text-amber">{story.stats[0].value}</span>}
                  <span className="mt-2 block text-[14px] underline">Read the story →</span>
                </span>
              </Link>
            )}
          </div>
        </section>
      )}

      <section className="bg-cloud">
        <div className={`${wrap} py-16 md:py-20`}>
          <Eyebrow>Articles</Eyebrow>
          <h2 className="mb-8 text-[clamp(26px,3vw,38px)] font-bold text-ink">Everything on {t.topic.toLowerCase()}</h2>
          {articles.length ? (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((a, i) => (
                <ArticleCard key={a.id} item={a} i={i} />
              ))}
            </div>
          ) : (
            <p className="text-ink-body">Articles on this topic are on the way.</p>
          )}
        </div>
      </section>

      <section className="bg-white">
        <div className={`${wrap} py-14`}>
          <div className="grid items-center gap-8 rounded-2xl bg-red-tint p-6 md:p-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <Eyebrow>See how we solve this</Eyebrow>
              <h2 className="text-[clamp(24px,2.8vw,34px)] leading-tight font-bold text-ink">{t.cta.title}</h2>
              <p className="mt-3 text-ink-body">{t.cta.text}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={t.cta.href} className="rounded-lg bg-brand-red px-5 py-3 font-semibold text-white no-underline hover:bg-brand-red-dark">
                  {t.cta.label} →
                </Link>
                <Link href={routes.payback} className="rounded-lg border border-ink px-5 py-3 font-semibold text-ink no-underline">
                  Try the payback estimator
                </Link>
              </div>
            </div>
            <img src={t.cta.image} alt="" className="aspect-[16/9] w-full rounded-xl object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-cloud">
        <div className={`${wrap} py-12`}>
          <Eyebrow>Other topics</Eyebrow>
          <div className="mt-3 flex flex-wrap gap-2">
            {topicInfo
              .filter((o) => o.slug !== t.slug)
              .map((o) => (
                <Link key={o.slug} href={`/resources/topics/${o.slug}`} className="rounded-full border border-rule-strong bg-white px-4 py-2 text-[14px] font-semibold text-ink no-underline hover:border-ink">
                  {o.topic}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <NewsletterBand id="topic-signup" />
      <WhitepaperLibrary papers={downloadable} variant="dialog" />
    </>
  );
}
