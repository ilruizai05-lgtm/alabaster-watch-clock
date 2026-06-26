export default function Footer() {
  return (
    <footer className="bg-navy-deep border-t border-gold/15 py-12">
      <div className="max-w-6xl mx-auto px-5 text-center">
        <div className="mb-6">
          <span className="font-serif text-gold text-2xl font-semibold">John Alabaster Watch & Clock</span>
          <p className="font-sans text-cream/40 text-xs tracking-widest uppercase mt-1">
            Established 1971 · Vienna, Virginia
          </p>
        </div>
        <div className="w-16 h-px bg-gold/30 mx-auto mb-6" />
        <p className="font-sans text-cream/50 text-sm mb-1">
          <a href="https://maps.google.com/?q=301A+Maple+Ave+W,+Vienna,+VA+22180" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
            301A Maple Avenue West, Vienna, VA 22180
          </a>
        </p>
        <p className="font-sans text-cream/50 text-sm mb-8">
          <a href="tel:7039381942" className="hover:text-gold transition-colors">(703) 938-1942</a>
        </p>
        <p className="font-sans text-cream/25 text-xs">
          © 2026 John Alabaster Watch & Clock · All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
