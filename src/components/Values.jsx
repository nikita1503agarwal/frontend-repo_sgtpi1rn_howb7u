import { motion } from 'framer-motion'
import { Shield, Clock, Factory, Ruler, Leaf, Zap } from 'lucide-react'

const values = [
  { icon: Shield, title: 'Safety', text: 'Zero-compromise safety culture across every site.' },
  { icon: Ruler, title: 'Precision', text: 'Meticulous planning and execution to millimeter detail.' },
  { icon: Factory, title: 'Capability', text: 'Complex delivery across sectors with robust systems.' },
  { icon: Leaf, title: 'Sustainability', text: 'Materials and methods that respect the future.' },
  { icon: Clock, title: 'Reliability', text: 'Accountable schedules with transparent reporting.' },
  { icon: Zap, title: 'Innovation', text: 'Digital twins, BIM, and prefabrication for speed and quality.' },
]

export default function Values() {
  return (
    <section id="values" className="relative bg-[#0a0c10] text-white py-28">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold">Our Values</h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.06, duration: 0.9 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 will-change-transform"
            >
              <motion.div
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.4, ease: 'easeInOut' }}
                className="absolute inset-0 opacity-10"
              >
                <svg width="100%" height="100%">
                  <rect x="8" y="8" width="calc(100%-16)" height="calc(100%-16)" rx="16" ry="16" fill="none" stroke="url(#g)" strokeWidth="1" />
                  <defs>
                    <linearGradient id="g" x1="0" x2="1">
                      <stop offset="0%" stopColor="#67e8f9" />
                      <stop offset="100%" stopColor="#fbbf24" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
              <div className="flex items-center gap-4">
                <motion.div initial={{ scale: 0.95, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="h-12 w-12 rounded-xl bg-gradient-to-tr from-cyan-300/15 to-amber-400/15 border border-white/10 flex items-center justify-center text-cyan-200">
                  <Icon />
                </motion.div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="text-zinc-300 mt-3">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
