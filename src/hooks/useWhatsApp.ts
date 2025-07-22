/**
 * Hook personalizado para geração de links do WhatsApp com mensagens pré-definidas
 * @param baseMessage - Mensagem base padrão (opcional)
 * @returns Função para gerar links do WhatsApp
 */
export const useWhatsApp = (baseMessage?: string) => {
  const WHATSAPP_NUMBER = '5533999887766';
  const DEFAULT_MESSAGE = baseMessage || 'Olá! Vi o site da AppleDroidGV e gostaria de mais informações.';

  const generateWhatsAppLink = (customMessage?: string) => {
    const message = customMessage || DEFAULT_MESSAGE;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  // Links pré-definidos mais comuns
  const links = {
    general: generateWhatsAppLink(),
    chooseIphone: generateWhatsAppLink('Olá! Quero escolher meu iPhone na AppleDroidGV. Podem me ajudar?'),
    accessories: generateWhatsAppLink('Olá! Gostaria de saber mais sobre os acessórios Apple disponíveis na loja.'),
    support: generateWhatsAppLink('Olá! Preciso de suporte com meu iPhone. Podem me ajudar?'),
    pricing: generateWhatsAppLink('Olá! Gostaria de saber os preços atualizados dos iPhones disponíveis.'),
    store: generateWhatsAppLink('Olá! Gostaria de saber o endereço e horário de funcionamento da loja.'),
    final: generateWhatsAppLink('Olá! Estou pronto para ter meu iPhone original. Podem me ajudar?')
  };

  return {
    generateWhatsAppLink,
    links,
    phoneNumber: WHATSAPP_NUMBER
  };
};

/**
 * Hook para controle de scroll da página
 * Útil para modal/menu que precisa bloquear scroll
 */
export const useScrollLock = () => {
  const lockScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  const unlockScroll = () => {
    document.body.style.overflow = 'unset';
  };

  return { lockScroll, unlockScroll };
};