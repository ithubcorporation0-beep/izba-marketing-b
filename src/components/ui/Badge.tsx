import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?:
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
  variant = 'blue',
  size = 'md',
  dot = false,
  className = '',
  ...props
}) => {
  const sizeStyles = {
    sm: 'text-xs px-2 py-0.5 gap-1 font-medium',
    md: 'text-xs px-2.5 py-1 gap-1.5 font-semibold',
  };

  const normalizedVariant =
    variant === 'cyan'
      ? 'blue'
      : variant === 'emerald'
      ? 'success'
      : variant === 'purple'
      ? 'violet'
      : variant;

  const variantStyles = {
    blue: 'bg-[rgba(49,87,213,0.08)] text-[var(--color-primary-blue)] border border-[rgba(49,87,213,0.2)]',
    violet:
      'bg-[rgba(118,87,232,0.08)] text-[var(--color-accent-violet)] border border-[rgba(118,87,232,0.2)]',
    navy: 'bg-[var(--color-navy)] text-[var(--color-white)]',
    success:
      'bg-[var(--color-success-bg)] text-[var(--color-success)] border border-[rgba(6,118,71,0.2)]',
    error:
      'bg-[var(--color-error-bg)] text-[var(--color-error)] border border-[rgba(180,35,24,0.2)]',
    neutral:
      'bg-[var(--color-soft-bg)] text-[var(--color-muted)] border border-[var(--color-border)]',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full tracking-wide uppercase select-none ${sizeStyles[size]} ${variantStyles[normalizedVariant]} ${className}`}
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
