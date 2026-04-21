import type { Metadata } from "next";
import Image from "next/image";
import { CtaBanner } from "@/components/cta-banner";
import { Icon } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { teamMembers, testimonials, valuePoints } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Quanta Services, a Chicago-based AI consulting firm focused on operational systems, workflow design, and production rollout.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Quanta"
        title="Built in Chicago for teams that need AI programs grounded in operating reality."
        description="Quanta Services was created to close the gap between AI ambition and operational execution. The firm works with industrial and service organizations that need measurable workflow change, not polished theory."
        actions={[
          { href: "/contact", label: "Meet the Team" },
          { href: "/case-studies", label: "See Results", variant: "secondary" },
        ]}
        pills={[
          "Chicago-based firm",
          "Industrial workflow focus",
          "Operator-first design",
        ]}
        aside={
          <div className="page-hero-card">
            <div className="image-frame" style={{ minHeight: "340px" }}>
              <Image
                src="/images/visuals/quanta-wave.png"
                alt="Quanta AI brand visualization"
                fill
                className="cover-image"
                sizes="(max-width: 1100px) 100vw, 38vw"
              />
            </div>
          </div>
        }
      />

      <section className="page-section">
        <div className="container split-grid">
          <div className="story-panel">
            <SectionHeading
              eyebrow="Firm Story"
              title="Strategy is only useful if it survives contact with the workflow."
              description="Quanta combines operating-model rigor with practical AI implementation planning so teams can move from idea to live system with fewer false starts."
            />
            <p className="body-copy">
              The firm’s point of view is simple: most AI value sits inside the
              small decisions, repetitive reviews, and document-heavy workflows
              that slow businesses down every day.
            </p>
            <p className="body-copy">
              That is why Quanta focuses on field operations, shared services,
              logistics, and leadership workflows where the signal already
              exists, the backlog is real, and the impact can be measured.
            </p>
          </div>

          <div className="story-panel">
            <SectionHeading
              eyebrow="Location"
              title="Chicago roots, distributed delivery."
              description="Quanta is headquartered in Chicago and designed to support operators across regional networks, shared-services centers, and distributed leadership teams."
            />
            <p className="body-copy">
              Chicago is part of the brand: practical, industrial, and focused
              on output. The delivery model is built for teams who want their AI
              initiatives tied to real throughput, response time, and margin
              visibility.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <SectionHeading
            eyebrow="Operating Principles"
            title="A small set of rules that keep delivery credible."
            description="Quanta’s work is shaped by the same principles whether the engagement is a strategy sprint, workflow automation build, or broader operating roadmap."
          />

          <div className="values-grid">
            {valuePoints.map((value) => (
              <article key={value.title} className="value-card">
                <span className="card-icon">
                  <Icon name={value.icon} />
                </span>
                <h3>{value.title}</h3>
                <p>{value.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <SectionHeading
            eyebrow="Leadership Team"
            title="The people behind the delivery model."
            description="Quanta is intentionally senior, operator-aware, and structured to stay close to the workflow from discovery through rollout."
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
            eyebrow="Client Voice"
            title="Quanta is at its best when operating teams start trusting the system."
            description="The strongest feedback comes from teams that feel the workflow change directly in their day-to-day work."
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
            eyebrow="Start With Quanta"
            title="Need an AI partner that can speak to operators and executives in the same room?"
            description="Quanta can help frame the roadmap, pressure-test the workflow, and design an implementation path that works for both the frontline and leadership."
            primary={{ href: "/contact", label: "Contact Quanta" }}
            secondary={{ href: "/services", label: "Review Services" }}
          />
        </div>
      </section>
    </>
  );
}
