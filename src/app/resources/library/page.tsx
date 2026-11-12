import type { Metadata } from "next";
import { Crumbs, Eyebrow, NewsletterBand } from "@/components/resources/parts";
import { ResourceLibrary } from "@/components/ResourceLibrary";
import { Section } from "@/components/ui";
import { WhitepaperLibrary } from "@/components/WhitepaperLibrary";
import { isResourceType, resources, resourceTypes } from "@/content/resources";
import { downloadable } from "@/content/whitepapers";
import { routes } from "@/lib/site";

type Props = { searchParams: Promise<Record<string, string | string[] | undefined>> };
const LIB = "/resources/library";

const intro: Record<string, { title: string; lead: string }> = {
  all: { title: "Resource library", lead: "Articles, whitepapers, research and the science behind Corporate Brain, on behavior and teams at work." },
  articles: { title: "Articles", lead: "Short, practical reads on behavior, team performance, hiring and risk." },
  whitepapers: { title: "Whitepapers", lead: "The Behavioral Enterprise Series: in-depth papers for leaders who shape teams, free to download." },
  research: { title: "Research", lead: "Original research from Brain Interacts, including our monograph The Behavioral Enterprise." },
  science: { title: "Science", lead: "The model, the scoring and the evidence behind every Corporate Brain result." },
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const c = (await searchParams).category;
  const key = typeof c === "string" && isResourceType(c) ? c : "all";
  return {
    title: key === "all" ? "Resource Library" : `${intro[key].title} · Resource Library`,
    description: intro[key].lead,
    alternates: { canonical: key === "all" ? LIB : `${LIB}?category=${key}` },
  };
}

export default async function ResourcesPage({ searchParams }: Props) {
  const sp = await searchParams;
  const c = sp.category;
  const q = typeof sp.q === "string" ? sp.q.slice(0, 80) : "";
  const category = typeof c === "string" && isResourceType(c) ? c : "all";
  const head = intro[category];

  return (
    <>
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-[1280px] px-4 pt-10 pb-12 md:px-8 md:pt-14 md:pb-16">
          <Crumbs items={[{ label: "Home", href: routes.home }, { label: "Resources", href: routes.resources }, ...(category === "all" ? [{ label: "Library" }] : [{ label: "Library", href: LIB }, { label: head.title }])]} />
          <Eyebrow color="amber">Resource library</Eyebrow>
          <h1 className="text-[clamp(32px,4.5vw,56px)] leading-[1.04] font-bold">{head.title}</h1>
          <p className="mt-4 max-w-[640px] text-[16px] leading-[1.65] text-on-navy">{head.lead}</p>
          <ul className="m-0 mt-7 flex list-none flex-wrap gap-x-7 gap-y-2 p-0 text-sm text-on-navy">
            {resourceTypes.map((t) => (
              <li key={t.key}>
                <strong className="text-white">{resources.filter((r) => r.type === t.key).length}</strong> {t.label.toLowerCase()}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Section tone="light" innerClassName="py-12 md:py-16">
        <ResourceLibrary key={category + q} items={resources} initialCategory={category} initialQuery={q} />
      </Section>

      <WhitepaperLibrary papers={downloadable} variant="dialog" />

      <NewsletterBand id="library-signup" />
    </>
  );
}
