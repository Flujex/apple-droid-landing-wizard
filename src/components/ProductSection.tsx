import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle } from 'lucide-react';
import { useWhatsApp } from '@/hooks/useWhatsApp';
import iphone16ProMaxDesert from '@/assets/iphone-16-pro-max-desert.jpg';
import iphone15Blue from '@/assets/iphone-15-blue.jpg';
import iphone13White from '@/assets/iphone-13-white.jpg';

interface ProductGroup {
  id: number;
  title: string;
  subtitle: string;
  borderColor: string;
  products: ProductCard[];
}

interface ProductCard {
  id: number;
  name: string;
  description: string;
  variants: ProductVariant[];
  image?: string;
  badge?: string;
  badgeColor?: string;
  whatsappMessage: string;
  ctaText: string;
}

interface ProductVariant {
  model: string;
  price: string;
  colors?: string;
}

const ProductSection = () => {
  const { generateWhatsAppLink } = useWhatsApp();

  const productGroups: ProductGroup[] = [
    {
      id: 1,
      title: "Linha iPhone 16 - Máxima Performance",
      subtitle: "",
      borderColor: "border-orange-500",
      products: [
        {
          id: 1,
          name: "iPhone 16 Pro Max 256GB",
          description: "Para quem não aceita menos que o máximo.",
          variants: [
            { model: "256GB", price: "R$ 7.550,00", colors: "🟨 ⬜️ ⬛️" }
          ],
          image: iphone16ProMaxDesert,
          badge: "🔥 MAIS PROCURADO",
          badgeColor: "bg-orange-500",
          whatsappMessage: "Olá! Tenho interesse no iPhone 16 Pro Max 256GB.",
          ctaText: "Quero o Pro Max"
        },
        {
          id: 2,
          name: "iPhone 16 Plus",
          description: "Ecrã gigante, performance incrível.",
          variants: [
            { model: "256GB", price: "R$ 6.850,00", colors: "⬜️" },
            { model: "128GB", price: "R$ 6.250,00", colors: "⬜️" }
          ],
          whatsappMessage: "Olá! Tenho interesse no iPhone 16 Plus.",
          ctaText: "Quero o Plus"
        },
        {
          id: 3,
          name: "iPhone 16 & 16E",
          description: "A porta de entrada para o futuro.",
          variants: [
            { model: "16 256GB", price: "R$ 6.150,00", colors: "🩷" },
            { model: "16 128GB", price: "R$ 5.350,00", colors: "⬜️ ⬛️" },
            { model: "16E 128GB", price: "R$ 4.100,00", colors: "⬜️ ⬛️" }
          ],
          whatsappMessage: "Olá! Tenho interesse no iPhone 16 ou 16E.",
          ctaText: "Quero o iPhone 16"
        }
      ]
    },
    {
      id: 2,
      title: "Inovação e Performance Icónica",
      subtitle: "",
      borderColor: "border-zinc-300",
      products: [
        {
          id: 4,
          name: "iPhone 15 128GB",
          description: "Design e tecnologia comprovados.",
          variants: [
            { model: "128GB", price: "R$ 4.700,00", colors: "🟦 🟩 ⬛️ 🩷" }
          ],
          image: iphone15Blue,
          whatsappMessage: "Olá! Tenho interesse no iPhone 15.",
          ctaText: "Quero o 15"
        },
        {
          id: 5,
          name: "iPhone 14 & 13",
          description: "A escolha inteligente com valor imbatível.",
          variants: [
            { model: "14 128GB", price: "R$ 3.850,00", colors: "⬜️ ⬛️" },
            { model: "13 128GB", price: "R$ 3.350,00", colors: "⬜️ ⬛️" }
          ],
          image: iphone13White,
          badge: "💎 MELHOR CUSTO-BENEFÍCIO",
          badgeColor: "bg-blue-500",
          whatsappMessage: "Olá! Tenho interesse no iPhone 14 ou 13.",
          ctaText: "Quero um destes"
        },
        {
          id: 6,
          name: "iPhone 12 & 11",
          description: "Clássicos que nunca desiludem.",
          variants: [
            { model: "12 64GB", price: "R$ 2.850,00", colors: "⬛️" },
            { model: "11 64GB", price: "R$ 2.550,00", colors: "⬛️" }
          ],
          badge: "⚡ ÚLTIMAS UNIDADES",
          badgeColor: "bg-red-500",
          whatsappMessage: "Olá! Tenho interesse no iPhone 12 ou 11.",
          ctaText: "Quero um Clássico"
        }
      ]
    }
  ];

  return (
    <section id="produtos" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-primary">
          O Arsenal Completo. Escolha a Sua Ferramenta.
        </h2>
        
        <div className="space-y-12">
          {productGroups.map((group) => (
            <div key={group.id}>
              <h3 className={`text-2xl font-bold mb-6 border-b-2 ${group.borderColor} pb-2 text-primary`}>
                {group.title}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {group.products.map((product) => (
                  <Card 
                    key={product.id} 
                    className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-gradient-card relative flex flex-col"
                  >
                    <CardContent className="p-6 flex flex-col flex-grow">
                      {/* Product Badge */}
                      {product.badge && (
                        <div className={`absolute top-3 right-3 z-10 px-2 py-1 rounded-full text-xs font-bold text-white ${product.badgeColor} shadow-lg`}>
                          {product.badge}
                        </div>
                      )}

                      {/* Product Image */}
                      {product.image ? (
                        <div className="relative mb-4">
                          <img 
                            src={product.image} 
                            alt={`${product.name} - iPhone original na AppleDroidGV`}
                            className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <div className="w-full h-64 bg-muted rounded-lg mb-4 flex items-center justify-center">
                          <span className="text-muted-foreground">Foto do {product.name}</span>
                        </div>
                      )}

                      {/* Product Info */}
                      <div className="flex flex-col flex-grow">
                        <h4 className="text-xl font-bold text-primary mb-2">
                          {product.name}
                        </h4>
                        <p className="text-muted-foreground text-sm mb-4">
                          {product.description}
                        </p>
                        
                        {/* Variants and Pricing */}
                        <div className="space-y-3 text-foreground flex-grow">
                          {product.variants.map((variant, index) => (
                            <p key={index}>
                              <strong>{variant.model}:</strong>{' '}
                              <span className="font-semibold text-green-600">{variant.price}</span>
                              {variant.colors && (
                                <span className="ml-2">{variant.colors}</span>
                              )}
                            </p>
                          ))}
                        </div>

                        {/* CTA Button */}
                        <Button 
                          variant="whatsapp" 
                          className="w-full gap-2 mt-6"
                          asChild
                        >
                          <a 
                            href={generateWhatsAppLink(product.whatsappMessage)}
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label={`Comprar ${product.name} pelo WhatsApp`}
                          >
                            <MessageCircle className="w-4 h-4" aria-hidden="true" />
                            {product.ctaText}
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;