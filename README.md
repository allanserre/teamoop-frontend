
# Teamoop Frontend

# Prérequis 

Installer la version 22 de node

```bash
node -v # devrais afficher `v22.x.x`
```

Vérifier la version de npm 

```bash
npm -v # devrais afficher `10.x.x`
```

On installe les packages 

```bash
npm install
```

## Serveur de développement

Pour démarrer un serveur de développement local, exécutez :

```bash
ng serve
```

Une fois le serveur lancé, ouvrez votre navigateur et accédez à `http://localhost:4200/`. L'application se rechargera automatiquement chaque fois que vous modifiez un fichier source.

## Structure du projet 

### Services

Regroupe l'ensemble des services de l'application pour la communication avec l'API

### Pages 

Composant principaux ( page principale , login etc ... )

### Components

Sous composants et composants réutilisable 

### Models

Représentation des différentes interface et classes utilisées

## Construction

Pour construire le projet, exécutez :

```bash
npm run build
```

Cela compilera votre projet et stockera les artefacts de construction dans le répertoire `dist/`. Par défaut, la construction pour la production optimise votre application pour la performance et la rapidité.

## Régles de code

Le projet est basé sur Angular 19 ainsi :

- Les composants sont en standalone 
- Utilisation de l'API des signaux
- Utilisation du nouveau control flow @else @if etc
- Utilisation des model Input input() output()
- RxJS pour la gestion des requètes complexe asynchrone
C

## Verification du code 

Vérification du code avec un EsLint et StyleLint

```bash
npm run lint
```

## Exécution des tests de bout en bout (end-to-end)

Pour effectuer des tests End-To-End (e2e), exécutez :

```bash
npm run e2e
```
Le framework e2e choisis est Cypress
