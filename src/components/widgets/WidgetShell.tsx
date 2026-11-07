import type { ReactNode } from "react";
import { BrandMark } from "../BrandMark";

/**
 * The frame every interactive widget sits in: the same navy header, white body and lime
 * accents as the free working-style assessment, so they read as one family.
 */
export function WidgetShell({
  title,
  subtitle,
  badge,
  progress,
  children,
  className = "",
}: {
  title: string;
  subtitle: string;
  badge?: string;
  /** 0–1; shows the lime progress bar under the header when set. */
  progress?: number;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden rounded-[18px] bg-white text-ink shadow-[0_24px_60px_rgba(10,22,40,0.28)] ring-1 ring-navy/5 ${className}`}>
      <div className="relative overflow-hidden bg-navy px-5 pt-5 pb-4 text-white md:px-7 md:pt-6">
        <div aria-hidden="true" className="pointer-events-none absolute -top-16 -right-10 h-40 w-40 rounded-full bg-lime/15 blur-3xl" />
        <div className="relative flex items-center gap-3">
          <BrandMark size={34} />
          <div className="min-w-0 flex-1">
            <p className="font-extrabold md:text-[15px]">{title}</p>
            <p className="mt-0.5 text-[13px] text-on-navy">{subtitle}</p>
          </div>
          {badge && <span className="hidden rounded-full bg-lime/15 px-3 py-1 font-mono text-[11px] font-medium text-lime uppercase sm:inline">{badge}</span>}
        </div>
        {progress !== undefined && (
          <div aria-hidden="true" className="relative mt-4 h-1 overflow-hidden rounded-full bg-navy-line">
            <span className="block h-full rounded-full bg-lime transition-[width] duration-500" style={{ width: `${Math.round(progress * 100)}%` }} />
          </div>
        )}
      </div>
      <div className="bg-white">{children}</div>
    </div>
  );
}

/** A labelled range slider with the current value shown on the right. */
export function Slider({
  id,
  label,
  value,
  min,
  max,
  step = 1,
  display,
  onChange,
  hint,
}: {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  display: string;
  onChange: (v: number) => void;
  hint?: string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-sm font-bold">
          {label}
        </label>
        <output htmlFor={id} className="font-mono text-[14px] font-medium text-ink-link">
          {display}
        </output>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="widget-range w-full"
        style={{ "--fill": `${pct}%` } as React.CSSProperties}
      />
      {hint && <p className="mt-1.5 text-xs text-ink-muted">{hint}</p>}
    </div>
  );
}

/** Choice buttons that behave like radio buttons (keyboard and screen readers included). */
export function ChoiceGroup<T extends string>({
  name,
  legend,
  options,
  value,
  onChange,
  columns = 2,
}: {
  name: string;
  legend: string;
  options: { value: T; label: string; hint?: string }[];
  value: T | null;
  onChange: (v: T) => void;
  columns?: 1 | 2 | 3;
}) {
  const cols = { 1: "", 2: "sm:grid-cols-2", 3: "sm:grid-cols-3" }[columns];
  return (
    <fieldset className="m-0 border-0 p-0">
      <legend className="mb-3 text-lg font-extrabold tracking-[-0.01em] md:text-xl">{legend}</legend>
      <div className={`grid gap-2 ${cols}`}>
        {options.map((o) => {
          const on = value === o.value;
          return (
            <label
              key={o.value}
              className={`flex min-h-12 cursor-pointer items-start gap-3 rounded-xl border px-4 py-3 transition-colors ${
                on ? "border-navy bg-navy text-white" : "border-rule-strong bg-white hover:border-navy"
              }`}
            >
              <input type="radio" name={name} value={o.value} checked={on} onChange={() => onChange(o.value)} className="sr-only" />
              <span
                aria-hidden="true"
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${on ? "border-lime bg-lime" : "border-rule-strong"}`}
              >
                {on && <span className="h-2 w-2 rounded-full bg-navy" />}
              </span>
              <span>
                <span className="block text-[14px] font-semibold">{o.label}</span>
                {o.hint && <span className={`mt-0.5 block text-[13px] ${on ? "text-on-navy" : "text-ink-muted"}`}>{o.hint}</span>}
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
