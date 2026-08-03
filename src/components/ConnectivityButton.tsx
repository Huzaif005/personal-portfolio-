import React from 'react';
import { Github, Linkedin, Mail, Twitter, Phone, ExternalLink } from 'lucide-react';
import { USER_INFO } from '../data/portfolioData';

export type ConnectivityPlatform = 'github' | 'linkedin' | 'email' | 'twitter' | 'phone';

interface ConnectivityButtonProps {
  platform: ConnectivityPlatform;
  href?: string;
  label?: string;
  handle?: string;
  about?: string;
  showTooltip?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  customBrandColor?: string;
}

const DEFAULT_PLATFORM_CONFIGS: Record<ConnectivityPlatform, {
  color: string;
  glow: string;
  label: string;
  handle: string;
  href: string;
  about: string;
  icon: React.ReactNode;
}> = {
  github: {
    color: '#38bdf8', // sky blue / github cyan
    glow: 'rgba(56, 189, 248, 0.25)',
    label: 'GitHub',
    handle: `@${USER_INFO.github.split('/').pop() || 'Huzaif005'}`,
    href: USER_INFO.github,
    about: 'Open Source AI/ML Projects & Repositories',
    icon: <Github className="w-5 h-5" />,
  },
  linkedin: {
    color: '#0a66c2', // LinkedIn blue
    glow: 'rgba(10, 102, 194, 0.35)',
    label: 'LinkedIn',
    handle: USER_INFO.name,
    href: USER_INFO.linkedin,
    about: 'Professional ML Network & Experience',
    icon: <Linkedin className="w-5 h-5" />,
  },
  email: {
    color: '#f43f5e', // Rose red / email
    glow: 'rgba(244, 63, 94, 0.35)',
    label: 'Email',
    handle: USER_INFO.email,
    href: `mailto:${USER_INFO.email}`,
    about: 'Direct Email Contact & Inquiries',
    icon: <Mail className="w-5 h-5" />,
  },
  twitter: {
    color: '#1da1f2', // Twitter blue
    glow: 'rgba(29, 161, 242, 0.35)',
    label: 'Twitter / X',
    handle: `@${USER_INFO.twitter.split('/').pop() || 'Huzaif005'}`,
    href: USER_INFO.twitter,
    about: 'AI Engineering Insights & Updates',
    icon: <Twitter className="w-5 h-5" />,
  },
  phone: {
    color: '#10b981', // Emerald green
    glow: 'rgba(16, 185, 129, 0.35)',
    label: 'Phone',
    handle: USER_INFO.phone,
    href: `tel:${USER_INFO.phone}`,
    about: 'Direct Line for Quick Calls',
    icon: <Phone className="w-5 h-5" />,
  },
};

export const ConnectivityButton: React.FC<ConnectivityButtonProps> = ({
  platform,
  href,
  label,
  handle,
  about,
  showTooltip = true,
  size = 'md',
  className = '',
  customBrandColor,
}) => {
  const config = DEFAULT_PLATFORM_CONFIGS[platform];
  const targetHref = href || config.href;
  const displayLabel = label || config.label;
  const displayHandle = handle || config.handle;
  const displayAbout = about || config.about;
  const brandColor = customBrandColor || config.color;

  // Layer size mapping
  const layerSizes = {
    sm: '40px',
    md: '48px',
    lg: '54px',
  };

  const isExternal = targetHref.startsWith('http');

  return (
    <div
      className={`uiverse-connectivity-container ${className}`}
      style={{
        '--brand-color': brandColor,
        '--brand-glow': config.glow,
        '--layer-size': layerSizes[size],
      } as React.CSSProperties}
    >
      {/* 3D Isometric Tooltip Profile Card */}
      {showTooltip && (
        <div className="tooltip">
          <div className="profile">
            <div className="user">
              <div className="img">
                <img
                  src={USER_INFO.avatarUrl}
                  alt={USER_INFO.name}
                  className="w-full h-full object-cover rounded-[8px]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="details">
                <div className="name flex items-center gap-1">
                  <span>{USER_INFO.name}</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </div>
                <div className="text-[11px] font-mono font-bold text-slate-200">
                  {displayHandle}
                </div>
                <div className="about">
                  {displayAbout}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3D Layered Isometric Icon Button */}
      <a
        href={targetHref}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className="icon"
        aria-label={displayLabel}
      >
        <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fab">
            {config.icon}
          </span>
        </div>
        <div className="text">{displayLabel}</div>
      </a>
    </div>
  );
};
