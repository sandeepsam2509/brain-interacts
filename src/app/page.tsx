import Link from "next/link";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 md:py-32">
      <p className="mb-4 text-eyebrow font-medium uppercase tracking-wider text-green">
        Team analytics
      </p>
      <h1 className="max-w-3xl text-[2.375rem] font-semibold leading-tight md:text-h1">
        See how your people think, decide and deliver.
      </h1>
      <p className="mt-6 max-w-2xl text-lead text-secondary">{site.description}</p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/demo"
          className="rounded-full bg-green px-6 py-3 font-semibold text-navy-900 transition-opacity hover:opacity-90"
        >
          Request a demo
        </Link>
        <Link
          href="/how-it-works"
          className="rounded-full border border-line px-6 py-3 font-semibold transition-colors hover:border-secondary"
        >
          How it works
        </Link>
      </div>
    </section>
  );
}
