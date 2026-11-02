"use client";

import { useEffect } from "react";

// Cloudflare Turnstile: one invisible check shared by every form on the site. It only shows a
// small "verify you're human" box when Cloudflare is unsure about a visitor; most people never see it.

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
const SCRIPT = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
const CONTAINER = "bi-turnstile";

type TurnstileApi = {
  render: (el: HTMLElement, opts: Record<string, unknown>) => string;
  execute: (id: string) => void;
  reset: (id: string) => void;
};
declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

let ready: Promise<TurnstileApi | null> | null = null;
let widgetId: string | null = null;
let pending: ((token: string | null) => void) | null = null;

function loadScript(): Promise<TurnstileApi | null> {
  if (!SITE_KEY || typeof window === "undefined") return Promise.resolve(null);
  if (ready) return ready;
  ready = new Promise((resolve) => {
    if (window.turnstile) return resolve(window.turnstile);
    const s = document.createElement("script");
    s.src = SCRIPT;
    s.async = true;
    s.onload = () => resolve(window.turnstile ?? null);
    s.onerror = () => resolve(null);
    document.head.appendChild(s);
  });
  return ready;
}

function finish(token: string | null) {
  const done = pending;
  pending = null;
  done?.(token);
}

/**
 * Gets a fresh one-time Turnstile token for a form submission. Returns null when Turnstile
 * isn't set up (no site key) or Cloudflare can't be reached; the server then decides.
 */
export async function getTurnstileToken(): Promise<string | null> {
  const api = await loadScript();
  const el = typeof document !== "undefined" ? document.getElementById(CONTAINER) : null;
  if (!api || !el) return null;
  return new Promise((resolve) => {
    finish(null); // cancel any earlier request still waiting
    pending = resolve;
    const timer = window.setTimeout(() => finish(null), 60_000);
    const wrapped = pending;
    pending = (t) => {
      window.clearTimeout(timer);
      wrapped(t);
    };
    if (widgetId === null) {
      widgetId = api.render(el, {
        sitekey: SITE_KEY,
        execution: "execute",
        appearance: "interaction-only",
        callback: (t: string) => finish(t),
        "error-callback": () => finish(null),
        "expired-callback": () => undefined,
      });
    } else {
      api.reset(widgetId);
    }
    api.execute(widgetId);
  });
}

/** Holder for the challenge box; sits bottom-centre and is empty unless a check is needed. */
export function TurnstileHost() {
  useEffect(() => {
    if (!SITE_KEY) return;
    // Load quietly once the page is idle so the first submit is fast.
    const t = window.setTimeout(() => void loadScript(), 2500);
    return () => window.clearTimeout(t);
  }, []);
  if (!SITE_KEY) return null;
  return <div id={CONTAINER} className="fixed bottom-4 left-1/2 z-[100] -translate-x-1/2" />;
}
