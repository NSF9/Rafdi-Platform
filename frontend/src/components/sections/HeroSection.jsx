import { Link } from 'react-router-dom'
import { appRoutes } from '../../constants/routes'
import { heroContent, landingValueContent, warehouses } from '../../data/mockData'
import Button from '../ui/Button'

function BrandMark() {
  return (
    <span className="flex h-14 w-14 items-center justify-center rounded-[1.25rem] bg-rafdi-dark text-white shadow-panel">
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 20V9.8c0-.5.2-.9.6-1.2l6-4.9c.8-.6 1.9-.6 2.7 0l6 4.9c.4.3.6.7.6 1.2V20" />
        <path d="M9 20v-4.5c0-.8.7-1.5 1.5-1.5h3c.8 0 1.5.7 1.5 1.5V20" />
        <path d="M8 11h.01M12 11h.01M16 11h.01" strokeLinecap="round" />
      </svg>
    </span>
  )
}

export default function HeroSection() {
  return (
    <section className="overflow-hidden rounded-[2.75rem] bg-white shadow-soft">
      <div className="grid gap-10 p-6 md:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:p-12">
        <div className="order-2 space-y-6 lg:order-1">
          <div className="inline-flex items-center rounded-full bg-rafdi-bg px-4 py-2 text-xs font-semibold tracking-[0.24em] text-rafdi-primary">
            {heroContent.kicker}
          </div>

          <div className="flex items-center gap-4">
            <BrandMark />
            <div>
              <p className="text-3xl font-black tracking-tight text-rafdi-dark">{heroContent.brandName}</p>
              <p className="mt-1 text-sm font-semibold text-slate-500">{heroContent.brandMarkLabel}</p>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-bold leading-[1.15] text-rafdi-dark md:text-5xl lg:text-6xl">
              {heroContent.title}
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              {heroContent.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button as={Link} to={appRoutes.login} className="min-w-[160px]">
              {heroContent.primaryCta}
            </Button>
            <Button as="a" href="#roles" variant="secondary" className="min-w-[160px]">
              {heroContent.secondaryCta}
            </Button>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {landingValueContent.outcomes.map((outcome, index) => (
              <div key={outcome.title} className="rounded-[1.75rem] bg-slate-50 p-4 shadow-panel/30">
                <p className="text-xs font-semibold tracking-[0.2em] text-rafdi-light">0{index + 1}</p>
                <h2 className="mt-3 text-lg font-bold text-rafdi-dark">{outcome.title}</h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">{outcome.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative h-full rounded-[2.5rem] bg-gradient-to-br from-rafdi-dark via-rafdi-primary to-rafdi-light p-5 text-white shadow-soft md:p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_35%)]" />
            <div className="relative flex h-full flex-col justify-between gap-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold tracking-[0.28em] text-white/70">{heroContent.heroPanel.eyebrow}</p>
                  <p className="mt-2 text-2xl font-bold">{heroContent.heroPanel.title}</p>
                </div>
                <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium">
                  {heroContent.heroPanel.badge}
                </div>
              </div>

              <div className="space-y-4">
                {warehouses.slice(0, 3).map((warehouse) => (
                  <article
                    key={warehouse.name}
                    className="rounded-[1.75rem] border border-white/15 bg-white/10 p-4 backdrop-blur-sm"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h2 className="text-lg font-bold">{warehouse.name}</h2>
                        <p className="mt-1 text-sm text-white/75">{warehouse.city} • {warehouse.size}</p>
                      </div>
                      <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white">
                        {warehouse.status}
                      </span>
                    </div>
                    <p className="rafdi-metric mt-4 text-sm font-semibold text-white/85">{warehouse.price}</p>
                  </article>
                ))}
              </div>

              <div className="rounded-[1.75rem] border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-sm font-semibold text-white/75">{heroContent.heroPanel.flowTitle}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-sm font-medium">
                  {heroContent.heroPanel.flowSteps.map((step) => (
                    <span key={step} className="rounded-full bg-white/12 px-3 py-2">
                      {step}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
