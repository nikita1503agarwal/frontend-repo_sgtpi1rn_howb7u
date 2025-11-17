import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Stats from './components/Stats'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Process from './components/Process'
import Values from './components/Values'
import Testimonials from './components/Testimonials'
import Legacy from './components/Legacy'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0c10] text-white selection:bg-cyan-300/30 selection:text-white">
      <Navbar />
      <Hero />
      <Marquee />
      <Stats />
      <About />
      <Services />
      <Projects />
      <Process />
      <Values />
      <Testimonials />
      <Legacy />
      <CTA />
      <Footer />
    </div>
  )
}
