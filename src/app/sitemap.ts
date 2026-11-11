import { legalDocs } from "@/content/legal";
import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Pages that are live. Each later round adds its pages here.
const paths = [
  "/",
  "/about",
  "/brand",
  "/industries",
  "/platforms/fincheck",
  "/services/custom-assessment-systems",
  "/services/corporate-culture-study",
  "/services/root-cause-analytics",
  "/science",
  "/science/validity",
  "/science/frameworks",
  "/science/methodology",
  "/resources",
  "/resources/blog",
  "/customer-stories",
  "/pricing",
  "/legal",
  "/integrations",
  "/careers",
  "/for-ceos",
  "/contact",
  "/faq",
  "/privacy",
  "/cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [...paths, ...legalDocs.map((d) => `/legal/${d.slug}`)].map((path) => ({ url: `${site.url}${path}`, changeFrequency: "monthly", priority: path === "/" ? 1 : 0.7 }));
}
