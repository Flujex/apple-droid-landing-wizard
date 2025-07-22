import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const whatsappUrl = "https://wa.me/5533999887766?text=Olá! Vi o site da AppleDroidGV e gostaria de mais informações sobre os iPhones.";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-card">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/c371f504-f585-4894-aa11-04ce0edc1293.png" 
            alt="AppleDroidGV Logo" 
            className="w-10 h-10 object-contain"
          />
          <div>
            <h1 className="text-xl font-bold text-primary">AppleDroidGV</h1>
            <p className="text-xs text-muted-foreground hidden sm:block">12 anos de confiança</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#produtos" className="text-foreground hover:text-primary transition-colors">
            Produtos
          </a>
          <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
            Sobre
          </a>
          <a href="#contato" className="text-foreground hover:text-primary transition-colors">
            Contato
          </a>
        </nav>

        {/* WhatsApp Button & Mobile Menu */}
        <div className="flex items-center space-x-4">
          <Button 
            variant="whatsapp" 
            size="lg"
            asChild
            className="hidden sm:flex"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </Button>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border shadow-card">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <a 
              href="#produtos" 
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Produtos
            </a>
            <a 
              href="#sobre" 
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </a>
            <a 
              href="#contato" 
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </a>
            <Button 
              variant="whatsapp" 
              className="w-full"
              asChild
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                Falar no WhatsApp
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;