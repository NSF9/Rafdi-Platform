import { Link } from 'react-router-dom'
import { appRoutes } from '../../constants/routes'
import { finalCtaContent } from '../../data/mockData'
import Button from '../ui/Button'

export default function CTASection() {
  return (
    <section className="rounded-[2.5rem] bg-gradient-to-l from-rafdi-primary to-rafdi-dark p-6 text-white shadow-soft md:p-8 lg:p-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.28em] text-white/70">{finalCtaContent.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">{finalCtaContent.title}</h2>
          <p className="mt-4 text-base leading-8 text-white/80">{finalCtaContent.text}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button
            as={Link}
            to={appRoutes.login}
            variant="secondary"
            className="border-white bg-white text-rafdi-dark shadow-panel hover:bg-rafdi-bg"
          >
            {finalCtaContent.primaryAction}
          </Button>
          <Button
            as={Link}
            to={appRoutes.dashboard}
            variant="secondary"
            className="border-white/20 bg-white/10 text-white shadow-none hover:bg-white/15"
          >
            {finalCtaContent.secondaryAction}
          </Button>
        </div>
      </div>
    </section>
  )
}
