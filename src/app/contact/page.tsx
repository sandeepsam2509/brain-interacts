import { FormPanel } from "@/components/FormPanel";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { OfferingCard } from "@/components/Sections";
import { Container, Eyebrow } from "@/components/ui";
import { contactPage as page, contactRoutes } from "@/content/conversion";
import { pageMetadata } from "@/lib/page";
import { site } from "@/lib/site";

export const metadata = pageMetadata(page);

export default function ContactPage() {
  return (
    <>
      <PageHero hero={page.hero} path={page.path} />
      <section className="border-t border-line/60 py-20 md:py-24">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contactRoutes.map((card, i) => (
              <Reveal key={card.title} delay={i * 70}>
                <OfferingCard card={card} index={i} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <FormPanel form="contact" title="Send us a message">
        <Eyebrow className="mb-4">Office</Eyebrow>
        <h2 className="text-balance text-h2-sm font-semibold leading-[1.15] tracking-tight md:text-h2">Speak to our team</h2>
        <dl className="mt-10 space-y-6">
          <div>
            <dt className="text-small text-muted">Email</dt>
            <dd className="mt-1">
              <a href={`mailto:${site.email}`} className="text-aqua hover:underline">
                {site.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-small text-muted">Phone</dt>
            <dd className="mt-1">
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-aqua">
                {site.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-small text-muted">Address</dt>
            <dd className="mt-1 max-w-sm text-secondary">{site.address}</dd>
          </div>
        </dl>
      </FormPanel>
    </>
  );
}
