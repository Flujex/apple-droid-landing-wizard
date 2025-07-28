import { Shield, Star, Award } from 'lucide-react';

const TrustBarSection = () => {
  const trustItems = [
    {
      icon: Award,
      title: "12 Anos de Mercado",
      description: "A experiência que garante sua tranquilidade"
    },
    {
      icon: Star,
      title: "4.9/5 em Avaliações",
      description: "A confiança de centenas de clientes de GV"
    },
    {
      icon: Shield,
      title: "Especialistas Certificados",
      description: "Técnica e precisão em cada reparo"
    }
  ];

  return (
    <section className="py-12 bg-secondary/50 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-3 gap-8 text-center">
          {trustItems.map((item, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-center sm:text-left gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-accent-foreground" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-primary text-sm sm:text-base">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBarSection;