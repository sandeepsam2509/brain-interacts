"use client";
import Image from "next/image";
import { useState } from "react";

// Tabbed tour of the Corporate Brain app, using screenshots from an example workspace.
const tabs = [
  { key: "dashboard", label: "Dashboard", title: "Where things stand, every morning", text: "Project progress, who is busy and who is free, and what needs your attention, on one screen.", src: "/product/dashboard.webp", w: 1522, h: 670 },
  { key: "people", label: "People", title: "Every person, with their working style", text: "See each person's role, availability and assessment status, grouped by team.", src: "/product/people.webp", w: 1522, h: 732 },
  { key: "profile", label: "Profiles", title: "Strengths, watch-outs and how they like to work", text: "Each profile brings together skills, working-style archetype, strengths and the conditions where a person does their best work.", src: "/product/profile.webp", w: 1522, h: 732 },
  { key: "projects", label: "Projects", title: "Progress you can trust", text: "Projects only move forward when a reviewer approves finished work, so the numbers reflect reality.", src: "/product/projects.webp", w: 1522, h: 732 },
  { key: "timeline", label: "Task board", title: "From not started to done, with review built in", text: "Every task moves through In review before it counts as done.", src: "/product/timeline.webp", w: 1522, h: 732 },
  { key: "bench", label: "Bench", title: "Put idle talent to work", text: "See who is free, and where each person would fit best next, with a fit score and their next-best option.", src: "/product/bench.webp", w: 1522, h: 732 },
  { key: "reports", label: "Reports", title: "Team health in plain words", text: "Workload by team, overdue work and who could take on more, explained in a sentence, not just a chart.", src: "/product/reports.webp", w: 1522, h: 732 },
];

export function ProductTour() {
  const [active, setActive] = useState(0);
  const t = tabs[active];
  return (
    <div>
      <div role="tablist" aria-label="Corporate Brain screens" className="mb-6 flex gap-2 overflow-x-auto pb-1">
        {tabs.map((tab, i) => (
          <button
            key={tab.key}
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={`shrink-0 rounded-full border px-4 py-2 text-[14px] font-semibold transition ${
              i === active ? "border-lime bg-lime text-navy" : "border-navy-line text-on-navy hover:border-on-navy-muted hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-[1fr_2.4fr] lg:items-center lg:gap-10">
        <div>
          <h3 className="text-[22px] leading-[1.2] font-extrabold text-white">{t.title}</h3>
          <p className="mt-3 text-[15px] leading-[1.7] text-on-navy">{t.text}</p>
        </div>
        <figure className="m-0 overflow-hidden rounded-2xl border border-navy-line bg-navy-raised shadow-[0_24px_64px_rgba(0,0,0,0.35)]">
          <div className="flex items-center gap-1.5 border-b border-navy-line px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
            <span className="ml-3 rounded-full bg-navy px-2.5 py-0.5 text-[11px] font-semibold text-on-navy-muted">Example workspace</span>
          </div>
          <Image key={t.src} src={t.src} alt={`Corporate Brain ${t.label} screen, example workspace`} width={t.w} height={t.h} className="block h-auto w-full" />
        </figure>
      </div>
      <p className="mt-4 text-[12px] text-on-navy-muted">Screens show an example workspace with sample people and projects. Numbers are not customer results.</p>
    </div>
  );
}
