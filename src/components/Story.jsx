import shopInterior from '../assets/images/shop-interior.jpg';

export default function Story() {
  return (
    <section id="story" className="bg-navy py-20">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="border border-gold/30 rounded-lg overflow-hidden">
              <img
                src={shopInterior}
                alt="John Alabaster Watch & Clock shop interior"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/20 rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="font-sans text-gold text-xs tracking-widest uppercase mb-3">Our Story</p>
            <div className="w-8 h-px bg-gold/50 mb-6" />
            <h2 className="font-serif text-cream text-4xl sm:text-5xl font-semibold leading-tight mb-6">
              A legacy of <em className="italic text-gold">precision.</em>
            </h2>
            <p className="font-sans text-cream/70 text-sm leading-relaxed mb-4">
              Founded in 1971, John Alabaster Watch & Clock has been Northern Virginia's most trusted destination for fine timepiece servicing for over five decades.
            </p>
            <p className="font-sans text-cream/70 text-sm leading-relaxed mb-10">
              With decades of dedication to the craft, John brings world-class expertise to every piece that crosses his bench — from family heirlooms to contemporary luxury watches.
            </p>

            {/* Pull quote */}
            <blockquote className="border-l-2 border-gold pl-6">
              <p className="font-serif text-cream/90 text-xl italic leading-relaxed mb-3">
                "A master craftsman dedicated to the disappearing art of mechanical watchmaking."
              </p>
              <cite className="font-sans text-gold text-xs tracking-widest uppercase not-italic">
                — Featured in the Washington Post
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
