import { statusTones } from '../../constants/status'

export function StatusBadge({ children, tone = statusTones.neutral, size = 'md', className = '' }) {
  const tones = {
    [statusTones.info]: 'bg-rafdi-primary/10 text-rafdi-primary',
    [statusTones.accent]: 'bg-rafdi-dark text-white',
    [statusTones.outline]: 'border border-slate-200 bg-white text-rafdi-dark',
    [statusTones.neutral]: 'bg-slate-100 text-rafdi-dark',
    [statusTones.success]: 'bg-rafdi-success/10 text-rafdi-success',
    [statusTones.warning]: 'bg-rafdi-warning/10 text-rafdi-warning',
    [statusTones.error]: 'bg-rafdi-error/10 text-rafdi-error',
  }

  const sizes = {
    sm: 'px-2.5 py-1 text-[11px]',
    md: 'px-3 py-1 text-xs',
  }

  return (
    <span
      className={`inline-flex items-center rounded-full font-semibold ${sizes[size] || sizes.md} ${tones[tone] || tones[statusTones.neutral]} ${className}`}
    >
      {children}
    </span>
  )
}
