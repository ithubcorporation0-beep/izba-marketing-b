import React from 'react';
import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Enterprise privacy and data governance policies of IT HUB Corporation.',
};

export default function PrivacyPage() {
  return (
    <div className="py-16 lg:py-20 bg-[var(--color-white)]">
      <Container size="narrow">
        <SectionHeading
          badge="Governance"
          title="Enterprise Privacy Statement"
          subtitle="Effective Date: October 2026 · Version 4.2"
          align="left"
        />

        <div className="mt-10 space-y-8 text-[var(--color-text-main)] text-sm sm:text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[var(--color-navy)]">
              1. Commitment to Enterprise Privacy
            </h2>
            <p className="text-[var(--color-muted)]">
              {siteConfig.name} (&ldquo;IT HUB Corporation&rdquo;,
              &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is
              dedicated to safeguarding client intellectual property, corporate
              datasets, and personal identifying information. We operate under
              strict zero-knowledge and zero-retention guidelines for all client
              source repositories and runtime telemetry.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[var(--color-navy)]">
              2. Information Collection & Use
            </h2>
            <p className="text-[var(--color-muted)]">
              We collect information strictly necessary to execute technical
              consultations, deliver software engineering contracts, and
              maintain infrastructure service level agreements (SLAs):
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[var(--color-muted)]">
              <li>
                <strong className="text-[var(--color-navy)]">
                  Contact & Commercial Coordinates:
                </strong>{' '}
                Name, corporate email, organization affiliation, and project
                scope submitted via RFQ workflows.
              </li>
              <li>
                <strong className="text-[var(--color-navy)]">
                  System Diagnostics & Telemetry:
                </strong>{' '}
                Anonymized server logs, IP addresses, and session timings
                necessary for firewall defense and DDoS prevention.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[var(--color-navy)]">
              3. Absolute Intellectual Property Protection
            </h2>
            <p className="text-[var(--color-muted)]">
              All codebases, database schemas, architectures, and proprietary
              algorithms created or touched during an enterprise engagement
              belong exclusively to the client. IT HUB Corporation will never
              train public AI models on client code or share artifacts with
              third parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[var(--color-navy)]">
              4. Security Standards & Compliance
            </h2>
            <p className="text-[var(--color-muted)]">
              We maintain SOC 2 Type II compliance, ISO 27001 data security
              practices, and end-to-end TLS 1.3 / AES-256 encryption across all
              digital communications and project asset vaults.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[var(--color-navy)]">
              5. Contact Data Privacy Officer
            </h2>
            <p className="text-[var(--color-muted)]">
              For data privacy inquiries or to request cryptographic erasure of
              commercial discovery records, contact our Data Governance Officer
              at{' '}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-[var(--color-primary-blue)] hover:underline font-medium"
              >
                {siteConfig.contact.email}
              </a>
              .
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
