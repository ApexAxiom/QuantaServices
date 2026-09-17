import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
export const metadata: Metadata = { title: "Connect" };

export default function ContactPage() {
  return <>
    <section className="inner-hero">
      <p className="eyebrow">Connect with Quanta</p>
      <h1>A question.<br />An idea.<br />An opportunity.</h1>
      <p>Contact the owner about quantum research, a collaboration, or acquiring the QuantaServices.ai domain.</p>
    </section>
    <section className="content-section contact-grid">
      <div><h2>Start the conversation.</h2><p className="form-copy">Choose a topic and share your message. Your contact details let the owner reply directly.</p><ContactForm /></div>
      <aside className="contact-aside">
        <p className="eyebrow">Direct to the owner</p>
        <h3>Domain inquiries.</h3><p>Interested in the website name? Choose “Domain purchase inquiry” and include your proposal or questions.</p>
        <h3>Ideas and introductions.</h3><p>For questions about the research or a potential collaboration, a short introduction is enough.</p>
        <h3>Your reply address.</h3><p>Use an email address where you can receive a response. A company name and phone number are optional.</p>
      </aside>
    </section>
  </>;
}
