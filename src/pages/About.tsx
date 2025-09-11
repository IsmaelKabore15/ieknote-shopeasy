import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Users, 
  Award, 
  Heart, 
  Target, 
  Clock,
  MapPin,
  Phone
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Qualité",
      description: "Nous sélectionnons uniquement des fournitures de qualité supérieure pour garantir votre satisfaction."
    },
    {
      icon: Users,
      title: "Proximité",
      description: "Une équipe à votre écoute pour vous conseiller et vous accompagner dans vos achats."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Nous croyons en l'éducation et mettons notre passion au service de votre réussite."
    },
    {
      icon: Target,
      title: "Accessibilité",
      description: "Des prix justes et accessibles pour que chaque étudiant puisse avoir les meilleures fournitures."
    }
  ];

  const stats = [
    { number: "500+", label: "Familles satisfaites" },
    { number: "5", label: "Années d'expérience" },
    { number: "1000+", label: "Kits vendus" },
    { number: "98%", label: "Taux de satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <Badge className="bg-accent text-accent-foreground">
              🏪 Notre histoire
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              À propos de Librairie I.E.K
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Votre partenaire de confiance pour des fournitures scolaires de qualité 
              depuis plusieurs années en Côte d'Ivoire.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="bg-secondary/20 text-secondary">
                  🎯 Notre mission
                </Badge>
                <h2 className="text-3xl font-bold text-foreground">
                  Accompagner la réussite de chaque étudiant
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Chez Librairie I.E.K, nous croyons que chaque étudiant mérite d'avoir accès 
                  aux meilleures fournitures scolaires pour réussir ses études. C'est pourquoi 
                  nous nous engageons à proposer des produits de qualité à des prix accessibles.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  Notre engagement envers vous :
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Fournitures sélectionnées avec soin</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Prix justes et transparents</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Service client personnalisé</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Livraison rapide et soignée</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                    <GraduationCap className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Votre réussite, notre priorité
                  </h3>
                  <p className="text-muted-foreground">
                    Nous mettons notre expertise au service de votre parcours éducatif, 
                    en vous fournissant tout le nécessaire pour exceller dans vos études.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Nos chiffres parlent pour nous
            </h2>
            <p className="text-muted-foreground">
              La confiance de nos clients est notre plus belle récompense
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/20 text-accent">
              💎 Nos valeurs
            </Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ce qui nous guide au quotidien
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nos valeurs fondamentales guident chacune de nos actions et nous permettent 
              de vous offrir le meilleur service possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-card transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Nous sommes là pour vous accompagner
            </h2>
            <p className="text-xl opacity-90">
              Une question ? Un conseil ? N'hésitez pas à nous contacter !
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <CardTitle>Contactez-nous</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-medium">07 57 60 88 18</p>
                <p className="font-medium">05 55 78 29 44</p>
                <p className="text-sm opacity-80">WhatsApp & Appels</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <CardTitle>Notre localisation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-medium">Abidjan</p>
                <p className="font-medium">Côte d'Ivoire</p>
                <p className="text-sm opacity-80">Livraison dans toute la ville</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6" />
                </div>
                <CardTitle>Horaires</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-medium">Lun - Sam</p>
                <p className="font-medium">8h00 - 18h00</p>
                <p className="text-sm opacity-80">Service client disponible</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-success hover:bg-success/90 text-success-foreground"
              asChild
            >
              <a href="https://wa.me/2250757608818" target="_blank" rel="noopener noreferrer">
                Discutons de vos besoins
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;