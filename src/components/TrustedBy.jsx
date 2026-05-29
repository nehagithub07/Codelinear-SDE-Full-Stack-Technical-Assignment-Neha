import { trustedLogos } from '../data/trustedLogos'

function TrustedBy() {
  return (
    <section className="bg-ink-950 pb-20 pt-4 sm:pb-28">
      <div className="mx-auto max-w-[1580px] px-6 sm:px-10 lg:px-32">
        <p className="text-[22px] font-semibold leading-none text-mist-100/[0.78] sm:text-2xl">
          Trusted By:
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-4 text-slate-500 sm:gap-x-8">
          {trustedLogos.map((logo) => (
            <div
              className="flex items-center gap-2.5 text-slate-500/85 transition hover:text-slate-300"
              key={logo.name}
            >
              <logo.icon
                aria-hidden="true"
                className={logo.wide ? 'h-7 w-14' : 'h-6 w-6'}
              />
              <span
                className={`font-bold ${logo.small ? 'text-sm' : 'text-lg'}`}
              >
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustedBy
