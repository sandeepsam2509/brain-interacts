/* eslint-disable @next/next/no-img-element -- small client logos */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StoryArt } from "@/components/StoryLibrary";
import { ButtonLink, Section } from "@/components/ui";
import { Crumbs, Eyebrow } from "@/components/resources/parts";
import { findStory, productLinks, stories, storyHref } from "@/content/stories";
import { enquiryHref } from "@/lib/enquiries";
import { routes } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = findStory((await params).slug);
  if (!s) return {};
  return { title: `${s.title} · Customer Story`, description: s.challenge, alternates: { canonical: storyHref(s) } };
}

export default async function StoryPage({ params }: Props) {
  const s = findStory((await params).slug);
  if (!s) notFound();
  const others = stories.filter((x) => x.slug !== s.slug);
  const related = [...others.filter((x) => x.stats), ...others.filter((x) => !x.stats)].slice(0, 3);
  const sections = [
    { h: "The challenge", t: [s.challenge, ...(s.more?.challenge ?? [])] },
    { h: s.named ? `How ${s.client} used Brain Interacts` : "How they used Brain", t: [s.how, ...(s.more?.how ?? [])] },
  ];

  return (
    <>
      <section className="bg-navy text-white">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-4 pt-10 pb-12 md:px-8 md:pt-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <Crumbs items={[{ label: "Home", href: routes.home }, { label: "Customers", href: routes.stories }, { label: s.industry }]} />
            <Eyebrow color="amber">Customer story · {s.industry}</Eyebrow>
            <h1 className="text-[clamp(30px,4vw,52px)] leading-[1.05] font-bold">{s.title}</h1>
            <p className="mt-4 max-w-[620px] text-[17px] leading-[1.6] text-on-navy">{s.who}</p>
          </div>
          <div className="aspect-[16/11] overflow-hidden rounded-2xl">
            <StoryArt story={s} />
          </div>
          {s.stats && (
            <ul className="m-0 grid list-none grid-cols-2 gap-3 p-0 lg:col-span-2 lg:grid-cols-4">
              {s.stats.map((st, i) => (
                <li key={st.label} className={`rounded-xl border-t-4 bg-white p-4 text-ink ${["border-brand-red", "border-amber", "border-brand-green", "border-brand-red"][i % 4]}`}>
                  <span className="font-display block text-[30px] leading-none font-bold">{st.value}</span>
                  <span className="mt-1.5 block text-[13px] text-ink-body">{st.label}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <div className="mx-auto grid max-w-[1280px] gap-12 px-4 py-14 md:px-8 md:py-20 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-16">
        <aside>
          <div className="rounded-2xl border border-rule p-6 lg:sticky lg:top-24">
            {s.logo && <img src={s.logo} alt={`${s.client} logo`} className="mb-5 h-16 w-auto" />}
            <p className="text-[12px] font-semibold tracking-[0.1em] text-ink-muted uppercase">At a glance</p>
            <dl className="m-0 mt-4 space-y-4 text-[14px]">
              <div>
                <dt className="text-sm text-ink-muted">Client</dt>
                <dd className="m-0 font-bold">{s.client}</dd>
              </div>
              <div>
                <dt className="text-sm text-ink-muted">Industry</dt>
                <dd className="m-0 font-bold">{s.industry}</dd>
              </div>
              <div>
                <dt className="text-sm text-ink-muted">Products used</dt>
                <dd className="m-0 mt-1 flex flex-wrap gap-1.5">
                  {s.products.map((p) => (
                    <Link key={p} href={productLinks[p]} className="rounded-full bg-cloud px-2.5 py-1 text-[13px] font-semibold text-ink no-underline hover:bg-navy hover:text-white">
                      {p}
                    </Link>
                  ))}
                </dd>
              </div>
            </dl>
            <Link href={enquiryHref("demo")} className="mt-6 block rounded-lg bg-brand-red py-3 text-center font-semibold text-white no-underline hover:bg-brand-red-dark">
              Get a demo
            </Link>
            {!s.named && <p className="mt-5 border-t border-rule pt-4 text-[13px] leading-[1.55] text-ink-muted">Client names are kept confidential.</p>}
          </div>
        </aside>

        <article className="min-w-0 max-w-[760px]">
          {sections.map((x) => (
            <section key={x.h} className="mb-10">
              <h2 className="text-[clamp(20px,2vw,26px)] font-bold">{x.h}</h2>
              {x.t.map((t) => (
                <p key={t} className="mt-3 text-[16px] leading-[1.8] text-ink-body">
                  {t}
                </p>
              ))}
            </section>
          ))}
          <section className="mb-10">
            <h2 className="text-[clamp(20px,2vw,26px)] font-bold">What we used</h2>
            <ol className="m-0 mt-4 list-none space-y-3 p-0">
              {s.products.map((p, i) => (
                <li key={p} className="flex gap-4 rounded-xl bg-cloud p-4">
                  <span className={`font-display text-[20px] font-bold ${["text-brand-red", "text-gold-ink", "text-green-ink"][i % 3]}`}>0{i + 1}</span>
                  <Link href={productLinks[p]} className="self-center font-semibold text-ink no-underline hover:underline">
                    {p}
                  </Link>
                </li>
              ))}
            </ol>
          </section>
          {s.quote && (
            <figure className="mb-10 rounded-2xl bg-navy p-7 text-white md:p-8">
              <blockquote className="font-display m-0 text-[20px] leading-[1.55] font-semibold">&ldquo;{s.quote.text}&rdquo;</blockquote>
              <figcaption className="mt-4 text-[14px] text-on-navy-soft">{s.quote.by}</figcaption>
            </figure>
          )}
          {/* The result section appears only once the client has approved a published outcome. */}
          {s.result && (
            <section className="mb-10">
              <h2 className="text-[clamp(19px,1.9vw,24px)] font-bold">The result</h2>
              <p className="mt-3 text-[16px] leading-[1.8] text-ink-body">{s.result}</p>
            </section>
          )}
          <div className="rounded-2xl bg-red-tint p-7 md:p-8">
            <p className="text-xl font-bold text-ink">Facing a similar challenge?</p>
            <p className="mt-2 text-ink-body">See how {s.products.join(" and ")} would read your teams.</p>
            <ButtonLink href={enquiryHref("results", { story: s.title })} className="mt-5">
              See results like these for your team
            </ButtonLink>
          </div>
        </article>
      </div>

      {related.length > 0 && (
        <Section tone="light" innerClassName="pt-0 pb-16 md:pb-24">
          <Eyebrow>More stories</Eyebrow>
          <h2 className="mb-6 text-[clamp(24px,2.8vw,34px)] font-bold">Similar results in other teams.</h2>
          <ul className="m-0 grid list-none gap-6 p-0 md:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={storyHref(r)} className="group block h-full rounded-2xl border border-rule p-6 text-ink no-underline transition-shadow hover:shadow-[0_18px_44px_rgba(10,22,40,0.12)] md:p-7">
                  <p className="text-[11.5px] font-semibold tracking-[0.1em] text-ink-muted uppercase">{r.industry}</p>
                  <p className="mt-2 text-[17px] leading-snug font-semibold">{r.title}</p>
                  {r.stats?.[0] ? (
                    <p className="mt-3">
                      <span className="font-display block text-[28px] font-bold text-brand-red">{r.stats[0].value}</span>
                      <span className="text-[13px] text-ink-body">{r.stats[0].label}</span>
                    </p>
                  ) : (
                    <p className="mt-2 line-clamp-3 text-[14px] leading-[1.6] text-ink-body">{r.challenge}</p>
                  )}
                  <span className="mt-4 inline-block text-[14px] font-bold group-hover:text-ink-link">Read the story →</span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      )}
    </>
  );
}
