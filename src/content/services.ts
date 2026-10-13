import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'cloud-migration-kubernetes',
    slug: 'cloud-migration-kubernetes',
    title: 'Multi-Cloud Migration & Kubernetes Orchestration',
    category: 'cloud-devops',
    shortDescription:
      'Architect, migrate, and automate resilient multi-cloud infrastructures with zero scheduled downtime.',
    fullDescription:
      'IT HUB Corporation designs and delivers production-grade cloud environments on AWS, Azure, and Google Cloud. From containerizing legacy workloads to automated GitOps deployment across multi-cluster Kubernetes, we ensure your infrastructure achieves extreme resilience, disaster recovery, and scalable autoscaling.',
    icon: 'Cloud',
    technologies: [
      'AWS',
      'Google Cloud',
      'Kubernetes',
      'Terraform',
      'Docker',
      'Helm',
      'ArgoCD',
    ],
    features: [
      'Zero-downtime database and workload migration strategies',
      'Production-ready Kubernetes (EKS / GKE) clusters with autoscaling',
      'Infrastructure as Code (IaC) modularized with Terraform',
      'Immutable GitOps CI/CD delivery pipelines',
      'Multi-region failover and automated disaster recovery',
    ],
    deliverables: [
      'Cloud Architecture Blueprint & Topology Maps',
      'Automated Terraform Infrastructure Codebase',
      'Hardened Kubernetes Cluster Specifications',
      'Complete Disaster Recovery Runbook & SLA Guarantee',
    ],
    featured: true,
    stat: {
      value: '99.999%',
      label: 'Cluster Availability',
    },
  },
  {
    id: 'custom-enterprise-software',
    slug: 'custom-enterprise-software',
    title: 'Custom SaaS & Distributed Systems Engineering',
    category: 'software-engineering',
    shortDescription:
      'High-throughput microservices, real-time event streaming, and custom digital platforms engineered for massive concurrency.',
    fullDescription:
      'We engineer resilient, low-latency enterprise software systems tailored to complex domain logic. Leveraging event-driven architectures, microservices, and modern API standards, our engineering squads deliver software that processes millions of transactions with deterministic reliability.',
    icon: 'Code2',
    technologies: [
      'TypeScript',
      'Go',
      'Python',
      'Node.js',
      'Kafka',
      'PostgreSQL',
      'Redis',
      'GraphQL',
    ],
    features: [
      'Event-driven microservices architecture via Apache Kafka',
      'Type-safe GraphQL & RESTful API gateways',
      'Distributed cache synchronization with Redis',
      'ACID-compliant relational and document database optimization',
      'Comprehensive unit, integration, and load testing coverage',
    ],
    deliverables: [
      'Fully Documented Production Source Code & Tests',
      'Microservice Boundary & API Contract Specifications',
      'Interactive Swagger / OpenAPI 3.0 Documentation',
      'Database Schema Migration Scripts & Seeders',
    ],
    featured: true,
    stat: {
      value: '45M+',
      label: 'Daily Requests Processed',
    },
  },
  {
    id: 'zero-trust-cybersecurity',
    slug: 'zero-trust-cybersecurity',
    title: 'Zero-Trust Security & DevSecOps Hardening',
    category: 'cybersecurity',
    shortDescription:
      'End-to-end vulnerability assessments, continuous penetration testing, and SOC 2 / HIPAA compliance enablement.',
    fullDescription:
      'Shield your organization against sophisticated cyber threats. IT HUB provides proactive security audits, continuous vulnerability scanning, automated shift-left code security pipelines, and zero-trust perimeter enforcement.',
    icon: 'ShieldCheck',
    technologies: [
      'HashiCorp Vault',
      'WAF',
      'OAuth 2.1',
      'Trivy',
      'SonarQube',
      'CrowdStrike',
      'WireGuard',
    ],
    features: [
      'Zero-trust network access (ZTNA) and identity enforcement',
      'Automated container image scanning and SAST/DAST in CI/CD',
      'Secret management and ephemeral credential rotation',
      'SOC 2 Type II, ISO 27001, and HIPAA compliance mapping',
      'Incident response simulations and threat mitigation protocols',
    ],
    deliverables: [
      'Executive Security & Risk Assessment Report',
      'Penetration Testing Findings & Remediation Roadmap',
      'Automated DevSecOps Pipeline Integration',
      'Compliance Audit Artifacts Package',
    ],
    featured: true,
    stat: {
      value: '0 Breaches',
      label: 'Across Managed Systems',
    },
  },
  {
    id: 'enterprise-ai-rag',
    slug: 'enterprise-ai-rag',
    title: 'Applied Enterprise AI & RAG Agent Systems',
    category: 'ai-automation',
    shortDescription:
      'Deploy proprietary knowledge assistants, automated document analysis, and autonomous AI agents securely behind your firewall.',
    fullDescription:
      'Empower your workforce with enterprise-ready AI. We build custom Retrieval-Augmented Generation (RAG) engines, autonomous workflow agents, and specialized fine-tuned models that respect data privacy, prevent hallucination, and integrate seamlessly with your CRM and ERP stacks.',
    icon: 'Cpu',
    technologies: [
      'Python',
      'LangChain',
      'LlamaIndex',
      'Pinecone',
      'pgvector',
      'Ollama',
      'OpenAI / Claude',
    ],
    features: [
      'Private vector search index over enterprise documents',
      'Strict data isolation and zero external training guarantees',
      'Multi-agent task orchestration for routine workflows',
      'Semantic cache layer reducing model API expenditure by up to 60%',
      'Human-in-the-loop review and audit trail logging',
    ],
    deliverables: [
      'Private Enterprise AI Portal & API Endpoints',
      'Vector Ingestion & Real-Time Sync Pipeline',
      'Safety, Hallucination Guardrails, and Eval Harness',
      'ROI & Model Usage Analytics Dashboard',
    ],
    featured: true,
    stat: {
      value: '65%',
      label: 'Support Ticket Reduction',
    },
  },
  {
    id: 'high-performance-web-platforms',
    slug: 'high-performance-web-platforms',
    title: 'High-Performance Web Applications & Portals',
    category: 'software-engineering',
    shortDescription:
      'Blazing fast client portals, e-commerce engines, and internal operational dashboards with flawless UX.',
    fullDescription:
      'We craft ultra-responsive web applications that wow users and convert visitors. Built on modern Next.js and React architecture, our frontends achieve near-instantaneous load times, accessibility compliance, and silky smooth transitions.',
    icon: 'Globe',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind/CSS Tokens',
      'WebSockets',
      'Vercel',
    ],
    features: [
      'Sub-second Largest Contentful Paint (LCP) performance',
      'Real-time WebSocket data synchronization for dashboards',
      'Comprehensive accessibility (WCAG 2.1 Level AA) compliance',
      'Cross-browser and responsive mobile-first optimization',
      'Internationalization and localized dynamic routing',
    ],
    deliverables: [
      'Modular Frontend Codebase & Component Catalog',
      'Lighthouse Performance & Core Web Vitals Audit (Score 98+)',
      'Interactive Design System Tokens & Style Guide',
      'Production Optimized Deployment Pipelines',
    ],
    featured: false,
    stat: {
      value: '98+',
      label: 'Lighthouse Performance',
    },
  },
  {
    id: 'legacy-modernization-finops',
    slug: 'legacy-modernization-finops',
    title: 'Legacy Monolith Refactoring & Cloud FinOps',
    category: 'digital-transformation',
    shortDescription:
      'Decouple legacy tech debt into modern services while reducing cloud infrastructure bills by 30-50%.',
    fullDescription:
      'Unshackle your business from outdated legacy software. We provide incremental strangler-fig migration paths to transform monoliths into agile microservices, alongside rigorous FinOps audits that identify wasted cloud resources and optimize reserve instances.',
    icon: 'Layers',
    technologies: [
      'Java / Spring',
      '.NET Core',
      'Node.js',
      'PostgreSQL',
      'AWS Cost Explorer',
      'Datadog',
    ],
    features: [
      'Strangler-fig pattern execution with continuous availability',
      'Dead code elimination and automated dependency updates',
      'Comprehensive cloud resource usage & waste analysis',
      'Automated right-sizing and spot instance orchestration',
      'Executive architecture governance and mentoring',
    ],
    deliverables: [
      'Decomposition Roadmap & Migration Timeline',
      'Cloud FinOps Cost Reduction Action Plan',
      'Refactored Modernized Service Modules',
      'Long-term Technical Architecture Governance Handbook',
    ],
    featured: false,
    stat: {
      value: '42%',
      label: 'Avg Cloud Bill Reduction',
    },
  },
];
