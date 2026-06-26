export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-navy border-t border-gold/20 md:hidden">
      <div className="grid grid-cols-2">
        <a
          href="tel:7039381942"
          className="flex items-center justify-center gap-2 py-4 text-cream font-sans text-sm font-medium border-r border-gold/20 hover:bg-navy-light transition-colors"
        >
          <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
          Call Now
        </a>
        <a
          href="#repair"
          className="flex items-center justify-center gap-2 py-4 bg-gold text-navy font-sans text-sm font-semibold hover:bg-gold-bright transition-colors"
        >
          Request Repair
        </a>
      </div>
    </div>
  );
}
