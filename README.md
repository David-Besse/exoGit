# 🎵 Projet Deezer API avec Node.js & Express

Ce projet est une application web utilisant l'API Deezer pour rechercher des artistes, afficher des informations sur eux, consulter les tops par genre musical et bien plus encore.

## 🚀 Fonctionnalités
- 🔍 Recherche d'artistes
- 📊 Affichage des top genres musicaux
- 🎶 Consultation des albums d'un artiste
- 📈 Affichage des tendances musicales
- 🛠 API développée avec **Node.js** et **Express**

## 🛠 Technologies utilisées
- **Node.js**
- **Express.js**
- **Deezer Web API**
- **Dotenv** (pour la gestion des variables d'environnement)

## 📦 Installation

1. **Cloner le projet**
```bash
git clone https://github.com/anthony20021/exoGit.git
cd exoGit
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configurer les variables d'environnement**
   - Crée un fichier `.env` à la racine du projet et 
```env
PORT=3000
```

4. **Lancer le serveur**
```bash
npm run start
```

4. **Tester les performances**
```bash
pip install locust
locust -f ./config/locustfile.py --host=http://localhost:3000
```

Le serveur sera accessible sur `http://localhost:3000`.

## 🔗 Ressources utiles
- 📄 [Deezer Developer Docs](https://developers.deezer.com/api)
- 📜 [Express.js Documentation](https://expressjs.com/)

---

🚀 **Améliorations futures** : Ajout d'un système d'authentification, affichage des playlists, recommandations personnalisées...

