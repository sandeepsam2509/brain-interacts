import type { Metadata } from "next";
import Link from "next/link";
import { StoryArt, StoryLibrary } from "@/components/StoryLibrary";
import { ButtonLink, Section } from "@/components/ui";
import { Crumbs, Eyebrow, wrap } from "@/components/resources/parts";
import { allProducts, featuredStorySlug, findStory, industries, stories, storyHref } from "@/content/stories";
import { enquiryHref } from "@/lib/enquiries";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Customer Stories",
  description:
    "How facilities, manufacturing, IT and automation companies use Brain Interacts products to align teams, assign work and reduce attrition.",
  alternates: { canonical: routes.stories },
};

const headline: [string, string, string][] = [
  ["82%", "better operational efficiency", "border-brand-red"],
  ["46%+", "drop in Gen Z attrition", "border-amber"],
  ["92%", "bench utilization", "border-brand-green"],
  ["₹54L", "hiring cost saved", "border-brand-red"],
];

export default function CustomerStoriesPage() {
  const featured = findStory(featuredStorySlug)!;

  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className={`${wrap} pt-10 pb-12 md:pt-12 md:pb-16`}>
          <Crumbs items={[{ label: "Home", href: routes.home }, { label: "Customers" }]} />
          <Eyebrow color="amber">Customers</Eyebrow>
          <h1 className="max-w-[820px] text-[clamp(34px,4.6vw,56px)] leading-[1.05] font-bold">Transforming workplaces with evidence.</h1>
          <p className="mt-4 max-w-[600px] text-[17px] text-on-navy">How facilities, manufacturing and IT companies used Brain Interacts to hire, place and keep the right people.</p>
          <ul className="m-0 mt-8 grid list-none grid-cols-2 gap-3 p-0 lg:grid-cols-4">
            {headline.map(([v, l, bar]) => (
              <li key={l} className={`rounded-xl border-t-4 bg-white p-4 text-ink ${bar}`}>
                <span className="font-display block text-[28px] leading-none font-bold">{v}</span>
                <span className="mt-1.5 block text-[13px] text-ink-body">{l}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Featured story */}
      <section className="bg-cloud">
        <div className={`${wrap} pt-14 pb-4 md:pt-16`}>
          <Link href={storyHref(featured)} className="group grid overflow-hidden rounded-2xl bg-white text-ink no-underline hover:shadow-[0_22px_54px_rgba(10,22,40,0.14)] lg:grid-cols-[1fr_1.1fr]">
            <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
              <StoryArt story={featured} />
            </div>
            <div className="flex flex-col justify-center p-6 md:p-10">
              <span className="w-fit rounded-full bg-red-tint px-3 py-1 text-[12px] font-semibold text-brand-red">Featured story</span>
              <p className="mt-3 text-[12px] font-semibold tracking-[0.1em] text-ink-muted uppercase">
                {featured.industry} · {featured.client}
              </p>
              <h2 className="mt-2 text-[clamp(22px,2.4vw,32px)] leading-[1.1] font-bold">{featured.title}</h2>
              <p className="mt-3 text-[15px] text-ink-body">{featured.how}</p>
              {featured.stats && (
                <dl className="m-0 mt-5 flex flex-wrap gap-7">
                  {featured.stats.slice(0, 3).map((st, i) => (
                    <div key={st.label}>
                      <dt className={`font-display text-[28px] leading-none font-bold ${["text-brand-red", "text-gold-ink", "text-green-ink"][i]}`}>{st.value}</dt>
                      <dd className="m-0 mt-1 max-w-[140px] text-[12.5px] text-ink-muted">{st.label}</dd>
                    </div>
                  ))}
                </dl>
              )}
              <span className="mt-7 inline-flex w-fit rounded-lg bg-brand-red px-5 py-3 text-[14px] font-semibold text-white group-hover:bg-brand-red-dark">Read the story</span>
            </div>
          </Link>
        </div>
      </section>

      {/* All stories with filters */}
      <Section tone="light" className="bg-cloud" innerClassName="pt-12 pb-16 md:pb-24">
        <div id="stories" className="scroll-mt-24">
          <h2 className="mb-6 text-[clamp(22px,2.4vw,32px)] leading-[1.1] font-bold">All customer stories</h2>
          <StoryLibrary items={stories} industries={industries} products={allProducts} />
        </div>
      </Section>

      {/* References */}
      <section className="bg-navy text-white">
        <div className={`${wrap} flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center`}>
          <div>
            <Eyebrow color="amber">References</Eyebrow>
            <h2 className="text-[clamp(24px,2.8vw,36px)] font-bold">Talk to a customer in your industry.</h2>
            <p className="mt-2 max-w-[620px] text-on-navy">Some customers are named with their permission; others we describe by industry and size. Ask us and we can arrange a reference call.</p>
          </div>
          <Link href={enquiryHref("results")} className="shrink-0 rounded-lg bg-brand-red px-5 py-3 font-semibold text-white no-underline hover:bg-brand-red-dark">
            Ask for a reference call
          </Link>
        </div>
      </section>

      {/* CTA */}
      <Section tone="light" innerClassName="py-12 md:py-16">
        <div className="flex flex-col items-start justify-between gap-6 rounded-[24px] bg-cloud p-8 md:flex-row md:items-center md:p-12">
          <div>
            <h2 className="text-[clamp(22px,2.7vw,34px)] leading-[1.1] font-bold">Want results like these?</h2>
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
