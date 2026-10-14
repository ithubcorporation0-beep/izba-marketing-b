import React from 'react';
import Link from 'next/link';
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
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import styles from './CategoriesSection.module.css';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 size={24} />,
  TrendingUp: <TrendingUp size={24} />,
  Bot: <Bot size={24} />,
  Palette: <Palette size={24} />,
  FileSpreadsheet: <FileSpreadsheet size={24} />,
  ShoppingBag: <ShoppingBag size={24} />,
  Video: <Video size={24} />,
  Server: <Server size={24} />,
  GraduationCap: <GraduationCap size={24} />,
};

export const CategoriesSection: React.FC = () => {
  return (
    <section className={styles.section} aria-labelledby="categories-heading">
      <Container>
        <div className={styles.header}>
          <Badge variant="blue" size="md">
            Core Service Disciplines
          </Badge>
          <h2 id="categories-heading" className={styles.title}>
            Explore Our 9 Service Categories
          </h2>
          <p className={styles.subtitle}>
            Browse our organized service disciplines covering software,
            marketing, AI, design, data management, and day-to-day business
            operations.
          </p>
        </div>

        <div className={styles.grid}>
          {categories.map((category) => {
            const icon = iconMap[category.icon] || <Sparkles size={24} />;
            return (
              <Link
                key={category.id}
                href={`/services/category/${category.slug}`}
                className={styles.cardLink}
                aria-label={`View ${category.title} services`}
              >
                <Card hoverable className={styles.card}>
                  <div className={styles.iconWrapper}>{icon}</div>
                  <h3 className={styles.cardTitle}>{category.title}</h3>
                  <p className={styles.cardDesc}>{category.shortDescription}</p>
                  <div className={styles.cardFooter}>
                    <span className={styles.actionText}>
                      Explore 10 Services
                    </span>
                    <ArrowRight size={16} className={styles.arrowIcon} />
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
