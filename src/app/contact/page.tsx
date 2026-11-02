import type { Metadata } from "next";
import { PageHero } from "@/components/blocks";
import { ContactForm } from "@/components/forms/ContactForm";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { Eyebrow, H2, Section } from "@/components/ui";
import { enquiries, isEnquiryKey } from "@/lib/enquiries";
import { routes, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Questions about a product, a consulting engagement or joining the team? Contact Brain Interacts.",
  alternates: { canonical: routes.contact },
};

type Props = { searchParams: Promise<Record<string, string | string[] | undefined>> };

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

  return (
    <>
      <PageHero
        trail={[{ label: "Home", href: routes.home }, { label: "Contact" }]}
        label={{ icon: "people", text: "Contact us", color: "lime" }}
        title="Let's talk about your people."
        lead="Questions about a product, a consulting engagement or joining the team — tell us what you need and the right person will get back to you."
      />

      {enquiry && enquiryKey && (
        <Section tone="dark" id="enquiry" className="scroll-mt-20 border-t border-navy-rule">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <div>
              <Eyebrow icon="spark" color="lime">
                {enquiry.eyebrow}
              </Eyebrow>
              <H2>{enquiry.title}</H2>
              <p className="mt-5 text-[17px] leading-[1.75] text-on-navy">{enquiry.intro}</p>
            </div>
            <EnquiryForm
              enquiryKey={enquiryKey}
              tone="dark"
              idPrefix="pg"
              email={one(params.email)}
              context={context}
              preselect={one(params.interest) || "Corporate Brain"}
            />
          </div>
        </Section>
      )}

      <Section tone="light">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          <div>
            <h2 className="text-[28px] font-extrabold tracking-[-0.02em]">Send us a message</h2>
            <p className="mt-2 mb-8 text-ink-muted">Fields marked * are required.</p>
            <ContactForm />
          </div>
          <aside className="lg:border-l lg:border-rule lg:pl-12">
            <h2 className="text-xl font-extrabold">Other ways to reach us</h2>
            <dl className="m-0 mt-6 flex flex-col gap-6">
              <div>
                <dt className="font-mono text-xs text-ink-muted uppercase">Email</dt>
                <dd className="m-0 mt-1">
                  <a href={`mailto:${site.email}`} className="text-lg font-bold text-ink-link">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs text-ink-muted uppercase">Phone</dt>
                <dd className="m-0 mt-1">
                  <a href={site.phoneHref} className="text-lg font-bold text-ink-link">
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs text-ink-muted uppercase">Data protection</dt>
                <dd className="m-0 mt-1">
                  <a href="mailto:privacy@braininteracts.com" className="text-lg font-bold text-ink-link">
                    privacy@braininteracts.com
                  </a>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </Section>
    </>
  );
}
