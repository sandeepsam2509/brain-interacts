"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { routes } from "@/lib/site";

const KEY = "bi-cookie-consent"; // "accepted" | "declined"
const OPEN_EVENT = "bi:cookie-settings";
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

function readChoice(): string | null {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return null;
  }
}

function loadClarity() {
  if (!CLARITY_ID || document.getElementById("ms-clarity")) return;
  // Microsoft Clarity's standard loader, added only after the visitor accepts.
  const w = window as unknown as { clarity?: ((...a: unknown[]) => void) & { q?: unknown[] } };
  w.clarity =
    w.clarity ||
    Object.assign((...args: unknown[]) => {
      (w.clarity!.q = w.clarity!.q || []).push(args);
    }, {});
  const s = document.createElement("script");
  s.id = "ms-clarity";
  s.async = true;
  s.src = `https://www.clarity.ms/tag/${encodeURIComponent(CLARITY_ID)}`;
  document.head.appendChild(s);
}

/** Opens the cookie banner again (used by "Cookie settings" in the footer). */
export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}>
      Cookie settings
    </button>
  );
}

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const choice = readChoice();
    if (choice === "accepted") loadClarity();
    if (!choice) setShow(true);
    const reopen = () => setShow(true);
    window.addEventListener(OPEN_EVENT, reopen);
    return () => window.removeEventListener(OPEN_EVENT, reopen);
  }, []);

  function choose(value: "accepted" | "declined") {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* storage blocked: the choice applies for this visit only */
    }
    setShow(false);
    if (value === "accepted") loadClarity();
    // Withdrawing consent: reload so Clarity stops running in this tab.
    else if (document.getElementById("ms-clarity")) window.location.reload();
  }

  if (!show) return null;
  return (
    <div
      role="dialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-text"
      className="fixed inset-x-3 bottom-3 z-[80] mx-auto max-w-[720px] rounded-2xl border border-navy-line bg-navy p-5 text-white shadow-[0_16px_48px_rgba(10,22,40,0.4)] sm:inset-x-6 sm:bottom-6 md:p-6"
    >
      <p id="cookie-title" className="font-extrabold">
        Cookies on braininteracts.com
      </p>
      <p id="cookie-text" className="mt-2 text-[15px] leading-[1.6] text-on-navy">
        We count visits without cookies. With your OK, we also use Microsoft Clarity to see anonymised clicks and scrolling, so we
        can improve the site. No advertising cookies.{" "}
        <Link href={routes.cookies} className="text-on-navy-soft underline">
          Cookie Notice
        </Link>
      </p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <button type="button" onClick={() => choose("accepted")} className="rounded-lg bg-lime px-5 py-3 font-bold text-navy">
          Accept
        </button>
        <button type="button" onClick={() => choose("declined")} className="rounded-lg border border-navy-line px-5 py-3 font-bold text-white">
          Decline
        </button>
      </div>
    </div>
  );
}
