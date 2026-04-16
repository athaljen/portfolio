export default function PortfolioFooter() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-[var(--bg)] py-5">
      <div className="safe-container flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-white">Bisworanjan Jena</h3>
          {/* <p className="text-sm text-[var(--gray)] mt-1">
            Software Development Engineer • React Native • Next.js • Node.js
          </p> */}
        </div>

        {/* Middle - Links */}
        <div className="flex gap-6 text-sm text-[var(--gray)]">
          <a href="#about" className="hover:text-[var(--primary)] transition">
            About
          </a>
          <a href="#skills" className="hover:text-[var(--primary)] transition">
            Skills
          </a>
          <a
            href="#projects"
            className="hover:text-[var(--primary)] transition"
          >
            Projects
          </a>
          <a href="#contact" className="hover:text-[var(--primary)] transition">
            Contact
          </a>
        </div>

        {/* Right */}
        <div className="text-center md:text-right text-sm text-[var(--gray)]">
          <p>© {new Date().getFullYear()} All rights reserved</p>
          {/* <p className="mt-1">Built with Next.js & Tailwind CSS</p> */}
        </div>
      </div>
    </footer>
  )
}
