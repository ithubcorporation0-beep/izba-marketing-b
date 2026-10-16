'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Mail, Sparkles, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/motion';
import styles from './ClosingCta.module.css';

interface ClosingCtaProps {
  headline?: string;
  subheadline?: string;
  primaryBtnText?: string;
}

export const ClosingCta: React.FC<ClosingCtaProps> = ({
  headline,
  subheadline,
  primaryBtnText,
}) => {
  const displayHeadline =
    headline || siteConfig.closingCta?.headline || 'Ready to start your project?';
  const displaySubheadline =
    subheadline ||
    siteConfig.closingCta?.subheadline ||
    'From custom software architecture and digital marketing to AI workflows and creative branding — we partner with businesses to build modern, reliable operations.';
  const displayBtnText =
    primaryBtnText || siteConfig.closingCta?.primaryBtnText || 'Request a Quote';

  const email = siteConfig.contact.email;
  const isPlaceholderEmail = !email || email.startsWith('PLACEHOLDER_');

  return (
    <section className={styles.section} aria-labelledby="closing-cta-heading">
      <Container size="default">
        <div className={styles.panelCard}>
          {/* Animated glowing orbs matching hero palette */}
          <div className={styles.orbWrapper} aria-hidden="true">
            <div className={styles.orbBlue} />
            <div className={styles.orbViolet} />
            <div className={styles.gridPattern} />
          </div>

          <Reveal className={styles.content}>
            <div className={styles.badge}>
              <Sparkles size={14} aria-hidden="true" />
              <span>Start Building Today</span>
            </div>

            <h2 id="closing-cta-heading" className={styles.title}>
              {displayHeadline}
            </h2>

            <p className={styles.subtitle}>{displaySubheadline}</p>

            <div className={styles.actions}>
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight size={18} />}
              >
                {displayBtnText}
              </Button>

              {isPlaceholderEmail ? (
                <Button href="/contact" variant="secondary" size="lg">
                  <span>Contact Our Team</span>
                </Button>
              ) : (
                <a
                  href={`mailto:${email}`}
                  className={styles.emailBtn}
                  aria-label={`Send an email to ${email}`}
                >
                  <Mail size={16} aria-hidden="true" />
                  <span>{email}</span>
                </a>
              )}
            </div>

            <div className={styles.note}>
              <ShieldCheck size={14} className="text-emerald-400" aria-hidden="true" />
              <span>Strict confidentiality. Transparent scopes with no hidden commitments.</span>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};
