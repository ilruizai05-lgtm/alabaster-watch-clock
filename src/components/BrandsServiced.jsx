const brands = ["Rolex", "Omega", "Breitling", "Tag Heuer", "Cartier", "Vacheron"];

export default function BrandsServiced() {
  return (
    <section className="bg-cream-soft py-10 border-b border-gold/20">
      <div className="max-w-6xl mx-auto px-5 text-center">
        <p className="font-sans text-ink/50 text-xs tracking-widest uppercase mb-6">Brands Serviced</p>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-0">
          {brands.map((brand, i) => (
            <span key={i} className="flex items-center">
              <span className="font-serif text-ink text-lg sm:text-xl font-medium">{brand}</span>
              {i < brands.length - 1 && (
                <span className="mx-3 sm:mx-5 text-gold text-sm">·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
