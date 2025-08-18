import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useWhatsApp } from '@/hooks/useWhatsApp';
import { MessageCircle } from 'lucide-react';

const PopularProductsSection = () => {
  const { generateWhatsAppLink } = useWhatsApp();

  const products = [
    {
      id: 1,
      name: "iPhone 14 Pro Seminovo",
      specs: "128GB - Space Black",
      condition: "Saúde da bateria: 92%",
      warranty: "Garantia de 3 meses",
      image: "/src/assets/iphone-16-pro.jpg",
      message: "Olá! Gostaria de saber mais sobre o iPhone 14 Pro Seminovo 128GB."
    },
    {
      id: 2,
      name: "iPhone 15 Novo",
      specs: "256GB - Azul",
      condition: "Lacrado na caixa",
      warranty: "Garantia Apple 1 ano",
      image: "/src/assets/iphone-15-blue.jpg",
      message: "Olá! Tenho interesse no iPhone 15 256GB Azul lacrado."
    },
    {
      id: 3,
      name: "iPhone 13 Seminovo",
      specs: "128GB - Branco",
      condition: "Saúde da bateria: 89%",
      warranty: "Garantia de 3 meses",
      image: "/src/assets/iphone-13-white.jpg",
      message: "Olá! Quero consultar o preço do iPhone 13 128GB Branco."
    },
    {
      id: 4,
      name: "iPhone 16 Pro Max",
      specs: "512GB - Titânio Natural",
      condition: "Lacrado na caixa",
      warranty: "Garantia Apple 1 ano",
      image: "/src/assets/iphone-16-pro-max.jpg",
      message: "Olá! Gostaria de informações sobre o iPhone 16 Pro Max 512GB."
    }
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto container-spacing">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            O Que Temos na Loja Hoje
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Confira alguns dos produtos mais procurados que temos disponíveis agora mesmo na loja
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-border/50">
              <CardHeader className="p-0">
                <div className="aspect-square overflow-hidden rounded-t-lg bg-secondary/50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-lg font-bold text-foreground mb-2 line-clamp-1">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground space-y-1 mb-4">
                  <div className="font-medium text-primary">{product.specs}</div>
                  <div>{product.condition}</div>
                  <div className="text-xs text-accent font-medium">{product.warranty}</div>
                </CardDescription>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full gap-2 border-primary/20 hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open(generateWhatsAppLink(product.message), '_blank')}
                >
                  <MessageCircle className="w-4 h-4" />
                  Consultar Preço no WhatsApp
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* See All Products CTA */}
        <div className="text-center mt-12">
          <Button
            variant="cta"
            size="lg"
            className="gap-3"
            onClick={() => window.open(generateWhatsAppLink('Olá! Gostaria de ver todos os produtos disponíveis na loja.'), '_blank')}
          >
            <MessageCircle className="w-5 h-5" />
            Ver Todos os Produtos Disponíveis
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularProductsSection;