import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import WhatsAppButton, { whatsappMessages } from './whatsapp-button';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  actions?: Array<{
    label: string;
    action: () => void;
  }>;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [hasInteracted, setHasInteracted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Message de bienvenue affiché uniquement quand l'utilisateur ouvre le chat
  const showWelcomeMessage = () => {
    if (messages.length === 0) {
      addBotMessage(
        "👋 Bienvenue chez Librairie I.E.K ! Je suis là pour vous aider avec vos questions sur nos fournitures scolaires. Comment puis-je vous renseigner ?",
        [
          {
            label: "Voir les kits scolaires",
            action: () => addBotMessage(getKitsInfo())
          },
          {
            label: "Connaître les prix",
            action: () => addBotMessage(getPricesInfo())
          },
          {
            label: "Comment commander",
            action: () => addBotMessage(getOrderInfo())
          }
        ]
      );
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
    setHasInteracted(true);
    showWelcomeMessage();
  };

  const addBotMessage = (text: string, actions?: Array<{label: string, action: () => void}>) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: true,
      timestamp: new Date(),
      actions
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: false,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const getKitsInfo = () => {
    return `📚 Nos kits scolaires complets :

• **6e / 5e** → 8 100 FCFA
• **3e / 4e** → 10 000 FCFA  
• **2nde / Tle** → 13 000 FCFA

Chaque kit contient tout le nécessaire pour une année scolaire réussie ! 🎒`;
  };

  const getPricesInfo = () => {
    return `💰 **Nos tarifs détaillés :**

**Kits complets :**
• 6e/5e : 8 100 F
• 3e/4e : 10 000 F
• 2nde/Tle : 13 000 F

**Fournitures individuelles :**
• Cahier 100p : 500 F
• Cahier 200p : 900 F
• Cahier 300p : 1 800 F
• Bic : 100 F
• Crayon : 100 F
• Ensemble géométrie : 700-1000 F

Prix transparents, sans frais cachés ! ✅`;
  };

  const getOrderInfo = () => {
    return `📱 **Comment commander c'est simple :**

1. Cliquez sur "Commander sur WhatsApp"
2. Envoyez-nous votre choix
3. Nous préparons votre commande
4. Livraison rapide ! 🚚

**Paiement :** Orange Money, Wave, MTN, Espèces
**Livraison :** Partout à Abidjan et environs`;
  };

  const getContactInfo = () => {
    return `📞 **Nos contacts :**

WhatsApp & Appels :
• 07 57 60 88 18
• 05 55 78 29 44

📍 **Nos points de vente :**
• Kakoukro, Carrefour Marché
• Adiaké, quartier Gnanmiendoussou

🕒 **Horaires :** Lun-Sam 8h-19h`;
  };

  const getDeliveryInfo = () => {
    return `🚚 **Livraison & Paiement :**

**Zones de livraison :** Abidjan et environs
**Délais :** Livraison rapide et fiable
**Frais :** Selon zone géographique

**Moyens de paiement :**
• Orange Money 📱
• Wave 💳
• MTN Mobile Money
• Espèces à la livraison 💰

Paiement sécurisé garanti !`;
  };

  const processMessage = (message: string) => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('kit') || lowerMessage.includes('scolaire') || lowerMessage.includes('6e') || lowerMessage.includes('5e') || lowerMessage.includes('3e') || lowerMessage.includes('4e') || lowerMessage.includes('2nde') || lowerMessage.includes('tle')) {
      addBotMessage(getKitsInfo(), [
        {
          label: "Commander un kit",
          action: () => {
            addBotMessage("Parfait ! Cliquez sur le bouton WhatsApp ci-dessous pour commander directement :");
          }
        }
      ]);
    } else if (lowerMessage.includes('prix') || lowerMessage.includes('coût') || lowerMessage.includes('tarif') || lowerMessage.includes('combien')) {
      addBotMessage(getPricesInfo());
    } else if (lowerMessage.includes('commander') || lowerMessage.includes('acheter') || lowerMessage.includes('commande')) {
      addBotMessage(getOrderInfo(), [
        {
          label: "Commander maintenant",
          action: () => {
            addBotMessage("Excellente idée ! Utilisez le bouton WhatsApp pour commander :");
          }
        }
      ]);
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('téléphone') || lowerMessage.includes('adresse') || lowerMessage.includes('où')) {
      addBotMessage(getContactInfo());
    } else if (lowerMessage.includes('livraison') || lowerMessage.includes('livrer') || lowerMessage.includes('paiement') || lowerMessage.includes('payer')) {
      addBotMessage(getDeliveryInfo());
    } else if (lowerMessage.includes('fourniture') || lowerMessage.includes('cahier') || lowerMessage.includes('bic') || lowerMessage.includes('crayon')) {
      addBotMessage(`📝 **Nos fournitures disponibles :**

• Cahiers (100p, 200p, 300p)
• Bics (bleu, rouge, noir, vert)
• Crayons à papier et de couleur
• Matériel de géométrie
• Colle, scotch, effaceurs...

Tout pour réussir votre année scolaire ! 📚`);
    } else if (lowerMessage.includes('salut') || lowerMessage.includes('bonjour') || lowerMessage.includes('hello')) {
      addBotMessage("Bonjour ! 👋 Bienvenue chez Librairie I.E.K ! Je suis là pour vous aider. Que souhaitez-vous savoir sur nos fournitures scolaires ?", [
        {
          label: "Voir les kits",
          action: () => addBotMessage(getKitsInfo())
        },
        {
          label: "Les prix",
          action: () => addBotMessage(getPricesInfo())
        }
      ]);
    } else {
      addBotMessage(`Je vous remercie pour votre question ! 😊 

Pour une réponse personnalisée et détaillée, je vous invite à contacter directement notre équipe via WhatsApp. Nous serons ravis de vous aider !

Voici les sujets sur lesquels je peux vous renseigner :
• Kits scolaires et prix
• Fournitures individuelles  
• Modalités de commande
• Livraison et paiement`, [
        {
          label: "Contacter sur WhatsApp",
          action: () => {
            addBotMessage("Parfait ! Cliquez sur le bouton WhatsApp pour discuter directement avec notre équipe :");
          }
        }
      ]);
    }
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setHasInteracted(true);
      addUserMessage(inputValue);
      const userMessage = inputValue;
      setInputValue('');
      
      // Délai pour simuler une réflexion
      setTimeout(() => {
        processMessage(userMessage);
      }, 1000);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setHasInteracted(true);
  };

  return (
    <>
      {/* Bouton flottant - nouvelle couleur violet/indigo */}
      {!isOpen && (
        <Button
          onClick={handleOpen}
          className="fixed bottom-24 right-6 z-50 bg-gradient-to-br from-violet-500 to-indigo-600 hover:from-violet-600 hover:to-indigo-700 text-white shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 rounded-full w-16 h-16 p-0 ring-4 ring-violet-200/50"
          size="icon"
          aria-label="Ouvrir le chat"
        >
          <MessageCircle className="h-8 w-8" />
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
            <Bot className="h-3 w-3 text-violet-600" />
          </div>
        </Button>
      )}

      {/* Chat Interface */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-96 h-[500px] shadow-2xl border-school-primary/20">
          <CardHeader className="bg-gradient-to-r from-school-primary to-school-secondary text-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5" />
                <CardTitle className="text-lg">Assistant I.E.K</CardTitle>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleClose}
                className="text-white hover:bg-white/20 h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-white/90">Votre assistant fournitures scolaires</p>
          </CardHeader>
          
          <CardContent className="p-0 flex flex-col h-[380px]">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex gap-2",
                    message.isBot ? "justify-start" : "justify-end"
                  )}
                >
                  {message.isBot && (
                    <div className="w-8 h-8 rounded-full bg-school-primary flex items-center justify-center flex-shrink-0">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                  )}
                  <div
                    className={cn(
                      "max-w-[250px] rounded-lg p-3 text-sm",
                      message.isBot
                        ? "bg-muted text-foreground"
                        : "bg-school-primary text-white"
                    )}
                  >
                    <div className="whitespace-pre-line">{message.text}</div>
                    {message.actions && (
                      <div className="mt-3 space-y-2">
                        {message.actions.map((action, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            onClick={action.action}
                            className="w-full text-xs"
                          >
                            {action.label}
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                  {!message.isBot && (
                    <div className="w-8 h-8 rounded-full bg-school-secondary flex items-center justify-center flex-shrink-0">
                      <User className="h-4 w-4 text-white" />
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t p-4">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Tapez votre question..."
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  className="bg-school-primary hover:bg-school-primary/90"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <div className="mt-3">
                <WhatsAppButton 
                  variant="compact" 
                  className="w-full"
                  message={whatsappMessages.contact}
                >
                  Discuter sur WhatsApp
                </WhatsAppButton>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ChatBot;