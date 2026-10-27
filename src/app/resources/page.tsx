import { EnquiryForm } from "@/components/EnquiryForm";
import { PageHero } from "@/components/PageHero";
import { ResourceList } from "@/components/ResourceList";
import { Container, Eyebrow } from "@/components/ui";
import { pageMetadata } from "@/lib/page";

const page = {
  path: "/resources",
  title: "Psychometric Assessment & People Analytics Guides",
  description:
    "Evidence-based guides on psychometric assessment, gamified testing, culture and people analytics for leaders and HR teams.",
  hero: {
    crumbs: [{ label: "Home", href: "/" }, { label: "Resources" }],
    eyebrow: "Resources",
    title: "Resources: guides to psychometric assessment and people analytics",
    lead: "Practical, evidence-based guides for leaders and HR teams who want to make people decisions on data.",
  },
};

export const metadata = pageMetadata(page);

export default function ResourcesPage() {
  return (
    <>
      <PageHero hero={page.hero} path={page.path} />
      <section className="border-t border-line/60 py-20 md:py-28">
        <Container>
          <ResourceList />
        </Container>
      </section>
      <section className="border-t border-line/60 bg-navy-800/30 py-20 md:py-24">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow className="mb-4">Newsletter</Eyebrow>
            <h2 className="text-h2-sm font-semibold tracking-tight md:text-h2">One evidence-based guide a month</h2>
            <p className="mt-4 text-lead text-secondary">
              Perspectives on behavioral science, people analytics and better organizational decisions.
            </p>
          </div>
          <EnquiryForm id="newsletter" compact />
        </Container>
      </section>
    </>
  );
}
