'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, ArrowRight, Phone, Mail } from 'lucide-react';
import { siteConfig } from '@/config/site';
import styles from './MobileNav.module.css';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  if (!isOpen) return null;

  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Digital Products', href: '/digital-products' },
    { label: 'Contact & RFQ', href: '/contact' },
  ];

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className={styles.drawer} onClick={(e) => e.stopPropagation()}>
        <div className={styles.drawerHeader}>
          <div className={styles.brand}>
            <span className={styles.brandIcon}>IT</span>
            <span className={styles.brandText}>HUB Corp</span>
          </div>
          <button
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close navigation menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className={styles.navList}>
          {links.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={[styles.navItem, isActive ? styles.active : '']
                  .filter(Boolean)
                  .join(' ')}
                onClick={onClose}
              >
                <span>{link.label}</span>
                <ArrowRight size={18} className={styles.arrowIcon} />
              </Link>
            );
          })}
        </nav>

        <div className={styles.footerContact}>
          <div className={styles.contactItem}>
            <Mail size={16} className={styles.contactIcon} />
            <span>{siteConfig.contact.email}</span>
          </div>
          <div className={styles.contactItem}>
            <Phone size={16} className={styles.contactIcon} />
            <span>{siteConfig.contact.phone}</span>
          </div>
          <Link href="/contact" className={styles.ctaButton} onClick={onClose}>
            Request Quote
          </Link>
        </div>
      </div>
    </div>
  );
};
