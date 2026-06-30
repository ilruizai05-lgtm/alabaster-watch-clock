const stats = [
  { num: '60+', label: 'Years Experience' },
  { num: '4.8★', label: 'Google Rated' },
  { num: '1971', label: 'Family Owned' },
  { num: '1 yr', label: 'Service Warranty' },
];

export default function TrustStrip() {
  return (
    <div className="trust-strip">
      <div className="trust-grid">
        {stats.map((s, i) => (
          <div className="trust-item" key={i}>
            <span className="num">{s.num}</span>
            <span className="label">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
