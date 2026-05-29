import { CheckCircle2 } from 'lucide-react'
import CtaPanel from './CtaPanel'
import { PhoneMockup } from './Mockups'

const groups = [
  {
    title: 'Fully compliant with regulatory requirement',
    items: ['Pre-integrated Security System', 'Fully Compliant With Regulatory Requirement', 'Digitally Connected Core'],
  },
  {
    title: "No legacy IT systems",
    items: ['Adaptive & Intelligent API', 'Android User Experience', 'Cloud-native With Low TCO'],
  },
  {
    title: 'No traditional branches',
    items: ['Branchless & Paperless Banking', 'Digital Transformation Capability', 'Optimized, Adaptable and Scalable'],
  },
]

function FeatureText({ group }) {
  return (
    <div className="max-w-[280px]">
      <h3 className="text-[8px] font-semibold text-ink-950 sm:text-sm">{group.title}</h3>
      <p className="mt-1.5 text-[6px] leading-[1.45] text-slate-600 sm:mt-3 sm:text-xs sm:leading-5">
        Our transformation approach is built around clear requirements, modern experience, and digitally connected operations.
      </p>
      <div className="mt-2 grid gap-1 sm:mt-4 sm:gap-2">
        {group.items.map((item) => (
          <div className="flex gap-1 text-[6px] text-slate-700 sm:gap-2 sm:text-xs" key={item}>
            <CheckCircle2 className="h-2.5 w-2.5 shrink-0 text-n7-blue sm:h-4 sm:w-4" />
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

function DigitalBanking() {
  return (
    <>
    <section className="relative overflow-hidden bg-[#EAF6FA] px-4 py-10 text-ink-950 sm:px-10 sm:py-24" id="digital-banking">
        <span className="pointer-events-none absolute -left-32 top-36 text-[360px] font-semibold leading-none text-n7-blue/[0.045] sm:-left-24 sm:top-44 sm:text-[430px]">
          N7
        </span>
        <div className="relative z-10 mx-auto grid max-w-[1500px] grid-cols-[0.44fr_0.56fr] gap-4 sm:gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <h2 className="max-w-[330px] text-xl font-normal leading-tight sm:text-[46px]">
              Digital banking out-of-the-box
            </h2>
            <p className="mt-3 max-w-[350px] text-[7px] leading-[1.5] text-slate-600 sm:mt-5 sm:text-sm sm:leading-6">
              N7 helps your financial institution improve the client experience, automate and optimize procedures.
            </p>
            <div className="mt-4 flex flex-col items-start gap-2 sm:mt-7 sm:gap-3">
              <a
                className="inline-flex min-h-7 min-w-24 items-center justify-center rounded bg-button-blue px-4 font-mono text-[7px] uppercase text-white sm:min-h-10 sm:min-w-36 sm:px-6 sm:text-[11px]"
                href="#request-demo"
              >
                Request Demo
              </a>
              <a className="font-mono text-[7px] uppercase text-n7-blue sm:text-[11px]" href="#digital-details">
                Learn More -&gt;
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-10" id="digital-details">
            <div className="grid gap-5 sm:gap-10">
              <PhoneMockup />
              <div className="ml-auto">
                <FeatureText group={groups[1]} />
              </div>
              <PhoneMockup variant="profile" />
            </div>
            <div className="grid content-start gap-7 pt-5 sm:gap-16 sm:pt-10">
              <FeatureText group={groups[0]} />
              <PhoneMockup variant="chart" />
              <FeatureText group={groups[2]} />
            </div>
          </div>
        </div>
      </section>
      <CtaPanel light />
    </>
  )
}

export default DigitalBanking
