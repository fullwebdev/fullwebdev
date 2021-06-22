# WHATWG & W3C : la réunion de la discorde

Pour une fois, ma chronique pour [_Les briques du Web_ S01E07](https://rdv-speakers.fr/les-briques-du-web/episodes/S01E07/) du 22 juin 2021 aborde une anecdote assez simple. Il n'y aura donc pas d'article de blog complet pour approfondir le sujet, car toutes les infos sont dans le script ci-dessous.

Vous retrouverez cela dit plusieurs ressources complémentaires en bas de page.

On aura prochainement l'occasion de revenir plus en détails sur l'Histoire du XHTML et du WHATWG. En attendant, vous pouvez déjà retrouver une description complète de cette période dans mon livre, _[Développement et Architecture des Applications Web Modernes](https://www.editions-eni.fr/livre/developpement-et-architecture-des-applications-web-modernes-retrouver-les-fondamentaux-9782409029523)_, au _Chapitre 1 : Comprendre l'Histoire du Web et ses standards - section 6. WHATWG, HTML et DOM_ (p51-57).

## Script de la chronique

<div class="wc-text-content speak-time">

Deux tiers de l'histoire du Web ont été dominés par de petites disputes, de grands désaccords, bref, le brol, la zizanie, le chaos.\
J'ai nommé :

<!-- markdownlint-disable no-emphasis-as-header -->

**XHTML versus HTML**

Bon, j'vais pas pouvoir raconter comme ça 20 ans d'Histoire en 5 minutes hein.\
Alors pour une fois, on va vraiment parler d'une anecdote.\
Un évènement, qui représente l'apogée de tout ce marasme

Cap sur le 2 juin 2004, à San Jose, Californie, USA.

> BRUITAGE TARDIS

Aujourd'hui, le W3C tien une réunion très importante.\
Pour le deuxième jour consécutif, deux sujets doivent être débattus :

- les Applications Web
- et la combinaison de documents (XHTML, bien entendu)

Les entreprises représentées sont assez variées, allant de IBM à Sun, en passant par Opera et Adobe.\
Nous sommes d'ailleurs dans les locaux de ce dernier.

L'assemblée n'est pas très diversifiée, cela dit.\
Il y a ainsi moins de femmes ... que de français nommés Vincent.\
On en compte que deux parmi les 51 membres présents :

- Irene Vatton, Ingénieure de recherche de l'INRIA, et architecte du navigateur et éditeur Web Amaya
- et Sarah Allen, Directrice du développement applicatif chez Laszlo Systems, et qui a joué un rôle très important dans la naissance du Flash

Tout le monde a au préalable présenté ses "positions" via de courts documents, histoire de nourrir et orienter le débat.

Forcément, on parle alors beaucoup de XHTML.\
Après tout, XHTML 1 est censé avoir remplacé HTML depuis sa sortie en 1999.\
Le W3C a même fait le choix, en 2000, de stopper totalement le développement de HTML, afin de se concentrer sur XHTML 2.

Mais ce choix est loin de plaire à tout le monde.\
Mozilla et Opera, préfèreraient largement faire évoluer HTML.\
Car XHTML a surtout été pensé pour d'autres contextes d'utilisation.\
Son traitement est complexe, ce qui demande de sérieux efforts aux navigateurs.\
Alors même que les bénéfices sont, pour eux, minimes.

David Baron, alors chez Mozilla, a d'ailleurs publié un papier sur le sujet quelques semaines auparavant.\
Il y met notamment en garde contre les dangers que représente XHTML pour l'interopérabilité.

S'associant à Ian Hickson, de Opera, il décide d'enfoncer le clou pour cette réunion dans un "position paper" commun.\
Après des semaines de lobbying, ils espèrent enfin convaincre les autres membres du W3C de reprendre le développement du HTML.

Mais d'autres acteurs ne sont pas de cet avis, et préfèrent défendre une position conservatrice.

Après tout, une centaine de personnes étaient d'accord pour dire, 6 ans auparavant, que HTML était mort.\
Pourquoi revenir là-dessus ?

En fin de journée, le débat se conclue finalement par un vote.\
Mozilla et Opera voient alors leur proposition refusée à deux reprises par l'assemblée.

L'histoire dira alors que c'est cette réunion qui décidera Mozilla, Opera et Apple, à "claquer la porte" du W3C.\
Ils auraient donc fondés 2 jours plus tard leur propre organisme de normalisation afin de poursuivre le développement de HTML.\
Nom de code de cet organisme : le WHATWG (pour _Web Hypertext Application Technology Working Group_).

Sauf que ... le site officiel du WHATWG a été créé bien avant cette réunion ...\
Bon, le contenu du site est tout de même très diplomate vis à vis du W3C ...\

« Juré promis, on cherche pas à faire dissension !\
On va faire des propositions au W3C, c'est tout !\
Et puis on sera même présents au workshop de San Jose, alors, oh, si c'est pas une preuve ça, hein ! »

D'autres personnes prennent cela dit moins de pincettes.\
Brendan Eich, de Mozilla, affirme ainsi le 12 juin :

> « La triste réalité est que le W3C ne s’intéresse pas au Web,\
> préférant depuis un certain temps se focaliser sur les outils,\
> plug-ins,\
> et marchés verticaux »

Et il a entièrement raison à l'époque !\
L'organisation du W3C était largement critiquable.\
Elle l'est encore sur pas mal d'aspects aujourd'hui.

J'vais pas vous l'cacher, à l'époque, j'étais team WHATWG à 200% hein.

Quoi qu'il en soit, les principaux créateurs de navigateurs ont constaté que la standardisation n'allait pas dans leur sens.\
Ce qui les a amené à créer leur petit club à eux, et à faire toute une petite propagande autour de cette histoire.

Finalement, tout ça a donné de très bons résultats, qui ont bénéficiés à tout le monde.\
Le WHATWG a été dès le départ bien plus ouvert à la communauté.\
La contribution y est très simple, grâce notamment à l'adoption rapide de Discourse et Github.

Ce qui a amené le W3C à se remettre en question.

Il leur faudra tout de même 2 ans pour recréer un groupe de travail HTML ;\
6 ans pour revoir, très partiellement, leur modèle d'adhésion ;\
et une année de plus pour créer le Web Incubator Community Group, avec un fonctionnement similaire au WHATWG.

Finalement, HTML 5 est créé dans le cadre du WHATWG, mais en collaboration avec le W3C, de 2007 à 2014.\
Mais c'est encore le bordel !\
Le même langage est standardisé deux fois !

Il aura fallu attendre 2019 pour que les deux groupes décident enfin de passer un accord déléguant pour de bon la responsabilité de l'HTML et du DOM au WHATWG.

Bon, au final, ça nous apprend quoi tout ça ?

Quoi qu'on en dise, les organismes de standardisation du Web ne sont pas UNIQUEMENT des espaces d'échange et de débats pacifiques.\
Diriger les standards est un enjeu stratégique immense pour de nombreuses entreprises.\
Celles-ci chercheront donc toujours à acquérir plus de pouvoir de décision.

La création du WHATWG a été sans aucun doute, globalement, une très bonne chose pour le Web.\
Certaines entreprises "extérieures" au Web, comme Adobe et IBM, prenaient une place beaucoup trop importante au W3C.\
L'arrivée de HTML5 et du WICG ont, en partie, permis de résoudre ce problème.

Mais les navigateurs ont surtout créé le WHATWG pour gagner en indépendance, donc en autorité.

...

Autorité dont Google s'est empressé de s'emparer en créant Chrome.

Mais ce sera mon seul Google bashing du jour, parce que c'est pas du tout le sujet ici.\
Merci pour votre attention, et à très vite pour de nouvelles anecdotes historiques.

</div>

## Ressources

### Workshop on Web Applications and Compound Documents

- _[Page de présentation](https://www.w3.org/2004/04/webapps-cdf-ws/)_, Avril 2004
- _[Compte rendu (Jour 2)](https://www.w3.org/2004/04/webapps-cdf-ws/minutes-20040602.html)_, 2 juin 2004.

### Histoire de HTML & XHTML

- RAGGETT D. « [Chapter 2 - A history of HTML](https://www.w3.org/People/Raggett/book4/ch02.html) ». In : _Raggett on HTML 4_ , Addison Wesley Longman, 1998. ISBN : 978-0-201-17805-0
- HAMMOND D. « [Beware of XHTML](http://www.webdevout.net/articles/beware-of-xhtml) ». 2007
- VAN KESTEREN A. _[Quick guide to XHTML](https://annevankesteren.nl/2004/08/xhtml)_. Anne’s Blog. 19 août 2004.
- W3C. « [History](https://www.w3.org/TR/2014/REC-html5-20141028/introduction.html#history-0) ». In : _HTML5 W3C Recommendation_. 2014

### Standards & propositions

- WHATWG. _[Archive du site officiel](https://web.archive.org/web/20040529190138/https://whatwg.org/)_. **29 mai** 2004. (le nom de domaine _whatwg.org_ a été enregistré le 9 mars 2004)
- W3C. _[Changes between HTML 3.2 and HTML 4.0](https://www.w3.org/TR/WD-html40-970708/appendix/changes.html)_
- W3C. _[Extensible Markup Language (XML) 1.0 (Fifth Edition)](https://www.w3.org/TR/xml/)_. 6 novembre 2008.
- BARON D. _[Fragmentation of document formats on the World Wide Web](https://dbaron.org/www/df-frag)_. 11 mai 2004.
- THE MOZILLA FOUNDATION, OPERA SOFTWARE, ASA. _[Position Paper for the W3C Workshop on Web Applications and Compound Documents](https://www.w3.org/2004/04/webapps-cdf-ws/papers/opera.html)_. Avril 2004

### Personnalités

- [Irene Vatton](http://wam.inrialpes.fr/people/vatton/) ([profil LinkedIn](https://www.linkedin.com/in/irene-vatton-43a472a6/)), Ingénieure de recherche, INRIA Alpes, France, architecte du navigateur éditeur Web Amaya
- [Sarah Allen](<https://en.wikipedia.org/wiki/Sarah_Allen_(software_developer)>) ([profil LinkedIn](https://www.linkedin.com/in/ultrasaurus/)), Director of Application Development, Laszlo Systems (directrice du développement de Adobe Shockwave Multiuser Server, Flash Media Server, et Flash video, et co-fondatrice de la compagnie à l'origine de Adobe After Effects)
- [David Baron](https://dbaron.org/) ([wikipedia](<https://en.wikipedia.org/wiki/David_Baron_(computer_scientist)>), [LinkedIn](https://www.linkedin.com/in/ldavidbaron/)), Technical Lead Mozilla (2003-2020), puis développeur pour l'équipe Rendering de Chromium chez Google depuis mars 2021
- [Ian Hickson](http://ian.hixie.ch/) ([Wikipedia](https://en.wikipedia.org/wiki/Ian_Hickson), [CV](http://ian.hixie.ch/career/resume.html), [Twitter](https://twitter.com/Hixie)), Développeur Opera (2003-2005), puis Google
