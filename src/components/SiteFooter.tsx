import Link from "next/link";
import { audiences, companyLinks, platforms, services, site, type NavItem } from "@/lib/site";

function Column({ title, items }: { title: string; items: NavItem[] }) {
  return (
    <div>
      <p className="mb-3 text-eyebrow font-medium uppercase tracking-wider text-muted">{title}</p>
      <ul className="space-y-2 text-small text-secondary">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="transition-colors hover:text-mist">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-navy-800">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <Column title="Platforms" items={platforms} />
        <Column title="Services" items={services} />
        <Column title="Who it's for" items={audiences} />
        <Column title="Company" items={companyLinks} />
      </div>
      <div className="mx-auto max-w-6xl px-4 pb-10 text-small text-muted">
        © {new Date().getFullYear()} {site.name}
      </div>
    </footer>
  );
}
