import React from 'react';
import type { Metadata } from 'next';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  MessageSquare,
} from 'lucide-react';
import { constructMetadata } from '@/lib/seo/metadata';
import { siteConfig } from '@/config/site';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import styles from './page.module.css';

export const metadata: Metadata = constructMetadata({
  title: 'Request a Quote & Enterprise Contact',
  description:
    'Initiate a discovery engagement with IT HUB Corporation. Request a technical quote, schedule an architecture audit, or reach our principal engineers.',
  pathname: '/contact',
});

export default function ContactPage() {
  return (
    <div className={styles.contactPageWrapper}>
      <section className={styles.headerSection}>
        <div className={`container ${styles.headerContainer}`}>
          <Badge variant="cyan" size="md">
            Direct Enterprise Engagement
          </Badge>
          <h1 className={styles.title}>
            Request an Architecture Proposal or Technical Consultation
          </h1>
          <p className={styles.subtitle}>
            Connect directly with our senior solutions architects. Whether you
            need a full platform modernization or a targeted security audit, we
            provide clear estimates within 24 hours.
          </p>
        </div>
      </section>

      <section className={styles.formSection}>
        <div className={`container ${styles.gridContainer}`}>
          {/* Left Column: Direct Coordinates & Assurance */}
          <div className={styles.infoCol}>
            <div className={styles.infoBox}>
              <h2 className={styles.infoTitle}>Global Headquarters</h2>
              <p className={styles.infoDesc}>
                Our principal architecture and client engineering teams are
                based in Silicon Valley with distributed centers across North
                America and Europe.
              </p>

              <div className={styles.coordinatesList}>
                <div className={styles.coordItem}>
                  <MapPin size={20} className={styles.coordIcon} />
                  <div>
                    <strong>Silicon Valley HQ</strong>
                    <span>{siteConfig.contact.address}</span>
                  </div>
                </div>

                <div className={styles.coordItem}>
                  <Phone size={20} className={styles.coordIcon} />
                  <div>
                    <strong>Direct Executive Line</strong>
                    <a href={`tel:${siteConfig.contact.phone}`}>
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className={styles.coordItem}>
                  <Mail size={20} className={styles.coordIcon} />
                  <div>
                    <strong>Inquiries & RFQ Routing</strong>
                    <a href={`mailto:${siteConfig.contact.email}`}>
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className={styles.coordItem}>
                  <Clock size={20} className={styles.coordIcon} />
                  <div>
                    <strong>Operational Response</strong>
                    <span>{siteConfig.contact.workingHours}</span>
                  </div>
                </div>
              </div>
            </div>

            <Card className={styles.assuranceCard}>
              <div className={styles.assuranceHeader}>
                <ShieldCheck size={24} className={styles.shieldIcon} />
                <h3>Our Engagement Guarantee</h3>
              </div>
              <ul className={styles.assuranceList}>
                <li>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  <span>
                    <strong>24-Hour SLA:</strong> Dedicated Architect response
                    to all verified RFQs.
                  </span>
                </li>
                <li>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  <span>
                    <strong>Mutual NDA:</strong> Automated execution of strict
                    confidentiality terms.
                  </span>
                </li>
                <li>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  <span>
                    <strong>No Vendor Lock-in:</strong> 100% IP handover, clean
                    documentation, zero proprietary runtimes.
                  </span>
                </li>
              </ul>
            </Card>
          </div>

          {/* Right Column: Quote Form */}
          <div className={styles.formCol}>
            <QuoteForm />
          </div>
        </div>
      </section>
    </div>
  );
}
