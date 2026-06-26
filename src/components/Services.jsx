import { services } from '../data/services';

const icons = {
  "Watch Servicing": (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="7" strokeWidth="1.5"/>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l2.5 2.5M8.5 3.5h7M8.5 20.5h7"/>
    </svg>
  ),
  "Clock Servicing": (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="5" y="2" width="14" height="20" rx="2" strokeWidth="1.5"/>
      <circle cx="12" cy="13" r="4" strokeWidth="1.5"/>
      <path strokeLinecap="round" strokeWidth="1.5" d="M12 11v2l1.5 1.5M9 6h6"/>
    </svg>
  ),
  "House Calls": (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
    </svg>
  )
};

export default function Services() {
  return (
    <section id="services" className="bg-cream py-20">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-14">
          <p className="font-sans text-gold text-xs tracking-widest uppercase mb-3">What We Do</p>
          <div className="gold-line" />
          <h2 className="font-serif text-ink text-4xl sm:text-5xl font-semibold">
            Expert <em className="italic text-gold-dark">care</em> for every timepiece.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="bg-white border border-gold/20 rounded-lg p-8 text-center hover:shadow-lg hover:shadow-gold/10 transition-all duration-300">
              <div className="text-gold mb-5 flex justify-center">{icons[service.title]}</div>
              <h3 className="font-serif text-ink text-2xl font-semibold mb-4">{service.title}</h3>
              <div className="w-8 h-px bg-gold/50 mx-auto mb-4" />
              <p className="font-sans text-ink/70 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
