import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBanner } from "@/components/cta-banner";
import { Icon } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { industryLanes, processSteps, serviceCards } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Quanta Services offerings across AI strategy, workflow automation, copilots, data readiness, governance, and performance analytics.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Services designed for industrial teams that expect AI to work in production."
        description="Quanta Services combines strategy, workflow design, and execution support so the right work moves first, operators stay involved, and value becomes visible early."
        actions={[
          { href: "/contact", label: "Talk to Quanta" },
          { href: "/case-studies", label: "Review Wins", variant: "secondary" },
        ]}
        pills={[
          "Workflow automation",
          "Grounded copilots",
          "Data readiness",
          "Operational governance",
        ]}
        aside={
          <div className="page-hero-card">
            <div className="image-frame" style={{ minHeight: "340px" }}>
              <Image
                src="/images/visuals/gold-growth-01.png"
                alt="Connected AI platform illustration"
                fill
                className="cover-image visual-artwork"
                sizes="(max-width: 1100px) 100vw, 38vw"
              />
            </div>
          </div>
        }
      />

      <section className="page-section" id="service-pillars">
        <div className="container">
          <SectionHeading
            eyebrow="Service Pillars"
            title="Each engagement is shaped around the workflow, the operator, and the business metric."
            description="Quanta does not sell generic AI packages. Engagements are scoped around the decisions, documents, exceptions, and systems that determine throughput."
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
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section" id="industries">
        <div className="container">
          <SectionHeading
            eyebrow="Industry Fit"
            title="Designed for teams balancing real-world complexity with high decision volume."
            description="Quanta’s delivery model is strongest where workflows span documents, human review, legacy systems, and operating pressure."
          />

          <div className="lane-grid">
            {industryLanes.map((lane) => (
              <article key={lane.title} className="lane-card">
                <span className="card-icon">
                  <Icon name={lane.icon} />
                </span>
                <h3>{lane.title}</h3>
                <p className="body-copy">{lane.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container split-grid">
          <div className="story-panel">
            <SectionHeading
              eyebrow="Engagement Model"
              title="Advisory with execution support."
              description="Quanta helps leadership decide where to move first and then carries the work through pilot delivery, review logic, and operator rollout."
            />
            <p className="body-copy">
              Projects usually start with one narrow workflow that can prove
              value quickly. Once the workflow is stable, Quanta expands the
              system into adjacent queues, roles, or reporting layers that share
              the same signal.
            </p>
            <p className="body-copy">
              The objective is not to replace operators. It is to remove manual
              drag, improve decision quality, and give leadership cleaner
              visibility into how the workflow is performing.
            </p>
            <Link href="/contact" className="text-link">
              Scope an engagement
            </Link>
          </div>

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
      </section>

      <section className="page-section tight">
        <div className="container">
          <CtaBanner
            eyebrow="Planning Session"
            title="Need clarity on the first workflow worth building?"
            description="Quanta can map the signal, rank the opportunities, and define a rollout plan leadership can approve with confidence."
            primary={{ href: "/contact", label: "Book a Consultation" }}
            secondary={{ href: "/case-studies", label: "Review Case Studies" }}
          />
        </div>
      </section>
    </>
  );
}
