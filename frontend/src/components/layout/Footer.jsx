import { Link } from 'react-router-dom'
import { footerContent } from '../../data/uiContent'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-4 text-right">
            <div className="flex items-center gap-2 text-rafdi-dark font-bold text-xl justify-start md:justify-end">
              <span>{footerContent.brand}</span>
            </div>
            <p className="text-sm text-slate-500 max-w-md md:ml-auto md:mr-0">
              {footerContent.description}
            </p>
          </div>

          <div className="space-y-4 text-right">
            <h3 className="text-sm font-bold tracking-wider text-rafdi-dark">{footerContent.linksTitle}</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              {footerContent.links.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-rafdi-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-100 pt-8 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} {footerContent.copyright}
        </div>
      </div>
    </footer>
  )
}
