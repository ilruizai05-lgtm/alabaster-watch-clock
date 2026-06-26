import rolex1 from '../assets/images/watch-rolex-oyster.jpg';
import rolex2 from '../assets/images/watch-rolex-datejust.jpg';
import rolex3 from '../assets/images/watch-rolex-daydate.jpg';

const watches = [
  { img: rolex1, caption: "Vintage Rolex Oyster", sub: "Restored" },
  { img: rolex2, caption: "Rolex Datejust", sub: "Full Service" },
  { img: rolex3, caption: "Rolex Day-Date", sub: "Restored" },
];

export default function WorkGallery() {
  return (
    <section className="bg-cream-soft py-20">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-14">
          <p className="font-sans text-gold text-xs tracking-widest uppercase mb-3">Recent Work</p>
          <div className="gold-line" />
          <h2 className="font-serif text-ink text-4xl sm:text-5xl font-semibold">
            Restored to <em className="italic text-gold-dark">original glory.</em>
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {watches.map((watch, i) => (
            <div key={i} className="group relative overflow-hidden rounded-lg border border-gold/20 bg-white shadow-sm hover:shadow-lg hover:shadow-gold/10 transition-all duration-300">
              <div className="overflow-hidden aspect-square">
                <img
                  src={watch.img}
                  alt={`${watch.caption} — ${watch.sub}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 text-center">
                <p className="font-serif text-ink text-xl font-semibold">{watch.caption}</p>
                <p className="font-sans text-gold text-xs tracking-widest uppercase mt-1">{watch.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
