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
    align === 'center'
      ? 'text-center items-center mx-auto'
      : 'text-left items-start';

  return (
    <div
      className={`flex flex-col gap-3.5 max-w-2xl mb-14 ${alignClass} ${className}`}
    >
      {badge && (
        <span className="eyebrow px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--color-primary-blue)] bg-[rgba(49,87,213,0.08)] border border-[rgba(49,87,213,0.2)]">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-navy)] tracking-[-0.035em] leading-[1.08] text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-[var(--color-muted)] leading-relaxed max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};
