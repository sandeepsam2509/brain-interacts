/* eslint-disable @next/next/no-img-element -- SVG logos don't need next/image */
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PageHero } from "@/components/blocks";
import { Eyebrow, H2, Section } from "@/components/ui";
import { routes, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Brand and logos",
  description: "Logos, colours and brand guidelines for Brain Interacts and Decode, for press, partners and customers.",
  alternates: { canonical: routes.brand },
};

const trail = [{ label: "Home", href: routes.home }, { label: "Brand" }];

type Download = { label: string; href: string; size: string };

function DownloadLink({ d }: { d: Download }) {
  return (
    <a
      href={d.href}
      download
      className="flex items-center justify-between gap-4 rounded-[10px] border border-rule bg-white px-4 py-3 text-[14px] font-semibold text-ink no-underline transition-colors hover:border-navy"
    >
      <span>{d.label}</span>
      <span className="shrink-0 text-[13px] font-normal text-ink-muted">{d.size} ↓</span>
    </a>
  );
}

function LogoTile({ dark = false, label, children }: { dark?: boolean; label: string; children: ReactNode }) {
  return (
    <figure className={`m-0 overflow-hidden rounded-[12px] border ${dark ? "border-navy bg-navy" : "border-rule bg-white"}`}>
      <div className="grid h-[180px] place-items-center px-8">{children}</div>
      <figcaption className={`border-t px-4 py-3 text-[13px] ${dark ? "border-navy-line text-on-navy" : "border-rule text-ink-muted"}`}>{label}</figcaption>
    </figure>
  );
}

const colours = [
  { name: "Navy", hex: "#0A1628", use: "Text, buttons, dark sections and the logo.", text: "text-white" },
  { name: "Red", hex: "#E5484D", use: "The logo and the top stripe. Errors only, never a person's score.", text: "text-white" },
  { name: "Amber", hex: "#F5A524", use: "The key button on navy and development areas.", text: "text-navy" },
  { name: "Green", hex: "#2BA36B", use: "Strengths, progress and completed steps.", text: "text-white" },
  { name: "Cloud", hex: "#F5F7FA", use: "Light page backgrounds.", text: "text-navy" },
  { name: "White", hex: "#FFFFFF", use: "Cards and most of the page.", text: "text-navy" },
];

const rules = [
  "Use the version made for the background: full colour on white, reversed on navy.",
  "Never recolour, stretch, rotate or add shadows to a logo.",
  "Keep clear space around the logo, and don't place it on busy photos or mid-tone backgrounds.",
  "Red, amber and green always appear in that order: in the Decode lens and in the top stripe.",
  "Inter is the only typeface. Headings are in sentence case.",
];

export default function BrandPage() {
  return (
    <>
      <PageHero
        trail={trail}
        title="Brand and logos."
        accent="Everything in one place."
        lead="Official logos, colours and guidelines for Brain Interacts and our products. Free to use when you write about us or work with us; please follow the guidelines."
      />

      {/* Brain Interacts */}
      <Section tone="light">
        <Eyebrow icon="people" color="goldInk">
          Company
        </Eyebrow>
        <H2 className="mb-3">Brain Interacts</H2>
        <p className="mb-8 max-w-[680px] leading-[1.7] text-ink-body">
          The company logo. Use the full-colour version on white and the reversed version on navy. Use the mark on its own only where the
          name already appears nearby.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <LogoTile label="Full colour · on white (default)">
            <img src="/brand/brain-interacts-logo.svg" alt="Brain Interacts logo in full colour" className="h-auto w-full max-w-[280px]" />
          </LogoTile>
          <LogoTile dark label="Reversed · on navy">
            <img src="/brand/brain-interacts-logo-reversed.svg" alt="Brain Interacts logo reversed for navy" className="h-auto w-full max-w-[280px]" />
          </LogoTile>
          <LogoTile label="Mark only · tight spaces">
            <img src="/brand/brain-interacts-mark.svg" alt="Brain Interacts mark" className="h-[96px] w-auto" />
          </LogoTile>
        </div>
        <div className="mt-6 grid max-w-[520px] gap-3">
          <DownloadLink d={{ label: "Brain Interacts logo pack (SVG, PNG, icons)", href: "/brand/downloads/brain-interacts-logo-pack.zip", size: "ZIP · 1.2 MB" }} />
        </div>
      </Section>

      {/* Decode */}
      <Section tone="dark">
        <Eyebrow icon="grid" color="gold">
          Product
        </Eyebrow>
        <H2 className="mb-3 text-white">Decode</H2>
        <p className="mb-8 max-w-[680px] leading-[1.7] text-on-navy">
          Our game-based talent assessment platform. The word decode in Inter SemiBold, with the insight lens taking the place of the
          &ldquo;o&rdquo;.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <LogoTile label="Full colour · on white">
            <img src="/brand/decode-wordmark-navy.svg" alt="Decode logo in navy" className="h-auto w-full max-w-[240px]" />
          </LogoTile>
          <LogoTile dark label="Reversed · on navy">
            <img src="/brand/decode-wordmark-white.svg" alt="Decode logo in white" className="h-auto w-full max-w-[240px]" />
          </LogoTile>
          <LogoTile label="Lens symbol · small spaces">
            <img src="/brand/decode-lens-navy.svg" alt="Decode lens symbol" className="h-[96px] w-auto" />
          </LogoTile>
        </div>
        <div className="mt-6 grid max-w-[520px] gap-3">
          <DownloadLink d={{ label: "Decode brand guidelines", href: "/brand/downloads/decode-brand-guidelines.pdf", size: "PDF · 250 KB" }} />
          <DownloadLink d={{ label: "Decode brand kit (logos, colours, font)", href: "/brand/downloads/decode-brand-kit.zip", size: "ZIP · 3.5 MB" }} />
        </div>
      </Section>

      {/* Corporate Brain */}
      <Section tone="light">
        <Eyebrow icon="chart" color="goldInk">
          Product
        </Eyebrow>
        <H2 className="mb-3">Corporate Brain</H2>
        <p className="mb-8 max-w-[680px] leading-[1.7] text-ink-body">Our people analytics platform.</p>
        <div className="grid gap-4 md:grid-cols-3">
          <LogoTile dark label="Primary · on navy">
            <img src="/brand/corporate-brain-logo.svg" alt="Corporate Brain logo" className="h-auto w-full max-w-[260px]" />
          </LogoTile>
        </div>
        <div className="mt-6 grid max-w-[520px] gap-3">
          <DownloadLink d={{ label: "Corporate Brain brand guidelines", href: "/brand/downloads/corporate-brain-brand-guidelines.pdf", size: "PDF · 460 KB" }} />
        </div>
      </Section>

      {/* Colours */}
      <Section tone="light" className="border-t border-rule">
        <Eyebrow icon="spark" color="goldInk">
          Colour
        </Eyebrow>
        <H2 className="mb-3">Navy and white, with red, amber and green.</H2>
        <p className="mb-8 max-w-[680px] leading-[1.7] text-ink-body">
          Navy carries the brand. Red, amber and green each have one job and are used only where they mean something.
        </p>
        <ul className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {colours.map((c) => (
            <li key={c.name} className="overflow-hidden rounded-[12px] border border-rule bg-white">
              <div className={`flex h-[110px] items-end p-4 font-bold ${c.text}`} style={{ background: c.hex }}>
                {c.name}
              </div>
              <div className="p-4">
                <p className="m-0 font-semibold tabular-nums">{c.hex}</p>
                <p className="m-0 mt-1 text-[14px] leading-[1.6] text-ink-body">{c.use}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* Rules */}
      <Section tone="light" className="border-t border-rule">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <Eyebrow icon="target" color="goldInk">
              Using the brand
            </Eyebrow>
            <H2 className="mb-6">A few simple rules.</H2>
            <ul className="m-0 list-none p-0">
              {rules.map((r) => (
                <li key={r} className="flex gap-3 border-b border-rule py-3.5 text-ink-body">
                  <span aria-hidden="true" className="font-bold text-green-ink">
                    ✓
                  </span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow icon="quote" color="goldInk">
              Typography
            </Eyebrow>
            <p className="m-0 text-[72px] leading-none font-bold tracking-[-0.03em]">Aa</p>
            <p className="mt-4 text-[20px] font-semibold">Inter</p>
            <p className="mt-1 leading-[1.7] text-ink-body">Regular, Medium, SemiBold and Bold. Free under the SIL Open Font License.</p>
            <p className="mt-8 leading-[1.7] text-ink-body">
              Need something else, like a high-resolution file or a logo for print? Write to{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-ink underline">
                {site.email}
              </a>
              .
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
