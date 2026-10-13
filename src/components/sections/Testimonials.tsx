import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/content/testimonials';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import styles from './Testimonials.module.css';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <Badge variant="cyan" size="md">
            Client Endorsements
          </Badge>
          <h2 className={styles.title}>
            Trusted by Enterprise Technology Executives
          </h2>
          <p className={styles.subtitle}>
            Hear from CTOs and engineering leaders who rely on IT HUB
            Corporation for their most mission-critical systems.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((item) => (
            <Card key={item.id} className={styles.card}>
              <div className={styles.topRow}>
                <div className={styles.ratingStars}>
                  {[...Array(item.rating)].map((_, i) => (
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
                <div className={styles.statHighlight}>{item.statHighlight}</div>
              )}

              <p className={styles.quoteText}>&ldquo;{item.quote}&rdquo;</p>

              <div className={styles.authorRow}>
                <div className={styles.avatar}>{item.avatarText}</div>
                <div className={styles.authorInfo}>
                  <span className={styles.authorName}>{item.author}</span>
                  <span className={styles.authorRole}>
                    {item.role}, {item.company}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
