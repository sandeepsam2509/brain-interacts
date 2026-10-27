import { FormPanel } from "@/components/FormPanel";
import { PageHero } from "@/components/PageHero";
import { Eyebrow, TextLink } from "@/components/ui";
import { diagnosticPage as page } from "@/content/conversion";
import { pageMetadata } from "@/lib/page";

export const metadata = pageMetadata(page);

export default function DiagnosticPage() {
  return (
    <>
      <PageHero hero={page.hero} path={page.path} />
      <FormPanel form="diagnostic" title="Request a diagnostic call">
        <Eyebrow className="mb-4">How it starts</Eyebrow>
        <h2 className="text-balance text-h2-sm font-semibold leading-[1.15] tracking-tight md:text-h2">
          Three steps to a scoped proposal
        </h2>
        <ol className="mt-10 space-y-8">
          {page.steps.map((step, i) => (
            <li key={step.title} className="flex gap-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-green/40 text-small font-semibold text-green">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-h4 font-semibold">{step.title}</h3>
                <p className="mt-1 text-secondary">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <TextLink {...page.link} />
        </div>
      </FormPanel>
    </>
  );
}
