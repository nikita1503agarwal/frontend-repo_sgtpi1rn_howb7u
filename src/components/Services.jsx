import { motion } from 'framer-motion'
import { Building2, Wrench, Scan, TreePine, HardHat, Package } from 'lucide-react'

const items = [
  { icon: Building2, title: 'Design & Build', text: 'End-to-end delivery from concept to handover with single-point accountability.' },
  { icon: Wrench, title: 'General Contracting', text: 'Disciplined execution, budget integrity, and schedule control.' },
  { icon: Scan, title: 'BIM & Digital Twins', text: 'Clash detection, 4D sequencing, and real-time coordination.' },
  { icon: TreePine, title: 'Sustainable Systems', text: 'LEED strategies, lifecycle cost optimization, and reusability.' },
  { icon: HardHat, title: 'Safety Management', text: 'Zero-harm mindset backed by training and auditing.' },
  { icon: Package, title: 'Prefabrication', text: 'Offsite manufacturing for speed, quality, and reduced waste.' },
]

export default function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,211,238,0.09),transparent_45%)]" />
      </div>
      <div className="container mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-3xl md:text-5xl font-extrabold">Services</motion.h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div key={it.title} initial={{ opacity: 0, y: 18, rotateX: -8 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22,1,0.36,1] }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-cyan-300/10 border border-cyan-300/30 text-cyan-200 flex items-center justify-center">
                  <it.icon />
                </div>
                <h3 className="text-lg font-semibold">{it.title}</h3>
              </div>
              <p className="text-zinc-300 mt-3">{it.text}</p>
              <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.3 }} className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(400px circle at var(--x,50%) var(--y,50%), rgba(34,211,238,0.12), transparent 40%)' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
