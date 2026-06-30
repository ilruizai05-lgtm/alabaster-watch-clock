import { reviews } from '../data/reviews';

export default function Reviews() {
  return (
    <section className="reviews-section" id="reviews">
      <div className="container">
        <div className="reviews-header">
          <div className="section-eyebrow">What Our Customers Say</div>
          <h2 className="section-title">Trusted by <em>collectors</em> &amp; families.</h2>
          <div className="yelp-rating">
            <span className="stars">★ ★ ★ ★ ½</span>
            <span className="score">4.8</span>
            <span className="meta">on Google · 103 reviews</span>
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <div className="review-card" key={i}>
              <div className="review-stars">★ ★ ★ ★ ★</div>
              <p className="review-text">{r.text}</p>
              <div className="review-author">{r.name} <span>· {r.source}</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
