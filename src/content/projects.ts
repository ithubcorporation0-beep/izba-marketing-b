import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'fintech-realtime-clearing',
    slug: 'fintech-realtime-clearing',
    title: 'High-Throughput Real-Time Payment Clearing Engine',
    client: 'Tier-1 Digital Banking Group',
    category: 'software-engineering',
    summary:
      'Engineered a fault-tolerant payment settlement system capable of processing 25,000+ transactions per second with sub-10ms latency.',
    description:
      'The client required replacing a legacy batch clearing system that struggled with peak volume spikes during trading hours. IT HUB designed an event-driven Go/Kafka pipeline with distributed idempotent ledgers.',
    challenge:
      'Processing spikes created 45-minute transaction backlogs, risking compliance breaches and customer dissatisfaction.',
    solution:
      'Designed an active-active multi-region Go microservices mesh leveraging Apache Kafka with partitioned event streams and optimized PostgreSQL clustering.',
    outcome:
      'Eliminated backlogs completely, reduced p99 transaction latency from 4.2 seconds to 8 milliseconds, and saved $1.8M annually in infrastructure costs.',
    metrics: [
      { label: 'Peak TPS Capacity', value: '25,000+' },
      { label: 'p99 Latency', value: '8 ms' },
      { label: 'System Uptime', value: '99.999%' },
    ],
    stack: [
      'Go',
      'Kafka',
      'PostgreSQL',
      'Redis',
      'Docker',
      'Kubernetes',
      'Prometheus',
    ],
    featured: true,
    year: '2025',
  },
  {
    id: 'healthtech-fhir-cloud',
    slug: 'healthtech-fhir-cloud',
    title: 'HIPAA-Compliant Multi-Cloud FHIR Health Data Mesh',
    client: 'National Healthcare Network',
    category: 'cloud-devops',
    summary:
      'Migrated 14 million patient records across 32 hospital systems to a unified, encrypted cloud data mesh with automated audit compliance.',
    description:
      'A nationwide hospital network struggled with siloed EHR databases that hindered real-time clinical decisions. IT HUB implemented an automated Terraform-orchestrated AWS environment adhering strictly to HIPAA and HITRUST standards.',
    challenge:
      'Fragmented patient records in on-premise relational databases taking hours to query and failing regulatory compliance audits.',
    solution:
      'Implemented an automated FHIR data transformation pipeline on AWS using EKS, encrypted S3 lakes, and KMS envelope encryption.',
    outcome:
      'Unified patient data queries from 12 minutes to 180 milliseconds, passed third-party HIPAA audit with 100% score, and enabled real-time physician analytics.',
    metrics: [
      { label: 'Patient Records', value: '14M+' },
      { label: 'Query Speedup', value: '40x' },
      { label: 'Audit Score', value: '100%' },
    ],
    stack: [
      'AWS',
      'Terraform',
      'Kubernetes',
      'FHIR API',
      'HashiCorp Vault',
      'Datadog',
    ],
    featured: true,
    year: '2025',
  },
  {
    id: 'logistics-iot-tracking',
    slug: 'logistics-iot-tracking',
    title: 'Global Fleet Telemetry & Predictive Maintenance Platform',
    client: 'Vanguard Logistics International',
    category: 'ai-automation',
    summary:
      'Built an IoT telemetry platform ingesting 180,000 continuous sensor streams to forecast vehicular failures before breakdowns occur.',
    description:
      'Operating over 45,000 heavy transit vehicles across North America, the client faced massive downtime costs from unscheduled mechanical breakdowns. IT HUB built an edge-to-cloud telemetry ingest engine powered by predictive ML models.',
    challenge:
      'Unscheduled vehicle breakdowns cost the company upwards of $22M annually in missed delivery windows and emergency repairs.',
    solution:
      'Built an IoT MQTT gateway ingesting real-time engine telemetry, fed into Python/PyTorch anomaly detection models predicting failures up to 72 hours in advance.',
    outcome:
      'Reduced transit vehicle breakdowns by 38%, cutting emergency towing and repair expenses by $9.4M in the first 12 months.',
    metrics: [
      { label: 'Connected Assets', value: '45,000+' },
      { label: 'Breakdown Reduction', value: '38%' },
      { label: 'Direct Cost Saved', value: '$9.4M' },
    ],
    stack: [
      'Python',
      'PyTorch',
      'MQTT',
      'TimeScaleDB',
      'Node.js',
      'React',
      'AWS IoT Core',
    ],
    featured: true,
    year: '2024',
  },
  {
    id: 'defense-zerotrust-mesh',
    slug: 'defense-zerotrust-mesh',
    title: 'Zero-Trust Identity & Microsegmentation Security Mesh',
    client: 'Enterprise Supply Chain Consortium',
    category: 'cybersecurity',
    summary:
      'Eliminated perimeter-based attack surfaces across 8,500 developer workstations and 600 cloud microservices.',
    description:
      'Following a near-miss phishing escalation, the client engaged IT HUB to replace legacy VPNs with an ephemeral identity-driven Zero Trust Network Architecture (ZTNA).',
    challenge:
      'Flat network topologies allowed lateral movement, exposing internal code repositories and cloud credentials.',
    solution:
      'Architected WireGuard-based microsegmentation, mutual TLS (mTLS) with automated SPIFFE/SPIRE certificates, and FIDO2 hardware token enforcement.',
    outcome:
      'Completely mitigated lateral movement vectors, achieved SOC 2 Type II compliance in record time, and cut employee authentication friction by 50%.',
    metrics: [
      { label: 'Endpoints Secured', value: '8,500+' },
      { label: 'Lateral Vectors', value: '0' },
      { label: 'SOC 2 Type II', value: 'Certified' },
    ],
    stack: [
      'WireGuard',
      'SPIFFE/SPIRE',
      'HashiCorp Vault',
      'OAuth 2.1',
      'Trivy',
      'CrowdStrike',
    ],
    featured: false,
    year: '2024',
  },
];
