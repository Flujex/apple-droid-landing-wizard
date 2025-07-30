import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Shield, Settings, MessageCircle, Star, Users } from 'lucide-react';

const ValueStackSection = () => {
  const valueItems = [
    {
      icon: CheckCircle,
      title: "O iPhone Original, Verificado por Especialistas",
      description: "Cada aparelho passa por um checklist de 12 pontos antes de chegar à sua mão. Performance garantida."
    },
    {
      icon: Shield,
      title: "Garantia de Verdade, Sem Letras Pequenas",
      description: "A nossa garantia cobre o que importa, com suporte local direto no nosso estúdio."
    },
    {
      icon: Settings,
      title: "Configuração Inicial Assistida",
      description: "Não o deixamos sozinho. Ajudamo-lo a transferir os seus dados e a configurar as funções essenciais. Você sai daqui a usar 100% do seu novo investimento."
    },
    {
      icon: MessageCircle,
      title: "Suporte Prioritário de 30 Dias via WhatsApp",
      description: "Qualquer dúvida nos primeiros 30 dias? Você tem uma linha direta com um especialista, não com um robô."
    },
    {
      icon: Star,
      title: "Convite para a Nossa Comunidade VIP",
      description: "Acesso a dicas exclusivas e ofertas antecipadas."
    }
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto container-spacing">
        {/* Section Header */}
        <header className="text-center mb-12 md:mb-16">
          <h2 className="text-primary mb-4 md:mb-6">
            Não Compra Apenas um iPhone. <br className="hidden sm:block" />
            Você Adquire o <span className="text-accent">Padrão AppleDroidGV</span>.
          </h2>
        </header>

        {/* Value Stack Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" role="list">
          {valueItems.map((item, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-all duration-300 hover:scale-105 border-accent/20"
              role="listitem"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-accent" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start gap-2 mb-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <h3 className="font-bold text-primary text-sm md:text-base leading-tight">
                        {item.title}
                      </h3>
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueStackSection;