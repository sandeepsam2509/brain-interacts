import Link from "next/link";
import type { ReactNode } from "react";
import { Icon, type IconName } from "./Icon";

export type Tone = "dark" | "light";

/** A full-width band. Dark and light bands alternate down each page. */
export function Section({
  tone,
  children,
  id,
  className = "",
  innerClassName = "py-12 md:py-16",
}: {
  tone: Tone;
  children: ReactNode;
  id?: string;
  className?: string;
  innerClassName?: string;
}) {
  const toneClass = tone === "dark" ? "bg-navy text-white" : "bg-white text-ink";
  return (
    <section id={id} className={`${toneClass} ${className}`}>
      <div className={`mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12 ${innerClassName}`}>{children}</div>
    </section>
  );
}

const eyebrowColors = {
  lime: "text-lime",
  gold: "text-gold",
  sky: "text-sky",
  link: "text-ink-link",
  goldInk: "text-gold-ink",
  green: "text-green-ink",
} as const;

export type EyebrowColor = keyof typeof eyebrowColors;

/** Small mono label with an icon that sits above a heading. */
export function Eyebrow({
  icon,
  children,
  color,
}: {
  icon: IconName;
  children: ReactNode;
  color: EyebrowColor;
}) {
  return (
    <p className={`mb-3.5 flex items-center gap-2 text-[12px] font-semibold tracking-[0.08em] uppercase ${eyebrowColors[color]}`}>
      <Icon name={icon} />
      <span>{children}</span>
    </p>
  );
}

export function H2({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`text-[clamp(24px,2.7vw,35px)] leading-[1.12] font-extrabold tracking-[-0.02em] ${className}`}>
      {children}
    </h2>
  );
}

const buttonStyles = {
  lime: "bg-brand-red text-white hover:bg-brand-red-dark",
  gold: "bg-brand-red text-white hover:bg-brand-red-dark",
  sky: "bg-sky text-navy hover:bg-[#DCE3EE]",
  navy: "bg-navy text-white hover:bg-[#22324D]",
  outlineLight: "border border-rule-strong text-ink hover:border-ink",
  outlineDark: "border border-navy-line text-white hover:border-on-navy",
} as const;

export type ButtonVariant = keyof typeof buttonStyles;

export function ButtonLink({
  href,
  children,
  variant = "lime",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-lg px-6 py-4 text-base font-bold no-underline transition-colors max-md:w-full ${buttonStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

/** Inline "Explore →" style link. */
export function ArrowLink({
  href,
  children,
  tone,
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone: Tone;
  className?: string;
}) {
  const color = tone === "dark" ? "text-lime" : "text-ink-link";
  return (
    <Link href={href} className={`font-bold no-underline hover:underline ${color} ${className}`}>
      {children} <span aria-hidden="true">→</span>
    </Link>
  );
}
