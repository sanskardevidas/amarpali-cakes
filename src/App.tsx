import { Hero } from './components/Hero';
import { SignatureCakes } from './components/SignatureCakes';
import { CakeCategories } from './components/CakeCategories';
import { CustomCake } from './components/CustomCake';
import { SpecialOffers } from './components/SpecialOffers';
import { CakeGallery } from './components/CakeGallery';
import { CustomerReviews } from './components/CustomerReviews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-soft-cream">
      <Hero />
      <SignatureCakes />
      <CakeCategories />
      <CustomCake />
      <SpecialOffers />
      <CakeGallery />
      <CustomerReviews />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;