import type { Metadata } from "next";
import { CardGrid, PageHero } from "@/components/blocks";
import { SignupForm } from "@/components/SignupForm";
import { ButtonLink, Eyebrow, H2, Section } from "@/components/ui";
import { routes } from "@/lib/site";

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
              Featured whitepaper
            </Eyebrow>
            <H2>Archetypes and the Research Behind Them</H2>
          </div>
          <div>
            <p className="text-[17px] leading-[1.75] text-on-navy">
              How the assessments work, what each working style means, and how to use results fairly — written for the people who
              read them.
            </p>
            {/* Becomes a gated download (work email) once the PDF is supplied. */}
            <ButtonLink href={routes.blog} className="mt-6">
              Download the whitepaper
            </ButtonLink>
          </div>
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
