import { motion } from 'framer-motion'

const stats = [
  { k: 'Projects Delivered', v: '240+' },
  { k: 'On-time Rate', v: '98%' },
  { k: 'Safety Hours', v: '1M+' },
  { k: 'LEED Projects', v: '60+' },
]

export default function Stats() {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, delay: i * 0.06 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center will-change-transform"
            >
              <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-tr from-amber-400 to-cyan-300 bg-clip-text text-transparent">{s.v}</div>
              <div className="text-zinc-300 mt-1 text-sm">{s.k}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
