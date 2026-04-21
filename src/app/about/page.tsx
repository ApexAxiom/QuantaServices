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
    "Learn how Quanta Services helps operating teams turn AI interest into disciplined execution and measurable workflow improvement.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Quanta"
        title="Built for companies that need AI programs grounded in operating reality."
        description="Quanta Services was created for leadership teams that cannot afford vague pilots, stalled implementations, or disconnected strategy. The firm helps clients turn AI interest into systems that improve real work."
        actions={[
          { href: "/contact", label: "Start a Conversation" },
          { href: "/case-studies", label: "Review Results", variant: "secondary" },
        ]}
        pills={[
          "Senior-led engagement",
          "Operational focus",
          "Measured delivery",
        ]}
        aside={
          <div className="page-hero-card">
            <div className="image-frame" style={{ minHeight: "340px" }}>
              <Image
                src="/images/visuals/gold-orbit-01.png"
                alt="Quanta AI brand visualization"
                fill
                className="cover-image visual-artwork"
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
              description="Clients come to Quanta when the opportunity is clear but the path to execution is not. The work is designed to close that gap without creating more noise."
            />
            <p className="body-copy">
              Most AI value sits inside the small decisions, repetitive reviews,
              and document-heavy workflows that slow businesses down every day.
            </p>
            <p className="body-copy">
              That is why Quanta focuses on field operations, shared services,
              logistics, and leadership workflows where the signal already
              exists, the backlog is real, and the impact can be measured.
            </p>
          </div>

          <div className="story-panel">
            <SectionHeading
              eyebrow="Delivery Model"
              title="Senior advisory, distributed execution."
              description="Quanta supports operators across regional networks, shared-services centers, and leadership teams with a delivery model built for complex organizations."
            />
            <p className="body-copy">
              Clients typically care less about geography and more about whether
              the work improves throughput, response time, and reporting
              clarity. Engagements stay close to the workflow and to the
              leaders accountable for the outcome.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <SectionHeading
            eyebrow="Operating Principles"
            title="Clear principles that keep delivery credible."
            description="These principles shape every engagement, whether the work is a strategy sprint, a workflow automation build, or a broader operating roadmap."
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
            title="The team clients work with directly."
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
            title="What clients value in the work."
            description="The strongest feedback comes from teams that see the workflow improve directly in day-to-day operations."
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
            title="Need a partner that can work with operators and executives in the same room?"
            description="Quanta can help frame the roadmap, pressure-test the workflow, and define an implementation path that works for both frontline teams and leadership."
            primary={{ href: "/contact", label: "Start the Conversation" }}
            secondary={{ href: "/services", label: "Review Services" }}
          />
        </div>
      </section>
    </>
  );
}
