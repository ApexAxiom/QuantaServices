import Link from "next/link";
import { QuantumScene, ScienceDiagram } from "@/components/quantum-scene";

const pillars = [
  ["QUANTUM ALGORITHMS", "Transform structure into computational possibility.", "/research#algorithms"],
  ["LOGICAL ARCHITECTURES", "Explore the engineering of reliable quantum depth.", "/research#fault-tolerance"],
  ["SCIENTIFIC DISCOVERY", "Connect quantum methods to consequential questions.", "/research#expansion"],
];

export default function HomePage() {
  return <>
    <section className="quantum-hero" aria-labelledby="hero-title">
      <QuantumScene />
      <div className="hero-copy">
        <p className="eyebrow">Quantum research. Expanding possibility.</p>
        <h1 id="hero-title">Intelligence,<br />beyond possibility.</h1>
        <p className="hero-subtitle">A new dimension of computation.</p>
        <div className="button-row">
          <Link href="#vision" className="button button-primary">Explore Quanta <span>↓</span></Link>
          <Link href="/research" className="button button-secondary">Explore the science <span>↗</span></Link>
        </div>
        <div className="hero-margin-note"><span />COHERENCE.<br />COMPUTATION.<br />DISCOVERY.</div>
      </div>
      <div className="hero-coordinate" aria-hidden="true">MATTER<br />INFORMATION<br />COMPUTATION<br />POSSIBILITY<span /></div>
      <a href="#vision" className="hero-scroll"><span />SCROLL TO EXPLORE ↓</a>
      <span className="hero-caption">EXPLORING THE FRONTIERS OF QUANTUM COMPUTATION.</span>
    </section>
    <section className="pillar-strip" aria-label="Research themes">
      {pillars.map(([label,text,href],i) => <Link href={href} className="pillar" key={label}>
        <div className="pillar-label"><span>0{i+1} /</span>{label}<span className="pillar-arrow">↗</span></div>
        <div className="pillar-body"><ScienceDiagram variant={i} /><p>{text}</p></div>
      </Link>)}
    </section>
    <section className="vision-section section-wrap" id="vision">
      <div className="section-index"><span className="status-dot" />01 / OUR AMBITION</div>
      <div className="vision-content">
        <h2>Beyond the bit.<br /><span>Toward a new frontier.</span></h2>
        <div className="vision-bottom"><p>Quantum computing asks a fundamental question: what becomes computationally accessible when information follows the rules of quantum mechanics? Quanta is built around that question.</p><div><p>Our research direction connects algorithms, error-corrected architectures, and scientific applications. The ambition is to understand where quantum computation can extend the reach of established methods—and what it would take to get there.</p><Link href="/about" className="text-link">Who we are <span>↗</span></Link></div></div>
      </div>
    </section>
    <section className="lab-section section-wrap" id="lab">
      <div className="section-index"><span className="status-dot" />02 / RESEARCH DIRECTIONS</div>
      <div className="lab-heading"><h2>Three frontiers.<br />One connected inquiry.</h2><p>A research agenda spanning mathematical structure, physical reliability, and scientific utility.</p></div>
      <div className="research-rows">
        {[
          ["01", "Structure into algorithms.", "Phase estimation, amplitude amplification, and variational approaches: understand the mechanism before claiming the advantage.", "/research#algorithms", "Algorithmic foundations"],
          ["02", "Noise into knowledge.", "Explore how syndrome information, decoding, and fault-tolerant operations turn fragile physical devices into logical computation.", "/research#fault-tolerance", "Error correction"],
          ["03", "Models into discovery.", "Investigate Hamiltonian simulation, electronic structure, and the resource requirements behind scientifically meaningful calculations.", "/research#expansion", "Scientific applications"],
        ].map(([n,title,copy,href,label]) => <Link href={href} className="research-row" key={n}><span className="row-number">{n}</span><div><span className="eyebrow">{label}</span><h3>{title}</h3></div><p>{copy}</p><span className="row-arrow">↗</span></Link>)}
      </div>
    </section>
    <section className="section-wrap quantum-feature" id="quantum">
      <div className="section-index"><span className="status-dot" />03 / THE SCIENCE</div>
      <div className="lab-heading"><h2>Phase. Interference.<br />A measurable difference.</h2><p>A quantum state is more than a probability distribution. Its complex amplitudes carry relative phase.</p></div>
      <div className="equation">|ψ⟩ = α|0⟩ + β|1⟩ &nbsp; · &nbsp; |α|² + |β|² = 1</div>
      <div className="vision-bottom"><p>A circuit transforms these amplitudes. Interference changes which outcomes become likely. Measurement then returns a classical result. The challenge is to make that result reveal something useful about the problem.</p><div><p>Our technical perspective develops the formalism, examines algorithmic opportunities, and explains the constraints imposed by noise, measurement, and fault-tolerant resource costs.</p><Link href="/research" className="text-link">Read the research perspective ↗</Link></div></div>
    </section>
    <section className="section-wrap">
      <div className="section-index"><span className="status-dot" />04 / RESEARCH CULTURE</div>
      <div className="lab-heading"><h2>Ambitious hypotheses.<br />Inspectable evidence.</h2><p>Four commitments guide the questions we choose and the evidence we value.</p></div>
      <div className="expansion-grid">
        <article><p className="eyebrow">Reproducibility</p><h3>Leave a complete trail.</h3><p>Document the mathematical problem, circuit construction, software environment, and experimental conditions so a result can be independently examined.</p></article>
        <article><p className="eyebrow">Comparability</p><h3>Respect the classical baseline.</h3><p>Evaluate against capable classical methods at matched accuracy. A circuit execution is a starting point; a useful computational advantage requires a fair comparison.</p></article>
        <article><p className="eyebrow">Resource awareness</p><h3>Count the whole computation.</h3><p>Include data preparation, circuit compilation, measurements, error handling, and classical processing when evaluating a quantum method.</p></article>
        <article><p className="eyebrow">Scientific honesty</p><h3>Make uncertainty visible.</h3><p>Distinguish a theoretical result, a simulation, a hardware experiment, and a demonstrated application. Each supports a different kind of conclusion.</p></article>
      </div>
      <Link href="/services" className="text-link">Explore the research program ↗</Link>
    </section>
    <section className="closing-section"><p className="eyebrow">The frontier begins with a question.</p><h2>What lies beyond<br />today’s computation?</h2><Link href="/contact" className="button button-primary">Start a conversation <span>↗</span></Link><div className="closing-orbit" aria-hidden="true" /></section>
  </>;
}
