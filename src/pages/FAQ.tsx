import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Truck, CreditCard, Package, Star } from "lucide-react";

const FAQ = () => {
  const faqItems = [
    {
      question: "Qui sommes-nous ?",
      answer: "Nous sommes Librairie I.E.K, une boutique spécialisée dans les fournitures scolaires. Notre mission est simple : rendre la rentrée scolaire facile, rapide et abordable pour tous. Chaque kit est soigneusement préparé pour que vos enfants commencent l'année dans les meilleures conditions.",
      icon: <Star className="h-5 w-5" />
    },
    {
      question: "Que trouve-t-on chez vous ?",
      answer: "• Des kits scolaires complets (du collège au lycée)\n• Des fournitures individuelles : cahiers, bics, ensembles géométriques, gommes, couvertures plastiques, etc.\n• Des produits fiables et durables, testés et validés par des milliers d'élèves chaque année.",
      icon: <Package className="h-5 w-5" />
    },
    {
      question: "Quels sont vos prix ?",
      answer: "Nous pratiquons des tarifs transparents et accessibles :\n• 6e / 5e → 8100 F\n• 3e / 4e → 10 000 F\n• 2nde / Tle → 13 000 F\n👉 La qualité au meilleur prix, sans frais cachés.",
      icon: <CreditCard className="h-5 w-5" />
    },
    {
      question: "Comment commander ?",
      answer: "C'est très simple ✅\n• Cliquez sur le bouton \"Commander sur WhatsApp\"\n• Envoyez-nous votre choix (kit ou fournitures à l'unité)\n• Et nous préparons immédiatement votre commande 📦",
      icon: <MessageCircle className="h-5 w-5" />
    },
    {
      question: "Quels moyens de paiement acceptez-vous ?",
      answer: "• Orange Money\n• Wave\n• MTN Mobile Money\n• Espèces à la livraison\n💳 Vous payez comme vous voulez, en toute sécurité.",
      icon: <CreditCard className="h-5 w-5" />
    },
    {
      question: "Livrez-vous à domicile ?",
      answer: "Oui 🚚 ! Nous livrons partout à Abidjan et ses environs.\n⏱ Livraison rapide, fiable, et possibilité de paiement à la livraison.",
      icon: <Truck className="h-5 w-5" />
    },
    {
      question: "Puis-je personnaliser ma commande ?",
      answer: "Bien sûr 🤝 ! Vous pouvez acheter :\n• Un kit complet déjà prêt 📦\n• Ou choisir vos fournitures une par une 🖊️📓",
      icon: <Package className="h-5 w-5" />
    },
    {
      question: "Vos fournitures sont-elles de bonne qualité ?",
      answer: "Oui ✅ ! Nous sélectionnons uniquement des produits durables et résistants pour accompagner vos enfants toute l'année scolaire.",
      icon: <Star className="h-5 w-5" />
    },
    {
      question: "Comment vous contacter ?",
      answer: "📲 WhatsApp & Appels :\n• 0757608818\n• 0555782944\n\nToujours disponibles pour répondre à vos questions.",
      icon: <Phone className="h-5 w-5" />
    },
    {
      question: "Pourquoi choisir Librairie I.E.K ?",
      answer: "• Prix imbattables 💰\n• Kits complets prêts à l'emploi 🎒\n• Livraison rapide 🚀\n• Commande ultra simple via WhatsApp 📲\n• Service client disponible 24/7 💬\n\n👉 Chez nous, préparer la rentrée devient un plaisir, pas un stress !",
      icon: <Star className="h-5 w-5" />
    }
  ];

  const handleWhatsAppContact = () => {
    window.open("https://wa.me/2250757608818", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-school-blue/5 to-school-green/5">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-r from-school-blue to-school-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            📚 FAQ – Librairie I.E.K
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Toutes les réponses à vos questions
          </p>
          <Badge variant="secondary" className="text-lg px-6 py-2 bg-white/20 text-white border-white/30">
            Service client 24/7
          </Badge>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <Card key={index} className="border-l-4 border-l-school-orange hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-school-blue">
                    <div className="p-2 bg-school-orange/10 rounded-full text-school-orange">
                      {item.icon}
                    </div>
                    <span className="text-lg">❓ {index + 1}. {item.question}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                    {item.answer}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="max-w-2xl mx-auto mt-16 text-center">
            <div className="bg-gradient-to-r from-school-orange to-school-yellow p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">
                Une question non résolue ?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Notre équipe est là pour vous aider !
              </p>
              <Button 
                onClick={handleWhatsAppContact}
                size="lg" 
                className="bg-white text-school-blue hover:bg-gray-100"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Contactez-nous sur WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;