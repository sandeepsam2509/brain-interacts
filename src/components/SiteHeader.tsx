"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { type MainNavItem, mainNav, routes, site } from "@/lib/site";
import { BrandMark, Wordmark } from "./BrandMark";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg width="10" height="10" viewBox="0 0 12 12" aria-hidden="true" className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
      <path d="M2.5 4.5L6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menu, setMenu] = useState<string | null>(null); // open desktop dropdown
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);

  // Close everything when the page changes.
  useEffect(() => {
    setMobileOpen(false);
    setMenu(null);
  }, [pathname]);

  useEffect(() => {
    // Once the page scrolls, the header slims down and the wordmark folds away behind the mark.
    const onScroll = () => setScrolled(window.scrollY > 8);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenu(null);
        setMobileOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setMenu(null);
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

  // Stop the page scrolling behind the open phone menu.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    document.body.classList.toggle("menu-open", mobileOpen); // hides the assessment launcher under the menu
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("menu-open");
    };
  }, [mobileOpen]);

  const compact = scrolled && !mobileOpen;
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const groupActive = (item: MainNavItem) => (item.children ? item.children.some((c) => isActive(c.href)) : isActive(item.href));

  // Small delay before closing so the pointer can travel from the button to the panel.
  const openMenu = (label: string) => {
    window.clearTimeout(closeTimer.current);
    setMenu(label);
  };
  const closeSoon = () => {
    closeTimer.current = window.setTimeout(() => setMenu(null), 120);
  };

  return (
    <header className={`sticky top-0 z-50 border-b border-navy-rule transition-colors duration-300 ${compact ? "bg-navy/90 backdrop-blur-md" : "bg-navy"}`}>
      <div className={`mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 transition-[padding] duration-300 md:px-6 ${compact ? "py-2 md:py-2.5" : "py-3 md:py-[18px]"}`}>
        <Link href={routes.home} aria-label={`${site.name} home`} className="group flex items-center no-underline">
          <BrandMark size={32} className="logo-beat" />
          <span className={`overflow-hidden transition-all duration-500 ease-out motion-reduce:transition-none ${compact ? "ml-0 max-w-0 opacity-0" : "ml-2.5 max-w-[160px] opacity-100"}`}>
            <Wordmark height={18} />
          </span>
        </Link>

        <nav ref={navRef} aria-label="Main" className="hidden xl:block">
          <ul className="m-0 flex list-none items-center gap-0.5 p-0 text-[15px] font-semibold whitespace-nowrap">
            {mainNav.map((item) => {
              const active = groupActive(item);
              if (!item.children) {
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={`block rounded-lg px-2.5 py-2 no-underline transition-colors hover:text-white ${active ? "text-white" : "text-on-navy-soft"}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }
              const open = menu === item.label;
              const panelId = `menu-${item.label.toLowerCase()}`;
              return (
                <li key={item.label} className="relative" onMouseEnter={() => openMenu(item.label)} onMouseLeave={closeSoon}>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => (open ? setMenu(null) : openMenu(item.label))}
                    className={`flex items-center gap-1.5 rounded-lg px-2.5 py-2 transition-colors hover:text-white ${active || open ? "text-white" : "text-on-navy-soft"}`}
                  >
                    {item.label}
                    <Chevron open={open} />
                  </button>
                  <div
                    id={panelId}
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 motion-reduce:transition-none ${
                      open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
                    }`}
                  >
                    <ul className="m-0 w-[340px] list-none rounded-2xl border border-navy-line bg-navy-raised p-2 shadow-[0_24px_48px_rgba(0,0,0,0.4)]">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            aria-current={pathname === child.href ? "page" : undefined}
                            className={`block rounded-xl px-4 py-3 no-underline transition-colors hover:bg-navy ${pathname === child.href ? "bg-navy" : ""}`}
                          >
                            <span className="flex items-center gap-2 text-[15px] font-bold text-white">
                              {child.label}
                              {child.badge && <span className="rounded-full bg-sky/15 px-2 py-0.5 text-[11px] font-semibold text-sky">{child.badge}</span>}
                            </span>
                            {child.description && <span className="mt-0.5 block text-[13px] font-medium text-on-navy-muted">{child.description}</span>}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2.5">
          <a href={site.signIn} className="hidden px-2 py-3 text-[15px] font-semibold whitespace-nowrap text-white no-underline xl:inline-block">
            Sign in
          </a>
          <Link href={routes.demo} className="rounded-lg bg-lime px-3.5 py-2.5 text-[15px] font-bold whitespace-nowrap text-navy no-underline hover:bg-[#c7ea72] md:px-5 md:py-3">
            Get a demo
          </Link>
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-navy-line text-white xl:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              {mobileOpen ? <path d="M5 5l10 10M15 5L5 15" /> : <path d="M3 5h14M3 10h14M3 15h14" />}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav id="mobile-menu" aria-label="Main" className="h-[calc(100dvh-69px)] overflow-y-auto border-t border-navy-rule bg-navy px-4 pb-10 xl:hidden">
          <ul className="m-0 list-none p-0">
            {mainNav.map((item) => {
              if (!item.children) {
                return (
                  <li key={item.label} className="border-b border-navy-rule">
                    <Link href={item.href} className="block py-4 text-[17px] font-semibold text-white no-underline">
                      {item.label}
                    </Link>
                  </li>
                );
              }
              const open = mobileSection === item.label;
              return (
                <li key={item.label} className="border-b border-navy-rule">
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setMobileSection(open ? null : item.label)}
                    className="flex w-full items-center justify-between py-4 text-left text-[17px] font-semibold text-white"
                  >
                    {item.label}
                    <Chevron open={open} />
                  </button>
                  {open && (
                    <ul className="m-0 mb-3 list-none border-l border-navy-line p-0 pl-4">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link href={child.href} className="block py-2.5 text-[16px] text-on-navy-soft no-underline">
                            {child.label}
                            {child.badge && <span className="ml-2 text-[13px] text-sky">{child.badge}</span>}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
          <a href={site.signIn} className="mt-4 block py-2 font-semibold text-on-navy-soft no-underline">
            Sign in
          </a>
        </nav>
      )}
    </header>
  );
}
