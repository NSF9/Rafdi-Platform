export function InfoRow({ label, value, valueClassName = '' }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 py-3 last:border-b-0 sm:flex-nowrap">
      <span className="min-w-0 flex-1 text-sm text-slate-500">{label}</span>
      <span className={`text-sm font-semibold text-rafdi-dark sm:text-left ${valueClassName}`}>{value}</span>
    </div>
  )
}
