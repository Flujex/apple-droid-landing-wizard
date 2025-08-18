import { Button } from '@/components/ui/button';
import { useWhatsApp } from '@/hooks/useWhatsApp';
import { MessageCircle } from 'lucide-react';
import heroStore from '@/assets/hero-store.jpg';

const HeroSection = () => {
  const { links } = useWhatsApp();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background with hero image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroStore} 
          alt="Loja AppleDroidGV em Governador Valadares" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/80 to-accent/20" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        <div className="space-y-8 animate-fade-in">
          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Seu iPhone ou Xiaomi está no{' '}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              coração de Valadares
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Produtos novos, seminovos e acessórios com a confiança que você já conhece. 
            <span className="text-primary font-semibold"> Evite frete e espera.</span>
          </p>
          
          {/* Primary CTA Button */}
          <div className="pt-6">
            <Button
              size="xl"
              variant="whatsapp"
              className="animate-pulse-green text-lg md:text-xl px-8 py-4 md:px-12 md:py-6 gap-3 font-bold shadow-cta hover:shadow-elegant transform hover:scale-105 transition-all duration-300"
              onClick={() => window.open(links.general, '_blank')}
            >
              <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
              Fale Conosco no WhatsApp Agora
            </Button>
          </div>
          
          {/* Trust indicator */}
          <div className="pt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-4 h-4 bg-accent rounded-full" />
              ))}
            </div>
            <span>12 anos no coração de Valadares</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;