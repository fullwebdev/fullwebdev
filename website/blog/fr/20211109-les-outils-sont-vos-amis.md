# Les outils sont vos amis

::: tip
Chronique inédite écrite pour [Les briques du Web](https://rdv-speakers.fr/les-briques-du-web/) vers novembre 2021. Ayant mis fin à l'émission à la même période, celle-ci n'a jamais été présentée.
:::

<hr>

## Script de la chronique

<div class="wc-text-content speak-time">

Salut tout le monde. Aujourd'hui pour changer j'ai envie de parler, un peu, de techniques.

Bon, j'ai pas vraiment de terme générique pour ce sujet-là ... donc bon ...
on vas dire:

"Les outils"

Analyse de code, typage, compilation, versionnage...
En tant que dev, on doit souvent composer avec tout un tas de bidules qu'on a plus ou moins choisis.

Allez, ici on parle de web, donc j'vais prendre un exemple qui parle à tout le monde.

Disons que tu débutes. Tu viens juste d'apprendre quelques bases de JavaScript et fait joujou avec quelques libs, et là PAF\
tu débarques sur un projet déjà bien avancé, mais qui a un peu été laissé à l'abandon.

Mais t'es dans une boite qui valorise l'autonomie ! (yeeeeah...)
Tu es donc "livré à toi-même" ! (youhou...)

Disons que c'est un projet React, avec du TypeScript.
Et tout est déjà en place, avec une CI qui gueule parce que t'as merdé le typage.

Bon, on te presse de corriger un bug, donc pas grave, un petit any on en parle plus.

Ah maintenant c'est la couverture de tests qui est en dessous de 100%.
Alors, euh... comment c'était déjà ... given ... when ... oh et puis merde j'ai pas le temps : true!
C'est biiiien "expect true is truethy", voilaaaa...

Ben quoi encore ! Merde, eslint, on l'avait oublié aussi !
_eslint di·sa·ble·_ ... je sais ce que je fais à la fin, connerie de machine

...

Ça va, ça vous semble assez familier comme exemple ?!

Perso, j'dois avouer que ... non ... cet exemple me parle pas vraiment.\
J'suis d'là vieille école. L'ordi pour moi au départ, c'est un truc bête et méchant.

> - Regarde Noël, toute cette immensité baignée de lumière est ton royaume.
> - Et tout ça m'appartiendra ?
> - Absolument tout...\
>   bon par contre ça marche pas tout seul, donc c'est-pas compliqué, si un truc foire, c'est entièrement ta faute.

Sauf que voila, l'informatique c'est un peu devenu magique maintenant.\
C'est plus nous qui gueulons sur notre ordi parce qu'il comprent pas quand on fait une typo.\
C'est lui qui nous gueulent dessus pour nous dire qu'on en a fait une.

Donc ouai forcément, je comprends que le dev maintenant, ça puisse ressembler à une course d'obstacle.

Si quelqu'un a mis tous ces obstacles sur le chemin, on peut raisonnablement penser qu'ils sont pas là par hasard.\
Sauf que voilà, ça demande du temps de les comprendre ces outils.\
Faut aller voir des docs, se renseigner sur des concepts parfois pas mal abstraits...\
Et quand t'es pressé par ton boss et livré à toi-même, ben c'est pas forcément évident.

Mais le dev n'est pas une course d'obstacle ! C'est plus une course de relais, qui...

Attends, non : **c'est pas une course du tout en fait** !

Pourquoi vous pensez que tellement de devs "expérimentés" hurlent quand ils arrivent sur certains projets ?
Vous savez, ces projets où on est allé vite-vite-vite, en esquivant tous les feedbacks...

Parce qu'une fois qu'on a bossé sur un projet avec des vrais tests, un vrai typage, etc...\
On **peut** plus revenir en arrière.\
On **veut** pas avoir à deviner ce que renvoie telle ou telle méthode.\
On **n'accepte** pas de devoir prier je n'sais pas quel dieux pour ne pas créer de régression en touchant le moindre bout d'un chateau de carte.\
On **a plus envie** de pinailler sur telle ou telle règle soi-disant connue de tout le monde.\
On **espère** pouvoir facilement comprendre ce que fait un composant en lisant ses tests.

Bref, on devient accro à tout un tas de béquilles et dopants ... parce qu'ils sont justes super cool, voila !

L'essayer, c'est l'adopter.

Alors, s'il vous plais, laissez le temps aux gens de monter en compétence.\
Levez les yeux de vos petit tôt de coverage et autres courbes de productivité.\
Certes, il faut mettre en place des outils qui encouragent à faire de la qualité !\
Arrêtez de penser qu'on peut faire appel à un "expert" pour tout mettre en place, et après bibidi babidi bou Oooh le beau projeeet.\

Des devs à qui on laisse du temps, c'est des dev qui font mieux !
Et magie : qui le font plus rapidement !

Autrement, c'est l'habitude et le désintérêt qui s'installent.

</div>
