import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Sections } from "@/components/Sections";
import { site } from "./site";
import type { PageContent } from "./types";

// Titles that already name the brand skip the "| Brain Interacts" template.
export function pageMetadata({ path, title, description }: Pick<PageContent, "path" | "title" | "description">): Metadata {
  const absolute = title.includes(site.name);
  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: { title: absolute ? title : `${title} | ${site.name}`, description, url: path, type: "website" },
  };
}

export function ContentPage({ page, children }: { page: PageContent; children?: React.ReactNode }) {
  return (
    <>
      <PageHero hero={page.hero} path={page.path} />
      <Sections sections={page.sections} />
      {children}
    </>
  );
}
