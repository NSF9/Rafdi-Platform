import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginTabs } from '../constants/loginTabs'
import { appRoutes } from '../constants/routes'
import AppShell from '../components/layout/AppShell'
import { LockIcon, MailIcon, WarehouseIcon } from '../components/ui/icons'
import Button from '../components/ui/Button'
import { InputField } from '../components/ui/InputField'
import { loginContent } from '../data/mockData'

function BrandIcon({ children }) {
  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
      {children}
    </span>
  )
}

export default function LoginPage() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState(loginTabs.signIn)

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate(appRoutes.dashboard)
  }

  const isSignIn = activeTab === loginTabs.signIn

  return (
    <AppShell className="flex items-center">
      <section className="mx-auto grid w-full max-w-4xl overflow-hidden rounded-[2.5rem] bg-white shadow-[0_30px_70px_rgba(31,63,92,0.16)] lg:grid-cols-[0.92fr_1.08fr] lg:[direction:ltr]">
        <div dir="rtl" className="order-2 flex flex-col justify-between p-6 sm:p-8 lg:order-1 lg:p-10">
          <div>
            <div className="mx-auto flex w-full max-w-xs rounded-[1.35rem] bg-slate-50 p-1 shadow-[inset_0_0_0_1px_rgba(226,232,240,0.9),0_14px_30px_rgba(15,23,42,0.06)] sm:max-w-sm">
              {Object.entries(loginContent.tabs).map(([key, label]) => {
                const isActive = activeTab === key

                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveTab(key)}
                    className={`flex-1 rounded-[1rem] px-4 py-3 text-sm font-semibold transition ${
                      isActive
                        ? 'bg-white text-rafdi-dark shadow-[0_10px_20px_rgba(31,63,92,0.12)]'
                        : 'text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    {label}
                  </button>
                )
              })}
            </div>

            {isSignIn ? (
              <form className="mx-auto mt-10 max-w-sm space-y-6" onSubmit={handleSubmit}>
                <div className="relative">
                  <InputField
                    label={loginContent.fields.emailLabel}
                    name="email"
                    autoComplete="email"
                    type="email"
                    placeholder={loginContent.fields.emailPlaceholder}
                    dir="ltr"
                    className="h-14 rounded-[1.35rem] border-slate-200 bg-slate-50/90 pe-12 text-left text-sm text-slate-700 placeholder:text-slate-300 focus:bg-white"
                  />
                  <span className="pointer-events-none absolute inset-y-0 right-4 top-8 flex items-center text-slate-300">
                    <MailIcon />
                  </span>
                </div>

                <div className="relative">
                  <div className="mb-2 flex items-center justify-between gap-4 text-sm font-medium text-slate-500">
                    <span>{loginContent.fields.passwordLabel}</span>
                  </div>
                  <InputField
                    aria-label={loginContent.fields.passwordLabel}
                    label=""
                    name="password"
                    autoComplete="current-password"
                    type="password"
                    placeholder={loginContent.fields.passwordPlaceholder}
                    dir="ltr"
                    className="h-14 rounded-[1.35rem] border-slate-200 bg-slate-50/90 pe-12 text-left text-sm text-slate-700 placeholder:text-slate-300 focus:bg-white"
                  />
                  <span className="pointer-events-none absolute inset-y-0 right-4 top-8 flex items-center text-slate-300">
                    <LockIcon />
                  </span>
                  <div className="mt-3 flex justify-start">
                    <button type="button" className="text-xs font-semibold text-rafdi-dark/80 transition hover:text-rafdi-primary">
                      {loginContent.forgotPassword}
                    </button>
                  </div>
                </div>

                <Button type="submit" className="mt-2 h-14 w-full rounded-[1.35rem] text-base shadow-[0_16px_34px_rgba(46,95,138,0.28)]">
                  {loginContent.primaryAction}
                </Button>
              </form>
            ) : (
              <div className="mx-auto mt-10 max-w-sm rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-panel">
                <h2 className="text-xl font-bold text-rafdi-dark">{loginContent.signUpPreview.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{loginContent.signUpPreview.text}</p>
                  <Button
                    type="button"
                    className="mt-6 h-12 w-full rounded-[1.2rem] text-sm"
                    onClick={() => navigate(appRoutes.dashboard)}
                  >
                    {loginContent.signUpPreview.action}
                  </Button>
              </div>
            )}
          </div>

          <div className="pt-10 text-center">
            <p className="text-[0.68rem] font-semibold tracking-[0.38em] text-slate-400">{loginContent.brandPanel.platformLabel}</p>
          </div>
        </div>

        <div dir="rtl" className="order-1 bg-rafdi-primary px-6 py-8 text-white sm:px-8 lg:order-2 lg:px-10 lg:py-10">
          <div className="flex h-full flex-col">
            <div className="flex items-start justify-between gap-4">
              <div className="text-right">
                <p className="text-4xl font-black tracking-tight sm:text-5xl">{loginContent.brandPanel.logoText}</p>
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
      </section>
    </AppShell>
  )
}
