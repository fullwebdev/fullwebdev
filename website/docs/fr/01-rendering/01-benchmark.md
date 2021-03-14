# Comparer différentes approches

Les standards seuls peinent encore à offrir des solutions de rendering intuitives.
Bien souvent, utiliser le DOM lui-même implique une consommation importante de ressources, et des ralentissements notables.
Comprendre le rendering demande donc avant tout d'identifier les éléments pouvant contribuer à ces ralentissements, ou, au contraire, à rendre un code plus lisible et maintenable.

Cela-dit, mettre en place des tests de performance du rendu navigateur est une tâche complexe.

Dans ce domaine, [js-framework-benchmark](https://github.com/krausest/js-framework-benchmark){target=\_blank} (réalisé par Stefan Krause avec l'aide de nombreux contributeurs) est un excellent projet, permettant de comparer les performances d'un très grand nombre de bibliothèques et frameworks.

Je me suis donc base sur ce projet afin d'étudier (et donc d'expliquer) pas à pas les différentes méthodes de rendering.
Le projet [fullwebdev/benchmark](https://github.com/fullwebdev/benchmark){target=\_blank} (fork de js-framework-benchmark) a donc été initié pour permettre de comparer plusieurs approches Vanilla JS entre elles.

Plus de quinze implémentations ont ainsi été créés sans l'aide d'aucune bibliothèque, afin de démontrer différentes approches possibles.

![Note moyenne des projets "Vanilla"](/illustrations/plots/benchmarks/all/mean-vanilla-modern.png)

Celles-ci s'inscrivent dans un ensemble bien plus large, avec plus d'une cinquantaine de projets.

> Une grande partie des projets utilisant une bibliothèque ou un framework sont issus de [js-framework-benchmark](https://github.com/krausest/js-framework-benchmark){target=\_blank}, qui en comprends un encore plus grand nombre, et les mets plus régulièrement à jour.

![Note moyenne de l'ensemble des projets](/illustrations/plots/benchmarks/all/mean.png)

::: tip
Les résultats détaillés de ces tests sont donnés dans un [tableau interactif](/rendering/benchmark/table).

_Contrairement à ce site, le composant associé est développé en React, et peut donc prendre un certain temps à s'afficher. Ceci n'est pas un (entièrement) un troll._
:::
