import { rolePreviewContent, roleCards } from '../../data/mockData'
import { RolePreviewCard } from '../ui/RolePreviewCard'
import { SectionHeader } from '../ui/SectionHeader'

export default function RolesSection() {
  return (
    <section id="roles" className="rounded-[2.5rem] bg-white p-6 shadow-panel md:p-8 lg:p-10">
      <SectionHeader
        eyebrow={rolePreviewContent.eyebrow}
        title={rolePreviewContent.title}
        text={rolePreviewContent.text}
      />
      <div className="grid gap-4 lg:grid-cols-3">
        {roleCards.map((card, index) => (
          <RolePreviewCard key={card.title} title={card.title} text={card.text} badge={`0${index + 1}`} />
        ))}
      </div>
    </section>
  )
}
