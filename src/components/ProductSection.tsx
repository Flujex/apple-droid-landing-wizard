import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle } from 'lucide-react';
import { useWhatsApp } from '@/hooks/useWhatsApp';
import iphone16ProMax from '@/assets/iphone-16-pro-max.jpg';
import iphone16Pro from '@/assets/iphone-16-pro.jpg';
import iphone16 from '@/assets/iphone-16.jpg';

interface Product {
  id: number;
  name: string;
  model: string;
  description: string;
  price: string;
  image: string;
  whatsappMessage: string;
}

const ProductSection = () => {
  const { generateWhatsAppLink, links } = useWhatsApp();

  const products: Product[] = [
    {
      id: 1,
      name: "iPhone 16 Pro Max",
      model: "256GB",
      description: "Câmera profissional, chip A18 Pro, bateria para o dia todo",
      price: "A partir de R$ 8.299",
      image: iphone16ProMax,
      whatsappMessage: "Olá! Tenho interesse no iPhone 16 Pro Max 256GB que vi no site. Podem me passar mais informações?"
    },
    {
      id: 2,
      name: "iPhone 16 Pro",
      model: "128GB",
      description: "Performance excepcional, design premium em titânio",
      price: "A partir de R$ 6.999",
      image: iphone16Pro,
      whatsappMessage: "Olá! Gostaria de saber mais sobre o iPhone 16 Pro 128GB. Qual o melhor preço?"
    },
    {
      id: 3,
      name: "iPhone 16",
      model: "128GB",
      description: "Novo design, câmera avançada, cores vibrantes",
      price: "A partir de R$ 5.499",
      image: iphone16,
      whatsappMessage: "Olá! Quero mais informações sobre o iPhone 16 128GB. Vocês têm na cor rosa?"
    }
  ];

  return (
    <section id="produtos" className="section-padding bg-secondary">
      <div className="container mx-auto container-spacing">
        {/* Section Header */}
        <header className="text-center mb-16">
          <h2 className="text-primary mb-4">
            Estúdio de Performance Apple
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dispositivos originais com diagnóstico de performance incluído. 
            Nossa expertise garante que você leve não apenas um produto, mas a tranquilidade de estar protegido.
          </p>
        </header>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-gradient-card"
              role="listitem"
            >
              <CardContent className="p-6">
                {/* Product Image */}
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <img 
                    src={product.image} 
                    alt={`${product.name} ${product.model} - iPhone original na AppleDroidGV`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium shadow-green">
                    ✓ Original
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-4">
                  <header>
                    <h3 className="text-xl font-bold text-primary">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground font-medium">
                      {product.model}
                    </p>
                  </header>

                  <p className="text-foreground">
                    {product.description}
                  </p>

                  <div className="space-y-2">
                    <p className="text-2xl font-bold text-primary">
                      {product.price}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      10x sem juros ou 5% à vista
                    </p>
                  </div>

                  <Button 
                    variant="whatsapp" 
                    className="w-full gap-2"
                    asChild
                  >
                    <a 
                      href={generateWhatsAppLink(product.whatsappMessage)}
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`Comprar ${product.name} ${product.model} pelo WhatsApp`}
                    >
                      <MessageCircle className="w-4 h-4" aria-hidden="true" />
                      Falar com Especialista
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <footer className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Não encontrou o modelo que procura? Temos outros modelos disponíveis!
          </p>
          <Button variant="cta" size="lg" asChild>
            <a 
              href={links.pricing}
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Ver todos os modelos de iPhone disponíveis"
            >
              Ver Todos os Modelos
            </a>
          </Button>
        </footer>
      </div>
    </section>
  );
};

export default ProductSection;