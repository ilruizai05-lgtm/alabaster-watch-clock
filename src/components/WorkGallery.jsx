import rolexOyster from '../assets/images/watch-rolex-oyster.jpg';
import rolexDatejust from '../assets/images/watch-rolex-datejust.jpg';
import rolexDaydate from '../assets/images/watch-rolex-daydate.jpg';

const work = [
  { img: rolexOyster, alt: 'Vintage Rolex Oyster Shock-Resisting', caption: 'Vintage Rolex Oyster · Restored' },
  { img: rolexDatejust, alt: 'Rolex Datejust Two-Tone', caption: 'Rolex Datejust · Full Service' },
  { img: rolexDaydate, alt: 'Rolex Day-Date Gold', caption: 'Rolex Day-Date · Restored' },
];

export default function WorkGallery() {
  return (
    <section className="work-section">
      <div className="container reveal">
        <div className="section-eyebrow">Recent Work</div>
        <h2 className="section-title">Restored to <em>original glory.</em></h2>
        <div className="work-grid">
          {work.map((w, i) => (
            <div className="work-item" key={i}>
              <img src={w.img} alt={w.alt} loading="lazy" decoding="async" />
              <div className="caption">{w.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
