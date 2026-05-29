import { CheckCircle2 } from 'lucide-react'
import CtaPanel from './CtaPanel'
import { DashboardMockup, DesktopMockup } from './Mockups'

const features = [
  'Customer 360 Banking',
  'Manageable deposits and withdrawals',
  'Transaction management',
  'Instant Core API',
  'Payments processing, bank transfers, interest, merchant, NBFC and more',
  'CRM functions',
  'Pricing configuration',
  'Workflow',
  'Comprehensive end-user onboarding',
  'Customer lifecycle from initial onboarding, account creation, loan, vendor information, approval and so on',
]

function CoreBanking() {
  return (
    <>
      <section className="relative overflow-hidden border-t border-slate-500/60 bg-ink-950 py-14 sm:py-24" id="core-banking">
        <span className="pointer-events-none absolute left-[8%] top-8 text-[180px] font-semibold leading-none text-n7-blue/[0.05] sm:text-[420px]">
          CB7
        </span>
        <div className="relative z-10 mx-auto grid max-w-[1700px] gap-16 px-6 sm:px-10 lg:px-16">
          <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="max-w-[500px]">
              <h2 className="text-3xl font-normal leading-tight text-mist-50 sm:text-[50px]">
                A complete cloud-based core banking.
              </h2>
              <p className="mt-5 max-w-[360px] text-sm leading-6 text-mist-100/65">
                Take time to go paper-less and get full control on your corebanking service
              </p>
              <div className="mt-7 flex flex-col items-start gap-3">
                <a
                  className="inline-flex min-h-11 min-w-36 items-center justify-center rounded-md bg-button-blue px-7 font-mono text-[11px] uppercase text-white transition hover:brightness-110"
                  href="#request-demo"
                >
                  Request Demo
                </a>
                <a className="font-mono text-[11px] uppercase text-n7-cyan" href="#core-details">
                  Learn More -&gt;
                </a>
              </div>
            </div>
            <div className="ml-auto w-full max-w-[700px]">
              <DashboardMockup />
            </div>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
            <div className="max-w-[620px] lg:-ml-20">
              <DesktopMockup />
            </div>
            <div id="core-details">
              <h3 className="text-xl font-normal text-mist-50">
                Run a more efficient, flexible, and digitally connected corebanking system
              </h3>
              <p className="mt-5 text-sm text-mist-100/75">What you will get:</p>
              <div className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {features.map((feature) => (
                  <div className="flex gap-2 text-xs leading-5 text-mist-100/75" key={feature}>
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-n7-blue" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <CtaPanel />
    </>
  )
}

export default CoreBanking
