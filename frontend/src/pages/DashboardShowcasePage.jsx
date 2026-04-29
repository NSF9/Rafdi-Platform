import AppShell from '../components/layout/AppShell'
import { statusTones } from '../constants/status'
import { getStatusTextColor, getStatusTone } from '../utils/statusTone'
import { InfoRow } from '../components/ui/InfoRow'
import { SectionHeader } from '../components/ui/SectionHeader'
import { StatCard } from '../components/ui/StatCard'
import { StatusBadge } from '../components/ui/StatusBadge'
import { dashboardShowcaseContent, warehouses } from '../data/mockData'

export default function DashboardShowcasePage() {
  const { eyebrow, title, text, summaryBar, sharedStats, sections } = dashboardShowcaseContent

  return (
    <AppShell className="py-10 md:py-12">
      <div className="space-y-8">
        <section className="rounded-[2.5rem] border border-white/70 bg-white/85 p-6 shadow-soft backdrop-blur md:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader eyebrow={eyebrow} title={title} text={text} />
            <div className="rounded-[2rem] bg-rafdi-dark p-5 text-white shadow-panel lg:max-w-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-white/70">{summaryBar.title}</p>
                  <p className="mt-2 text-sm leading-6 text-white/85">{summaryBar.subtitle}</p>
                </div>
                <StatusBadge>{summaryBar.badge}</StatusBadge>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {sharedStats.map((item) => (
              <StatCard key={item.label} label={item.label} value={item.value} />
            ))}
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.1fr,0.9fr]">
          <article className="rounded-[2.5rem] bg-white p-6 shadow-panel md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-[0.28em] text-rafdi-light">{sections.owner.eyebrow}</p>
                <h2 className="mt-3 text-2xl font-bold text-rafdi-dark">{sections.owner.title}</h2>
                <p className="mt-3 max-w-2xl text-slate-600">{sections.owner.description}</p>
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
          </article>

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
                  <div
                    key={company.company}
                    className="flex items-center justify-between gap-3 rounded-2xl bg-white px-4 py-3"
                    >
                      <div>
                        <p className="font-semibold text-rafdi-dark">{company.company}</p>
                        <p className="mt-1 text-sm text-slate-500">{sections.admin.queueDescription}</p>
                      </div>
                      <StatusBadge tone={getStatusTone(company.status)}>{company.status}</StatusBadge>
                  </div>
                ))}
              </div>
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
            <div className="flex flex-wrap gap-2">
              {sections.renter.quickActions.map((action) => (
                <StatusBadge key={action}>{action}</StatusBadge>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {sections.renter.highlights.map((item) => (
              <StatCard key={item.label} label={item.label} value={item.value} />
            ))}
          </div>

          <div className="mt-6 rounded-[2rem] bg-slate-50 p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-bold text-rafdi-dark">{sections.renter.paymentStatus.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">{sections.renter.paymentStatus.detail}</p>
              </div>
              <StatusBadge tone={getStatusTone(sections.renter.paymentStatus.status)}>
                {sections.renter.paymentStatus.status}
              </StatusBadge>
            </div>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {warehouses.map((warehouse) => (
              <article key={warehouse.name} className="rounded-[2rem] border border-slate-100 bg-slate-50 p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm text-slate-500">{warehouse.city}</p>
                    <h3 className="mt-2 text-lg font-bold text-rafdi-dark">{warehouse.name}</h3>
                  </div>
                  <StatusBadge tone={getStatusTone(warehouse.status)}>{warehouse.status}</StatusBadge>
                </div>
                <div className="mt-5 space-y-3 text-sm text-slate-600">
                  <div className="flex items-center justify-between gap-3">
                    <span>{sections.renter.labels.size}</span>
                    <span className="font-semibold text-rafdi-dark">{warehouse.size}</span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span>{sections.renter.labels.monthlyPrice}</span>
                    <span className="rafdi-metric font-semibold text-rafdi-primary">{warehouse.price}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </AppShell>
  )
}
