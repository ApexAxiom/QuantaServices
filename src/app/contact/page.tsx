import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
export const metadata: Metadata = { title: "Connect" };
export default function ContactPage() {
    return <><section className="inner-hero"><p className="eyebrow">Connect with Quanta</p><h1>Every possibility starts<br />with a conversation.</h1><p>Bring a question, a workflow, or an idea worth exploring. Let’s work out what comes next.</p></section><section className="content-section contact-grid"><div><h2>What are you thinking?</h2><p className="form-copy">Tell us a little about your work and what you would like to make possible.</p><ContactForm /></div><aside className="contact-aside"><p className="eyebrow">A useful starting point</p><h3>The work.</h3><p>What process takes too long, loses information, or makes a decision harder than it needs to be?</p><h3>The possibility.</h3><p>What would a better outcome look like for the people doing that work?</p><h3>The next step.</h3><p>We can use that context to discuss scope, data readiness, and where a focused AI system could help.</p></aside></section></>;
}
