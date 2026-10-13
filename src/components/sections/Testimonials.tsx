import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/content/testimonials';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import styles from './Testimonials.module.css';

export const TestimonialsSection: React.FC = () => {
  // If no authentic testimonials have been added yet, do not render an empty section
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <Badge variant="cyan" size="md">
            Client Feedback
          </Badge>
          <h2 className={styles.title}>What Our Clients Say</h2>
          <p className={styles.subtitle}>
            Direct reviews and experiences from organizations partnering with IT
            HUB Corporation.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((item) => {
            const author = item.clientName || item.author || 'Client';
            const quoteText = item.content || item.quote || '';
            const ratingCount = item.rating || 5;
            const avatar = item.avatarText || author.slice(0, 2).toUpperCase();

            return (
              <Card key={item.id} className={styles.card}>
                <div className={styles.topRow}>
                  <div className={styles.ratingStars}>
                    {[...Array(ratingCount)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={styles.starIcon}
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <Quote size={28} className={styles.quoteIcon} />
                </div>

                {item.statHighlight && (
                  <div className={styles.statHighlight}>
                    {item.statHighlight}
                  </div>
                )}

                <p className={styles.quoteText}>&ldquo;{quoteText}&rdquo;</p>

                <div className={styles.authorRow}>
                  <div className={styles.avatar}>{avatar}</div>
                  <div className={styles.authorInfo}>
                    <span className={styles.authorName}>{author}</span>
                    {(item.role || item.company) && (
                      <span className={styles.authorRole}>
                        {[item.role, item.company].filter(Boolean).join(', ')}
                      </span>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
