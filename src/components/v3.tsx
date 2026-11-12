/* eslint-disable @next/next/no-img-element -- static design images */
// Shared building blocks for the v3 page designs.
import Link from "next/link";
import { Crumbs, Eyebrow, wrap } from "@/components/resources/parts";

export { Crumbs, Eyebrow, wrap };

export const accents = {
  bar: ["border-brand-red", "border-amber", "border-brand-green"],
  text: ["text-brand-red", "text-gold-ink", "text-green-ink"],
  bg: ["bg-brand-red", "bg-amber", "bg-brand-green"],
};

export const btn = {
  red: "inline-flex rounded-lg bg-brand-red px-5 py-3 text-[15px] font-semibold text-white no-underline hover:bg-brand-red-dark",
  ghostDark: "inline-flex rounded-lg border border-navy-line px-5 py-3 text-[15px] font-semibold text-white no-underline hover:border-on-navy",
  ghost: "inline-flex rounded-lg border border-ink px-5 py-3 text-[15px] font-semibold text-ink no-underline hover:bg-cloud",
};

type Act = { label: string; href: string };

export function Actions({ items, dark = true }: { items: Act[]; dark?: boolean }) {
  return (
    <div className="mt-7 flex flex-wrap gap-3">
      {items.map((a, i) => {
        const cls = i === 0 ? btn.red : dark ? btn.ghostDark : btn.ghost;
        return a.href.startsWith("http") ? (
          <a key={a.label} href={a.href} className={cls}>
            {a.label}
          </a>
        ) : (
          <Link key={a.label} href={a.href} className={cls}>
            {a.label}
          </Link>
        );
      })}
    </div>
  );
}

export function Hero({
  crumbs,
  eyebrow,
  title,
  lead,
  actions,
  side,
}: {
  crumbs: { label: string; href?: string }[];
  eyebrow: string;
  title: React.ReactNode;
  lead: string;
  actions?: Act[];
  side?: React.ReactNode;
}) {
  return (
    <section className="bg-navy text-white">
      <div className={`${wrap} grid items-center gap-10 py-12 md:py-16 ${side ? "lg:grid-cols-[1.1fr_1fr]" : ""}`}>
        <div>
          <Crumbs items={crumbs} />
          <Eyebrow color="amber">{eyebrow}</Eyebrow>
          <h1 className="max-w-[760px] text-[clamp(34px,4.6vw,56px)] leading-[1.05] font-bold">{title}</h1>
          <p className="mt-4 max-w-[580px] text-[17px] leading-[1.6] text-on-navy">{lead}</p>
          {actions && <Actions items={actions} />}
        </div>
        {side}
      </div>
    </section>
  );
}

export function Head({ eyebrow, title, color, dark, lead }: { eyebrow: string; title: string; color?: "red" | "amber" | "green"; dark?: boolean; lead?: string }) {
  return (
    <div className="mb-8">
      <Eyebrow color={color ?? (dark ? "amber" : "red")}>{eyebrow}</Eyebrow>
      <h2 className={`max-w-[820px] text-[clamp(26px,3vw,38px)] leading-[1.12] font-bold ${dark ? "text-white" : "text-ink"}`}>{title}</h2>
      {lead && <p className={`mt-3 max-w-[640px] ${dark ? "text-on-navy" : "text-ink-body"}`}>{lead}</p>}
    </div>
  );
}

export function Band({ tone = "white", children, id }: { tone?: "white" | "cloud" | "navy"; children: React.ReactNode; id?: string }) {
  const bg = { white: "bg-white", cloud: "bg-cloud", navy: "bg-navy text-white" }[tone];
  return (
    <section id={id} className={`${bg} scroll-mt-20`}>
      <div className={`${wrap} py-16 md:py-20`}>{children}</div>
    </section>
  );
}

/** Numbered cards with a coloured top border. */
export function Steps({ items, cols = 3, onDark }: { items: { title: string; text: string; link?: Act }[]; cols?: number; onDark?: boolean }) {
  const grid = { 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "md:grid-cols-2 lg:grid-cols-4", 5: "md:grid-cols-3 lg:grid-cols-5" }[cols] ?? "md:grid-cols-3";
  return (
    <ol className={`m-0 grid list-none gap-4 p-0 ${grid}`}>
      {items.map((it, i) => (
        <li key={it.title} className={`flex flex-col rounded-xl border-t-4 p-6 ${accents.bar[i % 3]} ${onDark ? "bg-white text-ink" : "bg-cloud"}`}>
          <span className={`font-display text-[26px] font-bold ${accents.text[i % 3]}`}>{String(i + 1).padStart(2, "0")}</span>
          <h3 className="mt-2 text-[17px] font-semibold text-ink">{it.title}</h3>
          <p className="mt-2 text-[14.5px] leading-[1.6] text-ink-body">{it.text}</p>
          {it.link && (
            <Link href={it.link.href} className="mt-auto pt-4 text-[14px] font-semibold text-ink underline">
              {it.link.label} →
            </Link>
          )}
        </li>
      ))}
    </ol>
  );
}

export function Checks({ items }: { items: string[] }) {
  return (
    <ul className="m-0 list-none space-y-2.5 p-0">
      {items.map((t) => (
        <li key={t} className="flex gap-2.5 text-[14.5px] text-ink-body">
          <span aria-hidden="true" className="text-green-ink">
            ✓
          </span>
          {t}
        </li>
      ))}
    </ul>
  );
}

export function Closing({ title, text, actions, image = "/site/44843417.webp" }: { title: string; text: string; actions: Act[]; image?: string }) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <img src={image} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-25" />
      <div className={`${wrap} relative py-16 text-center md:py-20`}>
        <h2 className="text-[clamp(28px,3.4vw,44px)] font-bold">{title}</h2>
        <p className="mx-auto mt-3 max-w-[560px] text-on-navy">{text}</p>
        <div className="flex justify-center">
          <Actions items={actions} />
        </div>
      </div>
    </section>
  );
}
