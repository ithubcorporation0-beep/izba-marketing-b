'use client';

import React, { useState } from 'react';

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
    <div className={`flex flex-col gap-3 w-full ${className}`}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        const headerId = `accordion-header-${item.id}`;
        const contentId = `accordion-content-${item.id}`;

        return (
          <div
            key={item.id}
            className="border border-[var(--color-border)] rounded-xl bg-[var(--color-white)] overflow-hidden transition-all duration-200 shadow-sm"
          >
            <h3>
              <button
                type="button"
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={contentId}
                onClick={() => toggleItem(item.id)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-bold text-base sm:text-lg text-[var(--color-navy)] hover:text-[var(--color-primary-blue)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--color-primary-blue)]"
              >
                <span>{item.title}</span>
                <span
                  className={`ml-4 shrink-0 transition-transform duration-200 text-[var(--color-muted)] ${
                    isOpen ? 'rotate-180 text-[var(--color-primary-blue)]' : ''
                  }`}
                  aria-hidden="true"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
            </h3>
            {isOpen && (
              <div
                id={contentId}
                role="region"
                aria-labelledby={headerId}
                className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 text-sm sm:text-base text-[var(--color-muted)] leading-relaxed border-t border-[var(--color-border)]/60 pt-4"
              >
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
