import { CheckCircle2 } from 'lucide-react'
import CtaPanel from './CtaPanel'
import { PhoneMockup } from './Mockups'

const groups = [
  {
    title: 'Fully compliant with regulatory requirement',
    body: 'The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank operating-risk protocols and procedures.',
    items: [
      'Pre-integrated Security System',
      'Fully Compliant With Regulatory Requirement',
      'Digitally Connected Core',
    ],
  },
  {
    title: 'No legacy IT systems',
    body: 'Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.',
    items: [
      'Adaptive & Intelligent API monetization',
      'Ambient User Experience',
      'Cloud-native With lower TCO',
    ],
  },
  {
    title: 'No traditional branches',
    body: 'Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience.',
    items: [
      'Branchless & Paperless Banking',
      'Digital Transformation Capability',
      'Optimized, Adoptable and Scalable',
    ],
  },
]

function FeatureText({ group }) {
  return (
    <div className="max-w-[390px]">
      <h3 className="text-base font-semibold text-ink-950">{group.title}</h3>
      <p className="mt-7 text-base leading-[1.35] text-slate-700">
        {group.body}
      </p>
      <div className="mt-9 grid gap-5">
        {group.items.map((item) => (
          <div className="flex gap-3 text-base leading-snug text-slate-700" key={item}>
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 fill-n7-blue text-white" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function DigitalBanking() {
  return (
    <>
      <section
        className="relative overflow-hidden bg-[#EAF6FA] px-6 py-28 text-ink-950 sm:px-10 lg:py-[112px]"
        id="digital-banking"
      >
        <span className="n7-outline-light pointer-events-none absolute left-[20%] top-14 hidden text-[540px] font-semibold leading-none lg:block">
          N7
        </span>
        <span className="n7-outline-light pointer-events-none absolute -left-[160px] top-[430px] text-[520px] font-semibold leading-none">
          7
        </span>
        <div className="relative z-10 mx-auto max-w-[1296px]">
          <div className="grid items-start gap-14 lg:grid-cols-[0.38fr_0.32fr_0.3fr]">
            <div className="pt-0 lg:pt-20">
              <h2 className="text-balanced max-w-[370px] text-[46px] font-normal leading-[1.36]">
                Digital banking out-of-the-box
              </h2>
              <p className="mt-5 max-w-[380px] text-base leading-6 text-slate-700">
                N7 helps your financial institution improve the client
                experience, automate and optimize procedures
              </p>
              <div className="mt-10 flex flex-col items-start gap-5">
                <a
                  className="inline-flex min-h-12 min-w-[210px] items-center justify-center rounded-lg bg-button-blue px-8 font-mono text-sm uppercase text-white"
                  href="#request-demo"
                >
                  Request Demo
                </a>
                <a
                  className="inline-flex items-center gap-2 border-b border-n7-blue pb-1 font-mono text-sm uppercase text-n7-blue"
                  href="#digital-details"
                >
                  Learn More -&gt;
                </a>
              </div>
            </div>
            <PhoneMockup />
            <div className="pt-0 lg:pt-36">
              <FeatureText group={groups[0]} />
            </div>
          </div>

          <div
            className="mt-24 grid items-center gap-14 lg:grid-cols-[0.42fr_0.28fr_0.3fr]"
            id="digital-details"
          >
            <div className="hidden lg:block" />
            <FeatureText group={groups[1]} />
            <PhoneMockup className="justify-self-center" variant="chart" />
          </div>

          <div className="mt-24 grid items-center gap-14 lg:grid-cols-[0.42fr_0.28fr_0.3fr]">
            <div className="hidden lg:block" />
            <PhoneMockup className="justify-self-center" variant="profile" />
            <FeatureText group={groups[2]} />
          </div>
        </div>
      </section>
      <CtaPanel light />
    </>
  )
}

export default DigitalBanking
