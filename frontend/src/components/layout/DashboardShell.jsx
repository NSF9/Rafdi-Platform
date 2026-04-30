import Sidebar from './Sidebar'
import Topbar from './Topbar'

export default function DashboardShell({ navItems, title, children, className = '' }) {
  return (
    <div dir="rtl" className="rafdi-dashboard-shell min-h-screen bg-rafdi-bg text-right">
      <div className="grid min-h-screen lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="lg:col-start-2 lg:row-start-1">
          <Sidebar navItems={navItems} />
        </div>
        <div className="lg:col-start-1 lg:row-start-1">
          <Topbar title={title} />
          <main className="p-4 md:p-6 lg:p-8">
            <div className={`mx-auto w-full max-w-7xl ${className}`}>{children}</div>
          </main>
        </div>
      </div>
    </div>
  )
}
