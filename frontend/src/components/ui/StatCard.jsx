export function StatCard({ label, value }) {
  return (
    <article className="rounded-4xl bg-white p-6 shadow-panel">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="rafdi-metric mt-3 text-2xl font-bold text-rafdi-dark">{value}</p>
    </article>
  )
}
