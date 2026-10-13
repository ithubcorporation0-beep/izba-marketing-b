import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Mail, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import styles from './CTA.module.css';

export const CTASection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.ctaBox}>
          <div className={styles.glow} aria-hidden="true" />
          <div className={styles.content}>
            <span className={styles.subheading}>
              <Sparkles size={16} />
              <span>Ready to Transform Your Infrastructure?</span>
            </span>
            <h2 className={styles.title}>
              Let&rsquo;s Engineer Your Next Competitive Advantage
            </h2>
            <p className={styles.description}>
              Engage directly with our Solutions Architects. We will analyze
              your architecture, deliver a prioritized roadmap, and assemble an
              elite engineering squad within 10 business days.
            </p>
            <div className={styles.actions}>
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight size={18} />}
              >
                Schedule Architecture Discovery
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Explore Full Service Portfolio
              </Button>
            </div>
            <div className={styles.footnote}>
              <ShieldCheck size={16} className={styles.shieldIcon} />
              <span>
                Confidentiality guaranteed. Free initial architecture roadmap
                included.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
