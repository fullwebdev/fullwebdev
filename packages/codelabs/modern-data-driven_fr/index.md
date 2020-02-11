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

<aside class="warning">
  <p>Assurez vous d'utiliser la dernière version de Workbox (5.0.0 au moment de l'écriture de ce codelab).</p>
  <p>
    Pour se faire, utilisez la ligne suivante à la place de celle indiquée sur le codelab Google:
  <p>
</aside>

```javascript
importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');
```

Suivez les <a href="https://codelabs.developers.google.com/codelabs/workbox-indexeddb/#3" target="_blank" rel="noopener noreferrer">étapes 4 à 7 du codelab Google</a> pour permettre à l'application de fonctionner pleinement hors-ligne.

## Enregistrer les données une fois de retour en ligne

### Démarrer le serveur

Si vous êtes passé directement à cette étape sans effectuer la précédente, rendez vous dans le projet "before-bgsync" et lancez le serveur de développement :

```bash
cd before-bgsync
npm run --silent start
```

Ouvrez ensuite [localhost:8081](http://localhost:8081) avec Chrome pour tester l'application.

<aside class="warning">
  Si vous ne l'avez pas déjà fait à l'étape précédente, acceptez la demande d'autorisation de notifications.
</aside>

Une fois l'application chargée, stoppez le serveur (Ctrl+C dans le terminal) pour simuler une coupure réseau, puis rechargez l'application.

Vous constaterez alors que l'application semble fonctionner à l'identique.

### Analyser le fonctionnement du mode hors-ligne

<aside style="notice">
  Si vous avez effectué l'étape 4, vous pouvez passer cette étape.
</aside>

Dans les developer tools de Chrome, explorez les éléments suivants :

* Service Workers : un service worker est actif
* IndexedDB : la base de donnée 'dashboardr' permet de stocker localement les events pour une consultation hors ligne

Enfin, stoppez le serveur (Ctrl+C dans la console) avant de passer à l'étape suivante.

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

### Compatibilité des navigateurs

La [BackgroundSync API](https://wicg.github.io/BackgroundSync/spec/) est toujours à ce jour à l'état de Draft.
Par conséquent, même si [Firefox souhaite l'implémenter depuis longtemps](https://groups.google.com/forum/#!msg/mozilla.dev.platform/cTAnBeZFtUE/kx0I4UC-AQAJ), celle-ci n'est pour l'heure supportée que par [Chrome](https://www.chromestatus.com/feature/6170807885627392) et [Opera](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/sync#Browser_compatibility).

Fort heureusement, nous allons implémenter cette fonctionnalité via Workbox, qui intègre une [stratégie de fallback](https://developers.google.com/web/tools/workbox/modules/workbox-background-sync#adding_a_request_to_the_queue) :
à chaque fois que le service worker sera à nouveau démarré, celui-ci rejouera tous les appels qui n'ont pu aboutir jusque là, et ont donc été mis en attente.

Cela est bien entendu moins efficace (car l'application doit être active pour se faire), mais résout la plupart des problèmes de compatibilité.

### Mise en place du Background Sync

Ajoutez le code suivant dans **app/sw.js** juste en dessous de `precacheAndRoute` :

```javascript
const { BackgroundSyncPlugin } = workbox.backgroundSync;
const { registerRoute } = workbox.routing;
const { NetworkOnly } = workbox.strategies;

const bgSyncPlugin = new BackgroundSyncPlugin('dashboardr-queue');

const networkWithBackgroundSync = new NetworkOnly({
  plugins: [bgSyncPlugin]
});

registerRoute(/\/api\/add/, networkWithBackgroundSync, 'POST');
```

Enregistrez le fichier, et relancez le serveur :

```bash
npm run --silent start
```

### Tester l'application

Pour voir le résultat de cette nouvelle fonctionnalité, effectuez les actions suivantes :

1. Actualisez l'application
  a. Rafraîchissez la page dans Chrome.
  b. Activez le nouveau service worker en cliquant sur `skipWaiting` dans les Developer Tools > Service Workers.
  c. Enfin, rafraîchissez la page à nouveau.
2. Stoppez le serveur en entrant `Ctrl+C` pour remettre l'application hors-ligne.
3. Déconnectez votre ordinateur du réseau **pour de vrais** !
4. Dans les devtools, à la section "Background Sync", démarrez la capture des évènements Background Sync.

![capture: record bgsync in Chrome](./assets/record-bgsync.png)

5. Créer un nouvel 'event' via le formulaire en bas de l'application.

En allant à l'onglet 'Network' des devtools, vous pourrez constater qu'une requête vers `/api/add` a échouée.

![capture: request failed](./assets/5-failed-request.png)

Dans le même temps, une nouvelle base `workbox-background-sync` a été créée, contenant une request vers `http://localhost:8081/api/add` (`requestData.url`) (cf. "Application > IndexedDB") et un évènement "Registered Sync" est visible dans "Background Sync".

<aside class="notice">
  Pensez à rafraîchir IndexedDB (click droit) si rien n'apparaît.
</aside>

Enfin, il est temps de repasser en ligne :

1. Relancez le serveur

```bash
npm run --silent start
```

2. Une fois le serveur pleinement disponible, rétablissez la connexion de votre machine.

De nouveaux évènements Background Sync sont à présent visible dans les devtools.

![capture: bgsync events](./assets/bgsync-events.png)

Cela a permis à votre service worker de retenter l'appel à `/api/add`, avec succès cette fois, comme indiqué dans "Networks".

Bien entendu, la requête à du même coup été supprimée de la base IndexedDB.

Enfin, rechargez la page : vous constaterez que votre nouvel évènement a bien été enregistré, et est donc toujours présent.

<aside class="special">
  Vos nouveaux évènements ont même été enregistrés par le serveur dans `server-data/events.json`.
</aside>

<aside class="warning">
  Le background sync sous Chrome <a href="https://github.com/GoogleChrome/workbox/issues/1896">peut parfois être capricieux</a>. Si un "Registered Sync" n'apparait pas après que vous ayez créé votre évènement, il s'agit sans doute d'un bug indépendant de l'application. Fermez complètement Chrome (y compris les processus en arrière plan), redémarrez le, et retentez l'opération après avoir supprimé toutes les données de l'application (Clear Storage > Clear site data).
</aside>
