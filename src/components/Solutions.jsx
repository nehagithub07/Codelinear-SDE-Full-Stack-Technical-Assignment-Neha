import { solutions } from '../data/solutions'
import SolutionCard from './SolutionCard'

function Solutions() {
  return (
    <section className="bg-ink-950 pb-28 pt-0 lg:pb-36" id="solutions">
      <div className="mx-auto grid max-w-[1296px] gap-14 px-6 sm:px-10 lg:grid-cols-[0.42fr_0.58fr] lg:gap-16 lg:px-16 xl:px-0">
        <div className="pt-2">
          <h2 className="max-w-[430px] text-balanced text-[34px] font-normal leading-[1.2] text-mist-50 md:text-[38px]">
            All of our solutions are tailor-made to your needs
          </h2>

          <a
            className="mt-12 inline-flex min-h-12 w-full max-w-[226px] items-center justify-center rounded-lg border border-mist-50/85 px-6 font-mono text-sm uppercase text-mist-50 transition hover:bg-white hover:text-ink-950"
            href="#request-demo"
          >
            Request Demo
          </a>
        </div>

        <div className="grid gap-x-20 gap-y-24 sm:grid-cols-2">
          {solutions.map((solution) => (
            <SolutionCard key={solution.title} solution={solution} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solutions
