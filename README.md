# Site Atelier Michel Denis — guide pour modifier le site vous-même

Ce site n'a **pas besoin d'un informaticien** pour être modifié au quotidien.
L'idée est simple : vous récupérez le site sur votre ordinateur, puis vous **demandez les changements en français** à un assistant (Claude Code), comme si vous parliez à quelqu'un. Il modifie le site pour vous.

Ce guide se lit en entier une première fois. Ensuite, seule l'**Étape 3** vous servira à chaque modification.

---

## Étape 1 — Récupérer le site sur votre ordinateur

1. Rendez-vous sur la page du site sur **GitHub** (le lien vous a été communiqué, il ressemble à `github.com/…/michel-denis-decoration`).
2. Cliquez sur le bouton vert **« Code »**.
3. Cliquez sur **« Download ZIP »**.
4. Un fichier `.zip` se télécharge. **Double-cliquez dessus** pour l'ouvrir : vous obtenez un dossier `michel-denis-decoration`.
5. Placez ce dossier à un endroit facile à retrouver, par exemple sur le **Bureau**.

> 💡 Pour voir à quoi ressemble le site, ouvrez le dossier et double-cliquez sur le fichier **`index.html`** : il s'ouvre dans votre navigateur (Chrome, Safari, Firefox…). C'est la page d'accueil.

---

## Étape 2 — Installer Claude Code (à faire une seule fois)

Claude Code est l'assistant qui va modifier le site à votre place.

1. Allez sur **https://claude.com/claude-code**.
2. Créez un compte Claude si vous n'en avez pas encore (une adresse e-mail suffit).
3. Suivez les instructions d'installation proposées sur la page pour votre ordinateur (**Mac** ou **Windows**).
4. Une fois installé, ouvrez Claude Code.

> 💡 C'est la seule étape un peu « installation ». Vous ne la faites qu'une fois. En cas de doute, la page officielle explique tout pas à pas.

---

## Étape 3 — Demander une modification

C'est ici que tout se passe, à chaque fois que vous voulez changer quelque chose.

1. Ouvrez **Claude Code**.
2. Indiquez-lui le dossier du site (celui récupéré à l'Étape 1, par exemple sur le Bureau).
3. Écrivez votre demande **en français, simplement**, puis validez. Attendez qu'il ait terminé.

### Exemples de demandes que vous pouvez écrire telles quelles

- « Change le numéro de téléphone partout par le 02 40 56 91 05. »
- « Remplace la photo d'accueil par la nouvelle image que j'ai mise dans le dossier. »
- « Corrige la faute dans le texte de la page Rideaux. »
- « Ajoute les horaires du dimanche : ouvert de 10h à 12h. »
- « Ajoute une nouvelle réalisation dans la galerie de la page Fauteuils. »
- « Change la couleur des boutons pour un ton plus foncé. »
- « Ajoute une page pour une nouvelle prestation : la restauration de chaises. »

> 💡 Vous pouvez discuter : s'il vous propose quelque chose qui ne convient pas, dites-lui simplement « non, plutôt comme ça… ». Vous ne risquez rien : tant que le site n'est pas remis en ligne, seul votre exemplaire sur l'ordinateur est modifié.

### Voir le résultat en local

Le plus rapide : **rafraîchissez la page** dans votre navigateur (ou rouvrez `index.html`).

Pour une prévisualisation fidèle (la carte de la page Contact, notamment, s'affiche mieux ainsi), lancez le site comme un vrai site web :

1. Dans le dossier du site, ouvrez un **terminal** (sur Mac : application « Terminal » ; sur Windows : « PowerShell »).
2. Copiez-collez cette commande, puis validez :

   ```
   python3 -m http.server 8000
   ```

3. Ouvrez votre navigateur à l'adresse : **http://localhost:8000**
4. Pour arrêter, revenez au terminal et appuyez sur **Ctrl + C**.

> 💡 Vous n'êtes pas obligé(e) de retenir cette commande : vous pouvez aussi écrire à Claude Code **« montre-moi le site en local »**, il s'en charge.

---

## Sauvegarder vos changements sur GitHub

Tant que vous n'avez rien renvoyé, vos modifications restent **uniquement sur votre ordinateur**. Pour les sauvegarder sur GitHub (et garder l'historique des versions), demandez simplement à Claude Code :

> « Enregistre mes changements et envoie-les sur GitHub. »

Il fera l'opération technique (ce qu'on appelle un *commit* puis un *push*) à votre place.

---

## Mettre les changements en ligne

Quand tout vous convient et que c'est sauvegardé, demandez à Claude Code :

> « Le site me convient, aide-moi à le mettre en ligne. »

Il vous guidera. Vous n'avez **aucune commande technique à retenir** : il suffit de demander.
