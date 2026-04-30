import { Link, useNavigate } from 'react-router-dom'
import { appRoutes } from '../constants/routes'
import AuthShell from '../components/auth/AuthShell'
import { LockIcon, MailIcon } from '../components/ui/icons'
import Button from '../components/ui/Button'
import { InputField } from '../components/ui/InputField'
import { loginContent } from '../data/mockData'

function AccountTypeOption({ title, description, defaultChecked = false, disabled = false, badge }) {
  return (
    <label
      className={`flex cursor-pointer items-start justify-between gap-4 rounded-[1.35rem] border px-4 py-4 transition ${
        disabled
          ? 'cursor-not-allowed border-dashed border-slate-300 bg-slate-50/50 opacity-60'
          : 'border-slate-200 bg-slate-50/90 hover:border-rafdi-light/40 hover:bg-white'
      }`}
    >
      <div className="flex items-center gap-3">
        <input
          type="radio"
          name="accountType"
          defaultChecked={defaultChecked}
          disabled={disabled}
          className="mt-0.5 h-5 w-5 rounded border-slate-300 text-rafdi-primary focus:ring-rafdi-light"
        />
        {badge && (
          <span className="rounded-full bg-slate-200 px-2.5 py-0.5 text-[0.65rem] font-bold tracking-wider text-slate-500">
            {badge}
          </span>
        )}
      </div>
      <span className="flex-1 text-right">
        <span className="block text-base font-bold text-rafdi-dark">{title}</span>
        <span className="mt-1 block text-sm leading-6 text-slate-500">{description}</span>
      </span>
    </label>
  )
}

export default function RegisterPage() {
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate(appRoutes.overview)
  }

  return (
    <AuthShell activeTab="register">
      <form className="mx-auto mt-8 max-w-sm space-y-5" onSubmit={handleSubmit}>
        <InputField
          label="اسم الشركة"
          name="companyName"
          autoComplete="organization"
          placeholder="Acme Corp Saudi"
          dir="ltr"
          className="h-14 rounded-[1.35rem] border-slate-200 bg-slate-50/90 text-left text-sm text-slate-700 placeholder:text-slate-300 focus:bg-white"
        />

        <InputField
          label="رقم السجل التجاري"
          name="commercialRegistration"
          placeholder="R: 1010XXXXXX"
          dir="ltr"
          className="h-14 rounded-[1.35rem] border-slate-200 bg-slate-50/90 text-left text-sm text-slate-700 placeholder:text-slate-300 focus:bg-white"
        />

        <div className="space-y-3">
          <p className="text-sm font-medium text-slate-500">نوع الحساب</p>
          <AccountTypeOption title="صاحب مستودع" description="أرغب في إدارة مستودعاتي وطلبات الحجز الواردة." defaultChecked />
          <AccountTypeOption title="شركة مستأجرة" description="أرغب في استئجار المستودعات ومتابعة الحجوزات." disabled badge="قريباً" />
        </div>

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
          <InputField
            label={loginContent.fields.passwordLabel}
            name="password"
            autoComplete="new-password"
            type="password"
            placeholder={loginContent.fields.passwordPlaceholder}
            dir="ltr"
            className="h-14 rounded-[1.35rem] border-slate-200 bg-slate-50/90 pe-12 text-left text-sm text-slate-700 placeholder:text-slate-300 focus:bg-white"
          />
          <span className="pointer-events-none absolute inset-y-0 right-4 top-8 flex items-center text-slate-300">
            <LockIcon />
          </span>
        </div>

        <Button type="submit" className="mt-2 h-14 w-full rounded-[1.35rem] text-base shadow-[0_16px_34px_rgba(46,95,138,0.28)]">
          إنشاء حساب
        </Button>

        <p className="text-center text-sm text-slate-500">
          لديك حساب بالفعل؟{' '}
          <Link to={appRoutes.login} className="font-semibold text-rafdi-primary transition hover:text-rafdi-dark">
            سجّل الدخول
          </Link>
        </p>
      </form>
    </AuthShell>
  )
}
