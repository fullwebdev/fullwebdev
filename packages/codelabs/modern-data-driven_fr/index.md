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
  <b>Dans le cas où vous assistiez à une version "live" de ce codelab (durant une conférence, comme le DevFest Paris 2020 par exemple), il vous est fortement recommandé d'effectuer les étapes 2 et 3 (installations) en amont !</b>
</aside>

### Logiciels indispensables

* Un IDE / un éditeur de code ou de texte
  * recommandation : [Download Visual Studio Code](https://code.visualstudio.com/)
* La dernière version de Chrome
  * [Chrome Canary](https://www.google.com/chrome/canary/)
  * ou [Chrome Dev](https://www.google.com/chrome/dev/) si vous ne pouvez install la version Canary (eg sur Linux)
  * (optionnel, en supplément) [Firefox](https://www.mozilla.org/fr/firefox/channel/desktop/#nightly) Nightly ou Developer Edition
* [Node.js](https://nodejs.org/en/) et [npm](https://www.npmjs.com/)

### Recommandations

<aside class="notice">
  Ces éléments sont nécessaires pour tester plusieurs fonctionnalités que vous ajouterez à la PWA. Ils ne sont pas absolument indispensables pour compléter ce codelab, mais très fortement recommandés.
</aside>

* un système Windows ou Mac OS X
  * si vous utilisez Linux, vous pourrez au besoin utiliser une [VM](https://developer.microsoft.com/en-us/windows/downloads/virtual-machines/), mais vous devrez également y installer la dernière version de Chrome (cf. plus haut), et vous assurer que celle-ci peut accéder au système hôte via un réseau virtuel (HTTP)
* un smartphone Android "récent" avec Chrome, [Chrome Canary](https://play.google.com/store/apps/details?id=com.chrome.canary&hl=en), [Firefox Nightly](https://play.google.com/store/apps/details?id=org.mozilla.fennec_aurora&hl=en_US), et un cable usb

## Mise en place

### Projet

Clonez le code de démarrage depuis GitHub via la commande suivante :

```bash
git clone https://github.com/noelmace/data-driven-pwa.git
```

<aside class="info">
  Vous pouvez également le <a href="https://github.com/noelmace/data-driven-pwa/archive/master.zip">télécharger au format zip</a>, mais cela n'est pas recommandé pour ce codelab.
</aside>

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
  Cette commande lance l'installation des outils de développement depuis la racine du dépôt, incluant [Lerna](https://lerna.js.org/). Ce dernier est ensuite utilisé pour également installer les dépendances de tous les sous-projets, à partir desquels vous effectuerez les étapes suivantes. Par conséquent, <b>il ne vous sera pas nécessaire d'effectuer un `npm install` pour chacun de ces projets</b>.
</aside>

## Premier contact avec l'application

Via le terminal, rendez-vous dans le dossier "project" où se situent les éléments de base du projet :

```bash
cd project
```

À partir de ce dossier, démarrez le serveur de développement pour pouvoir utiliser et tester l'application :

```bash
npm run --silent start
```

Ouvrez l'application en entrant l'url [localhost:8081](http://localhost:8081) dans votre navigateur web.

L'application vous demande alors une autorisation pour pouvoir afficher des notifications. Cliquez sur "Autoriser" ou "Allow" pour l'accepter.

![Autoriser les notifications](https://codelabs.developers.google.com/codelabs/workbox-indexeddb/img/9ca6ac4aededfba6.png) \

<aside class="special">
  Cette application est issue d'un codelab de Google intitulé <a href="https://codelabs.developers.google.com/codelabs/workbox-indexeddb/#2" target="_blank" rel="noopener noreferrer"><i>Build an offline-first, data-driven PWA</i></a>, sur lequel nous allons revenir au chapitre suivant.
</aside>

<aside class="info">
  Portions of this page are modifications based on work created and <a href="/readme/policies/">shared by Google</a> and used according to terms described in the <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons 4.0 Attribution License</a>.
</aside>

## Une application orientée données

### Outil : appliquer automatiquement le code des chapitre

Pour chaque chapitre, il vous sera demandé de modifier le code de l'application.
Nous appellerons une étape importante de ces modification (couvrant tout ou partie d'un chapitre) un "step", numéroté à partir de 4 (le chapitre actuel).

Il vous est bien entendu recommandé d'effectuer vous même les modifications indiquées. Sauf directive contraire, évitez autant que possible de faire des copiés-collés ou de reproduire le code tel quel.
Vous devriez avoir assez d'indications, en vous inspirant des exemples, ainsi qu'en live ou via les ressources annexes, pour identifier par vous même le code à écrire.

Malgré tout, quand le temps est compté ou ne serait-ce que pour vérifier sa bonne compréhension, il peut être utile d'appliquer automatiquement ce code de correction.

Le projet associé à ce codelab offre deux manières de faire cela.

<aside class="warning">
  Les commandes suivantes doivent être impérativement lancées à partir du dossier racine du projet `data-driven-pwa`.
</aside>

Un script permet d'appliquer les diff présents dans les dossiers de `steps/<numéro de step>/` :

```bash
npm run goto --step="<numéro du step"
```

Si vous préférez utiliser Git, la commande suivante vous permettra de faire exactement la même chose, à partir des fichier `steps/<numéro de step>_<description>.diff`, parfaitement identiques aux précédents :

```bash
git apply steps/<numéro de step>_<description>.diff
```

<aside class="warning">
  Un "step" ne peut être appliqué qu'après que tous les steps précédents l'aient également été, dans l'ordre de leur numérotation !
</aside>

<aside class="tip">
  Les fichiers .diff eux même peuvent également vous aider à vous y retrouver dans un chapitre. Pour les consulter, je vous recommande d'installer le syntax highlighter pour VS Code via l'extension [diff](https://marketplace.visualstudio.com/items?itemName=rafaelmaiolla.diff).
</aside>

Si, par exemple, vous preniez du retard (ou vous lassiez) au chapitre 5, vous pourrez directement démarrer le chapitre 7 en lançant les commandes suivantes :

```bash
git checkout HEAD .
npm run goto --step="4-4"
npm run goto --step="4-5"
npm run goto --step="4-6"
npm run goto --step="4-7"
npm run goto --step="5"
npm run goto --step="6"
```

### Tester le mode hors ligne

Retournez à la racine du projet, et appliquez toutes les modifications pour ce chapitre :

```bash
npm run goto --step=4-4
npm run goto --step=4-5
npm run goto --step=4-6
npm run goto --step=4-7
```

<aside class="special">
  <p>Cette même commande permet également de "sauter"/corriger tous les chapitres suivants. Il est cependant indispensable de les lancer avant toute modification du code du projet, dans l'ordre, en commençant par 4.</p>
</aside>

Étant donné que le step 4-4 modifie la configuration de build, vous devez également stopper le serveur (`Ctrl+C`) et le relancer :

```bash
cd project
npm run --silent start
```

Retournez dans le navigateur, et mettez à jour l'application :

1. Rafraîchissez la page dans Chrome (`Ctrl+Maj+R`)
2. Ouvrez les Developer Tools (`Ctrl+Maj+i`)
3. Sélectionnez la section _Service Workers_
4. Activez le nouveau service worker en cliquant sur `skipWaiting`
5. Enfin, rafraîchissez la page à nouveau

<aside class="tip">
  Notez bien ces étapes. Vous devrez les reproduire souvent par la suite.
</aside>

Enfin, stoppez le serveur pour simuler une coupure réseau, puis rechargez l'application dans le navigateur. Vous constaterez alors que l'application semble fonctionner à l'identique.

Dans les developer tools de Chrome, sélectionnez la section _IndexedDB_, puis la base de donnée _dashboard_. Celle-ci permet de stocker localement les "évènements" pour une consultation hors ligne.

L'application dont vous disposez à présent est bien une PWA entièrement disponible hors-ligne !

### Explication

Sans développement spécifique, quand un utilisateur tente d'accéder à une Web App en étant déconnecté, un message "Offline" est affiché, empêchant toute utilisation de l'application.

<p class="center">
  <img src="./assets/firefox-offline.png" alt="firefox is offline" style="margin: 1rem"/>
</p>

Workbox a permis, en mettant en cache le App Shell, de ne jamais montrer ce type de message à un utilisateur retournant sur l'application.

Mais une application n'est rien sans données !
Nous avons donc utilisé IndexDB pour mettre ces données en cache (ici, des "events"), et permettre de les consulter même en étant hors-ligne.

Un problème persiste cependant : comme le serveur n'est bien évidemment pas disponible quand l'utilisateur est hors ligne, tous les "events" qu'il aura alors créé n'auront été stockés que localement. Ils seront donc perdus très rapidement !

Nous allons dans le chapitre suivant résoudre ce problème via workbox-background-sync, et donc la Background Sync API.

### Pas-à-pas

Pour mieux comprendre en détails ces fonctionnalités, consulter rapidement les <a href="https://codelabs.developers.google.com/codelabs/workbox-indexeddb/#3" target="_blank" rel="noopener noreferrer">étapes 4 à 7 du codelab Google</a> (ne démarrez pas le chapitre 8, nous allons traiter le sujet d'une autre manière).

Comme vu précédemment, les "step" correspondant ont été créés. Ici, je vous recommande de les utiliser pour gagner du temps. Leurs numéros suivent le format `4-<step google>` :

<aside class="warning">
  Si vous décidez par la suite d'écrire ce code vous même, assurez vous d'utiliser la dernière version de Workbox (5.0.0) au lieu de celle indiquée dans le premier code d'exemple (3.5.0). Cela n'aura aucune impacte sur les étapes du codelab Google, mais en aura pour celui-ci dés le chapitre suivant.
</aside>

```javascript
importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');
```

<aside class="info">
  Portions of this page are modifications based on work created and <a href="/readme/policies/">shared by Google</a> and used according to terms described in the <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons 4.0 Attribution License</a>.
</aside>

## Ne pas perdre de données hors-ligne

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

Pour voir le résultat de cette nouvelle fonctionnalité, effectuez une nouvelle mise à jour de l'application (refresh - skipWaiting - refresh) et stopper le serveur.

Déconnectez votre ordinateur du réseau **pour de vrais** (wifi et cable).

<aside class="warning">
  Le background sync se basant sur le <i>véritable</i> statut de la connection réseau de votre système, il est indispensable d'activer et désactiver votre ordinateur pour ce chapitre et le suivant. <b>Le throttling via les DevTools et l'arrêt de serveur ne suffiront pas.</b>
</aside>

Dans `Developer Tools > Background Sync`, démarrez la capture des évènements Background Sync.

![capture: record bgsync in Chrome](./assets/record-bgsync.png)

Créer un nouvel 'event' via le formulaire en bas de l'application.

En allant à l'onglet 'Network' des devtools, vous pourrez constater qu'une requête vers `/api/add` a échouée.

![capture: request failed](./assets/5-failed-request.png)

Dans le même temps, une nouvelle base `workbox-background-sync` a été créée, contenant une request vers `http://localhost:8081/api/add` (`requestData.url`) (cf. `Developer Tools > Application > IndexedDB`) et un évènement "Registered Sync" est visible dans "Background Sync".

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
  Vos nouveaux évènements ont même été enregistrés par le serveur dans <code>server-data/events.json</code>.
</aside>

<aside class="warning">
  Le background sync sous Chrome <a href="https://github.com/GoogleChrome/workbox/issues/1896">peut parfois être capricieux</a>. Si un "Registered Sync" n'apparaît pas après que vous ayez créé votre évènement, il s'agit sans doute d'un bug indépendant de l'application. Fermez complètement Chrome (y compris les processus en arrière plan), redémarrez le, et retentez l'opération après avoir supprimé toutes les données de l'application (Clear Storage > Clear site data).
</aside>

<aside class="info">
  Portions of this page are modifications based on work created and <a href="/readme/policies/">shared by Google</a> and used according to terms described in the <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons 4.0 Attribution License</a>.
</aside>

## Informer l'utilisateur de l'enregistrement

La potentialité d'une perte de données est toujours source de stress pour vos utilisateurs. _Votre serviteur en sait quelque chose, étant donné qu'il écrit actuellement ce chapitre pour la seconde fois, suite à un git checkout malencontreux 😓. Ironique n'est-ce pas ?_

C'est pourquoi il est indispensable de prendre en compte l'intégralité de leur parcours, de la création de données hors ligne (et donc, leur stockage localement) à l'enregistrement de celles ci côté serveur une fois la connexion retrouvée.

<aside class="warning">
  Notez bien que sans l'usage des outils de développement et l'accès au serveur, vous auriez été bien incapable de dire, à l'étape précédente, si vos évènements avaient bien été enregistrés.
</aside>

Ici, notre application est plutôt sommaire. Nous nous contenterons donc d'informer l'utilisateur de l'enregistrement de ces données via une notification.

### Afficher une notification

Ajoutez le code suivant à **app/sw.js** :

```javascript
const showNotification = () => {
  self.registration.showNotification('Background sync success!', {
    body: '🎉`🎉`🎉`'
  });
};
```

Comme son nom l'indique, cette fonction fait usage de la Notification API pour afficher une notification "système". Rien de plus.

Pour y faire appel à la reception d'un sync event, ajoutez une option `onSync` à notre BackgroundSyncPlugin, comme suit :

```javascript
const bgSyncPlugin = new BackgroundSyncPlugin('dashboardr-queue', {
  onSync: showNotification
});
```

### Tester l'application

Répétez maintenant les mêmes opérations qu'à l'étape précédente. Rechargez l'application, activez le service worker via un skipInstall, rechargez à nouveau, puis passez hors (en coupant le serveur et la connection réseau de votre machine). Vous pouvez à présent créer un nouvel évènement.

Réactivez votre connection (serveur, puis machine). Vous verrez alors apparaître la notification.

Mais il semblerait que nous ayons créé une notification trompeuse. Votre évènement n'a pas été enregistré ! Explorez les devtools pour vous en assurer.

### Explication

Par défaut, un BackgroundSyncPlugin a un comportement des plus simple. Il créé un file (queue) par défaut, stocke toutes les appels correspondant à la route à laquelle il a été associé dans celle-ci quand ils échouent, et les rejouent tous à la reception d'un sync event.

Mais l'option `onSync` n'a pas vocation à n'être qu'une simple callback en addition de ce comportement. Elle le remplace.

Ainsi, quand nous avons associé `showNotification` au `onSync` du plugin, nous n'avons pas ajouté un comportement.
Nous l'avons remplacé.

### Customiser le comportement de Workbox

Pour réparer cette erreur, nous devons reproduire le comportement par défaut du plugin, et donc rejouer tous les appels dans sa file.

Éditez `showNotification` pour obtenir le résultat suivant :

```javascript
const showNotification = ({ queue }) => {
  queue.replayRequests();
  self.registration.showNotification('Background sync success!', {
    body: '🎉`🎉`🎉`'
  });
};
```

Enfin, ré-effectuez le test de l'application précédent, et gardez un œil sur la console et "Network". Votre appel POST sur /api/add sera cette fois-ci rejoué correctement une fois la connexion retrouvée, et votre évènement bien enregistré.

<aside class="info">
  Portions of this page are modifications based on work created and <a href="/readme/policies/">shared by Google</a> and used according to terms described in the <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons 4.0 Attribution License</a>.
</aside>

## Se débarrasser de la mini info-bar

Nous avons implémenté des fonctionnalités qui répondent aux besoins de nos utilisateurs, dans une application performante, et avec une UX qui corresponde à leurs attentes.

À présent que nous pouvons donc être confiant dans le succès de notre app ( 🤷‍ ), notre priorité devient la fidélisation de la foule d'utilisateurs qui ne va pas manquer de l'utiliser.

Pour se faire, rien de mieux, techniquement, que l'installation (ou A2HS, pour Add to Home Screen).

Afin d'encourager l'installation des Web Apps, une première solution apportée par Chrome for Android est la mini info-bar.

![mini info-bar](https://developers.google.com/web/updates/images/2018/06/a2hs-infobar-cropped.png)

Malheureusement, cette [mini info-bar](https://developers.google.com/web/fundamentals/app-install-banners/native) rebute bien plus le grand public qu'elle n'incite à l'installation.
Il va donc être primordial pour nous de l'éviter à tout prix.

<aside class="tip">
  <p>
    Pour tester l'affichage de la mini info-bar, vous aurez besoin de charger la web app sur Chrome Android, en HTTPS ou localhost. La solution la plus simple consiste à <a href="https://developers.google.com/web/tools/chrome-devtools/remote-debugging/local-server">utiliser la redirection de port de Chrome</a>.
  </p>
</aside>

Dans **app/js/main.js**, ajouter le code suivant dans le `if('serviceWorker in navigator)` :

```javascript
let deferredPrompt;

window.addEventListener('beforeinstallprompt', e => {
  console.log('beforeInstallPrompt event detected');
  e.preventDefault();
  deferredPrompt = e;
  console.log('ready for A2HS');
});
```

Mettez à jour votre application, et observez la console.

<aside class="notice">
  <p>
    Pour les chapitres comme ceux-ci, où vous apporterez pas ou peu de modification au service-worker `sw.js`, mais aurez besoin de mettre à jour l'html et le javascript du window context régulièrement, il peut être plus pratique de recharger toute l'application à chaque rafraîchissement de la page, et donc d'éviter tout cache.
  </p>
  <p>
    Pour cela, vous pouvez activer l'option "Update on reload" pour recharger un service worker complet à chaque fois :
  </p>
  <p class="center">
    <img src="./assets/update-on-reload.png" alt="capture: update on reload" />
  </p>
</aside>

<aside class="info">
  Portions of this page are modifications based on work created and <a href="/readme/policies/">shared by Google</a> and used according to terms described in the <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons 4.0 Attribution License</a>.
</aside>

## Encourager l'installation de l'application

A présent, seuls le menu du navigateur, et éventuellement l'omnibox permettent d'installer notre Web App.

Afin d'être plus incitatif, ajoutez un bouton d'installation dans le `<header>` (entre les deux éléments existants) de **app/index.html** :

```html
<li>
  <button class="button ripple" id="install-btn" style="display: none">Install</button>
</li>
```

Remarquez que ce bouton est masqué par défaut. Il sera affiché <i>uniquement</i> si le navigateur supporte le A2HS, et que l'utilisateur n'a pas déjà refusé l'installation.

Pour ce faire, appeler une fonction `showInstallPromotion` en réponse à l'évènement `beforeInstallPrompt`, dans **app/js/main.js** :

```javascript
window.addEventListener('beforeinstallprompt', e => {
  console.log('beforeInstallPrompt event detected');
  e.preventDefault();
  deferredPrompt = e;
  showInstallPromotion();
});
```

Plus haut, définissez cette fonction comme suit :

```javascript
const btnAdd = document.getElementById('install-btn');

function showInstallPromotion() {
  btnAdd.style.display = 'inline-block';
}
```

Enfin, au click sur ce bouton, affichez l'install prompt :

```javascript
btnAdd.addEventListener('click', e => {
  btnAdd.style.display = 'none';
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then(choiceResult => {
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the A2HS prompt');
    } else {
      console.log('User dismissed the A2HS prompt');
    }
    deferredPrompt = null;
  });
});
```

Rafraîchissez l'application dans le navigateur pour observer le résultat et tester ce bouton.

<aside class="info">
  Portions of this page are modifications based on work created and <a href="/readme/policies/">shared by Google</a> and used according to terms described in the <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons 4.0 Attribution License</a>.
</aside>

## Améliorer l'UX de l'A2HS

Ajouter un bouton au header de votre application est rarement une bonne pratique.
L'espace y est rare, et l'A2HS n'est pas, dans la plupart des cas, la première fonctionnalité à mettre en avant.

Pour bien promouvoir l'installation de votre application vous devez, comme évoqué précédemment, bien intégrer celle-ci au parcours de l'utilisateur, en prenant en compte son niveau de fidélisation.

Plusieurs UX patterns, en fonction de votre type d'application, existent pour cela.

<aside class="tip">
  Peter Mclachlan a écrit un excellent article sur le sujet intitulé <a href="https://developers.google.com/web/fundamentals/app-install-banners/promoting-install-mobile" target="_blank" rel="noopener noreferrer"><i>Patterns for Promoting PWA Installation (mobile)</i></a>
</aside>

Pour cette application, nous pouvons adoptez deux approches différentes.

### Promouvoir à la consultation

Dans le cas où la consultation des événements soit le premier usage de l'application, la meilleure approche sera de promouvoir l'installation dans le cadre de ce parcours.

Supprimez le bouton d'installation précédemment créé dans **app/index.html**, et ajouter une nouvelle "card" d'installation dans le container où les événements sont dynamiquement ajoutés :

```html
<ul id="container" class="container">
  <!-- items dynamically populated -->
  <li class="card" id="install-card" style="display: none">
    <div class="card-text">
      <h2>Browse events anytime you want!</h2>
      <p>
        <button class="button ripple" id="install-btn">Install</button>
      </p>
    </div>
  </li>
</ul>
```

Dans **app/js/main.js**, remplacer `btnAdd` par le code suivant :

```javascript
const installCard = document.getElementById('install-card');
const btnAdd = installCard.querySelector('#install-btn');
```

Enfin, remplacez `btnAdd` par `installCard` dans `showInstallPromotion` et l'EventListener de `btnAdd 'click'` :

```javascript
function showInstallPromotion() {
  installCard.style.display = 'inline-block';
}
```

```javascript
btnAdd.addEventListener('click', e => {
    installCard.style.display = 'none';
    deferredPrompt.prompt();
    //...
}
```

Enfin, pour un meilleur affichage, ajoutez un test dans `updateUI` afin de faire en sorte que "l'install card" s'affiche après le cinquième évènement :

```javascript
function updateUI(events) {
  events.forEach(event => {
    const item =
      `<li class="card">
         <div class="card-text">
           <h2>${event.title}</h2>
           <h4>${event.date}</h4>
           <h4>${event.city}</h4>
           <p>${event.note}</p>
         </div>
       </li>`;
    const where = container.childElementCount < 6 ? 'afterbegin' : 'beforeend';
    container.insertAdjacentHTML(where, item);
  });
}
```

Rechargez l'application, et assurez vous que tout fonctionne comme prévu.

Cette approche reste malgré tout ennuyante pour l'utilisateur. C'est pourquoi il est important d'y poser des limites.

1. **Permettre à l'utilisateur de refuser/masquer cette card**

Dans **app/index.html**, ajoutez un bouton "Dismiss" :

```html
<div class="card-text">
  <h2>Browse events anytime you want!</h2>
  <p>
    <button class="button ripple" id="dismiss-btn">Not now</button>
    <button class="button ripple" id="install-btn">Install</button>
  </p>
</div>
```

Dans **app/js/main.js**, ajoutez un `EventHandler` pour masquer la card au click sur ce bouton :

```javascript
const btnDismiss = installCard.querySelector('#dismiss-btn');

btnDismiss.addEventListener('click', e => {
  installCard.style.display = 'none';
}
```

Rechargez l'application et cliquez sur le bouton. Rechargez à nouveau, et la card ré-apparaît.

2. **Conserver ce choix en mémoire**

Pour cela, vous utiliserez simplement un cookie.

Copiez-collez les helpers suivants au début de **app/js/main.js** :

```javascript
const COOKIE_NAME = 'POSTPONED_A2HS';

function setCookie(name, value, expirationMinutes) {
  let d = new Date();
  d.setTime(d.getTime() + expirationMinutes * 60 * 1000);

  let expires = 'expires='+d.toUTCString();
  document.cookie = name + '=' + value + '; ' + expires + '; path=/';
}

function getCookie(cookieName) {
  let name = cookieName + '=';
  let ca = document.cookie.split(';');
  let c;

  for(var i = 0; i < ca.length; i++) {
    c = ca[i].trim();
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }

  return '';
}
```

Créez un cookie au click sur le bouton dismiss :

```javascript
btnDismiss.addEventListener('click', e => {
  installCard.style.display = 'none';
  // By default, Chrome stop showing the mini info-bar during 3 months
  // after the user dismissed it.
  // We set it to 2 minutes for testing purpose only.
  setCookie(COOKIE_NAME, 'true', 2);
})
```

Enfin, assurez vous que vous n'afficherez pas la card tant que ce cookie ne sera pas expiré :

```javascript
function showInstallPromotion() {
  if(getCookie(COOKIE_NAME) !== 'true') {
    installCard.style.display = 'inline-block';
  }
}
```

Rechargez l'application, cliquez sur le bouton "Not now", et recharger l'application à nouveau pour vérifier que la card est bien toujours masquée. Puis attendez l'expiration du cookie (ici, 3 minutes) et rechargez la page : la card apparaît à nouveau.

3. **Limiter le nombre de fois où vous la présentez à l'utilisateur**

Même en l'absence de refus par l'utilisateur, il est primordial de limiter l'affichage de cette card dans le temps, afin de ne pas paraître trop intrusif.

Dans **app/js/main.js**, ajouter un cookie à l'affichage de la card avec un temps plus court :

```javascript
function showInstallPromotion() {
  if(getCookie(COOKIE_NAME) !== 'true') {
    installCard.style.display = 'inline-block';
    setCookie(COOKIE_NAME, 'true', 1);
  }
}
```

Rechargez la page par deux fois pour constater que la card est masquée.

### Promouvoir à l'utilisation

Si malgré tout, nous constations que cette approche demeure trop intrusif pour un faible rendement, cela peut signifier que l'utilisateur n'est pas assez fidélisé si il ne fait que consulter des événements.

Dans ce cas, la création par l'utilisateur d'un premier événement sera sans aucun doute _le_ moment clef.

Dans **app/js/main.js**, supprimez l'appel à `showInstallPromotion()` dans l'EventHandler du `beforeInstallPrompt` :

```javascript
window.addEventListener('beforeinstallprompt', e => {
  console.log('beforeInstallPrompt event detected');
  e.preventDefault();
  deferredPrompt = e;
  // don't show anything for now
});
```

Ajoutez le ensuite dans `addAndPostEvent`, après l'appel à `updateUI` :

```javascript
updateUI([data]);
showInstallPromotion();

saveEventDataLocally([data]);
```

Relancer l'application. Quel(s) problème(s) d'UX pouvez vous encore identifier ? Quelles autres approches auriez-vous pu/du prendre ?

Prenez le temps d'expérimenter de possible correctifs avant de passer à la conclusion de ce chapitre.

<aside class="warning">
  On ne triche pas 😉
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  ... sauf si vous en avez vraiment envie bien sûr ...
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
</aside>

Un soucis assez évident est que la card devrait s'afficher au dessus du formulaire, ou au moins à côté de l'événement créé, afin de s'assurer que l'utilisateur en prenne directement connaissance et puisse la comprendre et l'utiliser dans le bon contexte.

Remplacer la ligne où la variable `where` est initialisée dans `updateUI` par la suivante :

```javascript
const where = events.length > 1 ? 'afterbegin' : 'beforeend';
```

Suivant cette même idée de promouvoir "l'installation d'un site web" (concept encore peu compris par le grand public), il est également important de bien choisir votre wording.

Dans **app/index.html**, remplacez le titre de cette card par :

```html
<h2>Add events where you want, when you want!</h2>
```

## Partager des événements

### Débugger l'application sur Android

<aside class="tip">
  Si vous êtes fan d'Apple jusqu'au bout des ongles et n'avez qu'un Mac OS et iOS à disposition ? Pas de panique : ce sujet a été justement sélectionné car un des rares également compatible Safari (du moins, en théorie). Vous pouvez donc sauter cette partie, et continuer avec Safari. Au passage, je vous invite à aller lire <a href="https://twitter.com/slightlylate/status/1191026394421026816">ce petit thread sur Twitter</a> où Alex Russell, le "père" des PWA, fait le point sur les rapport entre votre chouchou et le Web.
</aside>

Connectez votre smartphone Android à votre ordinateur par cable USB.

Dans les paramètres Android, ouvrez le menu About Phone pour afficher le Build Number, et taper dessus 7 fois :

* Android 9 (API level 28) and higher: Settings > About Phone > Build Number
* Android 8.0.0 (API level 26) and Android 8.1.0 (API level 26): Settings > System > About Phone > Build Number
* Android 7.1 (API level 25) and lower: Settings > About Phone > Build Number
  
Cela permet d'afficher les [Options de développement](https://developer.android.com/studio/debug/dev-options) à la racine du menu, tout en bas de la liste.

A la section "Débogage", activez le Débogage USB.

Ouvrez ensuite [chrome://inspect/#devices] dans Chrome sur votre ordinateur. Acceptez la demande de connexion sur votre smartphone.

Cliquez sur le bouton `Port forwarding...` et ajouter le port 8081 pour localhost:8081.

Ouvrez Chrome sur Android. Il devrait alors apparaître dans la liste des périphériques connectés dans Chrome sur votre ordinateur.

Entre `localhost:8081` dans le champs 'Open Tab with url' et validez. L'application s'ouvre alors sur votre téléphone. Cliquez sur 'inspect' pour en afficher une copie sur votre ordinateur et pouvoir utiliser les DevTools.

### Web Share API

Dans le header de **app/index.html**, ajoutez un bouton "Share" pour inciter vos utilisateur à partager autour d'eux la joie qu'ils éprouvent en utilisant votre formidable Web App :

```html
<li><img src="images/icons/share.svg" class="button share" alt="share" /></li>
```

<aside class="tips">
  La Web Share API est trés simple. Consulter la page MDN de <a href="https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share">Navigator.share</a> devrait vous suffire. Pour plus de détails, vous pouvez également consulter l'article de présentation sur <a href="https://web.dev/web-share/">Web.dev</a>.
</aside>

Dans **app/js/mains.js** nous allons à présent pouvoir utiliser la Web Share Api pour partager du contenu au click sur ce bouton :

```javascript
const shareBtn = document.querySelector('.share');

if (navigator.share) {
  shareBtn.addEventListener('click', async () => {
    try {
      await navigator.share({
        title: 'The Web is on FIRE, the Codelab',
        text: `Check out this codelab!`,
        url: 'https://next.wof.show/codelabs/doc/modern-data-driven_fr/'
      });
      console.log('Successful share');
    } catch (error) {
      console.warn('Error sharing', error);
    }
  });
} else {
  console.warn(`The Web Share Api isn't supported by your Browser.`)
}
```

Mettez à jour l'application dans Chrome sur Android, et cliquez sur le bouton.

## Recevoir un partage de données

À ne pas confondre avec la Web Share API, la [Web Share **Target** API]() va nous permettre, à l'opposer, d'indiquer au système que notre application peut _recevoir_ un partage.

Dans **app/manifest.json**, ajoutez l'entrée suivante à d'informer le système que votre PWA, une fois installée, pourra être ajoutée à la liste des applications vers lesquelles il est possible de partager du contenu :

```json
"share_target": {
  "action": "/",
  "method": "GET",
  "enctype": "application/x-www-form-urlencoded",
  "params": {
    "title": "title",
    "text": "text",
    "url": "url"
  }
}
```

Ici, nous dison au système que lorsque l'utilisateur selectionne notre application comme cible d'un partage, il doit fait appel, en HTTP Get, à notre url racine (donc index.html) et passer les paramètres GET title et text.

Dans **app/js/main.js**, ajoutez, en fin de fichier, la méthode qui permettra d'enregistrer un nouvel évènement si au moins un de ces paramètres est renseigné :

```javascript
window.addEventListener('DOMContentLoaded', () => {
  const parsedUrl = new URL(window.location);
  const title = parsedUrl.searchParams.get('title');
  const text = parsedUrl.searchParams.get('text');
  const url = parsedUrl.searchParams.get('url');
  if (title || text || url) {
    updateUI([{
      title,
      note: url && text ? `${text}: ${url}` : url || text,
      date: '',
      city: ''
    }]);
  }
});
```
Relancez l'application dans Chrome pour Android. Assurez vous bien, via les DevTools, que le manifest ne présente pas d'erreur, et que main.js a été mis à jour.

Installez l'application (Menu > Ajouter l'application à l'écran d'accueil).

Enfin, ouvrez l'application de votre choix pour effectuer un partage (Chrome lui même peut être utilisé), et sélectionnez "WoF Codelab Demo" comme cible. Une fois l'application ouverte, assurez vous que le nouvel évènement a bien été créé.


