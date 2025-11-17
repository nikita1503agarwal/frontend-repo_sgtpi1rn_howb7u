import { motion } from 'framer-motion'

const brands = ['Turner', 'Skanska', 'AECOM', 'Arup', 'Thornton Tomasetti', 'Bechtel', 'HDR']

export default function Marquee() {
  return (
    <div className="relative py-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
        className="flex gap-12 whitespace-nowrap will-change-transform"
      >
        {[...brands, ...brands].map((b, i) => (
          <span key={i} className="text-zinc-400/80">{b}</span>
        ))}
      </motion.div>
    </div>
  )
}
