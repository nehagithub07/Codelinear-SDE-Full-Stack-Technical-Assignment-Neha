import Hero from './components/Hero'
import CoreBanking from './components/CoreBanking'
import CaseStudies from './components/CaseStudies'
import DigitalBanking from './components/DigitalBanking'
import Footer from './components/Footer'
import MarqueeStrip from './components/MarqueeStrip'
import Navbar from './components/Navbar'
import Insights from './components/Insights'
import Solutions from './components/Solutions'
import TrustedBy from './components/TrustedBy'

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-ink-950 text-mist-50">
        <Hero />
        <TrustedBy />
        <Solutions />
        <CoreBanking />
        <MarqueeStrip />
        <DigitalBanking />
        <Insights />
        <CaseStudies />
        <Footer />
      </main>
    </>
  )
}

export default App
