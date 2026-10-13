import React from 'react';

export interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const alignClass =
    align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start';

  return (
    <div
      className={`flex flex-col gap-3 max-w-2xl mb-12 ${alignClass} ${className}`}
    >
      {badge && (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[var(--color-primary-blue)] bg-[rgba(49,87,213,0.08)] border border-[rgba(49,87,213,0.2)]">
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--color-navy)] tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-[var(--color-muted)] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
