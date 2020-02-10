# PWA orientée données et capacités modernes

## Introduction

Durant ce codelab, vous créerez une application Web progressive disponible hors-ligne, orientée données, et dotée de capacités modernes de pointe.

### Sujets traités

* Comment utiliser la synchronisation en arrière-plan (background sync) pour mettre à jour l'application, même lorsque celle-ci n'est pas affichée.

### Pré-requis

Ce codelab requiert que vous soyez déjà familier avec les éléments de base du développement Web.

En particulier, il est recommandé d'avoir une certaine maîtrise d'HTML, de CSS et de JavaScript (i.e. ES2019),
et d'avoir au moins une fois contribué au développement d'une Web App (peu importe le framework ou la librairie utilisé).

### IMPORTANT

<aside class="notice">
  <b>Dans le cas où vous assistiez à une version "live" de ce codelab (durant une conférence, comme le Devfest Paris 2020 par exemple), il vous est fortement recommandé d'effectuer les étapes 2 et 3 (installations) en amont !</b>
</aside>

## Logiciels pré-requis

* Un IDE / un éditeur de code ou de texte
  * recommandation: [Download Visual Studio Code ⬇️](https://code.visualstudio.com/)
* La dernière version de Chrome
  * [Chrome Canary ⬇️](https://www.google.com/chrome/canary/)
  * ou [Chome Dev ⬇️](https://www.google.com/chrome/dev/) si vous ne pouvez install la version Canary (eg sur Linux)
  * (optionnel, en supplément) [Firefox ⬇️](https://www.mozilla.org/fr/firefox/channel/desktop/#nightly) Nightly ou Developer Edition
* [Node.js ⬇️](https://nodejs.org/en/) et [npm ⬇️](https://www.npmjs.com/)

### Pour tester certaines étapes

<aside class="notice">
  Ces éléments sont nécessaires pour tester plusieurs fonctionnalités que vous ajouterez à la PWA. Ils ne sont pas absolument indispensable pour compléter ce codelab, mais très fortement recommandés.
</aside>

* un système Windows ou Mac OS X
  * si vous utilisez Linux, vous pouvez utilisez une [VM ⬇️](https://developer.microsoft.com/en-us/windows/downloads/virtual-machines/), mais vous devrez également y installer la dernière version de Chrome (cf. plus haut), et vous assurer que celle-ci peut accéder au système hôte via un réseau virtuel (HTTP)
* un smartphone Android, un cable usb et [Android Studio](https://developer.android.com/studio) ℹ️

## Mise en place

### Projet

Clonez le code de démarrage depuis GitHub via la commande suivante: ⬇️

```
git clone https://github.com/noelmace/data-driven-pwa.git
```

Vous pouvez également le télécharger au format zip [en cliquant ici ⬇️](https://github.com/noelmace/data-driven-pwa/archive/master.zip).

### Dépendances

Ouvrez le terminal, rendez-vous à la racine du projet, et installez les dépendances en lançant la commande suivante:

```
npm install
```
