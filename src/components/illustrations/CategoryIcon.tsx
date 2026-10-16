import React from 'react';
import {
  Code2,
  TrendingUp,
  Bot,
  Palette,
  Database,
  ShoppingBag,
  Video,
  ShieldCheck,
  GraduationCap,
  Sparkles,
  Layers,
  FileSpreadsheet,
  Globe,
  LucideIcon,
} from 'lucide-react';
import styles from './CategoryIcon.module.css';

export type CategoryIconSlug =
  | 'web-software-development'
  | 'digital-marketing-seo'
  | 'ai-services-automation'
  | 'graphic-design-branding'
  | 'data-entry-virtual-assistance'
  | 'digital-products-ecommerce'
  | 'video-content-production'
  | 'it-support-business-solutions'
  | 'education-office-services'
  | string;

interface CategoryIconProps {
  slug: CategoryIconSlug;
  size?: number;
  className?: string;
  variant?: 'badge-navy' | 'badge-light' | 'badge-gold' | 'plain';
}

const iconMap: Record<string, LucideIcon> = {
  'web-software-development': Code2,
  'digital-marketing-seo': TrendingUp,
  'ai-services-automation': Bot,
  'graphic-design-branding': Palette,
  'data-entry-virtual-assistance': Database,
  'digital-products-ecommerce': ShoppingBag,
  'video-content-production': Video,
  'it-support-business-solutions': ShieldCheck,
  'education-office-services': GraduationCap,
};

export const CategoryIcon: React.FC<CategoryIconProps> = ({
  slug,
  size = 22,
  className = '',
  variant = 'badge-navy',
}) => {
  const IconComponent = iconMap[slug] || Layers;

  if (variant === 'plain') {
    return (
      <IconComponent
        size={size}
        strokeWidth={1.75}
        className={[styles.plainIcon, className].filter(Boolean).join(' ')}
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      className={[styles.badge, styles[variant], className]
        .filter(Boolean)
        .join(' ')}
      aria-hidden="true"
    >
      <IconComponent size={size} strokeWidth={1.75} />
    </div>
  );
};
