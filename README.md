# Site Atelier Michel Denis — guide pour modifier le site vous-même

Ce site n'a **pas besoin d'un informaticien** pour être modifié au quotidien.
L'idée est simple : vous récupérez le site sur votre ordinateur, puis vous **demandez les changements en français** à un assistant (Claude Code), comme si vous parliez à quelqu'un. Il modifie le site — et peut même l'enregistrer sur internet — à votre place.

Ce guide se lit en entier une première fois. Ensuite, seule l'**Étape 4** vous servira à chaque modification.

> 💡 **Bon à savoir :** un fichier `CLAUDE.md` est déjà présent dans le site. Claude Code le lit tout seul : il connaît donc déjà le projet et sait comment le récupérer, le prévisualiser et l'enregistrer sur GitHub. La plupart du temps, il vous suffit de **lui demander**.

---

## Étape 1 — Installer les deux outils (à faire une seule fois)

Deux logiciels gratuits à installer, une seule fois :

1. **Git** — sert à récupérer le site et à envoyer vos modifications sur internet.
   Rendez-vous sur **https://git-scm.com/downloads**, téléchargez la version pour votre ordinateur (Mac ou Windows) et installez-la (laissez les options par défaut).

2. **Claude Code** — l'assistant qui modifie le site pour vous.
   Rendez-vous sur **https://claude.com/claude-code**, créez un compte (une adresse e-mail suffit) et suivez les instructions d'installation.

> 💡 C'est la seule étape « installation ». Vous ne la faites qu'une fois.

---

## Étape 2 — Récupérer le site sur votre ordinateur

Le site est stocké sur GitHub, ici : **https://github.com/kalebaran/michel-denis-decoration**

Le plus simple : **demandez-le à Claude Code**. Ouvrez-le et écrivez :

> « Récupère (clone) le site depuis https://github.com/kalebaran/michel-denis-decoration sur mon ordinateur. »

Si vous préférez le faire vous-même, ouvrez un **terminal** (Mac : application « Terminal » ; Windows : « PowerShell »), placez-vous là où vous voulez ranger le site, puis tapez :

```
git clone https://github.com/kalebaran/michel-denis-decoration.git
```

Vous obtenez un dossier `michel-denis-decoration` contenant tout le site.

> 💡 Vous ne refaites cette étape **qu'une seule fois**. Ensuite, le dossier reste sur votre ordinateur.

---

## Étape 3 — Ouvrir le site avec Claude Code

Ouvrez **Claude Code** et indiquez-lui le dossier `michel-denis-decoration` récupéré à l'étape précédente. C'est tout : il est prêt à travailler.

---

## Étape 4 — Demander une modification

C'est ici que tout se passe, à chaque fois que vous voulez changer quelque chose.
Écrivez votre demande **en français, simplement**, puis validez. Attendez qu'il ait terminé.

### Exemples de demandes que vous pouvez écrire telles quelles

- « Change le numéro de téléphone partout par le 02 40 56 91 05. »
- « Remplace la photo d'accueil par la nouvelle image que j'ai mise dans le dossier. »
- « Corrige la faute dans le texte de la page Rideaux. »
- « Ajoute les horaires du dimanche : ouvert de 10h à 12h. »
- « Ajoute une nouvelle réalisation dans la galerie de la page Fauteuils. »
- « Change la couleur des boutons pour un ton plus foncé. »
- « Ajoute une page pour une nouvelle prestation : la restauration de chaises. »

> 💡 Vous pouvez discuter : s'il propose quelque chose qui ne convient pas, dites simplement « non, plutôt comme ça… ». Vous ne risquez rien : tant que le site n'est pas renvoyé sur internet, seul votre exemplaire sur l'ordinateur est modifié.

### Voir le résultat en local

Le plus rapide : rouvrez le fichier `index.html` dans votre navigateur.

Pour une prévisualisation fidèle (la carte de la page Contact s'affiche mieux ainsi), demandez à Claude Code **« montre-moi le site en local »**. Il lancera la commande suivante pour vous :

```
python3 -m http.server 8000
```

Ouvrez alors votre navigateur à l'adresse **http://localhost:8000**.

---

## Étape 5 — Enregistrer les changements et mettre à jour internet

Quand tout vous convient, il faut **renvoyer vos modifications sur GitHub** : c'est ce qui met le site à jour et sauvegarde vos versions.

Le plus simple : **demandez-le à Claude Code**.

> « Enregistre mes changements et envoie-les sur GitHub. »

Il fera l'opération à votre place (les commandes techniques `git add`, `git commit` puis `git push`).

Si vous préférez le faire vous-même, dans le terminal placé dans le dossier du site :

```
git add -A
git commit -m "Décrivez ici votre changement"
git push
```

> 💡 En résumé, à chaque modification : **Étape 4** (demander le changement) → **Étape 5** (« enregistre sur GitHub »). Rien d'autre à retenir.
