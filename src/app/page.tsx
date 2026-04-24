import Image from "next/image";
import Link from "next/link";
import { CtaBanner } from "@/components/cta-banner";
import { Icon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { caseStudies, heroStats, serviceCards } from "@/lib/site-data";

const clientStrip = [
  "Field Service",
  "Dispatch",
  "Finance Ops",
  "Logistics",
  "Shared Services",
  "Leadership Reporting",
];

const featuredServices = serviceCards.slice(0, 4);
const featuredStudies = caseStudies.slice(0, 3);

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <SectionHeading
              eyebrow="Operational AI Consulting"
              title={"AI systems for complex work.\nBuilt to prove value."}
              description="Quanta helps operations, finance, and field-service leaders turn high-friction workflows into governed AI systems for intake, triage, reporting, knowledge retrieval, and exception handling."
              level="h1"
            />

            <div className="button-row">
              <Link href="/contact" className="button button-primary">
                Book a Consultation
              </Link>
              <Link href="/services" className="button button-secondary">
                Explore Services
              </Link>
            </div>

            <ul className="hero-proof-list">
              <li>Start with one workflow, a baseline, and a business case leaders can inspect</li>
              <li>Design human review, escalation, and fallback paths before rollout</li>
              <li>Move from discovery to pilot with adoption and measurement built in</li>
            </ul>
          </div>

          <div className="hero-stage animate-glow">
            <div className="hero-sculpture">
              <Image
                src="/images/visuals/gold-wave-hero.png"
                alt="Abstract operational systems visualization"
                fill
                className="cover-image visual-artwork hero-art-image"
                priority
                sizes="(max-width: 1100px) 100vw, 48vw"
              />

              <div className="hero-sculpture-copy">
                <span className="eyebrow">Delivery Focus</span>
                <p>
                  From discovery through deployment, every engagement is tied
                  to the work your teams already run every day.
                </p>
              </div>
            </div>

            <div className="hero-panel-grid">
              {heroStats.slice(0, 3).map((stat) => (
                <article key={stat.label} className="stat-card">
                  <p className="stat-value">{stat.value}</p>
                  <p className="stat-label">{stat.label}</p>
                  <p className="stat-detail">{stat.support}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="container trust-band">
          <span className="trust-kicker">
            Built for high-accountability operating environments
          </span>
          <div className="trust-strip">
            {clientStrip.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container capability-layout">
          <div>
            <SectionHeading
              eyebrow="What We Do"
              title={"Turn a high-friction workflow\ninto a governed AI system."}
              description="You do not need a broad AI program to begin. You need the right workflow, the right controls, and a rollout plan your teams can adopt without slowing the business."
            />
            <Link href="/services" className="text-link">
              View all services
            </Link>
          </div>

          <div className="capability-grid">
            {featuredServices.map((service) => (
              <article key={service.title} className="service-card">
                <span className="card-icon">
                  <Icon name={service.icon} />
                </span>
                <h3>{service.title}</h3>
                <p className="body-copy">{service.summary}</p>
                <ul className="card-list">
                  {service.bullets.slice(0, 2).map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="results-heading-row">
            <SectionHeading
              eyebrow="Selected Outcomes"
              title={"Measured improvements,\nnot presentation-only pilots."}
              description="The strongest outcomes come from focused systems aligned to real workflows, named owners, and business goals that can be measured after launch."
            />
            <Link href="/case-studies" className="button button-secondary">
              View All Case Studies
            </Link>
          </div>

          <div className="results-showcase">
            {featuredStudies.map((study, index) => (
              <article
                key={study.slug}
                className={`result-card result-card-${index + 1}`}
              >
                <span className="result-industry">{study.industry}</span>
                <h3>{study.title}</h3>
                <p className="body-copy">{study.summary}</p>
                <div className="result-metric">
                  <strong>{study.metrics[0].value}</strong>
                  <span>{study.metrics[0].label}</span>
                </div>
                <Link href={`/case-studies#${study.slug}`} className="service-cta">
                  View case study
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section tight">
        <div className="container">
          <CtaBanner
            eyebrow="Next Step"
            title="Ready to choose the right first workflow?"
            description="Quanta can help identify the strongest opportunity, define the review model, and build a rollout plan leadership can support with confidence."
            primary={{ href: "/contact", label: "Book a Consultation" }}
            secondary={{ href: "/services", label: "Review Services" }}
          />
        </div>
      </section>
    </>
  );
}
