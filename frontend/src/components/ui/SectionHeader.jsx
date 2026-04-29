export function SectionHeader({ eyebrow, title, text }) {
  return (
    <header className="mb-6">
      {eyebrow ? <p className="mb-2 text-xs font-semibold tracking-[0.3em] text-rafdi-light">{eyebrow}</p> : null}
      <h2 className="text-3xl font-bold text-rafdi-dark">{title}</h2>
      {text ? <p className="mt-3 max-w-2xl text-slate-600">{text}</p> : null}
    </header>
  )
}
