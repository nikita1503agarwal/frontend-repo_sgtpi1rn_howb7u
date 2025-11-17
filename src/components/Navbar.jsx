import { motion, useScroll } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#values', label: 'Values' },
  { href: '#legacy', label: 'Legacy' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const { scrollYProgress } = useScroll()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <motion.div
        className={`mx-auto mt-3 w-[92%] max-w-6xl rounded-2xl px-5 py-3 flex items-center justify-between transition backdrop-blur-md border ${scrolled ? 'bg-white/[0.06] border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.25)]' : 'bg-white/[0.03] border-white/10'}`}
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22,1,0.36,1] }}
      >
        <a href="#" className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-gradient-to-tr from-amber-400 to-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.35)]" />
          <span className="font-semibold tracking-wide">Constructa</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
          {links.map(l => (
            <a key={l.href} href={l.href} className="hover:text-white transition">{l.label}</a>
          ))}
        </nav>
        <button className="md:hidden text-zinc-300" aria-label="Menu"><Menu size={20} /></button>
      </motion.div>
      <motion.div className="h-[2px] w-full bg-gradient-to-r from-amber-400 via-cyan-300 to-transparent" style={{ scaleX: scrollYProgress, transformOrigin: '0% 50%' }} />
    </div>
  )
}
