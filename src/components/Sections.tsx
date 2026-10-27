import Image from "next/image";
import type { Card, Section } from "@/lib/types";
import { CtaBanner } from "./CtaBanner";
import { DashboardPreview } from "./DashboardPreview";
import { FaqList } from "./FaqList";
import { Reveal } from "./Reveal";
import {
  accentAt,
  accentDot,
  accentText,
  ArrowIcon,
  ButtonLink,
  CheckIcon,
  Container,
  SectionHeading,
  SmartLink,
  TextLink,
} from "./ui";

const stepCols: Record<number, string> = { 4: "lg:grid-cols-4", 5: "lg:grid-cols-5" };

const gridCols = {
  1: "",
  2: "md:grid-cols-2",
  3: "md:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
} as const;

export function OfferingCard({ card, index }: { card: Card; index: number }) {
  const accent = card.accent ?? accentAt(index);
  const inner = (
    <>
      {card.tag && <p className={`text-eyebrow font-medium uppercase tracking-[0.14em] ${accentText[accent]}`}>{card.tag}</p>}
      <h3 className="mt-4 flex items-center gap-3 text-h3-sm font-semibold leading-snug md:text-h3">
        <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${accentDot[accent]}`} aria-hidden="true" />
        {card.title}
      </h3>
      {card.body && <p className="mt-3 text-secondary">{card.body}</p>}
      {card.href && (
        <span className="mt-auto pt-8 text-mist">
          <span className="sr-only">Learn more about {card.title}</span>
          <ArrowIcon className="transition-transform duration-200 group-hover:translate-x-1.5" />
        </span>
      )}
    </>
  );
  const cls =
    "group relative flex h-full flex-col rounded-2xl border border-line bg-navy-800/70 p-6 transition-all duration-200 md:p-8";
  return card.href ? (
    <SmartLink
      href={card.href}
      className={`${cls} hover:-translate-y-1 hover:border-secondary/40 hover:bg-navy-800 hover:shadow-[0_20px_50px_-25px_rgba(0,0,0,0.8)]`}
    >
      {inner}
    </SmartLink>
  ) : (
    <div className={cls}>{inner}</div>
  );
}

function Band({ children, id, tone = "plain" }: { children: React.ReactNode; id?: string; tone?: "plain" | "alt" }) {
  return (
    <section id={id} className={`scroll-mt-24 border-t border-line/60 py-20 md:py-28 ${tone === "alt" ? "bg-navy-800/30" : ""}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function Sections({ sections }: { sections: Section[] }) {
  let band = 0;
  return (
    <>
      {sections.map((s, i) => {
        if (s.type === "cta") return <CtaBanner key={i} {...s} />;
        const tone = band++ % 2 ? "alt" : "plain";
        const heading = <SectionHeading eyebrow={s.eyebrow} title={s.title} intro={s.intro} />;

        switch (s.type) {
          case "cards":
            return (
              <Band key={i} id={s.id} tone={tone}>
                <Reveal>{heading}</Reveal>
                <div className={`grid gap-5 ${gridCols[s.columns ?? 3]}`}>
                  {s.cards.map((c, j) => (
                    <Reveal key={c.title} delay={j * 70}>
                      <OfferingCard card={c} index={j} />
                    </Reveal>
                  ))}
                </div>
                {s.links && (
                  <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
                    {s.links.map((l) => (
                      <TextLink key={l.href} {...l} />
                    ))}
                  </div>
                )}
              </Band>
            );

          case "steps":
            return (
              <Band key={i} id={s.id} tone={tone}>
                <Reveal>{heading}</Reveal>
                <ol
                  className={`grid gap-x-6 gap-y-10 sm:grid-cols-2 ${stepCols[s.steps.length] ?? "lg:grid-cols-3"}`}
                >
                  {s.steps.map((step, j) => (
                    <Reveal as="li" key={step.title} delay={j * 70} className="relative h-full border-t-2 border-line pt-6">
                        <span className="absolute -top-0.5 left-0 h-0.5 w-12 bg-green" aria-hidden="true" />
                        <p className="text-eyebrow font-medium tracking-[0.14em] text-green">{String(j + 1).padStart(2, "0")}</p>
                        <h3 className="mt-3 text-h4 font-semibold">{step.title}</h3>
                        <p className="mt-2 text-small text-secondary">{step.body}</p>
                    </Reveal>
                  ))}
                </ol>
                {s.link && (
                  <div className="mt-12">
                    <TextLink {...s.link} />
                  </div>
                )}
              </Band>
            );

          case "table":
            return (
              <Band key={i} id={s.id} tone={tone}>
                <Reveal>{heading}</Reveal>
                <Reveal>
                  <div className="overflow-x-auto rounded-2xl border border-line">
                    <table className="w-full min-w-[640px] border-collapse text-left text-small">
                      <thead>
                        <tr className="bg-navy-800">
                          {s.head.map((h, j) => (
                            <th
                              key={j}
                              scope="col"
                              className={`px-5 py-4 font-semibold md:px-6 ${j === s.highlight ? "text-green" : ""}`}
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {s.rows.map((row, r) => (
                          <tr key={r} className="border-t border-line">
                            {row.map((cell, j) =>
                              j === 0 ? (
                                <th key={j} scope="row" className="px-5 py-4 align-top font-medium md:px-6">
                                  {cell}
                                </th>
                              ) : (
                                <td
                                  key={j}
                                  className={`px-5 py-4 align-top text-secondary md:px-6 ${
                                    j === s.highlight ? "bg-green/[0.04] text-mist" : ""
                                  }`}
                                >
                                  {cell}
                                </td>
                              ),
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Reveal>
                {s.note && <p className="mt-4 text-small text-muted">{s.note}</p>}
              </Band>
            );

          case "checklist":
            return (
              <Band key={i} id={s.id} tone={tone}>
                <div className={`grid gap-12 ${s.glance || s.image ? "lg:grid-cols-2 lg:items-center lg:gap-16" : ""}`}>
                  <Reveal>
                    {heading}
                    <ul className={`grid gap-4 ${s.glance || s.image ? "" : "md:grid-cols-2"}`}>
                      {s.items.map((item) => (
                        <li key={item} className="flex gap-3.5">
                          <CheckIcon className="mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                  {s.glance && (
                    <Reveal delay={100}>
                      <dl className="rounded-2xl border border-line bg-navy-800/70 p-6 md:p-8">
                        <p className="mb-6 text-eyebrow font-medium uppercase tracking-[0.14em] text-green">Engagement at a glance</p>
                        {s.glance.map((g) => (
                          <div key={g.q} className="border-t border-line py-4 first-of-type:border-t-0 first-of-type:pt-0 last:pb-0">
                            <dt className="text-small font-medium">{g.q}</dt>
                            <dd className="mt-1 text-secondary">{g.a}</dd>
                          </div>
                        ))}
                      </dl>
                    </Reveal>
                  )}
                  {s.image && (
                    <Reveal delay={100}>
                      <Image {...s.image} alt={s.image.alt} className="w-full rounded-2xl border border-line" sizes="(min-width: 1024px) 560px, 100vw" />
                    </Reveal>
                  )}
                </div>
              </Band>
            );

          case "problem":
            return (
              <Band key={i} id={s.id} tone={tone}>
                {heading}
                <div className="grid gap-5 lg:grid-cols-3">
                  {(
                    [
                      ["The problem", s.problem, "text-gold"],
                      ["The hidden risk", s.risk, "text-blue"],
                      ["The solution", s.solution, "text-green"],
                    ] as const
                  ).map(([label, body, color], j) => (
                    <Reveal key={label} delay={j * 80}>
                      <div className={`h-full rounded-2xl border p-6 md:p-8 ${j === 2 ? "border-green/30 bg-green/[0.04]" : "border-line bg-navy-800/70"}`}>
                        <p className={`text-eyebrow font-medium uppercase tracking-[0.14em] ${color}`}>{label}</p>
                        <p className="mt-4 text-pretty">{body}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </Band>
            );

          case "pills":
            return (
              <Band key={i} id={s.id} tone={tone}>
                <Reveal>{heading}</Reveal>
                <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {s.items.map((item, j) => (
                    <Reveal
                      as="li"
                      key={item}
                      delay={j * 50}
                      className="flex h-full items-center gap-4 rounded-xl border border-line bg-navy-800/70 px-5 py-4 font-medium"
                    >
                      <span className={`h-2 w-2 shrink-0 rounded-full ${accentDot[accentAt(j)]}`} aria-hidden="true" />
                      {item}
                    </Reveal>
                  ))}
                </ul>
              </Band>
            );

          case "features":
            return (
              <Band key={i} id={s.id} tone={tone}>
                <Reveal>{heading}</Reveal>
                <div className="space-y-20 md:space-y-28">
                  {s.features.map((f, j) => (
                    <div key={f.title} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                      <Reveal className={j % 2 ? "lg:order-2" : ""}>
                        {f.eyebrow && <p className="text-eyebrow font-medium uppercase tracking-[0.14em] text-green">{f.eyebrow}</p>}
                        <h3 className="mt-3 text-balance text-h3-sm font-semibold leading-snug md:text-[1.75rem]">{f.title}</h3>
                        <p className="mt-4 text-secondary">{f.body}</p>
                        {f.points && (
                          <ul className="mt-6 space-y-3">
                            {f.points.map((p) => (
                              <li key={p} className="flex gap-3.5">
                                <CheckIcon className="mt-0.5 shrink-0" />
                                <span>{p}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </Reveal>
                      {f.image && (
                        <Reveal delay={100} className={j % 2 ? "lg:order-1" : ""}>
                          <Image
                            {...f.image}
                            alt={f.image.alt}
                            sizes="(min-width: 1024px) 560px, 100vw"
                            className="w-full rounded-2xl border border-line shadow-[0_30px_80px_-40px_rgba(59,181,232,0.45)]"
                          />
                        </Reveal>
                      )}
                    </div>
                  ))}
                </div>
                {s.link && (
                  <div className="mt-14">
                    <TextLink {...s.link} />
                  </div>
                )}
              </Band>
            );

          case "prose":
            return (
              <Band key={i} id={s.id} tone={tone}>
                <Reveal>
                  <div
                    className={
                      s.tone === "panel"
                        ? "rounded-3xl border border-line bg-navy-800/70 p-8 md:p-14"
                        : s.tone === "note"
                          ? "rounded-2xl border border-aqua/25 bg-aqua/[0.04] p-6 md:p-8"
                          : ""
                    }
                  >
                    <SectionHeading eyebrow={s.eyebrow} title={s.title} />
                    <div className={`max-w-3xl space-y-5 text-lead text-secondary ${s.title ? "-mt-4 md:-mt-8" : ""}`}>
                      {s.body.map((p) => (
                        <p key={p} className="text-pretty">
                          {p}
                        </p>
                      ))}
                    </div>
                    {s.links && (
                      <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                        {s.links.map((l) => (
                          <TextLink key={l.href} {...l} />
                        ))}
                      </div>
                    )}
                  </div>
                </Reveal>
              </Band>
            );

          case "faq":
            return (
              <Band key={i} id={s.id} tone={tone}>
                <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                  <SectionHeading eyebrow={s.eyebrow ?? "FAQ"} title={s.title} intro={s.intro} />
                  <FaqList items={s.items} />
                </div>
              </Band>
            );

          case "pricing":
            return (
              <Band key={i} id={s.id} tone={tone}>
                <Reveal>{heading}</Reveal>
                <div className="grid gap-5 lg:grid-cols-3">
                  {s.plans.map((p, j) => (
                    <Reveal key={p.name} delay={j * 80}>
                      <div
                        className={`flex h-full flex-col rounded-2xl border p-7 md:p-8 ${
                          j === 0 ? "border-green/40 bg-gradient-to-b from-green/[0.06] to-navy-800/70" : "border-line bg-navy-800/70"
                        }`}
                      >
                        <p className={`text-eyebrow font-medium uppercase tracking-[0.14em] ${j === 0 ? "text-green" : "text-muted"}`}>
                          {p.tag}
                        </p>
                        <h3 className="mt-4 text-h3 font-semibold">{p.name}</h3>
                        <p className="mt-2 text-h4 font-semibold text-aqua">{p.price}</p>
                        <p className="mt-3 text-secondary">{p.body}</p>
                        <ul className="mt-7 space-y-3 border-t border-line pt-7">
                          {p.items.map((it) => (
                            <li key={it} className="flex gap-3 text-small">
                              <CheckIcon className="shrink-0" />
                              <span>{it}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-auto pt-8">
                          <ButtonLink {...p.action} variant={j === 0 ? "primary" : "secondary"} className="w-full" />
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </Band>
            );

          case "dashboard":
            return (
              <Band key={i} id={s.id} tone={tone}>
                <div className="grid items-center gap-12 lg:grid-cols-2">
                  <Reveal>{heading}</Reveal>
                  <Reveal delay={100} className="flex justify-center lg:justify-end">
                    <DashboardPreview />
                  </Reveal>
                </div>
              </Band>
            );
        }
      })}
    </>
  );
}
