import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  // Keep Vercel preview links out of search results; only the real domain is indexed.
  const isProduction = process.env.VERCEL_ENV === "production" && site.url.includes("braininteracts.com");
  return isProduction
    ? { rules: { userAgent: "*", allow: "/" }, sitemap: `${site.url}/sitemap.xml` }
    : { rules: { userAgent: "*", disallow: "/" } };
}
