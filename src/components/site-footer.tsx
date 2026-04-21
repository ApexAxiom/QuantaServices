import Link from "next/link";
import { footerLinkGroups } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-card">
            <h3>Quanta Services</h3>
            <p className="body-copy">
              Chicago-based AI consulting for industrial operators, logistics
              teams, field service leaders, and shared-services groups that need
              real workflow performance.
            </p>
            <ul className="footer-list">
              <li>Built for deployment, not vague AI theater.</li>
              <li>Focused on workflow speed, decision quality, and adoption.</li>
              <li>Serving Chicago and distributed teams across North America.</li>
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
            <span>Chicago, Illinois</span>
            <span>Operational AI consulting</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
