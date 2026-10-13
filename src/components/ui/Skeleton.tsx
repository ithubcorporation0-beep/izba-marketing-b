import React from 'react';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'circular' | 'rectangular' | 'card';
  width?: string | number;
  height?: string | number;
  animate?: boolean;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'rectangular',
  width,
  height,
  animate = true,
  className = '',
  style,
  ...props
}) => {
  const variantStyles = {
    text: 'rounded-[var(--radius-sm)] h-4 w-full',
    circular: 'rounded-full',
    rectangular: 'rounded-[var(--radius-md)]',
    card: 'rounded-[var(--radius-lg)] h-48 w-full border border-[var(--color-border)]',
  };

  const animationClass = animate ? 'animate-pulse' : '';

  return (
    <div
      role="status"
      aria-label="Loading..."
      className={`bg-[var(--color-border)]/60 ${variantStyles[variant]} ${animationClass} ${className}`}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        ...style,
      }}
      {...props}
    >
      <span className="sr-only">Loading content...</span>
    </div>
  );
};
