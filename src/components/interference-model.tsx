"use client";

import { useState } from "react";

export function InterferenceModel() {
  const [phase, setPhase] = useState(90);
  const probabilityZero = Math.cos(phase * Math.PI / 360) ** 2;
  return (
    <section className="interference-model" aria-labelledby="interference-title">
      <div>
        <p className="eyebrow">Analytical model / ideal single qubit</p>
        <h2 id="interference-title">Phase becomes probability.</h2>
        <p>A Hadamard gate prepares a superposition. A Z rotation changes its relative phase. A second Hadamard converts that phase difference into a measurable population difference.</p>
        <div className="equation">|0⟩ → H → R<sub>z</sub>(φ) → H → Measure</div>
        <label htmlFor="phase">Relative phase φ <output htmlFor="phase">{phase}°</output></label>
        <input id="phase" type="range" min="0" max="360" step="1" value={phase} onChange={event => setPhase(Number(event.target.value))} />
      </div>
      <div className="probability-panel" aria-live="polite">
        <p className="eyebrow">Born-rule probabilities</p>
        {[["0", probabilityZero], ["1", 1 - probabilityZero]].map(([state, value]) => (
          <div className="probability-row" key={state}>
            <div><span>|{state}⟩</span><strong>{(Number(value) * 100).toFixed(1)}%</strong></div>
            <div className="probability-track"><span style={{ width: Number(value) * 100 + "%" }} /></div>
          </div>
        ))}
        <p className="equation">P(0) = cos²(φ/2)<br />P(1) = sin²(φ/2)</p>
        <p className="model-note">Ideal-circuit model · Exact Born-rule probabilities. Noise and finite-shot fluctuations are excluded.</p>
      </div>
    </section>
  );
}
