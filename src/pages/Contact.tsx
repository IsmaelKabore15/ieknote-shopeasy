import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import WhatsAppButton, { PhoneButton, whatsappMessages } from "@/components/ui/whatsapp-button";
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Mail,
  Send,
  CheckCircle
} from "lucide-react";

// Validation schema with zod
const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(100, "Le nom ne peut pas dépasser 100 caractères"),
  phone: z
    .string()
    .trim()
    .regex(/^[+]?[0-9\s-]{8,20}$/, "Numéro de téléphone invalide (8-20 chiffres)"),
  message: z
    .string()
    .trim()
    .min(10, "Le message doit contenir au moins 10 caractères")
    .max(1000, "Le message ne peut pas dépasser 1000 caractères"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate with zod
    const result = contactFormSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactFormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      
      toast({
        title: "Erreur de validation",
        description: "Veuillez corriger les erreurs dans le formulaire.",
        variant: "destructive"
      });
      return;
    }

    // Clear errors
    setErrors({});

    // Sanitize and encode data for WhatsApp URL
    const sanitizedName = result.data.name.replace(/[<>]/g, '');
    const sanitizedPhone = result.data.phone.replace(/[<>]/g, '');
    const sanitizedMessage = result.data.message.replace(/[<>]/g, '');

    const whatsappMessage = `Bonjour ! Je suis ${sanitizedName}.\n\nMon numéro : ${sanitizedPhone}\n\nMessage : ${sanitizedMessage}`;
    const whatsappUrl = `https://wa.me/2250757608818?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Message envoyé !",
      description: "Vous allez être redirigé vers WhatsApp.",
    });
    
    // Reset form
    setFormData({ name: "", phone: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const quickMessages = [
    "Je souhaite commander un kit scolaire",
    "J'aimerais avoir un devis personnalisé",
    "Quels sont vos délais de livraison ?",
    "Avez-vous des promotions en cours ?"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <Badge className="bg-accent text-accent-foreground">
              📞 Contactez-nous
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              Nous sommes là pour vous aider
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Une question ? Un conseil ? Besoin d'un devis personnalisé ? 
              Notre équipe est à votre disposition.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center hover:shadow-card transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-success" />
                </div>
                <CardTitle className="text-lg">WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Réponse rapide assurée</p>
                <div className="space-y-4">
                  <WhatsAppButton 
                    variant="default"
                    message={whatsappMessages.contact}
                    className="w-full"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp - 0757608818
                  </WhatsAppButton>
                  
                  <WhatsAppButton 
                    variant="default"
                    message={whatsappMessages.contact}
                    phone="2250555782944"
                    className="w-full bg-school-blue hover:bg-school-blue/90"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp - 0555782944
                  </WhatsAppButton>

                  <div className="flex gap-3">
                    <PhoneButton 
                      variant="default"
                      phone="0757608818"
                      className="flex-1"
                    />
                    <PhoneButton 
                      variant="default"
                      phone="0555782944"
                      className="flex-1"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-card transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Téléphone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">07 57 60 88 18</p>
                <p className="text-muted-foreground mb-4">05 55 78 29 44</p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  asChild
                >
                  <a href="tel:+2250757608818">
                    Appeler maintenant
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-card transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-lg">Localisation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Abidjan, Côte d'Ivoire
                </p>
                <Button variant="outline" className="w-full" disabled>
                  Livraison disponible
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-card transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-lg">Horaires</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">Lun - Sam</p>
                <p className="text-muted-foreground mb-4">8h00 - 18h00</p>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm text-success">Ouvert</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Envoyez-nous un message
                </h2>
                <p className="text-muted-foreground">
                  Remplissez le formulaire ci-dessous et nous vous contacterons via WhatsApp.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Votre nom complet"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    minLength={2}
                    maxLength={100}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-sm text-destructive">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Numéro de téléphone *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Votre numéro WhatsApp"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    minLength={8}
                    maxLength={20}
                    pattern="[+]?[0-9\s-]{8,20}"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    className={errors.phone ? "border-destructive" : ""}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="text-sm text-destructive">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Décrivez vos besoins (10 caractères minimum)..."
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    minLength={10}
                    maxLength={1000}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-sm text-destructive">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-success hover:bg-success/90"
                  size="lg"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Envoyer via WhatsApp
                </Button>
              </form>

              <div className="text-sm text-muted-foreground">
                <p>* Champs obligatoires</p>
                <p className="mt-2">
                  En soumettant ce formulaire, vous serez redirigé vers WhatsApp 
                  avec votre message pré-rempli.
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Messages rapides
                </h3>
                <p className="text-muted-foreground mb-6">
                  Cliquez sur l'un des messages ci-dessous pour démarrer rapidement une conversation.
                </p>
                <div className="space-y-3">
                  {quickMessages.map((message, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start text-left h-auto p-4"
                      asChild
                    >
                      <a 
                        href={`https://wa.me/2250757608818?text=${encodeURIComponent(message)}`}
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                        {message}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>

              <Card className="bg-gradient-to-br from-accent/5 to-warning/5 border-accent/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span>Pourquoi nous choisir ?</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">Réponse rapide</p>
                      <p className="text-sm text-muted-foreground">
                        Nous répondons en moyenne dans l'heure
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">Conseil personnalisé</p>
                      <p className="text-sm text-muted-foreground">
                        Aide pour choisir les bonnes fournitures
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">Devis gratuit</p>
                      <p className="text-sm text-muted-foreground">
                        Estimation immédiate et sans engagement
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Questions fréquentes
            </h3>
            <p className="text-muted-foreground">
              Voici les questions que nos clients nous posent le plus souvent
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quels sont vos délais de livraison ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nous livrons généralement sous 24-48h à Abidjan. 
                  Pour les commandes urgentes, contactez-nous directement.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Puis-je personnaliser mon kit ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Absolument ! Nous pouvons adapter le contenu selon vos besoins spécifiques. 
                  Contactez-nous pour un devis personnalisé.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Acceptez-vous les paiements en plusieurs fois ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Oui, nous proposons des solutions de paiement flexibles. 
                  Discutons-en directement via WhatsApp.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Proposez-vous une garantie ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Toutes nos fournitures sont garanties. En cas de défaut, 
                  nous procédons à un échange immédiat.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center bg-gradient-to-r from-school-blue to-school-green p-8 rounded-lg text-white">
            <h3 className="text-2xl font-bold mb-4">Commandez dès maintenant !</h3>
            <p className="text-lg mb-6 opacity-90">
              Cliquez ci-dessous pour passer votre commande directement via WhatsApp
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton 
                variant="default"
                message={whatsappMessages.general}
                className="bg-white text-school-blue hover:bg-gray-100 text-lg px-8 py-3"
              >
                🛒 Passer commande
              </WhatsAppButton>
              <WhatsAppButton 
                variant="default"
                message={whatsappMessages.livraison}
                className="bg-white/20 text-white hover:bg-white/30 border border-white/20 text-lg px-8 py-3"
              >
                🚚 Info livraison
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      {/* Boutons flottants */}
      <WhatsAppButton variant="floating" message={whatsappMessages.contact} />
      <PhoneButton variant="floating" />
    </div>
  );
};

export default Contact;