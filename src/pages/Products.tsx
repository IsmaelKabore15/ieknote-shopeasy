import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "@/components/ui/product-card";
import { Search, Filter, GraduationCap, BookOpen, Pen } from "lucide-react";
import { Input } from "@/components/ui/input";
import schoolKits from "@/assets/school-kits.jpg";
import schoolSupplies from "@/assets/school-supplies.jpg";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleOrder = (product: string) => {
    const message = `Bonjour, je souhaite commander : ${product}. Pouvez-vous me donner plus d'informations ?`;
    window.open(`https://wa.me/2250757608818?text=${encodeURIComponent(message)}`, '_blank');
  };

  const kits = [
    {
      title: "Kit Scolaire 6ème/5ème",
      price: "8 100 FCFA",
      originalPrice: "9 500 FCFA",
      description: "Cahiers 200p (6 unités), stylos Bic bleu/noir (4 unités), crayons HB (3 unités), gommes (2 unités), règles 30cm, ensemble géométrique complet, couvertures plastiques",
      image: schoolKits,
      badge: "Populaire",
      onOrder: () => handleOrder("Kit Scolaire 6ème/5ème")
    },
    {
      title: "Kit Scolaire 3ème/4ème", 
      price: "10 000 FCFA",
      originalPrice: "11 800 FCFA",
      description: "Cahiers 300p (8 unités), fournitures complètes, calculatrice standard, compas de qualité, équerres 45° et 30°, stylos de couleur, surligneurs",
      image: schoolKits,
      badge: "Recommandé",
      onOrder: () => handleOrder("Kit Scolaire 3ème/4ème")
    },
    {
      title: "Kit Scolaire 2nde/Tle",
      price: "13 000 FCFA", 
      originalPrice: "15 200 FCFA",
      description: "Cahiers de recherche (4 unités), cahiers TP sciences (6 unités), fournitures premium, calculatrice scientifique, matériel de dessin technique complet",
      image: schoolKits,
      badge: "Complet",
      onOrder: () => handleOrder("Kit Scolaire 2nde/Tle")
    }
  ];

  const cahiers = [
    {
      title: "Cahier 200 pages",
      price: "750 FCFA",
      description: "Cahier grand format, papier de qualité, reliure solide. Idéal pour les cours quotidiens.",
      image: schoolSupplies,
      onOrder: () => handleOrder("Cahier 200 pages")
    },
    {
      title: "Cahier 300 pages",
      price: "950 FCFA",
      description: "Cahier extra-large, parfait pour les matières principales et les cours intensifs.",
      image: schoolSupplies,
      onOrder: () => handleOrder("Cahier 300 pages")
    },
    {
      title: "Cahier TP",
      price: "850 FCFA",
      description: "Cahier spécialisé pour travaux pratiques en sciences, avec pages quadrillées.",
      image: schoolSupplies,
      onOrder: () => handleOrder("Cahier TP")
    },
    {
      title: "Cahier Étudiant",
      price: "1 200 FCFA",
      description: "Cahier premium pour étudiants, format A4, spirales métalliques.",
      image: schoolSupplies,
      onOrder: () => handleOrder("Cahier Étudiant")
    },
    {
      title: "Cahier de Recherche",
      price: "1 500 FCFA",
      description: "Cahier spécialisé pour travaux de recherche, papier épais, format universitaire.",
      image: schoolSupplies,
      badge: "Premium",
      onOrder: () => handleOrder("Cahier de Recherche")
    }
  ];

  const fournitures = [
    {
      title: "Pack Stylos Bic (10 unités)",
      price: "2 500 FCFA",
      description: "Stylos Bic bleu et noir, encre de qualité supérieure, écriture fluide.",
      image: schoolSupplies,
      onOrder: () => handleOrder("Pack Stylos Bic (10 unités)")
    },
    {
      title: "Set de Crayons HB (12 unités)",
      price: "1 800 FCFA",
      description: "Crayons à papier de qualité, mine HB, parfaits pour les croquis et l'écriture.",
      image: schoolSupplies,
      onOrder: () => handleOrder("Set de Crayons HB (12 unités)")
    },
    {
      title: "Ensemble Géométrique Complet",
      price: "3 500 FCFA",
      description: "Compas, équerres 45° et 30°, règle graduée, rapporteur. Kit professionnel.",
      image: schoolSupplies,
      badge: "Qualité Pro",
      onOrder: () => handleOrder("Ensemble Géométrique Complet")
    },
    {
      title: "Pack Gommes et Correcteurs",
      price: "1 200 FCFA",
      description: "Gommes blanches, correcteurs liquides et en stylo. Parfait pour les corrections.",
      image: schoolSupplies,
      onOrder: () => handleOrder("Pack Gommes et Correcteurs")
    },
    {
      title: "Couvertures Plastiques (20 unités)",
      price: "2 000 FCFA",
      description: "Protection pour cahiers et livres, transparentes et résistantes.",
      image: schoolSupplies,
      onOrder: () => handleOrder("Couvertures Plastiques (20 unités)")
    },
    {
      title: "Calculatrice Scientifique",
      price: "8 500 FCFA",
      description: "Calculatrice avancée pour lycéens, fonctions scientifiques complètes.",
      image: schoolSupplies,
      badge: "Lycée",
      onOrder: () => handleOrder("Calculatrice Scientifique")
    }
  ];

  const categories = [
    { id: "kits", label: "Kits Scolaires", icon: GraduationCap, products: kits },
    { id: "cahiers", label: "Cahiers", icon: BookOpen, products: cahiers },
    { id: "fournitures", label: "Fournitures", icon: Pen, products: fournitures }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <Badge className="bg-accent text-accent-foreground">
              📚 Catalogue complet
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              Nos Produits
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Découvrez notre gamme complète de fournitures scolaires de qualité, 
              adaptées à tous les niveaux d'études.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Rechercher un produit..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Filter className="h-4 w-4" />
              <span>{kits.length + cahiers.length + fournitures.length} produits disponibles</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="kits" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <TabsTrigger key={category.id} value={category.id} className="flex items-center space-x-2">
                    <IconComponent className="h-4 w-4" />
                    <span className="hidden sm:inline">{category.label}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-8">
                <div className="text-center space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">
                    {category.label}
                  </h2>
                  <p className="text-muted-foreground">
                    {category.id === "kits" && "Kits complets pour une année scolaire réussie"}
                    {category.id === "cahiers" && "Cahiers de qualité pour tous vos cours"}
                    {category.id === "fournitures" && "Fournitures essentielles pour vos études"}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.products
                    .filter(product => 
                      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      product.description.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((product, index) => (
                      <ProductCard key={index} {...product} />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <Card className="bg-white/10 border-white/20 text-white">
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                Besoin d'aide pour choisir ?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-white/90">
                Notre équipe est là pour vous conseiller et préparer un kit personnalisé selon vos besoins.
              </p>
              <Button 
                size="lg" 
                className="bg-success hover:bg-success/90 text-success-foreground"
                asChild
              >
                <a href="https://wa.me/2250757608818" target="_blank" rel="noopener noreferrer">
                  Contactez-nous via WhatsApp
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Products;