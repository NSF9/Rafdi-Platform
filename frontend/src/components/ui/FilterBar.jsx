export function FilterBar({ children, actions, className = '', fieldsClassName = '' }) {
  return (
    <section className={`rounded-[2rem] border border-slate-100 bg-white p-4 shadow-panel md:p-5 ${className}`}>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className={`grid flex-1 gap-4 md:grid-cols-2 xl:grid-cols-4 ${fieldsClassName}`}>{children}</div>
        {actions ? <div className="flex flex-wrap justify-start gap-3 lg:justify-end">{actions}</div> : null}
      </div>
    </section>
  )
}
