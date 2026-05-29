import { ActivityCard, BalanceCard } from './FloatingCard'
import Button from './Button'
import heroBanking from '../assets/hero-banking.png'

function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-hero-radial pb-16 pt-32 sm:pt-36 lg:min-h-[760px] lg:pb-0"
      id="home"
    >
      <div className="mx-auto grid max-w-[1660px] items-center gap-14 px-6 sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-16 xl:px-28">
        <div className="max-w-[760px]">
          <h1 className="text-5xl font-medium leading-[1.16] text-mist-50 sm:text-6xl lg:text-[82px]">
            The new foundation of modern banking
          </h1>
          <p className="mt-8 max-w-[540px] text-lg leading-8 text-mist-100/80 sm:text-xl">
            We drive innovation and growth, provide seamless customer
            experience and operational excellence
          </p>

          <div className="mt-14 flex flex-col gap-4 sm:flex-row">
            <Button>Request Demo</Button>
            <Button href="#contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[720px] lg:mx-0">
          <div className="relative ml-auto aspect-[1.16/1] w-full max-w-[540px] overflow-visible sm:max-w-[590px]">
            <div className="absolute inset-x-8 bottom-2 top-8 rounded-[34px] bg-n7-blue/20 blur-3xl" />
            <div className="absolute right-0 top-5 w-[74%] overflow-hidden rounded-[34px] shadow-glow sm:w-[78%]">
              {/* Replace this generated placeholder with the Figma-exported hero image when available. */}
              <img
                alt="Customer using mobile banking on a phone beside a laptop"
                className="aspect-[1.18/1] w-full object-cover object-center"
                decoding="async"
                src={heroBanking}
              />
            </div>

            <div className="absolute -right-1 top-[13%] z-20 sm:-right-12 lg:-right-16">
              <BalanceCard />
            </div>

            <div className="absolute -left-1 bottom-[14%] z-20 sm:left-3 lg:-left-9">
              <ActivityCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
