import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import {
  Home,
  Layers,
  Mail,
  ArrowRight,
  Compass,
} from 'lucide-react';
import styles from './not-found.module.css';

const popularCategories = [
  {
    name: 'Web & Software Development',
    slug: 'web-software-development',
  },
  {
    name: 'Digital Marketing & SEO',
    slug: 'digital-marketing-seo',
  },
  {
    name: 'AI Services & Automation',
    slug: 'ai-services-automation',
  },
  {
    name: 'Graphic Design & Branding',
    slug: 'graphic-design-branding',
  },
  {
    name: 'Digital Products & E-commerce',
    slug: 'digital-products-ecommerce',
  },
  {
    name: 'IT Support & Business Solutions',
    slug: 'it-support-business-solutions',
  },
];

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <Container size="default">
        <div className={styles.content}>
          <div className={styles.badge} aria-hidden="true">
            <Compass size={14} />
            <span>404 Error</span>
          </div>

          <h1 className={styles.title}>Page Not Found</h1>

          <p className={styles.description}>
            The link you followed may be broken or the page may have been moved.
            You can return to our homepage, explore all services, or contact us.
          </p>

          <div className={styles.primaryActions}>
            <Button
              href="/"
              variant="primary"
              size="md"
              icon={<Home size={16} />}
            >
              Return Home
            </Button>
            <Button
              href="/services"
              variant="secondary"
              size="md"
              icon={<Layers size={16} />}
            >
              Browse 90 Services
            </Button>
            <Button
              href="/contact"
              variant="ghost"
              size="md"
              icon={<Mail size={16} />}
            >
              Contact Us
            </Button>
          </div>

          {/* Popular Category Shortcuts */}
          <div className={styles.suggestionsBox}>
            <h2 className={styles.suggestionsTitle}>
              Popular Service Categories
            </h2>
            <div className={styles.categoryGrid}>
              {popularCategories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/services/category/${cat.slug}`}
                  className={styles.categoryLink}
                >
                  <span>{cat.name}</span>
                  <ArrowRight size={14} className={styles.arrowIcon} aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
