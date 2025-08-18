import HeroSection from '@/components/HeroSection';
import PopularProductsSection from '@/components/PopularProductsSection';
import TrustSection from '@/components/TrustSection';
import LocationSection from '@/components/LocationSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PopularProductsSection />
      <TrustSection />
      <LocationSection />
    </div>
  );
};

export default Index;
