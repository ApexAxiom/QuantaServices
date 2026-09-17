import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
export const metadata: Metadata = { title: "Connect" };

export default function ContactPage() {
  return <>
    <section className="inner-hero">
      <p className="eyebrow">Connect with Quanta</p>
      <h1>A question.<br />An idea.<br />An opportunity.</h1>
      <p>Great research begins with a conversation. Connect with Quanta about scientific questions, research collaborations, and new opportunities.</p>
    </section>
    <section className="content-section contact-grid">
      <div><h2 id="conversation" tabIndex={-1}>Start the conversation.</h2><p className="form-copy">Choose a topic and share your message. Let us know what you are exploring and how we can reach you.</p><ContactForm /></div>
      <aside className="contact-aside">
        <p className="eyebrow">Connect with our team</p>
        <h3>Research collaborations.</h3><p>Share a question, a complementary approach, or an opportunity to work across disciplines.</p>
        <h3>Strategic inquiries.</h3><p>For partnerships, domain inquiries, and other opportunities, choose the relevant topic and send a brief introduction.</p>
        <h3>Your reply address.</h3><p>Use an email address where you can receive a response. A company name and phone number are optional.</p>
      </aside>
    </section>
  </>;
}
