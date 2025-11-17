import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    title: 'Parametric HQ',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2069&auto=format&fit=crop',
    description: 'A future-forward headquarters integrating adaptive facades and daylight optimization.'
  },
  {
    title: 'Urban Transit Hub',
    image: 'https://images.unsplash.com/photo-1487956382158-bb926046304a?q=80&w=1974&auto=format&fit=crop',
    description: 'Multimodal interchange with smart flows and modular retail pods.'
  },
  {
    title: 'Research Campus',
    image: 'https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?q=80&w=2070&auto=format&fit=crop',
    description: 'Lab-ready structures with resilient systems and human-centric courtyards.'
  },
]

function Card({ p, index }) {
  return (
    <motion.div
      whileHover={{ y: -4, rotateX: 1.5 }}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 will-change-transform"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={`${p.image}&sat=-15`}
          alt={p.title}
          className="h-full w-full object-cover scale-[1.02] blur-[2px] opacity-80 transition-all duration-700 group-hover:blur-0 group-hover:opacity-100"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0" style={{ pointerEvents: 'none', background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(103,232,249,0.12), transparent 40%)' }} />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-white text-xl font-semibold">{p.title}</h3>
        <p className="text-zinc-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity">{p.description}</p>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [40, -30])

  return (
    <section id="projects" ref={ref} className="relative bg-[#0a0c10] text-white py-28">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(103,232,249,0.08),transparent_40%)]" />
      </div>
      <div className="container mx-auto px-6">
        <motion.h2 style={{ y }} className="text-3xl md:text-5xl font-extrabold">Featured Projects</motion.h2>
        <p className="text-zinc-300 mt-4 max-w-2xl">A curated selection of work that demonstrates our technical rigor and design clarity.</p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Card key={p.title} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
