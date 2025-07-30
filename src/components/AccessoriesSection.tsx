import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle } from 'lucide-react';
import { useWhatsApp } from '@/hooks/useWhatsApp';
import magsafeCharger from '@/assets/magsafe-charger.jpg';

interface Accessory {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  alt: string;
}

const AccessoriesSection = () => {
  const { links, generateWhatsAppLink } = useWhatsApp();

  const accessories: Accessory[] = [
    {
      id: 1,
      name: "Cabo Lightning/USB-C",
      price: "A partir de R$ 89",
      image: "/placeholder.svg",
      description: "Cabos originais Apple para carregamento e sincronização",
      alt: "Cabo Lightning e USB-C originais Apple"
    },
    {
      id: 2,
      name: "Carregador MagSafe",
      price: "R$ 349",
      image: magsafeCharger,
      description: "Carregamento sem fio rápido e seguro",
      alt: "Carregador MagSafe sem fio da Apple"
    },
    {
      id: 3,
      name: "EarPods",
      price: "R$ 189",
      image: "/placeholder.svg", 
      description: "Fones de ouvido originais Apple com qualidade premium",
      alt: "EarPods fones de ouvido originais Apple"
    },
    {
      id: 4,
      name: "Power Bank MFi",
      price: "A partir de R$ 199",
      image: "/placeholder.svg",
      description: "Carregadores portáteis certificados MFi",
      alt: "Power Bank certificado MFi para iPhone"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto container-spacing">
        {/* Section Header */}
        <header className="text-center mb-16">
          <h2 className="text-primary mb-4">
            Antes de Sair da Loja: <br className="hidden sm:block" />
            <span className="text-accent">Não Cometa o Erro Nº1</span> dos Novos Utilizadores
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-foreground mb-4 font-medium">
              O erro mais caro que um novo dono de iPhone comete? Acreditar que a proteção é um "extra". 
              <span className="text-accent font-bold"> Não é. É a parte mais crucial do seu investimento.</span>
            </p>
            <p className="text-base text-muted-foreground">
              Pergunte a qualquer um dos nossos especialistas qual o Kit de Partida Essencial para o seu novo aparelho. 
              <span className="font-semibold text-primary">Proteger hoje custa uma fração do reparo de amanhã.</span>
            </p>
          </div>
        </header>

        {/* Accessories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" role="list">
          {accessories.map((accessory) => (
            <Card 
              key={accessory.id} 
              className="group hover:shadow-card transition-all duration-300 hover:scale-105"
              role="listitem"
            >
              <CardContent className="p-6 text-center">
                {/* Accessory Image */}
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={accessory.image} 
                    alt={accessory.alt}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
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
                    className="w-full gap-2"
                    asChild
                  >
                    <a 
                      href={generateWhatsAppLink(`Olá! Tenho interesse no ${accessory.name}. Podem me passar mais informações?`)}
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`Consultar preços e disponibilidade do ${accessory.name}`}
                    >
                      <MessageCircle className="w-4 h-4" aria-hidden="true" />
                      Consultar Especialista
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <footer className="text-center mt-12">
          <Button variant="cta" size="lg" asChild>
            <a 
              href={links.accessories} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Ver todos os acessórios Apple disponíveis"
            >
              Ver Todos os Acessórios
            </a>
          </Button>
        </footer>
      </div>
    </section>
  );
};

export default AccessoriesSection;