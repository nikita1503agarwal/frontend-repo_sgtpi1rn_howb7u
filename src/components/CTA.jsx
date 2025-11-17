import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.985 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-amber-400/10 via-cyan-300/10 to-transparent p-10 will-change-transform"
        >
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="relative">
            <motion.h3 initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.05, duration: 0.9 }} className="text-3xl md:text-5xl font-extrabold">Let’s build with intent.</motion.h3>
            <motion.p initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.12, duration: 0.9 }} className="mt-3 max-w-2xl text-zinc-300">Tell us about your goals, constraints, and timeline. We will craft a plan grounded in precision and clarity.</motion.p>
            <motion.a
              href="mailto:hello@cr8.click"
              whileHover={{ scale: 1.02, boxShadow: '0 10px 35px rgba(251,191,36,0.35)' }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-tr from-amber-400 to-cyan-300 text-black font-semibold px-6 py-3"
              aria-label="Request a proposal by emailing hello at cr8 dot click"
            >
              Request a Proposal
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
