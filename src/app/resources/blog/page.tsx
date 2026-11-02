import type { Metadata } from "next";
import { PageHero } from "@/components/blocks";
import { ArticleList, type ArticleSummary } from "@/components/ArticleList";
import { SignupForm } from "@/components/SignupForm";
import { Eyebrow, H2, Section } from "@/components/ui";
import { WhitepaperLibrary } from "@/components/WhitepaperLibrary";
import { downloadable, whitepapers } from "@/content/whitepapers";

const upcoming = whitepapers.filter((w) => !w.file);
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

      <Section tone="dark" id="whitepapers" className="scroll-mt-20 border-t border-navy-rule">
        <Eyebrow icon="spark" color="gold">
          Whitepapers
        </Eyebrow>
        <H2 className="mb-4">In-depth papers.</H2>
        <p className="mb-10 max-w-[720px] text-[17px] leading-[1.75] text-on-navy">
          The Behavioral Enterprise Series: papers on one idea. Most business problems that look like strategy, technology or people
          problems are really behavior problems, and behavior responds to design more reliably than to instructions.
        </p>
        <WhitepaperLibrary papers={downloadable} />
        {upcoming.length > 0 && (
          <p className="mt-14 border-t border-navy-line pt-6 text-on-navy-muted">
            Coming soon: {upcoming.map((w) => w.title).join(", ")}.
          </p>
        )}
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
          <SignupForm tone="dark" id="blog-signup" button="Subscribe for new insights" />
        </div>
      </Section>
    </>
  );
}
