import type { Metadata } from "next";
import Link from "next/link";
import { InterferenceModel } from "@/components/interference-model";

export const metadata: Metadata = {
  title: "Quantum Research | From Hilbert Space to Useful Computation",
  description: "A technical perspective on quantum information, phase estimation, fault tolerance, and evidence-led pathways into quantum computing.",
};
const references = [
  ["IBM Quantum Learning", "Quantum information: state vectors, unitary operations, and measurement.", "https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/single-systems/quantum-information"],
  ["IBM Quantum Learning", "Phase estimation and factoring.", "https://learning.quantum.ibm.com/course/fundamentals-of-quantum-algorithms/phase-estimation-and-factoring"],
  ["IBM Quantum Learning", "Grover’s algorithm and query complexity.", "https://learning.quantum.ibm.com/course/fundamentals-of-quantum-algorithms/grovers-algorithm"],
  ["Cerezo et al. · 2021", "Variational quantum algorithms. Nature Reviews Physics.", "https://arxiv.org/abs/2012.09265"],
  ["Google Quantum AI and Collaborators · 2025", "Quantum error correction below the surface code threshold. Nature.", "https://arxiv.org/abs/2408.13687"],
  ["IBM Quantum Learning", "Fault-tolerant quantum computation.", "https://learning.quantum.ibm.com/course/foundations-of-quantum-error-correction/fault-tolerant-quantum-computation"],
  ["Montanaro · 2015", "Quantum speedup of Monte Carlo methods. Proceedings of the Royal Society A.", "https://arxiv.org/abs/1504.06987"],
  ["Bellonzi et al. · 2024 preprint", "Feasibility of accelerating homogeneous catalyst discovery with fault-tolerant quantum computers.", "https://arxiv.org/abs/2406.06335"],
  ["Kim et al. · 2022", "Fault-tolerant resource estimate for quantum chemical simulations: Li-ion battery electrolyte molecules. Physical Review Research.", "https://arxiv.org/abs/2104.10653"],
];

function Cite({ n }: { n: number }) {
  return <a className="citation" href={references[n - 1][2]} aria-label={"Reference " + n}>[{n}]</a>;
}

export default function ResearchPage() {
  return <>
    <section className="inner-hero research-hero">
      <p className="eyebrow">Quanta / Scientific perspectives / 01</p>
      <h1>Computation at<br />the quantum frontier.</h1>
      <p>From coherent amplitudes to fault-tolerant algorithms: the physical principles, computational opportunities, and engineering constraints behind a different model of computation.</p>
      <p className="research-scope">A technical perspective and proposed expansion agenda. The cited results belong to their respective researchers; this page does not describe a Quanta-operated quantum processor.</p>
    </section>
    <nav className="research-nav" aria-label="Research contents">
      <a href="#formalism">01 / Formalism</a><a href="#algorithms">02 / Algorithms</a><a href="#fault-tolerance">03 / Fault tolerance</a><a href="#expansion">04 / Expansion</a><a href="#references">References ↗</a>
    </nav>
    <div className="research-document">
      <section id="formalism" className="research-chapter">
        <p className="eyebrow">01 / The computational substrate</p>
        <h2>Information encoded in complex amplitudes.</h2>
        <p>An n-qubit pure state is a normalized vector in a 2ⁿ-dimensional complex Hilbert space. Circuit operations act through unitary transformations; computational-basis measurement produces a classical bit string with probability given by the squared modulus of its amplitude.</p>
        <div className="equation">|ψ⟩ = ∑<sub>x ∈ &#123;0,1&#125;ⁿ</sub> α<sub>x</sub>|x⟩ &nbsp; ; &nbsp; ∑<sub>x</sub>|α<sub>x</sub>|² = 1</div>
        <p>The exponential state-space dimension does not expose an exponential table of readable answers. Useful algorithms arrange interference so that a desired global property becomes statistically accessible. Relative phase matters because amplitudes combine before probabilities are formed. <Cite n={1} /></p>
        <p>For a composite pure state, entanglement means that no tensor-product decomposition into subsystem states exists. This gives a circuit access to correlations absent from product-state descriptions, but entanglement by itself does not establish computational advantage. The relevant question is whether the complete computation can be reproduced efficiently by a classical method.</p>
      </section>
      <InterferenceModel />
      <section id="algorithms" className="research-chapter">
        <p className="eyebrow">02 / Algorithmic structure</p>
        <h2>Advantage begins with a problem’s structure.</h2>
        <h3>Spectral estimation and molecular simulation</h3>
        <div className="equation">U|u⟩ = e<sup>2πiθ</sup>|u⟩ &nbsp; ; &nbsp; U(t) = e<sup>−iHt</sup> &nbsp; (ℏ = 1)</div>
        <p>Quantum phase estimation extracts eigenphase information from controlled unitary evolution. For Hamiltonian simulation, eigenphases encode energies, modulo the chosen evolution time. Preparation of a state with sufficient overlap on the target eigenstate, controlled evolution, and the required precision determine the actual resource cost. The same phase-estimation framework underpins order finding in Shor’s factoring algorithm. It is a structured speedup, not a generic accelerator for arbitrary workloads. <Cite n={2} /></p>
        <h3>Amplitude amplification and estimation</h3>
        <p>Grover search uses interference to amplify marked states. With one marked item among N candidates and suitable oracle access, the query count scales as O(√N), compared with Θ(N) classical queries. Oracle construction and data access remain part of the implementation cost. This result does not imply efficient solutions to all combinatorial problems. <Cite n={3} /></p>
        <p>Amplitude estimation can reduce the dependence on target additive error ε from the O(ε⁻²) sampling behavior of bounded-variable classical Monte Carlo to O(ε⁻¹) coherent oracle uses in the ideal setting at fixed success probability. General mean-estimation results require additional assumptions and may introduce logarithmic factors. Reversible sampling, coherent circuit depth, and fault-tolerance overhead can outweigh that query advantage. <Cite n={7} /></p>
        <h3>Variational quantum–classical computation</h3>
        <div className="equation">E(θ) = ⟨ψ(θ)|H|ψ(θ)⟩ &nbsp; ; &nbsp; θ* = arg min<sub>θ</sub> E(θ)</div>
        <p>Variational methods place a parameterized quantum circuit inside a classical optimization loop. VQE estimates an energy objective; QAOA uses alternating cost and mixing operators to construct candidate solutions. Their appeal is adaptable circuit depth. Their difficulty is the coupled burden of shot noise, optimizer behavior, expressive ansatz design, hardware errors, and potentially vanishing gradients. A small-instance demonstration is not evidence of scalable commercial advantage. <Cite n={4} /></p>
      </section>
      <section id="fault-tolerance" className="research-chapter">
        <p className="eyebrow">03 / From physical qubits to logical computation</p>
        <h2>The hard problem is reliable depth.</h2>
        <p>A physical qubit count is not an application-capacity metric. Coherence, gate fidelity, connectivity, leakage, measurement quality, and control latency constrain executable circuits. A noisy device is more generally described by a density operator and a quantum channel than by a single ideal state vector.</p>
        <div className="equation">ρ → ℰ(ρ) = ∑<sub>k</sub> E<sub>k</sub>ρE<sub>k</sub><sup>†</sup> &nbsp; ; &nbsp; ∑<sub>k</sub> E<sub>k</sub><sup>†</sup>E<sub>k</sub> = I</div>
        <p>Error correction encodes logical information across physical qubits and repeatedly measures syndromes to infer errors without directly reading the protected logical state. Fault-tolerant operations must also prevent uncontrolled error propagation. Logical gates, syndrome extraction, decoding, and the preparation of non-Clifford resources contribute to total cost. <Cite n={6} /></p>
        <p>The surface-code experiments reported by Google Quantum AI demonstrated decreasing logical error as code distance increased in a below-threshold regime. This is an important scaling result for a protected quantum memory; it is not equivalent to executing an arbitrary industrial algorithm with a demonstrated economic advantage. <Cite n={5} /></p>
        <p>An application-level resource estimate must specify logical qubits, non-Clifford gate count and depth, code assumptions, physical error rates, and the tolerated probability of computation failure. Architecture-dependent scheduling and magic-state throughput convert these requirements into physical footprint and runtime. Resource estimates for battery-electrolyte chemistry illustrate why algorithm design and hardware architecture must be evaluated together. <Cite n={9} /></p>
      </section>
      <section id="expansion" className="research-chapter">
        <p className="eyebrow">04 / A proposed expansion agenda</p>
        <h2>Build the evidence before scaling the ambition.</h2>
        <p>For Quanta, expansion into quantum computing could begin with reproducible computational research around existing operational questions. The following directions are proposals, rather than announced products or completed experiments.</p>
        <div className="expansion-grid">
          <article><span className="eyebrow">A / Materials & energy</span><h3>Electronic structure.</h3><p>Investigate small active-space Hamiltonians relevant to catalytic reactions or energy materials. Compare quantum estimators against converged classical calculations before extrapolating. Catalyst-discovery research explicitly considers classical hardness, economic utility, and fault-tolerant resource requirements together. <Cite n={8} /></p></article>
          <article><span className="eyebrow">B / Operations research</span><h3>Constrained optimization.</h3><p>Translate a bounded scheduling or allocation problem into a documented cost Hamiltonian. Evaluate whether constraint encodings, penalty scales, and circuit depth preserve useful solutions. Compare solution quality and total elapsed time against strong mixed-integer and heuristic baselines; quantum advantage is an experimental hypothesis.</p></article>
          <article><span className="eyebrow">C / Uncertainty</span><h3>Risk and simulation.</h3><p>Identify an expectation-estimation bottleneck, define a reversible sampling model, and account for its preparation cost. Amplitude estimation becomes a candidate only when the full implementation preserves the theoretical sampling benefit.</p></article>
          <article><span className="eyebrow">D / Hybrid intelligence</span><h3>Scientific orchestration.</h3><p>Use classical AI to help formulate experiments, organize literature, and inspect results. Delegate only a precisely defined subroutine to a quantum backend. A language model interface and a quantum computation remain distinct components with separate validation requirements.</p></article>
        </div>
        <h3>An experimental program with explicit gates.</h3>
        <ol className="research-steps">
          <li><strong>Formalize.</strong> Define the objective, input distribution, observable, accuracy tolerance, and strongest feasible classical comparator.</li>
          <li><strong>Reproduce.</strong> Establish small-system reference results in an exact simulator. Track seeds, circuits, software versions, and uncertainty estimates.</li>
          <li><strong>Characterize.</strong> Introduce noise models, then evaluate bounded experiments on externally provided hardware. Record compiled depth, shot budget, calibration context, and failures.</li>
          <li><strong>Resource.</strong> Estimate logical and physical costs for the target instance, including state preparation, error correction, decoding, and classical processing.</li>
          <li><strong>Decide.</strong> Expand only when a reproducible quality, runtime, or scientific-access benefit justifies the complete cost. Retain the classical approach when it remains superior.</li>
        </ol>
        <Link href="/contact" className="button button-primary">Discuss a research direction ↗</Link>
      </section>
      <section id="references" className="research-chapter references">
        <p className="eyebrow">Primary sources & further study</p>
        <h2>The literature behind the perspective.</h2>
        <ol>{references.map(([author,title,url],i) => <li key={url}><a href={url}><span>{String(i+1).padStart(2,"0")} / {author}</span><strong>{title} ↗</strong></a></li>)}</ol>
      </section>
    </div>
  </>;
}
