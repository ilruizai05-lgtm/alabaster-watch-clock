import { useState } from 'react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xaqgdgpz';

export default function RepairForm() {
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [form, setForm] = useState({
    name: '', phone: '', email: '', itemType: '', brand: '', issue: ''
  });

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="form-section" id="repair">
      <div className="container form-wrap">
        <div className="section-eyebrow">Get Started</div>
        <h2 className="section-title">Request a <em>repair</em>.</h2>
        <p className="section-intro">
          Tell us about your timepiece. We'll get back to you within one business day with next steps and an estimate. There's no obligation — quotes are always free.
        </p>

        {status === 'success' ? (
          <div className="form-success">
            <div className="check">✓</div>
            <h3>Request Received</h3>
            <p>Thank you! We'll be in touch within one business day.</p>
          </div>
        ) : (
          <form className="form-grid" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required />
              </div>
              <div className="form-field">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} required />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="item-type">What needs servicing?</label>
                <select id="item-type" name="itemType" value={form.itemType} onChange={handleChange} required>
                  <option value="">Select one...</option>
                  <option>Wristwatch</option>
                  <option>Pocket Watch</option>
                  <option>Mantel/Wall Clock</option>
                  <option>Grandfather Clock</option>
                  <option>Other timepiece</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="brand">Brand (if known)</label>
                <input type="text" id="brand" name="brand" value={form.brand} onChange={handleChange} placeholder="e.g., Rolex, Omega..." />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="issue">What's the issue?</label>
              <textarea id="issue" name="issue" value={form.issue} onChange={handleChange} placeholder="Describe what's wrong, when it started, and any history you know about the piece..." required></textarea>
            </div>

            {status === 'error' && (
              <p className="form-status error">Something went wrong. Please try again or call us at (703) 938-1942.</p>
            )}

            <button type="submit" className="btn btn-gold" disabled={status === 'loading'}>
              {status === 'loading' ? 'Sending…' : 'Submit Repair Request'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
