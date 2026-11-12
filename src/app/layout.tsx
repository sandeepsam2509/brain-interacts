import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { AssessmentBot } from "@/components/AssessmentBot";
import { CookieConsent } from "@/components/CookieConsent";
import { TurnstileHost } from "@/components/Turnstile";
import { EnquiryDialog } from "@/components/EnquiryDialog";
import { LogoIntro } from "@/components/LogoIntro";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/lib/site";
import "./globals.css";

// Fonts are bundled with the site so builds never depend on reaching Google Fonts.
const grotesk = localFont({
  src: "../fonts/space-grotesk-latin-wght-normal.woff2",
  variable: "--font-grotesk",
  weight: "300 700",
  display: "swap",
});

const inter = localFont({
  src: "../fonts/inter-latin-wght-normal.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s, ${site.name}` },
  description: site.description,
  openGraph: { type: "website", siteName: site.name, locale: "en_IN" },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#0A1628" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${grotesk.variable}`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:rounded focus:bg-white focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <EnquiryDialog />
        <AssessmentBot />
        <CookieConsent />
        <TurnstileHost />
        <LogoIntro />
        <ScrollReveal />
        {/* Cookieless page-view counts; switch on Web Analytics in the Vercel project. */}
        <Analytics />
      </body>
    </html>
  );
}
