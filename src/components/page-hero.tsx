import Link from "next/link";
import type { ReactNode } from "react";
import { SectionHeading } from "@/components/section-heading";

type Action = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: Action[];
  pills?: string[];
  aside?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  actions = [],
  pills = [],
  aside,
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container page-hero-grid">
        <div>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
            level="h1"
          />

          {(actions.length > 0 || pills.length > 0) && (
            <>
              {actions.length > 0 && (
                <div className="button-row">
                  {actions.map((action) => (
                    <Link
                      key={action.href + action.label}
                      href={action.href}
                      className={`button ${
                        action.variant === "secondary"
                          ? "button-secondary"
                          : "button-primary"
                      }`}
                    >
                      {action.label}
                    </Link>
                  ))}
                </div>
              )}

              {pills.length > 0 && (
                <div className="pill-row" style={{ marginTop: "20px" }}>
                  {pills.map((pill) => (
                    <span key={pill} className="pill">
                      {pill}
                    </span>
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        {aside ? <div className="page-hero-aside">{aside}</div> : null}
      </div>
    </section>
  );
}
