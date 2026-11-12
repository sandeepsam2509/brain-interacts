"use client";

import { openWhitepaper } from "@/components/WhitepaperLibrary";

/** Opens the existing whitepaper download form for one paper. */
export function GetPdf({ slug, children, className }: { slug: string; children: React.ReactNode; className?: string }) {
  return (
    <button
      type="button"
      onClick={() => openWhitepaper(slug)}
      className={className ?? "rounded-lg bg-brand-red px-5 py-3 text-[15px] font-semibold text-white hover:bg-brand-red-dark"}
    >
      {children}
    </button>
  );
}

export function CopyCitation({ text }: { text: string }) {
  return (
    <button
      type="button"
      onClick={(e) => {
        const b = e.currentTarget;
        navigator.clipboard?.writeText(text).then(() => {
          b.textContent = "Copied";
        });
      }}
      className="mt-3 rounded-md border border-rule-strong bg-white px-3 py-1.5 text-[13px] font-semibold text-ink hover:border-ink"
    >
      Copy citation
    </button>
  );
}
