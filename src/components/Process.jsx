import { motion } from 'framer-motion'

const steps = [
  { t: '01 — Discovery', d: 'We align on goals, constraints, and key outcomes.' },
  { t: '02 — Planning', d: 'Rigorous scheduling, budget modeling, and risk mapping.' },
  { t: '03 — Execution', d: 'Phase-based delivery with continuous QA/QC.' },
  { t: '04 — Handover', d: 'Commissioning, documentation, and knowledge transfer.' },
]

export default function Process() {
  return (
    <section className="relative py-28">
      <div className="container mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-3xl md:text-5xl font-extrabold">Process</motion.h2>
        <div className="mt-10 relative">
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-300 via-amber-400 to-transparent" />
          <div className="space-y-8">
            {steps.map((s, i) => (
              <motion.div key={s.t} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: i * 0.1 }} className="pl-10">
                <div className="h-3 w-3 rounded-full bg-gradient-to-tr from-cyan-300 to-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.5)]" />
                <h3 className="mt-2 font-semibold">{s.t}</h3>
                <p className="text-zinc-300">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
