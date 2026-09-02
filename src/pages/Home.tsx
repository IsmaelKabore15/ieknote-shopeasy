import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import WhatsAppButton, { PhoneButton, whatsappMessages } from "@/components/ui/whatsapp-button";
import ChatBot from "@/components/ui/chat-bot";
import { ArrowRight, CheckCircle, Star, Users, Package, Clock, Sparkles, ShoppingBag, Truck, Shield, Award, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-school-supplies.jpg";
import kit6e5eImg from "@/assets/kits/cahier-200p.jpg";
import kit4eImg from "@/assets/kits/cahier-300p.jpg";
import kit3eImg from "@/assets/kits/lot-cahiers.jpg";
import kitLyceeImg from "@/assets/kits/cahier-etudiant.jpg";

const orderKit = (message: string) => () => {
  window.open(`https://wa.me/2250757608818?text=${encodeURIComponent(message)}`, "_blank");
};

const Home = () => {
  const kits = [
    {
      title: "Kit Scolaire 6ème/5ème",
      price: "9 000 FCFA",
      originalPrice: "10 500 FCFA",
      description: "Cahiers Privilège & Original 200p, cahier EPS 100p, stylos Bic, crayons, gommes, règle 30cm, ensemble géométrique, couvertures plastiques",
      image: kit6e5eImg,
      badge: "Populaire",
      color: "from-blue-500 to-indigo-600",
      onOrder: orderKit(whatsappMessages.kit6e5e)
    },
    {
      title: "Kit Scolaire 4ème",
      price: "10 500 FCFA",
      originalPrice: "12 000 FCFA",
      description: "Cahiers Privilège & Original 300p, cahier EPS 100p, cahier TP, stylos Bic, compas, équerres 45° et 30°, surligneurs, couvertures plastiques",
      image: kit4eImg,
      badge: "Recommandé",
      color: "from-emerald-500 to-teal-600",
      onOrder: orderKit(whatsappMessages.kit4e)
    },
    {
      title: "Kit Scolaire 3ème",
      price: "12 000 FCFA",
      originalPrice: "13 800 FCFA",
      description: "Cahiers Privilège & Original 300p, cahier EPS 100p, cahiers TP sciences, calculatrice, ensemble géométrique complet — spécial préparation BEPC",
      image: kit3eImg,
      badge: "Spécial BEPC",
      color: "from-purple-500 to-pink-600",
      onOrder: orderKit(whatsappMessages.kit3e)
    },
    {
      title: "Kit Lycée (2nde/1ère/Tle)",
      price: "13 000 FCFA",
      originalPrice: "15 200 FCFA",
      description: "Cahiers Privilège & Original 300p, cahiers de recherche, cahiers TP sciences, cahier EPS 100p, calculatrice scientifique, dessin technique",
      image: kitLyceeImg,
      badge: "Complet",
      color: "from-amber-500 to-orange-600",
      onOrder: orderKit(whatsappMessages.kitLycee)
    }
  ];


  const features = [
    {
      icon: Shield,
      title: "Qualité garantie",
      description: "Produits sélectionnés avec soin pour leur durabilité",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Package,
      title: "Large catalogue",
      description: "Cahiers, stylos, livres, sacs, calculatrices et plus",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Truck,
      title: "Livraison express",
      description: "Commandes traitées et livrées rapidement",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Support dédié",
      description: "Équipe disponible au 0757608818",
      color: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { number: "500+", label: "Clients satisfaits" },
    { number: "1000+", label: "Commandes livrées" },
    { number: "50+", label: "Produits disponibles" },
    { number: "2h", label: "Temps de réponse" }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center hero-gradient pt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        </div>

        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="text-white space-y-8 animate-fade-in">
              <div className="space-y-6">
                <Badge className="badge-premium inline-flex items-center gap-2 animate-bounce-subtle">
                  <Sparkles className="h-4 w-4" />
                  Nouvelle Collection 2024-2025
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight">
                  Tout pour la{" "}
                  <span className="relative">
                    <span className="text-gradient-gold">réussite</span>
                    <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                      <path d="M2 10C50 2 150 2 198 10" stroke="hsl(45 100% 55%)" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                  </span>{" "}
                  scolaire
                </h1>
                <p className="text-xl md:text-2xl text-white/90 max-w-xl leading-relaxed font-light">
                  Cahiers, stylos, sacs, livres et bien plus ! Achetez facilement vos fournitures scolaires en ligne.{" "}
                  <span className="font-medium text-accent">Qualité garantie, prix abordables.</span>
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppButton 
                  variant="hero"
                  message={whatsappMessages.general}
                  className="btn-gold text-lg px-8 py-4 rounded-xl font-bold shadow-gold hover:shadow-2xl transition-all duration-300"
                >
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Commander maintenant
                </WhatsAppButton>
                <Button 
                  variant="outline" 
                  size="lg"
                  asChild
                  className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary text-lg px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                >
                  <Link to="/produits">
                    Voir le catalogue
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <span className="text-sm font-medium">4.9/5</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Award className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium">500+ familles satisfaites</span>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative animate-slide-in-right">
              <div className="relative z-10">
                <img 
                  src={heroImage} 
                  alt="Fournitures scolaires de qualité"
                  className="w-full rounded-3xl shadow-strong"
                />
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-card animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                      <Truck className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">Livraison rapide</p>
                      <p className="text-sm text-muted-foreground">Partout à Abidjan</p>
                    </div>
                  </div>
                </div>
                {/* Price Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-accent to-warning rounded-2xl p-4 shadow-gold animate-float" style={{ animationDelay: "0.5s" }}>
                  <p className="text-xs font-medium text-accent-foreground/80">À partir de</p>
                  <p className="text-2xl font-bold text-accent-foreground">500 F</p>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-accent/30 to-purple-500/30 rounded-full blur-3xl" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-16 z-10 pb-8">
        <div className="container mx-auto px-4">
          <div className="glass rounded-3xl p-8 shadow-strong">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl md:text-4xl font-heading font-bold text-gradient">{stat.number}</p>
                  <p className="text-muted-foreground font-medium mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge className="badge-premium inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              Pourquoi nous choisir
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
              Votre partenaire de{" "}
              <span className="text-gradient">confiance</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Rapidité, qualité, et service client disponible. 
              Nous rendons vos achats scolaires simples et fiables.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index} 
                  className="card-premium p-8 text-center space-y-4 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`mx-auto w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground">
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

      {/* Kits Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge className="badge-premium inline-flex items-center gap-2">
              <Award className="h-4 w-4" />
              Nos Kits Bestsellers
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
              Nos Kits{" "}
              <span className="text-gradient-gold">Scolaires</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Composés de cahiers <span className="font-semibold text-foreground">Privilège</span> et{" "}
              <span className="font-semibold text-foreground">Original</span>, avec le cahier EPS 100p inclus dans chaque kit.
            </p>
            <div className="flex justify-center pt-2">
              <div className="inline-flex items-center gap-3 rounded-2xl bg-success px-6 py-4 shadow-strong animate-pulse">
                <Truck className="h-7 w-7 text-success-foreground" />
                <span className="text-lg md:text-2xl font-heading font-bold text-success-foreground uppercase tracking-wide">
                  Livraison 100% gratuite
                </span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {kits.map((kit, index) => (
              <div 
                key={index} 
                className="group relative bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-strong transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-white">
                  <img 
                    src={kit.image} 
                    alt={`${kit.title} — cahiers Privilège et Original`}
                    className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <Badge className="absolute top-4 left-4 badge-premium">
                    {kit.badge}
                  </Badge>
                  {/* Discount Badge */}
                  <div className="absolute top-4 right-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-bold">
                    -{Math.round((1 - parseInt(kit.price.replace(/\D/g, '')) / parseInt(kit.originalPrice.replace(/\D/g, ''))) * 100)}%
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-success py-2 text-center">
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-success-foreground uppercase tracking-wide">
                      <Truck className="h-4 w-4" />
                      Livraison gratuite
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-heading font-bold text-foreground">{kit.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-3">{kit.description}</p>
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <CheckCircle className="h-4 w-4 text-success" />
                    Cahier EPS 100p inclus
                  </div>
                  
                  <div className="flex items-baseline gap-3">
                    <span className="text-2xl font-bold text-gradient">{kit.price}</span>
                    <span className="text-muted-foreground line-through text-sm">{kit.originalPrice}</span>
                  </div>


                  <Button 
                    onClick={kit.onOrder}
                    className="w-full btn-gold rounded-xl font-semibold group-hover:shadow-gold transition-all duration-300"
                  >
                    Commander maintenant
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline"
              asChild
              className="rounded-xl px-8 font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Link to="/produits">
                Voir tous nos produits
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-8">
            <Badge className="badge-premium inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              Commandez maintenant
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
              Prêt à équiper votre enfant pour la{" "}
              <span className="text-gradient-gold">réussite</span> ?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Élèves, étudiants, parents et enseignants : achetez facilement en ligne. 
              Paiement sécurisé • Livraison rapide • Service client au 0757608818
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <WhatsAppButton 
                variant="default"
                message={whatsappMessages.general}
                className="btn-gold text-lg px-10 py-4 rounded-xl font-bold shadow-gold hover:shadow-2xl transition-all duration-300"
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
                Commander via WhatsApp
              </WhatsAppButton>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open("tel:+2250757608818", "_self")}
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary text-lg px-10 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                📞 Appeler le 0757608818
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Boutons flottants */}
      <WhatsAppButton variant="floating" message={whatsappMessages.general} />
      <PhoneButton variant="floating" />
      <ChatBot />
    </div>
  );
};

export default Home;
