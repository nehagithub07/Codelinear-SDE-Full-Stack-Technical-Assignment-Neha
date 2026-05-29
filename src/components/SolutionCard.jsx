import { ArrowRight } from 'lucide-react'

function SolutionCard({ solution }) {
  const Icon = solution.icon

  return (
    <article className="group relative pr-2 text-left">
      <div className="flex h-6 items-start justify-between gap-2 lg:h-16 lg:gap-4">
        <Icon
          aria-hidden="true"
          className="h-4 w-4 text-mist-50/85 lg:h-14 lg:w-14"
        />
        {solution.label ? (
          <span className="mt-1 text-[5px] font-semibold uppercase text-slate-500 lg:mt-2 lg:text-[10px]">
            {solution.label}
          </span>
        ) : null}
      </div>

      <div className="mt-2 lg:mt-7">
        <h3 className="text-[7px] font-medium leading-tight text-mist-50 lg:text-[28px]">
          {solution.title}
        </h3>
        <p className="mt-2 max-w-[360px] text-[4.6px] leading-[1.32] text-mist-100/[0.72] lg:mt-8 lg:text-lg lg:leading-[1.34]">
          {solution.description}
        </p>
      </div>

      <div className="mt-2 lg:mt-8">
        <a
          className="inline-flex items-center gap-1 border-b border-n7-cyan pb-0.5 font-mono text-[5.5px] uppercase text-n7-cyan transition hover:gap-3 lg:gap-2 lg:pb-1 lg:text-base"
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
