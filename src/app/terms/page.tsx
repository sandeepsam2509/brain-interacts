import type { Metadata } from "next";
import { legal, LegalPage } from "@/components/LegalPage";
import { routes, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms for using braininteracts.com and the Free Working-Style Snapshot.",
  alternates: { canonical: routes.terms },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" label="Terms of service" lead="The terms for using braininteracts.com and the Free Working-Style Snapshot.">
      <h2>1. Agreement</h2>
      <p>By using braininteracts.com or the Free Working-Style Snapshot, you agree to these terms. Paying customers sign a separate subscription agreement, which takes priority.</p>
      <h2>2. Free Working-Style Snapshot</h2>
      <p>
        The snapshot is for adults aged 18 or over. Results describe working-style tendencies based on your own answers. They are not a medical, psychological or
        clinical assessment, and must not be the sole basis for any hiring, promotion or dismissal decision.
      </p>
      <h2>3. Acceptable use</h2>
      <p>You must not misuse the site, attempt unauthorized access, scrape or resell our content or results, submit someone else&apos;s data without permission, or use the site to break any law.</p>
      <h2>4. Intellectual property</h2>
      <p>
        The website, the Corporate Brain archetype model, reports, text, designs and software belong to Brain Interacts or its licensors. You may download sample
        reports and whitepapers for internal use only.
      </p>
      <h2>5. Disclaimers and liability</h2>
      <p>
        The website and free snapshot are provided &quot;as is&quot;. To the extent the law allows, Brain Interacts is not liable for indirect or consequential losses,
        and our total liability for the free services is limited to ₹1,000.
      </p>
      <h2>6. Governing law</h2>
      <p>These terms are governed by the laws of India. Courts at {legal.city} have exclusive jurisdiction.</p>
      <h2>7. Contact</h2>
      <p>
        <a href={`mailto:${site.email}`} className="text-ink-link underline">{site.email}</a> · {site.phone}
      </p>
    </LegalPage>
  );
}
