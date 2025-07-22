import { Shield, Heart, CreditCard, MapPin, Phone, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Differential {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const DifferentialsSection = () => {
  const differentials: Differential[] = [
    {
      icon: Award,
      title: "12 anos de credibilidade",
      description: "Empresa consolidada em Governador Valadares"
    },
    {
      icon: Shield,
      title: "100% originais",
      description: "Produtos com garantia Apple oficial"
    },
    {
      icon: Heart,
      title: "Atendimento humano",
      description: "Suporte local especializado"
    },
    {
      icon: CreditCard,
      title: "Parcelamento facilitado",
      description: "Até 10x sem juros no cartão"
    },
    {
      icon: MapPin,
      title: "Entrega rápida",
      description: "Retirada na loja em Governador Valadares"
    },
    {
      icon: Phone,
      title: "Suporte pós-venda",
      description: "Você nunca fica sozinho"
    }
  ];

  return (
    <section id="sobre" className="section-padding bg-secondary">
      <div className="container mx-auto container-spacing">
        {/* Section Header */}
        <header className="text-center mb-16">
          <h2 className="text-primary mb-4">
            Por que escolher a AppleDroidGV?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Somos mais que uma loja de tecnologia. Somos uma empresa local, 
            que entende suas necessidades e oferece a melhor experiência em produtos Apple.
          </p>
        </header>

        {/* Differentials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
          {differentials.map((differential, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-all duration-300 hover:scale-105 bg-gradient-card"
              role="listitem"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div 
                    className="w-16 h-16 bg-gradient-orange rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-orange"
                    role="img"
                    aria-label={`Ícone representando ${differential.title}`}
                  >
                    <differential.icon className="w-8 h-8 text-primary-foreground" aria-hidden="true" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-3">
                  {differential.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {differential.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badge */}
        <footer className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-background rounded-xl px-8 py-4 shadow-green border border-accent/20">
            <Shield 
              className="w-8 h-8 text-accent animate-pulse-green" 
              aria-hidden="true"
            />
            <div className="text-left">
              <p className="font-bold text-primary">Garantia Oficial Apple</p>
              <p className="text-sm text-muted-foreground">Suporte autorizado e peças originais</p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default DifferentialsSection;