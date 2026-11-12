/* eslint-disable @next/next/no-img-element -- team photos */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Crumbs, Eyebrow, NewsletterBand, PaperCover, wrap } from "@/components/resources/parts";
import { CopyCitation, GetPdf } from "@/components/resources/GetPdf";
import { WhitepaperLibrary } from "@/components/WhitepaperLibrary";
import { downloadable, findWhitepaper } from "@/content/whitepapers";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Behavioral Enterprise · Research",
  description: "A research monograph on how traits interact, the Big Five and workforce intelligence: the science behind THE BRAIN and Corporate Brain.",
  alternates: { canonical: "/resources/research/the-behavioral-enterprise" },
};

const chapters = [
  { part: "Part I · Foundations", title: "Measuring traits is not understanding behaviour", page: 7 },
  { title: "The Big Five: origins, structure and evidence", page: 9 },
  { title: "Competing models and the limits of single traits", page: 14 },
  { part: "Part II · The BRAIN framework", title: "What the Big Five predicts at work", page: 19 },
  { title: "A taxonomy of trait interactions", page: 22 },
  { title: "The BRAIN architecture: Trait DNA and the Interaction Matrix", page: 30 },
  { title: "The Narrative Engine: a constrained reasoning instrument", page: 36 },
  { part: "Part III · From individuals to organizations", title: "Archetypes: from profiles to patterns", page: 41 },
  { title: "Corporate Brain: linking behaviour to business strategy", page: 46 },
  { part: "Part IV · Responsibility and the future", title: "Validity, ethics and governance", page: 53 },
  { title: "Future directions and conclusion", page: 57 },
];

const supports = [
  "The Big Five is the most widely replicated model of personality, and its traits relate to job performance, especially Conscientiousness.",
  "Traits change how one another show up at work, so reading scores one at a time misses real differences between people.",
  "Situations shape behaviour too, so results work best as a guide for a conversation, not a verdict.",
];

const testing = [
  "Test–retest reliability and agreement with established Big Five measures for THE BRAIN's own scores.",
  "Norms for Indian working populations.",
  "Pre-registered tests of whether the proposed trait interactions predict outcomes beyond single traits.",
];

const citation = "Sharma, S., & Kumar, S. (2026). The Behavioral Enterprise. Brain Interacts.";

export default function ResearchPage() {
  const w = findWhitepaper("the-behavioral-enterprise");
  if (!w) notFound();
  const series = downloadable.filter((o) => o.kind !== "research").slice(0, 6);

  return (
    <>
      <section className="bg-navy text-white">
        <div className={`${wrap} grid items-center gap-10 py-12 md:py-16 lg:grid-cols-[1.4fr_1fr]`}>
          <div>
            <Crumbs items={[{ label: "Home", href: routes.home }, { label: "Resources", href: routes.resources }, { label: "Research", href: "/resources/library?category=research" }, { label: w.title }]} />
            <div className="mb-4 flex flex-wrap gap-2 text-[12.5px] font-semibold">
              <span className="rounded-full bg-brand-green px-3 py-1">Research</span>
              <Link href="/resources/topics/science-and-methods" className="rounded-full border border-navy-line px-3 py-1 text-white no-underline">
                Science &amp; methods
              </Link>
            </div>
            <h1 className="text-[clamp(36px,4.8vw,58px)] leading-[1.03] font-bold">The Behavioral Enterprise</h1>
            <p className="mt-4 max-w-[600px] text-[17px] text-on-navy">
              A research monograph on how traits interact, the Big Five and workforce intelligence: the science behind THE BRAIN and Corporate Brain.
            </p>
            <dl className="mt-6 flex flex-wrap gap-8">
              {[
                ["104", "pages"],
                ["PDF", "format"],
                ["2026", "edition"],
                ["11", "chapters"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="sr-only">{l}</dt>
                  <dd className="m-0">
                    <span className="font-display block text-[26px] font-bold">{v}</span>
                    <span className="text-[12.5px] text-on-navy-soft">{l}</span>
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 flex flex-wrap gap-6">
              {[
                ["Srishti Sharma", "Lead author · Co-Founder", "/team/srishti-sharma.webp", "border-brand-red"],
                ["Sandeep Kumar", "Co-author · Co-Founder", "/team/sandeep-kumar.webp", "border-amber"],
              ].map(([name, role, img, ring]) => (
                <div key={name} className="flex items-center gap-3">
                  <img src={img} alt="" className={`h-11 w-11 rounded-full border-2 object-cover ${ring}`} />
                  <span>
                    <span className="block font-semibold">{name}</span>
                    <span className="block text-[12.5px] text-on-navy-soft">{role}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <Image src={w.cover} alt="Cover of The Behavioral Enterprise" width={300} height={424} priority className="mx-auto h-auto w-[200px] rounded shadow-2xl" />
            <GetPdf slug={w.slug} className="mt-6 w-full max-w-[340px] rounded-lg bg-brand-red py-3 text-[15px] font-semibold text-white hover:bg-brand-red-dark">
              Download the PDF ↓
            </GetPdf>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className={`${wrap} grid gap-10 py-16 md:py-20 lg:grid-cols-[1.3fr_1fr]`}>
          <div>
            <Eyebrow color="green">Abstract</Eyebrow>
            <h2 className="mb-5 text-[clamp(26px,3vw,38px)] font-bold text-ink">What this research is about.</h2>
            <div className="space-y-4 text-[16px] leading-[1.7] text-ink-body">
              <p>
                Personality reports usually read each trait on its own. A manager learns that someone scores high on Ambition, and then has no explanation when that person derails under pressure. This
                monograph argues that the answer lies in what traits do to one another: Ambition reads one way beside strong Self-Regulation and another way beside weak Self-Regulation.
              </p>
              <p>
                It sets out THE BRAIN, our framework for describing those interactions systematically, and Corporate Brain, the platform that applies it to company goals, functions and teams. It reviews
                the evidence on the Big Five, situations and teams, and it separates what is established, what we propose, and what still needs evidence.
              </p>
              <p>The monograph has not been peer reviewed. We publish it so readers can see the reasoning, the evidence and the gaps.</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl bg-green-tint p-6">
              <h3 className="text-[16px] font-semibold text-green-ink">What the evidence supports</h3>
              <ul className="m-0 mt-3 list-none space-y-2.5 p-0">
                {supports.map((s) => (
                  <li key={s} className="flex gap-2.5 text-[14.5px] text-ink">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-amber-tint p-6">
              <h3 className="text-[16px] font-semibold text-gold-ink">What is still being tested</h3>
              <ul className="m-0 mt-3 list-none space-y-2.5 p-0">
                {testing.map((s) => (
                  <li key={s} className="flex gap-2.5 text-[14.5px] text-ink">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cloud">
        <div className={`${wrap} grid gap-10 py-16 md:py-20 lg:grid-cols-[1.3fr_1fr]`}>
          <div>
            <Eyebrow>Contents</Eyebrow>
            <h2 className="mb-6 text-[clamp(26px,3vw,38px)] font-bold text-ink">Eleven chapters, five parts.</h2>
            <ul className="m-0 list-none p-0">
              {chapters.map((c, i) => {
                return (
                  <li key={c.title}>
                    {c.part && <p className="mt-5 mb-1 text-[12px] font-semibold tracking-[0.1em] text-ink-muted uppercase">{c.part}</p>}
                    <div className="flex gap-4 border-b border-rule py-3 text-[15px]">
                      <span className="w-6 text-ink-muted">{String(i + 1).padStart(2, "0")}</span>
                      <span className="flex-1 font-semibold text-ink">{c.title}</span>
                      <span className="text-ink-muted">p. {c.page}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
            <p className="mt-4 text-[13.5px] text-ink-muted">Part V is an evidence review (from p. 60), followed by six appendices, a glossary and references.</p>
          </div>
          <div className="space-y-5 lg:pt-14">
            <div className="rounded-2xl border border-rule bg-white p-6">
              <h3 className="text-[16px] font-semibold text-ink">How to cite</h3>
              <p className="mt-3 rounded-lg bg-cloud p-4 font-mono text-[13px] text-ink">{citation}</p>
              <CopyCitation text={citation} />
            </div>
            <div className="rounded-2xl bg-navy p-6 text-white">
              <h3 className="text-[20px] font-bold">Read the full 104 pages.</h3>
              <p className="mt-2 text-[14.5px] text-on-navy">Free to download, so you can share it with your leadership team.</p>
              <GetPdf slug={w.slug} className="mt-5 rounded-lg bg-brand-red px-5 py-3 text-[15px] font-semibold text-white hover:bg-brand-red-dark">
                Send me the research
              </GetPdf>
              <div className="mt-5 space-y-2 text-[14px]">
                <Link href={routes.science} className="block text-amber underline">
                  Read the short version: the science and methodology →
                </Link>
                <Link href={routes.corporateBrain} className="block text-white underline">
                  See how it powers Corporate Brain →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className={`${wrap} py-16 md:py-20`}>
          <Eyebrow>Related</Eyebrow>
          <h2 className="mb-8 text-[clamp(26px,3vw,38px)] font-bold text-ink">Whitepapers built on this research.</h2>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {series.map((o) => (
              <PaperCover key={o.slug} paper={o} />
            ))}
          </div>
        </div>
      </section>

      <NewsletterBand id="research-signup" />
      <WhitepaperLibrary papers={downloadable} variant="dialog" />
    </>
  );
}
