import { FormAside, FormPanel } from "@/components/FormPanel";
import { PageHero } from "@/components/PageHero";
import { TextLink } from "@/components/ui";
import { demoPage as page } from "@/content/conversion";
import { pageMetadata } from "@/lib/page";

export const metadata = pageMetadata(page);

export default function DemoPage() {
  return (
    <>
      <PageHero hero={page.hero} path={page.path} />
      <FormPanel form="demo" title="Book your walkthrough">
        <FormAside {...page.aside} />
        <div className="mt-10">
          <TextLink {...page.aside.link} />
        </div>
      </FormPanel>
    </>
  );
}
