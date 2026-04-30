export function InfoCard({ eyebrow, title, description, children, aside, footer, className = '' }) {
  return (
    <article className={`rounded-[2rem] bg-white p-6 shadow-panel ${className}`}>
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          {eyebrow ? <p className="mb-2 text-xs font-semibold tracking-[0.28em] text-rafdi-light">{eyebrow}</p> : null}
          {title ? <h3 className="text-xl font-bold text-rafdi-dark">{title}</h3> : null}
          {description ? <p className="mt-3 text-slate-600">{description}</p> : null}
        </div>
        {aside ? <div className="shrink-0">{aside}</div> : null}
      </div>

      {children ? <div className="mt-5">{children}</div> : null}
      {footer ? <div className="mt-5 border-t border-slate-100 pt-4">{footer}</div> : null}
    </article>
  )
}
