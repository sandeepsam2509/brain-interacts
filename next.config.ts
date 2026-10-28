import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

// Old addresses from the previous site, sent to their new pages so links and search rankings carry over.
const legacyRedirects: [string, string][] = [
  ["/services/psychometric-consulting", "/services/custom-assessment-systems"],
  ["/services/organizational-culture-assessment", "/services/corporate-culture-study"],
  ["/services/root-cause-analysis", "/services/root-cause-analytics"],
  ["/services/corporate-mental-health-workshops", "/services/corporate-culture-study"],
  ["/services", "/services/custom-assessment-systems"],
  ["/platforms", "/platforms/corporate-brain"],
  ["/how-it-works", "/platforms/corporate-brain"],
  ["/for/leadership", "/for-ceos"],
  ["/for/managers", "/platforms/corporate-brain"],
  ["/for/employees", "/platforms/corporate-brain"],
  ["/diagnostic", "/contact"],
  ["/demo", "/contact"],
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    return legacyRedirects.map(([source, destination]) => ({ source, destination, permanent: true }));
  },
};

export default nextConfig;
