"use client";

/* eslint-disable @next/next/no-img-element -- small menu images */
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { type MainNavItem, type MenuItem, mainNav, routes, site } from "@/lib/site";
import { BrandMark, Wordmark } from "./BrandMark";

const dotColor = { red: "bg-brand-red", amber: "bg-amber", green: "bg-brand-green" } as const;

function Chevron({ open }: { open: boolean }) {
  return (
    <svg width="10" height="10" viewBox="0 0 12 12" aria-hidden="true" className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
      <path d="M2.5 4.5L6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MenuLink({ item }: { item: MenuItem }) {
  return (
    <Link href={item.href} className="group block rounded-lg py-2 no-underline">
      <span className="flex items-center gap-2 text-[14px] font-semibold text-ink group-hover:underline">
        {item.dot && <span aria-hidden="true" className={`h-2 w-2 rounded-full ${dotColor[item.dot]}`} />}
        {item.label}
        {item.badge && <span className="rounded-full bg-green-tint px-2 py-0.5 text-[11px] font-semibold text-green-ink">{item.badge}</span>}
      </span>
      {item.description && <span className={`mt-0.5 block text-[12.5px] text-ink-muted ${item.dot ? "pl-4" : ""}`}>{item.description}</span>}
      {item.chips && (
        <span className="mt-2 flex flex-wrap gap-1.5 pl-4">
          {item.chips.map((c) => (
            <span key={c} className="rounded-full bg-cloud px-2.5 py-1 text-[11.5px] text-ink-body">
              {c}
            </span>
          ))}
        </span>
      )}
    </Link>
  );
}

function MegaPanel({ item }: { item: MainNavItem }) {
  const groups = item.groups ?? [];
  return (
    <div className="mx-auto grid max-w-[1280px] gap-8 px-6 py-7" style={{ gridTemplateColumns: `repeat(${groups.length}, minmax(0,1fr))${item.feature ? " 300px" : ""}` }}>
      {groups.map((g) => (
        <div key={g.title}>
          <p className="mb-2 text-[11.5px] font-semibold tracking-[0.08em] text-ink-muted uppercase">{g.title}</p>
          <ul className="m-0 list-none space-y-1 p-0">
            {g.items.map((it) => (
              <li key={it.label}>
                <MenuLink item={it} />
              </li>
            ))}
          </ul>
        </div>
      ))}
      {item.feature && (
        <Link href={item.feature.href} className="group block overflow-hidden rounded-xl bg-cloud no-underline">
          <img src={item.feature.image} alt="" className="h-[140px] w-full object-cover" />
          <span className="block p-4">
            <span aria-hidden="true" className={`mb-2 block h-[3px] w-7 rounded ${dotColor[item.feature.accent]}`} />
            <span className="block text-[14px] font-semibold text-ink group-hover:underline">{item.feature.title}</span>
            <span className="mt-1 block text-[12.5px] text-ink-muted">{item.feature.text}</span>
          </span>
        </Link>
      )}
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    setMobileOpen(false);
    setMenu(null);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenu(null);
        setMobileOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setMenu(null);
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
    document.body.classList.toggle("menu-open", mobileOpen);
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("menu-open");
    };
  }, [mobileOpen]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const openMenu = (label: string) => {
    window.clearTimeout(closeTimer.current);
    setMenu(label);
  };
  const closeSoon = () => {
    closeTimer.current = window.setTimeout(() => setMenu(null), 140);
  };
  const openItem = mainNav.find((i) => i.label === menu && i.groups);

  return (
    <header ref={headerRef} className={`sticky top-0 z-50 transition-colors duration-300 ${scrolled && !mobileOpen ? "bg-navy/95 backdrop-blur-md" : "bg-navy"}`} onMouseLeave={closeSoon}>
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-3 md:px-6 md:py-3.5">
        <Link href={routes.home} aria-label={`${site.name} home`} className="flex shrink-0 items-center no-underline">
          <BrandMark size={34} />
          <span className="ml-1">
            <Wordmark height={40} />
          </span>
        </Link>

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="m-0 flex list-none items-center gap-1 p-0 text-[14px] whitespace-nowrap">
            {mainNav.map((item) => {
              const open = menu === item.label;
              if (!item.groups) {
                return (
                  <li key={item.label} onMouseEnter={() => setMenu(null)}>
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={`block rounded-md px-3 py-2 no-underline hover:text-white ${isActive(item.href) ? "text-white" : "text-on-navy-soft"}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }
              return (
                <li key={item.label} onMouseEnter={() => openMenu(item.label)}>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls="mega-menu"
                    onClick={() => (open ? setMenu(null) : openMenu(item.label))}
                    className={`flex items-center gap-1.5 rounded-md px-3 py-2 hover:text-white ${open ? "bg-navy-raised text-white" : "text-on-navy-soft"}`}
                  >
                    {item.label}
                    <Chevron open={open} />
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2.5">
          <a href={site.signIn} className="hidden px-2 py-2 text-[14px] whitespace-nowrap text-on-navy-soft no-underline hover:text-white xl:inline-block">
            Sign in
          </a>
          <Link
            href={routes.snapshot}
            className="hidden rounded-lg border border-navy-line px-4 py-2.5 text-[14px] font-semibold whitespace-nowrap text-white no-underline hover:border-on-navy md:inline-block"
          >
            Free assessment
          </Link>
          <Link href={routes.demo} className="rounded-lg bg-brand-red px-4 py-2.5 text-[14px] font-semibold whitespace-nowrap text-white no-underline hover:bg-brand-red-dark">
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

      {/* Desktop mega menu */}
      <div
        id="mega-menu"
        onMouseEnter={() => window.clearTimeout(closeTimer.current)}
        className={`absolute inset-x-0 top-full hidden border-b border-rule bg-white shadow-[0_24px_48px_rgba(10,22,40,0.14)] transition-opacity duration-150 xl:block ${
          openItem ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {openItem && <MegaPanel item={openItem} />}
      </div>

      {/* Phone menu */}
      {mobileOpen && (
        <nav id="mobile-menu" aria-label="Main" className="flex h-[calc(100dvh-68px)] flex-col overflow-y-auto bg-white px-5 pb-6 xl:hidden">
          <ul className="m-0 list-none p-0">
            {mainNav.map((item) => {
              if (!item.groups) {
                return (
                  <li key={item.label} className="border-b border-rule">
                    <Link href={item.href} className="flex items-center justify-between py-4 text-[16px] font-semibold text-ink no-underline">
                      {item.label}
                      <span aria-hidden="true">→</span>
                    </Link>
                  </li>
                );
              }
              const open = mobileSection === item.label;
              return (
                <li key={item.label} className="border-b border-rule">
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setMobileSection(open ? null : item.label)}
                    className="flex w-full items-center justify-between py-4 text-left text-[16px] font-semibold text-ink"
                  >
                    {item.label}
                    <span aria-hidden="true" className="text-[20px] leading-none text-ink-muted">
                      {open ? "−" : "+"}
                    </span>
                  </button>
                  {open && (
                    <div className="pb-4">
                      {item.groups.map((g) => (
                        <div key={g.title} className="mb-3">
                          <p className="mb-1 text-[11.5px] font-semibold tracking-[0.08em] text-ink-muted uppercase">{g.title}</p>
                          <ul className="m-0 list-none p-0">
                            {g.items.map((it) => (
                              <li key={it.label}>
                                <Link href={it.href} className="flex items-center gap-2 py-2 text-[15px] text-ink-body no-underline">
                                  {it.dot && <span aria-hidden="true" className={`h-2 w-2 rounded-full ${dotColor[it.dot]}`} />}
                                  {it.label}
                                  {it.badge && <span className="text-[12px] text-green-ink">{it.badge}</span>}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="mt-auto space-y-3 pt-8">
            <Link href={routes.demo} className="block rounded-lg bg-brand-red py-3.5 text-center font-semibold text-white no-underline">
              Get a demo
            </Link>
            <Link href={routes.snapshot} className="block rounded-lg border border-ink py-3.5 text-center font-semibold text-ink no-underline">
              Free assessment
            </Link>
            <a href={site.signIn} className="block py-2 text-center text-ink underline">
              Sign in
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
