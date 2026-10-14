'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import gsap from 'gsap';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/Button';
import { useReducedMotion } from '@/lib/motion';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const isReducedMotion = useReducedMotion();
  const [isRendered, setIsRendered] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close smoothly with animation
  const handleAnimatedClose = useCallback(() => {
    if (isReducedMotion || !drawerRef.current || !backdropRef.current) {
      onClose();
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        onClose();
      },
    });

    tl.to(drawerRef.current, {
      xPercent: 100,
      duration: 0.28,
      ease: 'power3.in',
    }).to(
      backdropRef.current,
      {
        opacity: 0,
        duration: 0.22,
        ease: 'power2.in',
      },
      '-=0.15'
    );
  }, [isReducedMotion, onClose]);

  // Handle route change
  useEffect(() => {
    if (isOpen) {
      handleAnimatedClose();
    }
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  // Handle open / mount state & animation
  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);

      // Lock body scroll
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      // Focus close button
      const timer = setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 60);

      // Animation on open
      if (!isReducedMotion) {
        requestAnimationFrame(() => {
          if (!drawerRef.current || !backdropRef.current) return;

          gsap.killTweensOf([drawerRef.current, backdropRef.current]);

          const tl = gsap.timeline();
          tl.fromTo(
            backdropRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.25, ease: 'power2.out' }
          );
          tl.fromTo(
            drawerRef.current,
            { xPercent: 100 },
            { xPercent: 0, duration: 0.35, ease: 'power3.out' },
            '<'
          );

          // Staggered reveal for nav links
          const navItems = drawerRef.current.querySelectorAll('.mobile-nav-item');
          if (navItems.length > 0) {
            tl.fromTo(
              navItems,
              { opacity: 0, x: 20 },
              { opacity: 1, x: 0, duration: 0.25, ease: 'power2.out', stagger: 0.04 },
              '-=0.18'
            );
          }
        });
      }

      return () => {
        document.body.style.overflow = originalOverflow;
        clearTimeout(timer);
      };
    } else {
      setIsRendered(false);
    }
  }, [isOpen, isReducedMotion]);

  // Handle keyboard events (Escape to close & Tab focus trap)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        handleAnimatedClose();
        return;
      }

      if (e.key === 'Tab' && drawerRef.current) {
        const focusableElements = drawerRef.current.querySelectorAll<HTMLElement>(
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
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleAnimatedClose]);

  if (!isOpen && !isRendered) return null;

  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Digital Products', href: '/digital-products' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex justify-end"
      role="dialog"
      id="mobile-navigation-dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      {/* Backdrop */}
      <div
        ref={backdropRef}
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-200"
        onClick={handleAnimatedClose}
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
            onClick={handleAnimatedClose}
            className="flex items-center gap-2.5"
            aria-label={`${siteConfig.name} Home`}
          >
            <div
              className="w-8 h-8 rounded-[var(--radius-sm)] bg-[var(--color-navy)] flex items-center justify-center text-[var(--color-white)] font-bold text-sm"
              aria-hidden="true"
            >
              IZ
            </div>
            <span className="font-extrabold text-base text-[var(--color-navy)] tracking-tight">
              IZBA{' '}
              <span className="font-normal text-[var(--color-muted)] text-xs">
                Agency
              </span>
            </span>
          </Link>

          <button
            ref={closeButtonRef}
            type="button"
            className="p-2 rounded-[var(--radius-md)] text-[var(--color-muted)] hover:text-[var(--color-navy)] hover:bg-[var(--color-soft-bg)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-blue)]"
            onClick={handleAnimatedClose}
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
              <div key={link.href} className="mobile-nav-item">
                <Link
                  href={link.href}
                  onClick={handleAnimatedClose}
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
              </div>
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
            onClick={handleAnimatedClose}
          >
            Request a Quote
          </Button>
        </div>
      </div>
    </div>
  );
};
