import React from 'react';

interface IllustrationProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const FAQIllustration: React.FC<IllustrationProps> = ({
  className = '',
  width = 340,
  height = 300,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 340 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="faqGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C9A227" />
          <stop offset="100%" stopColor="#E6C65C" />
        </linearGradient>
        <linearGradient id="faqNavyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0B1F3A" />
          <stop offset="100%" stopColor="#16304F" />
        </linearGradient>
        <linearGradient id="faqCardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0F284B" />
          <stop offset="100%" stopColor="#071427" />
        </linearGradient>
        <filter id="faqGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="14" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Ambient center glow */}
      <circle cx="170" cy="150" r="85" fill="#C9A227" fillOpacity="0.08" filter="url(#faqGlow)" />

      {/* Subtle concentric rings */}
      <circle cx="170" cy="150" r="120" stroke="#C9A227" strokeOpacity="0.12" strokeDasharray="4 4" />
      <circle cx="170" cy="150" r="75" stroke="#C9A227" strokeOpacity="0.18" strokeDasharray="3 3" />

      {/* Base Foundation Panel */}
      <rect
        x="50"
        y="65"
        width="240"
        height="170"
        rx="18"
        fill="url(#faqNavyGrad)"
        stroke="rgba(201, 162, 39, 0.25)"
        strokeWidth="1.5"
      />

      {/* Question Accordion Card 1 (Top Opened Question) */}
      <rect
        x="70"
        y="90"
        width="200"
        height="48"
        rx="10"
        fill="url(#faqCardGrad)"
        stroke="rgba(201, 162, 39, 0.35)"
        strokeWidth="1"
      />
      <circle cx="90" cy="114" r="10" fill="#071427" stroke="#C9A227" strokeWidth="1" />
      <text
        x="90"
        y="118"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="sans-serif"
        fontSize="12"
        fontWeight="bold"
        fill="#E6C65C"
      >
        ?
      </text>
      <rect x="110" y="108" width="115" height="5" rx="2.5" fill="#FFFFFF" fillOpacity="0.9" />
      <rect x="110" y="118" width="85" height="4" rx="2" fill="#94A3B8" fillOpacity="0.5" />
      {/* Gold Toggle Icon */}
      <path d="M250 112L254 116L258 112" stroke="#E6C65C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* Clarity Beacon Card (Highlighted Solution Box) */}
      <g filter="url(#faqGlow)">
        <rect
          x="85"
          y="150"
          width="185"
          height="65"
          rx="12"
          fill="#071427"
          stroke="url(#faqGoldGrad)"
          strokeWidth="1.5"
        />
        {/* Verified Check Icon Badge */}
        <circle cx="108" cy="182" r="11" fill="#0B1F3A" stroke="#C9A227" strokeWidth="1.2" />
        <path d="M104 182 L107 185 L113 179" stroke="#E6C65C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        {/* Solution text lines */}
        <rect x="128" y="172" width="125" height="5" rx="2.5" fill="#FFFFFF" />
        <rect x="128" y="182" width="105" height="4" rx="2" fill="#94A3B8" fillOpacity="0.7" />
        <rect x="128" y="191" width="80" height="4" rx="2" fill="#C9A227" />
      </g>

      {/* Floating Sparkles & Compass Points */}
      <path d="M35 55V65M30 60H40" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M305 60V70M300 65H310" stroke="#E6C65C" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M305 235V245M300 240H310" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};
