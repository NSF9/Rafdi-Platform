import { statusTones } from '../../constants/status'

export function StatusBadge({ children, tone = statusTones.neutral }) {
  const tones = {
    [statusTones.neutral]: 'bg-slate-100 text-rafdi-dark',
    [statusTones.success]: 'bg-rafdi-success/10 text-rafdi-success',
    [statusTones.warning]: 'bg-rafdi-warning/10 text-rafdi-warning',
    [statusTones.error]: 'bg-rafdi-error/10 text-rafdi-error',
  }

  return (
    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${tones[tone] || tones[statusTones.neutral]}`}>
      {children}
    </span>
  )
}
