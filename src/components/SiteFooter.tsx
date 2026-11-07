import Link from "next/link";
import { footerColumns, legalLinks, routes, site } from "@/lib/site";
import { BrandMark, Wordmark } from "./BrandMark";
import { CookieSettingsButton } from "./CookieConsent";

export function SiteFooter() {
  return (
    <footer className="border-t border-navy-rule bg-navy text-on-navy-muted">
      <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-x-6 gap-y-10 px-6 pt-14 pb-12 md:grid-cols-3 md:pt-[72px] lg:grid-cols-6 lg:gap-10">
        <div className="col-span-2 md:col-span-3 lg:col-span-2">
          <Link href={routes.home} aria-label={`${site.name} home`} className="flex items-center gap-2.5 no-underline">
            <BrandMark size={36} />
            <Wordmark height={20} />
          </Link>
          <p className="mt-[18px] max-w-[340px] text-[15px] leading-[1.7]">
            Team analytics, behavioral analysis and workforce analytics for organizations that build on evidence.
          </p>
          <div className="mt-5 flex flex-col gap-2 text-[15px]">
            <a href={`mailto:${site.email}`} className="text-[#E8EDF5] no-underline hover:underline">
              {site.email}
            </a>
            <a href={site.phoneHref} className="text-[#E8EDF5] no-underline hover:underline">
              {site.phone}
            </a>
          </div>
        </div>

        {footerColumns.map((col) => (
          <nav key={col.label} aria-label={col.label} className="flex flex-col gap-3 text-[15px]">
            <strong className="mb-1 text-white">{col.label}</strong>
            {col.items.map((item) => (
              <Link key={item.href} href={item.href} className="text-on-navy-muted no-underline hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
        ))}
      </div>

      <div className="border-t border-navy-rule">
        <div className="mx-auto flex max-w-[1280px] flex-wrap justify-between gap-4 px-6 py-6 text-[13px]">
          <span>© {new Date().getFullYear()} Brain Interacts. All rights reserved.</span>
          <span className="flex flex-wrap gap-6">
            {legalLinks.map((item) => (
              <Link key={item.href} href={item.href} className="text-on-navy-muted no-underline hover:text-white">
                {item.label}
              </Link>
            ))}
            <CookieSettingsButton className="cursor-pointer text-on-navy-muted hover:text-white" />
            {site.linkedIn && (
              <a href={site.linkedIn} className="text-on-navy-muted no-underline hover:text-white">
                LinkedIn
              </a>
            )}
          </span>
        </div>
      </div>
      {/* Oversized sign-off below the footer, edge to edge. */}
      <div aria-hidden="true" className="mx-auto max-w-[1440px] overflow-hidden px-6 pt-4 pb-8 md:pb-12">
        <div className="flex items-center gap-[2.5%] opacity-90 select-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/brain-interacts-mark.svg" alt="" className="h-auto w-[13%] shrink-0" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/brain-interacts-wordmark.svg" alt="" className="h-auto w-[84.5%] shrink-0" />
        </div>
      </div>
    </footer>
  );
}
