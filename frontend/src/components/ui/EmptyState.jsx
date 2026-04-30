export function EmptyState({ title, description, action, icon, className = '' }) {
  return (
    <div className={`rounded-[2rem] border border-dashed border-slate-200 bg-slate-50 px-6 py-10 text-center ${className}`}>
      {icon ? <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-rafdi-primary shadow-panel">{icon}</div> : null}
      <h3 className="text-lg font-bold text-rafdi-dark">{title}</h3>
      {description ? <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-600">{description}</p> : null}
      {action ? <div className="mt-5 flex justify-center">{action}</div> : null}
    </div>
  )
}
