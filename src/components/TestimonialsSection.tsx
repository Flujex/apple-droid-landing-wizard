import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Maria S.",
      location: "Centro, GV",
      rating: 5,
      text: "Meu iPhone parou de funcionar no meio de uma reunião importante. Pensei que tinha perdido tudo. Na AppleDroidGV, fizeram um diagnóstico transparente e recuperaram todos os meus dados em 2 horas. Salvaram minha semana!",
      purchase: "Diagnóstico e Reparo - iPhone 16 Pro Max"
    },
    {
      id: 2,
      name: "João P.",
      location: "Vila Bretas, GV",
      rating: 5,
      text: "Estava com medo de comprar um iPhone e não ter suporte. Aqui encontrei não só o produto original, mas um especialista que me ensinou tudo e sempre responde minhas dúvidas. Confiança total!",
      purchase: "iPhone 15 Pro"
    },
    {
      id: 3,
      name: "Ana Carolina M.",
      location: "Lourdes, GV",
      rating: 5,
      text: "Cansei de ser enganada em outras lojas. Aqui o preço é o que combinamos, sem pegadinhas. O trabalho é feito na minha frente e explica tudo. Finalmente encontrei quem entende do que fala.",
      purchase: "iPhone 16 + Diagnóstico"
    },
    {
      id: 4,
      name: "Carlos E.",
      location: "Caravelas, GV",
      rating: 5,
      text: "Meu iPhone tinha um defeito estranho que ninguém conseguia resolver. Os especialistas da AppleDroidGV identificaram o problema em minutos e me deram a solução mais econômica. Profissionalismo de verdade!",
      purchase: "iPhone 15 - Diagnóstico Técnico"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A confiança dos nossos clientes é nosso maior patrimônio. 
            Veja o que eles falam sobre a AppleDroidGV.
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