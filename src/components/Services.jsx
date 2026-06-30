export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="container reveal">
        <div className="section-eyebrow">What We Do</div>
        <h2 className="section-title">Craftsmanship for <em>every timepiece.</em></h2>
        <p className="section-intro">
          From a vintage heirloom to a modern Swiss masterpiece, every watch and clock receives the same meticulous care.
        </p>

        <div className="services-grid">
          <div className="service-card">
            <div className="icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
                <circle cx="12" cy="12" r="1" fill="currentColor" />
              </svg>
            </div>
            <h3>Watch Servicing</h3>
            <p>Complete overhaul, movement repair, gasket replacement, water resistance restoration, and crystal replacement. Genuine parts only.</p>
          </div>

          <div className="service-card">
            <div className="icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="6" y="3" width="12" height="18" rx="1" />
                <circle cx="12" cy="9" r="3" />
                <path d="M12 14v4" />
              </svg>
            </div>
            <h3>Clock Servicing</h3>
            <p>Mantel clocks, wall clocks, and grandfather clocks. Cleaning, oiling, regulation, and full restoration of antique movements.</p>
          </div>

          <div className="service-card">
            <div className="icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 9l9-6 9 6v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <path d="M9 22V12h6v10" />
              </svg>
            </div>
            <h3>House Calls</h3>
            <p>Grandfather clocks deserve white-glove service. We come to your home for setup, regulation, and on-site servicing of large timepieces.</p>
          </div>

          <div className="service-card">
            <div className="icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 8v4l3 3" />
                <path d="M3.6 9h1.8M18.6 9h1.8M12 3.6v1.8M12 18.6v1.8" />
              </svg>
            </div>
            <h3>Pre-Owned Watches</h3>
            <p>Browse our curated selection of pre-owned timepieces. Every watch is inspected and serviced in-house before sale, so you buy with confidence.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
