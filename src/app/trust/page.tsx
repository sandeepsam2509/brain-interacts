import type { Metadata } from "next";
import Link from "next/link";
import { Band, Closing, Head, Hero, accents } from "@/components/v3";
import { enquiryHref } from "@/lib/enquiries";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Trust & Security",
  description: "How Brain Interacts protects people data: consent first, shown by role, employees see their own results, and built for India's DPDP Act.",
  alternates: { canonical: routes.trust },
};

// Only commitments backed by our data processing terms or stated data policy appear here.
const standards = [
  ["DPDP Act aligned", "India's Digital Personal Data Protection Act, 2023"],
  ["Encryption in transit", "Data is encrypted as it moves between you and us"],
  ["Role-based access", "Access is limited by role, and logged"],
  ["Data processing agreement", "Clear terms for how we process your people data"],
];

const promises = [
  ["Your data stays yours", "Each organization sees only its own people data."],
  ["Shown by role", "Leadership, managers and employees each see only what their role needs."],
  ["Employees see their own results", "Nothing about a person is hidden from that person."],
  ["Consent first", "Work email and chat analysis only runs with consent."],
  ["30-day retention", "Email and chat data used for communication-style analysis is deleted after 30 days."],
  ["Correct or delete on request", "Ask and we fix or remove a person's data."],
];

const faq = [
  ["Where is our data stored?", "We share hosting and storage details as part of your security review. Ask us and we will send them."],
  ["Is data encrypted?", "Yes, in transit. Our data processing agreement sets out our security safeguards: encryption in transit, role-based access control, logging, backups and vulnerability management, reviewed regularly."],
  ["Who at Brain Interacts can see our data?", "Only the people who need it to run the service for you, with role-based access that is logged."],
  ["Can we get your security documents?", "Yes. Ask for them and we will share what your IT and legal teams need."],
];

export default function TrustPage() {
  return (
    <>
      <Hero
        crumbs={[{ label: "Home", href: routes.home }, { label: "Platform" }, { label: "Trust & security" }]}
        eyebrow="Trust & security"
        title="People data deserves enterprise-grade care."
        lead="Nothing is collected without consent, each role sees only what it needs, and employees always see their own results."
        actions={[
          { label: "Talk to us about security", href: enquiryHref("security") },
          { label: "Read the privacy policy", href: routes.privacy },
        ]}
      />

      <Band>
        <Head eyebrow="Standards" title="Built for Indian law first." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {standards.map(([t, d], i) => (
            <div key={t} className={`rounded-xl border-t-4 bg-cloud p-5 ${accents.bar[i % 3]}`}>
              <h3 className="text-[16px] font-semibold text-ink">{t}</h3>
              <p className="mt-1 text-[13.5px] text-ink-body">{d}</p>
            </div>
          ))}
        </div>
      </Band>

      <Band tone="navy">
        <Head dark eyebrow="How we handle your data" title="Six promises, in plain words." />
        <ol className="m-0 grid list-none gap-4 p-0 md:grid-cols-2 lg:grid-cols-3">
          {promises.map(([t, d], i) => (
            <li key={t} className="rounded-xl bg-white p-6 text-ink">
              <span className={`font-display text-[24px] font-bold ${accents.text[i % 3]}`}>0{i + 1}</span>
              <h3 className="mt-1 text-[17px] font-semibold">{t}</h3>
              <p className="mt-1 text-[14px] text-ink-body">{d}</p>
            </li>
          ))}
        </ol>
      </Band>

      <Band tone="cloud">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <Head eyebrow="Security FAQ" title="Questions your IT team will ask." />
            <div className="space-y-3">
              {faq.map(([q, a]) => (
                <details key={q} className="group rounded-xl bg-white p-5">
                  <summary className="cursor-pointer list-none font-semibold text-ink">
                    <span className="flex justify-between gap-4">
                      {q}
                      <span aria-hidden="true" className="text-ink-muted group-open:rotate-45">
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="mt-3 mb-0 text-[14.5px] text-ink-body">{a}</p>
                </details>
              ))}
            </div>
          </div>
          <aside className="self-start rounded-2xl bg-navy p-6 text-white lg:mt-20">
            <p className="m-0 text-[12px] font-semibold tracking-[0.1em] text-amber uppercase">Grievance Officer</p>
            <p className="mt-2 text-[14px] text-on-navy">Questions or complaints about how we handle personal data, under the DPDP Act:</p>
            <p className="mt-4 mb-0 font-display text-[20px] font-semibold">Srishti Sharma</p>
            <p className="m-0 text-[13px] text-on-navy-soft">Co-Founder · Grievance Officer</p>
            <Link href={routes.privacy} className="mt-4 inline-block text-[14px] font-semibold text-amber underline">
              Contact details in our privacy policy →
            </Link>
          </aside>
        </div>
      </Band>

      <Closing
        title="Need our security documents?"
        text="Tell us what your IT and legal teams need, and we will send it."
        actions={[
          { label: "Request security documents", href: enquiryHref("security-docs") },
          { label: "Contact us", href: routes.contact },
        ]}
      />
    </>
  );
}
