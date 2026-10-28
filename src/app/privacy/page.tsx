import type { Metadata } from "next";
import { legal, LegalPage, LegalTable } from "@/components/LegalPage";
import { routes, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Brain Interacts collects and protects personal data, in line with India's Digital Personal Data Protection Act, 2023.",
  alternates: { canonical: routes.privacy },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" label="Privacy policy" lead="How Brain Interacts collects and protects personal data, in line with India's Digital Personal Data Protection Act, 2023.">
      <h2>1. Who we are</h2>
      <p>
        This website (braininteracts.com) and the Corporate Brain, FinCheck and Gamified Assessments products are operated by {legal.entity}, registered at{" "}
        {legal.address} (&quot;Brain Interacts&quot;). For personal data collected through this website, we are the Data Fiduciary under India&apos;s Digital
        Personal Data Protection Act, 2023 (&quot;DPDP Act&quot;).
      </p>

      <h2>2. Data we collect and why</h2>
      <LegalTable
        headings={["Data", "Collected when", "Purpose"]}
        rows={[
          ["Name, work email, company, role, phone", "You submit a contact, demo or download form", "To respond, arrange a demo and send what you asked for"],
          ["Work email and your 20 working-style answers", "You take the Free Working-Style Snapshot", "To calculate your profile and email your report"],
          ["CV, LinkedIn URL, application answers", "You apply for a job", "To assess your application"],
          ["Pages viewed, clicks, device and browser", "You browse the site and accept analytics cookies", "To improve the website"],
        ]}
      />
      <p>We collect only what each purpose needs, with your consent. Your working-style answers are not used to make any automated decision about you.</p>

      <h2>3. Data inside Corporate Brain</h2>
      <p>
        When an organization uses Corporate Brain for its employees or candidates, that organization is the Data Fiduciary and we process the data only on its
        instructions, as its Data Processor. Each customer&apos;s data is kept in a separate database.
      </p>

      <h2>4. Consent and withdrawing it</h2>
      <p>
        You can withdraw consent at any time, as easily as you gave it, by emailing <a href={`mailto:${legal.privacyEmail}`} className="text-ink-link underline">{legal.privacyEmail}</a> or using the
        unsubscribe link in any email.
      </p>

      <h2>5. Who we share data with</h2>
      <p>We do not sell personal data. We share it only with service providers under contracts that limit use to our instructions:</p>
      <ul>
        <li>Vercel (hosting and analytics)</li>
        <li>Microsoft Clarity (behavior analytics, only if you accept cookies)</li>
        <li>Sanity (content management)</li>
        <li>n8n (workflow automation)</li>
        <li>Resend (sending emails such as your snapshot report)</li>
      </ul>

      <h2>6. How long we keep data</h2>
      <ul>
        <li>Enquiries and demo requests: up to 24 months after our last contact</li>
        <li>Snapshot answers and report: up to 12 months, or sooner if you ask</li>
        <li>Job applications: up to 12 months after the role is filled</li>
      </ul>
      <p>We keep logs of access to personal data for at least one year, as the DPDP Rules require.</p>

      <h2>7. Your rights</h2>
      <p>
        Under the DPDP Act you can ask what data we hold and how we use it; ask us to correct, complete, update or erase it; withdraw consent; nominate someone to
        exercise your rights; and raise a grievance with us and then with the Data Protection Board of India. We respond within 90 days.
      </p>

      <h2>8. Security</h2>
      <p>
        We use reasonable safeguards, including separate customer databases, role-based access and encrypted connections. If a breach affects you, we will inform
        you without delay and report it to the Data Protection Board as the law requires.
      </p>

      <h2>9. Children</h2>
      <p>Our services are for working adults. We do not knowingly collect data from anyone under 18.</p>

      <h2>10. Grievance officer</h2>
      <p>
        {legal.grievanceOfficer}, Grievance Officer, {legal.entity} · <a href={`mailto:${legal.privacyEmail}`} className="text-ink-link underline">{legal.privacyEmail}</a> · {site.phone}
      </p>
    </LegalPage>
  );
}
