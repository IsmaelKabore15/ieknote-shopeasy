import schoolSupplies from "@/assets/school-supplies.jpg";
import schoolKits from "@/assets/school-kits.jpg";
import kit6e5eImg from "@/assets/kits/cahier-200p.jpg";
import kit4eImg from "@/assets/kits/cahier-300p.jpg";
import kit3eImg from "@/assets/kits/lot-cahiers.jpg";
import kitLyceeImg from "@/assets/kits/cahier-etudiant.jpg";
import cahier100 from "@/assets/kits/cahier-100p.jpg";
import cahier200 from "@/assets/kits/cahier-200p.jpg";
import cahier300 from "@/assets/kits/cahier-300p.jpg";
import cahierTP from "@/assets/kits/cahier-tp.jpg";
import cahierRecherche from "@/assets/kits/cahier-recherche.jpg";
import cahierGrandFormat from "@/assets/kits/cahier-grand-format.jpg";
import bicsImg from "@/assets/kits/bics.jpg";
import geoImg from "@/assets/kits/ensemble-geo.jpg";

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
  freeDelivery?: boolean;
  contents?: string[];
}

export const products: Product[] = [
  // KITS SCOLAIRES
  {
    id: "kit-6e-5e",
    title: "Kit Scolaire 6ème/5ème",
    price: 9000,
    priceDisplay: "9 000 FCFA",
    originalPrice: "10 500 FCFA",
    description: "Cahiers Privilège & Original 200p (6 unités), cahier EPS 100p, stylos Bic bleu/rouge/noir, crayons HB, gommes, règle 30cm, ensemble géométrique, couvertures plastiques",
    image: kit6e5eImg,
    category: "kits",
    badge: "Populaire",
    freeDelivery: true,
    contents: [
      "6 cahiers Privilège 200p",
      "4 cahiers Original 200p",
      "1 cahier EPS 100p",
      "3 stylos Bic (bleu, rouge, noir)",
      "2 crayons HB + 1 taille-crayon",
      "2 gommes blanches",
      "1 règle 30 cm",
      "1 ensemble géométrique petit",
      "10 couvertures plastiques",
      "1 ardoise + 2 craies"
    ]
  },
  {
    id: "kit-4e",
    title: "Kit Scolaire 4ème",
    price: 10500,
    priceDisplay: "10 500 FCFA",
    originalPrice: "12 000 FCFA",
    description: "Cahiers Privilège & Original 300p (6 unités), cahier EPS 100p, cahier TP, stylos Bic, crayons, compas, équerres 45° et 30°, surligneurs, couvertures plastiques",
    image: kit4eImg,
    category: "kits",
    badge: "Recommandé",
    freeDelivery: true,
    contents: [
      "6 cahiers Privilège 300p",
      "4 cahiers Original 300p",
      "1 cahier EPS 100p",
      "1 cahier TP",
      "4 stylos Bic (bleu, rouge, noir, vert)",
      "2 crayons HB + 1 taille-crayon",
      "1 compas",
      "1 équerre 45° + 1 équerre 30°",
      "1 règle 30 cm",
      "3 surligneurs",
      "12 couvertures plastiques"
    ]
  },
  {
    id: "kit-3e",
    title: "Kit Scolaire 3ème",
    price: 12000,
    priceDisplay: "12 000 FCFA",
    originalPrice: "13 800 FCFA",
    description: "Cahiers Privilège & Original 300p (8 unités), cahier EPS 100p, cahiers TP sciences, calculatrice, ensemble géométrique complet, stylos et surligneurs — spécial préparation BEPC",
    image: kit3eImg,
    category: "kits",
    badge: "Spécial BEPC",
    freeDelivery: true,
    contents: [
      "8 cahiers Privilège 300p",
      "4 cahiers Original 300p",
      "1 cahier EPS 100p",
      "2 cahiers TP sciences (physique, SVT)",
      "1 calculatrice scientifique",
      "1 ensemble géométrique complet",
      "4 stylos Bic + 3 surligneurs",
      "2 crayons HB + gomme + taille-crayon",
      "1 colle Bibeon + 1 scotch",
      "14 couvertures plastiques"
    ]
  },
  {
    id: "kit-lycee",
    title: "Kit Scolaire Lycée (2nde/1ère/Tle)",
    price: 13000,
    priceDisplay: "13 000 FCFA",
    originalPrice: "15 200 FCFA",
    description: "Cahiers Privilège & Original 300p, cahiers de recherche, cahiers TP sciences, cahier EPS 100p, calculatrice scientifique, matériel de dessin technique complet",
    image: kitLyceeImg,
    category: "kits",
    badge: "Complet",
    freeDelivery: true,
    contents: [
      "10 cahiers Privilège 300p",
      "4 cahiers Original 300p",
      "2 cahiers de recherche",
      "2 cahiers TP sciences",
      "1 cahier EPS 100p",
      "1 calculatrice scientifique",
      "1 kit de dessin technique (équerres, rapporteur, compas)",
      "1 règle 30 cm",
      "5 stylos Bic + 3 surligneurs",
      "2 crayons HB + gomme + taille-crayon",
      "16 couvertures plastiques"
    ]
  },


  // CAHIERS
  {
    id: "cahier-100p",
    title: "Cahier 100 pages",
    price: 500,
    priceDisplay: "500 FCFA",
    description: "Cahier petit format, parfait pour les exercices quotidiens et les brouillons.",
    image: cahier100,
    category: "cahiers"
  },
  {
    id: "cahier-200p",
    title: "Cahier 200 pages",
    price: 900,
    priceDisplay: "900 FCFA",
    description: "Cahier grand format, papier de qualité, reliure solide. Idéal pour les cours quotidiens.",
    image: cahier200,
    category: "cahiers"
  },
  {
    id: "cahier-300p",
    title: "Cahier 300 pages",
    price: 1800,
    priceDisplay: "1 800 FCFA",
    description: "Cahier extra-large, parfait pour les matières principales et les cours intensifs.",
    image: cahier300,
    category: "cahiers"
  },
  {
    id: "cahier-tp",
    title: "Cahier TP",
    price: 850,
    priceDisplay: "850 FCFA",
    description: "Cahier spécialisé pour travaux pratiques en sciences, avec pages quadrillées.",
    image: cahierTP,
    category: "cahiers"
  },
  {
    id: "cahier-spirale",
    title: "Cahier Spirale",
    price: 1200,
    priceDisplay: "1 200 FCFA",
    description: "Cahier à spirales métalliques, format A4, pratique pour les cours et révisions.",
    image: cahierGrandFormat,
    category: "cahiers"
  },
  {
    id: "cahier-dessin",
    title: "Cahier Dessin",
    price: 750,
    priceDisplay: "750 FCFA",
    description: "Cahier de dessin grand format, papier épais adapté aux crayons de couleur et feutres.",
    image: cahierRecherche,
    category: "cahiers"
  },

  // FOURNITURES
  {
    id: "stylo-bleu",
    title: "Stylo Bleu (Bic)",
    price: 100,
    priceDisplay: "100 FCFA",
    description: "Stylo bille Bic bleu, encre de qualité supérieure pour une écriture fluide.",
    image: bicsImg,
    category: "fournitures"
  },
  {
    id: "stylo-rouge",
    title: "Stylo Rouge (Bic)",
    price: 100,
    priceDisplay: "100 FCFA",
    description: "Stylo bille Bic rouge, idéal pour les corrections et annotations.",
    image: bicsImg,
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
    image: geoImg,
    category: "fournitures"
  },
  {
    id: "ensemble-geo-grand",
    title: "Ensemble Géométrique Grand",
    price: 1000,
    priceDisplay: "1 000 FCFA",
    description: "Kit géométrique complet : règle, équerres 45° et 30°, rapporteur, compas.",
    image: geoImg,
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
