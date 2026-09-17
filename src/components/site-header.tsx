import Link from "next/link";
export function SiteHeader() {
    return (<header className="site-header">
      <a className="skip-link" href="#main">Skip to content</a>
      <Link href="/" className="brand" aria-label="Quanta AI home">
        <svg viewBox="0 0 36 36" width="30" height="30" fill="none" aria-hidden="true"><path d="M11 3H25L33 11V25L25 33H11L3 25V11Z M21 22L33 34" stroke="currentColor" strokeWidth="3"/></svg>
        <span>QUANTA AI</span>
      </Link>
      <nav className="primary-nav" aria-label="Primary">
        <Link href="/about">Who we are</Link>
        <Link href="/research">Research</Link>
        <Link href="/services">Technology</Link>
        <Link href="/frontiers">Frontiers</Link>
      </nav>
      <Link className="header-connect" href="/contact#conversation">Connect <span aria-hidden="true">↗</span></Link>
    </header>);
}
