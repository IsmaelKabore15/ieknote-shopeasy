import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Check } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

interface ProductCardProps {
  id?: string;
  title: string;
  price: string;
  priceNumeric?: number;
  originalPrice?: string;
  description: string;
  image: string;
  badge?: string;
  rating?: number;
  onOrder?: () => void;
  className?: string;
}

const ProductCard = ({
  id,
  title,
  price,
  priceNumeric,
  originalPrice,
  description,
  image,
  badge,
  rating = 5,
  onOrder,
  className = ""
}: ProductCardProps) => {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    if (!id || !priceNumeric) {
      // Fallback vers WhatsApp si pas d'ID ou de prix numérique
      if (onOrder) {
        onOrder();
      }
      return;
    }

    addToCart({
      id,
      title,
      price: priceNumeric,
      image
    });

    setIsAdded(true);
    toast({
      title: "Ajouté au panier !",
      description: `${title} a été ajouté à votre panier.`,
    });

    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <Card className={`group hover:shadow-card transition-all duration-300 hover:-translate-y-1 ${className}`}>
      <CardHeader className="relative p-0">
        <div className="aspect-[4/3] bg-muted rounded-t-lg overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        {badge && (
          <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
            {badge}
          </Badge>
        )}
      </CardHeader>
      
      <CardContent className="p-4 space-y-3">
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-3 w-3 ${i < rating ? 'fill-warning text-warning' : 'text-muted-foreground'}`} 
            />
          ))}
        </div>
        
        <CardTitle className="text-lg font-semibold text-foreground line-clamp-2">
          {title}
        </CardTitle>
        
        <p className="text-sm text-muted-foreground line-clamp-3">
          {description}
        </p>
        
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary">{price}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {originalPrice}
            </span>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={handleAddToCart}
          className={`w-full transition-all duration-300 ${
            isAdded 
              ? "bg-success hover:bg-success/90" 
              : "bg-primary hover:bg-primary/90"
          } text-primary-foreground`}
          size="sm"
        >
          {isAdded ? (
            <>
              <Check className="h-4 w-4 mr-2" />
              Ajouté !
            </>
          ) : (
            <>
              <ShoppingCart className="h-4 w-4 mr-2" />
              Ajouter au panier
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
