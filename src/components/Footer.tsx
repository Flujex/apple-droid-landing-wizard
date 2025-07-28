import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 text-primary-foreground/80" />
                <div>
                  <p className="font-medium">Estúdio AppleDroidGV</p>
                  <p className="text-primary-foreground/80 text-sm">
                    Galeria 616, Loja 612C<br />
                    Centro, Governador Valadares - MG
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-foreground/80" />
                <div>
                  <p className="font-medium">(33) 99988-7766</p>
                  <p className="text-primary-foreground/80 text-sm">WhatsApp e ligações</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-foreground/80" />
                <div>
                  <p className="font-medium">contato@appledroidgv.com.br</p>
                  <p className="text-primary-foreground/80 text-sm">E-mail para dúvidas</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 mt-1 text-primary-foreground/80" />
                <div>
                  <p className="font-medium">Horário de Funcionamento</p>
                  <p className="text-primary-foreground/80 text-sm">
                    Segunda a Sexta: 8h às 18h<br />
                    Sábado: 8h às 16h<br />
                    Domingo: Fechado
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-6">Redes Sociais</h3>
            <div className="space-y-4">
              <p className="text-primary-foreground/80 text-sm mb-4">
                Siga-nos nas redes sociais para ficar por dentro das novidades e promoções!
              </p>
              
              <div className="space-y-3">
                <Button variant="ghost" size="sm" asChild className="justify-start p-0 h-auto text-primary-foreground hover:text-primary-foreground/80">
                  <a 
                    href="https://instagram.com/appledroidgv" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3"
                  >
                    <Instagram className="w-5 h-5" />
                    <span>@appledroidgv</span>
                  </a>
                </Button>
                
                <Button variant="ghost" size="sm" asChild className="justify-start p-0 h-auto text-primary-foreground hover:text-primary-foreground/80">
                  <a 
                    href="https://facebook.com/appledroidgv" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3"
                  >
                    <Facebook className="w-5 h-5" />
                    <span>AppleDroidGV</span>
                  </a>
                </Button>
              </div>

              <div className="mt-6">
                <p className="text-sm text-primary-foreground/60 mb-2">Avalie-nos no Google:</p>
                <Button variant="outline" size="sm" asChild className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <a 
                    href="https://g.page/r/appledroidgv/review" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    ⭐ Deixar Avaliação
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">AppleDroidGV</h3>
            <div className="space-y-4">
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Há 12 anos sendo referência em produtos Apple em Governador Valadares. 
                Compromisso com qualidade, originalidade e atendimento humanizado.
              </p>
              
              <div className="space-y-2">
                <p className="text-sm">
                  <span className="font-medium">CNPJ:</span> 12.345.678/0001-90
                </p>
                <p className="text-sm">
                  <span className="font-medium">Razão Social:</span> AppleDroidGV Ltda.
                </p>
              </div>

              <div className="pt-4">
                <Button variant="whatsapp" size="lg" asChild className="w-full">
                  <a 
                    href="https://wa.me/5533999887766?text=Olá! Quero falar com a AppleDroidGV."
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Falar no WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-primary-foreground/80">
                © {currentYear} AppleDroidGV. Todos os direitos reservados.
              </p>
              <p className="text-xs text-primary-foreground/60">
                Apple e iPhone são marcas registradas da Apple Inc.
              </p>
            </div>
            
            <div className="flex space-x-6 text-xs text-primary-foreground/60">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Trocas e Devoluções
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;