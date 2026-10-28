import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Pages that are live. Each later round adds its pages here.
const paths = [
  "/",
  "/about",
  "/platforms/corporate-brain",
  "/platforms/fincheck",
  "/platforms/gamified-assessments",
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
  "/security",
  "/integrations",
  "/careers",
  "/for-ceos",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({ url: `${site.url}${path}`, changeFrequency: "monthly", priority: path === "/" ? 1 : 0.7 }));
}
