import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Who We Are",
  description: "Meet Quanta: a multidisciplinary research team pursuing the next frontier of quantum computation.",
};
const team = [
  ["Elias Voss", "Research Director · Quantum Systems", "Elias brings the program together around one question: what must a quantum system become before it can answer questions beyond the reach of conventional computation? His focus connects physical behavior, logical reliability, and the demands of the algorithm."],
  ["Mira Sen", "Quantum Algorithms", "Mira works at the intersection of spectral methods, interference, and computational complexity. She investigates how the structure of a scientific problem can be translated into a circuit that reveals something otherwise difficult to calculate."],
  ["Adrian Vale", "Quantum Architecture", "Adrian focuses on the architecture between an elegant algorithm and a dependable computation: logical operations, connectivity, compilation, and the resources required to sustain useful circuit depth."],
  ["Leona Hart", "Quantum Simulation", "Leona studies the questions that make quantum computation scientifically consequential. Her work centers on molecular systems, Hamiltonian models, and the relationship between the accuracy of a calculation and the physics it preserves."],
  ["Julian Mercer", "Research Strategy & Collaboration", "Julian connects long-horizon scientific ambition with a focused research program. He develops collaborations across disciplines and keeps the central question in view: which next experiment will teach us the most?"],
];
export default function AboutPage() {
  return <>
    <section className="inner-hero">
      <p className="eyebrow">Who we are</p>
      <h1>Some questions<br />deserve a different<br />kind of computer.</h1>
      <p>We are Quanta. A research team united by the conviction that the next frontier of computation will be built by understanding nature more deeply.</p>
    </section>
    <section className="content-section">
      <article className="service-entry">
        <h2>At the edge<br />of the calculable.</h2>
        <div><p>There are problems we can describe with extraordinary precision and still cannot calculate at the scale that matters. The behavior of a molecule. The dynamics of an interacting system. The consequences of a vast space of possibilities.</p><p>Quanta exists to explore that boundary. We bring quantum algorithms, computational architecture, and scientific simulation into the same conversation—because progress happens where those disciplines meet.</p></div>
      </article>
      <article className="service-entry">
        <h2>One system.<br />Many disciplines.</h2>
        <div><p>An algorithm cannot be separated from the machine that executes it. A machine cannot be evaluated without the scientific question it serves. Our approach connects both, from the structure of a Hamiltonian to the resources required for a reliable answer.</p><p>We pursue questions with depth, give difficult ideas room to develop, and build a research culture in which a better question can be as valuable as an expected result.</p></div>
      </article>
      <section className="perspectives-section" aria-labelledby="team-title">
        <p className="eyebrow">Our people</p>
        <h2 id="team-title">Five perspectives.<br />One frontier.</h2>
        <p className="perspectives-note">Physics, mathematics, architecture, and scientific imagination. Different ways of thinking, working toward a shared horizon.</p>
        <div className="people-list">
          {team.map(([name,field,bio],i) => <article key={name}><span className="eyebrow">0{i+1}</span><h3>{name}</h3><div><strong>{field}</strong><p>{bio}</p></div></article>)}
        </div>
      </section>
      <article className="service-entry">
        <h2>The next idea<br />may begin with you.</h2>
        <div><p>We welcome conversations with researchers, engineers, and organizations asking difficult computational questions. Bring a problem, a perspective, or an unexpected connection.</p><Link href="/contact#conversation" className="text-link">Connect with Quanta ↗</Link></div>
      </article>
    </section>
  </>;
}
