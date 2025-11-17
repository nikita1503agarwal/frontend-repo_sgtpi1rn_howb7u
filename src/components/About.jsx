import { motion } from 'framer-motion'

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section id="about" className="relative bg-[#0a0c10] text-white py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(251,191,36,0.06),transparent_40%)]" />
        <div className="absolute inset-y-0 left-0 right-0 opacity-[0.06]" style={{ backgroundSize: '40px 40px', backgroundImage: 'linear-gradient(to right, #fff1 1px, transparent 1px), linear-gradient(to bottom, #fff1 1px, transparent 1px)' }} />
      </div>

      <div className="container mx-auto px-6">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid md:grid-cols-12 gap-10 items-center">
          <motion.div variants={item} className="md:col-span-5">
            <div className="h-[420px] rounded-xl overflow-hidden relative shadow-2xl">
              <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1974&auto=format&fit=crop" alt="Precision Construction" className="h-full w-full object-cover scale-[1.02]" />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} className="absolute -bottom-6 -right-6 h-40 w-40 border border-white/20 rounded-xl backdrop-blur-md bg-white/5" />
            </div>
          </motion.div>
          <motion.div variants={item} className="md:col-span-7">
            <motion.h2 variants={item} className="text-3xl md:text-5xl font-extrabold">About Us</motion.h2>
            <motion.p variants={item} className="mt-6 text-zinc-300 leading-relaxed">
              We are a construction company driven by craft and guided by data. From flagship headquarters to complex industrial facilities, we deliver with the precision of engineering and the clarity of design. Our teams thrive at the intersection of technology and real-world execution.
            </motion.p>
            <motion.div variants={item} className="mt-8 grid sm:grid-cols-3 gap-6">
              {[
                ['On-Time Delivery', '98% of projects delivered on schedule'],
                ['Safety First', '1M+ hours with world-class safety metrics'],
                ['Sustainable', 'LEED-focused methodologies and materials'],
              ].map(([title, caption]) => (
                <div key={title} className="p-5 rounded-xl bg-white/5 border border-white/10">
                  <p className="bg-gradient-to-tr from-amber-400 to-cyan-300 bg-clip-text text-transparent font-semibold">{title}</p>
                  <p className="text-sm text-zinc-300 mt-2">{caption}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
