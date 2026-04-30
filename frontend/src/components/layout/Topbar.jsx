export default function Topbar({ title }) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
      <div className="flex flex-col gap-4 px-4 py-4 md:px-6 lg:px-8 xl:flex-row xl:items-center xl:justify-between">
        <div className="text-right">
          <p className="text-xs font-semibold tracking-[0.22em] text-rafdi-light">لوحة المتابعة</p>
          <p className="mt-2 text-2xl font-bold text-rafdi-dark md:text-3xl">{title}</p>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-3">
          <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-500 shadow-panel">
            بحث سريع
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-panel transition hover:text-rafdi-primary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-rafdi-light/20 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-rafdi-warning" />
            الإشعارات
          </button>
          <div className="inline-flex items-center gap-3 rounded-full bg-rafdi-dark px-3 py-2 text-sm text-white shadow-soft">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/12 text-xs font-semibold">RF</span>
            <div className="text-right">
              <p className="font-semibold">مستخدم تجريبي</p>
              <p className="text-xs text-white/70">وصول داخلي</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
