import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const PersonalWordSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto container-spacing">
        {/* Section Header */}
        <header className="text-center mb-8 md:mb-12">
          <h2 className="text-primary mb-4">
            A Minha Palavra
          </h2>
        </header>

        {/* Personal Message Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-elegant border-accent/20">
            <CardContent className="p-6 md:p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-subtle border-4 border-accent/20 flex items-center justify-center overflow-hidden">
                    {/* Placeholder for Daniel's photo */}
                    <div className="w-full h-full bg-secondary/50 rounded-full flex items-center justify-center">
                      <span className="text-2xl md:text-3xl font-bold text-primary">DS</span>
                    </div>
                  </div>
                </div>

                {/* Message Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="relative">
                    <Quote className="w-8 h-8 text-accent/30 absolute -top-2 -left-2 hidden lg:block" aria-hidden="true" />
                    
                    <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
                      "O meu nome é Daniel. Há 12 anos, fundei a AppleDroidGV com uma promessa: tratar o dispositivo de cada cliente com o mesmo respeito e precisão técnica que eu teria com o meu. Essa promessa continua de pé. A sua confiança é o meu bem mais valioso."
                    </blockquote>
                    
                    <footer className="text-right lg:text-left">
                      <cite className="not-italic">
                        <span className="font-bold text-primary block">Daniel Santiago</span>
                        <span className="text-accent text-sm">Especialista e Fundador</span>
                      </cite>
                    </footer>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PersonalWordSection;