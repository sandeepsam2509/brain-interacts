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
  ["/platforms", "https://corporatebrain.braininteracts.com/"],
  ["/for/leadership", "/solutions/for-cxos"],
  ["/for/managers", "https://corporatebrain.braininteracts.com/"],
  ["/for/employees", "https://corporatebrain.braininteracts.com/"],
  ["/diagnostic", "/contact"],
  ["/demo", "/contact"],
  ["/resources/blog", "/resources"],
  ["/for-ceos", "/solutions/for-cxos"],
  ["/security", "/trust"],
  ["/terms", "/legal/terms-of-service"],
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    return [
      ...legacyRedirects.map(([source, destination]) => ({ source, destination, permanent: true })),
      // Decode has its own site.
      { source: "/platforms/gamified-assessments", destination: "https://decode.braininteracts.com/", permanent: false },
      // Corporate Brain has its own site.
      { source: "/platforms/corporate-brain", destination: "https://corporatebrain.braininteracts.com/", permanent: false },
      { source: "/corporate-brain", destination: "https://corporatebrain.braininteracts.com/", permanent: false },
      { source: "/decode", destination: "https://decode.braininteracts.com/", permanent: false },
    ];
  },
};

export default nextConfig;
