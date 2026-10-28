import type { Metadata } from "next";
import { PageHero } from "@/components/blocks";
import { ContactForm } from "@/components/forms/ContactForm";
import { DemoForm } from "@/components/forms/DemoForm";
import { ArrowLink, Eyebrow, H2, Section } from "@/components/ui";
import { routes, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Questions about a product, a consulting engagement or joining the team? Contact Brain Interacts or book a demo.",
  alternates: { canonical: routes.contact },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        trail={[{ label: "Home", href: routes.home }, { label: "Contact" }]}
        label={{ icon: "people", text: "Contact us", color: "lime" }}
        title="Let's talk about your people."
        lead="Questions about a product, a consulting engagement or joining the team — tell us what you need and the right person will get back to you."
      />

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
              <div className="border-t border-rule pt-6">
                <dt className="font-bold">Want to see it live?</dt>
                <dd className="m-0 mt-1 text-ink-body">
                  Book a walkthrough with our team.{" "}
                  <ArrowLink href="#demo" tone="light">
                    Get a demo
                  </ArrowLink>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </Section>

      <Section tone="dark" id="demo" className="scroll-mt-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <Eyebrow icon="spark" color="lime">
              Get a demo
            </Eyebrow>
            <H2>See Brain Interacts in action</H2>
            <p className="mt-5 text-[17px] leading-[1.75] text-on-navy">
              Tell us a little about your team and we&apos;ll set up a walkthrough built around your org structure.
            </p>
          </div>
          <DemoForm tone="dark" idPrefix="pg" />
        </div>
      </Section>
    </>
  );
}
