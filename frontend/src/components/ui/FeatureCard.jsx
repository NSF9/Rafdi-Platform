export function FeatureCard({ title, text, kicker }) {
  return (
    <article className="rounded-[2rem] bg-white p-6 shadow-panel">
      {kicker ? <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-rafdi-light">{kicker}</p> : null}
      <h3 className="text-xl font-bold text-rafdi-dark">{title}</h3>
      <p className="mt-3 text-slate-600">{text}</p>
    </article>
  )
}
