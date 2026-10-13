'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/content/faqs';
import { Badge } from '@/components/ui/Badge';
import styles from './FAQ.module.css';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section} aria-labelledby="faq-heading">
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <Badge variant="blue" size="md">
            Common Inquiries
          </Badge>
          <h2 id="faq-heading" className={styles.title}>
            Frequently Asked Questions
          </h2>
          <p className={styles.subtitle}>
            Clear answers to common questions about working with IT HUB
            Corporation, requesting quotes, delivery timelines, and project
            confidentiality.
          </p>
        </div>

        <div
          className={styles.accordionList}
          role="region"
          aria-label="FAQ Accordion"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const buttonId = `faq-btn-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={faq.id || index}
                className={[styles.accordionItem, isOpen ? styles.itemOpen : '']
                  .filter(Boolean)
                  .join(' ')}
              >
                <button
                  type="button"
                  id={buttonId}
                  className={styles.questionBtn}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
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
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={styles.answerBox}
                  >
                    <p className={styles.answerText}>{faq.answer}</p>
                    {faq.category && (
                      <span className={styles.faqCategory}>{faq.category}</span>
                    )}
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
