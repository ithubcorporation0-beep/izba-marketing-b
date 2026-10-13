'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/Button';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close on route change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  // Handle keyboard events (Escape to close & Tab focus trap)
  useEffect(() => {
    if (!isOpen) return;

    // Prevent body scroll when drawer is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus close button on mount
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab' && drawerRef.current) {
        const focusableElements =
          drawerRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
        const focusable = Array.from(focusableElements).filter(
          (el) => !el.hasAttribute('disabled') && el.offsetParent !== null
        );

        if (focusable.length === 0) return;

        const firstElement = focusable[0];
        const lastElement = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end"
      role="dialog"
      id="mobile-navigation-dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="relative w-full max-w-sm bg-[var(--color-white)] h-full shadow-2xl flex flex-col z-10 overflow-y-auto"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-5 border-b border-[var(--color-border)]">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center gap-2.5"
            aria-label="IT HUB Corporation Home"
          >
            <div className="w-8 h-8 rounded-[var(--radius-sm)] bg-[var(--color-navy)] flex items-center justify-center text-[var(--color-white)] font-bold text-sm">
              IT
            </div>
            <span className="font-extrabold text-base text-[var(--color-navy)] tracking-tight">
              IT HUB{' '}
              <span className="font-normal text-[var(--color-muted)] text-xs">
                Corp
              </span>
            </span>
          </Link>

          <button
            ref={closeButtonRef}
            type="button"
            className="p-2 rounded-[var(--radius-md)] text-[var(--color-muted)] hover:text-[var(--color-navy)] hover:bg-[var(--color-soft-bg)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-blue)]"
            onClick={onClose}
            aria-label="Close navigation menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-5 flex-1 space-y-1.5" aria-label="Mobile Nav Items">
          {links.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname === link.href ||
                  pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`flex items-center justify-between p-3 rounded-[var(--radius-md)] text-base font-medium transition-all ${
                  isActive
                    ? 'bg-[var(--color-soft-bg)] text-[var(--color-primary-blue)] font-semibold'
                    : 'text-[var(--color-navy)] hover:bg-[var(--color-soft-bg)]/60'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                <span>{link.label}</span>
                <ArrowRight
                  size={16}
                  className={
                    isActive
                      ? 'text-[var(--color-primary-blue)]'
                      : 'text-[var(--color-muted)]'
                  }
                />
              </Link>
            );
          })}
        </nav>

        {/* Drawer Footer with Contact and Quote CTA */}
        <div className="p-5 border-t border-[var(--color-border)] bg-[var(--color-soft-bg)]/40 space-y-4">
          <div className="space-y-2 text-xs text-[var(--color-muted)]">
            <div className="flex items-center gap-2">
              <Mail
                size={14}
                className="text-[var(--color-primary-blue)] shrink-0"
              />
              <span className="truncate">{siteConfig.contact.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone
                size={14}
                className="text-[var(--color-primary-blue)] shrink-0"
              />
              <span>{siteConfig.contact.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin
                size={14}
                className="text-[var(--color-primary-blue)] shrink-0"
              />
              <span className="truncate">{siteConfig.contact.address}</span>
            </div>
          </div>

          <Button
            href="/contact"
            variant="primary"
            className="w-full justify-center"
            onClick={onClose}
          >
            Request a Quote
          </Button>
        </div>
      </div>
    </div>
  );
};
