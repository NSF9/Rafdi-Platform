import { workflowContent, workflowSteps } from '../../data/mockData'
import { SectionHeader } from '../ui/SectionHeader'

export default function WorkflowSection() {
  return (
    <section className="rounded-[2.5rem] bg-rafdi-dark p-6 text-white shadow-soft md:p-8 lg:p-10">
      <SectionHeader
        eyebrow={workflowContent.eyebrow}
        title={workflowContent.title}
        text={workflowContent.text}
      />
      <div className="grid gap-4 md:grid-cols-3">
        {workflowSteps.map((step, index) => (
          <article key={step} className="rounded-[1.75rem] border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
            <p className="text-sm font-semibold tracking-[0.22em] text-white/60">{workflowContent.stepPrefix} 0{index + 1}</p>
            <h2 className="mt-4 text-xl font-bold leading-9 text-white">{step}</h2>
          </article>
        ))}
      </div>
    </section>
  )
}
