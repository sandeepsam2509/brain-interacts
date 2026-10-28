"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { routes } from "@/lib/site";
import { DemoForm } from "./forms/DemoForm";

/**
 * "Get a demo" pop-up. Any link to /contact#demo opens it instead of leaving the page.
 * Without JavaScript those links still work and land on the demo form on the Contact page.
 */
export function DemoDialog() {
  const ref = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as HTMLElement).closest("a");
      if (!link) return;
      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== "/contact" || url.hash !== "#demo") return;
      if (url.search) return; // links that pass details (pricing, FinCheck) go to the Contact page form
      if (pathname === "/contact") return; // already on the page with the form
      // Capture phase + stopPropagation so the page link doesn't navigate first.
      e.preventDefault();
      e.stopPropagation();
      ref.current?.showModal();
    }
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [pathname]);

  // Close if the page changes underneath.
  useEffect(() => ref.current?.close(), [pathname]);

  return (
    <dialog
      ref={ref}
      aria-labelledby="demo-dialog-title"
      onClick={(e) => e.target === ref.current && ref.current?.close()}
      className="m-auto max-h-[92dvh] w-[min(640px,calc(100vw-24px))] overflow-y-auto rounded-[20px] bg-navy p-0 text-white shadow-[0_24px_64px_rgba(10,22,40,0.45)] backdrop:bg-navy/60 backdrop:backdrop-blur-sm"
    >
      <div className="p-6 md:p-8">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[13px] text-lime">Get a demo</p>
            <h2 id="demo-dialog-title" className="mt-2 text-2xl font-extrabold tracking-[-0.02em] md:text-[28px]">
              See Brain Interacts in action
            </h2>
            <p className="mt-2 text-on-navy">Tell us a little about your team and we&apos;ll set up a walkthrough.</p>
          </div>
          <button
            type="button"
            aria-label="Close"
            onClick={() => ref.current?.close()}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-navy-line text-white"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <DemoForm tone="dark" idPrefix="dlg" />
        <p className="mt-4 text-center text-sm text-on-navy-muted">
          Prefer email? <a href={`mailto:support@braininteracts.com`} className="text-on-navy-soft underline">support@braininteracts.com</a> ·{" "}
          <a href={routes.contact} className="text-on-navy-soft underline">Contact page</a>
        </p>
      </div>
    </dialog>
  );
}
