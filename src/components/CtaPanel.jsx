function CtaPanel({
  title = 'Take the full advantage of going paper-less now.',
  description = "N7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations.",
  light = false,
}) {
  return (
    <section className={light ? 'bg-[#EAF6FA] px-4 py-10' : 'bg-ink-950 px-4 py-14'}>
      <div className="mx-auto max-w-[1700px] overflow-hidden rounded-lg bg-[radial-gradient(circle_at_20%_30%,rgba(0,174,239,0.16),transparent_30%),#031014] px-5 py-8 text-mist-50 sm:px-20 sm:py-16">
        <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <span className="pointer-events-none absolute inset-y-[-80px] right-0 hidden text-[230px] font-semibold leading-none text-n7-blue/[0.08] md:block">
            BN7
          </span>
          <div className="relative z-10 max-w-[520px]">
            <h2 className="text-2xl font-normal leading-tight sm:text-[40px]">
              {title}
            </h2>
            <p className="mt-4 max-w-[460px] text-xs leading-6 text-mist-100/65 sm:text-sm">
              {description}
            </p>
          </div>
          <div className="relative z-10 flex gap-4">
            <a
              className="inline-flex min-h-9 min-w-28 items-center justify-center rounded border border-white/70 px-5 font-mono text-[10px] uppercase text-white transition hover:bg-white hover:text-ink-950"
              href="mailto:hello@n7banking.com"
            >
              Contact Us
            </a>
            <a
              className="inline-flex min-h-9 min-w-28 items-center justify-center rounded bg-button-blue px-5 font-mono text-[10px] uppercase text-white transition hover:brightness-110"
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
