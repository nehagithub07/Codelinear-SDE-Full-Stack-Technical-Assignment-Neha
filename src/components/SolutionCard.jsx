import { ArrowRight } from 'lucide-react'

function SolutionCard({ solution }) {
  const Icon = solution.icon

  return (
    <article className="group relative pr-2 text-left">
      <div className="flex h-12 items-start justify-between gap-4 sm:h-16">
        <Icon
          aria-hidden="true"
          className="h-9 w-9 text-mist-50/85 sm:h-14 sm:w-14"
        />
        {solution.label ? (
          <span className="mt-2 text-[10px] font-semibold uppercase text-slate-500">
            {solution.label}
          </span>
        ) : null}
      </div>

      <div className="mt-5 sm:mt-7">
        <h3 className="text-base font-medium leading-tight text-mist-50 sm:text-[28px]">
          {solution.title}
        </h3>
        <p className="mt-6 max-w-[360px] text-xs leading-[1.55] text-mist-100/[0.72] sm:mt-12 sm:text-[20px] sm:leading-[1.35]">
          {solution.description}
        </p>
      </div>

      <div className="mt-6 sm:mt-10">
        <a
          className="inline-flex items-center gap-2 border-b border-n7-cyan pb-1 font-mono text-[10px] uppercase text-n7-cyan transition hover:gap-3 sm:text-base"
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
