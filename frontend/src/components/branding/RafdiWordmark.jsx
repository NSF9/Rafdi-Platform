export default function RafdiWordmark({ className = '', title = 'رفدي', variant = 'default' }) {
  const isHeroic = variant === 'heroic'
  const frameStrokeWidth = isHeroic ? '2.2' : '1.7'
  const accentStrokeWidth = isHeroic ? '2.3' : '1.9'

  return (
    <svg
      viewBox="0 0 220 92"
      aria-label={title}
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`rafdiMark-${variant}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={isHeroic ? '#f8fbff' : '#d9e8f5'} />
          <stop offset="42%" stopColor={isHeroic ? '#7fb0d8' : '#4a88bf'} />
          <stop offset="100%" stopColor={isHeroic ? '#1f4f76' : '#1f3f5c'} />
        </linearGradient>
        <linearGradient id={`rafdiEdge-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={isHeroic ? 'rgba(127,176,216,0)' : 'rgba(74,136,191,0)'} />
          <stop offset="50%" stopColor={isHeroic ? '#d9e8f5' : '#4a88bf'} />
          <stop offset="100%" stopColor={isHeroic ? 'rgba(127,176,216,0)' : 'rgba(74,136,191,0)'} />
        </linearGradient>
        <filter id={`rafdiGlow-${variant}`} x="-20%" y="-30%" width="140%" height="180%">
          <feDropShadow dx="0" dy={isHeroic ? '7' : '5'} stdDeviation={isHeroic ? '6' : '5'} floodColor={isHeroic ? '#071a29' : '#1f3f5c'} floodOpacity={isHeroic ? '0.34' : '0.2'} />
        </filter>
      </defs>

      <g filter={`url(#rafdiGlow-${variant})`}>
        <path
          d="M110 9C124 9 136 12 147 18C157 24 164 32 166 43C168 54 165 64 158 72C151 80 140 85 126 87H94C80 85 69 80 62 72C55 64 52 54 54 43C56 32 63 24 73 18C84 12 96 9 110 9Z"
          fill={isHeroic ? 'rgba(248,251,255,0.08)' : 'rgba(74,136,191,0.06)'}
          stroke={`url(#rafdiMark-${variant})`}
          strokeWidth={frameStrokeWidth}
        />
        <path
          d="M76 24C86 18 97 15 110 15C123 15 134 18 144 24"
          fill="none"
          stroke={`url(#rafdiEdge-${variant})`}
          strokeWidth={accentStrokeWidth}
          strokeLinecap="round"
        />
        <path
          d="M82 72C90 76 99 78 110 78C121 78 130 76 138 72"
          fill="none"
          stroke={`url(#rafdiEdge-${variant})`}
          strokeWidth={accentStrokeWidth}
          strokeLinecap="round"
        />
        <path
          d="M67 46H81"
          fill="none"
          stroke={`url(#rafdiEdge-${variant})`}
          strokeWidth={isHeroic ? '1.8' : '1.4'}
          strokeLinecap="round"
          opacity={isHeroic ? '0.95' : '0.72'}
        />
        <path
          d="M139 46H153"
          fill="none"
          stroke={`url(#rafdiEdge-${variant})`}
          strokeWidth={isHeroic ? '1.8' : '1.4'}
          strokeLinecap="round"
          opacity={isHeroic ? '0.95' : '0.72'}
        />
        <text
          x="110"
          y={isHeroic ? '58' : '56'}
          textAnchor="middle"
          direction="rtl"
          unicodeBidi="plaintext"
          fontFamily="Cairo, 'Noto Kufi Arabic', system-ui, sans-serif"
          fontSize={isHeroic ? '39' : '35'}
          fontWeight="900"
          letterSpacing="0"
          fill={`url(#rafdiMark-${variant})`}
          stroke={isHeroic ? '#082339' : '#1f3f5c'}
          strokeOpacity={isHeroic ? '0.3' : '0.18'}
          strokeWidth={isHeroic ? '1.1' : '0.9'}
          paintOrder="stroke fill"
        >
          {title}
        </text>
      </g>
    </svg>
  )
}
