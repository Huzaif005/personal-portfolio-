import React from 'react';

interface AvatarLogoProps {
  className?: string;
  size?: number;
  showStickerBorder?: boolean;
}

export const AvatarLogo: React.FC<AvatarLogoProps> = ({
  className = 'w-10 h-10',
  size,
  showStickerBorder = true,
}) => {
  const style = size ? { width: `${size}px`, height: `${size}px` } : undefined;

  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`} style={style}>
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md select-none"
      >
        <defs>
          {/* Checkered pattern for shirt */}
          <pattern id="checkeredPattern" width="12" height="12" patternUnits="userSpaceOnUse">
            <rect width="12" height="12" fill="#FFFFFF" />
            <path d="M 12 0 L 0 0 0 12" fill="none" stroke="#CBD5E1" strokeWidth="0.8" />
          </pattern>
          {/* Soft drop shadow */}
          <filter id="stickerShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.25" />
          </filter>
        </defs>

        <g filter={showStickerBorder ? 'url(#stickerShadow)' : undefined}>
          {/* Outer White Sticker Outline Die-Cut */}
          {showStickerBorder && (
            <path
              d="M 50 25 C 20 25 15 50 15 80 C 15 110 25 130 35 150 C 45 170 55 190 100 190 C 145 190 155 170 165 150 C 175 130 185 110 185 80 C 185 50 180 25 150 25 C 120 25 110 20 100 20 C 90 20 80 25 50 25 Z"
              fill="#FFFFFF"
              stroke="#E2E8F0"
              strokeWidth="3"
            />
          )}

          {/* Character Body - Shirt with Checkered Pattern */}
          <path
            d="M 42 145 C 42 130 65 125 100 125 C 135 125 158 130 158 145 L 152 182 C 152 186 148 188 100 188 C 52 188 48 186 48 182 Z"
            fill="url(#checkeredPattern)"
            stroke="#334155"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Shirt Collar */}
          <path d="M 85 125 L 100 138 L 115 125" fill="#FFFFFF" stroke="#334155" strokeWidth="2" />
          {/* Shirt Buttons */}
          <circle cx="100" cy="148" r="1.5" fill="#475569" />
          <circle cx="100" cy="162" r="1.5" fill="#475569" />

          {/* Neck & Face Base */}
          <path d="M 82 105 L 118 105 L 118 126 L 82 126 Z" fill="#FCE7D4" />
          <path
            d="M 60 70 C 60 110 80 118 100 118 C 120 118 140 110 140 70 C 140 40 120 35 100 35 C 80 35 60 40 60 70 Z"
            fill="#FCE7D4"
            stroke="#334155"
            strokeWidth="2.5"
          />

          {/* Ears */}
          <circle cx="58" cy="72" r="8" fill="#FCE7D4" stroke="#334155" strokeWidth="2" />
          <circle cx="142" cy="72" r="8" fill="#FCE7D4" stroke="#334155" strokeWidth="2" />

          {/* Curly Dark Hair */}
          <g fill="#27272A" stroke="#18181B" strokeWidth="1.5">
            <circle cx="100" cy="32" r="16" />
            <circle cx="85" cy="34" r="15" />
            <circle cx="115" cy="34" r="15" />
            <circle cx="70" cy="40" r="13" />
            <circle cx="130" cy="40" r="13" />
            <circle cx="62" cy="50" r="11" />
            <circle cx="138" cy="50" r="11" />
            <circle cx="92" cy="26" r="12" />
            <circle cx="108" cy="26" r="12" />
          </g>

          {/* Eyebrows */}
          <path d="M 72 58 Q 82 54 90 58" fill="none" stroke="#18181B" strokeWidth="3" strokeLinecap="round" />
          <path d="M 110 58 Q 118 54 128 58" fill="none" stroke="#18181B" strokeWidth="3" strokeLinecap="round" />

          {/* Black Wireframe Glasses */}
          <rect x="68" y="60" width="26" height="20" rx="5" fill="#FFFFFF" fillOpacity="0.4" stroke="#09090B" strokeWidth="3.5" />
          <rect x="106" y="60" width="26" height="20" rx="5" fill="#FFFFFF" fillOpacity="0.4" stroke="#09090B" strokeWidth="3.5" />
          <line x1="94" y1="68" x2="106" y2="68" stroke="#09090B" strokeWidth="3.5" />
          <line x1="58" y1="68" x2="68" y2="68" stroke="#09090B" strokeWidth="3" />
          <line x1="132" y1="68" x2="142" y2="68" stroke="#09090B" strokeWidth="3" />

          {/* Expressive Eyes behind glasses */}
          <circle cx="81" cy="70" r="4.5" fill="#18181B" />
          <circle cx="119" cy="70" r="4.5" fill="#18181B" />
          <circle cx="83" cy="68" r="1.5" fill="#FFFFFF" />
          <circle cx="121" cy="68" r="1.5" fill="#FFFFFF" />

          {/* Hands Holding Smartphone taking selfie */}
          <g>
            {/* Phone Body */}
            <rect
              x="82"
              y="72"
              width="36"
              width-override=""
              height="58"
              rx="6"
              fill="#18181B"
              stroke="#3F3F46"
              strokeWidth="2.5"
            />
            {/* Camera Bump & Lenses */}
            <rect x="94" y="76" width="12" height="22" rx="3" fill="#27272A" />
            <circle cx="100" cy="81" r="2.5" fill="#09090B" stroke="#A1A1AA" strokeWidth="1" />
            <circle cx="100" cy="87" r="2.5" fill="#09090B" stroke="#A1A1AA" strokeWidth="1" />
            <circle cx="100" cy="93" r="2" fill="#09090B" stroke="#A1A1AA" strokeWidth="1" />

            {/* Left Hand Fingers wrapped around phone */}
            <path
              d="M 68 112 C 65 105 78 88 84 90 C 86 92 84 100 84 108 Z"
              fill="#FCE7D4"
              stroke="#334155"
              strokeWidth="2"
            />
            {/* Right Hand Fingers wrapped around phone */}
            <path
              d="M 132 112 C 135 105 122 88 116 90 C 114 92 116 100 116 108 Z"
              fill="#FCE7D4"
              stroke="#334155"
              strokeWidth="2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};
