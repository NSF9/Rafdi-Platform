import Navbar from './Navbar'
import Footer from './Footer'

export default function AppShell({ children, className = '' }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className={`flex-grow px-4 py-8 md:px-8 lg:px-12 ${className}`}>
        <div className="mx-auto w-full max-w-7xl">{children}</div>
      </main>
      <Footer />
    </div>
  )
}
