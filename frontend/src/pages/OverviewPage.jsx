import { Link } from 'react-router-dom'
import AppShell from '../components/layout/AppShell'
import Button from '../components/ui/Button'
import { InfoRow } from '../components/ui/InfoRow'
import { SectionHeader } from '../components/ui/SectionHeader'
import { StatCard } from '../components/ui/StatCard'
import { StatusBadge } from '../components/ui/StatusBadge'
import { statusTones, statusValues } from '../constants/status'
import { appRoutes } from '../constants/routes'
import { dashboardShowcaseContent } from '../data/mockData'
import { getStatusTextColor, getStatusTone } from '../utils/statusTone'

const roleActions = {
  admin: [
    { label: 'لوحة المشرف', to: appRoutes.admin.dashboard },
    { label: 'إدارة الشركات', to: appRoutes.admin.companies },
  ],
  owner: [
    { label: 'مستودعات المالك', to: appRoutes.owner.warehouses },
    { label: 'حجوزات المالك', to: appRoutes.owner.bookings },
  ],
}

export default function OverviewPage() {
  const { eyebrow, title, text, summaryBar, sharedStats, sections } = dashboardShowcaseContent
  const renterPreviewCards = [
    {
      label: 'المستأجر',
      value: 'قريباً',
      note: 'تجربة البحث والحجز للمستأجر ستتم إضافتها في المهمة التالية دون إظهار صفحات غير مكتملة الآن.',
    },
    {
      label: 'المسار الحالي',
      value: 'مشرف + مالك',
      note: 'العرض الحالي يربط مباشرة إلى الواجهات المنفذة التي يحتاجها العرض التوضيحي.',
    },
  ]

  return (
    <AppShell className="py-10 md:py-12">
      <div className="space-y-8" dir="rtl">
        <section className="overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/85 shadow-soft backdrop-blur">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-6 md:p-8 lg:p-10">
              <SectionHeader eyebrow={eyebrow} title={title} text={text} />
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {sharedStats.map((item) => (
                  <StatCard key={item.label} label={item.label} value={item.value} />
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button as={Link} to={appRoutes.admin.dashboard} className="rounded-[1.35rem] px-6 py-3">
                  ابدأ من لوحة المشرف
                </Button>
                <Button as={Link} to={appRoutes.owner.warehouses} variant="secondary" className="rounded-[1.35rem] px-6 py-3">
                  انتقل إلى تجربة المالك
                </Button>
              </div>
            </div>

            <div className="bg-rafdi-dark p-6 text-white md:p-8 lg:p-10">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-panel backdrop-blur-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-white/70">{summaryBar.title}</p>
                    <p className="mt-2 text-sm leading-7 text-white/85">{summaryBar.subtitle}</p>
                  </div>
                  <StatusBadge tone={statusTones.accent}>{summaryBar.badge}</StatusBadge>
                </div>
                <div className="mt-5 space-y-3">
                  <InfoRow label="بعد تسجيل الدخول" value="الانتقال إلى لوحة الاستعراض" valueClassName="text-white" />
                  <InfoRow label="المسارات الجاهزة" value="المشرف والمالك" valueClassName="text-white" />
                  <InfoRow label="المسار التالي" value="شاشات المستأجر" valueClassName="text-white/80" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
          <article className="rounded-[2.5rem] bg-white p-6 shadow-panel md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-[0.28em] text-rafdi-light">{sections.admin.eyebrow}</p>
                <h2 className="mt-3 text-2xl font-bold text-rafdi-dark">{sections.admin.title}</h2>
                <p className="mt-3 text-slate-600">{sections.admin.description}</p>
              </div>
              <StatusBadge tone={statusTones.warning}>{sections.admin.badge}</StatusBadge>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {sections.admin.highlights.map((item) => (
                <StatCard key={item.label} label={item.label} value={item.value} />
              ))}
            </div>

            <div className="mt-6 rounded-[2rem] bg-slate-50 p-5">
              <h3 className="text-lg font-bold text-rafdi-dark">{sections.admin.queueTitle}</h3>
              <div className="mt-4 space-y-3">
                {sections.admin.moderationQueue.map((company) => (
                  <div key={company.company} className="flex items-center justify-between gap-3 rounded-2xl bg-white px-4 py-3">
                    <div>
                      <p className="font-semibold text-rafdi-dark">{company.company}</p>
                      <p className="mt-1 text-sm text-slate-500">{sections.admin.queueDescription}</p>
                    </div>
                    <StatusBadge tone={getStatusTone(company.status)}>{company.status}</StatusBadge>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {roleActions.admin.map((action) => (
                <Button key={action.to} as={Link} to={action.to} variant={action.to === appRoutes.admin.dashboard ? 'primary' : 'secondary'} className="rounded-[1.2rem] px-5 py-3">
                  {action.label}
                </Button>
              ))}
            </div>
          </article>

          <article className="rounded-[2.5rem] bg-white p-6 shadow-panel md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-[0.28em] text-rafdi-light">{sections.owner.eyebrow}</p>
                <h2 className="mt-3 text-2xl font-bold text-rafdi-dark">{sections.owner.title}</h2>
                <p className="mt-3 text-slate-600">{sections.owner.description}</p>
              </div>
              <StatusBadge tone={statusTones.success}>{sections.owner.badge}</StatusBadge>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {sections.owner.highlights.map((item) => (
                <StatCard key={item.label} label={item.label} value={item.value} />
              ))}
            </div>

            <div className="mt-6 rounded-[2rem] bg-slate-50 p-5">
              <h3 className="text-lg font-bold text-rafdi-dark">{sections.owner.listTitle}</h3>
              <div className="mt-4">
                {sections.owner.warehouses.map((warehouse) => (
                  <InfoRow
                    key={warehouse.name}
                    label={`${warehouse.name} - ${warehouse.city}`}
                    value={warehouse.status}
                    valueClassName={getStatusTextColor(warehouse.status)}
                  />
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {roleActions.owner.map((action) => (
                <Button key={action.to} as={Link} to={action.to} variant={action.to === appRoutes.owner.warehouses ? 'primary' : 'secondary'} className="rounded-[1.2rem] px-5 py-3">
                  {action.label}
                </Button>
              ))}
            </div>
          </article>
        </section>

        <section className="rounded-[2.5rem] bg-white p-6 shadow-panel md:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.28em] text-rafdi-light">{sections.renter.eyebrow}</p>
              <h2 className="mt-3 text-2xl font-bold text-rafdi-dark">{sections.renter.title}</h2>
              <p className="mt-3 max-w-3xl text-slate-600">{sections.renter.description}</p>
            </div>
            <StatusBadge tone={statusTones.outline}>قريباً</StatusBadge>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {sections.renter.highlights.map((item) => (
              <StatCard key={item.label} label={item.label} value={item.value} />
            ))}
          </div>

          <div className="mt-6 rounded-[2rem] border border-dashed border-slate-200 bg-slate-50 p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-bold text-rafdi-dark">{sections.renter.paymentStatus.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">{sections.renter.paymentStatus.detail}</p>
              </div>
              <StatusBadge tone={getStatusTone(statusValues.paid)}>{sections.renter.paymentStatus.status}</StatusBadge>
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {renterPreviewCards.map((item) => (
                <article key={item.label} className="rounded-[1.5rem] bg-white p-4 shadow-soft">
                  <p className="text-sm text-slate-500">{item.label}</p>
                  <p className="mt-2 text-lg font-bold text-rafdi-dark">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{item.note}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </AppShell>
  )
}
