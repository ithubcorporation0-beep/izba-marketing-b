import React from 'react';
import type { Metadata } from 'next';
import {
  Shield,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Terminal,
} from 'lucide-react';
import { constructMetadata } from '@/lib/seo/metadata';
import { digitalProducts } from '@/content/products';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { CTASection } from '@/components/sections/CTA';
import styles from './page.module.css';

export const metadata: Metadata = constructMetadata({
  title: 'Digital Products & SaaS Accelerators',
  description:
    'Explore IT HUB Corporation proprietary developer tools, cloud FinOps daemons, and zero-trust DevSecOps suites.',
  pathname: '/digital-products',
});

export default function DigitalProductsPage() {
  return (
    <div className={styles.productsPageWrapper}>
      <section className={styles.headerSection}>
        <div className={`container ${styles.headerContainer}`}>
          <Badge variant="purple" size="md">
            Proprietary Accelerators
          </Badge>
          <h1 className={styles.title}>
            Enterprise Digital Products & SaaS Tooling
          </h1>
          <p className={styles.subtitle}>
            In addition to custom engineering services, IT HUB Corporation
            develops battle-tested software suites and automation frameworks
            deployed by Fortune 500 engineering teams.
          </p>
        </div>
      </section>

      <section className={styles.productsSection}>
        <div className="container">
          <div className={styles.grid}>
            {digitalProducts.map((prod) => (
              <Card key={prod.id} className={styles.productCard}>
                <div className={styles.topMeta}>
                  <Badge variant="cyan" size="sm">
                    {prod.category}
                  </Badge>
                  <span className={styles.statusBadge}>{prod.badge}</span>
                </div>

                <h2 className={styles.prodTitle}>{prod.title}</h2>
                <p className={styles.tagline}>{prod.tagline}</p>
                <p className={styles.desc}>{prod.description}</p>

                <div className={styles.metricsBox}>
                  <Terminal size={14} className={styles.metricIcon} />
                  <span>{prod.metrics}</span>
                </div>

                <div className={styles.featuresList}>
                  <h4>Key Capabilities</h4>
                  <ul>
                    {prod.features.map((feat: string, idx: number) => (
                      <li key={idx}>
                        <CheckCircle2 size={16} className={styles.checkIcon} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.actionRow}>
                  <Button
                    href="/contact"
                    variant="primary"
                    size="md"
                    icon={<ArrowRight size={16} />}
                  >
                    Request Enterprise Sandbox
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
