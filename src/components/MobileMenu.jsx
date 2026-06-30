export default function MobileMenu({ open, onClose, navLinks }) {
  return (
    <div className={`mobile-menu${open ? ' open' : ''}`} id="mobileMenu">
      <button className="close" onClick={onClose} aria-label="Close menu">×</button>
      <nav onClick={onClose}>
        {navLinks.map(link => (
          <a key={link.href} href={link.href}>{link.label}</a>
        ))}
      </nav>
      <div className="mobile-menu-cta">
        <a href="tel:7039381942" className="btn btn-gold">Call (703) 938-1942</a>
        <a href="#repair" onClick={onClose} className="btn btn-outline">Request a Repair</a>
      </div>
    </div>
  );
}
