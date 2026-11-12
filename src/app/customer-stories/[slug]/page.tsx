/* eslint-disable @next/next/no-img-element -- small client logos */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StoryArt } from "@/components/StoryLibrary";
import { ButtonLink, Section } from "@/components/ui";
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
  const related = stories.filter((x) => x.slug !== s.slug && (x.industry === s.industry || x.products.some((p) => s.products.includes(p)))).slice(0, 2);
  const sections = [
    { h: "The challenge", t: [s.challenge, ...(s.more?.challenge ?? [])] },
    { h: s.named ? `How ${s.client} used Brain Interacts` : "How they used Brain", t: [s.how, ...(s.more?.how ?? [])] },
  ];

  return (
    <>
      <section className="bg-navy text-white">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-4 pt-10 pb-14 md:px-8 md:pt-14 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-on-navy-muted">
              <Link href={routes.stories} className="text-on-navy-muted no-underline hover:text-white">
                Customer stories
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">{s.industry}</span>
            </nav>
            <p className="font-mono text-[12px] tracking-[0.14em] text-lime uppercase">{s.industry}</p>
            <h1 className="mt-3 text-[clamp(27px,3.7vw,48px)] leading-[1.05] font-bold">{s.title}</h1>
            <p className="mt-5 max-w-[620px] text-[16px] leading-[1.65] text-on-navy">{s.who}</p>
          </div>
          <div className="aspect-[16/11] overflow-hidden rounded-[20px]">
            <StoryArt story={s} seed={stories.indexOf(s)} />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-[1280px] gap-12 px-4 py-14 md:px-8 md:py-20 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-16">
        <aside>
          <div className="rounded-2xl border border-rule p-6 lg:sticky lg:top-24">
            {s.logo && <img src={s.logo} alt={`${s.client} logo`} className="mb-5 h-16 w-auto" />}
            <p className="font-mono text-[11px] tracking-[0.12em] text-ink-muted uppercase">At a glance</p>
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
            {!s.named && <p className="mt-5 border-t border-rule pt-4 text-[13px] leading-[1.55] text-ink-muted">Client names are kept confidential.</p>}
          </div>
        </aside>

        <article className="min-w-0 max-w-[760px]">
          {sections.map((x) => (
            <section key={x.h} className="mb-10">
              <h2 className="text-[clamp(19px,1.9vw,24px)] font-bold">{x.h}</h2>
              {x.t.map((t) => (
                <p key={t} className="mt-3 text-[16px] leading-[1.8] text-ink-body">
                  {t}
                </p>
              ))}
            </section>
          ))}
          {s.stats && (
            <section className="mb-10">
              <h2 className="text-[clamp(19px,1.9vw,24px)] font-bold">Progress at {s.client}</h2>
              <dl className="m-0 mt-5 grid gap-6 sm:grid-cols-2">
                {s.stats.map((st, i) => (
                  <div key={st.label} className={`border-t-[3px] pt-4 ${["border-brand-red", "border-amber", "border-brand-green", "border-navy"][i % 4]}`}>
                    <dt className="text-[44px] leading-none font-bold tracking-[-0.03em] tabular-nums">{st.value}</dt>
                    <dd className="m-0 mt-2 text-[15px] leading-[1.6] text-ink-body">{st.label}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}
          {s.quote && (
            <figure className="mb-10 rounded-2xl bg-cloud p-7 md:p-8">
              <blockquote className="m-0 text-[18px] leading-[1.7] font-semibold text-ink">&ldquo;{s.quote.text}&rdquo;</blockquote>
              <figcaption className="mt-4 text-[14px] text-ink-muted">{s.quote.by}</figcaption>
            </figure>
          )}
          {/* The result section appears only once the client has approved a published outcome. */}
          {s.result && (
            <section className="mb-10">
              <h2 className="text-[clamp(19px,1.9vw,24px)] font-bold">The result</h2>
              <p className="mt-3 text-[16px] leading-[1.8] text-ink-body">{s.result}</p>
            </section>
          )}
          <div className="rounded-2xl bg-navy p-7 text-white md:p-8">
            <p className="text-xl font-bold">Facing a similar challenge?</p>
            <p className="mt-2 text-on-navy">See how {s.products.join(" and ")} would read your teams.</p>
            <ButtonLink href={enquiryHref("results", { story: s.title })} className="mt-5">
              See results like these for your team
            </ButtonLink>
          </div>
        </article>
      </div>

      {related.length > 0 && (
        <Section tone="light" innerClassName="pt-0 pb-16 md:pb-24">
          <p className="mb-6 font-mono text-[11px] tracking-[0.12em] text-ink-muted uppercase">More stories</p>
          <ul className="m-0 grid list-none gap-6 p-0 md:grid-cols-2">
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={storyHref(r)} className="group block h-full rounded-2xl border border-rule p-6 text-ink no-underline transition-shadow hover:shadow-[0_18px_44px_rgba(10,22,40,0.12)] md:p-7">
                  <p className="font-mono text-[11px] tracking-[0.12em] text-ink-link uppercase">{r.industry}</p>
                  <p className="mt-2.5 text-[17px] leading-snug font-bold">{r.title}</p>
                  <p className="mt-2 text-[14px] leading-[1.6] text-ink-body">{r.challenge}</p>
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
