import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { caseStudies, companyStats } from "@/lib/site-data";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Review representative operational AI engagements across dispatch, finance intake, knowledge systems, and executive reporting.",
};

export default function CaseStudiesPage() {
  const [featured, ...otherStudies] = caseStudies;

  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Representative work showing how operational AI performs when it is deployed with discipline."
        description="Quanta focuses on workflows with visible drag: triage, intake, reporting, knowledge retrieval, and exception-heavy decision chains. These examples illustrate the operating outcomes that follow."
        actions={[
          { href: "/contact", label: "Discuss Your Workflow" },
          { href: "/services", label: "See Service Model", variant: "secondary" },
        ]}
        pills={[
          "Dispatch acceleration",
          "Document automation",
          "Knowledge systems",
          "Executive visibility",
        ]}
        aside={
          <div className="page-hero-card">
            <p className="body-copy">
              Quanta measures success in operator time, decision speed, workload
              reduction, and visibility for leadership.
            </p>
            <div className="metrics-row" style={{ marginTop: "18px" }}>
              {companyStats.slice(0, 3).map((stat) => (
                <span key={stat.label} className="metric-chip">
                  <strong>{stat.value}</strong> {stat.label}
                </span>
              ))}
            </div>
          </div>
        }
      />

      <section className="page-section">
        <div className="container">
          <SectionHeading
            eyebrow="Featured Study"
            title={featured.title}
            description={featured.summary}
          />

          <article className="case-card featured" id={featured.slug}>
            <div className="case-card-media">
              <Image
                src={featured.featuredImage!}
                alt={featured.title}
                fill
                className="cover-image"
                sizes="(max-width: 1100px) 100vw, 46vw"
              />
            </div>

            <div className="case-card-copy">
              <div className="case-meta">
                <span>{featured.industry}</span>
                <span>{featured.timeline}</span>
              </div>
              <p className="body-copy">
                <strong>Challenge:</strong> {featured.challenge}
              </p>
              <p className="body-copy">
                <strong>Solution:</strong> {featured.solution}
              </p>
              <div className="case-results">
                {featured.metrics.map((metric) => (
                  <div key={metric.label} className="case-result">
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                    <p className="body-copy" style={{ marginTop: "8px" }}>
                      {metric.support}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <SectionHeading
            eyebrow="Additional Wins"
            title="Additional examples of immediate operating leverage."
            description="These programs were built around one contained workflow at a time and then expanded once the business case was proven."
          />

          <div className="case-study-grid">
            {otherStudies.map((study) => (
              <article key={study.slug} className="case-card" id={study.slug}>
                <div className="case-card-copy">
                  <div className="case-meta">
                    <span>{study.industry}</span>
                    <span>{study.timeline}</span>
                  </div>
                  <h3>{study.title}</h3>
                  <p className="body-copy">{study.summary}</p>
                  <p className="body-copy">
                    <strong>Challenge:</strong> {study.challenge}
                  </p>
                  <p className="body-copy">
                    <strong>Solution:</strong> {study.solution}
                  </p>
                </div>

                <div className="case-results" style={{ marginTop: "18px" }}>
                  {study.metrics.map((metric) => (
                    <div key={metric.label} className="case-result">
                      <strong>{metric.value}</strong>
                      <span>{metric.label}</span>
                      <p className="body-copy" style={{ marginTop: "8px" }}>
                        {metric.support}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section tight">
        <div className="container">
          <CtaBanner
            eyebrow="Apply This"
            title="Apply the same operating discipline to your own workflow."
            description="If your team has a queue that drags, a reporting cycle that takes too long, or a decision path buried in documents and emails, Quanta can help scope the right AI system around it."
            primary={{ href: "/contact", label: "Talk Through the Workflow" }}
            secondary={{ href: "/services", label: "See Capabilities" }}
          />
        </div>
      </section>
    </>
  );
}
