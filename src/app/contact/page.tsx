import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { faqItems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Quanta Services to discuss workflow bottlenecks, automation opportunities, and operational AI priorities.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Book a consultation."
        description="Share the process, backlog, reporting issue, or decision bottleneck you want to improve. Quanta will help determine whether AI is the right lever and what a practical first step could look like."
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
              Tell us where work is getting stuck, where manual review is
              consuming time, or where reporting still depends on spreadsheets
              and status meetings.
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
                A short brief is enough. Quanta can help shape the scope and
                business case during the first conversation.
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="page-section tight">
        <div className="container">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions leadership teams usually ask before reaching out."
            description="If you already know the workflow you want to improve, the fastest next step is to send a brief and let Quanta shape the initial scope."
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
