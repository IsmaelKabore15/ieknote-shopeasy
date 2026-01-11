import schoolSupplies from "@/assets/school-supplies.jpg";
import schoolKits from "@/assets/school-kits.jpg";

export interface Product {
  id: string;
  title: string;
  price: number;
  priceDisplay: string;
  originalPrice?: string;
  description: string;
  image: string;
  category: "kits" | "cahiers" | "fournitures";
  badge?: string;
}

export const products: Product[] = [
  // KITS SCOLAIRES
  {
    id: "kit-6e-5e",
    title: "Kit Scolaire 6ème/5ème",
    price: 8100,
    priceDisplay: "8 100 FCFA",
    originalPrice: "9 500 FCFA",
    description: "Cahiers 200p (6 unités), stylos Bic bleu/noir (4 unités), crayons HB (3 unités), gommes (2 unités), règles 30cm, ensemble géométrique complet, couvertures plastiques",
    image: schoolKits,
    category: "kits",
    badge: "Populaire"
  },
  {
    id: "kit-3e-4e",
    title: "Kit Scolaire 3ème/4ème",
    price: 10000,
    priceDisplay: "10 000 FCFA",
    originalPrice: "11 800 FCFA",
    description: "Cahiers 300p (8 unités), fournitures complètes, calculatrice standard, compas de qualité, équerres 45° et 30°, stylos de couleur, surligneurs",
    image: schoolKits,
    category: "kits",
    badge: "Recommandé"
  },
  {
    id: "kit-2nde-tle",
    title: "Kit Scolaire 2nde/Tle",
    price: 13000,
    priceDisplay: "13 000 FCFA",
    originalPrice: "15 200 FCFA",
    description: "Cahiers de recherche (4 unités), cahiers TP sciences (6 unités), fournitures premium, calculatrice scientifique, matériel de dessin technique complet",
    image: schoolKits,
    category: "kits",
    badge: "Complet"
  },

  // CAHIERS
  {
    id: "cahier-100p",
    title: "Cahier 100 pages",
    price: 500,
    priceDisplay: "500 FCFA",
    description: "Cahier petit format, parfait pour les exercices quotidiens et les brouillons.",
    image: schoolSupplies,
    category: "cahiers"
  },
  {
    id: "cahier-200p",
    title: "Cahier 200 pages",
    price: 900,
    priceDisplay: "900 FCFA",
    description: "Cahier grand format, papier de qualité, reliure solide. Idéal pour les cours quotidiens.",
    image: schoolSupplies,
    category: "cahiers"
  },
  {
    id: "cahier-300p",
    title: "Cahier 300 pages",
    price: 1800,
    priceDisplay: "1 800 FCFA",
    description: "Cahier extra-large, parfait pour les matières principales et les cours intensifs.",
    image: schoolSupplies,
    category: "cahiers"
  },
  {
    id: "cahier-tp",
    title: "Cahier TP",
    price: 850,
    priceDisplay: "850 FCFA",
    description: "Cahier spécialisé pour travaux pratiques en sciences, avec pages quadrillées.",
    image: schoolSupplies,
    category: "cahiers"
  },
  {
    id: "cahier-spirale",
    title: "Cahier Spirale",
    price: 1200,
    priceDisplay: "1 200 FCFA",
    description: "Cahier à spirales métalliques, format A4, pratique pour les cours et révisions.",
    image: schoolSupplies,
    category: "cahiers"
  },
  {
    id: "cahier-dessin",
    title: "Cahier Dessin",
    price: 750,
    priceDisplay: "750 FCFA",
    description: "Cahier de dessin grand format, papier épais adapté aux crayons de couleur et feutres.",
    image: schoolSupplies,
    category: "cahiers"
  },

  // FOURNITURES
  {
    id: "stylo-bleu",
    title: "Stylo Bleu (Bic)",
    price: 100,
    priceDisplay: "100 FCFA",
    description: "Stylo bille Bic bleu, encre de qualité supérieure pour une écriture fluide.",
    image: schoolSupplies,
    category: "fournitures"
  },
  {
    id: "stylo-rouge",
    title: "Stylo Rouge (Bic)",
    price: 100,
    priceDisplay: "100 FCFA",
    description: "Stylo bille Bic rouge, idéal pour les corrections et annotations.",
    image: schoolSupplies,
    category: "fournitures"
  },
  {
    id: "crayon-papier",
    title: "Crayon à Papier",
    price: 100,
    priceDisplay: "100 FCFA",
    description: "Crayon à papier HB, parfait pour le dessin et l'écriture.",
    image: schoolSupplies,
    category: "fournitures"
  },
  {
    id: "gomme",
    title: "Gomme",
    price: 150,
    priceDisplay: "150 FCFA",
    description: "Gomme blanche de qualité, efface proprement sans laisser de traces.",
    image: schoolSupplies,
    category: "fournitures"
  },
  {
    id: "regle-30cm",
    title: "Règle 30 cm",
    price: 200,
    priceDisplay: "200 FCFA",
    description: "Règle graduée 30 cm, plastique transparent et résistant.",
    image: schoolSupplies,
    category: "fournitures"
  },
  {
    id: "taille-crayon",
    title: "Taille-crayon",
    price: 150,
    priceDisplay: "150 FCFA",
    description: "Taille-crayon compact avec réservoir, pratique et efficace.",
    image: schoolSupplies,
    category: "fournitures"
  },
  {
    id: "crayon-couleur-petit",
    title: "Crayons de Couleur (Petit)",
    price: 300,
    priceDisplay: "300 FCFA",
    description: "Boîte de 6 crayons de couleur, idéal pour les petits travaux artistiques.",
    image: schoolSupplies,
    category: "fournitures"
  },
  {
    id: "crayon-couleur-grand",
    title: "Crayons de Couleur (Grand)",
    price: 600,
    priceDisplay: "600 FCFA",
    description: "Boîte de 12 crayons de couleur, couleurs vives et mines résistantes.",
    image: schoolSupplies,
    category: "fournitures"
  },
  {
    id: "ensemble-geo-petit",
    title: "Ensemble Géométrique Petit",
    price: 700,
    priceDisplay: "700 FCFA",
    description: "Kit géométrique de base : règle, équerre, rapporteur.",
    image: schoolSupplies,
    category: "fournitures"
  },
  {
    id: "ensemble-geo-grand",
    title: "Ensemble Géométrique Grand",
    price: 1000,
    priceDisplay: "1 000 FCFA",
    description: "Kit géométrique complet : règle, équerres 45° et 30°, rapporteur, compas.",
    image: schoolSupplies,
    category: "fournitures",
    badge: "Complet"
  },
  {
    id: "compas",
    title: "Compas",
    price: 500,
    priceDisplay: "500 FCFA",
    description: "Compas métallique de précision pour les tracés géométriques.",
    image: schoolSupplies,
    category: "fournitures"
  },
  {
    id: "colle-biberon",
    title: "Colle Biberon",
    price: 300,
    priceDisplay: "300 FCFA",
    description: "Colle liquide format biberon, facile à appliquer et séchage rapide.",
    image: schoolSupplies,
    category: "fournitures"
  },
  {
    id: "scotch",
    title: "Scotch",
    price: 200,
    priceDisplay: "200 FCFA",
    description: "Ruban adhésif transparent, pratique pour les collages et réparations.",
    image: schoolSupplies,
    category: "fournitures"
  },
  {
    id: "effaceur",
    title: "Effaceur",
    price: 200,
    priceDisplay: "200 FCFA",
    description: "Effaceur d'encre double pointe : effacer et réécrire.",
    image: schoolSupplies,
    category: "fournitures"
  },
  {
    id: "sac-scolaire",
    title: "Sac Scolaire",
    price: 5000,
    priceDisplay: "5 000 FCFA",
    description: "Sac à dos scolaire robuste, plusieurs compartiments, bretelles rembourrées.",
    image: schoolKits,
    category: "fournitures",
    badge: "Populaire"
  }
];

export const getProductsByCategory = (category: string) => {
  return products.filter(p => p.category === category);
};

export const getProductById = (id: string) => {
  return products.find(p => p.id === id);
};
