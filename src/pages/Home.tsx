import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProductCard from "@/components/ui/product-card";
import WhatsAppButton, { PhoneButton, whatsappMessages } from "@/components/ui/whatsapp-button";
import { ArrowRight, CheckCircle, Star, Users, Package, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-school-supplies.jpg";
import schoolKits from "@/assets/school-kits.jpg";

const Home = () => {
  const handleOrder = (kit: string) => {
    const message = `Bonjour, je souhaite commander le ${kit}. Pouvez-vous me donner plus d'informations ?`;
    window.open(`https://wa.me/2250757608818?text=${encodeURIComponent(message)}`, '_blank');
  };

  const kits = [
    {
      title: "Kit Scolaire 6ème/5ème",
      price: "8 100 FCFA",
      originalPrice: "9 500 FCFA",
      description: "Cahiers 200p, stylos Bic, crayons, gommes, règles, ensemble géométrique, couvertures plastiques",
      image: schoolKits,
      badge: "Populaire",
      onOrder: () => {
        const whatsappUrl = `https://wa.me/2250757608818?text=${encodeURIComponent(whatsappMessages.kit6e5e)}`;
        window.open(whatsappUrl, "_blank");
      }
    },
    {
      title: "Kit Scolaire 3ème/4ème", 
      price: "10 000 FCFA",
      originalPrice: "11 800 FCFA",
      description: "Cahiers 300p, fournitures complètes, calculatrice, compas, équerres, stylos de qualité",
      image: schoolKits,
      badge: "Recommandé",
      onOrder: () => {
        const whatsappUrl = `https://wa.me/2250757608818?text=${encodeURIComponent(whatsappMessages.kit3e4e)}`;
        window.open(whatsappUrl, "_blank");
      }
    },
    {
      title: "Kit Scolaire 2nde/Tle",
      price: "13 000 FCFA", 
      originalPrice: "15 200 FCFA",
      description: "Cahiers de recherche, cahiers TP, fournitures premium, calculatrice scientifique",
      image: schoolKits,
      badge: "Complet",
      onOrder: () => {
        const whatsappUrl = `https://wa.me/2250757608818?text=${encodeURIComponent(whatsappMessages.kit2ndeTle)}`;
        window.open(whatsappUrl, "_blank");
      }
    }
  ];

  const features = [
    {
      icon: CheckCircle,
      title: "Qualité garantie",
      description: "Fournitures sélectionnées pour leur durabilité"
    },
    {
      icon: Package,
      title: "Kits complets",
      description: "Tout ce qu'il faut pour une année scolaire"
    },
    {
      icon: Clock,
      title: "Livraison rapide",
      description: "Commande traitée et livrée rapidement"
    },
    {
      icon: Users,
      title: "Service client",
      description: "Accompagnement personnalisé via WhatsApp"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90" />
        <div className="relative container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <Badge className="bg-accent text-accent-foreground">
                  🎒 Rentrée 2024-2025
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Préparez votre{" "}
                  <span className="text-accent">rentrée</span>{" "}
                  avec nous
                </h1>
                <p className="text-xl text-white/90 max-w-lg">
                  Découvrez nos kits scolaires complets et nos fournitures de qualité 
                  à prix abordables. Tout pour réussir votre année scolaire !
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppButton 
                  variant="hero"
                  message={whatsappMessages.general}
                >
                  🛒 Commander maintenant
                </WhatsAppButton>
                <PhoneButton variant="hero" />
              </div>
              
              <div className="flex items-center space-x-4 text-white/80">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-warning text-warning" />
                  <span className="text-sm">4.9/5</span>
                </div>
                <span className="text-sm">500+ familles satisfaites</span>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Fournitures scolaires de qualité"
                className="w-full rounded-2xl shadow-strong"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Pourquoi choisir Librairie I.E.K ?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Depuis des années, nous accompagnons les étudiants avec des fournitures 
              de qualité et un service personnalisé.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Kits Scolaires Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/20 text-secondary">
              🎯 Nos bestsellers
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Kits Scolaires 2024-2025
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Des kits complets adaptés à chaque niveau, avec tout le nécessaire 
              pour une année scolaire réussie.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kits.map((kit, index) => (
              <ProductCard key={index} {...kit} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline"
              asChild
            >
              <Link to="/produits">
                Voir tous nos produits
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-success to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à commander votre kit scolaire ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contactez-nous via WhatsApp pour un devis personnalisé et une livraison rapide !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton 
              variant="default"
              message={whatsappMessages.general}
              className="bg-white text-success hover:bg-white/90 text-lg px-8 py-3"
            >
              🛒 Commander sur WhatsApp
            </WhatsAppButton>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open("tel:+2250757608818", "_self")}
              className="border-white text-white hover:bg-white hover:text-success text-lg px-8 py-3"
            >
              📞 Appeler directement
            </Button>
          </div>
        </div>
      </section>

      {/* Boutons flottants */}
      <WhatsAppButton variant="floating" message={whatsappMessages.general} />
      <PhoneButton variant="floating" />
    </div>
  );
};

export default Home;