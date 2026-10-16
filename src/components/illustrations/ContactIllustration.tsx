import React from 'react';

interface IllustrationProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const ContactIllustration: React.FC<IllustrationProps> = ({
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
        <linearGradient id="contactGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C9A227" />
          <stop offset="100%" stopColor="#E6C65C" />
        </linearGradient>
        <linearGradient id="contactNavyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0B1F3A" />
          <stop offset="100%" stopColor="#16304F" />
        </linearGradient>
        <linearGradient id="contactCardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0F284B" />
          <stop offset="100%" stopColor="#071427" />
        </linearGradient>
        <filter id="contactGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="14" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Ambient background glow */}
      <circle cx="190" cy="140" r="90" fill="#C9A227" fillOpacity="0.08" filter="url(#contactGlow)" />

      {/* Orbit Rings / Radar Waves */}
      <circle cx="190" cy="140" r="120" stroke="#C9A227" strokeOpacity="0.1" strokeDasharray="4 4" />
      <circle cx="190" cy="140" r="80" stroke="#C9A227" strokeOpacity="0.18" strokeDasharray="3 3" />

      {/* Back Isometric Communication Plane */}
      <rect
        x="65"
        y="60"
        width="250"
        height="160"
        rx="18"
        fill="url(#contactNavyGrad)"
        stroke="rgba(201, 162, 39, 0.25)"
        strokeWidth="1.5"
      />

      {/* Primary Message Bubble Card (Incoming Inquiry) */}
      <rect
        x="95"
        y="85"
        width="160"
        height="50"
        rx="14"
        fill="url(#contactCardGrad)"
        stroke="rgba(255, 255, 255, 0.12)"
        strokeWidth="1"
      />
      {/* Sender Avatar */}
      <circle cx="115" cy="110" r="10" fill="#071427" stroke="#C9A227" strokeWidth="1" />
      <circle cx="115" cy="107" r="3.5" fill="#E6C65C" />
      <path d="M109 116 C109 113, 112 112, 115 112 C118 112, 121 113, 121 116" stroke="#E6C65C" strokeWidth="1" />
      {/* Text lines */}
      <rect x="135" y="102" width="90" height="6" rx="3" fill="#FFFFFF" fillOpacity="0.9" />
      <rect x="135" y="114" width="60" height="5" rx="2.5" fill="#94A3B8" fillOpacity="0.6" />

      {/* Secondary Message Bubble Card (Fast Response / Verified) */}
      <g filter="url(#contactGlow)">
        <rect
          x="145"
          y="150"
          width="160"
          height="54"
          rx="14"
          fill="#071427"
          stroke="url(#contactGoldGrad)"
          strokeWidth="1.5"
        />
        {/* Responder Badge */}
        <circle cx="280" cy="177" r="12" fill="#0B1F3A" stroke="#C9A227" strokeWidth="1.5" />
        <path d="M276 177 L279 180 L285 174" stroke="#E6C65C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        {/* Lines */}
        <rect x="165" y="168" width="95" height="6" rx="3" fill="#FFFFFF" />
        <rect x="165" y="180" width="70" height="5" rx="2.5" fill="#C9A227" />
      </g>

      {/* Connection Beam Line between cards */}
      <path
        d="M175 135 L175 150"
        stroke="#C9A227"
        strokeWidth="2"
        strokeDasharray="2 3"
      />

      {/* Left Transmission Node */}
      <g>
        <circle cx="50" cy="140" r="18" fill="#071427" stroke="url(#contactGoldGrad)" strokeWidth="1.5" />
        {/* Envelope outline */}
        <rect x="42" y="134" width="16" height="12" rx="2" stroke="#E6C65C" strokeWidth="1.2" />
        <path d="M42 135 L50 141 L58 135" stroke="#E6C65C" strokeWidth="1.2" />
        <path d="M68 140 H80" stroke="#C9A227" strokeWidth="1.5" strokeDasharray="2 2" />
      </g>

      {/* Floating Status Pill (24h Guaranteed Response) */}
      <rect x="230" y="42" width="105" height="26" rx="13" fill="#071427" stroke="#C9A227" strokeWidth="1" />
      <circle cx="245" cy="55" r="4" fill="#10B981" />
      <rect x="256" y="53" width="62" height="4" rx="2" fill="#FFFFFF" />

      {/* Decorative Sparkles */}
      <path d="M50 70V80M45 75H55" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M330 200V210M325 205H335" stroke="#E6C65C" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};
