import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Hammer, Ruler, Building2, HardHat } from 'lucide-react'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, -80])
  const opacity = useTransform(scrollY, [0, 400], [1, 0.7])
  const scale = useTransform(scrollY, [0, 600], [1, 1.05])

  // Foreground parallax beams
  const beamX1 = useTransform(scrollY, [0, 600], [0, -40])
  const beamX2 = useTransform(scrollY, [0, 600], [0, 50])
  // Slow zoom for background photo
  const bgScale = useTransform(scrollY, [0, 800], [1.05, 1.15])

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-[#0a0c10]">
      {/* Construction background photography layer (parallax + slow zoom) */}
      <motion.div
        aria-hidden
        style={{ scale: bgScale }}
        className="absolute inset-0 bg-cover bg-center opacity-[0.2]"
        // High-res crane/site image, lazy via CSS background is fine as it's decorative
        // Source: Unsplash (construction site cranes at dusk)
        // Note: Image is decorative and blended under gradients for brand tone
        
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop')",
          }}
        />
      </motion.div>

      {/* Subtle 3D Spline layer kept very faint as atmospheric motion */}
      <div className="absolute inset-0 opacity-[0.18] mix-blend-screen">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Blueprint grid overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.08] [background-size:32px_32px] [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-size:128px_128px] [background-image:linear-gradient(to_right,rgba(103,232,249,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(251,191,36,0.15)_1px,transparent_1px)]" />
      </div>

      {/* Atmospheric gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#0a0c10] pointer-events-none" />
      <div className="absolute inset-0 mix-blend-overlay bg-[radial-gradient(600px_circle_at_20%_10%,rgba(103,232,249,0.16),transparent),radial-gradient(700px_circle_at_80%_15%,rgba(251,191,36,0.12),transparent)]" />

      {/* Hazard stripe accent (very subtle) */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rotate-12 opacity-[0.07] [mask-image:radial-gradient(closest-side,black,transparent)]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fbbf24, #fbbf24 10px, transparent 10px, transparent 20px)' }} />

      {/* Parallax steel beams (foreground) */}
      <motion.div style={{ x: beamX1 }} className="pointer-events-none absolute -left-24 top-24 hidden md:block">
        <div className="h-1 w-[60vw] rotate-6 bg-gradient-to-r from-zinc-700/70 via-zinc-500/80 to-zinc-700/70 shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)]" />
      </motion.div>
      <motion.div style={{ x: beamX2 }} className="pointer-events-none absolute -right-28 bottom-28 hidden md:block">
        <div className="h-1.5 w-[55vw] -rotate-3 bg-gradient-to-r from-zinc-700/70 via-zinc-500/80 to-zinc-700/70 shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)]" />
      </motion.div>

      {/* Crane silhouette layer */}
      <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.28 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute inset-x-0 bottom-0 w-[140%] -ml-[20%] h-[40vh] text-zinc-600/30"
        viewBox="0 0 1200 300"
        preserveAspectRatio="xMidYMax slice"
      >
        <defs>
          <linearGradient id="crane" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.25" />
          </linearGradient>
        </defs>
        {/* Simple skyline + cranes */}
        <path d="M0 260 L1200 260 L1200 300 L0 300 Z" fill="url(#crane)" opacity="0.15" />
        <g stroke="url(#crane)" strokeWidth="2" fill="none" opacity="0.6">
          <path d="M80 260 L80 120 L200 120" />
          <path d="M200 120 L260 140 L200 140" />
          <path d="M500 260 L500 90 L700 90" />
          <path d="M700 90 L790 120 L700 120" />
          <path d="M950 260 L950 110 L1080 110" />
          <path d="M1080 110 L1150 140 L1080 140" />
        </g>
      </motion.svg>

      {/* Animated dust particles for industrial atmosphere */}
      <Particles />

      {/* Content (unchanged structure) */}
      <motion.div style={{ y, opacity, scale }} className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          className="uppercase tracking-[0.35em] text-xs md:text-sm text-zinc-300"
        >
          Precision • Innovation • Excellence
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease: 'easeOut' }}
          className="mt-5 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-white"
        >
          Building the Future with <span className="bg-gradient-to-tr from-amber-400 to-cyan-300 bg-clip-text text-transparent">Construction</span> Mastery
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9, ease: 'easeOut' }}
          className="mt-6 max-w-2xl text-zinc-300 text-base md:text-lg"
        >
          From groundbreaking to grand opening, we deliver structural integrity, architectural finesse, and schedule certainty.
        </motion.p>

        {/* Capability badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.8 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-3"
        >
          <Badge icon={<HardHat className="h-4 w-4" />} label="General Contracting" />
          <Badge icon={<Ruler className="h-4 w-4" />} label="Preconstruction & Estimating" />
          <Badge icon={<Building2 className="h-4 w-4" />} label="Commercial & Civic" />
          <Badge icon={<Hammer className="h-4 w-4" />} label="Self-Perform Crews" />
        </motion.div>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.95, duration: 0.8 }} className="mt-10 flex items-center gap-4">
          <a href="#projects" className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-white backdrop-blur-md transition hover:bg-white/15">
            <span className="font-semibold">Explore Projects</span>
            <span className="h-2 w-2 rounded-full bg-gradient-to-tr from-amber-400 to-cyan-300 shadow-[0_0_20px_2px_rgba(103,232,249,0.5)] group-hover:scale-110 transition-transform" />
          </a>
          <a href="#services" className="inline-flex items-center rounded-full px-6 py-3 text-zinc-200 hover:text-white transition">
            Our Services
          </a>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-zinc-400"
        >
          <div className="flex items-center gap-4 text-xs uppercase tracking-widest">
            <span className="text-zinc-300/90">Licensed</span>
            <span className="h-1 w-1 rounded-full bg-zinc-500/70" />
            <span className="text-zinc-300/90">Bonded</span>
            <span className="h-1 w-1 rounded-full bg-zinc-500/70" />
            <span className="text-zinc-300/90">Insured</span>
          </div>
          <div className="h-10 w-px mx-auto bg-gradient-to-b from-transparent via-zinc-500 to-transparent" />
          <span className="text-xs uppercase tracking-widest">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  )
}

function Badge({ icon, label }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-zinc-200 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
      <span className="text-cyan-200/90">{icon}</span>
      <span className="text-sm">{label}</span>
    </div>
  )
}

function Particles() {
  const dots = Array.from({ length: 36 })
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {dots.map((_, i) => {
        const size = Math.random() * 2 + 1
        const left = Math.random() * 100
        const top = Math.random() * 100
        const delay = Math.random() * 6
        const duration = 8 + Math.random() * 10
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.6, 0.2, 0.7, 0], y: [-8, 12, -6, 10, -8] }}
            transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute rounded-full bg-white"
            style={{ width: size, height: size, left: `${left}%`, top: `${top}%`, filter: 'blur(0.5px)', opacity: 0.15 }}
          />
        )
      })}
    </div>
  )
}
