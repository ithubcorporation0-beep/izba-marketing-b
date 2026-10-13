import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Shield, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { categories } from '@/content/categories';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.topSection}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.brand}>
              <span className={styles.logoBadge}>IT</span>
              <div className={styles.brandTitles}>
                <span className={styles.brandName}>IT HUB</span>
                <span className={styles.brandSubtitle}>Corporation</span>
              </div>
            </Link>
            <p className={styles.brandDesc}>{siteConfig.description}</p>
            <div className={styles.statusBadge}>
              <span className={styles.statusDot} />
              <span>SOC 2 Type II Certified &middot; 99.99% Uptime SLA</span>
            </div>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Solutions & Services</h4>
            <ul className={styles.linkList}>
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/services/category/${cat.slug}`}
                    className={styles.link}
                  >
                    {cat.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className={styles.linkHighlight}>
                  Browse All Services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Company & Work</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/about" className={styles.link}>
                  About IT HUB
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className={styles.link}>
                  Client Case Studies
                </Link>
              </li>
              <li>
                <Link href="/digital-products" className={styles.link}>
                  Digital Products & SaaS
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.link}>
                  Request a Quote
                </Link>
              </li>
              <li>
                <Link href="/privacy" className={styles.link}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className={styles.link}>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Global HQ & Operations</h4>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <MapPin size={16} className={styles.contactIcon} />
                <span>{siteConfig.contact.address}</span>
              </div>
              <div className={styles.contactItem}>
                <Phone size={16} className={styles.contactIcon} />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className={styles.contactLink}
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className={styles.contactItem}>
                <Mail size={16} className={styles.contactIcon} />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className={styles.contactLink}
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>

            <div className={styles.socials}>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className={styles.socialBtn}
              >
                <svg
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.5a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
                </svg>
              </a>
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className={styles.socialBtn}
              >
                <svg
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                </svg>
              </a>
              <a
                href={siteConfig.socials.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className={styles.socialBtn}
              >
                <svg
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.copyright}>
            &copy; {currentYear} {siteConfig.legalName}. All rights reserved.
          </div>
          <div className={styles.legalLinks}>
            <Link href="/privacy" className={styles.legalLink}>
              Privacy Statement
            </Link>
            <span className={styles.dotSeparator}>&bull;</span>
            <Link href="/terms" className={styles.legalLink}>
              Terms of Engagement
            </Link>
            <span className={styles.dotSeparator}>&bull;</span>
            <Link href="/sitemap.xml" className={styles.legalLink}>
              XML Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
