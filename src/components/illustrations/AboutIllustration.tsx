import React from 'react';

interface IllustrationProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const AboutIllustration: React.FC<IllustrationProps> = ({
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
        <linearGradient id="aboutGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C9A227" />
          <stop offset="100%" stopColor="#E6C65C" />
        </linearGradient>
        <linearGradient id="aboutNavyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0B1F3A" />
          <stop offset="100%" stopColor="#16304F" />
        </linearGradient>
        <linearGradient id="aboutGlassGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.02" />
        </linearGradient>
        <filter id="aboutGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="12" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Ambient background glow circle */}
      <circle cx="190" cy="140" r="90" fill="#C9A227" fillOpacity="0.08" filter="url(#aboutGlow)" />

      {/* Technical coordinate grid lines */}
      <line x1="40" y1="140" x2="340" y2="140" stroke="#E2E8F0" strokeOpacity="0.3" strokeDasharray="4 4" />
      <line x1="190" y1="30" x2="190" y2="250" stroke="#E2E8F0" strokeOpacity="0.3" strokeDasharray="4 4" />

      {/* Layer 1: Back isometric foundation panel */}
      <rect x="70" y="60" width="220" height="150" rx="18" fill="url(#aboutNavyGrad)" stroke="rgba(201, 162, 39, 0.25)" strokeWidth="1.5" />
      
      {/* Viewport header dots */}
      <circle cx="95" cy="80" r="4" fill="#C9A227" fillOpacity="0.8" />
      <circle cx="108" cy="80" r="4" fill="#94A3B8" fillOpacity="0.4" />
      <circle cx="121" cy="80" r="4" fill="#94A3B8" fillOpacity="0.4" />

      {/* Layered architectural wireframe bars */}
      <rect x="95" y="102" width="90" height="8" rx="4" fill="#FFFFFF" fillOpacity="0.8" />
      <rect x="95" y="120" width="140" height="6" rx="3" fill="#94A3B8" fillOpacity="0.4" />
      <rect x="95" y="134" width="115" height="6" rx="3" fill="#94A3B8" fillOpacity="0.4" />
      <rect x="95" y="148" width="130" height="6" rx="3" fill="#94A3B8" fillOpacity="0.4" />

      {/* Layer 2: Floating Foreground Glass Card (Digital Strategy & Execution) */}
      <rect
        x="130"
        y="110"
        width="180"
        height="125"
        rx="16"
        fill="url(#aboutGlassGrad)"
        stroke="url(#aboutGoldGrad)"
        strokeWidth="1.5"
        style={{ backdropFilter: 'blur(10px)' }}
      />

      {/* Strategy Node Circle with Pulse Orbit */}
      <circle cx="170" cy="155" r="22" fill="#071427" stroke="#C9A227" strokeWidth="2" />
      <circle cx="170" cy="155" r="30" stroke="#E6C65C" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
      {/* Compass star icon */}
      <path
        d="M170 144L173 152L181 155L173 158L170 166L167 158L159 155L167 152Z"
        fill="url(#aboutGoldGrad)"
      />

      {/* Milestone Connected Nodes */}
      <circle cx="240" cy="155" r="8" fill="#C9A227" />
      <circle cx="280" cy="180" r="6" fill="#E6C65C" />
      <path d="M192 155H232" stroke="#C9A227" strokeWidth="1.5" strokeDasharray="2 2" />
      <path d="M248 158L274 177" stroke="#E6C65C" strokeWidth="1.5" strokeDasharray="2 2" />

      {/* Precision Corner Badges */}
      <rect x="210" y="195" width="70" height="20" rx="10" fill="#071427" stroke="#C9A227" strokeWidth="1" />
      <circle cx="222" cy="205" r="3" fill="#C9A227" />
      <rect x="230" y="203" width="40" height="4" rx="2" fill="#E6C65C" />

      {/* Decorative Sparkle Crosses */}
      <path d="M60 45V55M55 50H65" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M320 70V80M315 75H325" stroke="#E6C65C" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M335 210V220M330 215H340" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};
