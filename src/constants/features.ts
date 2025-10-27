import { Sparkles, Search, Folders, Shield } from "lucide-react";
import { Feature } from "@/types";

export const features: Feature[] = [
  {
    icon: Sparkles,
    title: "Analyse IA automatique",
    description: "Gemini génère tags, résumés et détecte la langue de chaque citation",
    screenshot: "Interface montrant les tags automatiques",
    image: "/tag-example.png",
    color: "text-[#7c3bed]"
  },
  {
    icon: Search,
    title: "Recherche en langage naturel",
    description: "Trouvez 'des recettes végétariennes' même si vous avez sauvegardé 'plats sans viande'",
    screenshot: "Barre de recherche avec résultats",
    image: "/ai-search.png",
    color: "text-[#7c3bed]"
  },
  {
    icon: Folders,
    title: "Collections thématiques",
    description: "Groupez par sujets, filtrez par tags, marquez vos favoris",
    screenshot: "Vue des collections avec icônes",
    image: "/citation-example.png",
    color: "text-[#7c3bed]"
  },
  {
    icon: Shield,
    title: "Export et portabilité",
    description: "Exportez vos données en Markdown ou JSON. Toutes vos données restent dans votre navigateur.",
    screenshot: "Export des données en Markdown/JSON",
    image: "/export-data.png",
    color: "text-[#7c3bed]"
  }
];



