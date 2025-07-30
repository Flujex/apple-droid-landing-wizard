import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TrustBarSection from '@/components/TrustBarSection';
import ValueStackSection from '@/components/ValueStackSection';
import ProductSection from '@/components/ProductSection';
import ServicesSection from '@/components/ServicesSection';
import DifferentialsSection from '@/components/DifferentialsSection';
import PersonalWordSection from '@/components/PersonalWordSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AccessoriesSection from '@/components/AccessoriesSection';
import FAQSection from '@/components/FAQSection';
import FinalCTASection from '@/components/FinalCTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <TrustBarSection />
      <ValueStackSection />
      <ProductSection />
      <ServicesSection />
      <DifferentialsSection />
      <PersonalWordSection />
      <TestimonialsSection />
      <AccessoriesSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
