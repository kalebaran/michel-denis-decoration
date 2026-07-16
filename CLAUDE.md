# CLAUDE.md — contexte du projet pour Claude Code

Ce fichier est lu automatiquement par Claude Code. Il décrit le site et la façon de travailler dessus. **L'utilisateur du site n'est pas technique** : il faut faire les choses à sa place et expliquer simplement.

## Le site

Site vitrine de l'**Atelier Michel Denis by Doucet**, tapissier décorateur à Campbon (Loire-Atlantique). Refait à partir de l'ancien site Pages Jaunes.

**Contraintes à respecter absolument :**
- 100 % **statique** (HTML/CSS/JS pur), **aucun cookie**, **aucune dépendance externe non hébergée** (raison du projet = quitter Pages Jaunes pour le RGPD).
- Polices **auto-hébergées** (`assets/fonts/`), pas de Google Fonts.
- Contact par `mailto:` / `tel:` uniquement, pas de formulaire ni backend.
- Carte = **Leaflet auto-hébergé** (`assets/vendor/leaflet/`) + tuiles OpenStreetMap. Ne PAS revenir à un iframe openstreetmap.org (cookies tiers).

## Structure

- Pages `.html` à la racine ; l'**en-tête et le pied de page sont identiques** sur toutes les pages, copiés depuis `_template.html` (placeholders `__TITLE__`, `__CONTENT__`, etc.). Pour modifier l'en-tête/pied partout, éditer chaque page (ou repartir du gabarit).
- `assets/css/style.css` : système de design (couleurs et polices dans `:root` en haut).
- `assets/img/` : photos du site ; `assets/img/partners/` : logos partenaires.
- **Ne pas publier en ligne** `_template.html` ni `assets/img-src/` (archives de travail).

## Coordonnées de référence

- Adresse : 5 rue de l'Aven, Zone Porte Estuaire Ouest, 44750 Campbon
- Tél : 02 40 56 91 04 · E-mail : atelier.mdenis@doucet-peinture.fr
- Horaires : Lun–Ven 9h00–12h30 / 13h30–18h15 ; Samedi 9h30–12h30 ; Dimanche fermé
- Instagram : instagram.com/micheldenis.doucet · Facebook : facebook.com/maisondenis
- Dépôt GitHub : https://github.com/kalebaran/michel-denis-decoration

## Méthode de travail avec l'utilisateur

Quand l'utilisateur demande une modification :
1. Faire le changement directement dans les fichiers concernés.
2. Garder l'en-tête/pied identiques sur toutes les pages si on les touche.
3. Vérifier le rendu si possible.

**Prévisualiser en local** (si demandé « montre-moi le site ») :
```
python3 -m http.server 8000
```
puis http://localhost:8000

**Mettre à jour GitHub** (si demandé « enregistre / pousse sur GitHub ») — faire l'opération à sa place :
```
git add -A
git commit -m "message clair décrivant le changement"
git push
```
Le dépôt `origin` et l'authentification GitHub sont déjà configurés. La branche de travail est `main`.
