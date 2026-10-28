import { ButtonLink, Section } from "@/components/ui";
import { routes } from "@/lib/site";

export default function NotFound() {
  return (
    <Section tone="dark" innerClassName="py-24 md:py-32">
      <p className="font-mono text-[13px] text-lime">404</p>
      <h1 className="mt-3 text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-0.02em]">This page isn&apos;t here.</h1>
      <p className="mt-4 max-w-[520px] text-[17px] leading-[1.7] text-on-navy">
        It may have moved, or it is still being built. Head back to the home page or get in touch.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href={routes.home}>Back to home</ButtonLink>
        <ButtonLink href={routes.contact} variant="outlineDark">
          Contact us
        </ButtonLink>
      </div>
    </Section>
  );
}
