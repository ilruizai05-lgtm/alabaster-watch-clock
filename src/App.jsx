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
import About from './components/About';
import Footer from './components/Footer';
import StickyMobileCTA from './components/StickyMobileCTA';
import BackToTop from './components/BackToTop';
import useReveal from './hooks/useReveal';

export default function App() {
  useReveal();

  return (
    <>
      <Header />
      <Hero />
      <TrustStrip />
      <BrandsServiced />
      <Services />
      <Story />
      <WorkGallery />
      <Reviews />
      <RepairForm />
      <Visit />
      <About />
      <Footer />
      <StickyMobileCTA />
      <BackToTop />
    </>
  );
}
