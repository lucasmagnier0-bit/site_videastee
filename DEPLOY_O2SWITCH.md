# Déployer le site sur o2switch

Le projet est configuré pour produire un site statique dans `dist/`. Il n’y a pas besoin de Node.js ni de **Setup Node.js App** sur o2switch.

## 1. Générer le dossier à envoyer

Depuis le dossier du projet :

```bash
npm install
npm run build
```

La commande crée `dist/` avec `index.html`, les assets, les images et `.htaccess`.

## 2. Envoyer sur o2switch

Dans cPanel → **File Manager** :

1. Ouvre le dossier `public_html` lié à ton domaine.
2. Envoie le contenu de `dist/` dans `public_html` (notamment `index.html`, `assets/` et `.htaccess`).
3. Si une ancienne version existe, remplace ses fichiers par ceux de `dist/`.

Ne téléverse pas `node_modules`, `src`, `dist/server` ou les fichiers de développement.

## 3. Domaine et HTTPS

Le domaine doit pointer vers o2switch via les nameservers indiqués dans ton e-mail de bienvenue, ou via l’enregistrement DNS demandé par o2switch. Après propagation, active le certificat SSL gratuit dans cPanel si nécessaire.

Le fichier `.htaccess` est important : il permet d’ouvrir directement `/onprendrdv` et `/onprendrdv/questionnaire` tout en laissant le routeur du site fonctionner.

## 4. Vérifier

Teste ces adresses :

- `/`
- `/onprendrdv`
- `/onprendrdv/questionnaire`

Les formulaires envoient les demandes à `lucasmagnier.videaste@gmail.com` via FormSubmit. La première soumission demande une confirmation de cette adresse.
