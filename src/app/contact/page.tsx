import React from 'react';
import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Badge } from '@/components/ui/Badge';
import { SectionHeading } from '@/components/ui/SectionHeading';
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
      {/* Navy Page-Header Banner */}
      <header className={styles.headerSection}>
        <Container size="default">
          <div className="mb-4">
            <Breadcrumb items={[{ label: 'Contact Us' }]} variant="dark" />
          </div>
          <div className={styles.headerContainer}>
            <Badge variant="gold" size="md">
              Direct Enquiry
            </Badge>
            <h1 className={styles.title}>
              Request a Quote &amp;{' '}
              <span className={styles.gradientText}>Start a Project</span>
            </h1>
            <p className={styles.subtitle}>
              Tell us what you want to build or improve. We review every enquiry and reply with clear, business-friendly next steps.
            </p>
          </div>
        </Container>
      </header>

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
                Prefer direct communication? Reach our team through any of the
                channels below.
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

            {/* Verifiable Process Guarantees */}
            <div className={styles.trustPointsBox}>
              <div className={styles.trustPoint}>
                <CheckCircle size={16} className={styles.trustIcon} />
                <span>Direct communication with project leads</span>
              </div>
              <div className={styles.trustPoint}>
                <CheckCircle size={16} className={styles.trustIcon} />
                <span>Written scope and deliverables before kickoff</span>
              </div>
              <div className={styles.trustPoint}>
                <CheckCircle size={16} className={styles.trustIcon} />
                <span>Strict privacy and intellectual property protection</span>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  </div>
);
}
