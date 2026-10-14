'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ArrowRight } from 'lucide-react';
import { MobileNav } from './MobileNav';
import { Button } from '@/components/ui/Button';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const pathname = usePathname();
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const lastScrollY = lastScrollYRef.current;

      // Determine if page is scrolled past the top threshold
      if (currentScrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide when scrolling DOWN, show when scrolling UP
      // Only hide if we have scrolled more than 80px down to prevent twitching at top
      if (currentScrollY > 80) {
        if (currentScrollY > lastScrollY + 4) {
          // Scrolling down
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY - 4) {
          // Scrolling up
          setIsVisible(true);
        }
      } else {
        // Near top of page, always keep visible
        setIsVisible(true);
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Digital Products', href: '/digital-products' },
    { label: 'Contact', href: '/contact' },
  ];

  const isDarkHero = pathname === '/' && !isScrolled;

  const headerStyleClass = isDarkHero
    ? styles.headerDarkHero
    : isScrolled
      ? styles.headerGlassScrolled
      : styles.headerLightTop;

  const visibilityClass = isVisible ? styles.headerVisible : styles.headerHidden;

  return (
    <>
      <header
        className={`${styles.headerWrapper} ${headerStyleClass} ${visibilityClass}`}
        role="banner"
      >
        <div className="max-w-[var(--container-max)] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-blue)] rounded-[var(--radius-sm)]"
            aria-label="IT HUB Corporation"
          >
            <div
              className={`w-10 h-10 rounded-[var(--radius-md)] flex items-center justify-center font-bold text-lg tracking-tight transition-all duration-200 ${
                isDarkHero
                  ? 'bg-gradient-to-br from-[var(--color-primary-blue)] to-[var(--color-accent-violet)] text-white shadow-md shadow-blue-500/20'
                  : 'bg-[var(--color-navy)] text-[var(--color-white)] group-hover:bg-[var(--color-primary-blue)]'
              }`}
              aria-hidden="true"
            >
              IT
            </div>
            <div className="flex flex-col">
              <span
                className={`font-extrabold text-lg tracking-tight leading-tight transition-colors duration-200 ${
                  isDarkHero
                    ? 'text-white group-hover:text-[var(--color-accent-cyan)]'
                    : 'text-[var(--color-navy)] group-hover:text-[var(--color-primary-blue)]'
                }`}
              >
                IT HUB
              </span>
              <span
                className={`text-[10px] uppercase tracking-widest font-semibold leading-none ${
                  isDarkHero ? 'text-slate-300' : 'text-[var(--color-muted)]'
                }`}
              >
                Corporation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation with Animated Underlines */}
          <nav
            className={`hidden md:flex items-center px-3 py-1.5 rounded-full border transition-colors ${
              isDarkHero
                ? 'bg-white/10 border-white/15 backdrop-blur-md'
                : 'bg-[var(--color-soft-bg)] border-[var(--color-border)]/80'
            }`}
            aria-label="Primary Navigation"
          >
            <div className={styles.navContainer}>
              {navLinks.map((link) => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname === link.href ||
                      pathname.startsWith(`${link.href}/`);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`${styles.navLink} ${
                      isActive ? styles.navLinkActive : ''
                    } ${
                      isDarkHero
                        ? isActive
                          ? styles.navLinkActiveDark
                          : 'text-slate-200 hover:text-white'
                        : isActive
                          ? styles.navLinkActiveLight
                          : 'text-[var(--color-text-main)] hover:text-[var(--color-navy)]'
                    } focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-blue)]`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span>{link.label}</span>
                    <span className={styles.navLinkUnderline} aria-hidden="true" />
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Header Actions */}
          <div className="flex items-center gap-3">
            {/* The "Request a Quote" button always stays visible whenever the header is shown */}
            <div className="inline-flex">
              <Button
                href="/contact"
                variant="primary"
                size="sm"
                icon={<ArrowRight size={14} />}
              >
                Request a Quote
              </Button>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              className={`md:hidden p-2 rounded-[var(--radius-md)] border focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-blue)] transition-colors ${
                isDarkHero
                  ? 'text-white border-white/20 hover:bg-white/10'
                  : 'text-[var(--color-text-main)] hover:bg-[var(--color-soft-bg)] border-[var(--color-border)]'
              }`}
              onClick={() => setIsMobileNavOpen(true)}
              aria-label="Open mobile navigation"
              aria-expanded={isMobileNavOpen}
              aria-controls="mobile-navigation-dialog"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Navigation Drawer */}
      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
      />
    </>
  );
};
