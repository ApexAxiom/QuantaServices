import Link from "next/link";
import { QuantumScene, ScienceDiagram } from "@/components/quantum-scene";
const pillars = [
    { label: "CONNECTED SYSTEMS", text: "Bring your data, decisions, and workflows into orbit.", href: "/services#systems" },
    { label: "APPLIED INTELLIGENCE", text: "Turn complex information into a clearer next move.", href: "/services#intelligence" },
    { label: "HUMAN POTENTIAL", text: "Give people more space for the work that matters.", href: "/services#people" },
];
export default function HomePage() {
    return <>
    <section className="quantum-hero" aria-labelledby="hero-title">
      <QuantumScene />
      <div className="hero-copy">
        <p className="eyebrow">Quantum-inspired. Human-driven.</p>
        <h1 id="hero-title">Intelligence,<br />beyond possibility.</h1>
        <p className="hero-subtitle">A new dimension of intelligence.</p>
        <div className="button-row">
          <Link href="#vision" className="button button-primary">Explore Quanta <span>↓</span></Link>
          <Link href="#lab" className="button button-secondary">Enter the Lab <span>↗</span></Link>
        </div>
        <div className="hero-margin-note"><span />BIG QUESTIONS.<br />NEW PERSPECTIVES.<br />HUMAN PROGRESS.</div>
      </div>
      <div className="hero-coordinate" aria-hidden="true">MATTER<br />INFORMATION<br />INTELLIGENCE<br />HUMANITY<span /></div>
      <a href="#vision" className="hero-scroll"><span />SCROLL TO EXPLORE ↓</a>
      <span className="hero-caption">THE FUTURE IS A FIELD OF POSSIBILITIES.</span>
    </section>
    <section className="pillar-strip" aria-label="Areas of focus">
      {pillars.map((p, i) => <Link href={p.href} className="pillar" key={p.label}>
        <div className="pillar-label"><span>0{i + 1} /</span>{p.label}<span className="pillar-arrow">↗</span></div>
        <div className="pillar-body"><ScienceDiagram variant={i}/><p>{p.text}</p></div>
      </Link>)}
    </section>
    <section className="vision-section section-wrap" id="vision">
      <div className="section-index"><span className="status-dot"/>01 / THE VISION</div>
      <div className="vision-content">
        <h2>Think beyond.<br /><span>Build what comes next.</span></h2>
        <div className="vision-bottom"><p>The most powerful technology starts with a human question. What if work could flow more freely? What if the right answer was already within reach?</p><div><p>Quanta connects ambitious thinking with practical AI. We help turn scattered information and complex workflows into systems people can actually use.</p><Link href="/about" className="text-link">Meet the thinking behind Quanta <span>↗</span></Link></div></div>
      </div>
    </section>
    <section className="lab-section section-wrap" id="lab">
      <div className="section-index"><span className="status-dot"/>02 / THE LAB</div>
      <div className="lab-heading"><h2>From possibility<br />to something real.</h2><p>A closer look at the building blocks of applied intelligence. Explore how the pieces fit together.</p></div>
      <div className="research-rows">
        {[
            ["01", "Connect the knowledge.", "Make documents, operating context, and institutional knowledge easier to find and use.", "/services#systems", "Data foundations"],
            ["02", "Shape the intelligence.", "Build grounded AI copilots and workflow automation around real decisions.", "/services#intelligence", "Applied AI"],
            ["03", "Keep people at the center.", "Design review, escalation, and measurement into the way the system works.", "/services#people", "Human oversight"],
        ].map(([n, title, copy, href, label]) => <Link href={href} className="research-row" key={n}><span className="row-number">{n}</span><div><span className="eyebrow">{label}</span><h3>{title}</h3></div><p>{copy}</p><span className="row-arrow">↗</span></Link>)}
      </div>
    </section>
    <section className="section-wrap quantum-feature" id="quantum">
      <div className="section-index"><span className="status-dot" />03 / QUANTUM RESEARCH</div>
      <div className="lab-heading"><h2>A different substrate.<br />A deeper computation.</h2><p>Explore the mathematics and engineering that connect quantum information to computational possibility.</p></div>
      <div className="equation">|ψ⟩ = α|0⟩ + β|1⟩ &nbsp; · &nbsp; |α|² + |β|² = 1</div>
      <div className="vision-bottom"><p>Coherent amplitudes. Controlled interference. Logical qubits. Quantum computing changes how a problem can be represented and transformed—and demands a rigorous account of what can be measured.</p><div><p>Our technical perspective examines phase estimation, variational algorithms, fault tolerance, and proposed expansion paths in materials, optimization, and hybrid intelligence.</p><Link href="/research" className="text-link">Explore the quantum research perspective ↗</Link></div></div>
    </section>
    <section className="closing-section"><p className="eyebrow">The next chapter starts with a question.</p><h2>What could<br />you make possible?</h2><Link href="/contact" className="button button-primary">Let’s find out <span>↗</span></Link><div className="closing-orbit" aria-hidden="true"/></section>
  </>;
}
