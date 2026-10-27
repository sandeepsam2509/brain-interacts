import type { NextConfig } from "next";
import { articles } from "./src/content/articles";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  // Product screenshots are still served from Framer's CDN until they are copied into /public.
  images: { remotePatterns: [new URL("https://framerusercontent.com/images/**")] },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  // Keep old Framer article URLs working where the slug was cleaned up.
  async redirects() {
    return articles
      .filter((a) => a.legacySlug)
      .map((a) => ({
        source: `/resources/${encodeURIComponent(a.legacySlug!)}`,
        destination: `/resources/${a.slug}`,
        permanent: true,
      }));
  },
};

export default nextConfig;
