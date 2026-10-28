import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Pages that are live. Each later round adds its pages here.
const paths = ["/"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({ url: `${site.url}${path}`, changeFrequency: "monthly", priority: path === "/" ? 1 : 0.7 }));
}
