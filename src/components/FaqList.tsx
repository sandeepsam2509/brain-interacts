import type { Faq } from "@/lib/types";
import { JsonLd } from "./JsonLd";

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <>
      <div className="divide-y divide-line border-y border-line">
        {items.map((item, i) => (
          <details key={item.q} className="group" open={i === 0}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-h4 font-semibold transition-colors hover:text-green [&::-webkit-details-marker]:hidden">
              {item.q}
              <span
                aria-hidden="true"
                className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line transition-colors group-open:border-green/50"
              >
                <span className="absolute h-0.5 w-3 rounded bg-current" />
                <span className="absolute h-3 w-0.5 rounded bg-current transition-transform group-open:rotate-90 group-open:opacity-0" />
              </span>
            </summary>
            <p className="max-w-3xl pb-7 pr-14 text-secondary">{item.a}</p>
          </details>
        ))}
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />
    </>
  );
}
