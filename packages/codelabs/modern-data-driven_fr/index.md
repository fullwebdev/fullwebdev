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

<aside class="warning">
  <b>Dans le cas où vous assistiez à une version "live" de ce codelab (durant une conférence, comme le Devfest Paris 2020 par exemple), il vous est fortement recommandé d'effectuer les étapes 2 et 3 (installations) en amont !</b>
</aside>

## Logiciels pré-requis

* Un IDE / un éditeur de code ou de texte
  * recommandation : [Download Visual Studio Code](https://code.visualstudio.com/)
* La dernière version de Chrome
  * [Chrome Canary](https://www.google.com/chrome/canary/)
  * ou [Chome Dev](https://www.google.com/chrome/dev/) si vous ne pouvez install la version Canary (eg sur Linux)
  * (optionnel, en supplément) [Firefox](https://www.mozilla.org/fr/firefox/channel/desktop/#nightly) Nightly ou Developer Edition
* [Node.js](https://nodejs.org/en/) et [npm](https://www.npmjs.com/)

### Pour tester certaines étapes

<aside class="notice">
  Ces éléments sont nécessaires pour tester plusieurs fonctionnalités que vous ajouterez à la PWA. Ils ne sont pas absolument indispensable pour compléter ce codelab, mais très fortement recommandés.
</aside>

* un système Windows ou Mac OS X
  * si vous utilisez Linux, vous pouvez utilisez une [VM](https://developer.microsoft.com/en-us/windows/downloads/virtual-machines/), mais vous devrez également y installer la dernière version de Chrome (cf. plus haut), et vous assurer que celle-ci peut accéder au système hôte via un réseau virtuel (HTTP)
* un smartphone Android, un cable usb et [Android Studio](https://developer.android.com/studio) ℹ️

## Mise en place

### Projet

Clonez le code de démarrage depuis GitHub via la commande suivante :

```bash
git clone https://github.com/noelmace/data-driven-pwa.git
```

Vous pouvez également le télécharger au format zip [en cliquant ici](https://github.com/noelmace/data-driven-pwa/archive/master.zip).

### Dépendances

Rendez-vous à la racine du projet via la commande :

```bash
cd data-driven-pwa
```

Installez ensuite les dépendances du projet en lançant la commande suivante :

```bash
npm install
```

<aside class="special">
  Cette commande lance l'installation des outils de développement depuis la racine du dépôt, incluant [Lerna](https://lerna.js.org/). Ce dernier est ensuite utilisé pour également installer les dépendances de tous les sous-projets, à partir desquels vous effectuerez les étapes suivantes. Par concéquent, <b>il ne vous sera pas nécessaire d'effectuer un `npm install` pour chacun de ces projets</b>.
</aside>

## (optionnel) Créer la PWA

<aside class="special">
  Le projet à partir duquel vous effectuerez les étapes ultérieurs de ce codelab se basent sur l'application construite en suivant le codelab de Google intitulé <a href="https://codelabs.developers.google.com/codelabs/workbox-indexeddb" target="_blank" rel="noopener noreferrer"><i>Build an offline-first, data-driven PWA</i></a>. Vous pouvez sauter ce chapitre si vous ne souhaitez pas construire l'application vous même.
</aside>

### démarrer le serveur

<aside class="notice">
  Les points suivants remplacent l'étape 3 du codelab mentionné précédemment.<br>
  <a href="https://codelabs.developers.google.com/codelabs/workbox-indexeddb/#2" target="_blank" rel="noopener noreferrer">Consultez la page correspondante</a> pour plus d'explications.
</aside>

Via le terminal, rendez-vous dans le dossier "project" où se situent les éléments de base du projet :

```bash
cd project
```

À partir de ce dossier, démarrez le serveur de développement pour pouvoir utiliser et tester l'application :

```bash
npm run --silent start
```

### Ouvrir l'application

Ouvrez l'application en entrant l'url [localhost:8081](http://localhost:8081) dans votre navigateur web.

L'application vous demande alors une autorisation pour pouvoir afficher des notifications. Cliquez sur "Autoriser" ou "Allow" pour l'accepter.

![Autoriser les notifications](https://codelabs.developers.google.com/codelabs/workbox-indexeddb/img/9ca6ac4aededfba6.png) \
_Crédit image: ©️ Google Inc._

### Cache et IndexDB

Suivez les <a href="https://codelabs.developers.google.com/codelabs/workbox-indexeddb/#3" target="_blank" rel="noopener noreferrer">étapes 4 à 7 du codelab Google</a> pour permettre à l'application de fonctionner pleinement hors-ligne.

## Enregistrer les données une fois de retour en ligne

### Démarrer le serveur

Si vous êtes passé directement à cette étape sans effectuer la précédente, rendez vous dans le projet "before-bgsync" et lancez le serveur de développement :

```bash
cd before-bgsync
npm run --silent start
```

Ouvrez ensuite [localhost:8081](http://localhost:8081) avec Chrome.

<aside class="warning">
  Si vous ne l'avez pas déjà fait à l'étape précédente, acceptez la demande d'autorisation de notifications.
</aside>

### Explication

L'application dont vous disposez à présent (après avoir suivi l'étape précédent, ou en étant passé directement à celle-ci) est une PWA entièrement disponible hors-ligne.

Sans développement spécifique, quand un utilisateur tente d'accéder à une Web App en étant déconnecté, un message "Offline" est affiché, empéchant toute utilisateur de l'application.

<p class="center">
  <img src="./assets/firefox-offline.png" alt="firefox is offline" style="margin: 1rem"/>
</p>

Workbox a permis, en mettant en cache le App Shell, de ne jamais afficher ce type de message pour tout utilisateur retournant sur l'application.

Mais une application n'est rien sans données !
Nous avons donc utilisé IndexDB pour mettre ces données en cache (ici, des "events"), et permettre de les consulter même en étant hors-ligne.

Un problème persiste cependant : comme le serveur n'est bien évidemment pas disponible quand l'utilisateur est hors ligne, tous les "events" qu'il aura alors créé n'auront été stockés que localement. Ils seront donc perdus très rapidement !

Nous allons durant cette étape résoudre ce problème via workbox-background-sync, et donc la Background Sync API.

### STEPS

***TODO***

### Compatibilité des navigateurs

La [BackgroundSync API](https://wicg.github.io/BackgroundSync/spec/) est toujours à ce jour à l'état de Draft.
Par conséquent, même si [Firefox souhaite l'implémenter depuis longtemps](https://groups.google.com/forum/#!msg/mozilla.dev.platform/cTAnBeZFtUE/kx0I4UC-AQAJ), celle-ci n'est pour l'heure supportée que par [Chrome](https://www.chromestatus.com/feature/6170807885627392) et [Opera](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/sync#Browser_compatibility).

Fort heureusement, nous avons implémenté cette fonctionnalité via Workbox, qui intègre une [stratégie de fallback](https://developers.google.com/web/tools/workbox/modules/workbox-background-sync#adding_a_request_to_the_queue) :
à chaque fois que le service worker sera à nouveau démarré, celui-ci rejouera tous les appels qui n'ont pu aboutir jusque là, et ont donc été mis en attente.

Cela est bien entendu moins efficace (car l'application doit être active pour se faire), mais résout la plupart des problèmes de compatibilité.
