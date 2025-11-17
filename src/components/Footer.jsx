export default function Footer() {
  return (
    <footer className="bg-[#0a0c10] text-white py-16 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <h3 className="text-xl font-semibold">Start Your Project</h3>
            <p className="text-zinc-300 mt-2">Let’s build something enduring together. Share your goals and constraints—we’ll design the solution.</p>
          </div>
          <div>
            <div className="text-zinc-400">
              <a href="mailto:hello@cr8.click" className="hover:text-white transition" aria-label="Email hello at cr8 dot click">hello@cr8.click</a>
            </div>
            <div className="text-zinc-400 mt-1">
              <a href="tel:+213770877173" className="hover:text-white transition" aria-label="Call plus two one three seven seven zero eight seven seven one seven three">+213 770 877 173</a>
            </div>
            <div className="text-zinc-400 mt-1">Djelfa, Algeria</div>
          </div>
          <div className="flex md:justify-end">
            <a
              href="mailto:hello@cr8.click"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-tr from-amber-400 to-cyan-300 text-black font-semibold px-6 py-3 shadow-[0_10px_30px_rgba(103,232,249,0.35)] hover:shadow-[0_14px_40px_rgba(103,232,249,0.55)] transition-shadow"
              aria-label="Request a proposal by email"
            >
              Request a Proposal
            </a>
          </div>
        </div>
        <div className="mt-12 text-sm text-zinc-500">© 2025 cr8.click, All rights reserved.</div>
      </div>
    </footer>
  )
}
