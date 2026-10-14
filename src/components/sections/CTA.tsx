import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/motion';
import styles from './CTA.module.css';

export const CTASection: React.FC = () => {
  return (
    <section className={styles.section} aria-labelledby="cta-heading">
      <Container>
        <Reveal>
          <div className={styles.ctaBox}>
            <div className={styles.glow} aria-hidden="true" />
            <div className={styles.content}>
              <span className={styles.subheading}>
                <Sparkles size={16} />
                <span>Get Started with IT HUB Corporation</span>
              </span>
              <h2 id="cta-heading" className={styles.title}>
                Ready to Move Your Project Forward?
              </h2>
              <p className={styles.description}>
                Whether you need a custom website, a targeted marketing campaign,
                AI automation, or reliable administrative support, we are here to
                help you build and improve your digital operations.
              </p>
              <div className={styles.actions}>
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight size={18} />}
                >
                  Request a Quote
                </Button>
                <Button href="/services" variant="secondary" size="lg">
                  Explore All Services
                </Button>
              </div>
              <div className={styles.footnote}>
                <ShieldCheck size={16} className={styles.shieldIcon} />
                <span>
                  Confidentiality respected. Clear proposals with no hidden
                  commitments.
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};
