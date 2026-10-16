import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import styles from './Breadcrumb.module.css';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  variant?: 'light' | 'dark';
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  variant = 'dark',
  className,
}) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={[
        styles.nav,
        variant === 'dark' ? styles.dark : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <ol className={styles.list}>
        <li className={styles.item}>
          <Link href="/" className={styles.homeLink} aria-label="Home">
            <Home size={14} className={styles.homeIcon} />
            <span className={styles.homeText}>Home</span>
          </Link>
          <ChevronRight
            size={14}
            className={styles.separator}
            aria-hidden="true"
          />
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className={styles.item}>
              {isLast || !item.href ? (
                <span className={styles.current} aria-current="page">
                  {item.label}
                </span>
              ) : (
                <>
                  <Link href={item.href} className={styles.link}>
                    {item.label}
                  </Link>
                  <ChevronRight
                    size={14}
                    className={styles.separator}
                    aria-hidden="true"
                  />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
