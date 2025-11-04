import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-cyan-400 to-fuchsia-500" />
            <span className="text-white font-semibold tracking-wide">Senula Rohanaweera</span>
          </a>

        <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-zinc-300 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="h-5 w-px bg-white/10" />
            <a
              href="mailto:senularohanaweera@example.com"
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/90 hover:bg-white/10 transition"
            >
              <Mail size={16} /> Contact
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10 py-3">
            <div className="flex flex-col gap-2 py-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-zinc-300 hover:text-white transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-300 hover:text-white"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-300 hover:text-white"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:senularohanaweera@example.com"
                  className="text-zinc-300 hover:text-white"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
