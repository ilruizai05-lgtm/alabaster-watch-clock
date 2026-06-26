export default function Hero() {
  return (
    <section className="bg-navy min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gold rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 py-24 text-center">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-12 bg-gold/50" />
          <span className="font-sans text-gold text-xs tracking-[0.2em] uppercase">Established 1971</span>
          <div className="h-px w-12 bg-gold/50" />
        </div>

        {/* Main headline */}
        <h1 className="font-serif text-cream text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-tight mb-6">
          Vienna's{' '}
          <em className="text-gold not-italic italic">master</em>{' '}
          watchmaker.
        </h1>

        {/* Subhead */}
        <p className="font-sans text-cream/70 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10">
          Sixty years of expertise. Trusted by collectors and families across Northern Virginia for the most demanding repairs and restorations.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#repair"
            className="bg-gold text-navy font-sans font-semibold px-8 py-4 rounded hover:bg-gold-bright transition-colors duration-200 text-base"
          >
            Request a Repair
          </a>
          <a
            href="tel:7039381942"
            className="border border-gold/60 text-gold font-sans font-medium px-8 py-4 rounded hover:border-gold hover:text-gold-bright transition-colors duration-200 text-base"
          >
            Call (703) 938-1942
          </a>
        </div>
      </div>
    </section>
  );
}
