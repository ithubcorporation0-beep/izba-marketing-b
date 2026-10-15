import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Code2,
  TrendingUp,
  Bot,
  Palette,
  FileSpreadsheet,
  ShoppingBag,
  Video,
  Server,
  GraduationCap,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { categories } from '@/content/categories';
import { getServicesByCategory } from '@/lib/services';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Reveal, RevealStagger } from '@/components/ui/motion';
import styles from './CategoriesSection.module.css';

// Consistent icon styling across all 9 categories: 22px size, 1.8 stroke width
const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 size={22} strokeWidth={1.8} />,
  TrendingUp: <TrendingUp size={22} strokeWidth={1.8} />,
  Bot: <Bot size={22} strokeWidth={1.8} />,
  Palette: <Palette size={22} strokeWidth={1.8} />,
  FileSpreadsheet: <FileSpreadsheet size={22} strokeWidth={1.8} />,
  ShoppingBag: <ShoppingBag size={22} strokeWidth={1.8} />,
  Video: <Video size={22} strokeWidth={1.8} />,
  Server: <Server size={22} strokeWidth={1.8} />,
  GraduationCap: <GraduationCap size={22} strokeWidth={1.8} />,
};

export const CategoriesSection: React.FC = () => {
  return (
    <section className={styles.section} aria-labelledby="categories-heading">
      <Container>
        <Reveal className={styles.header}>
          {/* Top pill badge: soft gold tint background, navy text, gold border + logo mark */}
          <Badge variant="gold" size="md" className="inline-flex items-center gap-2 pl-2.5 pr-4 py-1.5 shadow-xs">
            <Image
              src="/logo-icon.svg"
              alt="IZBA Marketing Agency logo"
              width={16}
              height={16}
              className="w-4 h-4 rounded-xs shrink-0"
            />
            <span className="font-bold tracking-wider">Core Service Disciplines</span>
          </Badge>

          <h2 id="categories-heading" className={styles.title}>
            Explore Our 9 Service Categories
          </h2>

          <p className={styles.subtitle}>
            Browse our organized service disciplines covering software,
            marketing, AI, design, data management, and day-to-day business
            operations.
          </p>
        </Reveal>

        <RevealStagger className={styles.grid}>
          {categories.map((category) => {
            const icon = iconMap[category.icon] || <Sparkles size={22} strokeWidth={1.8} />;
            // Dynamically computed from category services
            const serviceCount = category.services
              ? category.services.length
              : getServicesByCategory(category.slug).length;

            return (
              <Link
                key={category.id}
                href={`/services/${category.slug}`}
                className={styles.cardLink}
                aria-label={`View ${category.title} services`}
              >
                <Card hoverable className={styles.card}>
                  <div className={styles.iconWrapper} aria-hidden="true">{icon}</div>
                  <h3 className={styles.cardTitle}>{category.title}</h3>
                  <p className={styles.cardDesc}>{category.shortDescription}</p>
                  <div className={styles.cardFooter}>
                    <span className={styles.actionText}>
                      Explore {category.title} ({serviceCount})
                    </span>
                    <ArrowRight size={16} strokeWidth={2.2} className={styles.arrowIcon} aria-hidden="true" />
                  </div>
                </Card>
              </Link>
            );
          })}
        </RevealStagger>
      </Container>
    </section>
  );
};
