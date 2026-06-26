import { useState, useEffect } from 'react';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Our Story', href: '#story' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Visit', href: '#visit' },
  ];

  return (
    <>
      {/* Top bar */}
      <div className="bg-navy-deep text-cream text-xs tracking-widest py-2 text-center uppercase">
        ★ Master Watchmaker Since 1971 · Vienna, Virginia ★
      </div>

      {/* Main header */}
      <header className={`sticky top-0 z-50 bg-navy transition-shadow duration-300 ${scrolled ? 'shadow-lg shadow-black/40' : ''}`}>
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex flex-col leading-tight">
            <span className="font-serif text-gold text-xl font-semibold tracking-wide">John Alabaster</span>
            <span className="font-sans text-cream/70 text-xs tracking-widest uppercase">Watch & Clock</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-cream/80 text-sm tracking-wide hover:text-gold transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#repair"
            className="hidden md:inline-block bg-gold text-navy font-sans font-semibold text-sm px-5 py-2.5 rounded hover:bg-gold-bright transition-colors duration-200"
          >
            Request a Repair
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-cream p-2"
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} navLinks={navLinks} />
    </>
  );
}
