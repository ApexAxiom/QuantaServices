import Link from "next/link";
export function SiteFooter() {
    return <footer className="footer">
    <Link href="/" className="footer-wordmark">QUANTA AI</Link>
    <span>A more curious tomorrow.</span>
    <div><Link href="/about">Who we are</Link><Link href="/frontiers">Frontiers</Link><Link href="/contact">Connect ↗</Link></div>
    <small>© {new Date().getFullYear()} Quanta Services</small>
  </footer>;
}
