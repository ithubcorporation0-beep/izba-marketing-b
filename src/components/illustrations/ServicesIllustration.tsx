import React from 'react';

interface IllustrationProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const ServicesIllustration: React.FC<IllustrationProps> = ({
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
        <linearGradient id="srvGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C9A227" />
          <stop offset="100%" stopColor="#E6C65C" />
        </linearGradient>
        <linearGradient id="srvNavyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0B1F3A" />
          <stop offset="100%" stopColor="#16304F" />
        </linearGradient>
        <linearGradient id="srvCardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0F284B" />
          <stop offset="100%" stopColor="#071427" />
        </linearGradient>
        <filter id="srvGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="14" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Ambient glow */}
      <circle cx="210" cy="140" r="95" fill="#C9A227" fillOpacity="0.09" filter="url(#srvGlow)" />

      {/* Technical grid lines */}
      <line x1="30" y1="90" x2="350" y2="90" stroke="#E2E8F0" strokeOpacity="0.25" strokeDasharray="3 3" />
      <line x1="30" y1="190" x2="350" y2="190" stroke="#E2E8F0" strokeOpacity="0.25" strokeDasharray="3 3" />
      <line x1="120" y1="20" x2="120" y2="260" stroke="#E2E8F0" strokeOpacity="0.25" strokeDasharray="3 3" />
      <line x1="260" y1="20" x2="260" y2="260" stroke="#E2E8F0" strokeOpacity="0.25" strokeDasharray="3 3" />

      {/* Background Main Frame (Browser / Application Window) */}
      <rect
        x="60"
        y="45"
        width="250"
        height="175"
        rx="16"
        fill="url(#srvNavyGrad)"
        stroke="rgba(201, 162, 39, 0.3)"
        strokeWidth="1.5"
      />
      {/* Window Controls */}
      <circle cx="85" cy="65" r="4" fill="#C9A227" />
      <circle cx="98" cy="65" r="4" fill="#94A3B8" fillOpacity="0.5" />
      <circle cx="111" cy="65" r="4" fill="#94A3B8" fillOpacity="0.5" />

      {/* Search/Command Bar */}
      <rect x="135" y="58" width="150" height="15" rx="7.5" fill="#071427" stroke="rgba(255,255,255,0.1)" />
      <circle cx="145" cy="65.5" r="2.5" stroke="#C9A227" strokeWidth="1" />
      <rect x="153" y="64" width="60" height="3" rx="1.5" fill="#94A3B8" fillOpacity="0.6" />

      {/* Left Navigation Bar */}
      <rect x="75" y="90" width="45" height="115" rx="8" fill="#071427" fillOpacity="0.6" />
      <rect x="83" y="100" width="29" height="5" rx="2.5" fill="#C9A227" fillOpacity="0.9" />
      <rect x="83" y="112" width="22" height="4" rx="2" fill="#94A3B8" fillOpacity="0.4" />
      <rect x="83" y="122" width="26" height="4" rx="2" fill="#94A3B8" fillOpacity="0.4" />
      <rect x="83" y="132" width="20" height="4" rx="2" fill="#94A3B8" fillOpacity="0.4" />

      {/* Main Content: Modular Service Cards */}
      <rect x="132" y="90" width="80" height="48" rx="8" fill="url(#srvCardGrad)" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" />
      <circle cx="147" cy="104" r="6" fill="#C9A227" fillOpacity="0.25" stroke="#C9A227" strokeWidth="1" />
      <rect x="144" y="118" width="55" height="4" rx="2" fill="#FFFFFF" fillOpacity="0.8" />
      <rect x="144" y="126" width="40" height="3" rx="1.5" fill="#94A3B8" fillOpacity="0.5" />

      <rect x="222" y="90" width="75" height="48" rx="8" fill="url(#srvCardGrad)" stroke="rgba(201, 162, 39, 0.25)" strokeWidth="1" />
      <circle cx="237" cy="104" r="6" fill="#E6C65C" fillOpacity="0.25" stroke="#E6C65C" strokeWidth="1" />
      <rect x="234" y="118" width="50" height="4" rx="2" fill="#FFFFFF" fillOpacity="0.8" />
      <rect x="234" y="126" width="35" height="3" rx="1.5" fill="#94A3B8" fillOpacity="0.5" />

      {/* Growth Performance Curve Box */}
      <rect x="132" y="148" width="165" height="58" rx="8" fill="#071427" stroke="rgba(201, 162, 39, 0.2)" />
      {/* Step line chart */}
      <path
        d="M142 192 L165 182 L190 186 L218 168 L248 172 L280 156"
        stroke="url(#srvGoldGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="280" cy="156" r="4" fill="#E6C65C" />

      {/* Foreground Floating Service Node 1 */}
      <g filter="url(#srvGlow)">
        <rect x="30" y="130" width="75" height="60" rx="12" fill="#071427" stroke="url(#srvGoldGrad)" strokeWidth="1.5" />
        <circle cx="50" cy="150" r="10" fill="#C9A227" fillOpacity="0.2" />
        <path d="M47 150L49 152L53 148" stroke="#E6C65C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="42" y="168" width="50" height="5" rx="2.5" fill="#FFFFFF" fillOpacity="0.9" />
        <rect x="42" y="177" width="35" height="4" rx="2" fill="#C9A227" />
      </g>

      {/* Foreground Floating Badge 2 */}
      <rect x="250" y="195" width="100" height="45" rx="12" fill="#0B1F3A" stroke="url(#srvGoldGrad)" strokeWidth="1.5" />
      <circle cx="270" cy="217" r="9" fill="#C9A227" />
      <path d="M267 217L269 219L274 214" stroke="#0B1F3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="286" y="211" width="50" height="5" rx="2.5" fill="#FFFFFF" />
      <rect x="286" y="220" width="35" height="4" rx="2" fill="#94A3B8" />

      {/* Cross sparkles */}
      <path d="M45 40V50M40 45H50" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M335 60V70M330 65H340" stroke="#E6C65C" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};
