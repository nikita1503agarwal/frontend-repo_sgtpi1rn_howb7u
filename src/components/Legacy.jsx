import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Legacy() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 40])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.9])

  return (
    <section id="legacy" ref={ref} className="relative bg-[#0a0c10] text-white py-28 overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold">Our Legacy</h2>
        <p className="text-zinc-300 mt-4 max-w-2xl">A timeline of craft, growth, and enduring partnerships.</p>
      </div>

      <div className="relative mt-14">
        <motion.div style={{ y: y1, opacity }} className="absolute inset-x-0 top-0 h-[320px] bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity" />
        <motion.div style={{ y: y2 }} className="relative z-10">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { year: '1998', text: 'Founded with a commitment to disciplined delivery.' },
                { year: '2008', text: 'Expanded into large-scale industrial and civic projects.' },
                { year: '2018', text: 'Adopted BIM and prefabrication across our portfolio.' },
              ].map((item) => (
                <motion.div key={item.year} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-6">
                  <div className="bg-gradient-to-tr from-cyan-300 to-amber-400 bg-clip-text text-transparent font-semibold tracking-wide">{item.year}</div>
                  <div className="text-zinc-300 mt-2">{item.text}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
