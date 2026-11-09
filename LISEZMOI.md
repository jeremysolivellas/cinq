# Cinq — mise en ligne (étape 1)

## 1. Créer les deux comptes gratuits
1. GitHub : https://github.com/signup
2. Vercel : https://vercel.com/signup (choisis « Continue with GitHub »)

## 2. Mettre le dossier sur GitHub
1. Sur GitHub, clique sur « + » en haut à droite, puis « New repository ».
2. Nom : `cinq`. Laisse « Public » ou choisis « Private », puis « Create repository ».
3. Sur la page suivante, clique sur le lien « uploading an existing file ».
4. Dézippe `cinq.zip` sur ton ordinateur, ouvre le dossier `cinq`, sélectionne TOUT son contenu (dossiers `app` et `lib` compris) et glisse-le dans la page GitHub.
5. Clique sur « Commit changes ».

## 3. Publier avec Vercel
1. Sur https://vercel.com/new, clique sur « Import » à côté du dépôt `cinq`.
2. Ne change aucun réglage, clique sur « Deploy ».
3. Attends environ une minute. Vercel affiche une adresse en `.vercel.app` : ouvre-la sur ton téléphone.

## 4. Après la mise en ligne
Dans Vercel : Settings → Environment Variables. Ajoute `NEXT_PUBLIC_SITE_URL` avec ton adresse complète (ex. `https://cinq-xxxx.vercel.app`), puis redéploie. Elle sert à l'image d'aperçu des liens partagés.
