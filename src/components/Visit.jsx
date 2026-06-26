export default function Visit() {
  const hours = [
    { days: "Sun – Mon", time: "Closed" },
    { days: "Tue – Fri", time: "10:00 AM – 5:00 PM" },
    { days: "Saturday", time: "9:00 AM – 2:00 PM" },
  ];

  return (
    <section id="visit" className="bg-cream-soft py-20">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-14">
          <p className="font-sans text-gold text-xs tracking-widest uppercase mb-3">Find Us</p>
          <div className="gold-line" />
          <h2 className="font-serif text-ink text-4xl sm:text-5xl font-semibold mb-4">
            Visit the <em className="italic text-gold-dark">shop.</em>
          </h2>
          <p className="font-sans text-ink/60 text-sm">
            Walk-ins welcome during business hours. Free in-shop estimates with no appointment needed.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Location */}
          <div className="bg-white border border-gold/20 rounded-lg p-8 text-center hover:shadow-md hover:shadow-gold/10 transition-all">
            <div className="text-gold mb-5 flex justify-center">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <h3 className="font-serif text-ink text-xl font-semibold mb-4">Location</h3>
            <div className="w-6 h-px bg-gold/40 mx-auto mb-4" />
            <a
              href="https://maps.google.com/?q=301A+Maple+Ave+W,+Vienna,+VA+22180"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-ink/70 text-sm leading-relaxed hover:text-gold transition-colors"
            >
              301A Maple Avenue West<br />
              Vienna, VA 22180
            </a>
          </div>

          {/* Hours */}
          <div className="bg-white border border-gold/20 rounded-lg p-8 text-center hover:shadow-md hover:shadow-gold/10 transition-all">
            <div className="text-gold mb-5 flex justify-center">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" strokeWidth={1.5}/>
                <path strokeLinecap="round" strokeWidth={1.5} d="M12 7v5l3 3"/>
              </svg>
            </div>
            <h3 className="font-serif text-ink text-xl font-semibold mb-4">Hours</h3>
            <div className="w-6 h-px bg-gold/40 mx-auto mb-4" />
            <div className="space-y-2">
              {hours.map((h, i) => (
                <div key={i} className="flex justify-between font-sans text-sm">
                  <span className="text-ink/60">{h.days}</span>
                  <span className={h.time === 'Closed' ? 'text-ink/40' : 'text-ink font-medium'}>{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white border border-gold/20 rounded-lg p-8 text-center hover:shadow-md hover:shadow-gold/10 transition-all">
            <div className="text-gold mb-5 flex justify-center">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            </div>
            <h3 className="font-serif text-ink text-xl font-semibold mb-4">Contact</h3>
            <div className="w-6 h-px bg-gold/40 mx-auto mb-4" />
            <a href="tel:7039381942" className="block font-sans text-gold text-lg font-semibold hover:text-gold-bright transition-colors mb-3">
              (703) 938-1942
            </a>
            <p className="font-sans text-ink/50 text-xs">Accepts credit cards & Apple Pay</p>
          </div>
        </div>
      </div>
    </section>
  );
}
