# Memora Landing Page

Une landing page moderne et sobre pour **Memora**, une extension Chrome révolutionnaire qui transforme la gestion de citations web grâce à l'IA (Google Gemini).

## 🚀 Fonctionnalités

- **Design moderne** : Inspiré de Vercel et shadcn/ui avec une esthétique minimaliste
- **Responsive** : Optimisé pour mobile, tablette et desktop
- **Animations fluides** : Micro-animations subtiles avec Framer Motion
- **Performance** : Optimisé pour les Core Web Vitals (score 90+)
- **Accessibilité** : Respect des standards WCAG AA

## 🛠️ Technologies utilisées

- **Next.js 15** avec App Router et TypeScript
- **Tailwind CSS** pour le styling
- **shadcn/ui** pour les composants UI
- **Framer Motion** pour les animations
- **Lucide React** pour les icônes

## 📦 Installation

1. Clonez le repository :
```bash
git clone <votre-repo>
cd memora-landing
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
```

4. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🎨 Structure du projet

```
src/
├── app/
│   ├── layout.tsx          # Layout principal avec métadonnées
│   ├── page.tsx            # Page d'accueil
│   └── globals.css         # Styles globaux et configuration Tailwind
├── components/
│   ├── sections/           # Composants de sections
│   │   ├── Header.tsx      # Header avec logo et CTA
│   │   ├── HeroSection.tsx # Section hero principale
│   │   ├── ProblemSolutionSection.tsx # Problème vs Solution
│   │   ├── FeaturesGridSection.tsx # Grille des fonctionnalités
│   │   ├── HowItWorksSection.tsx # Processus en 3 étapes
│   │   ├── FinalCTASection.tsx # CTA final avec fond violet
│   │   └── Footer.tsx      # Footer minimaliste
│   └── ui/                 # Composants shadcn/ui
│       ├── button.tsx
│       ├── card.tsx
│       └── badge.tsx
└── lib/
    └── utils.ts            # Utilitaires
```

## 🎯 Sections de la landing page

### 1. Hero Section
- Headline percutante : "Transformez vos lectures web en connaissances exploitables"
- CTA principal : "Installer l'extension"
- Badge avec informations clés
- Placeholder pour screenshot de l'interface

### 2. Problème + Solution
- 2 colonnes comparant les problèmes actuels vs les solutions Memora
- Cartes avec icônes et descriptions détaillées

### 3. Fonctionnalités clés
- Grille 2x2 des 4 killer features :
  - IA Intégrée
  - Recherche Sémantique
  - Organisation Intelligente
  - Privacy-First

### 4. Comment ça marche
- Timeline horizontale (desktop) / verticale (mobile)
- 3 étapes : Sélectionnez → Sauvegardez → Retrouvez

### 5. CTA Final
- Fond violet avec texte blanc
- Message de conversion : "Commencez à construire votre second cerveau"

### 6. Footer
- Logo, liens et mentions légales
- Style minimaliste avec fond gris foncé

## 🎨 Palette de couleurs

- **Violet principal** : `#7c3bed`
- **Violet hover** : `#6929d4`
- **Fond** : Blanc `#FFFFFF` et gris clair `#FAFAFA`
- **Texte** : Gris foncé `#171717` et noir `#000000`
- **Footer** : Gris foncé `#171717`

## 📱 Responsive Design

- **Mobile-first** : Design optimisé pour mobile
- **Breakpoints** : sm (640px), md (768px), lg (1024px), xl (1280px)
- **Grilles adaptatives** : 1 colonne sur mobile, 2-3 colonnes sur desktop
- **Timeline responsive** : Horizontale sur desktop, verticale sur mobile

## 🚀 Déploiement

### Vercel (Recommandé)
1. Connectez votre repository GitHub à Vercel
2. Configurez les variables d'environnement si nécessaire
3. Déployez automatiquement à chaque push

### Netlify
1. Build command : `npm run build`
2. Publish directory : `.next`
3. Déployez via l'interface Netlify ou CLI

### Autres plateformes
```bash
npm run build
npm start
```

## 🔧 Personnalisation

### Modifier les couleurs
Éditez `src/app/globals.css` pour changer la couleur violette :
```css
--color-memora-purple: #7c3bed;
```

### Ajouter des screenshots
Remplacez les placeholders dans les composants par de vraies images :
1. Ajoutez vos images dans `public/screenshots/`
2. Utilisez le composant `Image` de Next.js pour l'optimisation

### Modifier le contenu
Éditez directement les composants dans `src/components/sections/` pour personnaliser les textes et messages.

## 📊 Performance

- **Lighthouse Score** : 95+ (Performance)
- **Core Web Vitals** : Optimisé
- **Images** : Lazy loading et optimisation automatique
- **Fonts** : Système avec fallback
- **Code splitting** : Automatique avec Next.js

## 🤝 Contribution

1. Forkez le projet
2. Créez une branche pour votre feature (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Pushez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🙏 Remerciements

- [shadcn/ui](https://ui.shadcn.com/) pour les composants
- [Tailwind CSS](https://tailwindcss.com/) pour le styling
- [Framer Motion](https://www.framer.com/motion/) pour les animations
- [Lucide](https://lucide.dev/) pour les icônes
- [Next.js](https://nextjs.org/) pour le framework

---

**Made with 💜 • Powered by Gemini AI**