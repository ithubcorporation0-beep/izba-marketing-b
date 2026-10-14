import React from 'react';

export interface CheckboxProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type'
> {
  label: string;
  description?: string;
  error?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, description, error, id, className = '', ...props }, ref) => {
    const checkboxId = id || label.toLowerCase().replace(/[^a-z0-9]/g, '-');

    return (
      <div className="flex flex-col gap-1">
        <label
          htmlFor={checkboxId}
          className="inline-flex items-start gap-3 cursor-pointer select-none group"
        >
          <div className="relative flex items-center justify-center shrink-0 mt-0.5">
            <input
              ref={ref}
              type="checkbox"
              id={checkboxId}
              aria-invalid={Boolean(error)}
              className={`peer sr-only`}
              {...props}
            />
            <div
              className={`w-5 h-5 rounded border transition-all duration-150 flex items-center justify-center bg-[var(--color-white)] border-[var(--color-border-dark)] peer-checked:bg-[var(--color-navy)] peer-checked:border-[var(--color-gold)] peer-focus-visible:ring-4 peer-focus-visible:ring-[rgba(201,162,39,0.25)] peer-disabled:opacity-50 peer-disabled:cursor-not-allowed ${
                error ? 'border-[var(--color-error)]' : ''
              } ${className}`}
            >
              <svg
                className="w-3.5 h-3.5 text-[var(--color-white)] opacity-0 peer-checked:opacity-100 transition-opacity duration-150"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-[var(--color-text-main)] group-hover:text-[var(--color-navy)]">
              {label}
            </span>
            {description && (
              <span className="text-xs text-[var(--color-muted)] leading-relaxed">
                {description}
              </span>
            )}
          </div>
        </label>
        {error && (
          <p
            className="text-xs font-medium text-[var(--color-error)] pl-8"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
