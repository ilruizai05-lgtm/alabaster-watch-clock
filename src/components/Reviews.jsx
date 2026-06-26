import { reviews } from '../data/reviews';

export default function Reviews() {
  return (
    <section id="reviews" className="bg-cream py-20">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-14">
          <p className="font-sans text-gold text-xs tracking-widest uppercase mb-3">What Our Customers Say</p>
          <div className="gold-line" />
          <h2 className="font-serif text-ink text-4xl sm:text-5xl font-semibold mb-5">
            Trusted by <em className="italic text-gold-dark">collectors</em> & families.
          </h2>
          <div className="inline-flex items-center gap-2 bg-white border border-gold/20 rounded-full px-5 py-2 shadow-sm">
            <span className="text-gold text-sm">★★★★★</span>
            <span className="font-sans text-ink text-sm font-medium">4.6 on Yelp</span>
            <span className="text-ink/30">·</span>
            <span className="font-sans text-ink/60 text-sm">103 reviews</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white border border-gold/20 rounded-lg p-6 shadow-sm hover:shadow-md hover:shadow-gold/10 transition-all duration-300 flex flex-col">
              <div className="text-gold text-3xl font-serif leading-none mb-4">"</div>
              <p className="font-sans text-ink/70 text-sm leading-relaxed flex-1 mb-6">{review.text}</p>
              <div className="border-t border-gold/15 pt-4 flex items-center justify-between">
                <div>
                  <p className="font-sans text-ink font-semibold text-sm">{review.name}</p>
                  <p className="font-sans text-gold text-xs tracking-wide">{review.source}</p>
                </div>
                <div className="text-gold text-xs">★★★★★</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
