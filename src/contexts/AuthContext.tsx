import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string, name?: string) => Promise<boolean>;
  register: (name: string, email: string, phone: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AUTH_STORAGE_KEY = "librairie_iek_auth";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Charger l'utilisateur depuis localStorage au démarrage
  useEffect(() => {
    const storedAuth = localStorage.getItem(AUTH_STORAGE_KEY);
    if (storedAuth) {
      try {
        const parsedUser = JSON.parse(storedAuth);
        setUser(parsedUser);
      } catch (error) {
        localStorage.removeItem(AUTH_STORAGE_KEY);
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string, name?: string): Promise<boolean> => {
    // Simulation d'authentification (sans backend)
    // En production, cela devrait vérifier contre une base de données
    const storedUsers = localStorage.getItem("librairie_iek_users");
    const users = storedUsers ? JSON.parse(storedUsers) : [];
    
    const foundUser = users.find((u: any) => u.email === email && u.password === password);
    
    if (foundUser) {
      const userWithoutPassword = {
        id: foundUser.id,
        name: foundUser.name,
        email: foundUser.email,
        phone: foundUser.phone
      };
      setUser(userWithoutPassword);
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(userWithoutPassword));
      return true;
    }
    
    return false;
  };

  const register = async (name: string, email: string, phone: string, password: string): Promise<boolean> => {
    const storedUsers = localStorage.getItem("librairie_iek_users");
    const users = storedUsers ? JSON.parse(storedUsers) : [];
    
    // Vérifier si l'email existe déjà
    if (users.some((u: any) => u.email === email)) {
      return false;
    }
    
    const newUser = {
      id: crypto.randomUUID(),
      name,
      email,
      phone,
      password // En production, le mot de passe devrait être hashé
    };
    
    users.push(newUser);
    localStorage.setItem("librairie_iek_users", JSON.stringify(users));
    
    // Connecter automatiquement après inscription
    const userWithoutPassword = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      phone: newUser.phone
    };
    setUser(userWithoutPassword);
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(userWithoutPassword));
    
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(AUTH_STORAGE_KEY);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated: !!user, 
      login, 
      register, 
      logout,
      isLoading 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
