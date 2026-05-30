function CtaPanel({
  title = 'Take the full advantage of going paper-less now.',
  description,
  light = false,
}) {
  const panelDescription =
    description ??
    (light
      ? 'N7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations'
      : 'CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations')
  const mark = light ? 'N7' : 'CB7'

  return (
    <section className={light ? 'bg-[#EAF6FA] px-6 py-16 sm:px-10' : 'bg-ink-950 px-6 py-20 sm:px-10'}>
      <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[26px] bg-[#031014] px-8 py-16 text-mist-50 shadow-[0_28px_90px_rgba(0,0,0,0.22)] sm:px-16 lg:px-[66px] lg:py-[122px]">
        <span className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-n7-cyan/10 blur-3xl" />
        <span className="n7-outline-dark pointer-events-none absolute -right-8 top-[-20px] hidden text-[465px] font-semibold leading-none opacity-80 md:block">
          {mark}
        </span>
        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[0.57fr_0.43fr]">
          <div className="max-w-[610px]">
            <h2 className="text-balanced text-[42px] font-normal leading-[1.25] sm:text-[52px]">
              {title}
            </h2>
            <p className="mt-8 max-w-[560px] text-base leading-6 text-mist-100/68">
              {panelDescription}
            </p>
          </div>
          <div className="flex flex-wrap gap-10 lg:justify-end">
            <a
              className="inline-flex min-h-12 min-w-[208px] items-center justify-center rounded-lg border border-white/80 px-8 font-mono text-sm uppercase text-white transition hover:bg-white hover:text-black"
              href="mailto:hello@n7banking.com"
            >
              Contact Us
            </a>
            <a
              className="inline-flex min-h-12 min-w-[210px] items-center justify-center rounded-lg bg-button-blue px-8 font-mono text-sm uppercase text-white transition hover:bg-white hover:text-black"
              href="#request-demo"
            >
              Request Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaPanel
