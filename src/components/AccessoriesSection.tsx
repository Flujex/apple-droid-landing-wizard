import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle } from 'lucide-react';
import magsafeCharger from '@/assets/magsafe-charger.jpg';

const AccessoriesSection = () => {
  const accessories = [
    {
      id: 1,
      name: "Cabo Lightning/USB-C",
      price: "A partir de R$ 89",
      image: "/placeholder.svg",
      description: "Cabos originais Apple para carregamento e sincronização"
    },
    {
      id: 2,
      name: "Carregador MagSafe",
      price: "R$ 349",
      image: magsafeCharger,
      description: "Carregamento sem fio rápido e seguro"
    },
    {
      id: 3,
      name: "EarPods",
      price: "R$ 189",
      image: "/placeholder.svg", 
      description: "Fones de ouvido originais Apple com qualidade premium"
    },
    {
      id: 4,
      name: "Power Bank MFi",
      price: "A partir de R$ 199",
      image: "/placeholder.svg",
      description: "Carregadores portáteis certificados MFi"
    }
  ];

  const whatsappAccessories = "https://wa.me/5533999887766?text=Olá! Gostaria de saber mais sobre os acessórios Apple disponíveis na loja.";

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Acessórios Originais Apple
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete sua experiência Apple com acessórios originais. 
            Garantia e qualidade que você já conhece.
          </p>
        </div>

        {/* Accessories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {accessories.map((accessory) => (
            <Card key={accessory.id} className="group hover:shadow-card transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                {/* Accessory Image */}
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={accessory.image} 
                    alt={accessory.name}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Accessory Info */}
                <div className="space-y-3">
                  <h3 className="font-bold text-primary">
                    {accessory.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground">
                    {accessory.description}
                  </p>

                  <p className="text-lg font-bold text-accent">
                    {accessory.price}
                  </p>

                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    asChild
                  >
                    <a 
                      href={`${whatsappAccessories}&text=Tenho interesse no ${accessory.name}.`}
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Consultar
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="cta" size="lg" asChild>
            <a href={whatsappAccessories} target="_blank" rel="noopener noreferrer">
              Ver Todos os Acessórios
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AccessoriesSection;