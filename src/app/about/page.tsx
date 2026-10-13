import React from 'react';
import type { Metadata } from 'next';
import {
  Shield,
  Users,
  Award,
  Globe,
  Zap,
  Cpu,
  CheckCircle2,
} from 'lucide-react';
import { constructMetadata } from '@/lib/seo/metadata';
import { siteConfig } from '@/config/site';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { CTASection } from '@/components/sections/CTA';
import styles from './page.module.css';

export const metadata: Metadata = constructMetadata({
  title: 'About IT HUB Corporation',
  description:
    'Learn about IT HUB Corporation, our engineering leadership, enterprise standards, and our mission to build resilient technology systems.',
  pathname: '/about',
});

export default function AboutPage() {
  const values = [
    {
      title: 'Architectural Rigor',
      description:
        'We do not compromise on technical integrity. Every system we design is built for extreme fault tolerance, zero-trust security, and horizontal scalability.',
      icon: <Cpu size={24} />,
    },
    {
      title: 'Radical Transparency',
      description:
        'No hidden layers. Our clients get direct access to lead software architects, shared Git repos, transparent burndowns, and automated observability dashboards.',
      icon: <Users size={24} />,
    },
    {
      title: 'Zero Technical Debt',
      description:
        'We believe code velocity stems from clean design tokens, modular boundaries, automated test coverage, and strict type safety.',
      icon: <Zap size={24} />,
    },
    {
      title: 'Unwavering Security',
      description:
        'Security is not an afterthought. SOC 2, HIPAA, and Zero Trust access policies are baked into our blueprints from the initial sprint.',
      icon: <Shield size={24} />,
    },
  ];

  const milestones = [
    {
      year: '2011',
      title: 'Founding & Silicon Valley HQ',
      desc: 'Established as an elite systems architecture consultancy serving early cloud pioneers.',
    },
    {
      year: '2016',
      title: 'Kubernetes & Multi-Cloud Practice',
      desc: 'Pioneered enterprise container migration frameworks across Fortune 500 financial clients.',
    },
    {
      year: '2020',
      title: 'Zero-Trust Security Division',
      desc: 'Launched dedicated DevSecOps practice and achieved SOC 2 Type II compliance accreditation.',
    },
    {
      year: '2024',
      title: 'Enterprise Applied AI Lab',
      desc: 'Engineered high-throughput RAG pipelines and autonomous operational agents for regulated enterprises.',
    },
  ];

  return (
    <div className={styles.aboutWrapper}>
      {/* Hero */}
      <section className={styles.heroSection}>
        <div className={`container ${styles.heroContainer}`}>
          <Badge variant="cyan" size="md">
            Our Mission & Architecture
          </Badge>
          <h1 className={styles.pageTitle}>
            Engineering Scalable Foundations for the World&rsquo;s Most
            Demanding Enterprises
          </h1>
          <p className={styles.pageSubtitle}>
            IT HUB Corporation was founded on a simple principle: enterprise
            technology should be robust, elegant, and uncompromisingly fast. We
            partner with CTOs and technical leaders to transform critical
            operations into resilient digital platforms.
          </p>
        </div>
      </section>

      {/* Corporate Values */}
      <section className={styles.valuesSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Engineering Principles</h2>
            <p className={styles.sectionSubtitle}>
              The tenets that guide every architectural decision, code review,
              and production deployment.
            </p>
          </div>

          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <Card key={i} className={styles.valueCard}>
                <div className={styles.valueIcon}>{v.icon}</div>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={styles.timelineSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Evolution & Milestones</h2>
            <p className={styles.sectionSubtitle}>
              Over 15 years of continuous engineering excellence and
              technological leadership.
            </p>
          </div>

          <div className={styles.milestonesList}>
            {milestones.map((m, i) => (
              <div key={i} className={styles.milestoneItem}>
                <div className={styles.milestoneYear}>{m.year}</div>
                <div className={styles.milestoneContent}>
                  <h3 className={styles.milestoneTitle}>{m.title}</h3>
                  <p className={styles.milestoneDesc}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className={styles.presenceSection}>
        <div className="container">
          <Card className={styles.presenceCard}>
            <div className={styles.presenceContent}>
              <Badge variant="emerald" size="sm">
                Global Engineering Footprint
              </Badge>
              <h2 className={styles.presenceTitle}>
                Distributed Capability, Silicon Valley Rigor
              </h2>
              <p className={styles.presenceDesc}>
                Headquartered at {siteConfig.contact.address}, our solutions
                architects and incident response engineers provide 24/7 global
                coverage with continuous follow-the-sun delivery.
              </p>
              <div className={styles.presenceMetrics}>
                <div>
                  <strong>24/7</strong>
                  <span>SLA Operations</span>
                </div>
                <div>
                  <strong>99.99%</strong>
                  <span>Uptime Track Record</span>
                </div>
                <div>
                  <strong>100%</strong>
                  <span>In-House Talent</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
