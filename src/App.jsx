import Header from './components/Header'
import Hero from './components/Hero'
import OutstationRoutes from './components/OutstationRoutes'
import Services from './components/Services'
import Fleet from './components/Fleet'
import HowItWorks from './components/HowItWorks'
import Safety from './components/Safety'
import Reviews from './components/Reviews'
import Pricing from './components/Pricing'
import Coverage from './components/Coverage'
import Footer from './components/Footer'
import GridLines from './components/GridLines'
import FloatingActions from './components/FloatingActions'

function App() {
  return (
    <div className="relative min-h-screen bg-[#FAF8F5] text-stone-800 font-sans selection:bg-orange-500 selection:text-white">
      {/* Decorative Grid SVG Background */}
      <GridLines />
      <FloatingActions />
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-orange-100/30 to-transparent pointer-events-none -z-10" />

      <Header />
      <Hero />
      <OutstationRoutes />
      <Services />
      <Fleet />
      <HowItWorks />
      <Safety />
      <Reviews />
      <Coverage />
      <Footer />
    </div>
  )
}

export default App
