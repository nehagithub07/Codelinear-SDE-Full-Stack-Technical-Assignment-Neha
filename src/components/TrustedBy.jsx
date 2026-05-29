import { trustedLogos } from '../data/trustedLogos'

function TrustedBy() {
  return (
    <section className="border-y border-white/5 bg-ink-950 py-12">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <p className="text-center text-sm font-medium text-mist-100/[0.55]">
          Trusted By
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {trustedLogos.map((logo) => (
            <div
              className="flex min-h-20 items-center justify-center gap-3 rounded-lg border border-white/5 bg-white/[0.03] px-5 text-mist-100/[0.62] transition duration-200 hover:border-white/[0.12] hover:bg-white/[0.055] hover:text-mist-50"
              key={logo.name}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-xs font-bold text-mist-50">
                {logo.mark}
              </span>
              <span className="text-base font-semibold">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustedBy
