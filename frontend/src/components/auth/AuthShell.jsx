import { Link } from 'react-router-dom'
import { appRoutes } from '../../constants/routes'
import AppShell from '../layout/AppShell'
import RafdiWordmark from '../branding/RafdiWordmark'
import { WarehouseIcon } from '../ui/icons'
import Button from '../ui/Button'
import { loginContent } from '../../data/mockData'

function BrandIcon({ children }) {
  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
      {children}
    </span>
  )
}

function AuthTabs({ activeTab }) {
  return (
    <div className="mx-auto flex w-full max-w-xs rounded-[1.35rem] bg-slate-50 p-1 shadow-[inset_0_0_0_1px_rgba(226,232,240,0.9),0_14px_30px_rgba(15,23,42,0.06)] sm:max-w-sm">
      <Link
        to={appRoutes.register}
        className={`flex-1 rounded-[1rem] px-4 py-3 text-center text-sm font-semibold transition ${
          activeTab === 'register' ? 'bg-white text-rafdi-dark shadow-[0_10px_20px_rgba(31,63,92,0.12)]' : 'text-slate-400 hover:text-slate-600'
        }`}
      >
        {loginContent.tabs.signUp}
      </Link>
      <Link
        to={appRoutes.login}
        className={`flex-1 rounded-[1rem] px-4 py-3 text-center text-sm font-semibold transition ${
          activeTab === 'login' ? 'bg-white text-rafdi-dark shadow-[0_10px_20px_rgba(31,63,92,0.12)]' : 'text-slate-400 hover:text-slate-600'
        }`}
      >
        {loginContent.tabs.signIn}
      </Link>
    </div>
  )
}

function BrandPanel() {
  return (
    <div dir="rtl" className="order-1 bg-rafdi-primary px-6 py-8 text-white sm:px-8 lg:order-2 lg:px-10 lg:py-10">
      <div className="flex h-full flex-col">
        <div className="flex items-start justify-between gap-5">
          <div className="pt-1 text-right">
            <RafdiWordmark className="h-[5.75rem] w-[12.25rem] sm:h-24 sm:w-[12.75rem]" title={loginContent.brandPanel.logoText} variant="heroic" />
          </div>
          <BrandIcon>
            <WarehouseIcon />
          </BrandIcon>
        </div>

        <div className="mt-12 lg:mt-16">
          <p className="text-xs font-semibold tracking-[0.28em] text-white/55">{loginContent.brandPanel.platformLabel}</p>
          <h1 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">{loginContent.brandPanel.headline}</h1>
          <p className="mt-5 max-w-sm text-base leading-8 text-white/80">{loginContent.brandPanel.description}</p>
        </div>

        <div className="mt-10 space-y-5 lg:mt-14">
          {loginContent.brandPanel.trustBullets.map((item) => (
            <div key={item.title} className="flex items-start gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm">
              <BrandIcon>
                <WarehouseIcon />
              </BrandIcon>
              <div>
                <h2 className="text-lg font-bold leading-7">{item.title}</h2>
                <p className="mt-1 text-sm leading-7 text-white/75">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-auto hidden pt-10 lg:block">
          <p className="text-xs font-semibold tracking-[0.34em] text-white/35">{loginContent.brandPanel.platformFooter}</p>
        </div>
      </div>
    </div>
  )
}

function DemoQuickAccess() {
  return (
    <div className="pt-10 text-center">
      <p className="text-[0.68rem] font-semibold tracking-[0.38em] text-slate-400">DEMO QUICK ACCESS</p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <Button as={Link} to={appRoutes.admin.dashboard} variant="secondary" className="h-11 min-w-0 rounded-[1.1rem] px-4 text-xs">
          مشرف
        </Button>
        <Button as={Link} to={appRoutes.overview} variant="secondary" className="h-11 min-w-0 rounded-[1.1rem] px-4 text-xs">
          عام
        </Button>
        <Button as={Link} to={appRoutes.owner.warehouses} variant="secondary" className="h-11 min-w-0 rounded-[1.1rem] px-4 text-xs">
          مالك
        </Button>
        <Button as={Link} to={appRoutes.renter.warehouses} variant="secondary" className="h-11 min-w-0 rounded-[1.1rem] px-4 text-xs">
          مستأجر
        </Button>
      </div>
    </div>
  )
}

export default function AuthShell({ activeTab, children }) {
  return (
    <AppShell className="flex items-center">
      <section className="mx-auto grid w-full max-w-4xl overflow-hidden rounded-[2.5rem] bg-white shadow-[0_30px_70px_rgba(31,63,92,0.16)] lg:grid-cols-[0.92fr_1.08fr] lg:[direction:ltr]">
        <div dir="rtl" className="order-2 flex flex-col justify-between p-6 sm:p-8 lg:order-1 lg:p-10">
          <div>
            <AuthTabs activeTab={activeTab} />
            {children}
          </div>
          <DemoQuickAccess />
        </div>
        <BrandPanel />
      </section>
    </AppShell>
  )
}
