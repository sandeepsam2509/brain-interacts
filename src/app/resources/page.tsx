import type { Metadata } from "next";
import Link from "next/link";
import { ResourceLibrary } from "@/components/ResourceLibrary";
import { SignupForm } from "@/components/SignupForm";
import { Section } from "@/components/ui";
import { WhitepaperLibrary } from "@/components/WhitepaperLibrary";
import { isResourceType, resources, resourceTypes } from "@/content/resources";
import { downloadable } from "@/content/whitepapers";
import { routes } from "@/lib/site";

type Props = { searchParams: Promise<Record<string, string | string[] | undefined>> };

const intro: Record<string, { title: string; lead: string }> = {
  all: { title: "Resource library", lead: "Articles, whitepapers and research on behavior, teams and the science behind Corporate Brain." },
  articles: { title: "Articles", lead: "Short, practical reads on behavior, team performance, hiring and risk." },
  whitepapers: { title: "Whitepapers", lead: "The Behavioral Enterprise Series: in-depth papers for leaders who shape teams, free to download." },
  research: { title: "Research", lead: "The model, the scoring and the evidence behind every Corporate Brain result." },
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const c = (await searchParams).category;
  const key = typeof c === "string" && isResourceType(c) ? c : "all";
  return {
    title: key === "all" ? "Resource Library" : `${intro[key].title} · Resource Library`,
    description: intro[key].lead,
    alternates: { canonical: key === "all" ? routes.resources : `${routes.resources}?category=${key}` },
  };
}

export default async function ResourcesPage({ searchParams }: Props) {
  const c = (await searchParams).category;
  const category = typeof c === "string" && isResourceType(c) ? c : "all";
  const head = intro[category];

  return (
    <>
      {/* Light hero, in the style of a modern resource library */}
      <section className="relative overflow-hidden border-b border-rule bg-[#EEF1F6]">
        <div aria-hidden="true" className="pointer-events-none absolute -top-40 -right-32 h-[420px] w-[420px] rounded-full bg-sky/25 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-48 left-1/3 h-[380px] w-[380px] rounded-full bg-lime/25 blur-3xl" />
        <div className="relative mx-auto max-w-[1280px] px-4 pt-10 pb-12 md:px-8 md:pt-14 md:pb-16">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-ink-muted">
            <Link href={routes.home} className="text-ink-muted no-underline hover:text-ink">
              Home
            </Link>
            <span className="mx-2">/</span>
            {category === "all" ? (
              <span className="text-ink">Resource library</span>
            ) : (
              <>
                <Link href={routes.resources} className="text-ink-muted no-underline hover:text-ink">
                  Resource library
                </Link>
                <span className="mx-2">/</span>
                <span className="text-ink">{head.title}</span>
              </>
            )}
          </nav>
          <h1 className="text-[clamp(40px,5.6vw,76px)] leading-[1.02] font-extrabold tracking-[-0.035em] text-ink">{head.title}</h1>
          <p className="mt-5 max-w-[640px] text-[18px] leading-[1.65] text-ink-body md:text-[20px]">{head.lead}</p>
          <ul className="m-0 mt-8 flex list-none flex-wrap gap-x-8 gap-y-2 p-0 text-sm text-ink-body">
            {resourceTypes.map((t) => (
              <li key={t.key}>
                <strong className="text-ink">{resources.filter((r) => r.type === t.key).length}</strong> {t.label.toLowerCase()}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Section tone="light" innerClassName="py-12 md:py-16">
        <ResourceLibrary key={category} items={resources} initialCategory={category} />
      </Section>

      <WhitepaperLibrary papers={downloadable} variant="dialog" />

      <Section tone="dark" innerClassName="py-16 md:py-24">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <h2 className="text-[clamp(30px,3.6vw,46px)] leading-[1.08] font-extrabold tracking-[-0.02em]">New research, once a month.</h2>
            <p className="mt-4 text-lg text-on-navy">New articles, whitepapers and research in your inbox. No spam.</p>
          </div>
          <SignupForm tone="dark" id="resources-signup" button="Subscribe" />
        </div>
      </Section>
    </>
  );
}
