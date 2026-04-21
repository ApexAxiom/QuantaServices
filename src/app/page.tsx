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
              title={"Operational clarity.\nMeasured results."}
              description="Quanta helps infrastructure, field service, and industrial leaders design AI systems that reduce backlog, improve decision quality, and move into production with discipline."
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
              <li>Workflow strategy tied to measurable KPIs</li>
              <li>Automation and copilots designed around review paths</li>
              <li>Rollout plans shaped for teams operating under real constraints</li>
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
                  Strategy, workflow design, and deployment structure aligned
                  inside one operating model.
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
            Built for complex operating environments
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
              title={"End-to-end\noperational AI consulting."}
              description="From strategy through workflow design and deployment, Quanta helps organizations turn AI interest into measured operating performance."
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
              title={"Business results.\nOperational discipline."}
              description="The fastest wins come from narrow systems designed around real queues, documents, approvals, and exception paths."
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
            title="Ready to focus on the workflow that matters most?"
            description="Quanta can help define the highest-leverage operating signal, the right review model, and a rollout path leadership can support with confidence."
            primary={{ href: "/contact", label: "Book a Consultation" }}
            secondary={{ href: "/services", label: "Review Services" }}
          />
        </div>
      </section>
    </>
  );
}
