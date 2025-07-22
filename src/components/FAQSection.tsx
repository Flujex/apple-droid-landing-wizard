import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Os iPhones são originais?",
      answer: "Sim! Todos os nossos iPhones são 100% originais, lacrados de fábrica e com garantia oficial Apple. Trabalhamos apenas com produtos importados através de canais autorizados."
    },
    {
      question: "Qual a garantia dos produtos?",
      answer: "Todos os iPhones têm garantia oficial Apple de 1 ano. Além disso, oferecemos suporte pós-venda em nossa loja física em Governador Valadares para qualquer dúvida ou problema."
    },
    {
      question: "Como funciona o parcelamento?",
      answer: "Aceitamos cartão de crédito em até 10x sem juros. Também trabalhamos com PIX à vista com 5% de desconto. Consulte condições especiais para outros meios de pagamento."
    },
    {
      question: "Fazem entrega em Governador Valadares?",
      answer: "Sim! Fazemos entrega rápida em toda Governador Valadares e região. Você também pode retirar pessoalmente em nossa loja física. Frete grátis para compras acima de R$ 500."
    },
    {
      question: "Posso trocar se não me adaptar?",
      answer: "Oferecemos 7 dias para arrependimento conforme o Código de Defesa do Consumidor. O produto deve estar em perfeitas condições, com embalagem original e acessórios."
    },
    {
      question: "Onde fica a loja física?",
      answer: "Nossa loja está localizada no centro de Governador Valadares, MG. Funcionamos de segunda a sexta das 8h às 18h e sábados das 8h às 16h. Entre em contato pelo WhatsApp para o endereço exato."
    },
    {
      question: "Vocês fazem upgrade/troca de aparelho usado?",
      answer: "Sim! Avaliamos seu iPhone usado e oferecemos desconto na compra de um modelo mais novo. Entre em contato pelo WhatsApp com o modelo do seu aparelho atual para uma avaliação."
    },
    {
      question: "Têm assistência técnica?",
      answer: "Oferecemos suporte pós-venda e orientações. Para reparos em garantia, direcionamos para assistência técnica autorizada Apple. Problemas simples resolvemos na hora."
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Esclarecemos as principais dúvidas sobre nossos produtos e serviços. 
            Não encontrou sua resposta? Fale conosco!
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background rounded-xl border shadow-card hover:shadow-elegant transition-shadow duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="font-semibold text-primary">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ainda tem dúvidas? Nossa equipe está pronta para ajudar!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5533999887766?text=Olá! Tenho algumas dúvidas sobre os produtos da AppleDroidGV."
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp-hover px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            >
              Falar no WhatsApp
            </a>
            <a 
              href="tel:+5533999887766"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary-hover px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            >
              Ligar Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;