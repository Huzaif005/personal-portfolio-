import React from 'react';

interface UiverseGradientButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
  disabled?: boolean;
}

export const UiverseGradientButton: React.FC<UiverseGradientButtonProps> = ({
  children,
  onClick,
  type = 'button',
  className = '',
  size = 'md',
  href,
  target,
  rel,
  disabled = false,
}) => {
  const sizeClasses = {
    sm: 'text-xs scale-90',
    md: 'text-xs sm:text-sm',
    lg: 'text-sm sm:text-base scale-105',
  };

  const content = (
    <div className={`btn-wrapper ${sizeClasses[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className="gradient-btn"
      >
        {children}
      </button>
      <div className="gradient-layer"></div>
      <div className="gradient-layer"></div>
      <div className="light"></div>
      <div className="text-overlay">
        {children}
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className="inline-block"
      >
        {content}
      </a>
    );
  }

  return content;
};
