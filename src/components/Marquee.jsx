import { motion } from 'framer-motion'

const brands = ['Turner', 'Skanska', 'AECOM', 'Arup', 'Thornton Tomasetti', 'Bechtel', 'HDR']

export default function Marquee() {
  return (
    <div className="relative py-12 overflow-hidden">
      <motion.div initial={{ x: 0 }} animate={{ x: ['0%', '-50%'] }} transition={{ repeat: Infinity, duration: 30, ease: 'linear' }} className="flex gap-12 whitespace-nowrap">
        {[...brands, ...brands].map((b, i) => (
          <span key={i} className="text-zinc-400/80">{b}</span>
        ))}
      </motion.div>
    </div>
  )
}
