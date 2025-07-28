import { Button } from '@/components/ui/button';
import { Star, Users, Shield } from 'lucide-react';
import { useWhatsApp } from '@/hooks/useWhatsApp';
import heroStore from '@/assets/hero-store.jpg';

const HeroSection = () => {
  const { links } = useWhatsApp();

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={heroStore} 
          alt="Loja AppleDroidGV em Governador Valadares" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 mt-16">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            <span className="block text-primary-foreground">Seu dispositivo é essencial.</span>
            <span className="block text-2xl md:text-3xl font-normal mt-2 text-primary-foreground/90">
              Não o entregue a um curioso.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/80 animate-fade-in">
            Confie em quem é especialista. Há 12 anos, a segurança que você procura no coração de Governador Valadares.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-scale-in">
            <Button 
              variant="hero" 
              size="xl" 
              asChild
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <a href={links.general} target="_blank" rel="noopener noreferrer">
                Agendar Diagnóstico Gratuito
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              asChild
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <a href="#servicos">
                Ver Nossos Serviços
              </a>
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 animate-fade-in">
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-primary-foreground/80" />
              <span className="text-primary-foreground/80">
                Especialistas Certificados
              </span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-primary-foreground/80 ml-1">4.9/5 avaliação</span>
            </div>

            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-primary-foreground/80" />
              <span className="text-primary-foreground/80">
                100% Originais
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;