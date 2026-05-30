import { CheckCircle2 } from 'lucide-react'
import CtaPanel from './CtaPanel'
import { DashboardMockup, DesktopMockup } from './Mockups'

const featuresLeft = [
  'Customer-On Boarding',
  'Managing deposits and withdrawals',
  'Transaction management',
  'Interest Calculation',
  'Payments processing (cash, cheques, mandates, NEFT, RTGS etc)',
]

const featuresRight = [
  'CRM Activities',
  'Configuring New Banking Products',
  'Loan disbursal and Loan management',
  'Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.',
]

function FeatureItem({ feature }) {
  return (
    <div className="flex min-w-0 items-start gap-2.5 text-[13px] leading-[1.35] text-mist-100/75">
      <CheckCircle2 className="mt-[2px] h-[15px] w-[15px] flex-none fill-n7-blue text-white" />
      <span className="min-w-0 break-words">{feature}</span>
    </div>
  )
}

function MockupGlowFrame({
  children,
  className = '',
  bottomLineClassName = '',
}) {
  return (
    <div className={`relative inline-block overflow-visible ${className}`}>
      {/* blue frame around the mockup */}
      <div className="pointer-events-none absolute -left-[2px] -right-[2px] -top-[2px] bottom-[-28px] z-20 rounded-t-[10px] rounded-br-[10px] border border-[#238cff]/95 shadow-[0_0_18px_rgba(35,140,255,0.35)]" />

      {/* actual mockup */}
      <div className="relative z-10 overflow-hidden rounded-t-[9px]">
        {children}
      </div>

      {/* extended bottom blue line */}
      <div
        className={`pointer-events-none absolute bottom-[-28px] z-30 h-[28px] border-b border-r border-[#238cff]/95 shadow-[0_0_16px_rgba(35,140,255,0.6)] ${bottomLineClassName}`}
      />
    </div>
  )
}

function CoreBanking() {
  return (
    <>
      <section
        id="core-banking"
        className="relative min-h-[846px] overflow-hidden bg-ink-950"
      >
        {/* TOP HERO */}
        <div className="relative h-[432px] overflow-visible">
          {/* CB7 outline */}
          <span className="n7-outline-dark pointer-events-none absolute -left-[72px] top-[74px] text-[360px] font-semibold leading-none opacity-70 sm:text-[430px] lg:-left-[42px] lg:top-[78px] lg:text-[455px]">
            CB7
          </span>

          <div className="relative mx-auto h-full max-w-[1296px] px-6 sm:px-10 lg:px-[58px] xl:px-0">
            {/* left text */}
            <div className="relative z-30 pt-[98px]">
              <h2 className="max-w-[430px] text-[36px] font-normal leading-[1.18] tracking-[-0.03em] text-mist-50 sm:text-[40px]">
                A complete cloud-based core banking.
              </h2>

              <p className="mt-4 max-w-[320px] text-[13px] leading-[1.35] text-mist-100/70">
                Faster time to market with our cloud-based core banking
                services
              </p>

              <div className="mt-7 flex flex-col items-start gap-4">
                <a
                  href="#request-demo"
                  className="inline-flex h-[34px] min-w-[148px] items-center justify-center rounded-md bg-button-blue px-6 font-mono text-[10px] font-semibold uppercase text-white transition hover:bg-white hover:text-black"
                >
                  Request Demo
                </a>

                <a
                  href="#core-details"
                  className="inline-flex items-center gap-2 border-b border-n7-cyan pb-1 font-mono text-[10px] font-semibold uppercase text-n7-cyan"
                >
                  Learn More <span aria-hidden="true">-&gt;</span>
                </a>
              </div>
            </div>

            {/* top-right dashboard */}
            <div className="pointer-events-none absolute right-[-265px] top-[40px] z-20 hidden origin-top-right scale-[0.62] transform-gpu lg:block xl:right-[-230px]">
              <MockupGlowFrame bottomLineClassName="-left-[42px] w-[calc(100%+300px)] rounded-br-[10px]">
                <DashboardMockup />
              </MockupGlowFrame>
            </div>
          </div>
        </div>

        {/* BOTTOM DETAILS */}
        <div
          id="core-details"
          className="relative mx-auto h-[414px] max-w-[1296px] px-6 sm:px-10 lg:px-[58px] xl:px-0"
        >
          {/* bottom-left KYC mockup */}
          <div className="pointer-events-none absolute left-[-210px] top-[61px] z-20 hidden origin-top-left scale-[0.58] transform-gpu lg:block xl:left-[-210px]">
            <MockupGlowFrame bottomLineClassName="left-0 w-[calc(100%+245px)] rounded-br-[10px]">
              <DesktopMockup />
            </MockupGlowFrame>
          </div>

          {/* right content */}
          <div className="relative z-30 ml-auto max-w-[475px] pt-[98px] lg:mr-[35px]">
            <h3 className="max-w-[475px] text-[22px] font-normal leading-[1.25] tracking-[-0.02em] text-mist-50 sm:text-[24px]">
              Run a more efficient, flexible,and digitally connected
              corebanking system
            </h3>

            <p className="mt-7 text-[13px] font-semibold text-mist-50">
              What you will get:
            </p>

            <div className="mt-4 grid min-w-0 grid-cols-2 gap-x-10 gap-y-3">
              <div className="grid gap-y-3">
                {featuresLeft.map((feature) => (
                  <FeatureItem feature={feature} key={feature} />
                ))}
              </div>

              <div className="grid gap-y-3">
                {featuresRight.map((feature) => (
                  <FeatureItem feature={feature} key={feature} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE/TABLET */}
        <div className="relative z-30 mx-auto block max-w-[680px] space-y-12 px-6 pb-16 sm:px-10 lg:hidden">
          <MockupGlowFrame bottomLineClassName="-left-[24px] w-[calc(100%+80px)] rounded-br-[10px]">
            <DashboardMockup />
          </MockupGlowFrame>

          <MockupGlowFrame bottomLineClassName="left-0 w-[calc(100%+80px)] rounded-br-[10px]">
            <DesktopMockup />
          </MockupGlowFrame>
        </div>
      </section>

      <CtaPanel />
    </>
  )
}

export default CoreBanking