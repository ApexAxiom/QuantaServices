import Image from "next/image";
import Link from "next/link";
import { CtaBanner } from "@/components/cta-banner";
import { Icon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import {
  caseStudies,
  companyStats,
  heroStats,
  processSteps,
  serviceCards,
  teamMembers,
  testimonials,
} from "@/lib/site-data";

const featuredCase = caseStudies[0];

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <SectionHeading
              eyebrow="Chicago AI Consulting"
              title="Operational AI that clears backlog, sharpens decisions, and compounds margin."
              description="Quanta Services helps industrial operators deploy AI across field workflows, shared services, and leadership reporting. We focus on the signal already inside your business and build systems your team can actually run."
              level="h1"
            />
            <div className="button-row">
              <Link href="/contact" className="button button-primary">
                Book a Strategy Call
              </Link>
              <Link href="/case-studies" className="button button-secondary">
                See Client Wins
              </Link>
            </div>
            <ul className="hero-proof-list">
              <li>Field dispatch and work-order triage</li>
              <li>Shared-services automation and intake</li>
              <li>Grounded copilots for operators and analysts</li>
              <li>Leadership reporting with same-day visibility</li>
            </ul>
          </div>

          <div className="hero-panel animate-glow">
            <div className="hero-visual-main">
              <Image
                src="/images/visuals/pipeline-growth.png"
                alt="Operational AI pipeline visualization"
                fill
                className="cover-image"
                priority
                sizes="(max-width: 1100px) 100vw, 48vw"
              />
            </div>

            <div className="hero-panel-grid">
              {heroStats.map((stat) => (
                <article key={stat.label} className="stat-card animate-float">
                  <p className="stat-value">{stat.value}</p>
                  <p className="stat-label">{stat.label}</p>
                  <p className="stat-detail">{stat.support}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-section tight">
        <div className="container story-grid">
          <div>
            <SectionHeading
              eyebrow="Why Quanta"
              title="Start where the signal is strongest and the payoff is measurable."
              description="Big AI programs usually stall because the workflow, data, and operator reality never get aligned. Quanta starts with the smallest useful unit of work and turns it into a production-ready system."
            />
            <div className="story-panel">
              <p className="body-copy">
                The firm is built for industrial teams that do not need more
                vague AI language. They need faster decisions, fewer manual
                touches, tighter exception handling, and reporting leadership can
                trust.
              </p>
              <p className="body-copy">
                Quanta works across operations, finance, service, and executive
                workflows to surface where AI should classify, recommend, route,
                summarize, or draft, and where humans should retain final
                control.
              </p>
              <div className="pill-row" style={{ marginTop: "20px" }}>
                <span className="pill">
                  <strong>Chicago-based</strong>
                </span>
                <span className="pill">
                  <strong>Industrial ops focus</strong>
                </span>
                <span className="pill">
                  <strong>Deployment-minded</strong>
                </span>
              </div>
            </div>
          </div>

          <div className="metric-grid">
            {companyStats.map((stat) => (
              <article key={stat.label} className="metric-card">
                <p className="metric-value">{stat.value}</p>
                <p className="metric-label">{stat.label}</p>
                <p className="metric-support">{stat.support}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section" id="service-pillars">
        <div className="container">
          <SectionHeading
            eyebrow="Capabilities"
            title="A consulting model built around real workflows."
            description="Quanta blends strategy, implementation design, and operational rollout support so AI programs move from idea to measured output without losing the operator."
          />

          <div className="service-grid">
            {serviceCards.map((service) => (
              <article key={service.title} className="service-card">
                <span className="card-icon">
                  <Icon name={service.icon} />
                </span>
                <h3>{service.title}</h3>
                <p className="body-copy">{service.summary}</p>
                <ul className="card-list">
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <Link href="/services" className="service-cta">
                  {service.ctaLabel}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container process-grid">
          <div className="process-visual">
            <Image
              src="/images/visuals/intelligence-brain.png"
              alt="AI intelligence and analytics visualization"
              fill
              className="cover-image"
              sizes="(max-width: 1100px) 100vw, 42vw"
            />
            <div className="process-visual-copy">
              <span className="eyebrow">How Quanta Works</span>
              <p className="body-copy">
                The operating model is simple: identify the decisions that slow
                the business down, build the narrowest useful AI system around
                them, and expand only after the workflow proves itself.
              </p>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Delivery Model"
              title="A practical four-step path from signal to scale."
              description="Quanta avoids sprawling AI programs by treating workflow design, governance, and measurement as part of the same system."
            />

            <div className="timeline">
              {processSteps.map((step, index) => (
                <article key={step.title} className="timeline-step">
                  <strong>{String(index + 1).padStart(2, "0")}</strong>
                  <div>
                    <h3>{step.title}</h3>
                    <p className="body-copy">{step.summary}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <SectionHeading
            eyebrow="Featured Win"
            title="Proof that a tightly scoped AI system can move the whole operation."
            description="Quanta’s best results come from improving the workflows operators touch every day and measuring the business impact immediately."
          />

          <article className="feature-band">
            <div className="image-frame">
              <Image
                src={featuredCase.featuredImage!}
                alt="Industrial logistics and operations case study"
                fill
                className="cover-image"
                sizes="(max-width: 1100px) 100vw, 50vw"
              />
            </div>

            <div className="feature-copy">
              <span className="eyebrow">{featuredCase.industry}</span>
              <h2>{featuredCase.title}</h2>
              <p className="body-copy">{featuredCase.summary}</p>
              <p className="body-copy">
                <strong>Challenge:</strong> {featuredCase.challenge}
              </p>
              <p className="body-copy">
                <strong>Solution:</strong> {featuredCase.solution}
              </p>
              <div className="metrics-row">
                {featuredCase.metrics.map((metric) => (
                  <span key={metric.label} className="metric-chip">
                    <strong>{metric.value}</strong> {metric.label}
                  </span>
                ))}
              </div>
              <Link href="/case-studies" className="text-link">
                Explore more case studies
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <SectionHeading
            eyebrow="Leadership"
            title="A team that designs around operators, not just systems."
            description="Quanta combines operating-model strategy, delivery execution, and applied AI design so programs move cleanly from concept to frontline use."
          />

          <div className="team-grid">
            {teamMembers.map((member) => (
              <article key={member.name} className="team-card">
                <div className="team-media">
                  <Image
                    src={member.headshot}
                    alt={member.name}
                    fill
                    className="cover-image"
                    sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 30vw"
                  />
                </div>
                <div>
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.title}</p>
                  <p className="body-copy" style={{ marginTop: "12px" }}>
                    {member.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section tight">
        <div className="container">
          <SectionHeading
            eyebrow="Client Perspective"
            title="What operating leaders say when the system starts working."
            description="The strongest validation is when teams stop talking about AI as a concept and start relying on it inside the workflow."
          />

          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <article key={testimonial.author} className="testimonial-card">
                <blockquote>“{testimonial.quote}”</blockquote>
                <cite>
                  {testimonial.author}
                  <br />
                  {testimonial.role}
                </cite>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section tight">
        <div className="container">
          <CtaBanner
            eyebrow="Next Move"
            title="Turn a workflow bottleneck into a measurable AI win."
            description="If your team is stuck between AI interest and actual deployment, Quanta can identify the right operating signal, define the workflow, and design a rollout path that leadership and operators both trust."
            primary={{ href: "/contact", label: "Start the Conversation" }}
            secondary={{ href: "/services", label: "See the Service Model" }}
          />
        </div>
      </section>
    </>
  );
}
