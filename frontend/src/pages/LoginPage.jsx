import { useNavigate } from 'react-router-dom'
import { appRoutes } from '../constants/routes'
import AuthShell from '../components/auth/AuthShell'
import { LockIcon, MailIcon } from '../components/ui/icons'
import Button from '../components/ui/Button'
import { InputField } from '../components/ui/InputField'
import { loginContent } from '../data/mockData'

export default function LoginPage() {
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate(appRoutes.overview)
  }

  return (
    <AuthShell activeTab="login">
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
        </div>

        <Button type="submit" className="mt-2 h-14 w-full rounded-[1.35rem] text-base shadow-[0_16px_34px_rgba(46,95,138,0.28)]">
          {loginContent.primaryAction}
        </Button>
      </form>
    </AuthShell>
  )
}
