import { ActivityCard, BalanceCard } from './FloatingCard'
import Button from './Button'
import heroBanking from '../assets/hero-banking.jpg'

function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-hero-radial pb-8 pt-24 sm:pb-16 sm:pt-36 lg:min-h-[760px] lg:pb-0 lg:pt-[150px] 2xl:pt-[210px]"
      id="home"
    >
      <div className="mx-auto grid max-w-[1920px] items-center gap-9 px-6 sm:gap-14 sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:px-16 xl:px-32 2xl:grid-cols-[minmax(0,820px)_minmax(0,1fr)]">
        <div className="max-w-[760px]">
          <h1 className="text-[42px] font-medium leading-[1.12] text-mist-50 sm:text-6xl sm:leading-[1.16] lg:text-[82px]">
            The new foundation of modern banking
          </h1>
          <p className="mt-6 max-w-[540px] text-base leading-7 text-mist-100/80 sm:mt-8 sm:text-xl sm:leading-8">
            We drive innovation and growth, provide seamless customer
            experience and operational excellence
          </p>

          <div className="mt-8 flex gap-3 sm:mt-14 sm:gap-4" id="request-demo">
            <Button>Request Demo</Button>
            <Button href="mailto:hello@n7banking.com" variant="secondary">
              Contact Us
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[720px] lg:mx-0 lg:mt-5">
          <div className="relative ml-auto min-h-[330px] w-full max-w-[540px] overflow-visible sm:min-h-[450px] sm:max-w-[590px] md:aspect-[1.16/1] md:min-h-0">
            <div className="absolute inset-x-8 bottom-4 top-12 rounded-[34px] bg-n7-blue/20 blur-3xl sm:bottom-10 sm:top-16 md:bottom-2 md:top-8" />
            <div className="absolute right-0 top-12 w-[74%] overflow-hidden rounded-[34px] shadow-glow sm:top-16 sm:w-[78%] md:top-5">
              {/* Replace this generated placeholder with the Figma-exported hero image when available. */}
              <img
                alt="Customer using mobile banking on a phone beside a laptop"
                className="aspect-[1.18/1] w-full object-cover object-center"
                decoding="async"
                fetchPriority="high"
                height="1024"
                src={heroBanking}
                width="1536"
              />
            </div>

            <div className="absolute right-0 top-0 z-20 origin-top-right scale-[0.7] sm:scale-[0.88] md:top-[8%] md:scale-100 lg:-right-16 lg:top-[9%]">
              <BalanceCard />
            </div>

            <div className="absolute bottom-0 left-0 z-20 origin-bottom-left scale-[0.78] sm:left-3 sm:scale-95 md:bottom-[4%] md:scale-100 lg:-left-9 lg:bottom-[30%]">
              <ActivityCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
