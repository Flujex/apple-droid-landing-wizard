import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useWhatsApp } from '@/hooks/useWhatsApp';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { links } = useWhatsApp();

  // Block body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  const navigationItems = [
    { href: '#produtos', label: 'Produtos' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#contato', label: 'Contato' }
  ];

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-card">
        <div className="container mx-auto container-spacing h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/0e9a780c-0553-46b8-b1e4-432965c672d8.png" 
              alt="AppleDroidGV - Loja de iPhones em Governador Valadares" 
              className="w-10 h-10 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-primary">AppleDroidGV</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">12 anos de confiança</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Menu principal">
            {navigationItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="text-foreground hover:text-primary transition-colors focus:text-primary"
                aria-label={`Ir para seção ${item.label}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* WhatsApp Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="whatsapp" 
              size="lg"
              asChild
              className="hidden sm:flex gap-2"
            >
              <a 
                href={links.general} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Falar no WhatsApp da AppleDroidGV"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                WhatsApp
              </a>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={handleMenuToggle}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          id="mobile-menu"
          className={`md:hidden bg-background border-b border-border shadow-card transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'max-h-screen opacity-100 visible' 
              : 'max-h-0 opacity-0 invisible overflow-hidden'
          }`}
          role="navigation"
          aria-label="Menu mobile"
        >
          <nav className="container mx-auto container-spacing py-4 space-y-4">
            {navigationItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="block text-foreground hover:text-primary transition-colors py-2 focus:text-primary"
                onClick={handleMenuItemClick}
                aria-label={`Ir para seção ${item.label}`}
              >
                {item.label}
              </a>
            ))}
            <Button 
              variant="whatsapp" 
              className="w-full mt-4 gap-2"
              asChild
            >
              <a 
                href={links.general} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Falar no WhatsApp da AppleDroidGV"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                Falar no WhatsApp
              </a>
            </Button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={handleMenuToggle}
          aria-label="Fechar menu"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleMenuToggle();
            }
          }}
        />
      )}
    </>
  );
};

export default Header;