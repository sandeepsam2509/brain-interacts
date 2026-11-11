import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Art } from "@/components/ResourceLibrary";
import { ButtonLink, Section } from "@/components/ui";
import { articles, type Block, findArticle } from "@/content/articles";
import { resources } from "@/content/resources";
import { routes } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const a = findArticle((await params).slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.dek,
    alternates: { canonical: `/resources/articles/${a.slug}` },
    openGraph: { type: "article", title: a.title, description: a.dek },
  };
}

const anchor = (t: string) =>
  t
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

/** Bold a short lead-in such as "Better role fit." at the start of a list item. */
function leadBold(text: string) {
  const m = text.match(/^([^.:?]{2,60}[.:?])\s+(.+)$/);
  if (!m || m[1].split(" ").length > 8) return text;
  return (
    <>
      <strong className="font-semibold text-ink">{m[1]}</strong> {m[2]}
    </>
  );
}

function Body({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.t) {
          case "p":
            return (
              <p
                key={i}
                className="mb-6 text-[16px] leading-[1.8] text-ink-body"
              >
                {b.text}
              </p>
            );
          case "h2":
            return (
              <h2
                key={i}
                id={anchor(b.text)}
                className="mt-12 mb-4 scroll-mt-24 text-[clamp(19px,1.9vw,24px)] leading-[1.2] font-extrabold tracking-[-0.02em] text-ink"
              >
                {b.text}
              </h2>
            );
          case "image":
            return (
              <figure key={i} className="my-10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${b.src}?auto=format&fit=crop&w=1600&h=900&q=80`}
                  srcSet={`${b.src}?auto=format&fit=crop&w=800&h=450&q=80 800w, ${b.src}?auto=format&fit=crop&w=1200&h=675&q=80 1200w, ${b.src}?auto=format&fit=crop&w=1600&h=900&q=80 1600w, ${b.src}?auto=format&fit=crop&w=2400&h=1350&q=80 2400w`}
                  sizes="(min-width: 1024px) 720px, 100vw"
                  alt={b.alt}
                  width={1600}
                  height={900}
                  loading="lazy"
                  className="aspect-video w-full rounded-2xl object-cover"
                />
                <figcaption className="mt-2 text-[12px] text-ink-muted">
                  Photo by{" "}
                  <a href={b.creditUrl} target="_blank" rel="noopener noreferrer" className="underline">
                    {b.credit}
                  </a>{" "}
                  on{" "}
                  <a href="https://unsplash.com/?utm_source=brain_interacts&utm_medium=referral" target="_blank" rel="noopener noreferrer" className="underline">
                    Unsplash
                  </a>
                </figcaption>
              </figure>
            );
          case "h3":
            return (
              <h3
                key={i}
                className="mt-8 mb-3 text-[17px] leading-[1.3] font-bold text-ink"
              >
                {b.text}
              </h3>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="my-10 border-y border-rule py-8 text-[clamp(18px,1.9vw,22px)] leading-[1.35] font-bold tracking-[-0.01em] text-ink"
              >
                <span aria-hidden="true" className="mr-1 text-green-ink">
                  “
                </span>
                {b.text}
                <span aria-hidden="true" className="text-green-ink">
                  ”
                </span>
              </blockquote>
            );
          case "list":
            return (
              <ul key={i} className="mb-6 list-none space-y-3 p-0">
                {b.items.map((it, n) => (
                  <li
                    key={it}
                    className="flex gap-3 text-[15px] leading-[1.7] text-ink-body"
                  >
                    {b.ordered ? (
                      <span
                        aria-hidden="true"
                        className="mt-[3px] flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy text-[12px] font-bold text-lime"
                      >
                        {n + 1}
                      </span>
                    ) : (
                      <span
                        aria-hidden="true"
                        className="mt-[11px] h-2 w-2 shrink-0 rounded-full bg-sky"
                      />
                    )}
                    <span>{leadBold(it)}</span>
                  </li>
                ))}
              </ul>
            );
          case "steps":
            return (
              <ol
                key={i}
                className="my-8 list-none space-y-0 border-t border-rule p-0"
              >
                {b.items.map((s, n) => (
                  <li
                    key={s.title}
                    className="grid grid-cols-[44px_1fr] gap-4 border-b border-rule py-5"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy font-mono text-sm text-lime">
                      {String(n + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <strong className="block text-[15px] text-ink">
                        {s.title}
                      </strong>
                      <span className="mt-1 block text-[15px] leading-[1.65] text-ink-body">
                        {s.text}
                      </span>
                    </span>
                  </li>
                ))}
              </ol>
            );
          case "callout":
            return (
              <aside
                key={i}
                className="my-8 rounded-2xl bg-[#EEF2F6] p-6 md:p-7"
              >
                <p className="font-mono text-[11px] tracking-[0.12em] text-ink-link uppercase">
                  {b.title}
                </p>
                <p className="mt-2 text-[15px] leading-[1.7] text-ink">
                  {b.text}
                </p>
              </aside>
            );
          case "compare":
            return (
              <div
                key={i}
                className="my-8 overflow-hidden rounded-2xl border border-rule"
              >
                <div className="grid grid-cols-2 bg-navy text-white">
                  {b.headings.map((h) => (
                    <p key={h} className="px-4 py-3 text-sm font-bold md:px-5">
                      {h}
                    </p>
                  ))}
                </div>
                {b.rows.map(([l, r]) => (
                  <div
                    key={l}
                    className="grid grid-cols-2 border-t border-rule text-[14px] leading-[1.55]"
                  >
                    <p className="border-r border-rule px-4 py-3 text-ink-body md:px-5">
                      {l}
                    </p>
                    <p className="px-4 py-3 text-ink md:px-5">{r}</p>
                  </div>
                ))}
              </div>
            );
        }
      })}
    </>
  );
}

export default async function ArticlePage({ params }: Props) {
  const a = findArticle((await params).slug);
  if (!a) notFound();
  const res = resources.find((r) => r.href === `/resources/articles/${a.slug}`);
  const headings = a.body.filter(
    (b): b is { t: "h2"; text: string } => b.t === "h2",
  );
  const related = a.related
    .map(findArticle)
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <>
      <section className="border-b border-rule bg-[#EEF2F6]">
        <div className="mx-auto max-w-[1280px] px-4 pt-10 pb-10 md:px-8 md:pt-14">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-ink-muted">
            <Link
              href={routes.resources}
              className="text-ink-muted no-underline hover:text-ink"
            >
              Resource library
            </Link>
            <span className="mx-2">/</span>
            <Link
              href={routes.blog}
              className="text-ink-muted no-underline hover:text-ink"
            >
              Articles
            </Link>
          </nav>
          <p className="font-mono text-[11px] tracking-[0.12em] text-gold-ink uppercase">
            Article · {a.topic}
          </p>
          <h1 className="mt-3 max-w-[920px] text-[clamp(27px,3.7vw,48px)] leading-[1.05] font-extrabold tracking-[-0.03em] text-ink">
            {a.title}
          </h1>
          <p className="mt-5 max-w-[760px] text-[17px] leading-[1.6] text-ink-body md:text-[17px]">
            {a.dek}
          </p>
          <p className="mt-6 text-sm text-ink-muted">
            Brain Interacts Research · {a.minutes} min read
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="-mt-px aspect-[21/7] overflow-hidden rounded-b-[20px] md:aspect-[21/6]">
          {res && <Art r={res} seed={articles.indexOf(a)} />}
        </div>
      </div>

      <div className="mx-auto grid max-w-[1280px] gap-12 px-4 py-12 md:px-8 md:py-16 lg:grid-cols-[minmax(0,720px)_300px] lg:justify-between">
        <article className="min-w-0">
          {a.takeaways.length > 0 && (
            <div className="mb-10 rounded-2xl border border-rule p-6 md:p-7">
              <p className="font-mono text-[11px] tracking-[0.12em] text-ink-muted uppercase">
                Key takeaways
              </p>
              <ul className="m-0 mt-3 list-none space-y-3 p-0">
                {a.takeaways.map((t) => (
                  <li
                    key={t}
                    className="flex gap-3 text-[15px] leading-[1.6] text-ink"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime text-xs font-bold text-navy"
                    >
                      ✓
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <Body blocks={a.body} />
          {a.references.length > 0 && (
            <div className="mt-14 border-t border-rule pt-6">
              <p className="font-mono text-[11px] tracking-[0.12em] text-ink-muted uppercase">
                References
              </p>
              <ol className="mt-3 list-none space-y-2 p-0">
                {a.references.map((r) => (
                  <li
                    key={r}
                    className="pl-5 -indent-5 text-[14px] leading-[1.55] text-ink-body"
                  >
                    {r}
                  </li>
                ))}
              </ol>
            </div>
          )}
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-24">
            {headings.length > 0 && (
              <nav aria-label="In this article">
                <p className="font-mono text-[11px] tracking-[0.12em] text-ink-muted uppercase">
                  In this article
                </p>
                <ul className="m-0 mt-3 list-none border-l border-rule p-0">
                  {headings.map((h) => (
                    <li key={h.text}>
                      <a
                        href={`#${anchor(h.text)}`}
                        className="-ml-px block border-l-2 border-transparent py-1.5 pl-4 text-[14px] leading-snug text-ink-body no-underline hover:border-navy hover:text-ink"
                      >
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
            <div className="mt-10 rounded-2xl bg-navy p-6 text-white">
              <p className="text-lg font-extrabold">
                Discover your working style
              </p>
              <p className="mt-2 text-[14px] leading-[1.6] text-on-navy">
                Twenty statements. Your archetype and scored report in your
                inbox within minutes. Free.
              </p>
              <ButtonLink href={routes.snapshot} className="mt-4">
                Take the free assessment
              </ButtonLink>
            </div>
          </div>
        </aside>
      </div>

      {related.length > 0 && (
        <Section tone="light" innerClassName="pt-0 pb-16 md:pb-20">
          <p className="mb-6 font-mono text-[11px] tracking-[0.12em] text-ink-muted uppercase">
            Keep reading
          </p>
          <ul className="m-0 grid list-none gap-6 p-0 md:grid-cols-2">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/resources/articles/${r.slug}`}
                  className="group block h-full rounded-2xl border border-rule p-6 text-ink no-underline transition-shadow hover:shadow-[0_18px_44px_rgba(15,23,42,0.12)] md:p-7"
                >
                  <p className="font-mono text-[11px] tracking-[0.12em] text-gold-ink uppercase">
                    Article · {r.topic}
                  </p>
                  <p className="mt-2.5 text-[17px] leading-snug font-bold">
                    {r.title}
                  </p>
                  <p className="mt-2 text-[14px] leading-[1.6] text-ink-body">
                    {r.dek}
                  </p>
                  <span className="mt-4 inline-block text-[14px] font-bold group-hover:text-ink-link">
                    Read article →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section tone="dark" innerClassName="py-16 md:py-20">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-[clamp(22px,2.7vw,34px)] leading-[1.1] font-extrabold tracking-[-0.02em]">
              See it on your own teams.
            </h2>
            <p className="mt-3 text-lg text-on-navy">
              A live walkthrough of Corporate Brain, built around your org
              structure.
            </p>
          </div>
          <ButtonLink href={routes.demo}>Get a demo</ButtonLink>
        </div>
      </Section>
    </>
  );
}
