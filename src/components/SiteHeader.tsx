"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navGroups, navLinks, site } from "@/lib/site";
import { BrandMark } from "./BrandMark";
import { ButtonLink, ChevronIcon } from "./ui";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Close menus on navigation.
  useEffect(() => {
    setOpen(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setMobileOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(null);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || mobileOpen ? "border-line bg-navy-900/90 backdrop-blur-md" : "border-transparent bg-navy-900"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-green focus:px-4 focus:py-2 focus:text-navy-900"
      >
        Skip to content
      </a>
      <div className={`mx-auto flex max-w-[1440px] transition-[height] duration-300 ${scrolled && !mobileOpen ? "h-[60px]" : "h-[72px]"} items-center justify-between gap-6 px-5 md:px-8 lg:px-10`}>
        <Link href="/" className="group flex shrink-0 items-center" aria-label={`${site.name} home`}>
          <BrandMark size={30} className="logo-beat" />
          {/* The wordmark folds away once the page scrolls, leaving just the mark. */}
          <span
            className={`overflow-hidden transition-all duration-500 ease-out ${
              scrolled && !mobileOpen ? "ml-0 max-w-0 opacity-0" : "ml-2 max-w-[150px] opacity-100"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/brain-interacts-wordmark.svg" alt="" width={140} height={18} className="block h-[18px] w-[140px] max-w-none" />
          </span>
        </Link>

        <nav ref={navRef} aria-label="Main" className="hidden flex-1 lg:block">
          <ul className="flex items-center gap-1">
            {navGroups.map((group) => {
              const expanded = open === group.label;
              const active = group.items.some((i) => isActive(i.href));
              return (
                <li
                  key={group.label}
                  className="relative"
                  onMouseEnter={() => setOpen(group.label)}
                  onMouseLeave={() => setOpen(null)}
                >
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-haspopup="true"
                    onClick={() => setOpen(expanded ? null : group.label)}
                    className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-nav font-medium transition-colors hover:text-mist ${
                      active ? "text-mist" : "text-secondary"
                    }`}
                  >
                    {group.label}
                    <ChevronIcon className={`transition-transform ${expanded ? "rotate-180" : ""}`} />
                  </button>
                  <div
                    className={`absolute left-0 top-full pt-2 transition-all duration-200 ${
                      expanded ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
                    }`}
                  >
                    <ul className="w-[340px] rounded-2xl border border-line bg-navy-800 p-2 shadow-2xl shadow-black/40">
                      {group.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={`block rounded-xl px-4 py-3 transition-colors hover:bg-navy-700 ${
                              isActive(item.href) ? "bg-navy-700/60" : ""
                            }`}
                          >
                            <span className="flex items-center gap-2 text-small font-medium text-mist">
                              {item.label}
                              {item.soon && (
                                <span className="rounded-full bg-gold/15 px-2 py-0.5 text-[0.6875rem] font-semibold text-gold">Soon</span>
                              )}
                            </span>
                            {item.description && <span className="mt-0.5 block text-[0.8125rem] text-muted">{item.description}</span>}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`rounded-lg px-3 py-2 text-nav font-medium transition-colors hover:text-mist ${
                    isActive(link.href) ? "text-mist" : "text-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a href={site.signIn} className="text-nav font-medium text-secondary transition-colors hover:text-mist">
            Sign in
          </a>
          <ButtonLink label="Request a Demo" href="/demo" className="!py-2.5" />
        </div>

        <button
          type="button"
          className="-mr-2 flex h-11 w-11 items-center justify-center rounded-lg lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="relative block h-3.5 w-5">
            <span className={`absolute left-0 block h-0.5 w-5 rounded bg-mist transition-all ${mobileOpen ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-1.5 block h-0.5 w-5 rounded bg-mist transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 block h-0.5 w-5 rounded bg-mist transition-all ${mobileOpen ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!mobileOpen}
        className="h-[calc(100dvh-72px)] overflow-y-auto border-t border-line bg-navy-900 px-5 pb-10 pt-4 lg:hidden"
      >
        <nav aria-label="Mobile">
          {navGroups.map((group) => (
            <div key={group.label} className="border-b border-line py-4">
              <p className="mb-2 text-eyebrow font-medium uppercase tracking-[0.14em] text-muted">{group.label}</p>
              <ul>
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="block py-2 text-lead font-medium">
                      {item.label}
                      {item.soon && <span className="ml-2 text-small text-gold">Soon</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <ul className="border-b border-line py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="block py-2 text-lead font-medium">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-6 flex flex-col gap-3">
          <ButtonLink label="Request a Demo" href="/demo" />
          <ButtonLink label="Sign in to Corporate Brain" href={site.signIn} variant="secondary" />
        </div>
      </div>
    </header>
  );
}
