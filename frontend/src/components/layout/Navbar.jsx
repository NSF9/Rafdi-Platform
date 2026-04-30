import { Link } from 'react-router-dom'
import RafdiWordmark from '../branding/RafdiWordmark'
import { appRoutes } from '../../constants/routes'
import { navigationContent } from '../../data/uiContent'
import Button from '../ui/Button'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8 lg:px-12">
        <Link to={appRoutes.home} className="flex items-center gap-3 text-rafdi-dark font-bold text-xl">
          <div className="h-8 w-8 rounded-lg bg-rafdi-primary flex items-center justify-center text-white text-sm">
            R
          </div>
          <RafdiWordmark className="h-10 w-[6.75rem] md:h-11 md:w-[7.25rem]" title={navigationContent.brand} />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          {navigationContent.links.map((item) => (
            <Link key={item.to} to={item.to} className="hover:text-rafdi-primary transition-colors">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link to={appRoutes.login}>
            <Button variant="secondary" className="px-5 py-2 text-xs">
              {navigationContent.loginAction}
            </Button>
          </Link>
          <Link to={appRoutes.login} className="hidden sm:block">
            <Button className="px-5 py-2 text-xs">
              {navigationContent.primaryAction}
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
