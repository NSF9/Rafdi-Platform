import { adminCompanies, adminMetrics, adminReservations, adminWarehouses } from '../../data/adminMockData'
import { InfoCard } from '../../components/ui/InfoCard'
import { KpiCard } from '../../components/ui/KpiCard'

const accentMetricIds = new Set(['revenue'])
const revenueTrend = [4000, 12000, 9000, 24000, 15000]

function average(values) {
  return values.length ? values.reduce((total, value) => total + value, 0) / values.length : 0
}

function formatPercent(value) {
  return `${Math.round(value * 100)}%`
}

function buildLinePath(values, width, height) {
  if (!values.length) {
    return ''
  }

  const maxValue = Math.max(...values)
  const safeMaxValue = maxValue > 0 ? maxValue : 1
  const step = values.length > 1 ? width / (values.length - 1) : 0

  return values
    .map((value, index) => {
      const x = index * step
      const y = height - value / safeMaxValue * height

      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`
    })
    .join(' ')
}

export default function AdminDashboardPage() {
  const occupancyAverage = average(adminWarehouses.map((warehouse) => warehouse.occupancyRate))
  const reservationCounts = [4, 7, 5, 10, 8]
  const revenuePath = buildLinePath(revenueTrend, 420, 220)

  return (
    <div className="space-y-8">
      <section className="rounded-[2.5rem] border border-white/70 bg-white/85 p-6 shadow-soft backdrop-blur md:p-8">
        <div className="flex flex-col gap-3 text-start lg:max-w-2xl lg:ms-auto">
          <p className="text-xs font-semibold tracking-[0.28em] text-rafdi-light">Admin Overview</p>
          <h2 className="text-3xl font-bold text-rafdi-dark md:text-4xl">لوحة تحكم المشرف</h2>
          <p className="text-slate-600">
            نظرة عامة على أداء المنصة مع متابعة الشركات والمستودعات والحجوزات التي تحتاج تدخلًا إداريًا.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {adminMetrics.map((metric) => (
            <KpiCard
              key={metric.id}
              label={metric.label}
              value={metric.value}
              helper={metric.changeLabel}
              tone={accentMetricIds.has(metric.id) ? 'accent' : 'default'}
            />
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <InfoCard
          eyebrow="Live Revenue"
          title="تطور الإيرادات"
          description="لوحة مرئية موجزة لحركة الإيرادات الشهرية بنفس الاتجاه العام الظاهر في التصميم المرجعي."
        >
          <div className="rounded-[1.75rem] bg-slate-50 p-4">
            <div className="flex items-center justify-between gap-3 text-sm text-slate-500">
              <span>مباشر</span>
              <span>24,000</span>
            </div>
            <svg viewBox="0 0 420 220" className="mt-5 h-64 w-full" aria-hidden="true">
              {[0, 1, 2, 3].map((index) => (
                <line
                  key={index}
                  x1="0"
                  y1={30 + index * 50}
                  x2="420"
                  y2={30 + index * 50}
                  stroke="rgb(226 232 240)"
                  strokeDasharray="6 8"
                />
              ))}
              <path d={revenuePath} fill="none" stroke="rgb(168 85 247)" strokeWidth="4" strokeLinecap="round" />
              {revenueTrend.map((value, index) => {
                const x = revenueTrend.length > 1 ? index * (420 / (revenueTrend.length - 1)) : 210
                const maxValue = Math.max(...revenueTrend, 1)
                const y = 220 - value / maxValue * 220

                return <circle key={value + index} cx={x} cy={y} r="5" fill="rgb(168 85 247)" />
              })}
            </svg>
            <div className="mt-3 grid grid-cols-5 text-center text-xs text-slate-400">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
            </div>
          </div>
        </InfoCard>

        <InfoCard
          eyebrow="Reservations Growth"
          title="نمو الحجوزات"
          description="مخطط عمودي مختصر لقراءة نشاط الحجوزات عبر الأشهر الأخيرة مع مؤشرات تشغيلية مساندة."
        >
          <div className="grid gap-4 md:grid-cols-[1.35fr,0.65fr]">
            <div className="rounded-[1.75rem] bg-slate-50 p-4">
              <div className="flex items-end justify-between gap-3">
                {reservationCounts.map((count, index) => (
                  <div key={count + index} className="flex flex-1 flex-col items-center gap-3">
                    <div className="flex h-48 w-full items-end justify-center rounded-[1.25rem] bg-white/70 px-2 pb-2">
                      <div
                        className="w-full rounded-[1rem] bg-rafdi-primary"
                        style={{ height: `${Math.max(count / Math.max(...reservationCounts, 1) * 100, 12)}%` }}
                      />
                    </div>
                    <span className="text-xs text-slate-400">{['Jan', 'Feb', 'Mar', 'Apr', 'May'][index]}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-[1.75rem] bg-slate-50 p-4">
                <p className="text-sm text-slate-500">متوسط الإشغال</p>
                <p className="rafdi-metric mt-2 text-3xl font-bold text-rafdi-dark">{formatPercent(occupancyAverage)}</p>
                <p className="mt-3 text-sm text-slate-500">{adminWarehouses.length} مستودعات ضمن العينة الحالية</p>
              </div>
              <div className="rounded-[1.75rem] bg-slate-50 p-4">
                <p className="text-sm text-slate-500">شركات بحاجة متابعة</p>
                <p className="rafdi-metric mt-2 text-3xl font-bold text-rafdi-dark">{adminCompanies.length}</p>
                <p className="mt-3 text-sm text-slate-500">{adminReservations.length} حجوزات مرتبطة بالمتابعة الحالية</p>
              </div>
            </div>
          </div>
        </InfoCard>
      </section>
    </div>
  )
}
