export default function Visit() {
  return (
    <section className="visit-section" id="visit">
      <div className="container">
        <div className="section-eyebrow">Find Us</div>
        <h2 className="section-title">Visit the <em>shop.</em></h2>
        <p className="section-intro">
          Walk-ins welcome during business hours. Free in-shop estimates with no appointment needed.
        </p>

        <div className="visit-grid">
          <div className="visit-card">
            <h3>
              <span className="icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              Location
            </h3>
            <p>
              <a href="https://maps.google.com/?q=301A+Maple+Ave+W,+Vienna,+VA+22180" target="_blank" rel="noopener noreferrer">
                301A Maple Avenue West<br />
                Vienna, VA 22180
              </a>
            </p>
          </div>

          <div className="visit-card">
            <h3>
              <span className="icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
              </span>
              Hours
            </h3>
            <ul className="hours-list">
              <li><span className="day">Sun – Mon</span><span>Closed</span></li>
              <li><span className="day">Tue – Fri</span><span>10:00 AM – 5:00 PM</span></li>
              <li><span className="day">Saturday</span><span>9:00 AM – 2:00 PM</span></li>
            </ul>
          </div>

          <div className="visit-card">
            <h3>
              <span className="icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </span>
              Contact
            </h3>
            <p>
              <a href="tel:7039381942"><strong>(703) 938-1942</strong></a><br />
              <span style={{ fontSize: '13px', letterSpacing: '0.05em' }}>Accepts credit cards &amp; Apple Pay</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
