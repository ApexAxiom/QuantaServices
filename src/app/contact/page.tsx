import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { faqItems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Quanta Services to discuss workflow automation, operational AI, and advisory engagements for complex operating teams.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Bring the workflow. Quanta will help identify the right AI move."
        description="Use the form below to describe the operational bottleneck, backlog, reporting drag, or AI opportunity you want to explore. A detailed business case is not required."
        pills={[
          "Response within one business day",
          "Private inquiry routing",
          "North America coverage",
        ]}
        aside={
          <div className="page-hero-card">
            <div className="image-frame" style={{ minHeight: "340px" }}>
              <Image
                src="/images/visuals/gold-ribbon-01.png"
                alt="Quanta contact visual"
                fill
                className="cover-image visual-artwork"
                sizes="(max-width: 1100px) 100vw, 38vw"
              />
            </div>
          </div>
        }
      />

      <section className="page-section">
        <div className="container contact-grid">
          <div className="contact-panel">
            <h2>Start the conversation</h2>
            <p className="form-copy">
              Tell Quanta where the process slows down, where your team is
              buried in manual review, or where reporting still depends on too
              many spreadsheets and status meetings.
            </p>
            <ContactForm />
          </div>

          <aside className="contact-aside">
            <h3>What to expect</h3>
            <ul className="contact-list">
              <li>
                <strong>Fast first review</strong>
                Most inquiries get an initial response within one business day.
              </li>
              <li>
                <strong>Distributed delivery</strong>
                Quanta supports leadership, operations, and shared-services
                teams across North America.
              </li>
              <li>
                <strong>Built for workflow clarity</strong>
                A short brief is enough. Quanta can help shape the business case
                after the first conversation.
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="page-section tight">
        <div className="container">
          <SectionHeading
            eyebrow="FAQ"
            title="A few questions teams usually ask before they reach out."
            description="If you already know the workflow you want to improve, the quickest next move is to send the brief and let Quanta shape the first pass."
          />

          <div className="faq-grid">
            {faqItems.map((item) => (
              <article key={item.question} className="faq-card">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
