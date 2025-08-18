import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const TrustSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      rating: 5,
      text: "Comprei meu iPhone 13 na Apple Android GV e foi a melhor escolha! Daniel me atendeu super bem e o produto estava perfeito. Recomendo!",
      date: "há 2 semanas"
    },
    {
      id: 2,
      name: "João Pedro",
      rating: 5,
      text: "Lugar de confiança em Valadares! Já comprei 2 celulares lá e sempre fui bem atendido. Preços justos e produtos originais.",
      date: "há 1 mês"
    },
    {
      id: 3,
      name: "Ana Costa",
      rating: 5,
      text: "Adorei o atendimento! Daniel explicou tudo direitinho sobre o iPhone que eu queria. Produto chegou certinho e funcionando perfeitamente.",
      date: "há 3 semanas"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto container-spacing">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Por que Valadares Compra com a Gente
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mais de 12 anos construindo confiança no coração de Valadares
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Testimonials Column */}
          <div className="space-y-6">
            <div className="text-center lg:text-left mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                O que nossos clientes dizem
              </h3>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-muted-foreground">4.9/5 no Google</span>
              </div>
            </div>

            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-border/50 hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 text-sm leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span className="font-medium">{testimonial.name}</span>
                    <span>{testimonial.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Owner Photo & Message Column */}
          <div className="text-center">
            <div className="relative mb-8">
              <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-orange">
                <img
                  src="/public/lovable-uploads/0e9a780c-0553-46b8-b1e4-432965c672d8.png"
                  alt="Daniel - Proprietário da Apple Android GV"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Trust badge */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold shadow-green">
                  12 anos de experiência
                </div>
              </div>
            </div>
            
            <div className="max-w-md mx-auto">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Olá, sou o Daniel!
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Estou aqui na <span className="text-primary font-semibold">Galeria 616</span> para te ajudar a escolher o melhor aparelho para suas necessidades. 
                Com mais de 12 anos de experiência, garanto que você vai sair daqui satisfeito.
              </p>
              <p className="text-accent font-semibold mt-4">
                Venha me fazer uma visita! 📱
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;