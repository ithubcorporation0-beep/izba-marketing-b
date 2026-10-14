import React from 'react';
import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/config/site';
import { AlertTriangle, Mail } from 'lucide-react';
import { constructMetadata } from '@/lib/seo/metadata';
import styles from '../legal.module.css';

export const metadata: Metadata = constructMetadata({
  title: 'Privacy Policy',
  description:
    'Overview of data handling, enquiry form transmission, and privacy practices for IZBA Marketing agency.',
  pathname: '/privacy',
});

export default function PrivacyPage() {
  return (
    <div className={styles.legalWrapper}>
      <Container size="narrow">
        {/* Mandatory Draft Banner */}
        <div className={styles.draftBanner} role="alert">
          <AlertTriangle size={22} className="shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <strong>Draft Notice:</strong> This document is a preliminary draft
            reflecting the technical data flows of this website. It must be
            reviewed and tailored by the business owner and legal advisor before
            official launch.
          </div>
        </div>

        <header className={styles.header}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.updated}>Last updated: October 2026</p>
        </header>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>1. Overview & Data Controller</h2>
            <p>
              {siteConfig.name} (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or
              &ldquo;us&rdquo;) is committed to handling business enquiries and
              personal information transparently and responsibly. This Privacy
              Policy explains how information collected through this website is
              processed, stored, and protected.
            </p>
            <p>
              For inquiries regarding this policy or data processing, you may
              contact us at{' '}
              {siteConfig.contact.email.startsWith('PLACEHOLDER_') ? (
                <span>{siteConfig.contact.email}</span>
              ) : (
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-[var(--color-navy)] underline hover:text-[var(--color-gold)]"
                >
                  {siteConfig.contact.email}
                </a>
              )}
              .
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Information We Collect</h2>
            <p>
              We collect information you explicitly provide when submitting a
              project enquiry through our website forms:
            </p>
            <ul>
              <li>
                <strong>Contact Information:</strong> Full name, business email
                address, and optional phone or WhatsApp number.
              </li>
              <li>
                <strong>Project Requirements:</strong> Company or brand name,
                service category of interest, estimated budget range, and your
                written project scope or inquiry message.
              </li>
              <li>
                <strong>Technical Logs:</strong> Standard CDN/server access logs
                (such as IP address, browser type, and timestamps) generated
                automatically by our hosting provider for security and network
                routing.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. How Enquiry Submissions Are Handled</h2>
            <p>
              This website operates as a static web application. When you submit
              the Request a Quote form:
            </p>
            <ul>
              <li>
                Your submission is encrypted and securely sent via HTTPS to our
                static form gateway service (<strong>Web3Forms</strong>).
              </li>
              <li>
                Web3Forms delivers the message directly to the designated
                company inbox ({siteConfig.contact.email}) so our team can
                respond to you.
              </li>
              <li>
                We do not sell, rent, license, or monetize your contact details
                or project inquiries to any third-party advertisers or brokers.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>4. Website Hosting Infrastructure</h2>
            <p>
              This website is hosted on <strong>Vercel</strong>. Vercel acts as a
              hosting and CDN infrastructure provider, serving static pages
              globally. Technical transmission logs are governed by standard
              security practices and data processing agreements.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. Analytics & Tracking</h2>
            <p>
              If web analytics is enabled via configuration, it collects
              anonymized, aggregated usage statistics (such as page views and
              general device categories) to help us improve site navigation.
            </p>
            <p>
              <strong>Strict Privacy Standard:</strong> Personal details,
              contact information, and message bodies entered into enquiry forms
              are never sent to analytics tracking systems.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. Data Retention & Your Rights</h2>
            <p>
              We retain business enquiry emails only for the duration necessary
              to communicate with you, scope and deliver projects, or meet
              legitimate accounting and commercial obligations.
            </p>
            <p>
              Depending on your jurisdiction, you may have the right to request
              access to the information we hold about you, request corrections,
              or request that we delete your contact records. To exercise these
              rights, please contact us by email.
            </p>
          </section>

          <section className={styles.section}>
            <h2>7. Contact Information</h2>
            <p>
              If you have any questions or concerns about our privacy practices,
              please reach out:
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
