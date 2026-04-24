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
    value: "2-3",
    label: "weeks to scoped plan",
    support: "Discovery focuses on the roles, documents, systems, and exceptions that shape daily decisions.",
  },
  {
    value: "4-8",
    label: "weeks to measured pilot",
    support: "When data and system access are ready, pilots move quickly without skipping controls.",
  },
  {
    value: "1",
    label: "workflow before scale",
    support: "A contained launch creates a cleaner business case and a smoother adoption path.",
  },
  {
    value: "Live",
    label: "KPIs tracked from day one",
    support: "Cycle time, touch rate, backlog, and exception volume stay visible through delivery.",
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
      "Identify the workflows where AI can create measurable value without creating avoidable risk.",
    bullets: [
      "Assess operational bottlenecks, decision points, and handoffs",
      "Rank use cases by business value, risk, and feasibility",
      "Define a roadmap leaders can approve and operators can use",
    ],
    icon: "signal",
    ctaLabel: "Define the right first moves",
  },
  {
    title: "Workflow Automation",
    summary:
      "Reduce manual routing, classification, approvals, and exception handling in high-volume processes.",
    bullets: [
      "Document and inbox processing with clear human review paths",
      "Cross-system orchestration for ERP, CRM, and operations data",
      "Escalation logic that keeps supervisors in control",
    ],
    icon: "workflow",
    ctaLabel: "Remove repeated manual work",
  },
  {
    title: "AI Copilots",
    summary:
      "Give teams faster access to answers, context, and recommended next steps while keeping people in control.",
    bullets: [
      "Grounded search over SOPs, notes, forms, and historical cases",
      "Decision support with recommended next steps and rationale",
      "Adoption design that fits existing workflows instead of replacing them",
    ],
    icon: "copilot",
    ctaLabel: "Give teams better decisions",
  },
  {
    title: "Data Foundations",
    summary:
      "Prepare the data, documents, and operating context AI systems need before they can be trusted.",
    bullets: [
      "Data readiness audits for unstructured and semi-structured inputs",
      "Lightweight pipelines for retrieval, monitoring, and reporting",
      "Measurement models tied directly to cycle time, throughput, and margin",
    ],
    icon: "database",
    ctaLabel: "Make the data usable",
  },
  {
    title: "Governance & Rollout",
    summary:
      "Put practical controls, review paths, and adoption support around every deployment.",
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
      "Measure what is improving, where intervention is needed, and when expansion is justified.",
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
    title: "Find the workflow with measurable drag",
    summary:
      "We work with frontline and back-office teams to locate the queues, handoffs, and reviews that are slowing work down.",
  },
  {
    title: "Design the system around control points",
    summary:
      "We define where AI should classify, summarize, recommend, or draft, and where people must review, approve, or intervene.",
  },
  {
    title: "Deploy inside the real operating environment",
    summary:
      "Pilots launch inside the tools your teams already use, with success criteria, exception paths, and operating visibility from day one.",
  },
  {
    title: "Improve from production feedback",
    summary:
      "Once the workflow is stable, we tune prompts, retrieval, logic, and reporting so throughput and trust improve over time.",
  },
];

export const industryLanes = [
  {
    title: "Field Service & Dispatch",
    summary:
      "Dispatch, work-order triage, service coordination, technician enablement, and exceptions.",
    icon: "map" as const,
  },
  {
    title: "Logistics & Network Operations",
    summary:
      "Document intake, ETA visibility, issue routing, operating reports, and multi-system coordination.",
    icon: "layers" as const,
  },
  {
    title: "Shared Services & Finance",
    summary:
      "Invoice capture, statement reconciliation, ticket handling, close support, and review-heavy work.",
    icon: "clock" as const,
  },
  {
    title: "Operating Leadership",
    summary:
      "Decision dashboards, narrative reporting, margin visibility, and AI governance for scaling teams.",
    icon: "chart" as const,
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "dispatch-command-center",
    title: "Dispatch Decision Support",
    industry: "Utility field services",
    challenge:
      "Schedulers were juggling work orders, crew notes, outage updates, and customer emails across multiple systems before they could assign work.",
    solution:
      "Quanta built an AI-assisted dispatch workspace that classified urgency, summarized job context, recommended next actions, and routed exceptions into a supervisor queue.",
    summary:
      "Morning triage shifted from a two-hour scramble into a guided review flow that surfaced the right jobs, the right notes, and the right escalation logic in one place.",
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
    title: "Invoice Intake and Exceptions",
    industry: "Industrial distribution",
    challenge:
      "AP analysts were manually classifying invoices, matching supporting documents, and chasing exceptions across email chains and shared drives.",
    solution:
      "Quanta implemented a document pipeline that extracted fields, matched supporting records, flagged risk conditions, and staged exceptions for quick human review.",
    summary:
      "The team moved from inbox triage to exception-based review, which made the finance queue smaller, cleaner, and significantly faster to close.",
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
      "Quanta did not leave us with a strategy deck. They worked with our dispatch leads, measured the workflow weekly, and demonstrated value quickly.",
    author: "Jordan Ellis",
    role: "COO, regional service network",
  },
  {
    quote:
      "Their team understood the difference between a pilot that looks good and a finance process we could rely on during close. That discipline mattered.",
    author: "Naomi Reyes",
    role: "VP Shared Services, industrial distributor",
  },
  {
    quote:
      "The assistant succeeded because it respected the operator. Every answer was grounded, reviewable, and connected to how our teams actually work.",
    author: "Devin Hart",
    role: "SVP Operations, infrastructure contractor",
  },
];

export const valuePoints = [
  {
    title: "Workflow first",
    summary:
      "We design for dispatchers, coordinators, analysts, and leaders working inside real constraints.",
    icon: "layers" as const,
  },
  {
    title: "Metrics before hype",
    summary:
      "Every engagement starts with cycle time, throughput, accuracy, visibility, or workload goals your teams can verify.",
    icon: "chart" as const,
  },
  {
    title: "Guardrails by default",
    summary:
      "Sensitive workflows keep explicit review paths, exception thresholds, and fallback modes.",
    icon: "shield" as const,
  },
  {
    title: "Built to scale carefully",
    summary:
      "We start with contained workflows and expand only when the signal, governance, and adoption pattern are ready.",
    icon: "spark" as const,
  },
];

export const faqItems: FAQItem[] = [
  {
    question: "How quickly can Quanta launch a meaningful pilot?",
    answer:
      "Most pilots can launch within four to eight weeks when the target workflow is specific, the review path is clear, and the required systems are accessible.",
  },
  {
    question: "Do you work with the tools a team already has?",
    answer:
      "Yes. Quanta is built for environments that already run on ERP, CRM, ticketing, shared drives, email, and operating reports. We shape around the stack instead of demanding a rebuild.",
  },
  {
    question: "Do you only advise, or do you also implement?",
    answer:
      "Both. Quanta can define the roadmap, but the firm is structured to carry projects through deployment, measurement, and adoption rather than stopping at strategy.",
  },
  {
    question: "What kinds of teams are the best fit?",
    answer:
      "Industrial operators, field service groups, logistics teams, and shared-services functions with repetitive handoffs, document-heavy processes, or slow decisions.",
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
