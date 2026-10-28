import type { Metadata } from "next";
import { CardGrid, CompareTable, CtaBlock, PageHero } from "@/components/blocks";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Integrations",
  description: "Brain Interacts connects to your hiring, HR and lending systems through APIs, so insight shows up where decisions happen.",
  alternates: { canonical: routes.integrations },
};

export default function IntegrationsPage() {
  return (
    <>
      <PageHero
        trail={[{ label: "Home", href: routes.home }, { label: "Integrations" }]}
        label={{ icon: "flow", text: "Integrations", color: "sky" }}
        title="Fits into the tools"
        accent="you already use."
        accentColor="sky"
        lead="Brain Interacts connects to your hiring, HR and lending systems through APIs — so insight shows up where decisions happen."
        actions={[
          { label: "Get a demo", href: routes.demo },
          // API docs aren't public yet.
          { label: "API documentation", href: routes.contact, variant: "outlineDark" },
        ]}
      />

      <CardGrid
        tone="light"
        label={{ icon: "flow", text: "How it connects", color: "link" }}
        title="Two ways in."
        cards={[
          { title: "Corporate Brain API", rule: "amber", text: "Sync candidate and employee profiles with your applicant tracking or HR system." },
          { title: "FinCheck REST APIs & SDKs", rule: "blue", text: "Lightweight APIs and SDKs for lending stacks and mobile banking apps." },
          { title: "Your origination system", rule: "green", text: "FinCheck delivers risk profiles and approve-or-flag recommendations straight into your workflow." },
        ]}
      />

      <CompareTable
        tone="dark"
        label={{ icon: "grid", text: "Categories", color: "lime" }}
        title="What we connect with."
        headings={["Category", "What it does"]}
        template="md:grid-cols-[1fr_2fr]"
        highlightLast={false}
        rows={[
          ["Applicant tracking (ATS)", "Send candidate profiles and assessment results to your ATS through the Corporate Brain API."],
          ["HR systems (HRMS)", "Sync employee records and teams from your HRMS through the API, so org structures stay current."],
          ["Credit bureaus", "FinCheck harmonizes bureau scores with behavioral metrics."],
          ["Single sign-on", "Available for enterprise plans on request."],
        ]}
      />

      <CtaBlock
        tone="light"
        title="Don't see your system?"
        text="Tell us what you use and we'll talk through the options."
        actions={[{ label: "Get a demo", href: routes.demo, variant: "navy" }]}
      />
    </>
  );
}
