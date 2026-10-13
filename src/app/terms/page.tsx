import React from 'react';
import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service and commercial master agreement frameworks for IT HUB Corporation.',
};

export default function TermsPage() {
  return (
    <div className="py-16 lg:py-20 bg-[var(--color-white)]">
      <Container size="narrow">
        <SectionHeading
          badge="Commercial"
          title="Master Terms of Engagement"
          subtitle="Effective Date: October 2026 · Version 4.0"
          align="left"
        />

        <div className="mt-10 space-y-8 text-[var(--color-text-main)] text-sm sm:text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[var(--color-navy)]">
              1. Engagement Scope & Governance
            </h2>
            <p className="text-[var(--color-muted)]">
              These Terms of Engagement govern the use of the {siteConfig.name} digital platform and establish the baseline
              commercial framework for all Statements of Work (SOWs), technical proposals, and managed service contracts
              executed by {siteConfig.name}.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[var(--color-navy)]">
              2. Professional Engineering Standards
            </h2>
            <p className="text-[var(--color-muted)]">
              IT HUB Corporation warrants that all software engineering, cloud architecture, and security consulting services
              will be conducted by qualified senior engineers in accordance with prevailing enterprise industry standards and
              mutually agreed technical acceptance criteria.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[var(--color-navy)]">
              3. Intellectual Property Ownership
            </h2>
            <p className="text-[var(--color-muted)]">
              Unless otherwise explicitly stipulated in an executed SOW, all deliverables, custom source code, documentation,
              and technical assets created specifically for a client become the sole property of that client upon settlement of
              applicable milestone invoices.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[var(--color-navy)]">
              4. Mutual Confidentiality & NDA
            </h2>
            <p className="text-[var(--color-muted)]">
              Both parties agree to hold all non-public proprietary data, architecture blueprints, commercial terms, and source
              code in strict confidence, applying at least the same degree of care used to protect their own trade secrets.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[var(--color-navy)]">
              5. Service Level Commitments (SLAs)
            </h2>
            <p className="text-[var(--color-muted)]">
              Production support, incident response times (including 15-minute P1 critical triage), and infrastructure
              availability metrics are governed by the dedicated SLA terms specified within the client&rsquo;s Master Services
              Agreement.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
