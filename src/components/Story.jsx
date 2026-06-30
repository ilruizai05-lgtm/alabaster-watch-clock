import shopInterior from '../assets/images/shop-interior.jpg';

export default function Story() {
  return (
    <section className="story-section" id="story">
      <div className="container">
        <div className="story-grid">
          <div className="story-image">
            <img src={shopInterior} alt="Inside John Alabaster Watch and Clock Shop in Vienna, VA" />
          </div>
          <div className="story-text">
            <div className="section-eyebrow">Our Story</div>
            <h2 className="section-title">A legacy of <em>precision.</em></h2>
            <p>Founded in 1971, John Alabaster Watch &amp; Clock has been Northern Virginia's most trusted destination for fine timepiece servicing for over five decades.</p>
            <p>With decades of dedication to the craft, John brings world-class expertise to every piece that crosses his bench — from family heirlooms to contemporary luxury watches.</p>
            <div className="washington-post">
              "A master craftsman dedicated to the disappearing art of mechanical watchmaking."
              <small>— Featured in the Washington Post</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
