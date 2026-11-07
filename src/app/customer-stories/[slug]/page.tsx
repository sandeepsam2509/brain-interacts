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
    { h: "The challenge", t: s.challenge },
    { h: "How they used Brain", t: s.how },
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
            <h1 className="mt-3 text-[clamp(27px,3.7vw,48px)] leading-[1.05] font-extrabold tracking-[-0.03em]">{s.title}</h1>
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
                    <Link key={p} href={productLinks[p]} className="rounded-full bg-[#EEF1F6] px-2.5 py-1 text-[13px] font-semibold text-ink no-underline hover:bg-navy hover:text-white">
                      {p}
                    </Link>
                  ))}
                </dd>
              </div>
            </dl>
            <p className="mt-5 border-t border-rule pt-4 text-[13px] leading-[1.55] text-ink-muted">Client names are kept confidential.</p>
          </div>
        </aside>

        <article className="min-w-0 max-w-[760px]">
          {sections.map((x) => (
            <section key={x.h} className="mb-10">
              <h2 className="text-[clamp(19px,1.9vw,24px)] font-extrabold tracking-[-0.02em]">{x.h}</h2>
              <p className="mt-3 text-[16px] leading-[1.8] text-ink-body">{x.t}</p>
            </section>
          ))}
          <section className="mb-10">
            <h2 className="text-[clamp(19px,1.9vw,24px)] font-extrabold tracking-[-0.02em]">The result</h2>
            {s.result ? (
              <p className="mt-3 text-[16px] leading-[1.8] text-ink-body">{s.result}</p>
            ) : (
              <div className="mt-4 rounded-2xl bg-[#EEF1F6] p-6">
                <p className="font-bold">Results are being confirmed with the client.</p>
                <p className="mt-1 text-[14px] leading-[1.6] text-ink-body">We publish outcomes only once the client has reviewed and approved them.</p>
              </div>
            )}
          </section>
          <div className="rounded-2xl bg-navy p-7 text-white md:p-8">
            <p className="text-xl font-extrabold">Facing a similar challenge?</p>
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
