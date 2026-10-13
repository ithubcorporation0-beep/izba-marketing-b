import { DigitalProduct } from '@/types';

export const digitalProducts: DigitalProduct[] = [
  {
    id: 'hub-shield-scanner',
    slug: 'hub-shield-scanner',
    title: 'HubShield Zero-Trust DevSecOps Suite',
    tagline:
      'Automated container & Kubernetes vulnerability scanner with continuous posture remediation.',
    description:
      'An automated security scanner that seamlessly plugs into GitHub Actions, GitLab CI, and AWS CodePipeline to inspect Docker images, Terraform IaC, and Kubernetes manifests for security anomalies before production deployment.',
    category: 'Cybersecurity & DevOps',
    badge: 'Enterprise Ready',
    features: [
      'Real-time CVE and misconfiguration detection',
      'Terraform & OpenTofu static security analysis',
      'Automated pull request security comments & auto-patching',
      'Executive SOC 2 and ISO 27001 posture reporting',
    ],
    metrics: 'Scans 100k+ manifests daily',
    status: 'Enterprise',
  },
  {
    id: 'cloud-optima-finops',
    slug: 'cloud-optima-finops',
    title: 'CloudOptima Autonomous FinOps Engine',
    tagline:
      'AI-driven cloud resource right-sizing and multi-cloud cost arbitrage dashboard.',
    description:
      'Continuous telemetry daemon that inspects multi-cloud workloads on AWS, GCP, and Azure to automatically eliminate idle capacity, schedule non-prod clusters, and spot-arbitrage compute nodes.',
    category: 'Cloud & Infrastructure',
    badge: 'Cost Saver',
    features: [
      'Autonomous idle instance hibernation policies',
      'Multi-cloud rate arbitrage and reserved capacity recommendations',
      'Real-time Slack & Teams cost anomaly alerts',
      'Zero agent overhead via cloud API integration',
    ],
    metrics: 'Avg 34% bill reduction',
    status: 'Available',
  },
  {
    id: 'rag-forge-agent-sdk',
    slug: 'rag-forge-agent-sdk',
    title: 'RAGForge Enterprise Agent SDK',
    tagline:
      'Production-grade, private retrieval-augmented generation harness for enterprise LLMs.',
    description:
      'A plug-and-play TypeScript & Python framework for embedding corporate document stores into high-performance vector databases with deterministic citation verification, hallucination guardrails, and role-based ACLs.',
    category: 'Applied AI',
    badge: 'New Release',
    features: [
      'Document chunking with contextual preservation',
      'Hybrid vector + BM25 keyword search integration',
      'Hallucination detection and citation bounding',
      'Strict tenant isolation with Active Directory / Okta integration',
    ],
    metrics: '<150ms retrieval latency',
    status: 'Beta',
  },
];
