import React from 'react';

interface IllustrationProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const EmptyStateIllustration: React.FC<IllustrationProps> = ({
  className = '',
  width = 240,
  height = 180,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 240 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="esGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C9A227" />
          <stop offset="100%" stopColor="#E6C65C" />
        </linearGradient>
        <linearGradient id="esNavyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0B1F3A" />
          <stop offset="100%" stopColor="#16304F" />
        </linearGradient>
      </defs>

      {/* Subtle concentric rings */}
      <circle cx="120" cy="90" r="60" stroke="#E2E8F0" strokeOpacity="0.3" strokeDasharray="3 3" />
      <circle cx="120" cy="90" r="40" stroke="#C9A227" strokeOpacity="0.2" strokeDasharray="2 3" />

      {/* Back document card */}
      <rect
        x="65"
        y="45"
        width="110"
        height="90"
        rx="12"
        fill="url(#esNavyGrad)"
        stroke="rgba(201, 162, 39, 0.25)"
        strokeWidth="1.2"
      />
      <rect x="80" y="60" width="55" height="5" rx="2.5" fill="#FFFFFF" fillOpacity="0.8" />
      <rect x="80" y="72" width="80" height="4" rx="2" fill="#94A3B8" fillOpacity="0.4" />
      <rect x="80" y="82" width="65" height="4" rx="2" fill="#94A3B8" fillOpacity="0.4" />

      {/* Foreground Magnifying Glass with Gold Rim */}
      <g>
        <circle cx="138" cy="100" r="24" fill="#071427" stroke="url(#esGoldGrad)" strokeWidth="2" />
        {/* Glass shine arc */}
        <path
          d="M126 92 A 16 16 0 0 1 146 88"
          stroke="#E6C65C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeOpacity="0.7"
        />
        {/* Handle */}
        <path
          d="M155 117 L175 137"
          stroke="url(#esGoldGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Center dot in glass */}
        <circle cx="138" cy="100" r="3" fill="#E6C65C" />
      </g>

      {/* Sparkles */}
      <path d="M48 40V48M44 44H52" stroke="#C9A227" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M195 55V63M191 59H199" stroke="#E6C65C" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
};
