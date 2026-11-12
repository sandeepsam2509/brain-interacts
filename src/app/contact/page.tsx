/* eslint-disable @next/next/no-img-element -- static design image */
import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/forms/ContactForm";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { Crumbs, Eyebrow, wrap } from "@/components/resources/parts";
import { enquiries, isEnquiryKey } from "@/lib/enquiries";
import { routes, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Tell us about your organization and what you want to fix. We reply within one working day.",
  alternates: { canonical: routes.contact },
};

type Props = { searchParams: Promise<Record<string, string | string[] | undefined>> };

const tabs = [
  { key: "demo", label: "Get a demo" },
  { key: "quote", label: "Get a quote" },
  { key: "partnership", label: "Partner with us" },
  { key: "", label: "Something else" },
];

const others = [
  { title: "Take the free assessment", text: "Book a short call to scope what your teams need.", href: routes.snapshot, bar: "border-brand-red" },
  { title: "See pricing", text: "Seats for Corporate Brain, credits for Decode.", href: routes.pricing, bar: "border-amber" },
  { title: "Read customer stories", text: "Results from facilities, manufacturing and IT.", href: routes.stories, bar: "border-brand-green" },
];

export default async function ContactPage({ searchParams }: Props) {
  // Enquiry buttons open a pop-up; without JavaScript they land here with ?enquiry=… instead.
  const params = await searchParams;
  const one = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v) ?? "";
  const key = one(params.enquiry);
  const enquiryKey = isEnquiryKey(key) ? key : null;
  const enquiry = enquiryKey ? enquiries[enquiryKey] : null;
  const context = Object.entries(params)
    .filter(([k]) => k !== "enquiry" && k !== "email")
    .map(([k, v]) => `${k}: ${one(v)}`)
    .join(" · ");
  const activeTab = tabs.some((t) => t.key === key) ? key : enquiryKey ? "other" : "";

  return (
    <>
      <section className="bg-navy text-white">
        <div className={`${wrap} grid gap-10 py-12 md:py-16 lg:grid-cols-[1fr_1.15fr] lg:gap-14`}>
          <div>
            <Crumbs items={[{ label: "Home", href: routes.home }, { label: "Contact" }]} />
            <Eyebrow color="amber">Contact</Eyebrow>
            <h1 className="text-[clamp(36px,4.6vw,56px)] leading-[1.04] font-bold">Let&apos;s talk about your teams.</h1>
            <p className="mt-4 max-w-[480px] text-[17px] text-on-navy">Tell us a little about your organization and what you want to fix. We reply within one working day.</p>
            <dl className="m-0 mt-8 space-y-4">
              {[
                ["@", "Email", <a key="e" href={`mailto:${site.email}`} className="text-white no-underline hover:underline">{site.email}</a>],
                ["☎", "Phone", <a key="p" href={site.phoneHref} className="text-white no-underline hover:underline">{site.phone}</a>],
                ["?", "Data or privacy questions", <Link key="g" href={routes.privacy} className="text-white no-underline hover:underline">Grievance Officer: Srishti Sharma</Link>],
              ].map(([icon, label, value]) => (
                <div key={label as string} className="flex items-center gap-3">
                  <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-raised text-amber">
                    {icon}
                  </span>
                  <div>
                    <dt className="text-[12.5px] text-on-navy-soft">{label}</dt>
                    <dd className="m-0 font-semibold">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
            <img src="/site/631ec024.webp" alt="" className="mt-8 hidden aspect-[16/7] w-full rounded-xl object-cover lg:block" />
          </div>

          <div id="enquiry" className="scroll-mt-24 self-start rounded-2xl bg-white p-5 text-ink md:p-7">
            <nav aria-label="Type of enquiry" className="mb-6 flex flex-wrap gap-2">
              {tabs.map((t) => {
                const on = activeTab === t.key;
                return (
                  <Link
                    key={t.label}
                    href={t.key ? `${routes.contact}?enquiry=${t.key}#enquiry` : `${routes.contact}#enquiry`}
                    scroll={false}
                    aria-current={on ? "true" : undefined}
                    className={`rounded-full px-4 py-2 text-[13.5px] font-semibold no-underline ${on ? "bg-navy text-white" : "border border-rule-strong text-ink hover:border-ink"}`}
                  >
                    {t.label}
                  </Link>
                );
              })}
            </nav>
            {enquiry && enquiryKey ? (
              <>
                <h2 className="text-[20px] font-bold">{enquiry.title}</h2>
                <p className="mt-1 mb-5 text-[14px] text-ink-body">{enquiry.intro}</p>
                <EnquiryForm enquiryKey={enquiryKey} tone="light" idPrefix="pg" email={one(params.email)} context={context} preselect={one(params.interest) || "Corporate Brain"} />
              </>
            ) : (
              <ContactForm />
            )}
          </div>
        </div>
      </section>

      <section className="bg-cloud">
        <div className={`${wrap} py-14 md:py-20`}>
          <Eyebrow>Other ways in</Eyebrow>
          <h2 className="mb-8 text-[clamp(26px,3vw,38px)] font-bold text-ink">Not ready to talk yet?</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {others.map((o) => (
              <Link key={o.title} href={o.href} className={`block rounded-xl border-t-4 bg-white p-5 no-underline hover:shadow-md ${o.bar}`}>
                <span className="font-display block text-[17px] font-semibold text-ink">{o.title}</span>
                <span className="mt-1 block text-[14px] text-ink-body">{o.text}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
