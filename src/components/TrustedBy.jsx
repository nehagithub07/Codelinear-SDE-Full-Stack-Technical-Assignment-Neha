import { trustedLogos } from '../data/trustedLogos'

function TrustedBy() {
  return (
    <section className="bg-ink-950 pb-36 pt-0">
      <div className="mx-auto max-w-[1288px] px-6 sm:px-10 lg:px-16 xl:px-0">
        <p className="text-base font-medium leading-none text-mist-100/[0.82]">
          Trusted By:
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-slate-500">
          {trustedLogos.map((logo) => (
            <div
              className="flex items-center gap-2 text-slate-500/85 transition hover:text-slate-300"
              key={logo.name}
            >
              <logo.icon
                aria-hidden="true"
                className={logo.wide ? 'h-5 w-10' : 'h-5 w-5'}
              />
              <span
                className={`font-bold ${logo.small ? 'text-[10px]' : 'text-sm'}`}
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
