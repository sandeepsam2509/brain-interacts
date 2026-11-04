// Everything in the Resource Library: articles, whitepapers and research.
import { whitepapers } from "./whitepapers";
import { routes } from "@/lib/site";

export type ResourceType = "articles" | "whitepapers" | "research";

export const resourceTypes: { key: ResourceType; label: string; singular: string }[] = [
  { key: "articles", label: "Articles", singular: "Article" },
  { key: "whitepapers", label: "Whitepapers", singular: "Whitepaper" },
  { key: "research", label: "Research", singular: "Research" },
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
};

const papers: Resource[] = whitepapers.map((w) => ({
  id: `wp-${w.slug}`,
  // The archetypes paper is the research behind the model, so it sits under Research.
  type: w.slug === "archetypes-research" ? "research" : "whitepapers",
  title: w.title,
  summary: w.summary,
  topic: wpTopic[w.slug] ?? "Teams & performance",
  meta: w.file ? `${w.pages} pages · PDF · For ${w.audience}` : `For ${w.audience}`,
  whitepaper: w.file ? w.slug : undefined,
  cover: w.cover,
  comingSoon: !w.file,
}));

const research: Resource[] = [
  { id: "rs-science", type: "research", title: "The science behind Corporate Brain", summary: "How our assessments work, the research they build on, and where their limits are.", topic: "Science & methods", href: routes.science },
  { id: "rs-frameworks", type: "research", title: "The Corporate Brain model", summary: "Six goals, five functions, ten archetypes and 300 strategies: how a company goal reaches each person's work.", topic: "Science & methods", href: routes.scienceFrameworks },
  { id: "rs-methodology", type: "research", title: "How archetypes are scored", summary: "From 20 answers to Big Five scores, archetype matches and the ten modifiers that fine-tune guidance.", topic: "Science & methods", href: routes.scienceMethodology },
  { id: "rs-validity", type: "research", title: "Scientific validity", summary: "What the research supports, what it doesn't, and how to use results responsibly.", topic: "Science & methods", href: routes.scienceValidity },
];

const articles: Resource[] = [
  { id: "ar-fit", type: "articles", title: "Most performance problems are really fit problems", summary: "Why the right person on the wrong work looks like underperformance.", topic: "Teams & performance", comingSoon: true },
  { id: "ar-bigfive", type: "articles", title: "What the Big Five can — and can't — tell you about a hire", summary: "A plain guide to using personality data fairly.", topic: "Hiring", comingSoon: true },
  { id: "ar-mix", type: "articles", title: "Why team mix matters more than star players", summary: "What research says about personality make-up and team performance.", topic: "Teams & performance", comingSoon: true },
  { id: "ar-credit", type: "articles", title: "Ability to pay vs. willingness to pay", summary: "How behavioral signals add a layer to credit decisions.", topic: "Financial risk", comingSoon: true },
  { id: "ar-games", type: "articles", title: "Games vs. questionnaires: what each really measures", summary: "When self-report helps, and when behavior tells you more.", topic: "Science & methods", comingSoon: true },
];

/** Library order: available items first, coming-soon items last. */
export const resources: Resource[] = [...papers.filter((p) => p.type === "whitepapers"), ...research, ...papers.filter((p) => p.type === "research"), ...articles].sort(
  (a, b) => Number(!!a.comingSoon) - Number(!!b.comingSoon),
);

export const featuredResourceId = "wp-the-sunk-cost-trap";

export const isResourceType = (v: string): v is ResourceType => resourceTypes.some((t) => t.key === v);
