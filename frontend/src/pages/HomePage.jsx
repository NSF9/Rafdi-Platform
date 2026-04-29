import AppShell from '../components/layout/AppShell'
import { HeroSection, ValueSection, WorkflowSection, RolesSection, CTASection } from '../components/sections'

export default function HomePage() {
  return (
    <AppShell className="pb-12 pt-6 md:pt-8">
      <div className="space-y-8 md:space-y-10">
        <HeroSection />
        <ValueSection />
        <WorkflowSection />
        <RolesSection />
        <CTASection />
      </div>
    </AppShell>
  )
}
