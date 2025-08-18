import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useWhatsApp } from '@/hooks/useWhatsApp';
import { MapPin, Navigation, MessageCircle, Phone } from 'lucide-react';

const LocationSection = () => {
  const { links, phoneNumber } = useWhatsApp();

  const locationDetails = [
    {
      icon: MapPin,
      title: "Endereço",
      info: "Rua São Paulo, Galeria 616 - Centro, Governador Valadares - MG"
    },
    {
      icon: Navigation,
      title: "Como chegar",
      info: "É só entrar na Galeria 616 e seguir o corredor. Estamos no fundo!"
    }
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto container-spacing">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Como Chegar na Apple Android GV
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encontre nossa loja facilmente no centro de Governador Valadares
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Map Column */}
          <div className="order-2 lg:order-1">
            <Card className="overflow-hidden border-border/50 shadow-card">
              <CardContent className="p-0">
                <div className="aspect-video bg-muted">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.234567890123!2d-41.9494444!3d-18.8508333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDUxJzAzLjAiUyA0McKwNTYnNTgiVw!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização da Apple Android GV"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Instructions Column */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Store Front Photo */}
            <Card className="overflow-hidden border-border/50 shadow-card">
              <CardContent className="p-0">
                <div className="aspect-video bg-muted">
                  <img
                    src="/public/lovable-uploads/c371f504-f585-4894-aa11-04ce0edc1293.png"
                    alt="Entrada da Galeria 616 - Apple Android GV"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Location Details */}
            <div className="space-y-6">
              {locationDetails.map((detail, index) => (
                <div key={index} className="flex gap-4 p-4 bg-card rounded-lg border border-border/50">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <detail.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{detail.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{detail.info}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Instructions */}
            <Card className="border-accent/20 bg-accent/5">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  📍 Instruções para chegar:
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Procure pela <span className="text-primary font-semibold">Galeria 616</span> na Rua São Paulo</p>
                  <p>• Entre na galeria e siga o corredor</p>
                  <p>• Estamos no <span className="text-primary font-semibold">fundo da galeria</span></p>
                  <p>• Se tiver dúvida, nos chame no WhatsApp! 📱</p>
                </div>
              </CardContent>
            </Card>

            {/* Final CTAs */}
            <div className="space-y-4">
              <Button
                variant="whatsapp"
                size="lg"
                className="w-full gap-3 animate-pulse-green"
                onClick={() => window.open(links.store, '_blank')}
              >
                <MessageCircle className="w-5 h-5" />
                Chame no WhatsApp se Tiver Dúvida
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="w-full gap-3 border-primary/20 hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open(`tel:+55${phoneNumber}`, '_self')}
              >
                <Phone className="w-5 h-5" />
                Ligar Direto: (33) 98709-4020
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;