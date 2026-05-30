import { ArrowRight } from 'lucide-react'

function SolutionCard({ solution }) {
  const Icon = solution.icon

  return (
    <article className="group relative pr-2 text-left">
      <div className="flex h-14 items-start justify-between gap-4">
        <Icon
          aria-hidden="true"
          className="h-11 w-11 text-mist-50/85"
        />
        {solution.label ? (
          <span className="mt-2 text-xs font-medium uppercase text-slate-500">
            {solution.label}
          </span>
        ) : null}
      </div>

      <div className="mt-5">
        <h3 className="text-[23px] font-normal leading-tight text-mist-50">
          {solution.title}
        </h3>
        <p className="mt-8 max-w-[306px] text-base leading-[1.32] text-mist-100/[0.72]">
          {solution.description}
        </p>
      </div>

      <div className="mt-8">
        <a
          className="inline-flex items-center gap-2 border-b border-n7-cyan pb-1 font-mono text-sm uppercase text-n7-cyan transition hover:gap-3"
          href={solution.href}
        >
          Learn More
          <ArrowRight
            aria-hidden="true"
            className="transition group-hover:translate-x-1"
            size={12}
          />
        </a>
      </div>
    </article>
  )
}

export default SolutionCard
