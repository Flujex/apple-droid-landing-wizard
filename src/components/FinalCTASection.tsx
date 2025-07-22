import { Button } from '@/components/ui/button';
import { MessageCircle, Phone } from 'lucide-react';

const FinalCTASection = () => {
  const whatsappFinal = "https://wa.me/5533999887766?text=Olá! Estou pronto para ter meu iPhone original. Podem me ajudar?";

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto text-primary-foreground">
          {/* Main CTA Text */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Pronto para ter seu iPhone original?
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
            Fale conosco agora pelo WhatsApp e tire todas as dúvidas. 
            Nossa equipe está pronta para te atender!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button 
              variant="hero" 
              size="xl" 
              asChild
              className="bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp-hover animate-bounce-gentle"
            >
              <a href={whatsappFinal} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6" />
                Chamar no WhatsApp
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="xl" 
              asChild
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <a href="tel:+5533999887766">
                <Phone className="w-6 h-6" />
                (33) 99988-7766
              </a>
            </Button>
          </div>

          {/* Trust Elements */}
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-2xl font-bold mb-2">12</p>
              <p className="text-primary-foreground/80">Anos de experiência</p>
            </div>
            <div>
              <p className="text-2xl font-bold mb-2">5.000+</p>
              <p className="text-primary-foreground/80">Clientes satisfeitos</p>
            </div>
            <div>
              <p className="text-2xl font-bold mb-2">100%</p>
              <p className="text-primary-foreground/80">Produtos originais</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;