'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Clock, ArrowRight, ArrowUp } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { categories } from '@/content/categories';
import { Badge } from '@/components/ui/Badge';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isPlaceholder = (val: string) => {
    return !val || val.startsWith('PLACEHOLDER_');
  };

  const renderContactValue = (val: string, label: string) => {
    if (isPlaceholder(val)) {
      return (
        <span className="flex flex-col gap-1 items-start">
          <span className="text-xs text-[var(--color-text-muted-dark)]">{label}</span>
          <Badge variant="error" size="sm">
            Placeholder: {val || 'Not set'}
          </Badge>
        </span>
      );
    }
    return <span>{val}</span>;
  };

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        {/* Top Meta Bar: Back to Top */}
        <div className={styles.metaBar}>
          <button
            type="button"
            onClick={scrollToTop}
            className={styles.backToTopBtn}
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp size={14} aria-hidden="true" />
          </button>
        </div>

        {/* 4-Column Navigation & Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand & Description (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] rounded-[var(--radius-sm)]"
              aria-label="IZBA Marketing Agency logo"
            >
              <Image
                src="/logo-light.svg"
                alt="IZBA Marketing Agency logo"
                width={160}
                height={40}
                className="h-9 w-auto object-contain"
              />
            </Link>

            <p className="text-sm text-[var(--color-text-muted-dark)] leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-white)]">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-[var(--color-text-muted-dark)] hover:text-[var(--color-white)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] rounded-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[var(--color-text-muted-dark)] hover:text-[var(--color-white)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] rounded-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-[var(--color-text-muted-dark)] hover:text-[var(--color-white)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] rounded-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-[var(--color-text-muted-dark)] hover:text-[var(--color-white)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] rounded-sm"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/digital-products"
                  className="text-[var(--color-text-muted-dark)] hover:text-[var(--color-white)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] rounded-sm"
                >
                  Digital Products
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[var(--color-text-muted-dark)] hover:text-[var(--color-white)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] rounded-sm"
                >
                  Contact &amp; Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Categories (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-white)]">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/services/${cat.slug}`}
                    className="text-[var(--color-text-muted-dark)] hover:text-[var(--color-white)] transition-colors flex items-center justify-between group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] rounded-sm"
                  >
                    <span className="truncate">{cat.name}</span>
                    <ArrowRight
                      size={12}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[var(--color-gold)]"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-white)]">
              Contact
            </h3>
            <div className="space-y-3 text-sm">
              {!isPlaceholder(siteConfig.contact.address) && (
                <div className="flex items-start gap-2.5">
                  <MapPin
                    size={16}
                    className="text-[var(--color-gold)] shrink-0 mt-0.5"
                  />
                  <div>
                    <span>{siteConfig.contact.address}</span>
                  </div>
                </div>
              )}

              <div className="flex items-start gap-2.5">
                <Mail
                  size={16}
                  className="text-[var(--color-gold)] shrink-0 mt-0.5"
                />
                <div>
                  {isPlaceholder(siteConfig.contact.email) ? (
                    renderContactValue(
                      siteConfig.contact.email,
                      'Email Address'
                    )
                  ) : (
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-[var(--color-text-muted-dark)] hover:text-[var(--color-white)] transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone
                  size={16}
                  className="text-[var(--color-gold)] shrink-0 mt-0.5"
                />
                <div>
                  {isPlaceholder(siteConfig.contact.phone) ? (
                    renderContactValue(siteConfig.contact.phone, 'Phone Number')
                  ) : (
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-[var(--color-text-muted-dark)] hover:text-[var(--color-white)] transition-colors"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock
                  size={16}
                  className="text-[var(--color-gold)] shrink-0 mt-0.5"
                />
                <div>
                  {renderContactValue(
                    siteConfig.contact.workingHours,
                    'Operating Hours'
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Copyright Row */}
        <div className="mt-12 pt-8 border-t border-[var(--color-white)]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--color-text-muted-dark)]">
          <p>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-[var(--color-white)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] rounded-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[var(--color-white)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] rounded-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
