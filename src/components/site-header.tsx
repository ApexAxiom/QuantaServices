import Link from "next/link";
import { navLinks } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-shell">
        <Link href="/" className="brand" aria-label="Quanta Services home">
          <span className="brand-mark">Q</span>
          <span className="brand-copy">
            <strong>Quanta Services</strong>
            <span>Chicago AI consulting for operators</span>
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
          Book a Strategy Call
        </Link>
      </div>
    </header>
  );
}
