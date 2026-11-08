"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { type EnquiryKey, enquiries, isEnquiryKey } from "@/lib/enquiries";
import { site } from "@/lib/site";
import { EnquiryForm } from "./forms/EnquiryForm";

type Open = { key: EnquiryKey; context: string };

/** Turns extra link details (e.g. ?plan=Leadership) into a short line sent with the enquiry. */
function contextFrom(params: URLSearchParams): string {
  return [...params.entries()]
    .filter(([k]) => k !== "enquiry")
    .map(([k, v]) => `${k}: ${v}`)
    .join(" · ");
}

/**
 * The enquiry pop-up. Any link to /contact?enquiry=…#enquiry opens it with the right title and
 * form instead of leaving the page. Without JavaScript those links still work: they land on the
 * same form on the Contact page.
 */
export function EnquiryDialog() {
  const ref = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();
  const [open, setOpen] = useState<Open | null>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as HTMLElement).closest("a");
      if (!link) return;
      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== "/contact" || url.hash !== "#enquiry") return;
      const key = url.searchParams.get("enquiry");
      // Capture phase + stopPropagation so the page link doesn't navigate first.
      e.preventDefault();
      e.stopPropagation();
      setOpen({ key: isEnquiryKey(key) ? key : "demo", context: contextFrom(url.searchParams) });
    }
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  useEffect(() => {
    if (open) ref.current?.showModal();
  }, [open]);

  // Close if the page changes underneath.
  useEffect(() => {
    ref.current?.close();
  }, [pathname]);

  const enquiry = open ? enquiries[open.key] : null;

  return (
    <dialog
      ref={ref}
      aria-labelledby="enquiry-dialog-title"
      onClose={() => setOpen(null)}
      onClick={(e) => e.target === ref.current && ref.current?.close()}
      className="m-auto max-h-[92dvh] w-[min(820px,calc(100vw-24px))] overflow-y-auto rounded-[20px] bg-navy p-0 text-white shadow-[0_24px_64px_rgba(10,22,40,0.45)] backdrop:bg-navy/60 backdrop:backdrop-blur-sm"
    >
      {open && enquiry && (
        <div className="p-5 md:px-7 md:py-6">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[13px] text-lime">{enquiry.eyebrow}</p>
              <h2 id="enquiry-dialog-title" className="mt-1 text-xl font-extrabold tracking-[-0.02em] md:text-[23px]">
                {enquiry.title}
              </h2>
              <p className="mt-1 text-[14px] text-on-navy">{enquiry.intro}</p>
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
          <EnquiryForm enquiryKey={open.key} tone="dark" idPrefix="dlg" context={open.context} />
          <p className="mt-3 text-center text-[13px] text-on-navy-muted">
            Prefer email?{" "}
            <a href={`mailto:${site.email}`} className="text-on-navy-soft underline">
              {site.email}
            </a>
          </p>
        </div>
      )}
    </dialog>
  );
}
