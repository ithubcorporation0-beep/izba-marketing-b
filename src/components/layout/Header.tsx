'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ArrowUpRight, Sparkles } from 'lucide-react';
import { MobileNav } from './MobileNav';
import { Button } from '@/components/ui/Button';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
  ];

  return (
    <>
      <header
        className={[styles.header, isScrolled ? styles.scrolled : '']
          .filter(Boolean)
          .join(' ')}
      >
        <div className={`container ${styles.headerInner}`}>
          <Link
            href="/"
            className={styles.brand}
            aria-label="IT HUB Corporation Home"
          >
            <span className={styles.logoBadge}>
              <span className={styles.logoText}>IT</span>
            </span>
            <div className={styles.brandTitles}>
              <span className={styles.brandName}>IT HUB</span>
              <span className={styles.brandSubtitle}>Corporation</span>
            </div>
          </Link>

          <nav className={styles.desktopNav} aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={[styles.navLink, isActive ? styles.active : '']
                    .filter(Boolean)
                    .join(' ')}
                >
                  {link.label}
                  {isActive && <span className={styles.activePill} />}
                </Link>
              );
            })}
          </nav>

          <div className={styles.actions}>
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              className={styles.ctaBtn}
              icon={<ArrowUpRight size={16} />}
            >
              Get a Quote
            </Button>

            <button
              className={styles.menuToggle}
              onClick={() => setIsMobileNavOpen(true)}
              aria-label="Open Navigation Menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
      />
    </>
  );
};
