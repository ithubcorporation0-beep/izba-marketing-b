'use client';

import React, { useState } from 'react';
import { faqs } from '@/content/faqs';
import { Badge } from '@/components/ui/Badge';
import { Container } from '@/components/ui/Container';
import { Reveal, RevealStagger } from '@/components/ui/motion';
import { FAQIllustration } from '@/components/illustrations/FAQIllustration';
import styles from './FAQ.module.css';

export const FAQSection: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleFAQ = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className={styles.section} aria-labelledby="faq-heading">
      <Container size="default">
        <div className={styles.faqLayout}>
          {/* Left Column: Header + Side Illustration */}
          <div className={styles.leftCol}>
            <Reveal className={styles.header}>
              <Badge variant="gold" size="md">
                Common Inquiries
              </Badge>
              <h2 id="faq-heading" className={styles.title}>
                Frequently Asked <span className="highlight-gold">Questions</span>
              </h2>
              <p className={styles.subtitle}>
                Clear answers to common questions about working with IZBA Marketing
                agency, requesting quotes, delivery timelines, and project
                confidentiality.
              </p>
            </Reveal>

            <div className={styles.illustrationWrapper} aria-hidden="true">
              <FAQIllustration className={styles.illustration} width="100%" height="auto" />
            </div>
          </div>

          {/* Right Column: Accordion Items */}
          <div className={styles.rightCol}>
            <RevealStagger
              className={styles.accordionList}
              childSelector={`.${styles.accordionItem}`}
            >
              {faqs.map((faq, index) => {
                const isOpen = openIndices.includes(index);
                const buttonId = `faq-btn-${index}`;
                const panelId = `faq-panel-${index}`;

                return (
                  <div
                    key={faq.id || index}
                    className={styles.accordionItem}
                    data-open={isOpen ? 'true' : 'false'}
                  >
                    <h3 className="m-0 p-0">
                      <button
                        type="button"
                        id={buttonId}
                        className={styles.questionBtn}
                        onClick={() => toggleFAQ(index)}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                      >
                        <span className={styles.questionText}>{faq.question}</span>
                        <span className={styles.iconWrapper} aria-hidden="true">
                          <svg
                            className={styles.morphIcon}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                          >
                            <line
                              x1="5"
                              y1="12"
                              x2="19"
                              y2="12"
                              className={styles.horizontalBar}
                            />
                            <line
                              x1="12"
                              y1="5"
                              x2="12"
                              y2="19"
                              className={styles.verticalBar}
                            />
                          </svg>
                        </span>
                      </button>
                    </h3>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={styles.panel}
                    >
                      <div className={styles.panelInner}>
                        <div className={styles.answerBox}>
                          <p className={styles.answerText}>{faq.answer}</p>
                          {faq.category && (
                            <span className={styles.faqCategory}>
                              {faq.category}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </RevealStagger>
          </div>
        </div>
      </Container>
    </section>
  );
};
