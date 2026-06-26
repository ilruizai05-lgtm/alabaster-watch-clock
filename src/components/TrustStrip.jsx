const stats = [
  { value: "60+", label: "Years Experience" },
  { value: "4.6★", label: "Yelp Rated" },
  { value: "1971", label: "Family Owned" },
  { value: "1 yr", label: "Service Warranty" },
];

export default function TrustStrip() {
  return (
    <section className="bg-navy-light border-y border-gold/20">
      <div className="max-w-6xl mx-auto px-5 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <div className="font-serif text-gold text-3xl sm:text-4xl font-semibold mb-1">{stat.value}</div>
            <div className="font-sans text-cream/60 text-xs tracking-widest uppercase">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
