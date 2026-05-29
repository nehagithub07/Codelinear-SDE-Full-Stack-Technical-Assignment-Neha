import { solutions } from '../data/solutions'
import SolutionCard from './SolutionCard'

function Solutions() {
  return (
    <section className="bg-ink-950 pb-20 sm:pb-28" id="solutions">
      <div className="mx-auto grid max-w-[1580px] grid-cols-[0.42fr_0.58fr] gap-7 px-6 sm:gap-12 sm:px-10 lg:px-32">
        <div className="pt-0 sm:pt-1">
          <h2 className="max-w-[560px] text-[15px] font-normal leading-[1.2] text-mist-50 sm:text-5xl sm:leading-[1.18]">
            All of our solutions are tailor-made to your needs
          </h2>

          <a
            className="mt-7 inline-flex min-h-9 w-full max-w-[126px] items-center justify-center rounded-md border border-mist-50/80 px-3 font-mono text-[7px] uppercase text-mist-50 transition hover:bg-white hover:text-ink-950 sm:mt-16 sm:min-h-[62px] sm:max-w-[284px] sm:rounded-xl sm:text-lg"
            href="#request-demo"
          >
            Request Demo
          </a>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:gap-x-28 sm:gap-y-32">
          {solutions.map((solution) => (
            <SolutionCard key={solution.title} solution={solution} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solutions
