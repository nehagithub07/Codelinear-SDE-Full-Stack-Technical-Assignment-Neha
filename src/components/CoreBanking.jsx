import { CheckCircle2 } from 'lucide-react'
import CtaPanel from './CtaPanel'
import { DashboardMockup, DesktopMockup } from './Mockups'

const features = [
  'Customer-On Boarding',
  'Managing deposits and withdrawals',
  'Transaction management',
  'Interest Calculation',
  'Payments processing (cash, cheques, mandates, NEFT, RTGS etc)',
  'CRM Activities',
  'Configuring New Banking Products',
  'Loan disbursal and Loan management',
  'Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.',
]

function FeatureItem({ feature }) {
  return (
    <div className="flex gap-3 text-base leading-snug text-mist-100/78">
      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 fill-n7-blue text-white" />
      <span>{feature}</span>
    </div>
  )
}

function CoreBanking() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink-950" id="core-banking">
        <div className="relative min-h-[720px] border-t border-slate-500/50 py-28">
          <span className="n7-outline-dark pointer-events-none absolute -left-14 top-16 text-[450px] font-semibold leading-none lg:left-[-20px] lg:text-[560px]">
            CB7
          </span>
          <div className="relative z-10 mx-auto grid max-w-[1296px] gap-14 px-6 sm:px-10 lg:grid-cols-[0.55fr_0.45fr] lg:px-16 xl:px-0">
            <div className="max-w-[540px] pt-0 lg:pt-4">
              <h2 className="text-balanced text-[42px] font-normal leading-[1.22] text-mist-50 sm:text-[52px]">
                A complete cloud-based core banking.
              </h2>
              <p className="mt-6 max-w-[410px] text-base leading-6 text-mist-100/72">
                Faster time to market with our cloud-based core banking
                services
              </p>
              <div className="mt-8 flex flex-col items-start gap-4">
                <a
                  className="inline-flex min-h-12 min-w-[210px] items-center justify-center rounded-lg bg-button-blue px-8 font-mono text-sm uppercase text-white transition hover:brightness-110"
                  href="#request-demo"
                >
                  Request Demo
                </a>
                <a
                  className="inline-flex items-center gap-2 border-b border-n7-cyan pb-1 font-mono text-sm uppercase text-n7-cyan"
                  href="#core-details"
                >
                  Learn More -&gt;
                </a>
              </div>
            </div>
            <div className="relative min-h-[360px] lg:min-h-0">
              <div className="mx-auto w-[590px] max-w-[calc(100vw-48px)] lg:absolute lg:left-28 lg:top-0 lg:max-w-none">
                <DashboardMockup />
              </div>
            </div>
          </div>
        </div>

        <div
          className="mx-auto grid max-w-[1296px] items-center gap-16 px-6 pb-36 pt-20 sm:px-10 lg:grid-cols-[0.54fr_0.46fr] lg:px-16 xl:px-0"
          id="core-details"
        >
          <div className="justify-self-center lg:justify-self-start lg:-ml-[260px]">
            <DesktopMockup />
          </div>
          <div className="max-w-[600px]">
            <h3 className="text-balanced text-[28px] font-normal leading-[1.24] text-mist-50 sm:text-[30px]">
              Run a more efficient, flexible,and digitally connected
              corebanking system
            </h3>
            <p className="mt-8 text-base font-semibold text-mist-50">
              What you will get:
            </p>
            <div className="mt-5 grid gap-x-10 gap-y-4 sm:grid-cols-2">
              {features.map((feature) => (
                <FeatureItem feature={feature} key={feature} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <CtaPanel />
    </>
  )
}

export default CoreBanking
