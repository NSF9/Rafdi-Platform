import { NavLink } from 'react-router-dom'
import RafdiWordmark from '../branding/RafdiWordmark'

export default function Sidebar({ navItems = [] }) {
  return (
    <aside className="border-t border-slate-200/80 bg-white/85 px-4 py-5 backdrop-blur-md lg:min-h-screen lg:border-r-0 lg:border-t-0 lg:border-l">
      <div className="mx-auto flex h-full w-full max-w-7xl flex-col lg:max-w-none">
        <div className="flex items-center justify-between rounded-[1.75rem] bg-rafdi-dark px-4 py-4 text-white shadow-soft lg:flex-col lg:items-stretch lg:gap-6 lg:px-5 lg:py-6">
          <div className="text-right">
            <p className="text-xs font-semibold tracking-[0.22em] text-white/65">منصة رفدي</p>
            <RafdiWordmark className="mt-3 h-10 w-[6.75rem] text-white" title="رفدي" />
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/10 px-3 py-2 text-xs text-white/80">
            واجهة تشغيلية
          </div>
        </div>

        <nav className="mt-5 grid gap-2 lg:mt-8" aria-label="التنقل داخل لوحة التحكم">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-[1.35rem] px-4 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-rafdi-light/20 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                  isActive
                    ? 'bg-rafdi-primary text-white shadow-soft'
                    : 'bg-white text-slate-600 shadow-panel hover:bg-slate-50 hover:text-rafdi-primary'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  )
}
