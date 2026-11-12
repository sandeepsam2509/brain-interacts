/* eslint-disable @next/next/no-img-element -- static design images */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Crumbs, Eyebrow, NewsletterBand, PaperCover, wrap } from "@/components/resources/parts";
import { GetPdf } from "@/components/resources/GetPdf";
import { WhitepaperLibrary } from "@/components/WhitepaperLibrary";
import { findStory, storyHref } from "@/content/stories";
import { downloadable, findWhitepaper } from "@/content/whitepapers";
import { topicSlug, whitepaperPages } from "@/content/whitepaperPages";
import { routes } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const generateStaticParams = () => Object.keys(whitepaperPages).map((slug) => ({ slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const w = findWhitepaper((await params).slug);
  if (!w) return {};
  return { title: `${w.title} · Whitepaper`, description: w.summary, alternates: { canonical: `/resources/whitepapers/${w.slug}` } };
}

const accents = ["border-brand-red text-brand-red", "border-amber text-gold-ink", "border-brand-green text-green-ink"];

export default async function WhitepaperPage({ params }: Props) {
  const { slug } = await params;
  const w = findWhitepaper(slug);
  const page = whitepaperPages[slug];
  if (!w || !page) notFound();
  const story = page.topic === "Motivation & retention" ? findStory("pune-techtrol-gen-z-attrition") : undefined;
  const others = downloadable.filter((o) => o.slug !== slug && o.kind !== "research");

  return (
    <>
      <section className="bg-navy text-white">
        <div className={`${wrap} grid items-center gap-10 py-12 md:py-16 lg:grid-cols-[220px_1fr_340px]`}>
          <Image src={w.cover} alt={`Cover of ${w.title}`} width={300} height={424} priority className="mx-auto h-auto w-[180px] rounded shadow-2xl lg:w-full" />
          <div>
            <Crumbs items={[{ label: "Home", href: routes.home }, { label: "Resources", href: routes.resources }, { label: "Whitepapers", href: routes.whitepapers }, { label: w.title }]} />
            <div className="mb-4 flex flex-wrap gap-2 text-[12.5px] font-semibold">
              <span className="rounded-full bg-amber px-3 py-1 text-ink">Whitepaper</span>
              <Link href={`/resources/topics/${topicSlug(page.topic)}`} className="rounded-full border border-navy-line px-3 py-1 text-white no-underline hover:border-on-navy">
                {page.topic}
              </Link>
              <span className="rounded-full border border-navy-line px-3 py-1">The Behavioral Enterprise Series</span>
            </div>
            <h1 className="text-[clamp(34px,4.4vw,54px)] leading-[1.04] font-bold">{w.title}</h1>
            <p className="mt-4 max-w-[560px] text-[17px] text-on-navy">{w.summary}</p>
            <p className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-[13.5px] text-on-navy-soft">
              <span>{w.pages} pages · PDF</span>
              <span>{page.forWho}</span>
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 text-ink">
            <h2 className="text-[19px] font-bold">Get the PDF</h2>
            <p className="mt-2 text-[14px] text-ink-body">Free to download. Tell us who you are once and the PDF downloads straight away.</p>
            <GetPdf slug={w.slug} className="mt-5 w-full rounded-lg bg-brand-red py-3 text-[15px] font-semibold text-white hover:bg-brand-red-dark">
              Download the PDF
            </GetPdf>
            <p className="mt-4 text-[12.5px] text-ink-muted">
              Handled under India&apos;s DPDP Act. See our{" "}
              <Link href="/privacy" className="text-ink-muted underline">
                privacy notice
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className={`${wrap} py-16 md:py-20`}>
          <Eyebrow>What you&apos;ll learn</Eyebrow>
          <h2 className="mb-8 text-[clamp(26px,3vw,38px)] font-bold text-ink">Three ideas to take into your next leadership meeting.</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {page.ideas.map((idea, i) => (
              <div key={idea.title} className={`rounded-xl border-t-4 bg-cloud p-6 ${accents[i].split(" ")[0]}`}>
                <p className={`font-display text-[28px] font-bold ${accents[i].split(" ")[1]}`}>0{i + 1}</p>
                <h3 className="mt-2 text-[17px] font-semibold text-ink">{idea.title}</h3>
                <p className="mt-2 text-[14.5px] text-ink-body">{idea.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cloud">
        <div className={`${wrap} grid gap-10 py-16 md:py-20 lg:grid-cols-2`}>
          <div>
            <Eyebrow>Inside the paper</Eyebrow>
            <h2 className="mb-6 text-[clamp(26px,3vw,38px)] font-bold text-ink">What each section covers.</h2>
            <ul className="m-0 list-none p-0">
              {page.sections.map((s) => (
                <li key={s.title} className="flex justify-between gap-4 border-b border-rule py-3.5 text-[15px]">
                  <span className="font-semibold text-ink">{s.title}</span>
                  <span className="text-ink-muted">p. {s.page}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-5 lg:pt-12">
            <figure className="m-0 rounded-2xl bg-navy p-8 text-white">
              <p className="mb-3 text-[11.5px] font-semibold tracking-[0.12em] text-amber uppercase">{page.quote.label}</p>
              <blockquote className="font-display m-0 text-[clamp(20px,2.2vw,26px)] leading-snug font-semibold">“{page.quote.text}”</blockquote>
              <figcaption className="mt-3 text-[13.5px] text-on-navy-soft">From {w.title}</figcaption>
            </figure>
            <div className="rounded-2xl border border-rule bg-white p-6">
              <p className="text-[14.5px] text-ink-body">Every paper in the series follows the same shape: the scene, the science, honest limits, a method you can run, how to measure it, and a plan.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className={`${wrap} py-14`}>
          <div className="grid items-center gap-8 rounded-2xl bg-amber-tint p-6 md:p-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <Eyebrow color="amber">Put it into practice</Eyebrow>
              <h2 className="text-[clamp(24px,2.8vw,34px)] leading-tight font-bold text-ink">{page.practice.title}</h2>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={page.practice.href} className="rounded-lg bg-brand-red px-5 py-3 font-semibold text-white no-underline hover:bg-brand-red-dark">
                  {page.practice.label} →
                </Link>
                <Link href={routes.payback} className="rounded-lg border border-ink px-5 py-3 font-semibold text-ink no-underline">
                  Try the payback estimator
                </Link>
              </div>
            </div>
            {story ? (
              <Link href={storyHref(story)} className="block overflow-hidden rounded-xl bg-white no-underline">
                <img src="/site/f27e8606.webp" alt="" className="aspect-[16/6] w-full object-cover" />
                <span className="block p-4">
                  <span className="block text-[11.5px] font-semibold tracking-[0.1em] text-ink-muted uppercase">Customer story · {story.industry}</span>
                  <span className="mt-1 block font-semibold text-ink">{story.title}</span>
                </span>
              </Link>
            ) : (
              <img src="/site/631ec024.webp" alt="" className="aspect-[16/9] w-full rounded-xl object-cover" />
            )}
          </div>
        </div>
      </section>

      <section className="bg-cloud">
        <div className={`${wrap} py-16 md:py-20`}>
          <Eyebrow>More from the series</Eyebrow>
          <h2 className="mb-8 text-[clamp(26px,3vw,38px)] font-bold text-ink">The Behavioral Enterprise Series</h2>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {others.map((o) => (
              <PaperCover key={o.slug} paper={o} />
            ))}
          </div>
        </div>
      </section>

      <NewsletterBand id="wp-signup" />
      <WhitepaperLibrary papers={downloadable} variant="dialog" />
    </>
  );
}
