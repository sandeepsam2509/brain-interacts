import type { Metadata } from "next";
import { CookieSettingsButton } from "@/components/CookieConsent";
import { LegalPage, LegalTable } from "@/components/LegalPage";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Notice",
  description: "Which cookies and analytics braininteracts.com uses, and the choices you have.",
  alternates: { canonical: routes.cookies },
};

export default function CookiesPage() {
  return (
    <LegalPage title="Cookie Notice" label="Cookie notice" lead="Which cookies and analytics we use, and the choices you have.">
      <h2>What we use</h2>
      <LegalTable
        headings={["Tool", "What it does", "Needs your consent?"]}
        rows={[
          ["Essential site functions", "Remembers your cookie choice and keeps forms working", "No"],
          ["Vercel Web Analytics", "Counts page views, referrers, country, device and browser in aggregate. Uses no cookies and does not identify you.", "No"],
          ["Microsoft Clarity", "Records anonymized clicks, scrolling and navigation (heatmaps and session replays) with form fields masked. Cookies: _clck, _clsk, CLID, MUID, MR, SM, ANONCHK.", "Yes — only after you click Accept"],
        ]}
      />
      <h2>No advertising cookies</h2>
      <p>We do not use advertising or cross-site tracking cookies.</p>
      <h2>Your choices</h2>
      <p>
        Accept or decline Clarity in the banner, and change your mind anytime via Cookie settings in the footer. You can also block cookies in your browser; the site
        still works.
      </p>
      <p>
        <CookieSettingsButton className="rounded-lg bg-navy px-5 py-3 font-bold text-white" />
      </p>
    </LegalPage>
  );
}
