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
      <h3 className="text-sm font-semibold text-ink-950">{group.title}</h3>
      <p className="mt-3 text-xs leading-5 text-slate-600">
        Our transformation approach is built around clear requirements, modern experience, and digitally connected operations.
      </p>
      <div className="mt-4 grid gap-2">
        {group.items.map((item) => (
          <div className="flex gap-2 text-xs text-slate-700" key={item}>
            <CheckCircle2 className="h-4 w-4 shrink-0 text-n7-blue" />
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
      <section className="relative overflow-hidden bg-[#EAF6FA] px-6 py-14 text-ink-950 sm:px-10 sm:py-24" id="digital-banking">
        <span className="pointer-events-none absolute -left-24 top-44 text-[430px] font-semibold leading-none text-n7-blue/[0.055]">
          N7
        </span>
        <div className="relative z-10 mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <h2 className="max-w-[330px] text-3xl font-normal leading-tight sm:text-[46px]">
              Digital banking out-of-the-box
            </h2>
            <p className="mt-5 max-w-[350px] text-sm leading-6 text-slate-600">
              N7 helps your financial institution improve the client experience, automate and optimize procedures.
            </p>
            <div className="mt-7 flex flex-col items-start gap-3">
              <a
                className="inline-flex min-h-10 min-w-36 items-center justify-center rounded bg-button-blue px-6 font-mono text-[11px] uppercase text-white"
                href="#request-demo"
              >
                Request Demo
              </a>
              <a className="font-mono text-[11px] uppercase text-n7-blue" href="#digital-details">
                Learn More -&gt;
              </a>
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-2" id="digital-details">
            <div className="grid gap-10">
              <PhoneMockup />
              <div className="ml-auto">
                <FeatureText group={groups[1]} />
              </div>
              <PhoneMockup variant="profile" />
            </div>
            <div className="grid content-start gap-16 pt-10">
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
