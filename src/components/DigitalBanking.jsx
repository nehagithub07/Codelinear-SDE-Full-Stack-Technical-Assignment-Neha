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

function FeatureText({ group, className = '' }) {
  return (
    <div className={`w-full max-w-[345px] min-w-0 ${className}`}>
      <h3 className="text-[15px] font-extrabold leading-snug text-ink-950">
        {group.title}
      </h3>

      <p className="mt-6 text-[15px] leading-[1.45] text-slate-700">
        {group.body}
      </p>

      <div className="mt-8 grid gap-4">
        {group.items.map((item) => (
          <div
            key={item}
            className="flex min-w-0 items-start gap-3 text-[14px] leading-snug text-slate-700"
          >
            <span className="mt-[5px] h-[10px] w-[10px] flex-none rounded-full bg-[#3367E8]" />
            <span className="min-w-0 break-words">{item}</span>
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
        id="digital-banking"
        className="relative overflow-hidden bg-[#EAF6FA] px-6 py-16 text-ink-950 sm:px-10 lg:px-0 lg:py-0"
      >
        {/* Background outline N7 */}
        <span className="n7-outline-light pointer-events-none absolute left-[13%] top-[-65px] hidden text-[520px] font-semibold leading-none lg:block">
          N7
        </span>

        <span className="n7-outline-light pointer-events-none absolute -left-[340px] top-[350px] hidden text-[820px] font-semibold leading-none lg:block">
          7
        </span>

        <span className="n7-outline-light pointer-events-none absolute right-[-320px] bottom-[-260px] hidden text-[760px] font-semibold leading-none lg:block">
          7
        </span>

        <div className="relative z-10 mx-auto w-full max-w-[1280px] lg:h-[1280px]">
          {/* Hero text */}
          <div className="lg:absolute lg:left-[20px] lg:top-[70px]">
            <h2 className="max-w-[410px] text-[42px] font-normal leading-[1.05] tracking-tight text-ink-950 sm:text-[52px]">
              Digital banking out-of-the-box
            </h2>

            <p className="mt-6 max-w-[390px] text-[15px] leading-6 text-slate-700">
              N7 helps your financial institution improve the client experience,
              automate and optimize procedures
            </p>

            <div className="mt-9 flex flex-col items-start gap-5">
             <a
  className="inline-flex min-h-12 min-w-[210px] items-center justify-center rounded-lg bg-button-blue px-8 font-mono text-sm font-medium uppercase tracking-normal text-white transition-all duration-200 ease-out hover:!bg-none hover:!bg-white hover:!text-ink-950 active:scale-[0.98]"
  href="#request-demo"
>
  Request Demo
</a>

              <a
                href="#digital-details"
                className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-wide text-n7-blue"
              >
                Learn More -&gt;
              </a>
            </div>
          </div>

          {/* Top phone */}
          <div className="mt-16 flex justify-center lg:absolute lg:left-[455px] lg:top-[35px] lg:mt-0">
            <PhoneMockup />
          </div>

          {/* Top right text */}
          <FeatureText
            group={groups[0]}
            className="mt-14 lg:absolute lg:left-[805px] lg:top-[135px] lg:mt-0"
          />

          {/* Middle text */}
          <FeatureText
            group={groups[1]}
            className="mt-24 lg:absolute lg:left-[455px] lg:top-[590px] lg:mt-0"
          />

          {/* Chart phone */}
          <div
            id="digital-details"
            className="mt-16 flex justify-center lg:absolute lg:left-[845px] lg:top-[455px] lg:mt-0"
          >
            <PhoneMockup variant="chart" />
          </div>

          {/* Bottom profile phone */}
          <div className="mt-24 flex justify-center lg:absolute lg:left-[455px] lg:top-[900px] lg:mt-0">
            <PhoneMockup variant="profile" />
          </div>

          {/* Bottom right text */}
          <FeatureText
            group={groups[2]}
            className="mt-14 lg:absolute lg:left-[805px] lg:top-[1010px] lg:mt-0"
          />
        </div>
      </section>

      <CtaPanel light />
    </>
  )
}

export default DigitalBanking