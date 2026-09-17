import type { Metadata } from "next";
import Link from "next/link";
import { ScienceDiagram } from "@/components/quantum-scene";
export const metadata: Metadata = { title: "Technology" };
const services = [
    { id: "systems", title: "Connected systems.", label: "01 / DATA FOUNDATIONS", description: "Intelligence begins with context. Bring documents, operational data, and institutional knowledge into a foundation your teams can work with.", points: ["Data and document readiness", "Grounded knowledge retrieval", "Integration with existing workflows"] },
    { id: "intelligence", title: "Applied intelligence.", label: "02 / WORKFLOW & AI", description: "Build around the decisions that matter. From document intake to copilots, focus intelligence on a clear task with a useful, inspectable output.", points: ["Document classification and routing", "AI copilots grounded in your information", "Automation with explicit exception handling"] },
    { id: "people", title: "Human potential.", label: "03 / DESIGN & GOVERNANCE", description: "A system earns trust through the way it behaves. Make human review, escalation, and measurement part of the design from the beginning.", points: ["Human review and approval paths", "Operational monitoring and measurement", "Adoption built around the people doing the work"] },
];
export default function ServicesPage() {
    return <><section className="inner-hero"><p className="eyebrow">The technology</p><h1>Extraordinary thinking.<br />Practical foundations.</h1><p>AI strategy, workflow automation, and knowledge systems. Designed around your work, built with people in the loop.</p></section><section className="content-section">{services.map((s, i) => <article className="service-entry" id={s.id} key={s.id}><div><p className="eyebrow">{s.label}</p><h2>{s.title}</h2><ScienceDiagram variant={i}/></div><div><p>{s.description}</p><ul>{s.points.map(p => <li key={p}>{p}</li>)}</ul><Link className="text-link" href="/contact">Explore this together ↗</Link></div></article>)}</section></>;
}
