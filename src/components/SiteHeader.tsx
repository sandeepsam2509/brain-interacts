import Link from "next/link";
import { mainNav, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-navy-900/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="font-semibold tracking-tight">
          {site.name}
        </Link>
        <nav className="hidden gap-6 text-small font-medium text-secondary md:flex">
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-mist">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/demo"
          className="rounded-full bg-green px-5 py-2 text-small font-semibold text-navy-900 transition-opacity hover:opacity-90"
        >
          Request a demo
        </Link>
      </div>
    </header>
  );
}
