import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, GraduationCap, Phone, ShoppingCart, User, LogOut, Sparkles } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { totalItems } = useCart();
  const { user, isAuthenticated, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Nos Produits", href: "/produits" },
    { name: "À propos", href: "/a-propos" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "glass shadow-card py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className={`relative p-2.5 rounded-xl transition-all duration-300 ${
              isScrolled 
                ? "bg-gradient-to-br from-primary to-secondary" 
                : "bg-white/10 backdrop-blur-sm"
            }`}>
              <GraduationCap className={`h-7 w-7 transition-colors duration-300 ${
                isScrolled ? "text-white" : "text-white"
              }`} />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse" />
            </div>
            <div>
              <h1 className={`text-xl font-heading font-bold transition-colors duration-300 ${
                isScrolled ? "text-foreground" : "text-white"
              }`}>
                Librairie I.E.K
              </h1>
              <p className={`text-xs font-medium transition-colors duration-300 ${
                isScrolled ? "text-muted-foreground" : "text-white/80"
              }`}>
                ✨ L'excellence scolaire
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  isActive(item.href)
                    ? isScrolled 
                      ? "text-primary bg-primary/10" 
                      : "text-accent bg-white/10"
                    : isScrolled
                      ? "text-foreground/70 hover:text-foreground hover:bg-muted"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2 md:space-x-3">
            {/* Cart Button */}
            <Button
              variant="ghost"
              size="icon"
              className={`relative rounded-xl transition-all duration-300 ${
                isScrolled 
                  ? "hover:bg-muted" 
                  : "text-white hover:bg-white/10"
              }`}
              asChild
            >
              <Link to="/panier">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-gradient-to-br from-accent to-warning text-accent-foreground border-0 animate-bounce-subtle">
                    {totalItems > 99 ? "99+" : totalItems}
                  </Badge>
                )}
              </Link>
            </Button>

            {/* User Menu */}
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className={`hidden sm:flex items-center space-x-2 rounded-xl transition-all duration-300 ${
                      isScrolled 
                        ? "hover:bg-muted" 
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <span className="text-white text-sm font-bold">
                        {user?.name?.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <span className={`max-w-24 truncate font-medium ${
                      isScrolled ? "text-foreground" : "text-white"
                    }`}>
                      {user?.name?.split(" ")[0]}
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 glass border-border/50 rounded-xl p-2">
                  <div className="px-3 py-2 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg mb-2">
                    <p className="text-sm font-semibold text-foreground">{user?.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
                  </div>
                  <DropdownMenuItem asChild className="rounded-lg cursor-pointer">
                    <Link to="/panier">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Mon panier
                      {totalItems > 0 && (
                        <Badge className="ml-auto bg-accent text-accent-foreground text-xs">
                          {totalItems}
                        </Badge>
                      )}
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-border/50" />
                  <DropdownMenuItem 
                    onClick={logout} 
                    className="text-destructive cursor-pointer rounded-lg focus:text-destructive"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Déconnexion
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button 
                variant="ghost" 
                size="sm" 
                className={`hidden sm:flex items-center space-x-2 rounded-xl transition-all duration-300 ${
                  isScrolled 
                    ? "hover:bg-muted" 
                    : "text-white hover:bg-white/10"
                }`}
                asChild
              >
                <Link to="/connexion">
                  <User className="h-4 w-4" />
                  <span>Connexion</span>
                </Link>
              </Button>
            )}
            
            {/* WhatsApp Button */}
            <Button 
              size="sm" 
              className="hidden lg:flex items-center space-x-2 btn-gold rounded-xl px-4"
              asChild
            >
              <a href="https://wa.me/2250757608818" target="_blank" rel="noopener noreferrer">
                <Phone className="h-4 w-4" />
                <span className="font-semibold">WhatsApp</span>
                <Sparkles className="h-3 w-3" />
              </a>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className={`lg:hidden rounded-xl transition-all duration-300 ${
                isScrolled 
                  ? "hover:bg-muted" 
                  : "text-white hover:bg-white/10"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 animate-fade-in">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  className={`text-base font-medium px-4 py-3 rounded-xl transition-all duration-300 animate-slide-in-right ${
                    isActive(item.href)
                      ? "bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border-l-4 border-accent"
                      : isScrolled
                        ? "text-foreground/70 hover:text-foreground hover:bg-muted"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="flex flex-col space-y-3 pt-4 mt-4 border-t border-border/30">
                {isAuthenticated ? (
                  <>
                    <div className="flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <span className="text-white font-bold">
                          {user?.name?.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <p className={`font-semibold ${isScrolled ? "text-foreground" : "text-white"}`}>
                          {user?.name}
                        </p>
                        <p className={`text-xs ${isScrolled ? "text-muted-foreground" : "text-white/70"}`}>
                          {user?.email}
                        </p>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => {
                        logout();
                        setIsMenuOpen(false);
                      }}
                      className="w-fit rounded-xl"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Déconnexion
                    </Button>
                  </>
                ) : (
                  <Button 
                    variant="outline" 
                    size="sm"
                    asChild
                    className="w-fit rounded-xl"
                  >
                    <Link to="/connexion" onClick={() => setIsMenuOpen(false)}>
                      <User className="h-4 w-4 mr-2" />
                      Connexion
                    </Link>
                  </Button>
                )}
                
                <Button 
                  size="sm" 
                  className="btn-gold rounded-xl w-fit"
                  asChild
                >
                  <a href="https://wa.me/2250757608818" target="_blank" rel="noopener noreferrer">
                    <Phone className="h-4 w-4 mr-2" />
                    WhatsApp
                    <Sparkles className="h-3 w-3 ml-2" />
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
