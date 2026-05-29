import { ArrowRight } from 'lucide-react'

function SolutionCard({ solution }) {
  const Icon = solution.icon

  return (
    <article className="group flex h-full min-h-[350px] flex-col overflow-hidden rounded-lg border border-white/[0.08] bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-n7-cyan/[0.45] hover:bg-white/[0.055] hover:shadow-glow">
      <div className="flex items-start justify-between gap-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white text-ink-950">
          <Icon aria-hidden="true" size={24} strokeWidth={1.9} />
        </div>
        <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-mist-100/70">
          {solution.tag}
        </span>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-semibold leading-tight text-white">
          {solution.title}
        </h3>
        <p className="mt-4 text-base leading-7 text-mist-100/[0.66]">
          {solution.description}
        </p>
      </div>

      <div className="mt-auto pt-10">
        <a
          className="inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-mist-50 transition hover:text-n7-cyan"
          href={solution.href}
        >
          Learn More
          <ArrowRight
            aria-hidden="true"
            className="transition group-hover:translate-x-1"
            size={17}
          />
        </a>
      </div>
    </article>
  )
}

export default SolutionCard
