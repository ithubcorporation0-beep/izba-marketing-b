import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';
import { siteConfig } from '@/config/site';
import styles from '@/app/legal.module.css';

export const metadata: Metadata = constructMetadata({
  title: 'Privacy Policy',
  description:
    'Enterprise privacy and data governance policies of IT HUB Corporation.',
  pathname: '/privacy',
});

export default function PrivacyPage() {
  return (
    <div className={styles.legalWrapper}>
      <div className={`container ${styles.legalContainer}`}>
        <div className={styles.header}>
          <h1 className={styles.title}>Enterprise Privacy Statement</h1>
          <p className={styles.updated}>
            Effective Date: October 2026 &middot; Version 4.2
          </p>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>1. Commitment to Enterprise Privacy</h2>
            <p>
              {siteConfig.legalName} (&ldquo;IT HUB Corporation&rdquo;,
              &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is
              dedicated to safeguarding client intellectual property, corporate
              datasets, and personal identifying information. We operate under
              strict zero-knowledge and zero-retention guidelines for all client
              source repositories and runtime telemetry.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Information Collection & Use</h2>
            <p>
              We collect information strictly necessary to execute technical
              consultations, deliver software engineering contracts, and
              maintain infrastructure service level agreements (SLAs):
            </p>
            <ul>
              <li>
                <strong>Contact & Commercial Coordinates:</strong> Name,
                corporate email, organization affiliation, and project scope
                submitted via RFQ workflows.
              </li>
              <li>
                <strong>System Diagnostics & Telemetry:</strong> Anonymized
                server logs, IP addresses, and session timings necessary for
                firewall defense and DDoS prevention.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. Absolute Intellectual Property Protection</h2>
            <p>
              All codebases, database schemas, architectures, and proprietary
              algorithms created or touched during an enterprise engagement
              belong exclusively to the client. IT HUB Corporation will never
              train public AI models on client code or share artifacts with
              third parties.
            </p>
          </section>

          <section className={styles.section}>
            <h2>4. Security Standards & Compliance</h2>
            <p>
              We maintain SOC 2 Type II compliance, ISO 27001 data security
              practices, and end-to-end TLS 1.3 / AES-256 encryption across all
              digital communications and project asset vaults.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. Contact Data Privacy Officer</h2>
            <p>
              For data privacy inquiries or to request cryptographic erasure of
              commercial discovery records, contact our Data Governance Officer
              at{' '}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                style={{ color: 'var(--color-accent-cyan)' }}
              >
                {siteConfig.contact.email}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
