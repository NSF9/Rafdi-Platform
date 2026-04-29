import { landingValueContent } from '../../data/mockData'
import { FeatureCard } from '../ui/FeatureCard'
import { SectionHeader } from '../ui/SectionHeader'

export default function ValueSection() {
  return (
    <section className="rounded-[2.5rem] bg-white p-6 shadow-panel md:p-8 lg:p-10">
      <SectionHeader
        eyebrow={landingValueContent.eyebrow}
        title={landingValueContent.title}
        text={landingValueContent.text}
      />
      <div className="grid gap-4 lg:grid-cols-3">
        {landingValueContent.outcomes.map((outcome, index) => (
          <FeatureCard
            key={outcome.title}
            kicker={`0${index + 1}`}
            title={outcome.title}
            text={outcome.text}
          />
        ))}
      </div>
    </section>
  )
}
