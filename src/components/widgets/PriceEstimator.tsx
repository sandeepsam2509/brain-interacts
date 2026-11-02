"use client";

import Link from "next/link";
import { useState } from "react";
import { enquiryHref } from "@/lib/enquiries";
import { inr, num } from "@/lib/money";
import { Slider, WidgetShell } from "./WidgetShell";

// Seat prices per user per month, excluding GST (same as the plan cards).
const PRICE = { leadership: 10000, manager: 5000, employee: 2000 };

// Typical seat mixes: share of people on Leadership and Manager seats; everyone else is Employee.
const MIX = { low: { lead: 0.03, mgr: 0.1 }, mid: { lead: 0.05, mgr: 0.15 }, high: { lead: 0.08, mgr: 0.2 } };

function seats(team: number, mix: { lead: number; mgr: number }) {
  const leadership = Math.max(1, Math.round(team * mix.lead));
  const manager = Math.max(1, Math.round(team * mix.mgr));
  const employee = Math.max(0, team - leadership - manager);
  return { leadership, manager, employee, monthly: leadership * PRICE.leadership + manager * PRICE.manager + employee * PRICE.employee };
}

/** Team-size slider → estimated monthly price range, plus an illustrative payback period. */
export function PriceEstimator() {
  const [team, setTeam] = useState(200);
  const [attrition, setAttrition] = useState(15);
  const [salaryLakh, setSalaryLakh] = useState(8);
  const [reduction, setReduction] = useState(10);
  const [replace, setReplace] = useState(1);

  const low = seats(team, MIX.low).monthly;
  const high = seats(team, MIX.high).monthly;
  const mid = seats(team, MIX.mid);
  const annual = mid.monthly * 12;

  // Illustrative saving: fewer regretted leavers × the cost of replacing each one, which Gallup
  // (2019) puts at half to twice annual salary. The visitor picks where in that range they sit.
  const leaversAvoided = (team * attrition * reduction) / 10000;
  const saving = leaversAvoided * salaryLakh * 1e5 * replace;
  const payback = saving > 0 ? annual / (saving / 12) : Infinity;
  const paybackText = !isFinite(payback) || payback > 36 ? "More than 3 years" : payback < 1 ? "Under a month" : `About ${Math.round(payback)} months`;

  return (
    <WidgetShell title="Price & payback estimator" subtitle="See what Corporate Brain could cost, and when it pays back" badge="Estimate">
      <div className="grid lg:grid-cols-[1fr_1fr]">
        <div className="flex flex-col gap-7 p-5 md:p-7">
          <Slider id="pe-team" label="Team size" value={team} min={10} max={3000} step={10} display={`${num(team)} people`} onChange={setTeam} />
          <div className="rounded-xl bg-[#F6F7F9] p-4 text-sm">
            <p className="font-mono text-xs text-ink-muted uppercase">Typical seat mix</p>
            <dl className="m-0 mt-3 grid grid-cols-3 gap-3">
              {[
                ["Leadership", mid.leadership],
                ["Manager", mid.manager],
                ["Employee", mid.employee],
              ].map(([k, v]) => (
                <div key={k as string}>
                  <dt className="text-ink-muted">{k}</dt>
                  <dd className="m-0 mt-0.5 text-lg font-extrabold">{num(v as number)}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="border-t border-rule pt-6">
            <p className="mb-5 text-sm font-extrabold">For the payback estimate</p>
            <div className="flex flex-col gap-6">
              <Slider id="pe-attrition" label="Annual attrition" value={attrition} min={2} max={50} display={`${attrition}%`} onChange={setAttrition} />
              <Slider id="pe-salary" label="Average annual salary" value={salaryLakh} min={2} max={50} step={0.5} display={`₹${salaryLakh} lakh`} onChange={setSalaryLakh} />
              <Slider
                id="pe-reduction"
                label="If regretted attrition falls by"
                value={reduction}
                min={5}
                max={30}
                display={`${reduction}%`}
                onChange={setReduction}
                hint="Your own target; we don't promise a figure."
              />
              <Slider
                id="pe-replace"
                label="Cost to replace one leaver"
                value={replace}
                min={0.5}
                max={2}
                step={0.25}
                display={`${replace}× salary`}
                onChange={setReplace}
                hint="Gallup puts it at half to twice annual salary: higher for senior and specialist roles."
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col border-t border-rule bg-navy p-5 text-white md:p-7 lg:border-t-0" aria-live="polite">
          <p className="font-mono text-xs text-on-navy-muted uppercase">Estimated price per month</p>
          <p className="mt-2 text-[clamp(30px,3.6vw,42px)] leading-tight font-extrabold tracking-[-0.03em]">
            {inr(low)} <span className="text-on-navy-muted">–</span> {inr(high)}
          </p>
          <p className="mt-1 text-sm text-on-navy">excluding GST · about {inr(annual)} a year for a typical mix</p>

          <div className="mt-7 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-navy-raised p-4 ring-1 ring-navy-line">
              <p className="text-[13px] text-on-navy">Illustrative yearly saving</p>
              <p className="mt-1 text-xl font-extrabold text-lime">{inr(saving)}</p>
            </div>
            <div className="rounded-xl bg-navy-raised p-4 ring-1 ring-navy-line">
              <p className="text-[13px] text-on-navy">Payback period</p>
              <p className="mt-1 text-xl font-extrabold text-lime">{paybackText}</p>
            </div>
          </div>

          <div className="mt-auto pt-7">
            <Link
              href={enquiryHref("quote", { "team size": `${team} people` })}
              className="flex w-full items-center justify-center rounded-lg bg-lime px-6 py-4 text-base font-bold text-navy no-underline hover:bg-[#c7ea72]"
            >
              Get a custom quote for {num(team)} people
            </Link>
            <p className="mt-4 text-xs leading-[1.6] text-on-navy-muted">
              Estimate only. Price uses the seat prices above and typical mixes of 3–8% Leadership and 10–20% Manager seats; assessment
              credits are extra. Saving counts only avoided replacement costs (hiring,
              onboarding and lost productivity while a role is refilled, per Gallup 2019); it leaves out wider gains such as faster
              project delivery.
            </p>
          </div>
        </div>
      </div>
    </WidgetShell>
  );
}
