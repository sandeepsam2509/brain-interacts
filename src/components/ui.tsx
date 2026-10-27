import Link from "next/link";
import type { Accent, Action } from "@/lib/types";

export const accentDot: Record<Accent, string> = {
  green: "bg-green",
  gold: "bg-gold",
  blue: "bg-blue",
  aqua: "bg-aqua",
  lemon: "bg-lemon",
};

export const accentText: Record<Accent, string> = {
  green: "text-green",
  gold: "text-gold",
  blue: "text-blue",
  aqua: "text-aqua",
  lemon: "text-lemon",
};

const accentCycle: Accent[] = ["green", "gold", "blue", "aqua"];
export const accentAt = (i: number) => accentCycle[i % accentCycle.length];

export function Container({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-5 md:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-eyebrow font-medium uppercase tracking-[0.14em] text-green ${className}`}>{children}</p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  center = false,
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
  center?: boolean;
}) {
  if (!eyebrow && !title && !intro) return null;
  return (
    <div className={`mb-10 max-w-3xl md:mb-14 ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
      {title && <h2 className="text-balance text-h2-sm font-semibold leading-[1.15] tracking-tight md:text-h2">{title}</h2>}
      {intro && <p className="mt-5 text-pretty text-lead text-secondary">{intro}</p>}
    </div>
  );
}

export function isExternal(href: string) {
  return /^(https?:|mailto:|tel:)/.test(href);
}

export function SmartLink({
  href,
  className,
  children,
  ...rest
}: { href: string; className?: string; children: React.ReactNode } & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (isExternal(href)) {
    const newTab = href.startsWith("http");
    return (
      <a href={href} className={className} {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} {...rest}>
      {children}
    </Link>
  );
}

export function ButtonLink({ label, href, variant = "primary", className = "" }: Action & { className?: string }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-button font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green";
  const styles =
    variant === "primary"
      ? "bg-green text-navy-900 hover:-translate-y-0.5 hover:bg-[#a9e264] hover:shadow-[0_8px_24px_-8px_rgba(154,215,81,0.6)]"
      : "border border-line bg-navy-800/60 text-mist hover:-translate-y-0.5 hover:border-secondary/60";
  return (
    <SmartLink href={href} className={`${base} ${styles} ${className}`}>
      {label}
    </SmartLink>
  );
}

export function Actions({ actions, className = "" }: { actions?: Action[]; className?: string }) {
  if (!actions?.length) return null;
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {actions.map((a, i) => (
        <ButtonLink key={a.label + a.href} {...a} variant={a.variant ?? (i === 0 ? "primary" : "secondary")} />
      ))}
    </div>
  );
}

export function TextLink({ label, href }: Action) {
  return (
    <SmartLink
      href={href}
      className="group inline-flex items-center gap-2 font-medium text-aqua transition-colors hover:text-mist"
    >
      {label.replace(/\s*→\s*$/, "")}
      <ArrowIcon className="transition-transform group-hover:translate-x-1" />
    </SmartLink>
  );
}

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path d="M3 8h10m0 0L9 4m4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <circle cx="10" cy="10" r="10" className="fill-green/15" />
      <path d="m6 10.2 2.7 2.6L14 7.5" className="stroke-green" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className={className}>
      <path d="m3 4.5 3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
