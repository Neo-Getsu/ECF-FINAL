
# Guide de Déploiement du Projet

## Introduction

Ce guide décrit les étapes nécessaires pour déployer le projet, y compris la configuration du frontend et du backend, ainsi que la configuration initiale de la base de données.

## Prérequis

- Node.js et npm installés.
- Connaissance de l'utilisation du terminal ou de l'invite de commande.
- Accès aux dépôts du projet.

## Configuration du Frontend

1. Clonez le dépôt frontend depuis la branche `build-front`.
2. Naviguez dans le répertoire frontend et installez les dépendances :
   ```
   npm install
   ```
3. Construisez et servez l'application frontend :
   ```
   npm install -g serve
   serve -s build
   ```

## Configuration du Backend

1. Clonez le dépôt backend.
2. Naviguez dans le répertoire backend.
3. Créez un fichier `.env` avec les valeurs requises (fournies séparément).
4. Installez les dépendances :
   ```
   npm install
   ```

## Création de la Base de Données

- Lors du démarrage du serveur backend, un script créera automatiquement les tables nécessaires.
- L'utilisateur admin doit être créé manuellement avec les informations d'identification suivantes :
    - Nom d'utilisateur : admin
    - Mot de passe : Azerty1234 (haché)

## Démarrage du Serveur

1. Démarrez le serveur backend :
   ```
   npm start
   ```
2. Le frontend devrait maintenant communiquer avec le service backend.

## Informations de Connexion

Pour vous connecter à un compte, utilisez les informations d'identification suivantes :
- Nom d'utilisateur : `votre_nom_d'utilisateur`
- Mot de passe : `Azerty1234`

Veuillez noter qu'après la première connexion, il est fortement recommandé de changer le mot de passe par défaut pour des raisons de sécurité.
