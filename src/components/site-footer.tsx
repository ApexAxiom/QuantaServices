import Link from "next/link";
import { footerLinkGroups } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-card footer-brand-card">
            <Link href="/" className="footer-brand" aria-label="Quanta Services home">
              <span className="brand-wordmark">
                <strong>Quanta</strong>
                <span>Services</span>
              </span>
            </Link>
            <p className="body-copy">
              Operational AI advisory for infrastructure, field service,
              logistics, and shared-services leaders who need measurable
              workflow improvement.
            </p>
            <ul className="footer-list">
              <li>Strategy, workflow design, and production rollout support.</li>
              <li>Focused on decision quality, throughput, and operating trust.</li>
              <li>Supporting distributed teams across North America.</li>
            </ul>
          </div>

          {footerLinkGroups.map((group) => (
            <div key={group.title} className="footer-card">
              <h3>{group.title}</h3>
              <ul className="footer-list">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <span>© 2026 Quanta Services. All rights reserved.</span>
          <span className="site-note">
            <span>North America</span>
            <span>Operational AI advisory</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
