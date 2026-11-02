"use client";

import { useState } from "react";
import type { FormResponse } from "@/lib/forms";
import { TURNSTILE_HEADER } from "@/lib/turnstile";
import { getTurnstileToken } from "../Turnstile";

export type Status = { state: "idle" } | { state: "sending" } | { state: "sent"; delivered: boolean } | { state: "error"; message: string };

/** Posts a form to one of the /api routes and tracks sending / sent / error. */
export function useSubmit(endpoint: string) {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function submit(body: Record<string, unknown> | FormData) {
    setStatus({ state: "sending" });
    try {
      const token = await getTurnstileToken();
      const headers: Record<string, string> = token ? { [TURNSTILE_HEADER]: token } : {};
      const res = await fetch(endpoint, {
        method: "POST",
        ...(body instanceof FormData ? { body, headers } : { body: JSON.stringify(body), headers: { ...headers, "Content-Type": "application/json" } }),
      });
      const data = (await res.json().catch(() => null)) as FormResponse | null;
      if (data?.ok) {
        setStatus({ state: "sent", delivered: data.delivered });
        return true;
      }
      setStatus({ state: "error", message: data && !data.ok ? data.error : "Something went wrong. Please try again." });
    } catch {
      setStatus({ state: "error", message: "We couldn't reach the server. Check your connection and try again." });
    }
    return false;
  }

  return { status, submit, reset: () => setStatus({ state: "idle" }) };
}
