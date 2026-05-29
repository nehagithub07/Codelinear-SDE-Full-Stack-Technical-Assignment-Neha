import { ArrowLeft, ArrowRight } from 'lucide-react'
import PatternTile from './PatternTile'

function CaseStudies() {
  return (
    <section className="bg-ink-950 px-6 py-16 sm:px-10 sm:py-24" id="case-studies">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-center text-3xl font-normal text-mist-50 sm:text-5xl">
          Our Case Studies
        </h2>
        <div className="relative mx-auto mt-10 max-w-[680px] rounded-lg bg-white/[0.035] p-4 shadow-glow">
          <div className="absolute -left-10 top-1/2 hidden h-40 w-28 -translate-y-1/2 opacity-30 sm:block">
            <PatternTile />
          </div>
          <div className="relative z-10 grid gap-5 sm:grid-cols-[230px_1fr]">
            <PatternTile className="min-h-48" />
            <div className="p-2">
              <p className="font-mono text-[10px] uppercase text-n7-cyan">Art Venue</p>
              <h3 className="mt-3 text-2xl font-normal leading-tight text-mist-50">
                How we help brand reach out to more people
              </h3>
              <p className="mt-5 text-sm text-mist-100/60">Zoomerr</p>
              <a
                className="mt-8 inline-flex min-h-8 w-full items-center justify-center rounded border border-mist-100/25 font-mono text-[10px] uppercase text-mist-100/75 transition hover:border-n7-cyan hover:text-n7-cyan"
                href="#read-more"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-center gap-4 text-n7-cyan">
          <button className="grid h-6 w-6 place-items-center rounded-full border border-n7-cyan/60" type="button" aria-label="Previous case study">
            <ArrowLeft size={14} />
          </button>
          <span className="h-1 w-10 rounded-full bg-n7-cyan/70" />
          <button className="grid h-6 w-6 place-items-center rounded-full border border-n7-cyan/60" type="button" aria-label="Next case study">
            <ArrowRight size={14} />
          </button>
          <a className="ml-8 font-mono text-[10px] uppercase" href="#all-cases">
            View All -&gt;
          </a>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
