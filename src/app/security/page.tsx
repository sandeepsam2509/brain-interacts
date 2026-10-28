import type { Metadata } from "next";
import { CardGrid, CompareTable, CtaBlock, PageHero } from "@/components/blocks";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Security, Compliance & Data Privacy",
  description:
    "How Brain Interacts protects behavioral data: a separate database per customer, role-based access, correction and deletion on request, and DPDP-aligned privacy practices.",
  alternates: { canonical: routes.security },
};

export default function SecurityPage() {
  return (
    <>
      <PageHero
        trail={[{ label: "Home", href: routes.home }, { label: "Security & Privacy" }]}
        label={{ icon: "grid", text: "Security · compliance · privacy", color: "lime" }}
        title="Your people's data,"
        accent="handled with care."
        accentColor="lime"
        lead="Behavioral data is personal. We designed Brain Interacts so it stays isolated, visible only to the right people, and always under your control."
        actions={[
          { label: "Get a demo", href: routes.demo },
          { label: "Contact the team", href: routes.contact, variant: "outlineDark" },
        ]}
      />

      <CardGrid
        tone="light"
        columns={4}
        label={{ icon: "target", text: "How we protect data", color: "link" }}
        title="Privacy is built into the product, not added later."
        cards={[
          { title: "A separate database per customer", rule: "amber", text: "Your data never shares a database with another organization." },
          { title: "Role-based access", rule: "blue", text: "Leaders, managers and employees each see only what their seat needs." },
          { title: "Correct or delete on request", rule: "green", text: "People can ask for their data to be corrected or removed." },
          { title: "Explainable results", rule: "navy", text: "Every recommendation lists its reasons, so it can be reviewed and challenged." },
        ]}
      />

      {/* Encryption and India hosting statements to be confirmed by the product team before launch. */}
      <CompareTable
        tone="dark"
        label={{ icon: "chart", text: "Testing & compliance", color: "gold" }}
        title="Where we stand today."
        headings={["Area", "Status"]}
        template="md:grid-cols-[1fr_2fr]"
        highlightLast={false}
        rows={[
          ["Penetration testing", "Independent security testing (VAPT) is underway ahead of launch."],
          ["Encryption", "Data is encrypted in transit and at rest."],
          ["Certifications & frameworks", "Independent VAPT underway; privacy practices designed around India's DPDP Act, 2023."],
          ["Data residency", "Customer data is hosted in India."],
          ["Data protection law", "Request access, correction or erasure anytime via privacy@braininteracts.com."],
        ]}
      />

      <CardGrid
        tone="light"
        columns={4}
        label={{ icon: "people", text: "Responsible use", color: "green" }}
        title="How we ask customers to use results."
        cards={[
          { title: "Never personality alone", text: "Results support decisions about hiring or promotion — they never make them." },
          { title: "Same process for everyone", text: "Apply the same assessments to everyone in the same decision." },
          { title: "People hear their results first", text: "Share results in a conversation, with a chance to comment or correct." },
          { title: "Retake and review", text: "Results change. Re-assess after a year or a major role change." },
        ]}
      />

      <CtaBlock
        tone="dark"
        title="Have a security question?"
        text="Our team can walk your IT and legal reviewers through how Brain Interacts handles data."
        actions={[{ label: "Get a demo", href: routes.demo }]}
      />
    </>
  );
}
