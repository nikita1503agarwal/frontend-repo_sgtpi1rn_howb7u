import { lazy, Suspense, useEffect, useMemo, useState } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { Hammer, Ruler, Building2, HardHat } from 'lucide-react'

// Lazy-load the heavy 3D Spline scene and render it only when idle on larger screens
const LazySpline = lazy(() => import('@splinetool/react-spline'))

export default function Hero() {
  const prefersReduced = useReducedMotion()
  const { scrollY } = useScroll()

  // Lighter transforms and ranges to reduce GPU workload
  const y = useTransform(scrollY, [0, 600], [0, -60])
  const opacity = useTransform(scrollY, [0, 400], [1, 0.78])
  const scale = useTransform(scrollY, [0, 600], [1, 1.03])

  // Foreground parallax beams
  const beamX1 = useTransform(scrollY, [0, 600], [0, -32])
  const beamX2 = useTransform(scrollY, [0, 600], [0, 40])
  // Slow zoom for background photo (narrowed range)
  const bgScale = useTransform(scrollY, [0, 800], [1.02, 1.08])

  // Only show Spline on medium+ screens, when user hasn't requested reduced motion, and when browser is idle
  const [enableSpline, setEnableSpline] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const update = () => setIsDesktop(mq.matches)
    update()
    mq.addEventListener?.('change', update)
    return () => mq.removeEventListener?.('change', update)
  }, [])

  useEffect(() => {
    if (prefersReduced || !isDesktop) return
    const idle = (window.requestIdleCallback || window.requestAnimationFrame)
    const id = idle(() => setEnableSpline(true))
    return () => {
      if ('cancelIdleCallback' in window) {
        // @ts-ignore
        window.cancelIdleCallback(id)
      }
    }
  }, [prefersReduced, isDesktop])

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-[#0a0c10]">
      {/* Construction background photography layer (parallax + slow zoom) */}
      <motion.div
        aria-hidden
        style={{ scale: bgScale }}
        className="absolute inset-0 bg-cover bg-center opacity-[0.2] will-change-transform"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1400&auto=format&fit=crop')",
            backgroundSize: 'cover',
          }}
        />
      </motion.div>

      {/* Subtle 3D Spline layer (lazy, desktop-only, idle) */}
      {enableSpline && (
        <div className="absolute inset-0 opacity-[0.16] mix-blend-screen pointer-events-none will-change-transform">
          <Suspense fallback={null}>
            <LazySpline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </Suspense>
        </div>
      )}

      {/* Blueprint grid overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.07] [background-size:32px_32px] [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]" />
        <div className="absolute inset-0 opacity-[0.05] [background-size:128px_128px] [background-image:linear-gradient(to_right,rgba(103,232,249,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(251,191,36,0.12)_1px,transparent_1px)]" />
      </div>

      {/* Atmospheric gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#0a0c10] pointer-events-none" />
      <div className="absolute inset-0 mix-blend-overlay bg-[radial-gradient(600px_circle_at_20%_10%,rgba(103,232,249,0.14),transparent),radial-gradient(700px_circle_at_80%_15%,rgba(251,191,36,0.1),transparent)]" />

      {/* Hazard stripe accent (very subtle) */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rotate-12 opacity-[0.06] [mask-image:radial-gradient(closest-side,black,transparent)]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fbbf24, #fbbf24 10px, transparent 10px, transparent 20px)' }} />

      {/* Parallax steel beams (foreground) */}
      <motion.div style={{ x: beamX1 }} className="pointer-events-none absolute -left-24 top-24 hidden md:block will-change-transform">
        <div className="h-1 w-[60vw] rotate-6 bg-gradient-to-r from-zinc-700/70 via-zinc-500/80 to-zinc-700/70 shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)]" />
      </motion.div>
      <motion.div style={{ x: beamX2 }} className="pointer-events-none absolute -right-28 bottom-28 hidden md:block will-change-transform">
        <div className="h-1.5 w-[55vw] -rotate-3 bg-gradient-to-r from-zinc-700/70 via-zinc-500/80 to-zinc-700/70 shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)]" />
      </motion.div>

      {/* Crane silhouette layer */}
      <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.24 }}
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

      {/* Animated dust particles for industrial atmosphere (fewer, disabled on reduced motion) */}
      {!prefersReduced && <Particles count={14} />}

      {/* Content */}
      <motion.div style={{ y, opacity, scale }} className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 will-change-transform pb-28 sm:pb-0">
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
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.95, duration: 0.8 }} className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none">
          <a href="#projects" className="group inline-flex justify-center items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-white backdrop-blur-md transition hover:bg-white/15 w-full sm:w-auto">
            <span className="font-semibold">Explore Projects</span>
            <span className="h-2 w-2 rounded-full bg-gradient-to-tr from-amber-400 to-cyan-300 shadow-[0_0_20px_2px_rgba(103,232,249,0.5)] group-hover:scale-110 transition-transform" />
          </a>
          <a href="#services" className="inline-flex justify-center items-center rounded-full px-6 py-3 text-zinc-200 hover:text-white transition w-full sm:w-auto">
            Our Services
          </a>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-zinc-400 pointer-events-none"
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

function Particles({ count = 14 }) {
  // Precompute particle static positions once for stability and less layout work
  const seeds = useMemo(() => Array.from({ length: count }, (_, i) => ({
    size: 1 + ((i * 7) % 3),
    left: ((i * 37) % 100),
    top: ((i * 53) % 100),
    delay: (i * 0.37) % 6,
    duration: 8 + ((i * 1.3) % 8),
  })), [count])

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {seeds.map((p, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0.2, 0.6, 0], y: [-6, 10, -5, 8, -6] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute rounded-full bg-white will-change-transform"
          style={{ width: p.size, height: p.size, left: `${p.left}%`, top: `${p.top}%`, filter: 'blur(0.5px)', opacity: 0.14 }}
        />
      ))}
    </div>
  )
}
