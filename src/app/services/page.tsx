import type { Metadata } from "next";
import Link from "next/link";
import { ScienceDiagram } from "@/components/quantum-scene";
export const metadata: Metadata = { title: "Research Program" };

const areas = [
  { id: "systems", title: "Quantum algorithms.", label: "01 / MATHEMATICAL STRUCTURE", description: "Explore the relationship between a problem’s structure and the quantum operations that can expose it. Our focus is on explicit assumptions, precision requirements, and end-to-end computational cost.", questions: ["When does phase estimation offer a useful route to spectral information?", "How much does state preparation change the cost of a proposed speedup?", "Which observables provide useful answers without reconstructing an entire state?"], outcome: "Research objectives: reproducible circuit studies, complexity analyses, and comparisons against classical reference methods.", link: "/research#algorithms" },
  { id: "intelligence", title: "Reliable quantum depth.", label: "02 / LOGICAL ARCHITECTURES", description: "Useful computation requires more than a large register. This direction examines the joint design of logical operations, error correction, decoding, and execution schedules.", questions: ["How do physical error assumptions change the required code distance?", "Where do decoding latency and non-Clifford resources constrain throughput?", "How do connectivity and compilation affect the depth of an application?"], outcome: "Research objectives: transparent resource estimates and architecture-sensitive comparisons, with assumptions separated from measured evidence.", link: "/research#fault-tolerance" },
  { id: "people", title: "Quantum simulation.", label: "03 / SCIENTIFIC APPLICATIONS", description: "Quantum systems are a natural subject for quantum computation. This direction focuses on energy estimation and dynamics, beginning with models that can be checked against established classical calculations.", questions: ["Which active-space models retain the physics needed for a useful answer?", "How should approximation, simulation, and measurement errors share an accuracy budget?", "At what scale does a model become scientifically informative and classically demanding?"], outcome: "Research objectives: benchmark definitions, accuracy studies, and resource maps for selected Hamiltonian problems.", link: "/research#expansion" },
];

export default function ServicesPage() {
  return <>
    <section className="inner-hero"><p className="eyebrow">The research program</p><h1>Explore the limits.<br />Understand what<br />comes next.</h1><p>Algorithms, logical architectures, and quantum simulation: three directions for advancing the reach of computation.</p></section>
    <section className="content-section">
      {areas.map((area,i) => <article className="service-entry" id={area.id} key={area.id}><div><p className="eyebrow">{area.label}</p><h2>{area.title}</h2><ScienceDiagram variant={i} /></div><div><p>{area.description}</p><h3>Questions worth investigating</h3><ul>{area.questions.map(q => <li key={q}>{q}</li>)}</ul><p>{area.outcome}</p><Link href={area.link} className="text-link">Explore the scientific foundations ↗</Link></div></article>)}
      <article className="service-entry"><h2>A staged path<br />to stronger evidence.</h2><div><p>Begin with theory and exact small-system simulation. Establish a classical baseline. Introduce realistic noise assumptions. Then evaluate whether external quantum hardware can answer a precisely defined experimental question.</p><p>Progress is measured in the quality of the evidence: a reproducible result, a tighter bound, a better resource estimate, or a clearer understanding of a method’s limits.</p><Link href="/contact" className="text-link">Discuss a research direction ↗</Link></div></article>
    </section>
  </>;
}
