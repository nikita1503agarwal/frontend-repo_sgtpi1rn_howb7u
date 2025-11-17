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
            <div className="text-zinc-400">contact@yourcompany.com</div>
            <div className="text-zinc-400 mt-1">+1 (555) 123-4567</div>
            <div className="text-zinc-400 mt-1">123 Industry Ave, Suite 500</div>
          </div>
          <div className="flex md:justify-end">
            <a href="#" className="inline-flex items-center justify-center rounded-full bg-gradient-to-tr from-amber-400 to-cyan-300 text-black font-semibold px-6 py-3 shadow-[0_10px_30px_rgba(103,232,249,0.35)] hover:shadow-[0_14px_40px_rgba(103,232,249,0.55)] transition-shadow">
              Request a Proposal
            </a>
          </div>
        </div>
        <div className="mt-12 text-sm text-zinc-500">© {new Date().getFullYear()} Your Company. All rights reserved.</div>
      </div>
    </footer>
  )
}
