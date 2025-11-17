import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, -80])
  const opacity = useTransform(scrollY, [0, 400], [1, 0.7])
  const scale = useTransform(scrollY, [0, 600], [1, 1.05])

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-[#0b0d0f]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-[#0b0d0f] pointer-events-none" />

      <motion.div style={{ y, opacity, scale }} className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }} className="uppercase tracking-[0.35em] text-xs md:text-sm text-zinc-300">
          Precision • Innovation • Excellence
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease: 'easeOut' }}
          className="mt-5 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-white"
        >
          Building the Future with <span className="text-amber-400">Architectural</span> Precision
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9, ease: 'easeOut' }}
          className="mt-6 max-w-2xl text-zinc-300 text-base md:text-lg"
        >
          We craft immersive spaces and resilient structures with the rigor of engineering and the soul of design.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8 }} className="mt-10 flex items-center gap-4">
          <a href="#projects" className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-white backdrop-blur-md transition hover:bg-white/15">
            <span className="font-semibold">Explore Projects</span>
            <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_20px_2px_rgba(251,191,36,0.6)] group-hover:scale-110 transition-transform" />
          </a>
          <a href="#about" className="inline-flex items-center rounded-full px-6 py-3 text-zinc-200 hover:text-white transition">
            About Us
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-400">
          <div className="h-10 w-px mx-auto bg-gradient-to-b from-transparent via-zinc-500 to-transparent" />
          <span className="text-xs uppercase tracking-widest">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
