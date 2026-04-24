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
    "Explore Quanta Services offerings across AI strategy, workflow automation, copilots, data readiness, governance, and performance measurement.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="AI advisory and implementation for operational workflows."
        description="Whether you are setting priorities or moving a workflow into production, Quanta helps you make sound decisions, design practical controls, and deliver systems your teams can trust."
        actions={[
          { href: "/contact", label: "Book a Consultation" },
          { href: "/case-studies", label: "See Client Results", variant: "secondary" },
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
            title="Each engagement is scoped around a workflow that matters."
            description="Quanta does not sell generic AI packages. Every engagement is scoped around the decisions, documents, exceptions, and systems that affect throughput, quality, and visibility."
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
            title="Built for environments where decisions carry consequences."
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
              title="What working together looks like."
              description="Quanta helps leaders decide where to move first, then carries the work through pilot delivery, review design, and operator rollout."
            />
            <p className="body-copy">
              Most engagements begin with one workflow that can prove value
              quickly. Once that workflow is stable, the system can expand into
              adjacent queues, roles, or reporting layers that share the same
              signal.
            </p>
            <p className="body-copy">
              The objective is not to replace operators. It is to reduce manual
              drag, improve decision quality, and give leadership clearer
              visibility into how the work is performing.
            </p>
            <Link href="/contact" className="text-link">
              Discuss your priorities
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
            title="Need a clear starting point?"
            description="Quanta can map the workflow, rank the opportunities, and define a rollout plan leadership can approve without overcommitting the organization."
            primary={{ href: "/contact", label: "Book a Consultation" }}
            secondary={{ href: "/case-studies", label: "Review Case Studies" }}
          />
        </div>
      </section>
    </>
  );
}
