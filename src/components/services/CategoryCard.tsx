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
import { Category } from '@/types';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import styles from './CategoryCard.module.css';

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

interface CategoryCardProps {
  category: Category;
  serviceCount?: number;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  serviceCount = 10,
}) => {
  const icon = iconMap[category.icon] || <Sparkles size={24} />;
  const categoryTitle = category.name || category.title;
  const description = category.shortDescription || category.description;

  return (
    <Link
      href={`/services/category/${category.slug}`}
      className={styles.cardLink}
      aria-label={`View ${categoryTitle} category with ${serviceCount} services`}
    >
      <Card hoverable className={styles.card}>
        <div className={styles.topRow}>
          <div className={styles.iconWrapper}>{icon}</div>
          <span className={styles.metaLabel}>{serviceCount} Services</span>
        </div>

        <h3 className={styles.title}>{categoryTitle}</h3>
        <p className={styles.description}>{description}</p>

        <div className={styles.footer}>
          <span className={styles.linkText}>Browse Category</span>
          <ArrowRight
            size={16}
            className={styles.arrowIcon}
            aria-hidden="true"
          />
        </div>
      </Card>
    </Link>
  );
};
