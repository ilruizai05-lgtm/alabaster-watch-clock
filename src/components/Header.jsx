import { useState } from 'react';
import MobileMenu from './MobileMenu';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Our Story', href: '#story' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Repair Request', href: '#repair' },
  { label: 'Visit', href: '#visit' },
  { label: 'About', href: '#about' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="topbar">
        <span className="gold">★</span>&nbsp; Master Watchmaker Since 1971 &nbsp;
        <span className="gold">·</span>&nbsp; Vienna, Virginia &nbsp;
        <span className="gold">★</span>
      </div>

      <header>
        <div className="nav-wrap">
          <a href="#top" className="brand">
            <div className="brand-logo">
              <svg viewBox="0 0 24 24" fill="none" stroke="#c9a961" strokeWidth="1.5">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
            </div>
            <div className="brand-text">
              John Alabaster
              <small>Watch &amp; Clock</small>
            </div>
          </a>

          <nav className="nav-desktop">
            {navLinks.map(link => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
          </nav>

          <button className="hamburger" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} navLinks={navLinks} />
    </>
  );
}
