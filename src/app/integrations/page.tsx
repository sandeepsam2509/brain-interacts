import type { Metadata } from "next";
import Link from "next/link";
import { Band, Closing, Head, Hero, accents, btn } from "@/components/v3";
import { enquiryHref } from "@/lib/enquiries";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Integrations",
  description: "Brain Interacts connects to your hiring, HR and lending systems through APIs, so insight shows up where decisions happen.",
  alternates: { canonical: routes.integrations },
};

// Describes how each category connects today. No vendor logos until each integration is confirmed live.
const categories = [
  ["HR systems (HRMS)", "Bring in people, teams and reporting lines.", "Sync employee records and teams through the Corporate Brain API, so org structures stay current."],
  ["Hiring (ATS)", "Send Decode assessments from your hiring process.", "Send candidate profiles and assessment results to your applicant tracking system through the API."],
  ["Email & chat", "Communication-style analysis, with consent.", "Runs only with consent. Email and chat data is deleted after 30 days."],
  ["Sign-in (SSO)", "Log in with your company account.", "Available for enterprise plans on request."],
  ["Lending systems", "FinCheck in your origination workflow.", "REST APIs and SDKs deliver risk profiles and approve-or-flag recommendations, and harmonize bureau scores with behavioral metrics."],
];

export default function IntegrationsPage() {
  return (
    <>
      <Hero
        crumbs={[{ label: "Home", href: routes.home }, { label: "Platform" }, { label: "Integrations" }]}
        eyebrow="Integrations"
        title="Works with the tools your teams already use."
        lead="Connect Corporate Brain, Decode and FinCheck to your HR, hiring and lending systems, so insight shows up where decisions happen."
        actions={[
          { label: "Ask about an integration", href: enquiryHref("integration") },
          { label: "Check compatibility with your stack", href: enquiryHref("compatibility") },
        ]}
      />

      <Band>
        <Head eyebrow="Categories" title="What you can connect." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categories.map(([t, d, how], i) => (
            <div key={t} className={`flex flex-col rounded-xl border-t-4 bg-cloud p-6 ${accents.bar[i % 3]}`}>
              <h3 className="text-[18px] font-semibold text-ink">{t}</h3>
              <p className="mt-1 text-[14.5px] text-ink-body">{d}</p>
              <p className="mt-4 mb-0 rounded-lg bg-white p-3 text-[13.5px] text-ink-body">
                <strong className="text-ink">How:</strong> {how}
              </p>
            </div>
          ))}
        </div>
      </Band>

      <Band tone="cloud">
        <div className="grid items-center gap-8 rounded-2xl bg-white p-7 md:grid-cols-[1.4fr_1fr] md:p-10">
          <div>
            <Head eyebrow="Don't see yours?" title="Tell us what you use." />
            <p className="-mt-4 text-ink-body">We prioritise the integrations our customers ask for most.</p>
          </div>
          <Link href={enquiryHref("integration")} className={`${btn.red} justify-self-start md:justify-self-end`}>
            Send a request
          </Link>
        </div>
      </Band>

      <Closing
        title="See it running on your stack."
        text="A live walkthrough of Corporate Brain with your own structure and tools."
        actions={[
          { label: "Get a demo", href: enquiryHref("demo") },
          { label: "Read about security", href: routes.trust },
        ]}
      />
    </>
  );
}
