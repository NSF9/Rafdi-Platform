const toneStyles = {
  default: 'bg-white',
  soft: 'bg-slate-50',
  accent: 'bg-rafdi-dark text-white',
}

export function KpiCard({ label, value, helper, icon, tone = 'default', className = '' }) {
  return (
    <article className={`rounded-[2rem] p-6 shadow-panel ${toneStyles[tone] || toneStyles.default} ${className}`}>
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <p className={`text-sm ${tone === 'accent' ? 'text-white/70' : 'text-slate-500'}`}>{label}</p>
          <p className="rafdi-metric mt-3 text-3xl font-bold">{value}</p>
          {helper ? <p className={`mt-3 text-sm ${tone === 'accent' ? 'text-white/80' : 'text-slate-600'}`}>{helper}</p> : null}
        </div>

        {icon ? (
          <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${tone === 'accent' ? 'bg-white/10 text-white' : 'bg-rafdi-primary/10 text-rafdi-primary'}`}>
            {icon}
          </div>
        ) : null}
      </div>
    </article>
  )
}
