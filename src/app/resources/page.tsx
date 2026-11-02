import type { Metadata } from "next";
import { CardGrid, PageHero } from "@/components/blocks";
import { SignupForm } from "@/components/SignupForm";
import { ButtonLink, Eyebrow, H2, Section } from "@/components/ui";
import { whitepapers } from "@/content/whitepapers";
import { routes } from "@/lib/site";

const featured = whitepapers.filter((w) => w.file);

export const metadata: Metadata = {
  title: "Resources",
  description: "Research, articles and stories from Brain Interacts on behavior, teams and the science behind our products.",
  alternates: { canonical: routes.resources },
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        trail={[{ label: "Home", href: routes.home }, { label: "Resources" }]}
        label={{ icon: "grid", text: "Resources", color: "gold" }}
        title="Ideas and evidence for"
        accent="building better teams."
        lead="Research, articles and stories from Brain Interacts — on behavior, teams and the science behind our products."
      />

      <CardGrid
        tone="light"
        label={{ icon: "grid", text: "Explore", color: "link" }}
        title="Start here."
        cards={[
          { tag: "Research", title: "The Science", rule: "amber", text: "How our assessments work, the research behind them, and their limits.", link: { label: "Read the science", href: routes.science } },
          { tag: "Reading", title: "Blogs & Whitepapers", rule: "blue", text: "Articles and in-depth papers on behavior, teams and risk.", link: { label: "Browse articles", href: routes.blog } },
          { tag: "Proof", title: "Customer Stories", rule: "green", text: "How organizations use Brain Interacts to make people decisions.", link: { label: "See stories", href: routes.stories } },
        ]}
      />

      <Section tone="dark">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow icon="spark" color="gold">
              Featured · The Behavioral Enterprise Series
            </Eyebrow>
            <H2>{featured.length} whitepapers for leaders who shape teams.</H2>
            <p className="mt-5 text-[17px] leading-[1.75] text-on-navy">
              Most business problems that look like strategy, technology or people problems are really behavior problems. Each paper
              takes one and shows how to redesign it.
            </p>
            <ButtonLink href={`${routes.blog}#whitepapers`} className="mt-6">
              Browse all whitepapers
            </ButtonLink>
          </div>
          <ul className="m-0 list-none border-t border-navy-line p-0">
            {featured.map((w) => (
              <li key={w.title} className="flex items-center justify-between gap-4 border-b border-navy-line py-4">
                <span>
                  <strong className="block">{w.title}</strong>
                  <span className="text-sm text-on-navy-muted">{w.pages} pages</span>
                </span>
                <a href={w.file} download className="shrink-0 font-bold text-lime no-underline hover:underline">
                  PDF <span aria-hidden="true">↓</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="light">
        <Eyebrow icon="spark" color="green">
          Stay in the loop
        </Eyebrow>
        <H2 className="mb-8">New research, once a month.</H2>
        <SignupForm tone="light" id="resources-signup" />
      </Section>
    </>
  );
}
