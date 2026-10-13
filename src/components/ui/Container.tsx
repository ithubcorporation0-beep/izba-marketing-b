import React from 'react';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'default' | 'narrow' | 'full';
}

export const Container: React.FC<ContainerProps> = ({
  size = 'default',
  children,
  className = '',
  ...props
}) => {
  const sizeStyles = {
    default: 'max-w-[1240px]',
    narrow: 'max-w-[840px]',
    full: 'max-w-full',
  };

  return (
    <div
      className={`w-full mx-auto px-4 sm:px-6 lg:px-8 ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
