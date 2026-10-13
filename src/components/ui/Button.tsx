import React from 'react';
import Link from 'next/link';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  loading?: boolean;
}

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      variant = 'primary',
      size = 'md',
      href,
      icon,
      iconPosition = 'right',
      fullWidth = false,
      loading = false,
      children,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-semibold rounded-md transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-primary-blue)] disabled:opacity-50 disabled:pointer-events-none select-none';

    const sizeStyles = {
      sm: 'text-xs px-3 py-1.5 gap-1.5',
      md: 'text-sm px-4 py-2.5 gap-2',
      lg: 'text-base px-6 py-3 gap-2.5',
    };

    const normalizedVariant = variant === 'outline' ? 'secondary' : variant;

    const variantStyles = {
      primary:
        'bg-[var(--color-primary-blue)] text-[var(--color-white)] hover:bg-[var(--color-primary-hover)] active:scale-[0.99] shadow-sm',
      secondary:
        'bg-[var(--color-soft-bg)] text-[var(--color-navy)] border border-[var(--color-border)] hover:bg-[var(--color-white)] hover:border-[var(--color-border-dark)] active:scale-[0.99] shadow-sm',
      ghost:
        'bg-transparent text-[var(--color-muted)] hover:text-[var(--color-navy)] hover:bg-[var(--color-soft-bg)]',
    };

    const widthStyle = fullWidth ? 'w-full' : 'w-auto';

    const combinedClassName = [
      baseStyles,
      sizeStyles[size],
      variantStyles[normalizedVariant],
      widthStyle,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const spinner = (
      <svg
        className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v8H4z"
        />
      </svg>
    );

    const content = (
      <>
        {loading && spinner}
        {!loading && icon && iconPosition === 'left' && (
          <span className="shrink-0 flex items-center">{icon}</span>
        )}
        <span>{children}</span>
        {!loading && icon && iconPosition === 'right' && (
          <span className="shrink-0 flex items-center">{icon}</span>
        )}
      </>
    );

    const isDisabled = disabled || loading;

    if (href && !isDisabled) {
      return (
        <Link
          href={href}
          className={combinedClassName}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...(props as unknown as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={combinedClassName}
        disabled={isDisabled}
        aria-busy={loading ? true : undefined}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';
