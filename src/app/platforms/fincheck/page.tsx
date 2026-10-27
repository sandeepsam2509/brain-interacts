import { FormAside, FormPanel } from "@/components/FormPanel";
import { Sections } from "@/components/Sections";
import { PageHero } from "@/components/PageHero";
import { fincheckWaitlist } from "@/content/conversion";
import { fincheckAfterForm, fincheckPage as page } from "@/content/platforms";
import { pageMetadata } from "@/lib/page";

export const metadata = pageMetadata(page);

export default function FinCheckPage() {
  return (
    <>
      <PageHero hero={page.hero} path={page.path} />
      <Sections sections={page.sections} />
      <FormPanel form="fincheck" id="waitlist" title="Join the FinCheck waitlist">
        <FormAside {...fincheckWaitlist} />
      </FormPanel>
      <Sections sections={fincheckAfterForm} />
    </>
  );
}
