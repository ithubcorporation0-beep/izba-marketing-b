'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqs } from '@/content/faqs';
import { Badge } from '@/components/ui/Badge';
import styles from './FAQ.module.css';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <Badge variant="cyan" size="md">
            Common Questions
          </Badge>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <p className={styles.subtitle}>
            Have questions about engagement structures, security certifications,
            or technical roadmaps? Here is everything you need to know.
          </p>
        </div>

        <div className={styles.accordionList}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={[styles.accordionItem, isOpen ? styles.itemOpen : '']
                  .filter(Boolean)
                  .join(' ')}
              >
                <button
                  className={styles.questionBtn}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.questionText}>{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={[
                      styles.arrowIcon,
                      isOpen ? styles.arrowOpen : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                  />
                </button>
                {isOpen && (
                  <div className={styles.answerBox}>
                    <p className={styles.answerText}>{faq.answer}</p>
                    <span className={styles.faqCategory}>{faq.category}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
