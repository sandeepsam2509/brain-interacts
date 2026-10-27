import { Motif } from "@/components/BrandMark";
import { ButtonLink, Container, Eyebrow, TextLink } from "@/components/ui";

const quickLinks = [
  { label: "Platforms", href: "/platforms" },
  { label: "Services", href: "/services" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <Motif className="-right-24 top-1/2 hidden h-[360px] w-[540px] -translate-y-1/2 lg:block" />
      <Container className="relative py-28 md:py-40">
        <Eyebrow className="mb-5">Error 404</Eyebrow>
        <h1 className="text-h1-sm font-semibold leading-[1.08] tracking-tight md:text-h1-md">We couldn’t find that page.</h1>
        <p className="mt-6 max-w-xl text-lead text-secondary">The link may be out of date, or the page may have moved.</p>
        <ButtonLink label="Back to Homepage" href="/" className="mt-10" />
        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
          {quickLinks.map((l) => (
            <TextLink key={l.href} {...l} />
          ))}
        </div>
      </Container>
    </section>
  );
}
