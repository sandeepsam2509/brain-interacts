import type { MetadataRoute } from "next";
import { articles } from "@/content/articles";
import { site } from "@/lib/site";

const paths = [
  "/",
  "/platforms",
  "/platforms/corporate-brain",
  "/platforms/gamified-assessments",
  "/platforms/fincheck",
  "/services",
  "/services/root-cause-analysis",
  "/services/psychometric-consulting",
  "/services/organizational-culture-assessment",
  "/services/corporate-mental-health-workshops",
  "/for/leadership",
  "/for/managers",
  "/for/employees",
  "/how-it-works",
  "/pricing",
  "/security",
  "/about",
  "/resources",
  "/demo",
  "/diagnostic",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [...paths, ...articles.map((a) => `/resources/${a.slug}`)].map((p) => ({
    url: `${site.url}${p === "/" ? "" : p}`,
    changeFrequency: p.startsWith("/resources/") ? "yearly" : "monthly",
    priority: p === "/" ? 1 : p.split("/").length > 2 ? 0.6 : 0.8,
  }));
}
