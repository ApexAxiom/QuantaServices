import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Who We Are" };

const perspectives = [
  ["Elias Voss", "Quantum systems", "How physical principles become computational possibilities."],
  ["Mira Sen", "Quantum algorithms", "How mathematical structure guides computational design."],
  ["Adrian Vale", "Computational architecture", "How individual components become dependable systems."],
  ["Leona Hart", "Scientific exploration", "How a promising question becomes a testable hypothesis."],
  ["Julian Mercer", "Research strategy", "How scientific questions become a coherent research agenda."],
];

export default function AboutPage() {
  return <>
    <section className="inner-hero">
      <p className="eyebrow">Who we are</p>
      <h1>Curiosity.<br />Intelligence.<br />Possibility.</h1>
      <p>Quanta is focused on the scientific frontier of quantum computation: the algorithms, physical principles, and architectures that could make new classes of calculation possible.</p>
    </section>
    <section className="content-section">
      <article className="service-entry">
        <h2>A place for<br />ambitious questions.</h2>
        <div><p>We bring a scientific perspective to an emerging technological frontier: what quantum computers can calculate, how reliable quantum computation can be engineered, and which scientific questions it could help answer.</p><p>Our research perspective connects published science with a forward-looking agenda. We value precise questions, explicit assumptions, and a clear distinction between a compelling hypothesis and a demonstrated result.</p></div>
      </article>
      <section className="perspectives-section" aria-labelledby="perspectives-title">
        <p className="eyebrow">Editorial perspectives</p>
        <h2 id="perspectives-title">Five perspectives.<br />One frontier.</h2>
        <p className="perspectives-note">Five fictional editorial personas represent the perspectives explored here; they are not employee biographies.</p>
        <div className="people-list">
          {perspectives.map(([name,field,idea],i) => <article key={name}><span className="eyebrow">0{i+1}</span><h3>{name}</h3><div><strong>{field}</strong><p>{idea}</p></div></article>)}
        </div>
      </section>
      <article className="service-entry">
        <h2>Make the<br />next connection.</h2>
        <div><p>Have a question about the research, an opportunity to explore, or an interest in acquiring the QuantaServices.ai domain? Send the owner a private inquiry through Connect.</p><Link href="/contact" className="text-link">Contact the owner ↗</Link></div>
      </article>
    </section>
  </>;
}
