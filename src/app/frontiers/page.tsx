import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Scientific Frontiers",
  description: "Explore quantum computation for catalysts, energy materials, corrosion, many-body dynamics, and uncertainty—and the research connecting them.",
};

export default function FrontiersPage() {
  return <>
    <section className="inner-hero">
      <p className="eyebrow">Quanta / Scientific frontiers</p>
      <h1>What if we could<br />ask nature<br />directly?</h1>
      <p>A molecule does not approximate its own quantum mechanics. It lives it. Our ambition is to bring computation closer to that same physical language.</p>
    </section>
    <nav className="research-nav" aria-label="Scientific frontiers">
      <a href="#matter">Matter</a><a href="#energy">Energy</a><a href="#dynamics">Dynamics</a><a href="#uncertainty">Uncertainty</a><a href="#program">Our program ↗</a>
    </nav>
    <div className="research-document">
      <section id="matter" className="research-chapter">
        <p className="eyebrow">01 / The molecular frontier</p>
        <h2>A better catalyst begins with a better description of electrons.</h2>
        <p>Industrial chemistry turns microscopic interactions into consequences at enormous scale. A catalyst changes the pathway of a reaction. Understanding why one candidate works and another does not can depend on subtle differences between electronic states.</p>
        <p>In strongly correlated systems, a single electronic configuration may be an inadequate description. Quantum algorithms offer a route to representing the interacting state directly and extracting its energy through carefully designed measurements. The scientific target is a sufficiently accurate energy difference to distinguish competing mechanisms.</p>
        <div className="equation">H = ∑<sub>pq</sub> h<sub>pq</sub>a<sub>p</sub><sup>†</sup>a<sub>q</sub> + ½ ∑<sub>pqrs</sub> h<sub>pqrs</sub>a<sub>p</sub><sup>†</sup>a<sub>q</sub><sup>†</sup>a<sub>s</sub>a<sub>r</sub></div>
        <p>Here, the one- and two-electron integrals encode a chosen molecular basis; creation and annihilation operators enforce fermionic structure. Mapping this Hamiltonian to qubits is one stage of a larger calculation that includes selecting an active space, preparing a useful state, and controlling approximation error.</p>
        <p>Bellonzi and colleagues examine catalyst-discovery problems related to nitrogen fixation through three connected lenses: scientific value, classical difficulty, and fault-tolerant resources. Their analysis makes the opportunity concrete while showing how strongly feasibility depends on the particular chemical problem.</p>
        <a className="text-link" href="https://arxiv.org/abs/2406.06335">Read the catalyst-discovery resource study ↗</a>
        <h3>The question for Quanta</h3>
        <p>Which molecular models preserve the decisive chemistry while placing the required calculation within a credible quantum resource budget? That is where chemical insight and algorithm design must meet.</p>
      </section>
      <section id="energy" className="research-chapter">
        <p className="eyebrow">02 / Energy & resilient materials</p>
        <h2>Look beneath performance.<br />Understand the mechanism.</h2>
        <p>A battery electrolyte, a protective coating, and a reactive metal surface seem like different engineering problems. At the molecular scale, each depends on how electrons redistribute, bonds change, and competing configurations exchange stability.</p>
        <h3>Battery chemistry</h3>
        <p>Kim and colleagues study fault-tolerant simulations of lithium-ion battery electrolyte molecules. Their resource analysis connects chemistry to the architecture of a photonic quantum computer, including the preparation and consumption of magic states. It illustrates a crucial design opportunity: the way logical operations are scheduled can change the time needed for a calculation.</p>
        <a className="text-link" href="https://arxiv.org/abs/2104.10653">Read the battery-electrolyte resource analysis ↗</a>
        <h3>Corrosion and interfaces</h3>
        <p>Corrosion is a multiscale phenomenon, but its initiation involves atomistic interactions at a surface. A 2026 study in npj Quantum Information develops a quantum-computing workflow and resource analysis for corrosion simulation, addressing the difficulty of correlated electronic behavior. The potential service to engineering is a more faithful account of the mechanisms that ultimately govern material degradation.</p>
        <a className="text-link" href="https://www.nature.com/articles/s41534-025-01171-1">Read the corrosion-simulation study ↗</a>
        <p>For Quanta, the objective is to connect a microscopic calculation to a meaningful engineering decision: which observable changes the interpretation, what accuracy is sufficient, and what new experiment would it motivate?</p>
      </section>
      <section id="dynamics" className="research-chapter">
        <p className="eyebrow">03 / Many-body dynamics</p>
        <h2>Let a quantum system reveal how information moves.</h2>
        <p>Equilibrium energies are only part of the story. Interacting systems evolve: correlations spread, local disturbances propagate, and initially accessible information becomes distributed across many degrees of freedom.</p>
        <div className="equation">W(t) = e<sup>iHt</sup>We<sup>−iHt</sup><br />F(t) = ⟨W<sup>†</sup>(t)V<sup>†</sup>W(t)V⟩</div>
        <p>This out-of-time-order correlator probes how a time-evolved operator relates to another perturbation. It provides a window into information scrambling, linking the mathematics of operator growth to an experimentally accessible signal.</p>
        <p>Google Quantum AI’s 2025 Quantum Echoes work uses forward evolution, a perturbation, and reversed evolution to extract such signals. The team reports a verifiable advantage for a defined family of benchmark circuits and investigates a route toward Hamiltonian learning from nuclear magnetic resonance data. Its significance is the move toward reproducible observables that can encode information about a physical system.</p>
        <a className="text-link" href="https://research.google/blog/a-verifiable-quantum-advantage/">Explore the Quantum Echoes research ↗</a>
        <h3>The question for Quanta</h3>
        <p>Can carefully selected dynamical observables make an otherwise opaque system identifiable? We connect this question to model reconstruction: finding the interactions that best explain an observed response.</p>
      </section>
      <section id="uncertainty" className="research-chapter">
        <p className="eyebrow">04 / Computing with uncertainty</p>
        <h2>Estimate the answer.<br />Change the cost of precision.</h2>
        <p>Many consequential calculations ask for an expectation rather than an exact trajectory: the average behavior of a model, the likelihood of an event, or a quantity accumulated across a distribution of possible outcomes.</p>
        <p>Montanaro’s work on quantum Monte Carlo describes near-quadratic improvements in mean-estimation query complexity under appropriate access and variance assumptions. The key is coherent access to a sampling procedure, enabling interference to extract information more efficiently than independent samples alone.</p>
        <div className="equation">μ = 𝔼[f(X)] &nbsp; · &nbsp; precision ε &nbsp; · &nbsp; confidence 1 − δ</div>
        <p>The opportunity is to change how the cost grows as the requested precision becomes tighter. Realizing it requires an efficient reversible implementation of the model, sufficient coherent depth, and a full accounting of preparation and execution. Our focus is on finding where that complete calculation becomes compelling.</p>
        <a className="text-link" href="https://arxiv.org/abs/1504.06987">Read Quantum speedup of Monte Carlo methods ↗</a>
      </section>
      <section className="research-chapter">
        <p className="eyebrow">05 / The algorithmic engine</p>
        <h2>Engineer the transformation itself.</h2>
        <p>Qubitization and quantum signal processing provide a systematic way to turn an encoded operator into useful spectral transformations. A Hamiltonian can be embedded in a larger unitary operation; carefully chosen control sequences then transform its spectral information.</p>
        <p>Low and Chuang’s qubitization framework establishes strong query-complexity guarantees for Hamiltonian simulation under its oracle-access assumptions. This matters because the cost of simulating evolution is a central ingredient in many energy-estimation algorithms. Efficient operator access, normalization, and the cost of constructing the encoding remain integral to a complete implementation.</p>
        <a className="text-link" href="https://quantum-journal.org/papers/q-2019-07-12-163/">Read Hamiltonian Simulation by Qubitization ↗</a>
      </section>
      <section id="program" className="research-chapter">
        <p className="eyebrow">The Quanta approach</p>
        <h2>From a scientific question<br />to a computational instrument.</h2>
        <div className="expansion-grid">
          <article><span className="eyebrow">01 / Define</span><h3>Find the observable.</h3><p>Identify the quantity that changes scientific understanding. Connect a physical question to a Hamiltonian, an estimator, or a measurable correlation.</p></article>
          <article><span className="eyebrow">02 / Design</span><h3>Build the calculation.</h3><p>Choose a representation, a state-preparation method, and a circuit strategy. Assign accuracy budgets to approximation, evolution, and measurement.</p></article>
          <article><span className="eyebrow">03 / Challenge</span><h3>Push the comparison.</h3><p>Use exact methods where possible, capable classical approximations where necessary, and controlled experiments to understand where each approach succeeds.</p></article>
          <article><span className="eyebrow">04 / Translate</span><h3>Return to the science.</h3><p>Turn the computational result into a sharper hypothesis, a better model, or a new experiment. The measure of progress is what the answer makes possible.</p></article>
        </div>
        <Link href="/contact#conversation" className="button button-primary">Bring us a difficult question ↗</Link>
      </section>
    </div>
  </>;
}
