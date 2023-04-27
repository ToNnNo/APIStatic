# API Static Node pour React et Angular

## Installer les dépendances

`npm install`

## Démarrer l'application

`npm start`

L'application démarre à l'adresse http://localhost:3200/

## Authentification

L'application cherche à récupérer les clés username et password pour authentifier un utilisateur. En réponse, elle fournie un jeton JWT valable 15 min, ainsi que des informations sur l'utilisateur connecté.

### Liste des utilisateurs
- admin/admin
-  ... 

## Liste des urls disponibles

1. http://localhost:3200/               (method: GET)
2. http://localhost:3200/authentication (method: POST)
3. http://localhost:3200/product        (method: GET)
4. http://localhost:3200/quote          (method: GET - authentification nécessaire)
