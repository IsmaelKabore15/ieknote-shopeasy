import { GraduationCap, Phone, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-white/10 p-2 rounded-lg">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Librairie I.E.K</h3>
                <p className="text-sm opacity-90">Votre partenaire éducatif</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Depuis des années, nous accompagnons les étudiants et leurs familles 
              en proposant des fournitures scolaires de qualité à prix abordables.
            </p>
            <div className="flex space-x-3">
              <Button 
                size="sm" 
                variant="ghost" 
                className="text-primary-foreground hover:bg-white/10 p-2"
                asChild
              >
                <a href="#" aria-label="Facebook">
                  <Facebook className="h-4 w-4" />
                </a>
              </Button>
              <Button 
                size="sm" 
                variant="ghost" 
                className="text-primary-foreground hover:bg-white/10 p-2"
                asChild
              >
                <a href="#" aria-label="Instagram">
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 opacity-70" />
                <div>
                  <p className="text-sm">WhatsApp / Appel</p>
                  <p className="font-medium">07 57 60 88 18</p>
                  <p className="font-medium">05 55 78 29 44</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 opacity-70" />
                <div>
                  <p className="text-sm">Adresse</p>
                  <p className="font-medium">Abidjan, Côte d'Ivoire</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 opacity-70" />
                <div>
                  <p className="text-sm">Horaires</p>
                  <p className="font-medium">Lun - Sam: 8h - 18h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Commander rapidement</h4>
            <div className="space-y-3">
              <Button 
                className="w-full bg-success hover:bg-success/90 text-success-foreground"
                asChild
              >
                <a href="https://wa.me/2250757608818?text=Bonjour, je souhaite commander un kit scolaire" target="_blank" rel="noopener noreferrer">
                  <Phone className="h-4 w-4 mr-2" />
                  Commander via WhatsApp
                </a>
              </Button>
              <p className="text-xs opacity-80">
                Envoyez-nous un message avec vos besoins et nous vous 
                préparerons un devis personnalisé rapidement.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-sm opacity-70">
            © 2024 Librairie I.E.K. Tous droits réservés. | Fournitures scolaires de qualité
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;