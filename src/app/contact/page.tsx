import React from 'react';
import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { PageHeaderBanner } from '@/components/ui/PageHeaderBanner';
import { ContactIllustration } from '@/components/illustrations/ContactIllustration';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { siteConfig } from '@/config/site';
import {
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  Globe,
  ShieldCheck,
  FileText,
  Clock4,
} from 'lucide-react';
import { constructMetadata } from '@/lib/seo/metadata';
import styles from './page.module.css';

export const metadata: Metadata = constructMetadata({
  title: 'Request a Quote & Contact',
  description:
    'Submit your project details for an honest, transparent quote, or connect directly with our technical team.',
  pathname: '/contact',
});

export default function ContactPage() {
  const isPlaceholder = (val: string) =>
    !val || val.startsWith('PLACEHOLDER_');

  return (
    <div className={styles.pageWrapper}>
      {/* 1. Page Header Banner with Breadcrumb & Original SVG Illustration */}
      <PageHeaderBanner
        badge="Direct Enquiry"
        title={
          <>
            Request a Quote &amp;{' '}
            <span className="highlight-gold">Start a Project</span>
          </>
        }
        subtitle="Tell us what you want to build or improve. We review every enquiry and reply with clear, business-friendly next steps."
        breadcrumbs={[{ label: 'Contact Us' }]}
        illustration={<ContactIllustration width={380} height={280} />}
      />

      {/* Main Form Section */}
      <section className={styles.formSection}>
        <Container size="default">
          <div className={styles.layoutGrid}>
            {/* Main Form Column */}
            <div>
              <QuoteForm />
            </div>

            {/* Contact Methods Sidebar */}
            <aside className={styles.sidebarCard} aria-label="Direct contact channels">
              <div>
                <h2 className={styles.sidebarHeading}>Direct Contact</h2>
                <p className={styles.sidebarText}>
                  Prefer direct communication? Reach our team through any of the channels below.
                </p>
              </div>

              <div className={styles.methodsList}>
                {/* Email */}
                <div className={styles.methodItem}>
                  <div className={styles.methodIcon} aria-hidden="true">
                    <Mail size={18} />
                  </div>
                  <div className={styles.methodContent}>
                    <span className={styles.methodLabel}>Email</span>
                    {isPlaceholder(siteConfig.contact.email) ? (
                      <div>
                        <span className={styles.methodValue}>Company Email</span>
                        <div className={styles.placeholderTag}>
                          <AlertCircle size={12} />
                          <span>Placeholder: {siteConfig.contact.email}</span>
                        </div>
                      </div>
                    ) : (
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className={styles.methodLink}
                      >
                        {siteConfig.contact.email}
                      </a>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div className={styles.methodItem}>
                  <div className={styles.methodIcon} aria-hidden="true">
                    <Phone size={18} />
                  </div>
                  <div className={styles.methodContent}>
                    <span className={styles.methodLabel}>Phone</span>
                    {isPlaceholder(siteConfig.contact.phone) ? (
                      <div>
                        <span className={styles.methodValue}>Telephone</span>
                        <div className={styles.placeholderTag}>
                          <AlertCircle size={12} />
                          <span>Placeholder: {siteConfig.contact.phone}</span>
                        </div>
                      </div>
                    ) : (
                      <a
                        href={`tel:${siteConfig.contact.phone}`}
                        className={styles.methodLink}
                      >
                        {siteConfig.contact.phone}
                      </a>
                    )}
                  </div>
                </div>

                {/* WhatsApp */}
                <div className={styles.methodItem}>
                  <div className={styles.methodIcon} aria-hidden="true">
                    <MessageSquare size={18} />
                  </div>
                  <div className={styles.methodContent}>
                    <span className={styles.methodLabel}>WhatsApp</span>
                    {isPlaceholder(siteConfig.contact.whatsapp) ? (
                      <div>
                        <span className={styles.methodValue}>WhatsApp Chat</span>
                        <div className={styles.placeholderTag}>
                          <AlertCircle size={12} />
                          <span>Placeholder: {siteConfig.contact.whatsapp}</span>
                        </div>
                      </div>
                    ) : (
                      <a
                        href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.methodLink}
                      >
                        {siteConfig.contact.whatsapp}
                      </a>
                    )}
                  </div>
                </div>

                {/* Service Area */}
                <div className={styles.methodItem}>
                  <div className={styles.methodIcon} aria-hidden="true">
                    <Globe size={18} />
                  </div>
                  <div className={styles.methodContent}>
                    <span className={styles.methodLabel}>Service Area</span>
                    <span className={styles.methodValue}>
                      Serving clients worldwide
                    </span>
                  </div>
                </div>

                {/* Physical Office Address (shown only if filled) */}
                {!isPlaceholder(siteConfig.contact.address) && (
                  <div className={styles.methodItem}>
                    <div className={styles.methodIcon} aria-hidden="true">
                      <MapPin size={18} />
                    </div>
                    <div className={styles.methodContent}>
                      <span className={styles.methodLabel}>Office Location</span>
                      <span className={styles.methodValue}>
                        {siteConfig.contact.address}
                      </span>
                    </div>
                  </div>
                )}

                {/* Working Hours */}
                <div className={styles.methodItem}>
                  <div className={styles.methodIcon} aria-hidden="true">
                    <Clock size={18} />
                  </div>
                  <div className={styles.methodContent}>
                    <span className={styles.methodLabel}>Operating Hours</span>
                    {isPlaceholder(siteConfig.contact.workingHours) ? (
                      <div>
                        <span className={styles.methodValue}>Business Hours</span>
                        <div className={styles.placeholderTag}>
                          <AlertCircle size={12} />
                          <span>Placeholder: {siteConfig.contact.workingHours}</span>
                        </div>
                      </div>
                    ) : (
                      <span className={styles.methodValue}>
                        {siteConfig.contact.workingHours}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* What Happens Next: Verifiable Reassurance Points */}
              <div className={styles.trustPointsBox}>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-navy)] mb-2">
                  What Happens Next
                </h3>
                <div className={styles.trustPoint}>
                  <Clock4 size={16} className={styles.trustIcon} />
                  <span><strong>Within 24 business hours:</strong> A project lead reviews your technical requirements.</span>
                </div>
                <div className={styles.trustPoint}>
                  <FileText size={16} className={styles.trustIcon} />
                  <span><strong>Written Scope:</strong> We outline milestones and deliverables before any commitments.</span>
                </div>
                <div className={styles.trustPoint}>
                  <ShieldCheck size={16} className={styles.trustIcon} />
                  <span><strong>Complete Privacy:</strong> Your operational plans remain 100% confidential.</span>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </div>
  );
}
