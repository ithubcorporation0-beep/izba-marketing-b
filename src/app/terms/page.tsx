import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';
import { siteConfig } from '@/config/site';
import styles from '@/app/legal.module.css';

export const metadata: Metadata = constructMetadata({
  title: 'Terms of Service',
  description:
    'Terms of service and commercial master agreement frameworks for IT HUB Corporation.',
  pathname: '/terms',
});

export default function TermsPage() {
  return (
    <div className={styles.legalWrapper}>
      <div className={`container ${styles.legalContainer}`}>
        <div className={styles.header}>
          <h1 className={styles.title}>Master Terms of Engagement</h1>
          <p className={styles.updated}>
            Effective Date: October 2026 &middot; Version 4.0
          </p>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>1. Engagement Scope & Governance</h2>
            <p>
              These Terms of Engagement govern the use of the {siteConfig.name}{' '}
              digital platform and establish the baseline commercial framework
              for all Statements of Work (SOWs), technical proposals, and
              managed service contracts executed by {siteConfig.legalName}.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Professional Engineering Standards</h2>
            <p>
              IT HUB Corporation warrants that all software engineering, cloud
              architecture, and security consulting services will be conducted
              by qualified senior engineers in accordance with prevailing
              enterprise industry standards and mutually agreed technical
              acceptance criteria.
            </p>
          </section>

          <section className={styles.section}>
            <h2>3. Intellectual Property Ownership</h2>
            <p>
              Unless otherwise explicitly stipulated in an executed SOW, all
              deliverables, custom source code, documentation, and technical
              assets created specifically for a client become the sole property
              of that client upon settlement of applicable milestone invoices.
            </p>
          </section>

          <section className={styles.section}>
            <h2>4. Mutual Confidentiality & NDA</h2>
            <p>
              Both parties agree to hold all non-public proprietary data,
              architecture blueprints, commercial terms, and source code in
              strict confidence, applying at least the same degree of care used
              to protect their own trade secrets.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. Service Level Commitments (SLAs)</h2>
            <p>
              Production support, incident response times (including 15-minute
              P1 critical triage), and infrastructure availability metrics are
              governed by the dedicated SLA terms specified within the
              client&rsquo;s Master Services Agreement.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
