export type IconName =
  | "signal"
  | "workflow"
  | "copilot"
  | "database"
  | "shield"
  | "chart"
  | "map"
  | "clock"
  | "layers"
  | "spark";

export type ServiceCard = {
  title: string;
  summary: string;
  bullets: string[];
  icon: IconName;
  ctaLabel: string;
};

export type Stat = {
  value: string;
  label: string;
  support: string;
};

export type ProcessStep = {
  title: string;
  summary: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  summary: string;
  timeline: string;
  metrics: Stat[];
  featuredImage?: string;
};

export type TeamMember = {
  name: string;
  title: string;
  bio: string;
  headshot: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const heroStats: Stat[] = [
  {
    value: "91%",
    label: "priority workflow signal captured",
    support: "We map the operators, documents, systems, and exceptions that shape real decisions.",
  },
  {
    value: "34%",
    label: "average cycle-time improvement",
    support: "Most gains come from removing small operational bottlenecks that compound into speed and margin.",
  },
  {
    value: "8.5 wks",
    label: "median pilot launch window",
    support: "Quanta scopes for deployment rather than demonstration, so teams reach production faster.",
  },
  {
    value: "+28%",
    label: "reporting visibility lift",
    support: "Executives get decision-ready metrics without the usual spreadsheet lag.",
  },
];

export const companyStats: Stat[] = [
  {
    value: "37%",
    label: "faster triage on document-heavy workflows",
    support: "From invoice intake to field-ticket review, teams stop waiting on manual sorting.",
  },
  {
    value: "11k+",
    label: "manual hours removed annually in active programs",
    support: "We target the repetitive handoffs that stall operators, analysts, and coordinators.",
  },
  {
    value: "93%",
    label: "operator adoption on successful rollouts",
    support: "Human-in-the-loop design keeps trust high and exception handling explicit.",
  },
  {
    value: "4-12 wks",
    label: "typical time to live pilot or measured expansion",
    support: "Programs start small, prove value quickly, and scale only once the workflow is stable.",
  },
];

export const serviceCards: ServiceCard[] = [
  {
    title: "Operational AI Strategy",
    summary:
      "Translate executive AI priorities into a ranked portfolio of workflows, decisions, and systems worth addressing first.",
    bullets: [
      "Signal mapping across field, finance, service, and reporting teams",
      "Use-case prioritization by speed-to-value and operational risk",
      "Pilot roadmap with staffing, governance, and integration implications",
    ],
    icon: "signal",
    ctaLabel: "Define the right first moves",
  },
  {
    title: "Workflow Automation",
    summary:
      "Automate high-friction processes such as intake, routing, classification, approvals, and exception handling.",
    bullets: [
      "Document and inbox processing with human review paths",
      "Cross-system orchestration for ERP, CRM, and operations data",
      "Escalation logic that keeps supervisors in control",
    ],
    icon: "workflow",
    ctaLabel: "Remove repeated manual work",
  },
  {
    title: "AI Copilots",
    summary:
      "Deploy role-specific copilots for dispatch, shared services, account teams, and operating leaders who need faster answers.",
    bullets: [
      "Grounded search over SOPs, notes, forms, and historical cases",
      "Decision support with recommended next steps and rationale",
      "Adoption design that fits operator workflows instead of replacing them",
    ],
    icon: "copilot",
    ctaLabel: "Give teams better decisions",
  },
  {
    title: "Data Foundations",
    summary:
      "Prepare fragmented operational data for trustworthy AI systems without forcing a full re-platforming effort.",
    bullets: [
      "Data readiness audits for unstructured and semi-structured inputs",
      "Lightweight pipelines for retrieval, monitoring, and reporting",
      "Measurement models tied to cycle time, throughput, and margin",
    ],
    icon: "database",
    ctaLabel: "Make the data usable",
  },
  {
    title: "Governance & Rollout",
    summary:
      "Establish guardrails, review flows, and adoption plans that make AI systems credible in production.",
    bullets: [
      "Human-in-the-loop controls for sensitive decisions and exceptions",
      "Quality monitoring, fallback paths, and escalation thresholds",
      "Enablement for operators, managers, and process owners",
    ],
    icon: "shield",
    ctaLabel: "Deploy with guardrails",
  },
  {
    title: "Performance Analytics",
    summary:
      "Show where the system is helping, where it is drifting, and which workflows warrant expansion next.",
    bullets: [
      "Outcome dashboards for speed, workload, quality, and savings",
      "Continuous tuning based on real production feedback",
      "Executive reporting that links automation to business outcomes",
    ],
    icon: "chart",
    ctaLabel: "Track compounded gains",
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Discover the operating signal",
    summary:
      "We interview frontline and back-office teams, inspect the systems they rely on, and trace where latency, rework, or manual effort accumulates.",
  },
  {
    title: "Design the workflow around decisions",
    summary:
      "We define where AI should classify, summarize, recommend, or draft, and where a human should review, approve, or intervene.",
  },
  {
    title: "Deploy in the real environment",
    summary:
      "Pilots launch inside the tools teams already use, with measurable success criteria, exception paths, and operating visibility from day one.",
  },
  {
    title: "Optimize what compounds",
    summary:
      "Once a workflow is stable, we tune prompts, retrieval, logic, and reporting to grow throughput and trust over time.",
  },
];

export const industryLanes = [
  {
    title: "Field Service & Dispatch",
    summary:
      "Dispatch, work-order triage, service coordination, technician enablement, and exception management.",
    icon: "map" as const,
  },
  {
    title: "Logistics & Network Operations",
    summary:
      "Document intake, ETA visibility, issue routing, operational reporting, and multi-system coordination.",
    icon: "layers" as const,
  },
  {
    title: "Shared Services & Finance",
    summary:
      "Invoice capture, statement reconciliation, ticket handling, close support, and knowledge-intensive review work.",
    icon: "clock" as const,
  },
  {
    title: "Operating Leadership",
    summary:
      "Decision dashboards, narrative reporting, margin visibility, and AI governance for scale-up and enterprise teams.",
    icon: "chart" as const,
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "dispatch-command-center",
    title: "Dispatch Command Center AI",
    industry: "Utility field services",
    challenge:
      "Schedulers were juggling work orders, crew notes, outage updates, and customer emails across multiple systems before they could assign work.",
    solution:
      "Quanta built an AI-assisted dispatch workspace that classified urgency, summarized job context, recommended next actions, and routed exceptions into a supervisor queue.",
    summary:
      "Morning triage compressed from a two-hour scramble into a guided review flow that surfaced the right jobs, the right notes, and the right escalation logic in one place.",
    timeline: "6 weeks to pilot, 12 weeks to regional rollout",
    featuredImage: "/images/case-studies/port-operations.png",
    metrics: [
      {
        value: "32%",
        label: "faster dispatch decisions",
        support: "Schedulers processed more priority jobs before crews rolled out.",
      },
      {
        value: "18%",
        label: "more weekly jobs completed",
        support: "Better triage reduced idle time and rework across crews.",
      },
      {
        value: "84%",
        label: "less manual note scanning",
        support: "AI summaries surfaced context from past jobs and emails instantly.",
      },
    ],
  },
  {
    slug: "invoice-intake",
    title: "Invoice Intake and Exception Handling",
    industry: "Industrial distribution",
    challenge:
      "AP analysts were manually classifying invoices, matching supporting documents, and chasing exceptions across email chains and shared drives.",
    solution:
      "Quanta implemented a document pipeline that extracted fields, matched supporting records, flagged risk conditions, and staged exceptions for quick human review.",
    summary:
      "The team moved from inbox triage to exception-based review, which made the finance queue smaller, cleaner, and much faster to close.",
    timeline: "4 weeks to pilot, 9 weeks to expanded rollout",
    metrics: [
      {
        value: "74%",
        label: "touchless first-pass classification",
        support: "Only true mismatches and edge cases reached analysts.",
      },
      {
        value: "4 days",
        label: "reduction in close-cycle lag",
        support: "Less backlog meant fewer late surprises during month-end.",
      },
      {
        value: "6,200",
        label: "annual analyst hours recovered",
        support: "Time moved back into vendor issues and higher-value finance work.",
      },
    ],
  },
  {
    slug: "knowledge-assistant",
    title: "Technician Knowledge Assistant",
    industry: "Infrastructure services",
    challenge:
      "Supervisors and technicians were losing time searching PDFs, old tickets, and tribal knowledge before they could act on new jobs.",
    solution:
      "Quanta deployed a grounded knowledge assistant that answered role-specific questions, linked back to source materials, and suggested next steps for common scenarios.",
    summary:
      "The assistant shortened lookup time and accelerated onboarding without removing supervisors from the loop on sensitive decisions.",
    timeline: "5 weeks to pilot, 60 days to broad adoption",
    metrics: [
      {
        value: "41%",
        label: "faster answer retrieval",
        support: "Technicians got job-relevant guidance without searching multiple repositories.",
      },
      {
        value: "23%",
        label: "faster onboarding ramp",
        support: "New hires could navigate procedures with less shadow time.",
      },
      {
        value: "89%",
        label: "active usage after 60 days",
        support: "Trust stayed high because answers remained sourced and reviewable.",
      },
    ],
  },
  {
    slug: "reporting-acceleration",
    title: "Executive Reporting Acceleration",
    industry: "Logistics network operator",
    challenge:
      "Leadership reporting depended on spreadsheets, slide assembly, and last-minute reconciliation before weekly operating reviews.",
    solution:
      "Quanta automated the collection, summarization, and narrative packaging of operating metrics into a decision-ready reporting rhythm with exception flags.",
    summary:
      "Reporting shifted from manual deck production to same-day visibility, which gave leaders time to act instead of just assemble updates.",
    timeline: "3 weeks to proof of value, 8 weeks to recurring reporting flow",
    metrics: [
      {
        value: "90%",
        label: "less manual deck preparation",
        support: "Teams stopped rebuilding the same reports every cycle.",
      },
      {
        value: "Same day",
        label: "decision visibility on operating metrics",
        support: "Leadership saw material changes without waiting until the end of the week.",
      },
      {
        value: "2.4x",
        label: "faster executive follow-up cycles",
        support: "Managers spent more time on action and less on assembly.",
      },
    ],
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Claire Bennett",
    title: "Founder & Managing Partner",
    bio: "Claire leads Quanta’s operating model work and specializes in turning messy frontline workflows into measurable AI programs that leadership can actually trust.",
    headshot: "/images/team/claire-bennett.png",
  },
  {
    name: "Mei Park",
    title: "Vice President, Delivery Systems",
    bio: "Mei designs production rollout plans across service, finance, and shared-services teams with a focus on operator adoption, review loops, and steady execution.",
    headshot: "/images/team/mei-park.png",
  },
  {
    name: "Arjun Patel",
    title: "Director, Applied Intelligence",
    bio: "Arjun builds decision support systems, knowledge copilots, and retrieval workflows that keep AI grounded in real operating data and source material.",
    headshot: "/images/team/arjun-patel.png",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Quanta did not hand us a strategy deck and disappear. They built the workflow with our dispatch leads, measured it weekly, and proved value fast.",
    author: "Jordan Ellis",
    role: "COO, regional service network",
  },
  {
    quote:
      "Their team understood the difference between a flashy pilot and a finance process we could actually rely on at close. That discipline mattered.",
    author: "Naomi Reyes",
    role: "VP Shared Services, industrial distributor",
  },
  {
    quote:
      "The AI assistant worked because it respected the operator. Every answer was grounded, reviewable, and tied back to how our teams really work.",
    author: "Devin Hart",
    role: "SVP Operations, infrastructure contractor",
  },
];

export const valuePoints = [
  {
    title: "Operational empathy",
    summary:
      "We design for dispatchers, coordinators, analysts, and leaders working within real constraints rather than idealized process maps.",
    icon: "layers" as const,
  },
  {
    title: "Metrics before hype",
    summary:
      "Every engagement starts with cycle time, throughput, accuracy, margin visibility, or workload reduction goals that operators can verify.",
    icon: "chart" as const,
  },
  {
    title: "Guardrails by default",
    summary:
      "Sensitive workflows keep explicit review paths, exception thresholds, and fallback modes instead of trusting black-box automation.",
    icon: "shield" as const,
  },
  {
    title: "Built for compounding gains",
    summary:
      "We start with contained workflows and expand only when the signal, governance, and adoption pattern are strong enough to scale.",
    icon: "spark" as const,
  },
];

export const faqItems: FAQItem[] = [
  {
    question: "How quickly can Quanta launch a meaningful pilot?",
    answer:
      "Most pilots launch within four to eight weeks when the target workflow is specific, the review path is clear, and the required systems are accessible.",
  },
  {
    question: "Do you work with the tools a team already has?",
    answer:
      "Yes. Quanta is built for environments that already run on ERP, CRM, ticketing, shared drives, email, and operational reporting systems. We shape around the stack instead of demanding a rebuild.",
  },
  {
    question: "Do you only advise, or do you also implement?",
    answer:
      "Both. Quanta can define the roadmap, but the firm is structured to carry projects through deployment, measurement, and adoption rather than stopping at strategy.",
  },
  {
    question: "What kinds of teams are the best fit?",
    answer:
      "Industrial operators, field service groups, logistics teams, and shared-services functions with repetitive handoffs, document-heavy processes, or slow decision cycles.",
  },
];

export const footerLinkGroups = [
  {
    title: "Explore",
    links: [
      { href: "/services", label: "Services" },
      { href: "/case-studies", label: "Case Studies" },
      { href: "/about", label: "About Quanta" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Focus Areas",
    links: [
      { href: "/services#service-pillars", label: "Workflow Automation" },
      { href: "/services#industries", label: "Industry Fit" },
      { href: "/case-studies#dispatch-command-center", label: "Dispatch AI" },
      { href: "/contact#brief", label: "Start a Project" },
    ],
  },
];
