# 🐾 La Dépêche Animale
**_Simulation éditoriale moderne en React + Vite, intégrant images stylisées, navigation dynamique, composants modulaires et conformité RGPD._**

## 🎯 Sous-titre
> **Une maquette éditoriale rétro-Ghibli, propulsée par Vite 2025, démonstration modulaire et responsive d’un front-end orienté microservices.**


+ Accès direct d'essai sur Vercel : https://la-depeche-animale.vercel.app/

---

## 📚 Présentation

La Dépêche Animale est une démonstration **réaliste**, **modulaire** et **responsive** d’un projet web front-end utilisant la stack **React + Vite**, stylisé dans un esprit **vintage & studio Ghibli**, enrichi par des illustrations IA. Il illustre :
- une navigation dynamique entre pages
- une pagination fluide sur données éditoriales simulées
- une gestion de consentement RGPD
- un découpage logique du code respectant les principes de **clean architecture**
- une prise en charge progressive (*Progressive Web App*), avec détection des navigateurs compatibles, bouton “Ajouter à l’écran d’accueil” sur Android/Chrome, guidance manuelle pour iOS/Safari, et message de secours en cas de non-conformité PWA.

---

## 🏗️ Architecture du projet

src/ ├── components/ → Composants UI réutilisables (Header, Footer, etc.) ├── data/ → Données simulées locales (ex. articles.js) ├── pages/ → Pages principales (Home, Contact, RGPD) ├── styles/ → SCSS modulaire avec mixins & variables ├── App.jsx → Routing principal └── main.jsx → Point d’entrée Vite

yaml
Copier
Modifier

Le découpage favorise une lecture claire, chaque fichier ne dépassant jamais 200 lignes, conformément aux bonnes pratiques **modulaires**, non-monolithiques.

---

## 🚀 Technologies

- ⚛️ React 18
- ⚡ Vite 5 (2025 ready)
- 🎨 SCSS modulaire
- 📱 Responsive Web Design (Grid + Flexbox)
- 📦 `react-paginate` pour la pagination
- 🧠 Composants décomposés (cards, hooks, appels)
- 🧾 Consentement RGPD simulé

---

## 💡 Points de veille mis en exergue

| Sujet                           | Mise en œuvre                      |
|--------------------------------|------------------------------------|
| **Vite 5**                     | build ultra-rapide, HMR natif      |
| **React fonctionnel**          | hooks + composants purs            |
| **Découplage logique/API/UI**  | séparation API / hooks / UI        |
| **Micro-frontend (modulaire)** | structure inspirée microservices   |
| **Design rétro-éditorial**     | images IA & Ghibli stylisées       |
| **Accessibilité & RGPD**       | bandeau de consentement intégré    |

---

## 📸 Illustrations

- **Bandeau** d’accueil généré en IA dans un style vintage press
- **Portraits stylisés** des docteurs (Curie, Dupont…) via diffusion stable
- **Couleurs dominantes** : brun ancien et bleu profond, cohérentes avec l’image d’un journal scientifique classique

---

## 🧪 Lancer le projet localement

```bash
git clone https://github.com/votre-nom/la-depeche-animale.git
cd la-depeche-animale
npm install
npm run dev
Accès à http://localhost:5173 par défaut

📦 Déploiement et compatibilité
Compatible mobile, desktop, tablette

Aucun problème de compilation sur navigateurs récents (Vite < 2025 ready)

Utilise manifest.json pour intégration PWA future

🧠 À propos de ce projet
Ce projet s’inscrit dans une veille technologique active :

Maîtrise de Vite en environnement dev moderne

Réflexion sur l'architecture de projets modulaires

Respect des contraintes RGPD / responsive / UX

🧑‍💻 Auteur
Monsieur L. R., développeur frontend français, passionné par l’histoire, la tradition, le code élégant et l’accessibilité.

📬 Contact possible via GitHub ou l’adresse mentionnée dans le dépôt.

🏁 Objectifs pédagogiques
Être montré à des recruteurs

Servir de base de test/démo en entretien

Alimenter une veille front-end personnelle

Montrer une capacité à penser produit, code et esthétique

📄 Licence
Ce projet est open-source sous licence MIT — libre à vous de le forker ou l’enrichir !