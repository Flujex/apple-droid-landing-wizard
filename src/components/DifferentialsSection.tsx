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
      icon: Shield,
      title: "Diagnóstico 100% Transparente",
      description: "Sem 'taxa de análise' surpresa ou termos técnicos para te confundir. Mostramos o problema, explicamos a solução e o preço é o combinado. Simples assim."
    },
    {
      icon: Award,
      title: "Garantia de Verdade, Não de Papel",
      description: "Nossa garantia cobre o serviço completo, não apenas a peça. Se o problema retornar, resolver é nossa prioridade, sem custos ou desculpas."
    },
    {
      icon: Heart,
      title: "Maestria de 12 Anos",
      description: "Não somos curiosos. Somos um estúdio de reparos com mais de uma década de experiência. Isso significa menos risco para o seu aparelho e mais segurança para você."
    },
    {
      icon: Phone,
      title: "Suporte Local, Humano e Real",
      description: "Precisa de ajuda? Você fala com a gente, aqui em GV. Sem robôs, sem espera infinita. Atendimento direto com quem resolve."
    }
  ];

  return (
    <section id="por-que-nos" className="section-padding bg-secondary">
      <div className="container mx-auto container-spacing">
        {/* Section Header */}
        <header className="text-center mb-16">
          <h2 className="text-primary mb-4">
            Nossa Garantia é a Sua Tranquilidade
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Destruímos as principais objeções e medos que você tem ao escolher um serviço técnico. 
            Aqui, sua confiança é nosso principal objetivo.
          </p>
        </header>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8" role="list">
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
              <p className="font-bold text-primary">Especialistas Certificados</p>
              <p className="text-sm text-muted-foreground">Maestria técnica e transparência total</p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default DifferentialsSection;