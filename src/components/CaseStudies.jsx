import { ArrowLeft, ArrowRight } from 'lucide-react'
import { ZoomerrMark } from './BrandMarks'
import PatternTile from './PatternTile'

function GhostContent({ className = '' }) {
  return (
    <div
      className={`absolute top-[33px] hidden h-[381px] w-[390px] overflow-hidden rounded-[18px] bg-[#03191e]/70 lg:block ${className}`}
    >
      <div className="absolute left-[165px] top-[56px] w-[430px] opacity-[0.18]">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#3db5e6]">
          Getting Started
        </p>

        <h3 className="mt-5 text-[38px] font-normal leading-[1.24] tracking-[0.02em] text-[#dce8ec]">
          How we help brand reach out to more people
        </h3>

        <div className="mt-8 flex items-center gap-3 text-[21px] font-bold text-slate-500">
          <ZoomerrMark className="h-8 w-8" />
          Zoomerr
        </div>

        <div className="mt-[48px] h-[35px] w-[430px] rounded-[8px] border border-[#dce8ec]/35" />
      </div>
    </div>
  )
}

function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="relative overflow-hidden bg-[#000c0f] px-5 pb-[72px] pt-[132px] sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-[1280px]">
        <h2 className="text-center text-[42px] font-normal leading-none tracking-[0.01em] text-[#dce8ec] sm:text-[50px]">
          Our Case Studies
        </h2>

        <div className="relative mx-auto mt-[78px] max-w-[1015px]">
          {/* Left faded card */}
          <div className="absolute left-[-90px] top-[33px] hidden h-[381px] w-[390px] overflow-hidden rounded-[18px] bg-[#03191e]/70 opacity-70 lg:block">
            <PatternTile className="absolute left-[20px] top-[23px] h-[333px] w-[421px] opacity-55" />
          </div>

          {/* Right faded card */}
          <GhostContent className="right-[-90px]" />

          {/* Main card */}
          <article className="relative z-10 grid min-h-[438px] gap-[78px] rounded-[18px] bg-[#03191e] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.35)] lg:grid-cols-[421px_1fr]">
            <PatternTile className="h-[381px] w-full rounded-[8px]" />

            <div className="flex flex-col justify-start pt-[30px] lg:pr-[36px]">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#3db5e6]/80">
                Getting Started
              </p>

              <h3 className="mt-[18px] max-w-[455px] text-[36px] font-normal leading-[1.26] tracking-[0.035em] text-[#dce8ec] sm:text-[41px]">
                How we help brand reach out to more people
              </h3>

              <div className="mt-[33px] flex items-center gap-3 text-[21px] font-bold text-slate-500">
                <ZoomerrMark className="h-8 w-8" />
                <span>Zoomerr</span>
              </div>

              <a
                href="#read-more"
                className="mt-[50px] inline-flex h-[35px] w-full items-center justify-center rounded-[8px] border border-[#dce8ec]/45 font-mono text-[11px] uppercase tracking-[0.08em] text-[#dce8ec]/55 transition hover:bg-white hover:text-black"
              >
                Read More
              </a>
            </div>
          </article>
        </div>

        {/* Controls */}
        <div className="relative mx-auto mt-[33px] flex max-w-[1015px] items-center justify-center">
          <div className="flex items-center gap-[30px] text-[#28aeea]">
            <button
              aria-label="Previous case study"
              type="button"
              className="grid h-[43px] w-[43px] place-items-center rounded-full border border-[#28aeea] transition hover:bg-[#28aeea] hover:text-[#000c0f]"
            >
              <ArrowLeft size={22} strokeWidth={1.4} />
            </button>

            <div className="flex items-center gap-[8px]">
              <span className="h-[12px] w-[12px] rounded-full border border-[#28aeea]/45" />
              <span className="h-[12px] w-[38px] rounded-full bg-[#28aeea]/40" />
              <span className="h-[12px] w-[12px] rounded-full border border-[#28aeea]/45" />
              <span className="h-[12px] w-[12px] rounded-full border border-[#28aeea]/45" />
            </div>

            <button
              aria-label="Next case study"
              type="button"
              className="grid h-[43px] w-[43px] place-items-center rounded-full border border-[#28aeea] transition hover:bg-[#28aeea] hover:text-[#000c0f]"
            >
              <ArrowRight size={22} strokeWidth={1.4} />
            </button>
          </div>

          <a
            href="#all-cases"
            className="absolute right-0 hidden items-center gap-2 border-b border-[#28aeea] pb-[2px] font-mono text-[12px] uppercase tracking-[0.16em] text-[#28aeea] md:inline-flex"
          >
            View All <ArrowRight size={16} strokeWidth={1.4} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies