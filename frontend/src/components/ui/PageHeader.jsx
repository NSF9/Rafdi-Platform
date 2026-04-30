export function PageHeader({ eyebrow, title, description, actions, meta, className = '' }) {
  return (
    <header className={`flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between ${className}`}>
      <div className="text-start">
        {eyebrow ? <p className="mb-2 text-xs font-semibold tracking-[0.28em] text-rafdi-light">{eyebrow}</p> : null}
        <h1 className="text-3xl font-bold text-rafdi-dark md:text-4xl">{title}</h1>
        {description ? <p className="mt-3 max-w-3xl text-slate-600">{description}</p> : null}
        {meta ? <div className="mt-4 flex flex-wrap gap-2">{meta}</div> : null}
      </div>

      {actions ? <div className="flex flex-wrap gap-3 lg:justify-end">{actions}</div> : null}
    </header>
  )
}
