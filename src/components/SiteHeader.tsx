"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav, routes, site } from "@/lib/site";
import { BrandMark, Wordmark } from "./BrandMark";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Close the phone menu whenever the page changes.
  useEffect(() => setOpen(false), [pathname]);

  // Once the page scrolls, the header slims down and the wordmark folds away behind the mark.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const compact = scrolled && !open;

  return (
    <header className={`sticky top-0 z-50 border-b border-navy-rule transition-colors duration-300 ${compact ? "bg-navy/90 backdrop-blur-md" : "bg-navy"}`}>
      <div className={`mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 transition-[padding] duration-300 md:px-6 ${compact ? "py-2 md:py-2.5" : "py-3 md:py-[18px]"}`}>
        <Link href={routes.home} aria-label={`${site.name} home`} className="group flex items-center no-underline">
          <BrandMark size={32} className="logo-beat" />
          <span
            className={`overflow-hidden transition-all duration-500 ease-out motion-reduce:transition-none ${
              compact ? "ml-0 max-w-0 opacity-0" : "ml-2.5 max-w-[160px] opacity-100"
            }`}
          >
            <Wordmark height={18} />
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-6 text-[15px] font-semibold lg:flex">
          {mainNav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.label}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`no-underline transition-colors hover:text-white ${active ? "text-white" : "text-on-navy-soft"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href={site.signIn}
            className="hidden px-4 py-3 text-[15px] font-semibold text-white no-underline lg:inline-block"
          >
            Sign in
          </a>
          <Link
            href={routes.demo}
            className="rounded-lg bg-lime px-4 py-2.5 text-[15px] font-bold text-navy no-underline hover:bg-[#c7ea72] md:px-5 md:py-3"
          >
            Get a demo
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-navy-line text-white lg:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M5 5l10 10M15 5L5 15" /> : <path d="M3 5h14M3 10h14M3 15h14" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Main" className="border-t border-navy-rule bg-navy px-4 pb-6 lg:hidden">
          <ul className="m-0 list-none p-0">
            {mainNav.map((item) => (
              <li key={item.label} className="border-b border-navy-rule">
                <Link href={item.href} className="block py-4 text-[17px] font-semibold text-white no-underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a href={site.signIn} className="mt-4 block py-2 font-semibold text-on-navy-soft no-underline">
            Sign in
          </a>
        </nav>
      )}
    </header>
  );
}
