import React from 'react';

interface IllustrationProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const ClosingCtaIllustration: React.FC<IllustrationProps> = ({
  className = '',
  width = 320,
  height = 240,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 320 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ctaGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C9A227" />
          <stop offset="100%" stopColor="#E6C65C" />
        </linearGradient>
        <linearGradient id="ctaNavyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0B1F3A" />
          <stop offset="100%" stopColor="#16304F" />
        </linearGradient>
        <filter id="ctaGlow" x="-25%" y="-25%" width="150%" height="150%">
          <feGaussianBlur stdDeviation="16" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Radiant Background Mesh Glow */}
      <circle cx="160" cy="120" r="90" fill="#C9A227" fillOpacity="0.12" filter="url(#ctaGlow)" />

      {/* Concentric Golden Orbits */}
      <ellipse cx="160" cy="120" rx="140" ry="80" stroke="#C9A227" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="4 4" transform="rotate(-15 160 120)" />
      <ellipse cx="160" cy="120" rx="110" ry="60" stroke="#E6C65C" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="2 3" transform="rotate(20 160 120)" />

      {/* Floating 3D Cube / Crystal Geometries */}
      {/* Central Prism */}
      <g filter="url(#ctaGlow)">
        {/* Top Face */}
        <polygon points="160,65 195,85 160,105 125,85" fill="#C9A227" fillOpacity="0.85" />
        {/* Left Face */}
        <polygon points="125,85 160,105 160,150 125,130" fill="#0B1F3A" stroke="#C9A227" strokeWidth="1" />
        {/* Right Face */}
        <polygon points="160,105 195,85 195,130 160,150" fill="#16304F" stroke="#E6C65C" strokeWidth="1" />
      </g>

      {/* Orbiting Satellite Node 1 */}
      <circle cx="70" cy="80" r="14" fill="#071427" stroke="url(#ctaGoldGrad)" strokeWidth="1.5" />
      <circle cx="70" cy="80" r="5" fill="#E6C65C" />

      {/* Orbiting Satellite Node 2 */}
      <circle cx="250" cy="160" r="18" fill="#071427" stroke="url(#ctaGoldGrad)" strokeWidth="1.5" />
      <path d="M245 160L248 163L255 157" stroke="#E6C65C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* Satellite Node 3 */}
      <circle cx="240" cy="65" r="9" fill="#C9A227" fillOpacity="0.6" />

      {/* Geometric Connecting Lines */}
      <line x1="84" y1="80" x2="125" y2="85" stroke="#C9A227" strokeOpacity="0.3" strokeDasharray="2 2" />
      <line x1="195" y1="130" x2="232" y2="160" stroke="#E6C65C" strokeOpacity="0.3" strokeDasharray="2 2" />

      {/* Sparkles */}
      <path d="M40 160V170M35 165H45" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M280 40V50M275 45H285" stroke="#E6C65C" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};
