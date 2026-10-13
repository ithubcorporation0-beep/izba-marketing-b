'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ArrowRight } from 'lucide-react';
import { MobileNav } from './MobileNav';
import { Button } from '@/components/ui/Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-[var(--color-white)]/95 backdrop-blur-md shadow-[var(--shadow-sm)] border-b border-[var(--color-border)] py-3'
            : 'bg-[var(--color-white)] border-b border-[var(--color-border)]/60 py-4.5'
        }`}
      >
        <div className="max-w-[var(--container-max)] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Placeholder */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-blue)] rounded-[var(--radius-sm)]"
            aria-label="IT HUB Corporation Home"
          >
            <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--color-navy)] flex items-center justify-center text-[var(--color-white)] font-bold text-lg tracking-tight group-hover:bg-[var(--color-primary-blue)] transition-colors duration-200">
              IT
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg text-[var(--color-navy)] tracking-tight leading-tight group-hover:text-[var(--color-primary-blue)] transition-colors duration-200">
                IT HUB
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[var(--color-muted)] font-semibold leading-none">
                Corporation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-1 bg-[var(--color-soft-bg)] border border-[var(--color-border)]/80 px-2 py-1.5 rounded-full"
            aria-label="Primary Navigation"
          >
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
                  className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-blue)] ${
                    isActive
                      ? 'bg-[var(--color-white)] text-[var(--color-primary-blue)] shadow-sm font-semibold'
                      : 'text-[var(--color-text-main)] hover:text-[var(--color-navy)] hover:bg-[var(--color-white)]/60'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:inline-flex">
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
              className="md:hidden p-2 rounded-[var(--radius-md)] text-[var(--color-text-main)] hover:bg-[var(--color-soft-bg)] border border-[var(--color-border)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-blue)] transition-colors"
              onClick={() => setIsMobileNavOpen(true)}
              aria-label="Open mobile navigation"
              aria-expanded={isMobileNavOpen}
              aria-controls="mobile-navigation-dialog"
            >
              <Menu size={22} />
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
