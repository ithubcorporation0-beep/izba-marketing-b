import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { label, error, helperText, id, required, className = '', ...props },
    ref
  ) => {
    const inputId = id || label.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const hasError = Boolean(error);

    return (
      <div className="flex flex-col gap-1.5 w-full">
        <label
          htmlFor={inputId}
          className="text-sm font-semibold text-[var(--color-text-main)] flex items-center gap-1"
        >
          {label}
          {required && <span className="text-[var(--color-error)]">*</span>}
        </label>
        <input
          ref={ref}
          id={inputId}
          required={required}
          aria-invalid={hasError}
          aria-describedby={
            hasError
              ? `${inputId}-error`
              : helperText
                ? `${inputId}-helper`
                : undefined
          }
          className={`w-full px-3.5 py-2.5 bg-[var(--color-white)] text-[var(--color-text-main)] border rounded-lg text-sm transition-all duration-150 placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-4 ${
            hasError
              ? 'border-[var(--color-error)] focus:border-[var(--color-error)] focus:ring-[rgba(180,35,24,0.14)]'
              : 'border-[var(--color-border)] focus:border-[var(--color-gold)] focus:ring-[rgba(201,162,39,0.18)]'
          } disabled:bg-[var(--color-soft-bg)] disabled:cursor-not-allowed ${className}`}
          {...props}
        />
        {hasError && (
          <p
            id={`${inputId}-error`}
            className="text-xs font-medium text-[var(--color-error)]"
            role="alert"
          >
            {error}
          </p>
        )}
        {!hasError && helperText && (
          <p
            id={`${inputId}-helper`}
            className="text-xs text-[var(--color-muted)]"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
