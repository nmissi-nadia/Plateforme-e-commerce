# Plateforme-e-commerce
YouMarket lance une plateforme e-commerce innovante pour une expérience d'achat fluide et personnalisée. Les utilisateurs pourront configurer leurs produits et utiliser des outils avancés pour la recherche, la navigation et la gestion des commandes. En utilisant HTML, CSS, Tailwind et JavaScript.


# 🎯 Football T-shirts Merchandise Web App  

> Une application web moderne permettant aux utilisateurs de parcourir, rechercher et acheter des T-shirts de football. Cette application utilise une API pour fournir des données dynamiques et propose une expérience utilisateur fluide.

---

## 📝 Table des Matières
1. [Aperçu du Projet](#aperçu-du-projet)
2. [Fonctionnalités](#fonctionnalités)
3. [Technologies Utilisées](#technologies-utilisées)
4. [Installation et Utilisation](#installation-et-utilisation)
5. [Structure du Projet](#structure-du-projet)
6. [API Utilisée](#api-utilisée)
7. [Captures d'Écran](#captures-décran)
8. [Améliorations Futures](#améliorations-futures)
9. [Remerciements](#remerciements)

---

## 📖 Aperçu du Projet
# Rôles & Missions :

​

## Conception et Maquettage (D & M) : 🖌️

Maquettes : Élaboration de maquettes attractives, incluant un slider et des effets visuels interactifs pour optimiser l’expérience utilisateur.

​

## Développement : 💻

- **Carrousel :** Intégration d'un carrousel dynamique pour présenter les produits phares et promotions.
- **Galerie :** Création d'une galerie permettant de visualiser les produits sous différents angles et options.
- **Validation REGEX :** Implémentation de validations avec des expressions régulières pour garantir la qualité des données saisies (ex. nom, adresse, e-mail).
- **Filtre et recherche :** Développement de fonctionnalités de filtrage avancées, permettant aux utilisateurs de rechercher facilement les produits selon différents critères (taille, couleur, caractéristiques techniques, etc.).
- **Personnalisation des produits :** Permettre aux utilisateurs de configurer les caractéristiques de chaque produit, avec une mise à jour du prix.
- **Panier :** Mise en place d’un panier interactif qui ajuste les quantités si le produit est déjà sélectionné, tout en affichant le prix total actualisé.
- **Devis :** Génération d'un devis au format PDF, récapitulant les choix et personnalisations, pour offrir aux clients la possibilité d’archiver ou partager leurs commandes.
- **Local Storage :** Utilisation du localStorage pour sauvegarder les préférences de l’utilisateur, permettant une navigation plus fluide et un retour aux choix précédents.
- **Consommation API :** Intégration d'une API pour récupérer les informations sur les produits, améliorant ainsi l’efficacité et la flexibilité de la gestion des données.
​

​

## Pages à développer : 📄

​

- **Page Accueil :**

Présentation de YouMarket et des valeurs qui la différencient.
Mise en avant des produits et services les plus populaires, grâce à un carrousel JavaScript.
Accès rapide aux différentes sections du site, notamment le catalogue, catégories, le panier, A propos…
Mise en place d’une pagination fluide pour organiser efficacement les résultats de recherche par différentes catégories (un maximum de 6 catégories par page "systeme de pagination").
​

- **Page Catalogue :**

Affichage de la liste complète des produits disponibles, avec des options de filtrage et de tri pour faciliter la navigation.
Moteur de recherche par mots-clés pour une expérience utilisateur optimisée (Bonus).
Chaque produit dispose d'un lien vers une page détaillée, incluant toutes les informations nécessaires.
Pagination fluide pour organiser efficacement les résultats de recherche(avec un maximum de 12 produits par page).
​

- **Page Détails du Produit :**

Affichage d’une description détaillée des produits, incluant leurs caractéristiques principales.
Options de personnalisation (choix des caractéristiques techniques, accessoires, etc.) avec mise à jour du prix en fonction des sélections.
Affichage du prix total et des caractéristiques sélectionnées pour un aperçu clair de l'achat.
Intégrez un bouton d’ajout au panier et calculez le prix final en fonction des options sélectionnées.
​

- **Page Panier :**

Liste des produits ajoutés au panier avec les options choisies.
Possibilité de modifier les quantités ou de retirer des articles, avec une mise à jour automatique du prix total.
Affichage d’un récapitulatif de la commande(devis) et option de finaliser l’achat(valider).
​

- **Page Devis :**

Génération d’un devis clair et détaillé, récapitulant toutes les sélections et personnalisations du client.
Option d’impression au format PDF, permettant aux utilisateurs de conserver leur devis.
​

- **Page À Propos :**

Présentation de l’histoire, de la mission et de l’équipe de YouMarket.
Informations sur les valeurs et engagements de l’entreprise, renforçant la relation de confiance avec les clients
Des avis authentiques de nos utilisateurs sur leur expérience d'achat, illustrant notre engagement à satisfaire leurs besoins.
FAQ.

---

## 🌟 Fonctionnalités
- **Affichage dynamique des produits :** Données récupérées depuis une API.
- **Recherche intelligente :** Trouver des produits en fonction de leur titre.
- **Système de filtres :** Filtres sur les catégories et les plages de prix.
- **Panier interactif :** Ajouter des produits au panier avec gestion des quantités.
- **Navigation entre pages :** Pagination fluide et navigation vers les détails des produits.

---

## 💻 Technologies Utilisées
- **Frontend :**
  - HTML5, CSS3 (Tailwind CSS)
  - JavaScript (ES6+)
- **Backend :**
  - API REST externe
- **Stockage local :**
  - `localStorage` pour la gestion du panier.
- **Framework CSS :**
  - Tailwind CSS pour un design réactif et moderne.

---

## 🚀 Installation et Utilisation
1. **Cloner le dépôt** :
   ```bash
   git clone https://github.com/nmissi-nadia/Plateforme-e-commerce
   cd nom-repository
   ```

2. **Ouvrir le fichier HTML principal** :
   Ouvrez `index.html` dans un navigateur web.

3. **Structure de la Navigation** :
   - Page d'accueil : .
   - Page catalogue : Liste des produits avec filtres et recherche.
   - Détails du produit : Informations détaillées sur un produit spécifique.
   - Page panier : Visualisation des articles ajoutés.

4. **Dépendances :**  
   Aucun package ou installation supplémentaire n'est requis.

---

## 📂 Structure du Projet
```
Plateforme-e-commerce/
├── assets/
│   ├── css/
│   │   └── tailwind.css
|   |   └── about.css
│   ├── js/
│       └── M_main.js
│       └── abdo.js
│       └── catalo.js
│       └── details.js
├── vues/
│   ├── index.html
│   ├── details.html
│   ├── cart.html
├   |── about.html
├── README.md
```

---

## 🌐 API Utilisée
**Lien API :** [https://mohamedmoustir.github.io/api/](https://mohamedmoustir.github.io/api/)  
**Exemple de données :**
```json
{
  "Tshorts": [
    {
      "id": 1,
      "title": "Maillot Real Madrid",
      "price": 200,
      "description": "Maillot officiel de la saison 2024",
      "category": "La Liga",
      "images": ["https://lien-image.com"],
      "rating": {
        "rate": 4.5,
        "count": 120
      }
    }
  ]
}
```

---
## 📸 Captures d'Écran
### Page d'accueil
> **Description :** PAgr d'accueil de notre site.  

![Page d'accueil](/assets/imgs/home.png)

### Page Catalogue
> **Description :** Liste des produits avec recherche et filtres.  

![Page Catalogur](/assets/imgs/cat.png)


### Page détails du produit
> **Description :** Affiche les détails complets d'un produit sélectionné.  

![Page détails](/assets/imgs/detail.png)

### Page à propos de nous
> **Description :** Affiche les information à propos de notre site.  

![Page détails](/assets/imgs/propos.png)

### Page panier
> **Description :** Visualisation des produits ajoutés au panier.  

![Page panier](https://via.placeholder.com/800x400?text=Capture+Panier)

---

## 🔮 Améliorations Futures
- Intégration d'un système d'authentification pour sauvegarder les paniers par utilisateur.
- Ajout d'une fonctionnalité de paiement simulé.
- Design amélioré avec des animations et transitions supplémentaires.
- Fonctionnalité de tri par popularité ou date.

---

## 🙏 Remerciements
- Merci à **YouCode** pour les formations et le soutien constant.
- Merci à notre instructeur pour son accompagnement et ses précieux conseils.
- Merci à la communauté open-source pour les outils et les ressources partagées.

---

## 🧑‍💻 Auteur
**[Nadia Nmissi](https://github.com/nmissi-nadia)**

**[Mohamed Moustir](https://github.com/MohamedMoustir)**

**[Mohamed Abdelhak Dadssi](https://github.com/Dadssi)** 

**[Oussama Amou](https://github.com/oussamaamou)** 

**[Abderrahman Ahouari](https://github.com/Abderrahman-Ahouari)**

Étudiants en développement web @ YouCode. Passionnée par la création d'interfaces utilisateur modernes et intuitives.



---
