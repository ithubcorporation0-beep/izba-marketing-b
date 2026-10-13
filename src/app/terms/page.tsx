import React from 'react';
import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/config/site';
import { AlertTriangle } from 'lucide-react';
import { constructMetadata } from '@/lib/seo/metadata';
import styles from '../legal.module.css';

export const metadata: Metadata = constructMetadata({
  title: 'Terms of Service',
  description:
    'Terms of engagement, website usage policies, and service framework for IT HUB Corporation.',
  pathname: '/terms',
});

export default function TermsPage() {
  return (
    <div className={styles.legalWrapper}>
      <Container size="narrow">
        {/* Mandatory Draft Banner */}
        <div className={styles.draftBanner} role="alert">
          <AlertTriangle size={22} className="shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <strong>Draft Notice:</strong> This terms of service document is a
            preliminary template. It must be reviewed and customized by the
            business owner and legal advisor to match the specific jurisdiction
            and corporate entity before launch.
          </div>
        </div>

        <header className={styles.header}>
          <h1 className={styles.title}>Terms of Service</h1>
          <p className={styles.updated}>Last updated: October 2026</p>
        </header>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the website of {siteConfig.name}{' '}
              (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), you
              agree to comply with and be bound by these Terms of Service. If you
              do not agree with these terms, please refrain from using this
              website.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Informational Platform & Quotations</h2>
            <p>
              This website serves as an informational directory of technology,
              design, marketing, and AI services, and provides a portal to
              request consultations and project estimates.
            </p>
            <ul>
              <li>
                <strong>No Automatic Contracting:</strong> Submitting a quote
                enquiry or receiving an preliminary estimate does not form a
                binding commercial contract.
              </li>
              <li>
                <strong>Mutual Agreement Required:</strong> Official project
                engagements begin only after both parties agree to a formal
                written scope of work, timeline, and commercial terms.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. Intellectual Property Rights</h2>
            <p>
              All original text, layouts, graphics, branding, and code on this
              website are the property of {siteConfig.name} and are protected by
              applicable copyright and trademark laws.
            </p>
            <p>
              <strong>Client Work & Ownership:</strong> Deliverables, custom
              software, templates, and designs produced for clients during
              commissioned projects are transferred to the client in accordance
              with the specific contract executed for that engagement upon
              payment of agreed fees.
            </p>
          </section>

          <section className={styles.section}>
            <h2>4. Third-Party Services & Links</h2>
            <p>
              Our website may link to third-party tools, social platforms, or
              external resources (such as Web3Forms for form processing or
              Vercel for hosting). We do not control and are not responsible for
              the content or policies of third-party websites.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. Disclaimer & Limitation of Liability</h2>
            <p>
              This website and its content are provided on an &ldquo;as
              is&rdquo; basis for informational purposes. While we endeavor to
              maintain accurate and current service information, we make no
              warranties regarding uninterrupted access or immediate availability
              of specific project slots.
            </p>
            <p>
              Formal project warranties, deliverables, and service commitments
              are defined exclusively in individual executed client contracts.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. Contact & Legal Inquiries</h2>
            <p>
              For legal questions, commercial contract requests, or inquiries
              regarding these terms, please contact:
            </p>
            <ul>
              <li>
                <strong>Company:</strong> {siteConfig.name}
              </li>
              <li>
                <strong>Email:</strong> {siteConfig.contact.email}
              </li>
              <li>
                <strong>Address:</strong> {siteConfig.contact.address}
              </li>
            </ul>
          </section>
        </div>
      </Container>
    </div>
  );
}
