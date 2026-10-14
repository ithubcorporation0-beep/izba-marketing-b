import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?:
    | 'gold'
    | 'blue'
    | 'violet'
    | 'navy'
    | 'success'
    | 'error'
    | 'neutral'
    | 'cyan'
    | 'emerald'
    | 'purple';
  size?: 'sm' | 'md';
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'gold',
  size = 'md',
  dot = false,
  className = '',
  ...props
}) => {
  const sizeStyles = {
    sm: 'text-[10px] px-2.5 py-0.5 gap-1 font-bold',
    md: 'text-[11px] px-3.5 py-1 gap-1.5 font-bold',
  };

  const normalizedVariant =
    variant === 'cyan' || variant === 'blue' || variant === 'purple' || variant === 'violet'
      ? 'gold'
      : variant === 'emerald'
        ? 'success'
        : variant;

  const variantStyles = {
    gold: 'bg-[var(--color-gold-tint)] text-[var(--color-navy)] border border-[var(--color-gold)] shadow-xs',
    blue: 'bg-[var(--color-gold-tint)] text-[var(--color-navy)] border border-[var(--color-gold)] shadow-xs',
    violet: 'bg-[var(--color-gold-tint)] text-[var(--color-navy)] border border-[var(--color-gold)] shadow-xs',
    navy: 'bg-[var(--color-navy)] text-[var(--color-white)] border border-[var(--color-gold)]/35',
    success:
      'bg-[var(--color-success-bg)] text-[var(--color-success)] border border-[rgba(6,118,71,0.2)]',
    error:
      'bg-[var(--color-error-bg)] text-[var(--color-error)] border border-[rgba(180,35,24,0.2)]',
    neutral:
      'bg-[var(--color-soft-bg)] text-[var(--color-navy)] border border-[var(--color-border)]',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full tracking-[0.12em] uppercase select-none transition-colors ${sizeStyles[size]} ${variantStyles[normalizedVariant]} ${className}`}
      {...props}
    >
      {dot && (
        <span
          className="w-1.5 h-1.5 rounded-full bg-current"
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
};
