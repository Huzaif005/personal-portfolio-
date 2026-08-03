import React from 'react';

interface ArcaneAIButtonProps {
  onClick?: () => void;
  label?: string;
  className?: string;
}

export const ArcaneAIButton: React.FC<ArcaneAIButtonProps> = ({
  onClick,
  label = 'Arcane AI',
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={`ai-mode-button ${className}`}
      type="button"
      aria-label={label}
    >
      <div className="blur-layer">
        <div className="rotating-gradient" />
      </div>
      <div className="gradient-layer">
        <div className="rotating-gradient" />
      </div>
      <div className="inner-bg" />
      <div className="button-content">
        <div className="icon">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L14.85 8.15L21 11L14.85 13.85L12 20L9.15 13.85L3 11L9.15 8.15L12 2Z" />
          </svg>
        </div>
        <div className="label">{label}</div>
      </div>
    </button>
  );
};
