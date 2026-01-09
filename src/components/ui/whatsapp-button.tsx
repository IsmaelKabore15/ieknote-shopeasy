import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  variant?: "default" | "floating" | "compact" | "hero";
  message?: string;
  phone?: string;
  className?: string;
  children?: React.ReactNode;
}

const WhatsAppButton = ({ 
  variant = "default", 
  message = "Bonjour ! Je viens du site Librairie I.E.K et j'aimerais avoir des informations sur vos kits scolaires.",
  phone = "2250757608818",
  className,
  children
}: WhatsAppButtonProps) => {
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const variants = {
    default: "bg-[#25D366] hover:bg-[#22C55E] text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300",
    floating: "fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#22C55E] text-white shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 rounded-full w-16 h-16 p-0",
    compact: "bg-[#25D366] hover:bg-[#22C55E] text-white shadow-md hover:shadow-lg transition-all duration-200",
    hero: "bg-gradient-to-r from-[#25D366] to-[#22C55E] hover:from-[#22C55E] hover:to-[#25D366] text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg px-8 py-4"
  };

  if (variant === "floating") {
    return (
      <Button
        onClick={handleWhatsAppClick}
        className={cn(variants.floating, className)}
        size="icon"
        aria-label="Contacter sur WhatsApp"
      >
        <MessageCircle className="h-8 w-8" />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
      </Button>
    );
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className={cn(variants[variant], className)}
      size={variant === "hero" ? "lg" : "default"}
    >
      <MessageCircle className="mr-2 h-5 w-5" />
      {children || "Commander sur WhatsApp"}
    </Button>
  );
};

// Composant bouton téléphone
export const PhoneButton = ({ 
  variant = "default", 
  phone = "0757608818",
  className 
}: Pick<WhatsAppButtonProps, "variant" | "className"> & { phone?: string }) => {
  const handlePhoneClick = () => {
    window.open(`tel:+225${phone}`, "_self");
  };

  const variants = {
    default: "bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300",
    floating: "fixed bottom-6 left-6 z-50 bg-gradient-to-br from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 rounded-full w-16 h-16 p-0 ring-4 ring-orange-200/50",
    compact: "bg-orange-500 hover:bg-orange-600 text-white shadow-md hover:shadow-lg transition-all duration-200",
    hero: "bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg px-8 py-4"
  };

  if (variant === "floating") {
    return (
      <Button
        onClick={handlePhoneClick}
        className={cn(variants.floating, className)}
        size="icon"
        aria-label="Appeler directement"
      >
        <Phone className="h-8 w-8" />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
      </Button>
    );
  }

  return (
    <Button
      onClick={handlePhoneClick}
      className={cn(variants[variant], className)}
      size={variant === "hero" ? "lg" : "default"}
    >
      <Phone className="mr-2 h-5 w-5" />
      Appeler maintenant
    </Button>
  );
};

// Messages prédéfinis pour différentes situations
export const whatsappMessages = {
  general: "Bonjour ! Je viens du site Librairie I.E.K et j'aimerais avoir des informations sur vos kits scolaires.",
  kit6e5e: "Bonjour ! Je viens du site Librairie I.E.K et je suis intéressé(e) par le kit scolaire 6e/5e à 8100F. Pouvez-vous me donner plus de détails ?",
  kit3e4e: "Bonjour ! Je viens du site Librairie I.E.K et je suis intéressé(e) par le kit scolaire 3e/4e à 10000F. Pouvez-vous me donner plus de détails ?",
  kit2ndeTle: "Bonjour ! Je viens du site Librairie I.E.K et je suis intéressé(e) par le kit scolaire 2nde/Tle à 13000F. Pouvez-vous me donner plus de détails ?",
  fournitures: "Bonjour ! Je viens du site Librairie I.E.K et j'aimerais acheter des fournitures scolaires à l'unité. Que proposez-vous ?",
  livraison: "Bonjour ! Je viens du site Librairie I.E.K et j'aimerais savoir comment fonctionne votre service de livraison.",
  prix: "Bonjour ! Je viens du site Librairie I.E.K et j'aimerais avoir plus d'informations sur vos prix.",
  contact: "Bonjour ! Je vous contacte depuis le site Librairie I.E.K. J'ai quelques questions à vous poser."
};

export default WhatsAppButton;