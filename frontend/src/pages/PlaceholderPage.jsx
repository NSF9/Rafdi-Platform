export default function PlaceholderPage({ title, description }) {
  return (
    <section dir="rtl" className="mx-auto max-w-3xl rounded-[2.5rem] border border-white/70 bg-white/90 p-6 text-right shadow-soft backdrop-blur md:p-8">
      <p className="text-sm font-semibold tracking-[0.24em] text-rafdi-light">قيد الإعداد</p>
      <h1 className="mt-4 text-3xl font-bold text-rafdi-dark md:text-4xl">{title}</h1>
      <p className="mt-4 text-base leading-8 text-slate-600">{description}</p>
      <div className="mt-8 rounded-[1.75rem] bg-slate-50 p-5 text-sm leading-7 text-slate-500">
        يتم تجهيز هذه الصفحة ضمن مراحل التنفيذ التالية مع الحفاظ على هيكل التنقل والعناوين النهائية من الآن.
      </div>
    </section>
  )
}
