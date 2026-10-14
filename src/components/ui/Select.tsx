import React from 'react';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
  error?: string;
  helperText?: string;
  placeholder?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      options,
      error,
      helperText,
      placeholder = 'Select an option',
      id,
      required,
      className = '',
      ...props
    },
    ref
  ) => {
    const selectId = id || label.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const hasError = Boolean(error);

    return (
      <div className="flex flex-col gap-1.5 w-full">
        <label
          htmlFor={selectId}
          className="text-sm font-semibold text-[var(--color-text-main)] flex items-center gap-1"
        >
          {label}
          {required && <span className="text-[var(--color-error)]">*</span>}
        </label>
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            required={required}
            aria-invalid={hasError}
            aria-describedby={
              hasError
                ? `${selectId}-error`
                : helperText
                  ? `${selectId}-helper`
                  : undefined
            }
            className={`w-full appearance-none px-3.5 py-2.5 pr-10 bg-[var(--color-white)] text-[var(--color-text-main)] border rounded-lg text-sm transition-all duration-150 focus:outline-none focus:ring-4 cursor-pointer ${
              hasError
                ? 'border-[var(--color-error)] focus:border-[var(--color-error)] focus:ring-[rgba(180,35,24,0.14)]'
                : 'border-[var(--color-border)] focus:border-[var(--color-gold)] focus:ring-[rgba(201,162,39,0.18)]'
            } disabled:bg-[var(--color-soft-bg)] disabled:cursor-not-allowed ${className}`}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                {opt.label}
              </option>
            ))}
          </select>
          <div
            className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-[var(--color-muted)]"
            aria-hidden="true"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        {hasError && (
          <p
            id={`${selectId}-error`}
            className="text-xs font-medium text-[var(--color-error)]"
            role="alert"
          >
            {error}
          </p>
        )}
        {!hasError && helperText && (
          <p
            id={`${selectId}-helper`}
            className="text-xs text-[var(--color-muted)]"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
