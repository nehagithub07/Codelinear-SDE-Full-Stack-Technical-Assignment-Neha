import { ActivityCard, BalanceCard } from './FloatingCard'
import Button from './Button'
import heroBanking from '../assets/hero-banking.jpg'

function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_76%_48%,rgba(0,83,241,0.52),transparent_28%),#020b0e] pb-16 pt-28 sm:pt-36 lg:min-h-[640px] lg:pb-0 lg:pt-[205px]"
      id="home"
    >
      <div className="mx-auto grid max-w-[1288px] items-center gap-9 px-6 sm:gap-14 sm:px-10 lg:grid-cols-[0.62fr_0.38fr] lg:items-start lg:px-16 xl:px-0">
        <div className="max-w-[610px]">
          <h1 className="text-balanced text-[42px] font-normal leading-[1.14] text-mist-50 sm:text-6xl sm:leading-[1.16] lg:text-[64px] lg:leading-[1.25]">
            The new foundation of modern banking
          </h1>
          <p className="mt-6 max-w-[520px] text-base leading-6 text-mist-100/78 sm:mt-6 sm:text-[16px]">
            We drive innovation and growth, provide seamless customer
            experience and operational excellence
          </p>

          <div className="mt-8 flex flex-wrap gap-4 sm:mt-14 sm:gap-5" id="request-demo">
            <Button className="min-w-[210px] rounded-lg" variant="primary">
              Request Demo
            </Button>
            <Button className="min-w-[210px] rounded-lg" href="mailto:hello@n7banking.com" variant="secondary">
              Contact Us
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px] lg:mx-0 lg:mt-0">
          <div className="relative ml-auto min-h-[330px] w-full overflow-visible sm:min-h-[420px] md:min-h-[360px]">
            <div className="absolute inset-x-10 bottom-6 top-4 rounded-[34px] bg-n7-blue/30 blur-3xl" />
            <div className="absolute right-0 top-10 w-[78%] max-w-[365px] overflow-hidden rounded-[34px] shadow-glow sm:top-5 lg:right-20">
              <img
                alt="Customer using mobile banking on a phone beside a laptop"
                className="aspect-[1.21/1] w-full object-cover object-center"
                decoding="async"
                fetchPriority="high"
                height="1024"
                src={heroBanking}
                width="1536"
              />
            </div>

            <div className="absolute right-[-28px] top-10 z-20 origin-top-right scale-[0.72] sm:scale-[0.78] lg:top-7">
              <BalanceCard />
            </div>

            <div className="absolute bottom-7 left-3 z-20 origin-bottom-left scale-[0.72] sm:scale-[0.8] lg:-left-20 lg:bottom-[72px]">
              <ActivityCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
