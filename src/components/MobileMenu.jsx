import { useEffect } from 'react';

export default function MobileMenu({ open, onClose, navLinks }) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 transition-opacity duration-300 md:hidden ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-navy z-50 shadow-2xl transition-transform duration-300 md:hidden ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-10">
            <span className="font-serif text-gold text-lg">Menu</span>
            <button onClick={onClose} className="text-cream/70 hover:text-cream" aria-label="Close menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-6 mb-10">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="font-sans text-cream text-lg tracking-wide hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="border-t border-cream/10 pt-6 flex flex-col gap-3">
            <a href="#repair" onClick={onClose} className="block bg-gold text-navy text-center font-sans font-semibold py-3 rounded">
              Request a Repair
            </a>
            <a href="tel:7039381942" className="block border border-gold/40 text-gold text-center font-sans py-3 rounded">
              (703) 938-1942
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
