# Teamoop : Plateforme de Projet Collaboratif

## Introduction

Teamoop est une plateforme conçue pour favoriser l'apprentissage et la collaboration à travers des activités basées sur des projets. L'application permet aux utilisateurs de publier, rejoindre et gérer des projets. Teamoop s'adresse aux développeurs, aux apprenants et aux chefs de projet souhaitant collaborer efficacement sur diverses initiatives.

Ce document fournit un guide complet pour installer, exécuter et contribuer à la plateforme Teamoop. Que vous soyez développeur, contributeur ou utilisateur final, ce README vous aidera à démarrer.

# Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés :

- **Node.js version 22**  
  Vérifiez la version de Node.js en exécutant :

  ```bash
  node -v # devrait afficher `v22.x.x`
  ```

- **npm version 10.x.x**  
  Vérifiez la version de npm avec :

  ```bash
  npm -v # devrait afficher `10.x.x`
  ```

- **Docker et Docker Compose**  
  Assurez-vous que Docker et Docker Compose sont installés. Vous pouvez vérifier en exécutant :

  ```bash
  docker -v # devrait afficher la version de Docker
  docker-compose -v # devrait afficher la version de Docker Compose
  ```

# Installation

Installez les dépendances requises en exécutant :

```bash
npm install
```

## Serveur de développement

Pour démarrer un serveur de développement local, exécutez :

```bash
npm start
```

Une fois le serveur lancé, ouvrez votre navigateur et accédez à `http://localhost:4200/`. L'application se rechargera automatiquement chaque fois que vous modifierez un fichier source.

## Démarrer l'API

Pour lancer l'API backend, assurez-vous d'avoir Docker et Docker Compose installés, puis exécutez :

```bash
docker-compose up
```

Cela démarrera le service API défini dans le fichier `docker-compose.yml` du projet backend.

## Structure du projet

### `services/`

Contient tous les services utilisés pour la communication avec l'API backend.

### `pages/`

Contient les composants principaux de l'application (ex. page principale, connexion, etc.).

### `components/`

Inclut les sous-composants et les composants réutilisables.

### `models/`

Définit les interfaces et classes utilisées dans toute l'application.

## Directives de codage

Ce projet est construit avec Angular 19 et suit les pratiques suivantes :

- **Composants autonomes (Standalone Components)** : Tous les composants sont autonomes.
- **API Signals** : Utilisée pour la gestion d'état.
- **Contrôle de flux amélioré** : Utilisation des directives `@if` et `@else`.
- **Modèles d'entrée et de sortie** : Utilisation des décorateurs `@Input()` et `@Output()`.
- **RxJS** : Utilisé pour gérer des requêtes asynchrones complexes.

## Vérification du code

Assurez-vous de la qualité du code en exécutant les outils d'analyse statique :

- **StyleLint** pour le code CSS/SCSS
- **ESLint** pour le code JavaScript/TypeScript :
  ```bash
  npm run lint
  ```

## Exécution des tests

Ce projet utilise **Cypress** pour les tests End-to-End (e2e) et les tests de composants.

### Lancer les tests

Démarrez d'abord Docker :

```bash
docker compose up -d
```

Démarrez ensuite le serveur Angular :

```bash
npm run start
```

Puis exécutez les tests avec :

```bash
npm run e2e
```

## Écriture des tests de composants

Pour créer un test pour un composant Angular spécifique, générez un fichier `*.component.cy.ts` dans le même répertoire que le composant. Ces fichiers sont automatiquement générés lorsque vous créez un nouveau composant via la commande suivante :

```bash
ng g c components/example-component
```

### Structure des tests de composants

Les tests de composants sont organisés selon les catégories suivantes :

- **Tests d'entrée (Input Tests)** : Validation du comportement du composant avec différentes entrées.
- **Tests de sortie (Output Tests)** : Vérification des événements émis par le composant.
- **Tests de construction de la classe du composant** : Assurent que la classe du composant est bien initialisée.
- **Tests de construction du template** : Vérifient que le template est correctement rendu.
- **Tests visuels** : Valident dynamiquement les styles et l'apparence.

### Imports requis

Incluez les imports suivants dans vos fichiers de test de composant :

```typescript
import { createOutputSpy } from 'cypress/angular';
import variables from 'cypress/variables.json';
import 'cypress-real-events';
```

### Gestion des variables SCSS pour les tests visuels

Le fichier `variables.json` contient toutes les variables SCSS extraites du fichier `_variables.scss` de votre projet. Pour maintenir la cohérence entre SCSS et les tests Cypress :

1. Ajoutez toutes nouvelles variables dans `_variables.scss`.
2. Ne les incluez pas manuellement dans `:root`, le script s'en charge automatiquement.

### Mise à jour du fichier JSON des variables

Lorsque vous modifiez le fichier `_variables.scss`, regénérez le fichier JSON correspondant en exécutant :

```bash
npm run build:variables
```

Cela garantit que vos tests Cypress accèdent toujours aux derniers styles et variables.

### Exécution des tests visuels Cypress

Pour exécuter et déboguer visuellement les tests avec Cypress Test Runner, exécutez :

```bash
npm run cypress:open
```
