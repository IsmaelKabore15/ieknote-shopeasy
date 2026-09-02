import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Check, Sparkles, Truck } from "lucide-react";
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
  freeDelivery?: boolean;
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
  freeDelivery = false,
  onOrder,
  className = ""
}: ProductCardProps) => {

  const { addToCart } = useCart();
  const { toast } = useToast();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    if (!id || !priceNumeric) {
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
      title: "✨ Ajouté au panier !",
      description: `${title} a été ajouté à votre panier.`,
    });

    setTimeout(() => setIsAdded(false), 2000);
  };

  const discount = originalPrice 
    ? Math.round((1 - parseInt(price.replace(/\D/g, '')) / parseInt(originalPrice.replace(/\D/g, ''))) * 100)
    : 0;

  return (
    <div className={`group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-strong transition-all duration-500 hover:-translate-y-2 ${className}`}>
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {badge && (
            <Badge className="badge-premium text-xs">
              <Sparkles className="h-3 w-3 mr-1" />
              {badge}
            </Badge>
          )}
        </div>
        
        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute top-3 right-3 bg-destructive text-destructive-foreground px-2.5 py-1 rounded-full text-xs font-bold shadow-lg">
            -{discount}%
          </div>
        )}

        {/* Quick Add Button (appears on hover) */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <Button 
            onClick={handleAddToCart}
            className={`w-full rounded-xl font-semibold transition-all duration-300 ${
              isAdded 
                ? "bg-success hover:bg-success/90" 
                : "btn-gold"
            }`}
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
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-3.5 w-3.5 ${i < rating ? 'fill-accent text-accent' : 'text-muted-foreground/30'}`} 
            />
          ))}
          <span className="text-xs text-muted-foreground ml-1">({rating}.0)</span>
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-heading font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
        
        {/* Price */}
        <div className="flex items-baseline gap-2 pt-2">
          <span className="text-2xl font-bold text-gradient">{price}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {originalPrice}
            </span>
          )}
        </div>

        {/* Mobile Add Button */}
        <Button 
          onClick={handleAddToCart}
          className={`w-full rounded-xl font-semibold transition-all duration-300 lg:hidden ${
            isAdded 
              ? "bg-success hover:bg-success/90" 
              : "btn-gold"
          }`}
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
      </div>

      {/* Premium Border Effect */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-accent/30 transition-colors duration-300 pointer-events-none" />
    </div>
  );
};

export default ProductCard;
