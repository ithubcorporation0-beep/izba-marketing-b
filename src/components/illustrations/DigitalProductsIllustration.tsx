import React from 'react';

interface IllustrationProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const DigitalProductsIllustration: React.FC<IllustrationProps> = ({
  className = '',
  width = 380,
  height = 280,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 380 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="dpGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C9A227" />
          <stop offset="100%" stopColor="#E6C65C" />
        </linearGradient>
        <linearGradient id="dpNavyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0B1F3A" />
          <stop offset="100%" stopColor="#16304F" />
        </linearGradient>
        <linearGradient id="dpCardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0F284B" />
          <stop offset="100%" stopColor="#071427" />
        </linearGradient>
        <filter id="dpGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="14" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Ambient background glow */}
      <circle cx="190" cy="140" r="90" fill="#C9A227" fillOpacity="0.08" filter="url(#dpGlow)" />

      {/* Grid Pattern Lines */}
      <line x1="40" y1="80" x2="340" y2="80" stroke="#E2E8F0" strokeOpacity="0.2" strokeDasharray="4 4" />
      <line x1="40" y1="180" x2="340" y2="180" stroke="#E2E8F0" strokeOpacity="0.2" strokeDasharray="4 4" />

      {/* Main Backing: Digital Kit Folder / Container */}
      <rect
        x="60"
        y="50"
        width="260"
        height="175"
        rx="18"
        fill="url(#dpNavyGrad)"
        stroke="rgba(201, 162, 39, 0.25)"
        strokeWidth="1.5"
      />

      {/* Top Tab of Folder */}
      <path
        d="M60 68 C60 58, 68 50, 78 50 L140 50 L155 65 L302 65 C312 65, 320 73, 320 83"
        stroke="url(#dpGoldGrad)"
        strokeWidth="1.5"
      />

      {/* Stacked Sheet 1 (Template Blueprint) */}
      <rect
        x="80"
        y="75"
        width="135"
        height="130"
        rx="10"
        fill="url(#dpCardGrad)"
        stroke="rgba(255, 255, 255, 0.12)"
        strokeWidth="1"
      />
      {/* Blueprint elements */}
      <rect x="92" y="88" width="60" height="7" rx="3.5" fill="url(#dpGoldGrad)" />
      <rect x="92" y="103" width="110" height="4" rx="2" fill="#94A3B8" fillOpacity="0.5" />
      <rect x="92" y="112" width="95" height="4" rx="2" fill="#94A3B8" fillOpacity="0.5" />

      {/* Wireframe columns in blueprint */}
      <rect x="92" y="126" width="50" height="36" rx="6" fill="#071427" stroke="rgba(201, 162, 39, 0.2)" />
      <rect x="98" y="132" width="20" height="4" rx="2" fill="#C9A227" />
      <rect x="98" y="142" width="38" height="3" rx="1.5" fill="#94A3B8" fillOpacity="0.4" />
      <rect x="98" y="150" width="30" height="3" rx="1.5" fill="#94A3B8" fillOpacity="0.4" />

      <rect x="148" y="126" width="54" height="36" rx="6" fill="#071427" stroke="rgba(255, 255, 255, 0.1)" />
      <circle cx="162" cy="144" r="8" fill="#C9A227" fillOpacity="0.25" stroke="#C9A227" strokeWidth="1" />
      <path d="M162 140V148M158 144H166" stroke="#E6C65C" strokeWidth="1.2" strokeLinecap="round" />

      {/* Overlapping Product Box 2 (Software / Resource Bundle) */}
      <g filter="url(#dpGlow)">
        <rect
          x="195"
          y="95"
          width="130"
          height="125"
          rx="14"
          fill="#071427"
          stroke="url(#dpGoldGrad)"
          strokeWidth="1.5"
        />
        {/* Diamond / Gem Icon */}
        <path
          d="M260 115 L275 128 L260 148 L245 128 Z"
          fill="none"
          stroke="url(#dpGoldGrad)"
          strokeWidth="1.5"
        />
        <path d="M245 128 H275" stroke="#E6C65C" strokeWidth="1" />
        <path d="M253 115 L250 128 L260 148 L270 128 L267 115" stroke="#E6C65C" strokeWidth="1" />

        {/* Product Details */}
        <rect x="215" y="160" width="90" height="6" rx="3" fill="#FFFFFF" />
        <rect x="215" y="172" width="65" height="4" rx="2" fill="#94A3B8" fillOpacity="0.6" />
        
        {/* Instant Access Pill */}
        <rect x="215" y="186" width="88" height="20" rx="10" fill="#0B1F3A" stroke="#C9A227" strokeWidth="1" />
        <circle cx="228" cy="196" r="3.5" fill="#E6C65C" />
        <rect x="236" y="194" width="55" height="4" rx="2" fill="#FFFFFF" fillOpacity="0.9" />
      </g>

      {/* Floating Download Node Badge */}
      <rect x="35" y="140" width="75" height="40" rx="10" fill="#0B1F3A" stroke="#C9A227" strokeWidth="1.2" />
      <path d="M52 153 L52 165 M48 161 L52 165 L56 161" stroke="#E6C65C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="46" y1="168" x2="58" y2="168" stroke="#E6C65C" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="64" y="156" width="36" height="4" rx="2" fill="#FFFFFF" />
      <rect x="64" y="164" width="24" height="3" rx="1.5" fill="#C9A227" />

      {/* Sparkles */}
      <path d="M55 45V55M50 50H60" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M335 65V75M330 70H340" stroke="#E6C65C" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};
