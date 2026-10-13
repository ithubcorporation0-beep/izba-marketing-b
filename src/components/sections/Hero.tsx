import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Sparkles,
  Terminal,
  CheckCircle2,
  Shield,
  Activity,
} from 'lucide-react';
import { heroContent } from '@/content/featured';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroGlow} aria-hidden="true" />
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          <div className={styles.badgeWrapper}>
            <Badge variant="cyan" size="md" dot>
              {heroContent.badge}
            </Badge>
          </div>

          <h1 className={styles.heroTitle}>
            Engineering the <span className={styles.gradientText}>Future</span>{' '}
            of Enterprise Technology
          </h1>

          <p className={styles.heroSubtitle}>{heroContent.subtitle}</p>

          <div className={styles.ctaGroup}>
            <Button
              href={heroContent.primaryCtaLink}
              variant="primary"
              size="lg"
              icon={<ArrowRight size={18} />}
            >
              {heroContent.primaryCtaText}
            </Button>
            <Button
              href={heroContent.secondaryCtaLink}
              variant="outline"
              size="lg"
            >
              {heroContent.secondaryCtaText}
            </Button>
          </div>

          <div className={styles.trustSignals}>
            <div className={styles.trustItem}>
              <CheckCircle2 size={16} className={styles.trustIcon} />
              <span>SOC 2 Type II Certified</span>
            </div>
            <div className={styles.trustItem}>
              <Shield size={16} className={styles.trustIcon} />
              <span>Zero-Downtime Guarantee</span>
            </div>
            <div className={styles.trustItem}>
              <Activity size={16} className={styles.trustIcon} />
              <span>99.99% Production SLA</span>
            </div>
          </div>
        </div>

        {/* Visual Engineering Terminal Mockup */}
        <div className={styles.terminalWrapper}>
          <div className={styles.terminalCard}>
            <div className={styles.terminalHeader}>
              <div className={styles.terminalDots}>
                <span className={styles.dotRed} />
                <span className={styles.dotYellow} />
                <span className={styles.dotGreen} />
              </div>
              <div className={styles.terminalTitle}>
                <Terminal size={14} />
                <span>ithub-mesh --active-status</span>
              </div>
              <span className={styles.liveIndicator}>LIVE 99.999%</span>
            </div>

            <div className={styles.terminalBody}>
              <div className={styles.terminalLine}>
                <span className={styles.prompt}>$</span>
                <span className={styles.cmd}>
                  ithub status --cluster=prod-us-east-1
                </span>
              </div>
              <div className={styles.terminalOutput}>
                <span className={styles.outputSuccess}>
                  &check; Multi-Region Kubernetes Mesh:
                </span>{' '}
                Healthy (64 Nodes)
              </div>
              <div className={styles.terminalOutput}>
                <span className={styles.outputSuccess}>
                  &check; Zero-Trust mTLS Encryption:
                </span>{' '}
                Active (WireGuard ZTNA)
              </div>
              <div className={styles.terminalOutput}>
                <span className={styles.outputSuccess}>
                  &check; Ingest Telemetry Throughput:
                </span>{' '}
                48,250 req/sec
              </div>
              <div className={styles.terminalOutput}>
                <span className={styles.outputSuccess}>
                  &check; p99 Latency SLA:
                </span>{' '}
                6.8ms (Target &lt; 15ms)
              </div>

              <div className={styles.metricsBox}>
                <div className={styles.metricItem}>
                  <span className={styles.metricVal}>99.999%</span>
                  <span className={styles.metricLbl}>Uptime SLA</span>
                </div>
                <div className={styles.metricDivider} />
                <div className={styles.metricItem}>
                  <span className={styles.metricVal}>45M+</span>
                  <span className={styles.metricLbl}>Daily Events</span>
                </div>
                <div className={styles.metricDivider} />
                <div className={styles.metricItem}>
                  <span className={styles.metricVal}>250+</span>
                  <span className={styles.metricLbl}>Deploys</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Client Trust Logos */}
      <div className={styles.clientSection}>
        <div className="container">
          <p className={styles.clientLabel}>
            Trusted by engineering leadership across regulated industries
          </p>
          <div className={styles.logoGrid}>
            {heroContent.clientLogos.map((client, idx) => (
              <div key={idx} className={styles.logoItem}>
                <span className={styles.clientName}>{client.name}</span>
                <span className={styles.clientTag}>{client.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
