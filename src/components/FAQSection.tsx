import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Como sei que as peças são de qualidade e não serei enganado?",
      answer: "Entendemos sua preocupação. Trabalhamos apenas com peças originais Apple e fornecedores certificados. Fazemos o diagnóstico na sua frente, explicamos cada detalhe e o preço combinado é o que você paga. Nossa reputação de 12 anos é nossa maior garantia."
    },
    {
      question: "E se o problema for mais grave do que parece?",
      answer: "Nosso diagnóstico é completo e transparente. Se descobrirmos algo além do inicial, paramos tudo e explicamos as opções. Você decide se quer prosseguir. Nunca fazemos nada sem sua autorização expressa."
    },
    {
      question: "Vocês realmente entendem de iPhone ou é só conversa?",
      answer: "Somos especialistas certificados há 12 anos. Nossa equipe passa por treinamento constante e temos as ferramentas originais Apple. Pode nos testar: traga sua dúvida mais complexa e veja a diferença da experiência."
    },
    {
      question: "Qual a diferença de vocês para a concorrência?",
      answer: "Simples: transparência total, diagnóstico sem taxa, preço justo combinado e 12 anos de reputação sólida. Não somos apenas uma loja, somos o estúdio de confiança da Galeria 616."
    },
    {
      question: "E se eu não ficar satisfeito com o serviço?",
      answer: "Nosso compromisso é com sua satisfação total. Se algo não estiver perfeito, voltamos à mesa e ajustamos até você ficar 100% satisfeito. Nosso relacionamento não termina quando você paga."
    },
    {
      question: "Por que deveria confiar em vocês ao invés de ir direto na Apple?",
      answer: "Oferecemos o mesmo padrão técnico com atendimento humano e local. Você nos conhece pessoalmente, tem acesso direto e resolve tudo sem burocracias. Somos a Apple com o carinho de Governador Valadares."
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