import Header from './components/Header';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import BrandsServiced from './components/BrandsServiced';
import Services from './components/Services';
import Story from './components/Story';
import WorkGallery from './components/WorkGallery';
import Reviews from './components/Reviews';
import RepairForm from './components/RepairForm';
import Visit from './components/Visit';
import Footer from './components/Footer';
import StickyMobileCTA from './components/StickyMobileCTA';

export default function App() {
  return (
    <>
      <Header />
      <main className="pb-16 md:pb-0">
        <Hero />
        <TrustStrip />
        <BrandsServiced />
        <Services />
        <Story />
        <WorkGallery />
        <Reviews />
        <RepairForm />
        <Visit />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
