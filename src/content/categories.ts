import { Category } from '@/types';

export const categories: Category[] = [
  {
    id: 'cloud-devops',
    slug: 'cloud-devops',
    title: 'Cloud & DevOps Architecture',
    shortDescription:
      'Resilient cloud migrations, Kubernetes orchestration, and automated CI/CD pipelines.',
    description:
      'Architecting multi-cloud infrastructures, immutable server setups, and automated GitOps workflows with 99.99% availability.',
    icon: 'Cloud',
  },
  {
    id: 'software-engineering',
    slug: 'software-engineering',
    title: 'Enterprise Software Engineering',
    shortDescription:
      'Mission-critical web, mobile, and distributed systems engineered for extreme scale.',
    description:
      'Custom software development, high-throughput microservices, API ecosystems, and modern frontend applications designed for zero latency.',
    icon: 'Code2',
  },
  {
    id: 'cybersecurity',
    slug: 'cybersecurity',
    title: 'Cybersecurity & Zero Trust',
    shortDescription:
      'Penetration testing, compliance hardening, and continuous threat mitigation.',
    description:
      'Proactive security audits, SOC 2 / HIPAA compliance implementation, identity management, and real-time anomaly detection.',
    icon: 'ShieldCheck',
  },
  {
    id: 'ai-automation',
    slug: 'ai-automation',
    title: 'Applied AI & Automation',
    shortDescription:
      'Custom LLM solutions, intelligent data pipelines, and workflow automation.',
    description:
      'Deploying enterprise-grade generative AI, retrieval-augmented generation (RAG), predictive models, and robotic process automation.',
    icon: 'Cpu',
  },
  {
    id: 'digital-transformation',
    slug: 'digital-transformation',
    title: 'IT Consulting & Modernization',
    shortDescription:
      'Strategic technical roadmapping, legacy refactoring, and cost optimization.',
    description:
      'Guiding executive leadership through digital roadmaps, decommissioning monolithic tech debt, and aligning architecture with business velocity.',
    icon: 'Layers',
  },
];
