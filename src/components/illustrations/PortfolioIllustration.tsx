import React from 'react';

interface IllustrationProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const PortfolioIllustration: React.FC<IllustrationProps> = ({
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
        <linearGradient id="portGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C9A227" />
          <stop offset="100%" stopColor="#E6C65C" />
        </linearGradient>
        <linearGradient id="portNavyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0B1F3A" />
          <stop offset="100%" stopColor="#16304F" />
        </linearGradient>
        <filter id="portGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="14" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Ambient glow */}
      <circle cx="190" cy="140" r="90" fill="#C9A227" fillOpacity="0.08" filter="url(#portGlow)" />

      {/* Grid Drafting Plane */}
      <rect
        x="60"
        y="50"
        width="260"
        height="180"
        rx="16"
        fill="url(#portNavyGrad)"
        stroke="rgba(201, 162, 39, 0.25)"
        strokeWidth="1.5"
      />

      {/* Technical Grid overlay inside card */}
      <line x1="60" y1="100" x2="320" y2="100" stroke="#94A3B8" strokeOpacity="0.15" />
      <line x1="60" y1="150" x2="320" y2="150" stroke="#94A3B8" strokeOpacity="0.15" />
      <line x1="140" y1="50" x2="140" y2="230" stroke="#94A3B8" strokeOpacity="0.15" />
      <line x1="240" y1="50" x2="240" y2="230" stroke="#94A3B8" strokeOpacity="0.15" />

      {/* Window Title Bar */}
      <circle cx="85" cy="70" r="4" fill="#C9A227" />
      <circle cx="98" cy="70" r="4" fill="#94A3B8" fillOpacity="0.4" />
      <circle cx="111" cy="70" r="4" fill="#94A3B8" fillOpacity="0.4" />
      <rect x="135" y="66" width="100" height="8" rx="4" fill="#FFFFFF" fillOpacity="0.7" />

      {/* Mock Project Showcase Window 1 (Main Project Card) */}
      <rect
        x="80"
        y="95"
        width="130"
        height="115"
        rx="10"
        fill="#071427"
        stroke="rgba(201, 162, 39, 0.3)"
        strokeWidth="1"
      />
      {/* Visual Header in Card */}
      <rect x="90" y="105" width="110" height="50" rx="6" fill="#0F284B" />
      <circle cx="145" cy="130" r="12" fill="#C9A227" fillOpacity="0.25" stroke="#C9A227" strokeWidth="1" />
      <path d="M141 130L144 133L150 127" stroke="#E6C65C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="90" y="165" width="70" height="6" rx="3" fill="#FFFFFF" fillOpacity="0.9" />
      <rect x="90" y="176" width="100" height="4" rx="2" fill="#94A3B8" fillOpacity="0.5" />
      <rect x="90" y="184" width="85" height="4" rx="2" fill="#94A3B8" fillOpacity="0.5" />

      {/* Overlapping Result Metrics Card */}
      <g filter="url(#portGlow)">
        <rect
          x="190"
          y="115"
          width="140"
          height="100"
          rx="12"
          fill="#071427"
          stroke="url(#portGoldGrad)"
          strokeWidth="1.5"
        />
        {/* Metric badge */}
        <rect x="205" y="130" width="75" height="18" rx="9" fill="#0B1F3A" stroke="#C9A227" strokeWidth="1" />
        <circle cx="215" cy="139" r="3" fill="#10B981" />
        <rect x="224" y="137" width="45" height="4" rx="2" fill="#FFFFFF" />

        {/* Growth Curve */}
        <path
          d="M205 185 C225 180, 240 165, 260 168 C280 171, 295 150, 310 145"
          stroke="url(#portGoldGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="310" cy="145" r="4" fill="#E6C65C" />
        <rect x="205" y="195" width="85" height="5" rx="2.5" fill="#94A3B8" fillOpacity="0.6" />
      </g>

      {/* Sparkles */}
      <path d="M50 40V50M45 45H55" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M335 55V65M330 60H340" stroke="#E6C65C" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};
