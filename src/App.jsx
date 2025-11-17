import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Values from './components/Values'
import Legacy from './components/Legacy'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0d0f] text-white selection:bg-amber-400/30 selection:text-white">
      <Hero />
      <About />
      <Projects />
      <Values />
      <Legacy />
      <Footer />
    </div>
  )
}
