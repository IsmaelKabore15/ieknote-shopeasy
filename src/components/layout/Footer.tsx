import { GraduationCap, Phone, MapPin, Clock, Facebook, Instagram, Heart, Send, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary to-secondary opacity-95" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl" />
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-white">Librairie I.E.K</h3>
                  <p className="text-sm text-white/70 flex items-center gap-1">
                    <Sparkles className="h-3 w-3 text-accent" />
                    L'excellence scolaire
                  </p>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed">
                Depuis des années, nous accompagnons les étudiants et leurs familles 
                en proposant des fournitures scolaires de qualité supérieure à prix abordables.
              </p>
              <div className="flex space-x-3">
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover:scale-110"
                  asChild
                >
                  <a href="#" aria-label="Facebook">
                    <Facebook className="h-5 w-5" />
                  </a>
                </Button>
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover:scale-110"
                  asChild
                >
                  <a href="#" aria-label="Instagram">
                    <Instagram className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-heading font-semibold text-white flex items-center gap-2">
                <span className="w-8 h-0.5 bg-accent rounded-full" />
                Liens rapides
              </h4>
              <nav className="flex flex-col space-y-3">
                {[
                  { name: "Accueil", href: "/" },
                  { name: "Nos Produits", href: "/produits" },
                  { name: "À propos", href: "/a-propos" },
                  { name: "FAQ", href: "/faq" },
                  { name: "Contact", href: "/contact" },
                ].map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-white/70 hover:text-white transition-all duration-300 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-accent" />
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-heading font-semibold text-white flex items-center gap-2">
                <span className="w-8 h-0.5 bg-accent rounded-full" />
                Contact
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                    <Phone className="h-5 w-5 text-white/80" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">WhatsApp / Appel</p>
                    <p className="font-semibold text-white">07 57 60 88 18</p>
                    <p className="font-semibold text-white">05 55 78 29 44</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 group">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                    <MapPin className="h-5 w-5 text-white/80" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Adresse</p>
                    <p className="font-semibold text-white">Abidjan, Côte d'Ivoire</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 group">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                    <Clock className="h-5 w-5 text-white/80" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Horaires</p>
                    <p className="font-semibold text-white">Lun - Sam: 8h - 18h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter / Quick Order */}
            <div className="space-y-6">
              <h4 className="text-lg font-heading font-semibold text-white flex items-center gap-2">
                <span className="w-8 h-0.5 bg-accent rounded-full" />
                Commander rapidement
              </h4>
              <p className="text-white/70 text-sm">
                Envoyez-nous un message avec vos besoins et nous vous 
                préparerons un devis personnalisé.
              </p>
              <Button 
                className="w-full btn-gold rounded-xl font-semibold"
                asChild
              >
                <a href="https://wa.me/2250757608818?text=Bonjour, je souhaite commander des fournitures scolaires" target="_blank" rel="noopener noreferrer">
                  <Phone className="h-4 w-4 mr-2" />
                  Commander via WhatsApp
                  <Sparkles className="h-4 w-4 ml-2" />
                </a>
              </Button>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <p className="text-white/60 text-xs flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Réponse garantie en moins de 2h
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-white/60 text-center md:text-left">
                © {currentYear} Librairie I.E.K. Tous droits réservés.
              </p>
              <p className="text-sm text-white/60 flex items-center gap-1">
                Fait avec <Heart className="h-4 w-4 text-accent fill-accent" /> en Côte d'Ivoire
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
