import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { GraduationCap, Mail, Lock, User, Phone, Eye, EyeOff } from "lucide-react";
import { z } from "zod";

// Schémas de validation
const loginSchema = z.object({
  email: z.string().trim().email("Email invalide").max(255),
  password: z.string().min(6, "Mot de passe minimum 6 caractères").max(100)
});

const registerSchema = z.object({
  name: z.string().trim().min(2, "Nom minimum 2 caractères").max(100),
  email: z.string().trim().email("Email invalide").max(255),
  phone: z.string().trim().min(8, "Téléphone minimum 8 chiffres").max(20),
  password: z.string().min(6, "Mot de passe minimum 6 caractères").max(100),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Les mots de passe ne correspondent pas",
  path: ["confirmPassword"]
});

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, register } = useAuth();
  const { toast } = useToast();
  
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  // Form states
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [registerForm, setRegisterForm] = useState({ 
    name: "", 
    email: "", 
    phone: "", 
    password: "", 
    confirmPassword: "" 
  });

  const from = (location.state as any)?.from?.pathname || "/panier";

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    const validation = loginSchema.safeParse(loginForm);
    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.errors.forEach((err) => {
        fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    
    setIsLoading(true);
    
    const success = await login(loginForm.email, loginForm.password);
    
    if (success) {
      toast({
        title: "Connexion réussie !",
        description: "Bienvenue sur Librairie I.E.K",
      });
      navigate(from, { replace: true });
    } else {
      toast({
        variant: "destructive",
        title: "Erreur de connexion",
        description: "Email ou mot de passe incorrect",
      });
    }
    
    setIsLoading(false);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    const validation = registerSchema.safeParse(registerForm);
    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.errors.forEach((err) => {
        fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    
    setIsLoading(true);
    
    const success = await register(
      registerForm.name,
      registerForm.email,
      registerForm.phone,
      registerForm.password
    );
    
    if (success) {
      toast({
        title: "Inscription réussie !",
        description: "Votre compte a été créé. Bienvenue !",
      });
      navigate(from, { replace: true });
    } else {
      toast({
        variant: "destructive",
        title: "Erreur d'inscription",
        description: "Cet email est déjà utilisé",
      });
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-card">
        <CardHeader className="text-center space-y-4">
          <Link to="/" className="flex items-center justify-center space-x-2">
            <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-xl">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
          </Link>
          <div>
            <CardTitle className="text-2xl">Connexion Client</CardTitle>
            <CardDescription>
              Connectez-vous pour accéder à votre panier et passer commande
            </CardDescription>
          </div>
        </CardHeader>
        
        <CardContent>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Connexion</TabsTrigger>
              <TabsTrigger value="register">Inscription</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="votre@email.com"
                      value={loginForm.email}
                      onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                      className="pl-10"
                      required
                    />
                  </div>
                  {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="login-password">Mot de passe</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="login-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={loginForm.password}
                      onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                      className="pl-10 pr-10"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                  {errors.password && <p className="text-sm text-destructive">{errors.password}</p>}
                </div>
                
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Connexion..." : "Se connecter"}
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="register">
              <form onSubmit={handleRegister} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="register-name">Nom complet</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="register-name"
                      type="text"
                      placeholder="Votre nom"
                      value={registerForm.name}
                      onChange={(e) => setRegisterForm({ ...registerForm, name: e.target.value })}
                      className="pl-10"
                      required
                    />
                  </div>
                  {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="register-email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="register-email"
                      type="email"
                      placeholder="votre@email.com"
                      value={registerForm.email}
                      onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
                      className="pl-10"
                      required
                    />
                  </div>
                  {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="register-phone">Téléphone</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="register-phone"
                      type="tel"
                      placeholder="07 XX XX XX XX"
                      value={registerForm.phone}
                      onChange={(e) => setRegisterForm({ ...registerForm, phone: e.target.value })}
                      className="pl-10"
                      required
                    />
                  </div>
                  {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="register-password">Mot de passe</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="register-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Minimum 6 caractères"
                      value={registerForm.password}
                      onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
                      className="pl-10 pr-10"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                  {errors.password && <p className="text-sm text-destructive">{errors.password}</p>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="register-confirm">Confirmer le mot de passe</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="register-confirm"
                      type={showPassword ? "text" : "password"}
                      placeholder="Confirmez votre mot de passe"
                      value={registerForm.confirmPassword}
                      onChange={(e) => setRegisterForm({ ...registerForm, confirmPassword: e.target.value })}
                      className="pl-10"
                      required
                    />
                  </div>
                  {errors.confirmPassword && <p className="text-sm text-destructive">{errors.confirmPassword}</p>}
                </div>
                
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Inscription..." : "S'inscrire"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
          
          <div className="mt-6 text-center text-sm text-muted-foreground">
            <Link to="/" className="text-primary hover:underline">
              ← Retour à l'accueil
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
