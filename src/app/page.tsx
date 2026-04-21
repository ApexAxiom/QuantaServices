import Image from "next/image";
import Link from "next/link";
import { CtaBanner } from "@/components/cta-banner";
import { Icon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { caseStudies, heroStats, serviceCards } from "@/lib/site-data";

const clientStrip = [
  "Infrastructure Services",
  "Field Operations",
  "Logistics Networks",
  "Capital Projects",
  "Utilities",
  "Shared Services",
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
              eyebrow="Operational AI Advisory"
              title={"AI for critical workflows.\nBuilt for measurable outcomes."}
              description="If your teams are carrying too much manual work, inconsistent decisions, or reporting delays, Quanta helps you identify the right AI opportunities, design the operating model, and move into production with confidence."
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
              <li>Prioritize the workflows where delay, rework, and manual review cost you most</li>
              <li>Deploy automation and copilots with clear controls, review paths, and accountability</li>
              <li>Give leadership a practical plan backed by measurable business impact</li>
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
                  From strategy through deployment, every engagement is built
                  around the workflows your teams rely on every day.
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
            Relevant across complex operating environments
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
              title={"Advisory that turns AI interest\ninto operating performance."}
              description="You do not need a broad AI program to start seeing results. You need the right workflow, the right controls, and a rollout plan your teams will actually use."
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
              title={"Results leaders can defend.\nSystems teams can use."}
              description="The strongest outcomes come from focused systems aligned to real workflows, clear ownership, and business goals that can be measured."
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
            title="Ready to define the workflow that matters most?"
            description="Quanta can help you identify the highest-value opportunity, define the right review model, and build a rollout plan leadership can support with confidence."
            primary={{ href: "/contact", label: "Book a Consultation" }}
            secondary={{ href: "/services", label: "Review Services" }}
          />
        </div>
      </section>
    </>
  );
}
