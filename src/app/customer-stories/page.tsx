import type { Metadata } from "next";
import Link from "next/link";
import { StoryArt, StoryLibrary } from "@/components/StoryLibrary";
import { ButtonLink, Section } from "@/components/ui";
import { allProducts, featuredStorySlug, findStory, industries, stories, storyHref } from "@/content/stories";
import { enquiryHref } from "@/lib/enquiries";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Customer Stories",
  description:
    "How facilities, manufacturing, IT and automation companies use Brain Interacts products to align teams, assign work and reduce attrition.",
  alternates: { canonical: routes.stories },
};

export default function CustomerStoriesPage() {
  const featured = findStory(featuredStorySlug)!;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div aria-hidden="true" className="pointer-events-none absolute -top-40 -right-32 h-[460px] w-[460px] rounded-full bg-sky/20 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-56 left-1/4 h-[420px] w-[420px] rounded-full bg-lime/15 blur-3xl" />
        <div className="relative mx-auto max-w-[1280px] px-4 pt-14 pb-12 text-center md:px-8 md:pt-20 md:pb-16">
          <p className="font-mono text-[12px] tracking-[0.14em] text-lime uppercase">Customer stories</p>
          <h1 className="mx-auto mt-4 max-w-[900px] text-[clamp(32px,4.8vw,64px)] leading-[1.02] font-extrabold tracking-[-0.035em]">
            Teams making people decisions <span className="text-lime">with evidence.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-[640px] text-[16px] leading-[1.65] text-on-navy md:text-[16px]">
            How facilities, manufacturing, IT and automation companies use Brain Interacts to align teams and assign work.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href={enquiryHref("results")}>See results like these for your team</ButtonLink>
            <ButtonLink href="#stories" variant="outlineDark">
              Browse stories
            </ButtonLink>
          </div>
        </div>

        {/* "Trusted by" strip: anonymised client descriptions instead of logos */}
        <div className="relative border-t border-navy-line">
          <div className="mx-auto max-w-[1280px] px-4 py-8 md:px-8">
            <p className="mb-5 text-center text-sm text-on-navy-muted">Trusted by teams across India, including BVG and Pune Techtrol.</p>
            <ul className="m-0 grid list-none grid-cols-2 gap-3 p-0 md:grid-cols-4">
              {stories.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={storyHref(s)}
                    className="flex h-full flex-col justify-center rounded-xl border border-navy-line px-4 py-3 text-center text-white no-underline transition-colors hover:border-lime hover:bg-navy-raised"
                  >
                    <span className="text-[13px] leading-snug font-bold">{s.client}</span>
                    <span className="mt-1 font-mono text-[10px] tracking-[0.1em] text-on-navy-muted uppercase">{s.industry}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Featured story */}
      <Section tone="light" innerClassName="pt-14 pb-4 md:pt-20">
        <p className="mb-5 font-mono text-[11px] tracking-[0.12em] text-ink-muted uppercase">Featured story</p>
        <Link
          href={storyHref(featured)}
          className="group grid overflow-hidden rounded-[20px] border border-rule bg-white text-ink no-underline transition-shadow duration-300 hover:shadow-[0_22px_54px_rgba(15,23,42,0.14)] lg:grid-cols-[1.05fr_1fr]"
        >
          <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
            <StoryArt story={featured} seed={1} />
            <span className="absolute bottom-4 left-4 rounded-lg bg-white/95 px-3 py-1.5 text-[13px] font-bold shadow-sm">{featured.client}</span>
          </div>
          <div className="flex flex-col justify-center p-6 md:p-10">
            <p className="font-mono text-[11px] tracking-[0.12em] text-ink-link uppercase">{featured.industry}</p>
            <h2 className="mt-3 text-[clamp(21px,2.2vw,32px)] leading-[1.1] font-extrabold tracking-[-0.02em]">{featured.title}</h2>
            <dl className="m-0 mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <dt className="font-mono text-[11px] tracking-[0.12em] text-ink-muted uppercase">The challenge</dt>
                <dd className="m-0 mt-1.5 text-[14px] leading-[1.6] text-ink-body">{featured.challenge}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] tracking-[0.12em] text-ink-muted uppercase">How they used Brain</dt>
                <dd className="m-0 mt-1.5 text-[14px] leading-[1.6] text-ink-body">{featured.how}</dd>
              </div>
            </dl>
            <span className="mt-7 inline-flex w-fit items-center gap-2 rounded-lg bg-navy px-5 py-3 text-[14px] font-bold text-white transition-colors group-hover:bg-[#1E293B]">
              Read the story <span aria-hidden="true">→</span>
            </span>
          </div>
        </Link>
      </Section>

      {/* All stories with filters */}
      <Section tone="light" innerClassName="pt-12 pb-16 md:pb-24">
        <div id="stories" className="scroll-mt-24">
          <h2 className="mb-6 text-[clamp(22px,2.4vw,32px)] leading-[1.1] font-extrabold tracking-[-0.02em]">All customer stories</h2>
          <StoryLibrary items={stories} industries={industries} products={allProducts} />
        </div>
      </Section>

      {/* Industries */}
      <Section tone="dark" innerClassName="py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <p className="font-mono text-[12px] tracking-[0.14em] text-lime uppercase">Industries</p>
            <h2 className="mt-3 text-[clamp(22px,2.7vw,35px)] leading-[1.08] font-extrabold tracking-[-0.02em]">Built for teams where people decisions carry weight.</h2>
          </div>
          <ul className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2">
            {industries.map((i) => {
              const n = stories.filter((s) => s.industry === i).length;
              return (
                <li key={i} className="rounded-2xl border border-navy-line p-5">
                  <p className="text-lg font-bold">{i}</p>
                  <p className="mt-1 text-sm text-on-navy">
                    {n} {n === 1 ? "story" : "stories"}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </Section>

      {/* CTA */}
      <Section tone="light" innerClassName="py-12 md:py-16">
        <div className="flex flex-col items-start justify-between gap-6 rounded-[24px] bg-[#EEF2F6] p-8 md:flex-row md:items-center md:p-12">
          <div>
            <h2 className="text-[clamp(22px,2.7vw,34px)] leading-[1.1] font-extrabold tracking-[-0.02em]">Want results like these?</h2>
            <p className="mt-3 text-lg text-ink-body">See how Corporate Brain would read your teams.</p>
          </div>
          <ButtonLink href={enquiryHref("results")} variant="navy">
            See results like these for your team
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
