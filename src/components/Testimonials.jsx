import { motion } from 'framer-motion'

const items = [
  { name: 'Elena Park — CivicWorks', text: 'They delivered a complex transit hub ahead of schedule with seamless coordination.' },
  { name: 'Rafael Mendes — Biotech Co.', text: 'Our research campus was built with precision and care. Exceptional communication.' },
  { name: 'Ava Thompson — UrbanDev', text: 'A partner we trust. Transparent, innovative, and relentless in quality.' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28">
      <div className="container mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="text-3xl md:text-5xl font-extrabold">What Partners Say</motion.h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, delay: i * 0.06 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 will-change-transform"
            >
              <p className="text-lg">“{t.text}”</p>
              <footer className="text-zinc-400 mt-4 text-sm">{t.name}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
