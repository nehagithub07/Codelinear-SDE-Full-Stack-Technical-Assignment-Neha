import { solutions } from '../data/solutions'
import SolutionCard from './SolutionCard'

function Solutions() {
  return (
    <section className="bg-ink-950 pb-10 lg:pb-28" id="solutions">
      <div className="mx-auto grid max-w-[1580px] grid-cols-[0.42fr_0.58fr] gap-6 px-4 sm:px-10 lg:gap-12 lg:px-32">
        <div className="pt-0 lg:pt-1">
          <h2 className="max-w-[560px] text-[15px] font-normal leading-[1.2] text-mist-50 lg:text-5xl lg:leading-[1.18]">
            All of our solutions are tailor-made to your needs
          </h2>

          <a
            className="mt-7 inline-flex min-h-8 w-full max-w-[116px] items-center justify-center rounded-md border border-mist-50/80 px-3 font-mono text-[6px] uppercase text-mist-50 transition hover:bg-white hover:text-ink-950 lg:mt-16 lg:min-h-[62px] lg:max-w-[284px] lg:rounded-xl lg:text-lg"
            href="#request-demo"
          >
            Request Demo
          </a>
        </div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-6 lg:gap-x-28 lg:gap-y-24">
          {solutions.map((solution) => (
            <SolutionCard key={solution.title} solution={solution} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solutions
