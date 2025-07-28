import { Button } from '@/components/ui/button';
import { MessageCircle, Phone } from 'lucide-react';
import { useWhatsApp } from '@/hooks/useWhatsApp';

const FinalCTASection = () => {
  const { links, phoneNumber } = useWhatsApp();

  const trustMetrics = [
    { value: "12", label: "Anos de experiência" },
    { value: "5.000+", label: "Clientes satisfeitos" },
    { value: "100%", label: "Produtos originais" }
  ];

  return (
    <section className="section-padding bg-gradient-hero" role="banner">
      <div className="container mx-auto container-spacing text-center">
        <div className="max-w-4xl mx-auto text-primary-foreground">
          {/* Main CTA Text */}
          <header className="mb-12">
            <h2 className="text-primary-foreground mb-6">
              Recupere sua tranquilidade digital agora
            </h2>
            
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              Chega de estresse com tecnologia. Nossos especialistas estão prontos para 
              devolver sua paz de espírito com a segurança e transparência que você merece.
            </p>
          </header>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button 
              variant="hero" 
              size="xl" 
              asChild
              className="bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp-hover animate-bounce-gentle shadow-green gap-2"
            >
              <a 
                href={links.final} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Chamar no WhatsApp da AppleDroidGV para comprar iPhone"
              >
                <MessageCircle className="w-6 h-6" aria-hidden="true" />
                Recuperar Minha Tranquilidade
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="xl" 
              asChild
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary gap-2"
            >
              <a 
                href={`tel:+${phoneNumber}`}
                aria-label={`Ligar para AppleDroidGV no número ${phoneNumber}`}
              >
                <Phone className="w-6 h-6" aria-hidden="true" />
                (33) 99988-7766
              </a>
            </Button>
          </div>

          {/* Trust Elements */}
          <div className="grid sm:grid-cols-3 gap-8 text-center" role="list">
            {trustMetrics.map((metric, index) => (
              <div key={index} role="listitem">
                <p className="text-2xl font-bold mb-2" aria-label={`${metric.value} ${metric.label}`}>
                  {metric.value}
                </p>
                <p className="text-primary-foreground/80">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;