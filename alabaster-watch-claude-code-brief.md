# Alabaster Watch & Clock — Claude Code Brief

**Project:** Production website for John Alabaster Watch & Clock Shop  
**Client:** John Alabaster (Vienna, VA — master watchmaker since 1971)  
**Built by:** Lorena Ruiz / Full Bloom AI LLC  
**Stack:** Vite + React + Tailwind CSS, deployed on Cloudflare Pages  
**Repository:** `alabaster-watch-clock` (to be created on GitHub)  
**Domain:** alabasterwatchandclock.com (existing — DNS swap at launch)

---

## 🎯 Project Goals

Replace the dated Wix site (built 2018) with a modern, mobile-first, heritage-luxury website that:

1. Reflects John's 60+ years of expertise as a master watchmaker
2. Makes it easy for customers to request repairs and contact the shop
3. Showcases real Yelp reviews and the Washington Post feature
4. Works flawlessly on mobile, tablet, and desktop
5. Improves SEO and local search visibility

---

## 🎨 Design System

### Colors (Tailwind config)

```js
colors: {
  navy: {
    DEFAULT: '#0d1b2a',
    deep: '#060f1a',
    light: '#1b2a3e',
  },
  gold: {
    DEFAULT: '#c9a961',
    bright: '#e0bc6f',
    dark: '#8a6f35',
  },
  cream: {
    DEFAULT: '#f4ede0',
    soft: '#ebe2d0',
  },
  ink: '#1a1a1a',
}
```

### Typography

- **Display/Headlines:** Cormorant Garamond (Google Fonts) — weights 400, 500, 600, 700; italics 400, 500
- **Body/UI:** Inter (Google Fonts) — weights 300, 400, 500, 600

Add to `index.html` `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
```

In Tailwind config:
```js
fontFamily: {
  serif: ['"Cormorant Garamond"', 'Times New Roman', 'serif'],
  sans: ['Inter', 'system-ui', 'sans-serif'],
}
```

### Design Principles

- **Mobile-first** — every component designed for phone first, then enhanced for desktop
- **Heritage luxury aesthetic** — serifs, italic accents, gold dividers, generous whitespace
- **Italic gold accents** on key words in headlines (e.g., "Vienna's *master* watchmaker")
- **Decorative details** — dotted borders, thin gold lines, framed images
- **Sticky mobile CTA** — Call Now + Request Repair always visible at bottom on mobile

---

## 📁 Project Structure

```
alabaster-watch-clock/
├── public/
│   ├── favicon.svg
│   └── og-image.jpg
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── shop-interior.jpg
│   │   │   ├── watch-rolex-oyster.jpg
│   │   │   ├── watch-rolex-datejust.jpg
│   │   │   ├── watch-rolex-daydate.jpg
│   │   │   ├── john-alabaster.jpg  (TBD — placeholder until we get this)
│   │   │   └── logo.svg  (TBD — get from John, fallback to recreated SVG)
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── MobileMenu.jsx
│   │   ├── Hero.jsx
│   │   ├── TrustStrip.jsx
│   │   ├── BrandsServiced.jsx
│   │   ├── Services.jsx
│   │   ├── Story.jsx
│   │   ├── WorkGallery.jsx
│   │   ├── Reviews.jsx
│   │   ├── RepairForm.jsx
│   │   ├── Visit.jsx
│   │   ├── Footer.jsx
│   │   └── StickyMobileCTA.jsx
│   ├── data/
│   │   ├── services.js
│   │   ├── reviews.js
│   │   └── brands.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── vite.config.js
├── package.json
├── index.html
├── CLAUDE.md
└── README.md
```

---

## 🛠️ Build Sequence (Step by Step)

### Phase 1: Project Setup

```bash
npm create vite@latest alabaster-watch-clock -- --template react
cd alabaster-watch-clock
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**Tasks:**
1. Configure `tailwind.config.js` with the colors and fonts above
2. Add Tailwind directives to `src/index.css`
3. Add Google Fonts link to `index.html`
4. Update `index.html` `<title>` and meta description
5. Create folder structure as shown above
6. Initialize git, create GitHub repo, push initial commit
7. Connect repo to Cloudflare Pages, verify "Hello World" deploys

### Phase 2: Build Components (top to bottom)

Build each component in this order. Reference the prototype HTML for exact styling and content.

1. **Header.jsx + MobileMenu.jsx** — sticky navy header with gold-bordered logo, hamburger on mobile
2. **Hero.jsx** — full-height navy hero with "Vienna's *master* watchmaker" headline + 2 CTAs
3. **TrustStrip.jsx** — 4-stat strip (60+ years, 4.6★, 1971, 1yr warranty)
4. **BrandsServiced.jsx** — horizontal list with gold dot separators
5. **Services.jsx** — 3 cards (Watch Servicing, Clock Servicing, House Calls)
6. **Story.jsx** — shop interior photo + Washington Post pull quote
7. **WorkGallery.jsx** — 3 watch photos with hover zoom
8. **Reviews.jsx** — 6 Yelp reviews in cards with quote marks
9. **RepairForm.jsx** — Formspree-integrated form
10. **Visit.jsx** — 3 cards: location, hours, contact
11. **Footer.jsx** — clean navy footer
12. **StickyMobileCTA.jsx** — fixed bottom bar (mobile only)

### Phase 3: Form Integration

1. Sign up for Formspree (free tier supports 50 submissions/month)
2. Create a new form, get the form endpoint URL
3. Update `RepairForm.jsx` with the endpoint
4. Add success/error message handling
5. Test submission from your phone

**Form fields:**
- Name (required)
- Phone (required)
- Email (required)
- Item type — dropdown: Wristwatch, Pocket Watch, Mantel/Wall Clock, Grandfather Clock, Other
- Brand (optional)
- Issue description (required, textarea)

### Phase 4: SEO & Polish

1. Add favicon (use the logo)
2. Add Open Graph meta tags for social sharing
3. Add LocalBusiness JSON-LD schema (see below)
4. Add `alt` text to all images
5. Compress all images with TinyPNG before deploy
6. Test on real devices (your iPhone, a laptop)
7. Run Lighthouse audit, aim for 90+ scores

### Phase 5: Domain Switch (Launch Day)

1. Get final approval from John
2. In domain registrar (likely GoDaddy or wherever Wix domain is), update DNS to point to Cloudflare
3. In Cloudflare Pages, add custom domain `alabasterwatchandclock.com` and `www.alabasterwatchandclock.com`
4. Wait for DNS propagation (usually 15 min – 2 hours)
5. Verify site is live at the real domain
6. Cancel Wix subscription (saves John ~$200+/year)
7. Send John the launch confirmation

---

## 📝 Content (Copy & Paste Ready)

### Site Metadata

```
Title: John Alabaster Watch & Clock — Master Watchmaker, Vienna VA
Description: Vienna's master watchmaker since 1971. Servicing fine watches and clocks 
with 60+ years of expertise.
```

### Top Bar
```
★ Master Watchmaker Since 1971 · Vienna, Virginia ★
```

### Hero
- **Eyebrow:** Established 1971
- **Headline:** Vienna's *master* watchmaker.
- **Subhead:** Sixty years of expertise. Trusted by collectors and families across Northern Virginia for the most demanding repairs and restorations.
- **CTA 1:** Request a Repair (links to #repair)
- **CTA 2:** Call (703) 938-1942 (tel: link)

### Trust Strip (4 stats)
- 60+ Years Experience
- 4.6★ Yelp Rated
- 1971 Family Owned
- 1 yr Service Warranty

### Brands Serviced
Rolex · Omega · Breitling · Tag Heuer · Cartier · Vacheron

### Services (3 cards)

**1. Watch Servicing**  
Complete overhaul, movement repair, gasket replacement, water resistance restoration, and crystal replacement. Genuine parts only.

**2. Clock Servicing**  
Mantel clocks, wall clocks, and grandfather clocks. Cleaning, oiling, regulation, and full restoration of antique movements.

**3. House Calls**  
Grandfather clocks deserve white-glove service. We come to your home for setup, regulation, and on-site servicing of large timepieces.

### Story Section

- **Eyebrow:** Our Story
- **Headline:** A legacy of *precision.*
- **Body paragraph 1:** Founded in 1971, John Alabaster Watch & Clock has been Northern Virginia's most trusted destination for fine timepiece servicing for over five decades.
- **Body paragraph 2:** With decades of dedication to the craft, John brings world-class expertise to every piece that crosses his bench — from family heirlooms to contemporary luxury watches.
- **Pull quote:** "A master craftsman dedicated to the disappearing art of mechanical watchmaking." — Featured in the Washington Post

### Work Gallery (3 captions)
- Vintage Rolex Oyster · Restored
- Rolex Datejust · Full Service
- Rolex Day-Date · Restored

### Reviews Section Header
- **Eyebrow:** What Our Customers Say
- **Headline:** Trusted by *collectors* & families.
- **Yelp badge:** 4.6 on Yelp · 103 reviews

### Reviews Data (6 reviews)

```js
export const reviews = [
  {
    name: "Mitesh V.",
    source: "Yelp",
    text: "I would give this shop 10 stars if I could! Brought in a vintage Rolex Datejust. They used genuine parts, performed a thorough cleaning, replaced all the gaskets — now my 1987 timepiece is water resistant again. Other shops would charge double or triple."
  },
  {
    name: "Marshall L.",
    source: "Yelp",
    text: "Inherited a watch from the 60s that was damaged and kept in its box for 40 years. They not only fixed my watch (replaced the balance), but also did typical maintenance like cleaning and replacing the crystal. Really happy with their work!"
  },
  {
    name: "Dara",
    source: "Yelp",
    text: "This place is absolutely unreal and amazing!!!!!! I took in a Bell & Ross watch that at least 10 watch repair shops — extremely high end boutiques — wouldn't touch."
  },
  {
    name: "Priya L.",
    source: "Yelp",
    text: "This is a small, local business with integrity that I have been going to for years. Every time I have been, every one is very kind, attentive, and helpful. They don't try to cheat or scam you, and I always appreciate the quick service and their expertise. Def recommend them for any repairs, including luxe watches."
  },
  {
    name: "Ronni E.",
    source: "Yelp Elite '26",
    text: "So glad I found these guys online, based on the excellent reviews. The crown and stem broke off of my Raymond Weil. Pleasantly surprised, they quoted me $50 — would have been double anywhere else."
  },
  {
    name: "Michael Jay U.",
    source: "Yelp",
    text: "Amazing service. Got my '01 Omega Seamaster James Bond Golden Eye edition serviced. The value was exceptional for the high quality work they did. Definitely saved a lot of money going through this family-owned and operated business. Personable and friendly."
  }
];
```

### Repair Form Section
- **Eyebrow:** Get Started
- **Headline:** Request a *repair*.
- **Intro:** Tell us about your timepiece. We'll get back to you within one business day with next steps and an estimate. There's no obligation — quotes are always free.
- **Submit button:** Submit Repair Request

### Visit Section
- **Eyebrow:** Find Us
- **Headline:** Visit the *shop.*
- **Intro:** Walk-ins welcome during business hours. Free in-shop estimates with no appointment needed.

**Card 1 — Location:**
301A Maple Avenue West  
Vienna, VA 22180  
(link to Google Maps)

**Card 2 — Hours:**
- Sun – Mon: Closed
- Tue – Fri: 10:00 AM – 5:00 PM
- Saturday: 9:00 AM – 2:00 PM

**Card 3 — Contact:**
(703) 938-1942 (tel: link)  
Accepts credit cards & Apple Pay

### Footer
- **Logo line:** John Alabaster Watch & Clock
- **Tagline:** Established 1971 · Vienna, Virginia
- **Address:** 301A Maple Avenue West, Vienna, VA 22180
- **Phone:** (703) 938-1942
- **Copyright:** © 2026 John Alabaster Watch & Clock · All Rights Reserved

---

## 🔗 Links & External References

- **Phone (tel: link):** `tel:7039381942`
- **Google Maps (address):** `https://maps.google.com/?q=301A+Maple+Ave+W,+Vienna,+VA+22180`
- **Repair form anchor:** `#repair`
- **Formspree (set up during build):** TBD — endpoint URL goes in `RepairForm.jsx`

---

## 🔍 SEO: LocalBusiness Schema

Add this JSON-LD inside the `<head>` of `index.html`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "John Alabaster Watch & Clock",
  "image": "https://alabasterwatchandclock.com/og-image.jpg",
  "telephone": "+17039381942",
  "email": "TBD@alabasterwatchandclock.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "301A Maple Avenue West",
    "addressLocality": "Vienna",
    "addressRegion": "VA",
    "postalCode": "22180",
    "addressCountry": "US"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "10:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "14:00"
    }
  ],
  "priceRange": "$$",
  "url": "https://alabasterwatchandclock.com",
  "founder": "John Alabaster",
  "foundingDate": "1971",
  "description": "Vienna's master watchmaker since 1971. Servicing fine watches and clocks with 60+ years of expertise."
}
</script>
```

---

## 🖼️ Image Assets

All source images are in `/mnt/user-data/uploads/` from the planning conversation. Optimize before adding to project:

| Original File | Final Filename | Use | Target Size |
|---|---|---|---|
| Facetune_06-05-2026-19-01-07.jpeg | shop-interior.jpg | Story section | 1400px wide, ~150KB |
| IMG_1879.png | watch-rolex-oyster.jpg | Work gallery | 800px wide, ~80KB |
| IMG_1878.png | watch-rolex-datejust.jpg | Work gallery | 800px wide, ~80KB |
| IMG_1877.png | watch-rolex-daydate.jpg | Work gallery | 800px wide, ~80KB |
| IMG_1869.png | (logo reference only) | Recreate as SVG | N/A |

**Image optimization workflow:**
1. Resize using TinyPNG (free), Squoosh.app, or ImageOptim
2. Convert PNGs to JPGs (smaller file size for photos)
3. Add WebP versions if time allows for better performance
4. Always include descriptive `alt` text

---

## 📦 Items Still Needed from Client

Track these and add as they come in:

- [ ] **Logo file** (SVG preferred, PNG fallback) — currently using receipt photo as reference
- [ ] **Photo of John Alabaster** — for Story section, increases trust significantly
- [ ] **Email address** for repair form submissions (e.g., john@alabasterwatchandclock.com)
- [ ] **Washington Post article** (full text or scan) — for richer Story section
- [ ] **Personal quote from John** about his craft — for Hero or Story
- [ ] **Additional shop photos** — exterior, workbench, tools, etc.

---

## ✅ Pre-Launch Checklist

Before swapping DNS to make the site live:

- [ ] All content reviewed for typos by Lorena AND John
- [ ] All images optimized (under 200KB each)
- [ ] All `alt` text added to images
- [ ] Phone number is `tel:` clickable link everywhere
- [ ] Address is Google Maps clickable link everywhere
- [ ] Form tested with real submission to John's email
- [ ] Mobile menu opens and closes properly
- [ ] Sticky mobile CTA visible only on mobile
- [ ] Lighthouse score: Performance 90+, Accessibility 95+, SEO 100
- [ ] Tested on iPhone Safari, Android Chrome, Mac Safari, Windows Chrome
- [ ] Favicon shows up in browser tab
- [ ] Open Graph image shows up when link is shared on iMessage/Slack
- [ ] LocalBusiness schema validates at schema.org validator
- [ ] John has approved the live preview URL

---

## 🚀 Post-Launch Tasks

- [ ] Submit site to Google Search Console
- [ ] Update Yelp business listing with new website URL
- [ ] Update Google Business Profile with new website URL
- [ ] Cancel Wix subscription
- [ ] Set up monthly check-in with John for content updates
- [ ] Document the maintenance handoff (CLAUDE.md in repo)

---

## 💼 CLAUDE.md File (for the project repo)

Create this in the root of the new repo so future Claude sessions have context:

```markdown
# Alabaster Watch & Clock — Project Context

## About
Production website for John Alabaster, master watchmaker in Vienna, VA, 
operating since 1971. Built by Full Bloom AI LLC.

## Stack
- Vite + React + Tailwind CSS
- Deployed on Cloudflare Pages via GitHub
- Form backend: Formspree
- Domain: alabasterwatchandclock.com

## Design System
- Colors: navy (#0d1b2a), gold (#c9a961), cream (#f4ede0)
- Fonts: Cormorant Garamond (serif/display), Inter (sans/body)
- Mobile-first responsive design
- Heritage luxury aesthetic

## Key Files
- src/components/* — all UI components
- src/data/reviews.js — Yelp review content
- tailwind.config.js — design tokens

## Deployment
- Push to main branch → Cloudflare Pages auto-deploys
- Preview deployments on every PR

## Content Updates
For copy changes, edit components directly. For reviews updates, edit 
src/data/reviews.js. For pricing or hours, find the relevant component 
and update the static content.
```

---

## 📞 Project Contacts

- **Builder:** Lorena Ruiz, Full Bloom AI LLC
- **Email:** lorenaruiz@fullbloomai.com
- **Client:** John Alabaster
- **Client Phone:** (703) 938-1942
- **Client Address:** 301A Maple Avenue West, Vienna, VA 22180

---

*End of Brief — Last updated May 2026*
