import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { categories } from '@/content/categories';
import { Badge } from '@/components/ui/Badge';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const isPlaceholder = (val: string) => {
    return !val || val.startsWith('PLACEHOLDER_');
  };

  const renderContactValue = (val: string, label: string) => {
    if (isPlaceholder(val)) {
      return (
        <span className="flex flex-col gap-1 items-start">
          <span className="text-xs text-[var(--color-muted)]">{label}</span>
          <Badge variant="error" size="sm">
            Placeholder: {val || 'Not set'}
          </Badge>
        </span>
      );
    }
    return <span>{val}</span>;
  };

  return (
    <footer
      className="bg-[var(--color-navy)] text-[var(--color-white)] border-t border-[var(--color-border-dark)]/20 mt-auto"
      role="contentinfo"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand & Description (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-blue)] rounded-[var(--radius-sm)]"
              aria-label="IT HUB Corporation Home"
            >
              <div className="w-9 h-9 rounded-[var(--radius-md)] bg-[var(--color-primary-blue)] flex items-center justify-center text-[var(--color-white)] font-bold text-base">
                IT
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg text-[var(--color-white)] tracking-tight leading-tight">
                  {siteConfig.name}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-[var(--color-muted)] font-semibold">
                  {siteConfig.tagline}
                </span>
              </div>
            </Link>

            <p className="text-sm text-[var(--color-muted)] leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>

            <div className="pt-2">
              <Badge
                variant="neutral"
                size="sm"
                className="bg-[var(--color-white)]/10 text-[var(--color-white)] border-transparent"
              >
                Clear Communication & Support
              </Badge>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-white)]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-[var(--color-muted)] hover:text-[var(--color-white)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-blue)] rounded-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[var(--color-muted)] hover:text-[var(--color-white)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-blue)] rounded-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-[var(--color-muted)] hover:text-[var(--color-white)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-blue)] rounded-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-[var(--color-muted)] hover:text-[var(--color-white)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-blue)] rounded-sm"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/digital-products"
                  className="text-[var(--color-muted)] hover:text-[var(--color-white)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-blue)] rounded-sm"
                >
                  Digital Products
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[var(--color-muted)] hover:text-[var(--color-white)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-blue)] rounded-sm"
                >
                  Contact & Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Categories (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-white)]">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/services#${cat.slug}`}
                    className="text-[var(--color-muted)] hover:text-[var(--color-white)] transition-colors flex items-center justify-between group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-blue)] rounded-sm"
                  >
                    <span className="truncate">{cat.name}</span>
                    <ArrowRight
                      size={12}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[var(--color-primary-blue)]"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-white)]">
              Contact & HQ
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin
                  size={16}
                  className="text-[var(--color-primary-blue)] shrink-0 mt-0.5"
                />
                <div>
                  {renderContactValue(
                    siteConfig.contact.address,
                    'Office Address'
                  )}
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail
                  size={16}
                  className="text-[var(--color-primary-blue)] shrink-0 mt-0.5"
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
                      className="text-[var(--color-muted)] hover:text-[var(--color-white)] transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone
                  size={16}
                  className="text-[var(--color-primary-blue)] shrink-0 mt-0.5"
                />
                <div>
                  {isPlaceholder(siteConfig.contact.phone) ? (
                    renderContactValue(siteConfig.contact.phone, 'Phone Number')
                  ) : (
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-[var(--color-muted)] hover:text-[var(--color-white)] transition-colors"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock
                  size={16}
                  className="text-[var(--color-primary-blue)] shrink-0 mt-0.5"
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

        {/* Bottom Legal Bar */}
        <div className="mt-12 pt-8 border-t border-[var(--color-white)]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--color-muted)]">
          <p>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-[var(--color-white)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-blue)] rounded-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[var(--color-white)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-blue)] rounded-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
