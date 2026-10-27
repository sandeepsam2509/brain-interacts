import Link from "next/link";
import { footerColumns, site } from "@/lib/site";
import { BrandMark } from "./BrandMark";
import { Container, SmartLink } from "./ui";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-navy-900">
      <Container className="grid gap-12 py-16 md:py-20 lg:grid-cols-[1.35fr_repeat(4,1fr)] lg:gap-8">
        <div className="max-w-sm">
          <Link href="/" className="flex items-center gap-2.5 text-xl font-semibold tracking-tight">
            <BrandMark size={24} />
            {site.name}
          </Link>
          <p className="mt-5 text-small text-secondary">
            Brain Interacts is a team analytics and behavioral analysis company. We help enterprises and growing businesses see how
            their people think, decide and work together, and act on it.
          </p>
          <a href={`mailto:${site.email}`} className="mt-6 inline-block text-small text-aqua hover:text-mist">
            {site.email}
          </a>
          <address className="mt-6 not-italic">
            <p className="text-small font-medium">Location</p>
            <p className="mt-1.5 text-small text-secondary">{site.address}</p>
            <p className="mt-5 text-small font-medium">Phone</p>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="mt-1.5 inline-block text-small text-aqua hover:text-mist">
              {site.phone}
            </a>
          </address>
        </div>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:contents">
          {footerColumns.map((col) => (
            <nav key={col.label} aria-label={col.label}>
              <p className="text-small font-medium">{col.label}</p>
              <ul className="mt-4 space-y-3">
                {col.items.map((item) => (
                  <li key={item.href}>
                    <SmartLink href={item.href} className="text-small text-secondary transition-colors hover:text-mist">
                      {item.label}
                    </SmartLink>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </Container>
      <Container>
        <div className="flex flex-col gap-4 border-t border-line py-8 text-small text-secondary sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href={site.privacy} className="hover:text-mist">Privacy Policy</a>
            <a href={site.terms} className="hover:text-mist">Terms of Service</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
