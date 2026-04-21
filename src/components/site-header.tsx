import Link from "next/link";
import { navLinks } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-shell">
        <Link href="/" className="brand" aria-label="Quanta Services home">
          <span className="brand-wordmark">
            <strong>Quanta</strong>
            <span>Services</span>
          </span>
        </Link>

        <nav className="primary-nav" aria-label="Primary">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="button button-primary header-cta">
          Book a Consultation
        </Link>
      </div>
    </header>
  );
}
