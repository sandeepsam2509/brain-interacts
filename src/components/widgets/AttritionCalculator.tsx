"use client";

import Link from "next/link";
import { useState } from "react";
import { enquiryHref } from "@/lib/enquiries";
import { inr, num } from "@/lib/money";
import { Slider, WidgetShell } from "./WidgetShell";

// Gallup (2019): replacing an employee costs one-half to two times their annual salary,
// and 52% of voluntary leavers said their manager or organization could have prevented it.
const LOW = 0.5;
const HIGH = 2;
const PREVENTABLE = 0.52;

/** What employee turnover costs a year, as a range, from headcount, attrition and salary. */
export function AttritionCalculator() {
  const [headcount, setHeadcount] = useState(500);
  const [attrition, setAttrition] = useState(18);
  const [salaryLakh, setSalaryLakh] = useState(8);

  const leavers = Math.round((headcount * attrition) / 100);
  const salary = salaryLakh * 1e5;
  const low = leavers * salary * LOW;
  const high = leavers * salary * HIGH;
  const preventableLow = low * PREVENTABLE;
  const preventableHigh = high * PREVENTABLE;

  return (
    <WidgetShell title="Attrition cost calculator" subtitle="What turnover costs you each year" badge="Free tool">
      <div className="grid lg:grid-cols-[1fr_1.05fr]">
        <div className="flex flex-col gap-7 p-5 md:p-7">
          <Slider id="ac-headcount" label="Headcount" value={headcount} min={20} max={10000} step={10} display={num(headcount)} onChange={setHeadcount} />
          <Slider
            id="ac-attrition"
            label="Annual attrition"
            value={attrition}
            min={2}
            max={60}
            display={`${attrition}%`}
            onChange={setAttrition}
            hint="The share of employees who leave in a year."
          />
          <Slider
            id="ac-salary"
            label="Average annual salary"
            value={salaryLakh}
            min={2}
            max={60}
            step={0.5}
            display={`₹${salaryLakh} lakh`}
            onChange={setSalaryLakh}
          />
        </div>

        <div className="border-t border-rule bg-[#F6F7F9] p-5 md:p-7 lg:border-t-0 lg:border-l" aria-live="polite">
          <p className="font-mono text-xs text-ink-muted uppercase">Estimated cost of turnover per year</p>
          <p className="mt-2 text-[clamp(30px,3.6vw,42px)] leading-tight font-extrabold tracking-[-0.03em]">
            {inr(low)} <span className="text-ink-muted">–</span> {inr(high)}
          </p>
          <p className="mt-2 text-[15px] text-ink-body">
            About <strong className="text-ink">{num(leavers)} people</strong> leave each year.
          </p>

          <div className="mt-6 rounded-xl bg-navy p-5 text-white">
            <p className="text-sm text-on-navy">Likely preventable</p>
            <p className="mt-1 text-2xl font-extrabold text-lime">
              {inr(preventableLow)} – {inr(preventableHigh)}
            </p>
            <p className="mt-2 text-[13px] leading-[1.6] text-on-navy">
              In Gallup&apos;s research, 52% of people who left said their manager or organization could have prevented it.
            </p>
          </div>

          <Link
            href={enquiryHref("diagnostic", { headcount: String(headcount), attrition: `${attrition}%` })}
            className="mt-6 flex w-full items-center justify-center rounded-lg bg-lime px-6 py-4 text-base font-bold text-navy no-underline hover:bg-[#c7ea72]"
          >
            Find the causes behind your attrition
          </Link>
          <p className="mt-4 text-xs leading-[1.6] text-ink-muted">
            Estimate only. Replacement cost of half to twice annual salary per leaver, from Gallup (2019), which calls this range
            conservative. It covers hiring, onboarding and lost productivity, not your exact figures.
          </p>
        </div>
      </div>
    </WidgetShell>
  );
}
