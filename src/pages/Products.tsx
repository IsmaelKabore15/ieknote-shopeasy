import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "@/components/ui/product-card";
import WhatsAppButton, { whatsappMessages } from "@/components/ui/whatsapp-button";
import { Search, Filter, GraduationCap, BookOpen, Pen, ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { products, getProductsByCategory } from "@/data/products";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { totalItems } = useCart();

  const kits = getProductsByCategory("kits");
  const cahiers = getProductsByCategory("cahiers");
  const fournitures = getProductsByCategory("fournitures");

  const categories = [
    { id: "kits", label: "Kits Scolaires", icon: GraduationCap, products: kits },
    { id: "cahiers", label: "Cahiers", icon: BookOpen, products: cahiers },
    { id: "fournitures", label: "Fournitures", icon: Pen, products: fournitures }
  ];

  const filterProducts = (productList: typeof products) => {
    return productList.filter(product => 
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

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
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Filter className="h-4 w-4" />
                <span>{products.length} produits disponibles</span>
              </div>
              {totalItems > 0 && (
                <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link to="/panier">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Panier ({totalItems})
                  </Link>
                </Button>
              )}
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filterProducts(category.products).map((product) => (
                    <ProductCard 
                      key={product.id}
                      id={product.id}
                      title={product.title}
                      price={product.priceDisplay}
                      priceNumeric={product.price}
                      originalPrice={product.originalPrice}
                      description={product.description}
                      image={product.image}
                      badge={product.badge}
                    />
                  ))}
                </div>

                {filterProducts(category.products).length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">Aucun produit trouvé pour "{searchTerm}"</p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center bg-gradient-to-r from-primary/80 to-secondary/80 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Besoin d'aide pour choisir ?</h3>
            <p className="text-lg mb-6 opacity-90">Notre équipe est là pour vous conseiller !</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton 
                variant="default"
                message={whatsappMessages.general}
                className="bg-white text-primary hover:bg-gray-100"
              >
                💬 Discuter avec nous
              </WhatsAppButton>
              {totalItems > 0 && (
                <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link to="/panier">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Voir mon panier ({totalItems})
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Boutons flottants */}
      <WhatsAppButton variant="floating" message={whatsappMessages.general} />
    </div>
  );
};

export default Products;
