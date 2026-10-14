'use client';

import React, { useState } from 'react';
import styles from './Accordion.module.css';

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string;
  allowMultiple?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultOpenId,
  allowMultiple = false,
  className = '',
}) => {
  const [openIds, setOpenIds] = useState<string[]>(
    defaultOpenId ? [defaultOpenId] : []
  );

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div
      className={[styles.accordionWrapper, className]
        .filter(Boolean)
        .join(' ')}
    >
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        const headerId = `accordion-header-${item.id}`;
        const contentId = `accordion-content-${item.id}`;

        return (
          <div
            key={item.id}
            className={styles.item}
            data-open={isOpen ? 'true' : 'false'}
          >
            <h3 className={styles.header}>
              <button
                type="button"
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={contentId}
                onClick={() => toggleItem(item.id)}
                className={styles.trigger}
              >
                <span>{item.title}</span>
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
              id={contentId}
              role="region"
              aria-labelledby={headerId}
              className={styles.panel}
            >
              <div className={styles.panelInner}>
                <div className={styles.contentWrapper}>{item.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
