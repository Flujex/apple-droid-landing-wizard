import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Smartphone, Shield, Monitor, MessageCircle } from 'lucide-react';
import { useWhatsApp } from '@/hooks/useWhatsApp';

const ServicesSection = () => {
  const { links } = useWhatsApp();

  const services = [
    {
      icon: Smartphone,
      title: "Maestria em Apple",
      subtitle: "iPhone, iPad & MacBook",
      description: "Seu dispositivo Apple não é um simples aparelho, é um investimento. Quando ele falha, você precisa de um especialista. Realizamos desde trocas de tela com precisão cirúrgica até diagnósticos complexos de placa, tratando seu investimento com o respeito que ele merece.",
      buttonText: "Falar com Especialista Apple",
      link: links.support,
      badge: "Especialista Certificado"
    },
    {
      icon: Shield,
      title: "Xiaomi com Confiança",
      subtitle: "Venda e Suporte",
      description: "Cansado da aposta de comprar online? Oferecemos os melhores modelos Xiaomi com algo que a internet não te dá: a segurança de um aperto de mão e suporte local de verdade, aqui em Governador Valadares.",
      buttonText: "Ver Modelos com Garantia",
      link: links.chooseIphone,
      badge: "100% Original"
    },
    {
      icon: Monitor,
      title: "Performance Restaurada",
      subtitle: "PCs & Notebooks",
      description: "Cada segundo que seu computador trava é um momento de produtividade que você perde. Com um Diagnóstico de Performance, identificamos os gargalos e restauramos a velocidade que você precisa para trabalhar sem estresse.",
      buttonText: "Diagnóstico para meu PC",
      link: links.support,
      badge: "Diagnóstico Gratuito"
    }
  ];

  return (
    <section id="servicos" className="section-padding bg-background">
      <div className="container mx-auto container-spacing">
        {/* Section Header */}
        <header className="text-center mb-16">
          <h2 className="text-primary mb-4">
            Não Apenas Reparos. Soluções Completas.
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Transformamos problemas em tranquilidade. Cada serviço é pensado para devolver 
            não apenas a funcionalidade, mas sua paz de espírito.
          </p>
        </header>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" role="list">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-all duration-300 hover:scale-105 bg-gradient-card relative overflow-hidden"
              role="listitem"
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full font-medium">
                {service.badge}
              </div>

              <CardContent className="p-8">
                {/* Icon */}
                <div className="mb-6">
                  <div 
                    className="w-16 h-16 bg-gradient-orange rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-orange"
                    role="img"
                    aria-label={`Ícone representando ${service.title}`}
                  >
                    <service.icon className="w-8 h-8 text-primary-foreground" aria-hidden="true" />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-primary mb-2">
                  {service.title}
                </h3>
                
                <p className="text-sm font-medium text-accent mb-4">
                  {service.subtitle}
                </p>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* CTA Button */}
                <Button 
                  variant="default" 
                  className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                  asChild
                >
                  <a 
                    href={service.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={service.buttonText}
                  >
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                    {service.buttonText}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <footer className="text-center mt-16">
          <div className="bg-secondary rounded-xl p-8">
            <h3 className="text-xl font-bold text-primary mb-4">
              Não sabe qual serviço precisa?
            </h3>
            <p className="text-muted-foreground mb-6">
              Conte-nos seu problema. Nossos especialistas te orientam sem compromisso.
            </p>
            <Button 
              variant="default" 
              size="lg" 
              className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
              asChild
            >
              <a 
                href={links.general} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Falar com especialista para orientação"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                Falar com Especialista Agora
              </a>
            </Button>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default ServicesSection;