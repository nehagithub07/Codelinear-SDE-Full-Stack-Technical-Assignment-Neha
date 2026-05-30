import { ArrowLeft, ArrowRight } from 'lucide-react'
import { ZoomerrMark } from './BrandMarks'
import PatternTile from './PatternTile'

function CaseStudies() {
  return (
    <section className="bg-ink-950 px-6 pb-28 pt-20 sm:px-10" id="case-studies">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="text-center text-[50px] font-normal leading-none text-mist-50">
          Our Case Studies
        </h2>
        <div className="relative mx-auto mt-20 max-w-[1015px]">
          <div className="absolute left-[-90px] top-8 hidden h-[356px] w-[380px] rounded-[18px] bg-[#04191f] opacity-45 lg:block">
            <PatternTile className="m-6 h-[286px] opacity-60" />
          </div>
          <div className="absolute right-[-90px] top-8 hidden h-[356px] w-[380px] rounded-[18px] bg-[#04191f] opacity-35 lg:block" />
          <article className="relative z-10 grid gap-10 rounded-[18px] bg-[#04191f] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)] lg:grid-cols-[0.47fr_0.53fr]">
            <PatternTile className="min-h-[380px]" />
            <div className="flex flex-col justify-center pr-2">
              <p className="font-mono text-xs uppercase text-n7-cyan/80">
                Getting Started
              </p>
              <h3 className="mt-5 text-balanced text-[42px] font-normal leading-[1.22] text-mist-50">
                How we help brand reach out to more people
              </h3>
              <div className="mt-8 flex items-center gap-3 text-2xl font-bold text-slate-500">
                <ZoomerrMark className="h-8 w-8" />
                Zoomerr
              </div>
              <a
                className="mt-12 inline-flex min-h-9 w-full items-center justify-center rounded-lg border border-mist-100/45 font-mono text-xs uppercase text-mist-100/60 transition hover:border-n7-cyan hover:text-n7-cyan"
                href="#read-more"
              >
                Read More
              </a>
            </div>
          </article>
        </div>
        <div className="mt-9 flex items-center justify-center gap-6 text-n7-cyan">
          <button
            aria-label="Previous case study"
            className="grid h-11 w-11 place-items-center rounded-full border border-n7-cyan"
            type="button"
          >
            <ArrowLeft size={23} />
          </button>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full border border-n7-cyan/45" />
            <span className="h-3 w-10 rounded-full bg-n7-cyan/45" />
            <span className="h-3 w-3 rounded-full border border-n7-cyan/45" />
            <span className="h-3 w-3 rounded-full border border-n7-cyan/45" />
          </div>
          <button
            aria-label="Next case study"
            className="grid h-11 w-11 place-items-center rounded-full border border-n7-cyan"
            type="button"
          >
            <ArrowRight size={23} />
          </button>
          <a
            className="ml-auto hidden items-center gap-2 border-b border-n7-cyan pb-1 font-mono text-sm uppercase text-n7-cyan md:inline-flex"
            href="#all-cases"
          >
            View All <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
