import {
  Activity,
  Bot,
  Boxes,
  Braces,
  Database,
  FileSearch,
  Github,
  Layers3,
  Linkedin,
  Mail,
  Network,
  ServerCog,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type ContactLink = {
  label: string;
  href: string;
  value: string;
  icon: LucideIcon;
};

export type NavItem = {
  label: string;
  href: string;
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type ExpertiseItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  signal: string;
};

export type ExperienceItem = {
  role: string;
  organization: string;
  location: string;
  advisor?: string;
  dates: string;
  bullets: string[];
};

export type ProjectItem = {
  title: string;
  period: string;
  stack: string[];
  summary: string;
  outcomes: string[];
  accent: "cyan" | "emerald" | "violet";
  links?: {
    code?: string;
    demo?: string;
  };
};

export type EducationItem = {
  school: string;
  location: string;
  degree: string;
  dates: string;
  coursework?: string[];
};

export const profile = {
  name: "Mingyang Li",
  role: "Software Engineer - Backend & AI Platform / Enterprise RAG",
  shortRole: "Backend & AI Platform Engineer",
  status: "Open to full-time roles",
  location: "Fremont, CA",
  headline:
    "I build retrieval-heavy backend systems that turn enterprise documents into traceable, low-latency AI workflows.",
  summary:
    "Recent M.S. Computer Science graduate focused on backend systems, enterprise RAG, AI platform engineering, and retrieval infrastructure. My work spans reactive Spring services, hybrid vector/full-text retrieval, transaction-oriented order flows, cache consistency, and production-readiness patterns for multi-tenant AI systems.",
  availability:
    "Actively seeking full-time Software Engineer roles in Backend, AI Platform, and Enterprise RAG.",
  cvPath: "/cv.pdf",
  contacts: [
    {
      label: "Email",
      value: "iam.alexli371@gmail.com",
      href: "mailto:iam.alexli371@gmail.com",
      icon: Mail,
    },
    {
      label: "GitHub",
      value: "github.com/mli371",
      href: "https://github.com/mli371",
      icon: Github,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/mingyang-li-612081337",
      href: "https://www.linkedin.com/in/mingyang-li-612081337/",
      icon: Linkedin,
    },
  ] satisfies ContactLink[],
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "CV", href: "#cv" },
  { label: "Contact", href: "#contact" },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Java 17", "Python", "SQL", "C/C++", "JavaScript", "Go"],
  },
  {
    label: "Backend",
    items: [
      "Spring Boot 3.x",
      "WebFlux",
      "Project Reactor",
      "REST/SSE APIs",
      "Redis",
      "PostgreSQL/PgVector",
      "MySQL",
      "Kafka",
      "Docker",
      "MinIO",
    ],
  },
  {
    label: "AI / Retrieval",
    items: [
      "Enterprise RAG",
      "Parent-child chunking",
      "Hybrid vector/full-text retrieval",
      "RRF fusion",
      "Heuristic reranking",
      "Citation-aware context",
      "Spring AI concepts",
    ],
  },
  {
    label: "Infrastructure",
    items: [
      "Linux",
      "GitHub Actions",
      "AWS fundamentals",
      "CI/CD",
      "Distributed-system debugging",
      "JVM fundamentals",
    ],
  },
];

export const expertiseItems: ExpertiseItem[] = [
  {
    title: "Enterprise RAG Backend",
    signal: "Ingestion to answer pipeline",
    description:
      "Designing document ingestion, metadata storage, chunk lifecycle, and query APIs for enterprise-aware knowledge systems.",
    icon: Database,
  },
  {
    title: "Hybrid Retrieval & Citation Context",
    signal: "Vector + full-text + evidence",
    description:
      "Combining PgVector search, PostgreSQL full-text search, RRF fusion, reranking, parent expansion, and citation-preserving context budgets.",
    icon: FileSearch,
  },
  {
    title: "Reactive & Transactional Backend APIs",
    signal: "REST/SSE + checkout flows",
    description:
      "Building Spring services across AI query APIs and business-critical order flows, with idempotency, state transitions, timeouts, retries, and graceful fallbacks.",
    icon: Workflow,
  },
  {
    title: "Distributed System Readiness",
    signal: "Tenancy, audit, cache, health",
    description:
      "Adding the production slice around AI services: tenant filtering, Redis state, audit events, health checks, and operational logs.",
    icon: ShieldCheck,
  },
];

export const education: EducationItem[] = [
  {
    school: "University of California, Riverside",
    location: "Riverside, CA",
    degree: "M.S. in Computer Science",
    dates: "Sep. 2024 - Mar. 2026",
    coursework: [
      "DBMS (A+)",
      "Machine Learning",
      "Artificial Intelligence",
      "High Performance Computing",
      "GPU Architecture",
      "Advanced Networks",
    ],
  },
  {
    school: "Shanxi University",
    location: "Taiyuan, China",
    degree: "B.E. in Software Engineering",
    dates: "Sep. 2020 - Jun. 2024",
  },
];

export const experiences: ExperienceItem[] = [
  {
    role: "Graduate Research Assistant",
    organization: "RIPLE Research Group, UC Riverside",
    location: "Riverside, CA",
    advisor: "Prof. Qian Zhang",
    dates: "Sep. 2025 - Present",
    bullets: [
      "Built Python experiment runners and model adapters for GRAphRef, a constraint-guided fuzz-testing framework for 3D mesh AI models.",
      "Standardized evaluation across 8 mesh-processing systems including MeshCNN and HodgeNet, producing repeatable logs and metric reports.",
      "Ran structural mutation experiments for Valid Input Rate (VIR) and Semantic Preservation Score (SPS), then generated benchmark artifacts and LLM-output verification scripts using Benford/Zipf-style distributional checks.",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "NexusAgent - Enterprise-Aware Knowledge Assistant Backend",
    period: "Jan. 2026 - Present",
    stack: [
      "Java",
      "Spring Boot 3.x",
      "WebFlux",
      "Project Reactor",
      "PostgreSQL/PgVector",
      "Redis",
      "MinIO",
      "Docker",
    ],
    summary:
      "A retrieval-first AI backend for enterprise documents, built around ingestion reliability, hybrid search quality, and citation-aware answer generation.",
    outcomes: [
      "Built MinIO raw-file storage, PostgreSQL document/chunk metadata, parent-child chunking, child-only PgVector embeddings, and idempotent ingestion/re-chunking flows.",
      "Implemented vector and full-text retrieval, fused candidates with 1-based RRF, applied heuristic reranking, and expanded parent context for stronger evidence coverage.",
      "Exposed REST/SSE query APIs and a deterministic Plan-Execute-Critique workflow with Reactor timeouts, retries, fallback handling, trace IDs, Redis-backed session state, tenant-aware cache keys, audit events, and health/info endpoints.",
    ],
    accent: "cyan",
    links: {
      code: "https://github.com/mli371/NexusAgent",
    },
  },
  {
    title: "High-Concurrency Order & Inventory Backend",
    period: "May 2025 - Aug. 2025",
    stack: [
      "Java",
      "Spring Boot",
      "MySQL",
      "Redis",
      "Message Queue",
      "RPC Framework",
      "Distributed Scheduler",
      "Docker",
    ],
    summary:
      "A transaction-oriented backend that demonstrates core systems fundamentals: retry-safe checkout, inventory access paths, cache consistency, and asynchronous order lifecycle handling under concurrent traffic.",
    outcomes: [
      "Designed MySQL schemas and composite indexes around the real access paths: item lookup, order-status queries, inventory checks, and user order history.",
      "Modeled pending, paid, cancelled, and expired order states with idempotency keys, duplicate-submission checks, and retry-safe checkout behavior.",
      "Implemented expiration and compensation flows with message-queue retries, scheduled workers, Redis/MySQL cache-aside patterns, delayed invalidation, and isolated thread pools for slow downstream operations.",
    ],
    accent: "emerald",
  },
  {
    title: "AI Agent Engineering Lab",
    period: "Oct. 2025 - Present",
    stack: [
      "Docker",
      "Linux",
      "Python",
      "Local/Remote LLM Backends",
      "Agent Frameworks",
      "GitHub Actions",
    ],
    summary:
      "A practical sandbox for testing model backends, prompt workflows, tool-use agents, and CI-backed engineering experiments.",
    outcomes: [
      "Built a Dockerized environment for local and remote LLM backends, comparing context-window behavior, memory usage, request latency, and deployment trade-offs.",
      "Wrote reusable Python scripts to replay prompts and tool-call workflows, collect structured logs, and document provider/backend configuration differences.",
      "Maintained lightweight CI checks for tests, formatting, environment validation, setup docs, and known failure modes across personal experiments.",
    ],
    accent: "violet",
  },
];

export const siteHighlights = [
  { label: "Primary domain", value: "Enterprise RAG" },
  { label: "Backend proof", value: "Orders + inventory" },
  { label: "Retrieval layer", value: "PgVector + RRF" },
  { label: "Systems focus", value: "Tenancy + audit" },
];

export const projectVisualIcons = {
  cyan: [Database, FileSearch, Layers3],
  emerald: [ServerCog, Activity, Boxes],
  violet: [Bot, Braces, Network],
} satisfies Record<ProjectItem["accent"], LucideIcon[]>;
