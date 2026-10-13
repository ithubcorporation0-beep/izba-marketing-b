import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glow?: 'cyan' | 'purple' | 'emerald' | 'none';
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  glow = 'none',
  onClick,
}) => {
  const combinedClassName = [
    styles.card,
    hoverEffect ? styles.hoverable : '',
    glow !== 'none' ? styles[`glow-${glow}`] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={combinedClassName} onClick={onClick}>
      {children}
    </div>
  );
};
