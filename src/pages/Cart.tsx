import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { 
  ShoppingCart, 
  Plus, 
  Minus, 
  Trash2, 
  ArrowLeft, 
  MessageCircle,
  CheckCircle,
  Package
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fr-FR").format(price) + " FCFA";
  };

  const generateWhatsAppMessage = () => {
    if (!user) return "";
    
    let message = `🛒 *COMMANDE - Librairie I.E.K*\n\n`;
    message += `👤 *Client:* ${user.name}\n`;
    message += `📧 *Email:* ${user.email}\n`;
    if (user.phone) message += `📱 *Téléphone:* ${user.phone}\n`;
    message += `\n📦 *Articles commandés:*\n`;
    message += `━━━━━━━━━━━━━━━━━━\n`;
    
    items.forEach((item, index) => {
      message += `${index + 1}. ${item.title}\n`;
      message += `   Qté: ${item.quantity} × ${formatPrice(item.price)}\n`;
      message += `   Sous-total: ${formatPrice(item.price * item.quantity)}\n\n`;
    });
    
    message += `━━━━━━━━━━━━━━━━━━\n`;
    message += `💰 *TOTAL: ${formatPrice(totalPrice)}*\n\n`;
    message += `Merci de confirmer ma commande ! 🙏`;
    
    return encodeURIComponent(message);
  };

  const handleOrder = () => {
    setShowConfirmDialog(true);
  };

  const confirmOrder = () => {
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/2250757608818?text=${message}`;
    
    // Ouvrir WhatsApp
    window.open(whatsappUrl, "_blank");
    
    // Vider le panier
    clearCart();
    
    toast({
      title: "Commande envoyée !",
      description: "Vous allez être redirigé vers WhatsApp pour finaliser votre commande.",
    });
    
    setShowConfirmDialog(false);
    navigate("/");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-muted/30">
        <div className="container mx-auto px-4 py-16">
          <Card className="max-w-lg mx-auto text-center shadow-card">
            <CardHeader className="space-y-4">
              <div className="mx-auto w-20 h-20 bg-muted rounded-full flex items-center justify-center">
                <ShoppingCart className="h-10 w-10 text-muted-foreground" />
              </div>
              <CardTitle className="text-2xl">Votre panier est vide</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Ajoutez des articles depuis notre catalogue pour les retrouver ici.
              </p>
              <Button asChild className="w-full">
                <Link to="/produits">
                  <Package className="mr-2 h-4 w-4" />
                  Voir nos produits
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild className="text-white hover:bg-white/20">
              <Link to="/produits">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <div>
              <Badge className="bg-accent text-accent-foreground mb-2">
                🛒 Panier
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold">
                Mon Panier ({totalItems} article{totalItems > 1 ? "s" : ""})
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <Card key={item.id} className="overflow-hidden shadow-soft hover:shadow-card transition-shadow">
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-32 h-32 bg-muted flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="flex-1 p-4 flex flex-col justify-between">
                      <div>
                        <h3 className="font-semibold text-lg text-foreground">{item.title}</h3>
                        <p className="text-primary font-bold text-lg mt-1">
                          {formatPrice(item.price)}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-10 text-center font-semibold">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <span className="font-bold text-foreground">
                            {formatPrice(item.price * item.quantity)}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-destructive hover:text-destructive hover:bg-destructive/10"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span>Récapitulatif</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span className="text-muted-foreground truncate flex-1 mr-2">
                          {item.title} × {item.quantity}
                        </span>
                        <span className="font-medium">{formatPrice(item.price * item.quantity)}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-lg">Total</span>
                    <span className="font-bold text-2xl text-primary">{formatPrice(totalPrice)}</span>
                  </div>
                  
                  <div className="bg-muted/50 rounded-lg p-3 text-sm text-muted-foreground">
                    <p className="flex items-center space-x-2">
                      <MessageCircle className="h-4 w-4" />
                      <span>Commande via WhatsApp</span>
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-3">
                  <Button 
                    className="w-full bg-success hover:bg-success/90 text-lg py-6"
                    onClick={handleOrder}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Commander ({formatPrice(totalPrice)})
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={clearCart}
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Vider le panier
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Confirmation Dialog */}
      <AlertDialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-success" />
              <span>Confirmer la commande</span>
            </AlertDialogTitle>
            <AlertDialogDescription className="space-y-4">
              <p>Vous êtes sur le point d'envoyer votre commande via WhatsApp.</p>
              <div className="bg-muted p-4 rounded-lg space-y-2">
                <p><strong>Client:</strong> {user?.name}</p>
                <p><strong>Articles:</strong> {totalItems}</p>
                <p><strong>Total:</strong> <span className="text-primary font-bold">{formatPrice(totalPrice)}</span></p>
              </div>
              <p className="text-sm">
                En cliquant sur "Confirmer", vous serez redirigé vers WhatsApp avec les détails de votre commande.
              </p>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Annuler</AlertDialogCancel>
            <AlertDialogAction onClick={confirmOrder} className="bg-success hover:bg-success/90">
              <MessageCircle className="mr-2 h-4 w-4" />
              Confirmer et envoyer
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Cart;
