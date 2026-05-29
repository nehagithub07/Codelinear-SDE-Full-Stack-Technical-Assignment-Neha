import { solutions } from '../data/solutions'
import SectionHeader from './SectionHeader'
import SolutionCard from './SolutionCard'

function Solutions() {
  return (
    <section className="bg-ink-950 py-20 sm:py-24 lg:py-28" id="solutions">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <SectionHeader
          description="Launch digital products, modernize core systems, and operate real-time banking experiences from one composable platform."
          eyebrow="Solutions"
          title="Modern infrastructure for every banking layer"
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {solutions.map((solution) => (
            <SolutionCard key={solution.title} solution={solution} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solutions
