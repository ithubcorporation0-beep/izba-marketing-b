'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, ArrowRight } from 'lucide-react';
import { MobileNav } from './MobileNav';
import { Button } from '@/components/ui/Button';
import { projects } from '@/content/projects';
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
    ...(projects.length > 0 ? [{ label: 'Portfolio', href: '/portfolio' }] : []),
    { label: 'Digital Products', href: '/digital-products' },
    { label: 'Contact', href: '/contact' },
  ];

  // Dark header style applies at top of page across the site (over hero & navy banners)
  const isDarkHeader = !isScrolled;

  const headerStyleClass = isDarkHeader
    ? styles.headerDarkHero
    : styles.headerGlassScrolled;

  const visibilityClass = isVisible ? styles.headerVisible : styles.headerHidden;

  return (
    <>
      <header
        className={`${styles.headerWrapper} ${headerStyleClass} ${visibilityClass}`}
        role="banner"
      >
        <div className="max-w-[var(--container-max)] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo - slightly larger */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] rounded-[var(--radius-sm)]"
            aria-label="IZBA Marketing Agency logo"
          >
            <Image
              src={isDarkHeader ? '/logo-light.svg' : '/logo.svg'}
              alt="IZBA Marketing Agency logo"
              width={180}
              height={45}
              priority
              className="h-10 md:h-11 w-auto object-contain transition-opacity duration-200"
            />
          </Link>

          {/* Desktop Navigation with Animated Underlines & White Text */}
          <nav
            className={`hidden md:flex items-center px-3.5 py-1.5 rounded-full border transition-colors ${
              isDarkHeader
                ? 'bg-white/10 border-white/15 backdrop-blur-md'
                : 'bg-[var(--color-white)] border-[var(--color-border)] shadow-xs'
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
                      isDarkHeader
                        ? isActive
                          ? styles.navLinkActiveDark
                          : 'text-white/90 hover:text-white'
                        : isActive
                          ? styles.navLinkActiveLight
                          : 'text-[var(--color-text-main)] hover:text-[var(--color-navy)]'
                    } focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]`}
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
            {/* The Gold "Get in Touch" button */}
            <div className="inline-flex">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-bold rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2 select-none text-xs md:text-sm px-4 md:px-5 py-2 md:py-2.5 gap-2 shadow-sm bg-[var(--color-gold)] text-[var(--color-navy)] hover:bg-[var(--color-gold-light)] hover:shadow-[var(--shadow-glow-gold)] active:scale-[0.98]"
              >
                <span>Get in Touch</span>
              </Link>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              className={`md:hidden p-2 rounded-[var(--radius-md)] border focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] transition-colors ${
                isDarkHeader
                  ? 'text-white border-white/20 hover:bg-white/10'
                  : 'text-[var(--color-navy)] hover:bg-[var(--color-white)] border-[var(--color-border)]'
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
