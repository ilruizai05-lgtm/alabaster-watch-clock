import { useState } from 'react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

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
        body: JSON.stringify(form)
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  const inputClass = "w-full font-sans text-sm bg-white border border-gold/25 rounded px-4 py-3 text-ink placeholder-ink/40 focus:outline-none focus:border-gold transition-colors";
  const labelClass = "block font-sans text-ink text-xs tracking-widest uppercase mb-2";

  return (
    <section id="repair" className="bg-navy py-20">
      <div className="max-w-2xl mx-auto px-5">
        <div className="text-center mb-12">
          <p className="font-sans text-gold text-xs tracking-widest uppercase mb-3">Get Started</p>
          <div className="w-8 h-px bg-gold/50 mx-auto mb-6" />
          <h2 className="font-serif text-cream text-4xl sm:text-5xl font-semibold mb-4">
            Request a <em className="italic text-gold">repair.</em>
          </h2>
          <p className="font-sans text-cream/60 text-sm leading-relaxed max-w-lg mx-auto">
            Tell us about your timepiece. We'll get back to you within one business day with next steps and an estimate. There's no obligation — quotes are always free.
          </p>
        </div>

        {status === 'success' ? (
          <div className="text-center bg-navy-light border border-gold/30 rounded-lg p-10">
            <div className="text-gold text-4xl mb-4">✓</div>
            <h3 className="font-serif text-cream text-2xl mb-3">Request Received</h3>
            <p className="font-sans text-cream/60 text-sm">Thank you! We'll be in touch within one business day.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-navy-light border border-gold/20 rounded-lg p-6 sm:p-10 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Name *</label>
                <input name="name" required value={form.name} onChange={handleChange} className={inputClass} placeholder="Your full name" />
              </div>
              <div>
                <label className={labelClass}>Phone *</label>
                <input name="phone" type="tel" required value={form.phone} onChange={handleChange} className={inputClass} placeholder="(555) 555-5555" />
              </div>
            </div>

            <div>
              <label className={labelClass}>Email *</label>
              <input name="email" type="email" required value={form.email} onChange={handleChange} className={inputClass} placeholder="your@email.com" />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Item Type *</label>
                <select name="itemType" required value={form.itemType} onChange={handleChange} className={inputClass}>
                  <option value="">Select type…</option>
                  <option>Wristwatch</option>
                  <option>Pocket Watch</option>
                  <option>Mantel / Wall Clock</option>
                  <option>Grandfather Clock</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Brand</label>
                <input name="brand" value={form.brand} onChange={handleChange} className={inputClass} placeholder="e.g. Rolex, Omega…" />
              </div>
            </div>

            <div>
              <label className={labelClass}>Describe the Issue *</label>
              <textarea
                name="issue" required value={form.issue} onChange={handleChange}
                className={`${inputClass} resize-none`} rows={4}
                placeholder="What's happening with your timepiece? Any relevant history?"
              />
            </div>

            {status === 'error' && (
              <p className="font-sans text-red-400 text-sm text-center">Something went wrong. Please try again or call us at (703) 938-1942.</p>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-gold text-navy font-sans font-semibold py-4 rounded hover:bg-gold-bright disabled:opacity-50 transition-colors duration-200"
            >
              {status === 'loading' ? 'Sending…' : 'Submit Repair Request'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
