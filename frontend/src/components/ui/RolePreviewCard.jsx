import { StatusBadge } from './StatusBadge'

export function RolePreviewCard({ title, text, badge }) {
  return (
    <article className="rounded-[2rem] bg-white p-6 shadow-panel">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-bold text-rafdi-dark">{title}</h3>
          <p className="mt-3 text-slate-600">{text}</p>
        </div>
        {badge ? <StatusBadge>{badge}</StatusBadge> : null}
      </div>
    </article>
  )
}
