import type { Metadata } from "next";
import { PageHero } from "@/components/blocks";
import { ArticleList, type ArticleSummary } from "@/components/ArticleList";
import { SignupForm } from "@/components/SignupForm";
import { Eyebrow, H2, Section } from "@/components/ui";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blogs & Whitepapers",
  description: "Practical articles and in-depth papers on behavior, team performance, culture and risk from Brain Interacts.",
  alternates: { canonical: routes.blog },
};

const categories = ["Team analytics", "Hiring", "Culture", "Financial risk", "Science"];

// Article pages and dates arrive with the content system (Sanity) after round 4.
const articles: ArticleSummary[] = [
  { category: "Team analytics", title: "Most performance problems are really fit problems", summary: "Why the right person on the wrong work looks like underperformance." },
  { category: "Hiring", title: "What the Big Five can — and can't — tell you about a hire", summary: "A plain guide to using personality data fairly." },
  { category: "Team analytics", title: "Why team mix matters more than star players", summary: "What research says about personality make-up and team performance." },
  { category: "Financial risk", title: "Ability to pay vs. willingness to pay", summary: "How behavioral signals add a layer to credit decisions." },
  { category: "Science", title: "Games vs. questionnaires: what each really measures", summary: "When self-report helps, and when behavior tells you more." },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        trail={[{ label: "Home", href: routes.home }, { label: "Resources", href: routes.resources }, { label: "Blogs & Whitepapers" }]}
        label={{ icon: "grid", text: "Blogs & whitepapers", color: "sky" }}
        title="Reading for people who"
        accent="shape teams."
        accentColor="sky"
        lead="Practical articles and in-depth papers on behavior, team performance, culture and risk."
      />

      <Section tone="dark" className="border-t border-navy-rule">
        <Eyebrow icon="spark" color="gold">
          Whitepapers
        </Eyebrow>
        <H2 className="mb-10">In-depth papers.</H2>
        <ul className="m-0 list-none border-t border-navy-line p-0">
          <li className="grid gap-2 border-b border-navy-line py-6 md:grid-cols-[1.2fr_1.6fr_0.6fr] md:gap-6">
            <strong className="text-lg">Archetypes and the Research Behind Them</strong>
            <span className="leading-[1.7] text-on-navy">The Big Five, the ten archetypes, scoring, and responsible use. · 12 pages</span>
            {/* Gated download once the PDF is supplied. */}
            <span className="font-bold text-on-navy-muted md:text-right">Coming soon</span>
          </li>
          <li className="grid gap-2 border-b border-navy-line py-6 md:grid-cols-[1.2fr_1.6fr_0.6fr] md:gap-6">
            <strong className="text-lg">[UPCOMING WHITEPAPER]</strong>
            <span className="leading-[1.7] text-on-navy">[Short description]</span>
            <span className="text-on-navy-muted md:text-right">Coming soon</span>
          </li>
        </ul>
      </Section>

      <Section tone="light">
        <Eyebrow icon="spark" color="link">
          Articles
        </Eyebrow>
        <H2 className="mb-8">Latest from the blog.</H2>
        <ArticleList categories={categories} articles={articles} />
      </Section>

      <Section tone="dark" innerClassName="py-16 md:py-24">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-[clamp(32px,4vw,52px)] leading-[1.08] font-extrabold tracking-[-0.02em]">Get new articles by email.</h2>
          <p className="mt-4 mb-8 text-lg text-on-navy">One email a month. No spam.</p>
          <SignupForm tone="dark" id="blog-signup" />
        </div>
      </Section>
    </>
  );
}
