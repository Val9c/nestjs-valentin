# Évaluation finale
Pour ce test final vous allez être évalués sur votre maîtrise du framework NestJS. Ce projet, qui est une TodoList et qu'il vous faudra dupliquer (fork), contient un certain nombre de tests automatisés. Chacun d'entre eux couvre une fonctionnalité spécifique : création d'un utilisateur, création d'une tâche, vérification que le serveur renvoie une erreur dans tel ou tel cas etc.

🎯 **Votre objectif est simple :** faire passer tous ces tests en implémentant vous-mêmes ces fonctionnalités.

Nom : Royer 
Prénom : Valentin

## Setup
### 🏗️ Initialisation
1. Installez ses dépendances en utilisant la commande `npm ci`

### 💾 Base de données

* PostgreSQL, pour du relationnel

Cela vous permet à vous (et à moi) de ne pas avoir à les installer sur nos machines. Pour pouvoir utiliser ces SGBD contenairisés :
1. Installez [Docker Desktop](https://www.docker.com/products/docker-desktop/) sur votre machine
2. Lancez-le
3. Utilisez le script npm : `start:postgres:windows`

outil d'ORM :
* [TypeORM](https://docs.nestjs.com/techniques/database)

### 🧪 Tests
1. Utilisez le script npm : `test:e2e:postgres:windows`