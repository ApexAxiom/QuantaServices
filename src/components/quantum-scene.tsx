"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
export function QuantumScene() {
    const scene = useRef<HTMLDivElement>(null);
    const [paused, setPaused] = useState(false);
    useEffect(() => {
        const element = scene.current;
        const query = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (!element)
            return;
        const move = (event: PointerEvent) => {
            if (query.matches || paused || event.pointerType !== "mouse")
                return;
            element.style.setProperty("--drift-x", ((event.clientX / window.innerWidth - .5) * 12) + "px");
            element.style.setProperty("--drift-y", ((event.clientY / window.innerHeight - .5) * 8) + "px");
        };
        const reset = () => {
            element.style.setProperty("--drift-x", "0px");
            element.style.setProperty("--drift-y", "0px");
        };
        reset();
        window.addEventListener("pointermove", move, { passive: true });
        query.addEventListener("change", reset);
        return () => {
            window.removeEventListener("pointermove", move);
            query.removeEventListener("change", reset);
        };
    }, [paused]);
    return (<div ref={scene} className={`quantum-scene${paused ? " is-paused" : ""}`}>
      <div className="scene-art">
        <Image src="/images/visuals/quantum-core.webp" alt="" fill priority sizes="100vw" quality={90}/>
        <div className="core-light"/>
        <div className="quantum-particles" aria-hidden="true">
          {Array.from({ length: 12 }, (_, i) => <i key={i} style={{ left: `${43 + (i * 7) % 50}%`, top: `${16 + (i * 13) % 65}%`, animationDelay: `${-i * 1.7}s` }}/>)}
        </div>
      </div>
      <div className="scene-shade"/>
      <button className="motion-control" aria-pressed={paused} onClick={() => setPaused(!paused)}>
        <span aria-hidden="true">{paused ? "▷" : "Ⅱ"}</span> {paused ? "Resume motion" : "Pause motion"}
      </button>
    </div>);
}
export function ScienceDiagram({ variant }: {
    variant: number;
}) {
    return (<svg className={`science-diagram diagram-${variant}`} viewBox="0 0 200 120" fill="none" aria-hidden="true">
      {variant === 0 ? <>
        <ellipse cx="100" cy="60" rx="80" ry="42"/>
        <ellipse cx="100" cy="60" rx="80" ry="42" transform="rotate(60 100 60)"/>
        <ellipse cx="100" cy="60" rx="80" ry="42" transform="rotate(120 100 60)"/>
        <circle cx="100" cy="60" r="7" className="diagram-core"/>
        <circle cx="180" cy="60" r="3" className="orbital-point"/>
      </> : variant === 1 ? <>
        {[0, 1, 2, 3, 4].map(i => <path key={i} d={`M25 ${40 + i * 12} L100 ${12 + i * 12} L175 ${40 + i * 12} L100 ${68 + i * 12} Z`}/>)}
        <path d="M100 12V116 M25 40V88 M175 40V88" strokeDasharray="2 4"/>
      </> : <>
        {Array.from({ length: 12 }, (_, i) => <path key={i} d={`M10 ${84 + i * 2} C45 ${95 - i * 3},60 ${8 + i * 3},100 ${25 + i * 4} S150 ${100 - i * 4},190 ${65 + i * 3}`}/>)}
      </>}
    </svg>);
}
