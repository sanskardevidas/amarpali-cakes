import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  fullWidth = false,
  className = '',
  type = 'button',
}) => {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-pink/30';

  const variantClasses =
    variant === 'primary'
      ? 'bg-accent-pink text-white shadow-[0_10px_30px_rgba(216,106,138,0.22)] hover:bg-dark-rose hover:-translate-y-0.5'
      : 'border border-soft-border bg-white/80 text-text-primary hover:border-accent-pink hover:text-accent-pink hover:-translate-y-0.5';

  const widthClass = fullWidth ? 'w-full' : '';

  const classes = `${baseClasses} ${variantClasses} ${widthClass} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {variant === 'primary' && <ArrowRight size={16} strokeWidth={2.2} />}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
};