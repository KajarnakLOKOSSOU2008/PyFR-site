import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      {/* French flag accent line */}
      <div className="h-1 flex">
        <div className="flex-1 bg-[#002395]" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-[#ED2939]" />
      </div>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-3xl">🐍</span>
            <span className="text-2xl font-bold">
              <span className="text-[#002395]">Py</span>
              <span className="text-[#ED2939]">FR</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <NavLink href="/">Accueil</NavLink>
            <NavLink href="/documentation">Documentation</NavLink>
            <NavLink href="/formation">Formation</NavLink>
            <NavLink href="/communaute">Communauté</NavLink>
            <NavLink href="/telechargement">Télécharger</NavLink>
          </div>

          {/* CTA + Mobile menu */}
          <div className="flex items-center gap-3">
            <Link
              href="/telechargement"
              className="hidden sm:inline-flex items-center gap-2 bg-[#1a56db] hover:bg-[#1e40af] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              Installer PyFR
            </Link>
            <a
              href="https://github.com/KajarnakLOKOSSOU2008/PyFR"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-800 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>

            {/* Mobile hamburger */}
            <MobileMenu />
          </div>
        </div>
      </nav>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-[#1a56db] hover:bg-blue-50 transition-colors"
    >
      {children}
    </Link>
  );
}

function MobileMenu() {
  return (
    <div className="md:hidden relative group">
      <button className="p-2 text-slate-600 hover:text-slate-900">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl border border-slate-200 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="p-2 space-y-1">
          <MobileLink href="/">Accueil</MobileLink>
          <MobileLink href="/documentation">Documentation</MobileLink>
          <MobileLink href="/formation">Formation</MobileLink>
          <MobileLink href="/communaute">Communauté</MobileLink>
          <MobileLink href="/telechargement">Télécharger</MobileLink>
        </div>
      </div>
    </div>
  );
}

function MobileLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block px-4 py-2 text-sm text-slate-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
    >
      {children}
    </Link>
  );
}
