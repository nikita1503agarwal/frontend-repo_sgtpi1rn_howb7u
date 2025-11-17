import { useReducedMotion } from 'framer-motion'

const brands = ['Turner', 'Skanska', 'AECOM', 'Arup', 'Thornton Tomasetti', 'Bechtel', 'HDR']

export default function Marquee() {
  const prefersReduced = useReducedMotion()
  return (
    <div className="relative py-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      {/* Keyframes for CSS-driven marquee to avoid JS on main thread */}
      <style>{`
        @keyframes marqueeX { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
      <div
        className="flex gap-12 whitespace-nowrap will-change-transform"
        style={{
          animation: prefersReduced ? 'none' : 'marqueeX 40s linear infinite',
        }}
        aria-hidden
      >
        {[...brands, ...brands].map((b, i) => (
          <span key={i} className="text-zinc-400/80">
            {b}
          </span>
        ))}
      </div>
    </div>
  )
}
