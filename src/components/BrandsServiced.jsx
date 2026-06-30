const brands = ['Rolex', 'Omega', 'Breitling', 'Tag Heuer', 'Cartier', 'Vacheron', '& many more.'];

export default function BrandsServiced() {
  return (
    <section className="brands-section">
      <div className="brands-label">Watches We Service</div>
      <div className="brands-grid">
        {brands.map((b, i) => (
          <span className="brand-name" key={i}>{b}</span>
        ))}
      </div>
    </section>
  );
}
