import React from 'react';

interface IllustrationProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const NotFoundIllustration: React.FC<IllustrationProps> = ({
  className = '',
  width = 380,
  height = 260,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 380 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="nfGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C9A227" />
          <stop offset="100%" stopColor="#E6C65C" />
        </linearGradient>
        <linearGradient id="nfNavyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0B1F3A" />
          <stop offset="100%" stopColor="#16304F" />
        </linearGradient>
        <filter id="nfGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="16" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Ambient glow center */}
      <circle cx="190" cy="130" r="85" fill="#C9A227" fillOpacity="0.1" filter="url(#nfGlow)" />

      {/* Radar Coordinate Circles */}
      <circle cx="190" cy="130" r="110" stroke="#E2E8F0" strokeOpacity="0.2" strokeDasharray="4 4" />
      <circle cx="190" cy="130" r="75" stroke="#C9A227" strokeOpacity="0.25" strokeDasharray="3 3" />
      <circle cx="190" cy="130" r="45" stroke="#C9A227" strokeOpacity="0.4" />

      {/* Axes */}
      <line x1="50" y1="130" x2="330" y2="130" stroke="#E2E8F0" strokeOpacity="0.2" strokeDasharray="2 4" />
      <line x1="190" y1="20" x2="190" y2="240" stroke="#E2E8F0" strokeOpacity="0.2" strokeDasharray="2 4" />

      {/* Large 404 Stylized Vector Outlines */}
      <text
        x="190"
        y="145"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="sans-serif"
        fontSize="88"
        fontWeight="800"
        letterSpacing="8"
        fill="none"
        stroke="url(#nfNavyGrad)"
        strokeWidth="6"
        opacity="0.8"
      >
        404
      </text>
      <text
        x="190"
        y="145"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="sans-serif"
        fontSize="88"
        fontWeight="800"
        letterSpacing="8"
        fill="none"
        stroke="url(#nfGoldGrad)"
        strokeWidth="1.5"
      >
        404
      </text>

      {/* Compass / Recalibrating Target Point */}
      <circle cx="270" cy="80" r="14" fill="#071427" stroke="url(#nfGoldGrad)" strokeWidth="1.5" />
      <circle cx="270" cy="80" r="3" fill="#E6C65C" />
      <line x1="270" y1="62" x2="270" y2="67" stroke="#C9A227" strokeWidth="1.5" />
      <line x1="270" y1="93" x2="270" y2="98" stroke="#C9A227" strokeWidth="1.5" />
      <line x1="252" y1="80" x2="257" y2="80" stroke="#C9A227" strokeWidth="1.5" />
      <line x1="283" y1="80" x2="288" y2="80" stroke="#C9A227" strokeWidth="1.5" />

      {/* Status Box */}
      <rect x="125" y="195" width="130" height="26" rx="13" fill="#071427" stroke="rgba(201, 162, 39, 0.4)" strokeWidth="1" />
      <circle cx="140" cy="208" r="3" fill="#E6C65C" />
      <rect x="150" y="206" width="90" height="4" rx="2" fill="#E2E8F0" fillOpacity="0.8" />

      {/* Decorative Sparkles */}
      <path d="M70 50V60M65 55H75" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M320 180V190M315 185H325" stroke="#E6C65C" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};
