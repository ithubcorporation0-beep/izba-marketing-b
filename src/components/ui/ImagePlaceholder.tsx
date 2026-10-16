import React from 'react';
import { Image as ImageIcon, Sparkles } from 'lucide-react';
import styles from './ImagePlaceholder.module.css';

interface ImagePlaceholderProps {
  label?: string;
  recommendedSize?: string;
  aspectRatio?: '16/9' | '16/10' | '4/3' | '1/1' | '4/5';
  className?: string;
  variant?: 'navy' | 'light' | 'gold-border';
  description?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  label = 'Client Image Slot',
  recommendedSize = '1200 × 800 px (WebP < 150KB)',
  aspectRatio = '16/10',
  className = '',
  variant = 'navy',
  description = 'Replace with client asset per docs/IMAGE_GUIDE.md',
}) => {
  const aspectClass = styles[`aspect_${aspectRatio.replace('/', '_')}`] || styles.aspect_16_10;

  return (
    <div
      className={[styles.placeholderWrapper, styles[variant], aspectClass, className]
        .filter(Boolean)
        .join(' ')}
      role="img"
      aria-label={`${label} - ${recommendedSize}`}
    >
      {/* Decorative Grid Lines */}
      <div className={styles.gridOverlay} aria-hidden="true" />

      {/* Center Spec Badge */}
      <div className={styles.content}>
        <div className={styles.iconCircle} aria-hidden="true">
          <ImageIcon size={24} strokeWidth={1.75} className={styles.icon} />
        </div>
        <div className={styles.labelGroup}>
          <span className={styles.slotTag}>
            <Sparkles size={12} strokeWidth={1.75} />
            <span>IMAGE SLOT</span>
          </span>
          <p className={styles.title}>{label}</p>
          <span className={styles.specs}>{recommendedSize}</span>
          {description && <span className={styles.hint}>{description}</span>}
        </div>
      </div>
    </div>
  );
};
