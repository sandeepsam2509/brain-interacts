// Everything in the Resource Library: articles, whitepapers and research.
import { articles as articleContent } from "./articles";
import { whitepapers } from "./whitepapers";
import { routes } from "@/lib/site";

export type ResourceType = "articles" | "whitepapers" | "research" | "science";

export const resourceTypes: { key: ResourceType; label: string; singular: string }[] = [
  { key: "articles", label: "Articles", singular: "Article" },
  { key: "whitepapers", label: "Whitepapers", singular: "Whitepaper" },
  { key: "research", label: "Research", singular: "Research" },
  { key: "science", label: "Science", singular: "Science" },
];

export const topics = ["Teams & performance", "Hiring", "Culture", "Motivation & retention", "Adoption & change", "Sales", "Science & methods", "Financial risk"] as const;
export type Topic = (typeof topics)[number];

export type Resource = {
  id: string;
  type: ResourceType;
  title: string;
  summary: string;
  topic: Topic;
  /** Small line under the summary, e.g. "19 pages · PDF". */
  meta?: string;
  /** Link for articles and research pages. */
  href?: string;
  /** Whitepaper slug: opens the download form. */
  whitepaper?: string;
  cover?: string;
  comingSoon?: boolean;
};

const wpTopic: Record<string, Topic> = {
  "the-sunk-cost-trap": "Teams & performance",
  "beyond-the-bonus": "Motivation & retention",
  "the-roi-of-psychological-safety": "Culture",
  "culture-lasts-three-weeks": "Culture",
  "theyre-not-afraid-of-your-price": "Sales",
  "the-nudge-enterprise": "Adoption & change",
  "the-spreadsheet-always-wins": "Adoption & change",
  "archetypes-research": "Science & methods",
  "the-behavioral-enterprise": "Science & methods",
};

const papers: Resource[] = whitepapers.map((w) => ({
  id: `wp-${w.slug}`,
  // Research documents (the monograph, the archetypes paper) sit under Research.
  type: w.kind === "research" ? "research" : "whitepapers",
  title: w.title,
  summary: w.summary,
  topic: wpTopic[w.slug] ?? "Teams & performance",
  meta: w.file ? `${w.pages} pages · PDF · ${w.kind === "research" ? w.audience : `For ${w.audience}`}` : `For ${w.audience}`,
  whitepaper: w.file ? w.slug : undefined,
  cover: w.cover,
  comingSoon: !w.file,
}));

const science: Resource[] = [
  { id: "rs-science", type: "science", title: "The science behind Corporate Brain", summary: "How our assessments work, the research they build on, and where their limits are.", topic: "Science & methods", href: routes.science },
  { id: "rs-frameworks", type: "science", title: "The Corporate Brain model", summary: "Six goals, five functions, ten archetypes and 300 strategies: how a company goal reaches each person's work.", topic: "Science & methods", href: routes.scienceFrameworks },
  { id: "rs-methodology", type: "science", title: "How archetypes are scored", summary: "From 20 answers to Big Five scores, archetype matches and the ten modifiers that fine-tune guidance.", topic: "Science & methods", href: routes.scienceMethodology },
  { id: "rs-validity", type: "science", title: "Scientific validity", summary: "What the research supports, what it doesn't, and how to use results responsibly.", topic: "Science & methods", href: routes.scienceValidity },
];

const articles: Resource[] = articleContent.map((a) => ({
  id: `ar-${a.slug}`,
  type: "articles",
  title: a.title,
  summary: a.dek,
  topic: a.topic as Topic,
  meta: a.number ? `Article ${a.number} · ${a.minutes} min read` : `${a.minutes} min read`,
  href: `/resources/articles/${a.slug}`,
  cover: a.number ? `/articles/covers/${a.slug}.webp` : undefined,
}));

/** Library order: available items first, coming-soon items last. */
export const resources: Resource[] = [...papers.filter((p) => p.type === "research"), ...papers.filter((p) => p.type === "whitepapers"), ...articles, ...science].sort(
  (a, b) => Number(!!a.comingSoon) - Number(!!b.comingSoon),
);

export const featuredResourceId = "wp-the-behavioral-enterprise";

export const isResourceType = (v: string): v is ResourceType => resourceTypes.some((t) => t.key === v);
