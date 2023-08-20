# Comprendre le rendering avec les Chrome Dev Tools

Comprendre comment le rendering est effectué par le navigateur, en utilisant les outils de développement Chrome (onglet **Performance**).

::: warning
Section incomplète

Retrouvez les instructions détaillées au chapitre 6 Afficher des données dynamiquement, section 2. Comparer différentes approches (page 361) du livre _[Développement et Architecture des Applications Web Modernes - Retrouver les fondamentaux](https://www.editions-eni.fr/livre/developpement-et-architecture-des-applications-web-modernes-retrouver-les-fondamentaux-9782409029523)_.
:::

::: tip
Vous pouvez directement effectuer ces opérations dans Chrome via [une page dédiée](/tools/chrome-perf).
:::

<!-- prettier-ignore -->
<<< @/../../../materials/code-samples/src/rendering/limitations/dom-api/heavy-rendering/create-content.js#render

<p class="code-caption">Code utilisé pour l'exercice</p>

![Vue d'ensemble](/illustrations/images/rendering/dom-api_override-innerHTML.png)

![Temps cumulés de traitement de la première tâche](/illustrations/images/rendering/dom-api_override-innerHTML_time-script.png)

![Zoom sur la première tâche : second temps de parsing](/illustrations/images/rendering/dom-api_override-innerHTML_zoom-parse2.png)

![Temps d'exécution ligne par ligne](/illustrations/images/rendering/dom-api_override-innerHTML_code-time.png)

![Deuxième et troisième tâches : Rendering & Paint](/illustrations/images/rendering/dom-api_override-innerHTML_time-rendering.png)

![Activité du thread principal après suppression du remplacement de innerHTML](/illustrations/images/rendering/dom-api_no-override.png)

![Temps d'exécution ligne par ligne](/illustrations/images/rendering/dom-api_no-override_code-time.png)
