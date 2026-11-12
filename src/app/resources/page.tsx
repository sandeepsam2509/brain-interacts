/* eslint-disable @next/next/no-img-element -- static design images */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArticleCard, Crumbs, Eyebrow, NewsletterBand, PaperCover, researchHref, wrap } from "@/components/resources/parts";
import { WhitepaperLibrary } from "@/components/WhitepaperLibrary";
import { GetPdf } from "@/components/resources/GetPdf";
import { resources, resourceTypes } from "@/content/resources";
import { downloadable } from "@/content/whitepapers";
import { topicInfo } from "@/content/whitepaperPages";
import { stories, storyHref } from "@/content/stories";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resources",
  description: "Articles, whitepapers and research on behavior, teams and decisions at work.",
  alternates: { canonical: routes.resources },
};

const art = (slug: string) => resources.find((r) => r.id === `ar-${slug}`);
const wp = (slug: string) => resources.find((r) => r.id === `wp-${slug}`);

const paths = [
  {
    role: "For CXOs",
    tone: "bg-brand-red",
    image: "/site/8fc9f461.webp",
    text: "Culture, capital decisions and the return on people decisions.",
    items: [wp("the-roi-of-psychological-safety"), wp("the-sunk-cost-trap"), art("evidence-vs-instinct-why-gut-feel-team-decisions-cost-you")],
  },
  {
    role: "For HR heads",
    tone: "bg-amber text-ink",
    image: "/site/44843417.webp",
    text: "Hiring, attrition and assessments that hold up.",
    items: [wp("beyond-the-bonus"), art("what-is-behavioral-analytics-for-the-workplace-a-leaders-guide"), art("why-good-employees-leave-an-attrition-root-cause-playbook")],
  },
  {
    role: "For managers",
    tone: "bg-brand-green",
    image: "/site/7e00bc9e.webp",
    text: "Team fit, task allocation and coaching.",
    items: [wp("culture-lasts-three-weeks"), art("assign-by-strengths-not-by-who-is-free-smarter-task-allocation"), art("missed-deadlines-arent-always-a-skill-problem")],
  },
];

const tools = [
  { title: "Payback estimator", text: "See what fewer bad hires and lower attrition are worth.", href: routes.payback },
  { title: "Free technical assessment", text: "A short call to scope what your teams need.", href: routes.snapshot },
  { title: "The science behind Corporate Brain", text: "The model, the scoring and its limits.", href: routes.science },
];

export default function ResourcesHub() {
  const series = downloadable.filter((w) => w.kind !== "research");
  const mono = downloadable.find((w) => w.slug === "the-behavioral-enterprise");
  const latest = resources.filter((r) => r.type === "articles" && r.cover).slice(0, 6);
  const named = stories.filter((s) => s.named && s.stats).slice(0, 3);
  const total = resources.filter((r) => !r.comingSoon).length;

  return (
    <>
      <section className="bg-navy text-white">
        <div className={`${wrap} pt-10 pb-14 md:pt-12 md:pb-20`}>
          <Crumbs items={[{ label: "Home", href: routes.home }, { label: "Resources" }]} />
          <div className="mx-auto max-w-[760px] text-center">
            <Eyebrow color="amber">Resources</Eyebrow>
            <h1 className="text-[clamp(34px,5vw,60px)] leading-[1.04] font-bold">Research on how people work.</h1>
            <p className="mx-auto mt-4 max-w-[560px] text-[17px] text-on-navy">Articles, whitepapers and research on behavior, teams and decisions at work.</p>
            <form action="/resources/library" method="get" role="search" className="mx-auto mt-8 flex max-w-[620px] gap-2 rounded-xl bg-white p-1.5">
              <label htmlFor="hub-q" className="sr-only">
                Search resources
              </label>
              <input id="hub-q" name="q" type="search" placeholder={`Search ${total} resources, e.g. attrition, hiring, Big Five`} className="min-w-0 flex-1 rounded-lg px-3 text-[15px] text-ink outline-none" />
              <button className="rounded-lg bg-brand-red px-5 py-2.5 text-[15px] font-semibold text-white hover:bg-brand-red-dark">Search</button>
            </form>
            <ul className="m-0 mt-5 flex list-none flex-wrap justify-center gap-x-6 gap-y-1 p-0 text-[13.5px] text-on-navy">
              {resourceTypes.map((t) => (
                <li key={t.key}>
                  <strong className="text-white">{resources.filter((r) => r.type === t.key && !r.comingSoon).length}</strong> {t.label.toLowerCase()}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Reading paths */}
      <section className="bg-white">
        <div className={`${wrap} py-16 md:py-20`}>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>Start here</Eyebrow>
              <h2 className="text-[clamp(26px,3vw,38px)] font-bold text-ink">Reading paths by role.</h2>
            </div>
            <p className="max-w-[340px] text-ink-body">Three pieces each, picked so you can get the idea in an evening.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {paths.map((p) => (
              <div key={p.role} className="overflow-hidden rounded-xl border border-rule bg-white">
                <div className="relative">
                  <img src={p.image} alt="" className="aspect-[16/7] w-full object-cover" />
                  <span className={`absolute bottom-3 left-3 rounded-full px-3 py-1 text-[12.5px] font-semibold text-white ${p.tone}`}>{p.role}</span>
                </div>
                <div className="p-5">
                  <p className="text-[14.5px] text-ink-body">{p.text}</p>
                  <ol className="m-0 mt-3 list-none space-y-2 p-0">
                    {p.items.filter(Boolean).map((it, i) => (
                      <li key={it!.id} className="flex gap-3 text-[14.5px]">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cloud text-[11px] font-semibold text-ink">{i + 1}</span>
                        <Link href={it!.href ?? routes.resources} className="font-medium text-ink no-underline hover:underline">
                          {it!.title}
                        </Link>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured research */}
      {mono && (
        <section className="bg-cloud">
          <div className={`${wrap} py-14 md:py-16`}>
            <div className="grid overflow-hidden rounded-2xl bg-navy text-white md:grid-cols-[0.8fr_1.2fr]">
              <div className="flex items-center justify-center bg-navy-raised p-8">
                <Image src={mono.cover} alt="Cover of The Behavioral Enterprise" width={300} height={424} className="h-auto w-[200px] rounded shadow-2xl md:w-[230px]" />
              </div>
              <div className="p-8 md:p-12">
                <span className="rounded-full bg-brand-green px-3 py-1 text-[12.5px] font-semibold">Featured research</span>
                <h2 className="mt-4 text-[clamp(26px,3vw,38px)] font-bold">The Behavioral Enterprise</h2>
                <p className="mt-3 max-w-[560px] text-on-navy">{mono.summary}</p>
                <p className="mt-3 text-[13.5px] text-on-navy-soft">{mono.pages} pages · PDF · by Srishti Sharma and Sandeep Kumar</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <GetPdf slug={mono.slug}>Get the PDF</GetPdf>
                  <Link href={researchHref} className="rounded-lg border border-navy-line px-5 py-3 text-[15px] font-semibold text-white no-underline hover:border-on-navy">
                    About the research
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Series */}
      <section className="bg-white">
        <div className={`${wrap} py-16 md:py-20`}>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>Whitepapers</Eyebrow>
              <h2 className="text-[clamp(26px,3vw,38px)] font-bold text-ink">The Behavioral Enterprise Series</h2>
            </div>
            <Link href={routes.whitepapers} className="font-semibold text-ink underline">
              All whitepapers →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-7">
            {series.map((w) => (
              <PaperCover key={w.slug} paper={w} />
            ))}
          </div>
        </div>
      </section>

      {/* Topics */}
      <section id="topics" className="bg-cloud">
        <div className={`${wrap} py-16 md:py-20`}>
          <Eyebrow>Browse by topic</Eyebrow>
          <h2 className="mb-8 text-[clamp(26px,3vw,38px)] font-bold text-ink">Eight topics, one page each.</h2>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {topicInfo.map((t, i) => {
              const n = resources.filter((r) => r.topic === t.topic && !r.comingSoon).length;
              return (
                <Link key={t.slug} href={`/resources/topics/${t.slug}`} className="group relative block aspect-[16/9] overflow-hidden rounded-xl no-underline">
                  <img src={t.image} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
                  <span className="absolute inset-x-0 bottom-0 p-4">
                    <span className={`mb-2 block h-[3px] w-6 rounded ${["bg-brand-red", "bg-amber", "bg-brand-green"][i % 3]}`} />
                    <span className="font-display block text-[16px] font-semibold text-white">{t.topic}</span>
                    <span className="block text-[12.5px] text-on-navy">{n} resources</span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest */}
      <section className="bg-white">
        <div className={`${wrap} py-16 md:py-20`}>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>Articles</Eyebrow>
              <h2 className="text-[clamp(26px,3vw,38px)] font-bold text-ink">Latest articles</h2>
            </div>
            <Link href={routes.blog} className="font-semibold text-ink underline">
              All articles →
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {latest.map((a, i) => (
              <ArticleCard key={a.id} item={a} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Tools + proof */}
      <section className="bg-cloud">
        <div className={`${wrap} grid gap-10 py-16 md:py-20 lg:grid-cols-2`}>
          <div>
            <Eyebrow color="green">Free tools</Eyebrow>
            <h2 className="mb-6 text-[clamp(24px,2.6vw,32px)] font-bold text-ink">Try it on your numbers.</h2>
            <div className="space-y-3">
              {tools.map((t) => (
                <Link key={t.title} href={t.href} className="block rounded-xl border border-rule bg-white p-5 no-underline hover:border-ink">
                  <span className="font-display block text-[16px] font-semibold text-ink">{t.title} →</span>
                  <span className="mt-1 block text-[14px] text-ink-body">{t.text}</span>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <Eyebrow color="amber">Proof</Eyebrow>
            <h2 className="mb-6 text-[clamp(24px,2.6vw,32px)] font-bold text-ink">From our customers.</h2>
            <div className="space-y-3">
              {named.map((s) => (
                <Link key={s.slug} href={storyHref(s)} className="flex items-center justify-between gap-4 rounded-xl bg-navy p-5 text-white no-underline">
                  <span>
                    <span className="block text-[11.5px] font-semibold tracking-[0.1em] text-amber uppercase">
                      {s.client} · {s.industry}
                    </span>
                    <span className="mt-1 block font-semibold">{s.title}</span>
                  </span>
                  <span className="font-display text-[28px] font-bold text-amber">{s.stats![0].value}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <NewsletterBand id="hub-signup" />
      <WhitepaperLibrary papers={downloadable} variant="dialog" />
    </>
  );
}

