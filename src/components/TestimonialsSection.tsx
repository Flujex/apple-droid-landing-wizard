import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Juliana P.",
      location: "Centro, GV",
      rating: 5,
      text: "Pensei que tinha perdido as fotos do meu filho quando meu iPhone morreu. A equipe da AppleDroidGV não só recuperou tudo com um diagnóstico transparente, como me devolveu o aparelho no mesmo dia. A paz de espírito não tem preço.",
      purchase: "Recuperação de Dados - iPhone 14 Pro"
    },
    {
      id: 2,
      name: "Carlos F.",
      location: "Ilha dos Araújos, GV",
      rating: 5,
      text: "Meu MacBook de trabalho parou no meio de um projeto importante. O diagnóstico deles foi preciso e o reparo rápido. Salvaram meu prazo e meu emprego! Profissionalismo exemplar.",
      purchase: "MacBook Pro - Reparo de Placa"
    },
    {
      id: 3,
      name: "Ana M.",
      location: "Lourdes, GV",
      rating: 5,
      text: "Estava desesperada com meu iPhone que não carregava mais. Achei que precisaria trocar, mas eles identificaram que era só o conector. Economizei centenas de reais e aprendi a importância do diagnóstico correto.",
      purchase: "iPhone 13 - Reparo de Conector"
    },
    {
      id: 4,
      name: "Roberto S.",
      location: "Vila Bretas, GV",
      rating: 5,
      text: "Meu notebook estava lento há meses. Pensei que era coisa da idade, mas o diagnóstico mostrou que era só limpeza e otimização. Agora está voando! Atendimento nota 10.",
      purchase: "Notebook Lenovo - Manutenção"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            A Experiência de Quem Já Confiou na Gente
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de transformação. Veja como resolvemos problemas e devolvemos 
            a tranquilidade para nossos clientes em Governador Valadares.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-card transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  {/* Quote Icon */}
                  <div className="flex-shrink-0">
                    <Quote className="w-8 h-8 text-accent" />
                  </div>
                  
                  {/* Testimonial Content */}
                  <div className="flex-1">
                    {/* Rating */}
                    <div className="flex space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Text */}
                    <blockquote className="text-foreground mb-6 leading-relaxed">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="border-t border-border pt-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-bold text-primary">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-accent">{testimonial.purchase}</p>
                          <p className="text-xs text-muted-foreground">Produto adquirido</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Rating Summary */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-secondary rounded-xl px-8 py-4">
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="text-left">
              <p className="font-bold text-primary">4.9/5 de satisfação</p>
              <p className="text-sm text-muted-foreground">Baseado em mais de 500 avaliações</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;