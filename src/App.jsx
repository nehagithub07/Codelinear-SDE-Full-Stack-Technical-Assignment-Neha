import Hero from './components/Hero'
import CoreBanking from './components/CoreBanking'
import DigitalBanking from './components/DigitalBanking'
import MarqueeStrip from './components/MarqueeStrip'
import Navbar from './components/Navbar'
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
      </main>
    </>
  )
}

export default App
