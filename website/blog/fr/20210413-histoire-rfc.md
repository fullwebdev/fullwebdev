# L'Histoire des _Request For Comments_

::: tip
Infos complémentaires pour :

- la chronique « Les anecdotes historiques » présentée durant _Les briques du Web_ S01E03 le 13 avril 2021
- le _Chapitre 1 : Comprendre l'histoire du Web et de ses standards - section 2. IETF, les réseaux et Internet_ (p25-30) du livre _[Applications Web Modernes](https://www.editions-eni.fr/livre/developpement-et-architecture-des-applications-web-modernes-retrouver-les-fondamentaux-9782409029523)_.
  :::

:::warning

## Autorité & autoritarisme

J'ai, dans ma chronique pour les briques du web, utilisé le terme _"autorité"_ dans le sens qui lui est généralement donné en psychologie du développement.

Je parle donc de l'autorité fondée sur la légitimité.
Dans le langage courant, on pourrait parler, pour être plus précis, d'une _"autorité véritable"_.

L'_autoritarisme_, est, en suivant cette logique, une "parodie" ou "dérive" d'autorité, qui s'appuie sur la domination et la contrainte.

Dans le langage courant et en politique, histoire, sociologie et philosophie, les mots _"autorité"_ et _"autoritarisme"_ ont des sens différents et changeants.
Leur définition est sujette à débat, en particulier quand on parle de tradition, d'ancienneté, de démocratie ou de propriété.

Forcément, je joue avec ces différents sens dans cette chronique.

### Ressources complémentaires

- Carel André, « [Le processus d'autorité](https://www.cairn.info/revue-francaise-de-psychanalyse-2002-1-page-21.htm) », Revue française de psychanalyse, 2002/1 (Vol. 66), p. 21-40
- Audi Paul, « [Sémantique de l'autorité (quelques remarques)](https://www.cairn.info/revue-lettre-de-l-enfance-et-de-l-adolescence-2002-4-page-15.htm) », La lettre de l'enfance et de l'adolescence, 2002/4 (no 50), p. 15-22
- Podcast : Hannah Arendt et la crise de la culture - [Épisode 1 : Qu’est-ce que l’autorité ?](https://www.franceculture.fr/emissions/les-chemins-de-la-philosophie/hannah-arendt-et-la-crise-de-la-culture-1-quest-ce-que), Les chemins de la philosophie, France Culture, 8 février 2016
- Collognat Annie, [_Auctoritas - AUTORITÉ : un mot, une notion clé_](https://eduscol.education.fr/odysseum/auctoritas), Odysseum
  :::

## Steve Crocker et la naissance des RFC

![Steve Crocker durant l'ICANN 2007 à Lisbonne, Portugal](/illustrations/images/third-party/SteveCrockerICANN07.png){width=500px}

Après la naissance des ordinateurs et théories de la communication au sortir de la seconde guerre mondiale, de très nombreux domaines de l'informatique avancent à grands pas durant les années 60.
La quantité de sujets révolutionnaires était donc démentielle à cette période.

L'invention du _[Perceptron](https://fr.wikipedia.org/wiki/Perceptron)_ en 1957 suivit par celle du premier systèmes experts, le [Dendral](https://www.britannica.com/technology/DENDRAL) en 1965, initie la recherche en intelligence artificielle.

De nombreuses nouvelles architectures matérielles sont créées, ce qui amènera notamment à la naissance des IBM 360 et du PDP-8 en 1965.

La "big data" voit le jour, avec la création du [premier data center](https://news.google.com/newspapers?id=ZGogAAAAIBAJ&sjid=3GYFAAAAIBAJ&pg=933,5465131&dq=data-center&hl=en) en 1965 par le gouvernement américain.

Enfin, les bases de l'informatique grand public (interfaces graphiques, souries, hypertexte, etc.) sont posées, comme nous l'avons déjà évoqué dans [l'épisode 1 de cette chronique](/blog/qui-a-invente-hypertexte)).

Des sujets qui donnent donc largement de quoi faire aux chercheurs et chercheuses de l'époque.
Par manque de disponibilités, la recherche sur les réseaux informatiques est alors déléguée à de jeunes diplômés, qui forment le _Network Working Group_.

> Les informations concernant la naissance du NWG sont assez floues, voir contradictoires.
> Suivant les sources, la première liste de membres comporte entre 4 ou 6 personnes.
>
> Dans tous les cas, il est certain que Robert Kahn (BBN), Lawrence Roberts (ARPA), Steve Carr (UCLA), Jeff Rulifson (Utah), Ron Stoughton (UCSB) et Steve Crocker (UCLA) ont tous participé aux premières réunions du NWG.

En plein syndrome du parvenu, Steve Crocker met alors en place le principe de RFC pour éviter d'attirer « la colère des adultes ».

Pour rédiger une note, lui et ses collègues n'ont qu'une obligation : mettre leur nom et un titre.
Steve Crocker s'occupera ensuite de l'édition, en donnant un numéro à chaque RFC.

## Qu'est-ce qu'une RFC ?

Crocker rédige ensuite la [RFC3 - _DOCUMENTATION CONVENTIONS_](https://tools.ietf.org/html/rfc3), pour définir plus clairement ces règles.

Au départ, les RFC n'était qu'un simple système de notes plus ou moins informelles, destinées à contourner la rigidité des recherches scientifiques.
Elles ont, depuis, gagné en popularité et se sont diffusées.

Aujourd'hui, on distingue deux types de RFC :

- les RFC de l'IETF (on dira généralement "la RFC X", sous-entendu, de l'IETF)
- les RFC telles que définies et employées par d'autres projets, tels que React ou Yarn

Toutes ces RFC utilisent des RFC dans le même but : faciliter le traitement de sujets critiques.
Elles permettent d'encadrer un débat, en se focalisant uniquement sur la pertinence des idées et propos.

Chaque organisation définit un format et un processus d'édition strict pour ses RFC.
Processus qui permet, petit à petit, d'obtenir un résultat qui soit suffisamment clair et complet pour servir de référence.

Cette référence (la RFC à proprement parlé) est finalement conservée « pour toujours », afin de guider les travaux ultérieurs.
Rien n'empêche cependant qu'une autre RFC vienne par la suite compléter ou contredire ces conclusions.

> Les RFC ont à présent un rôle crucial au sein de l'IETF, qui leur a donc donné, paradoxalement, un statut formel.
>
> Une étape supplémentaire de publication est donc devenue nécessaire.
> Aujourd'hui, des brouillons informels, nommés _[Internet Drafts](https://www.ietf.org/standards/ids/)_ (abrégés I-D), précèdent la publication de nombreuses RFC.
>
> Ces I-D, au contraire des RFC, peuvent être modifiés et supprimés à tout instant, sans autre formalité.

## Les RFC de l'IETF

Tous les documents (ou presque) officiels édités par l'IETF sont des RFC.
L'ensemble des protocoles réseaux sont donc standardisés par des RFC (exemples : TCP [\[RFC793\]](https://tools.ietf.org/html/rfc793), IPv4 [\[RFC791\]](https://tools.ietf.org/html/rfc791), SMTP [\[RFC5321\]](https://tools.ietf.org/html/rfc5321)).
Mais une RFC peut également être utilisée pour des cas moins formels : indiquer à la communauté que l'IETF s'intéresse à un nouveau sujet, retranscrire une discussion, ou donner un rapport d'étape sur un sujet en cours.

La rédaction de ces RFC est strictement encadrée par (surprise)... des RFCs.

La [RFC 7322 - RFC Style Guide](https://tools.ietf.org/html/rfc7322) est aujourd'hui le document de référence.
Lire cette RFC ne demande aucun prérequis technique.
C'est donc un très bon point de départ si vous voulez vous intéresser de plus prêt à l'IETF.
De plus, ces règles peuvent également vous servir de guide pour vos propres écrits techniques en anglais.

Quelques règles très simples permettent de guider l'écriture (le reste étant géré par l'éditeur).

Des règles typographiques, tout d'abord : ponctuation (section 3.2), capitalisation (3.4), citation (3.5) et abréviation (3.6).

> Les règles typographiques sont au texte ce que les règles de formatage sont au code.
> Leur objectif est donc similaire : faire en sorte que le résultat soit lisible, sans perdre de temps en débats futiles.
>
> Plus globalement, les RFC s'appuient sur le [Chicago Manual of Style (CMOS)](https://www.chicagomanualofstyle.org/book/ed17/frontmatter/toc.html).
> Ce code typographique fait dans les 1750 pages et est en accès payant ($41/an).
> Il vous sera donc peu utile à titre personnel, mais constitue la référence absolue pour la grande majorité des éditeurs anglophones.
>
> Il n'existe pas, à ma connaissance, d'équivalent pour les francophones.
> Le _Lexique des règles typographiques_ de l'Imprimerie nationale est généralement considéré comme la meilleure référence, mais est assez incomplet et manque de mise à jour (la dernière édition date de 1997).
> Il peut donc être complété par _Le Nouveau Code typographique_ de la FCCS CGC et _Le Ramat de la typographie_.
> Mais les contradictions sont nombreuses entre ces trois ouvrages.
>
> En résumé : lisez le [Petit guide typographique à l’usage de l’internet](http://www.uzine.net/article1802.html) pour une bonne introduction et faites comme bon vous semble 😉

Toutes les RFC doivent également avoir la même structure :

- un en-tête, indiquant le ou les auteurs avec l'organisation à laquelle ils ou elles sont ratachées, la date de publication, et le numéro de la RFC
  - Le format de l'en-tête est lui-même défini en détail dans la [RFC5741](https://tools.ietf.org/html/rfc5741).
- un titre
- un résumé
- le corps de la RFC, devant obligatoirement inclure une introduction et, optionnellement, une liste de références
- et enfin, un "bas de page", indiquant les informations de contact des auteurs, et, optionnellement, diverses notes d'attributions et listes de contributeurs

Là aussi, quelques conseils très simples restent parfaitement applicables en dehors des RFC :

- écrire un résumé complet, qui se suffise à lui-même
- ne pas avoir peur de se répéter, en particulier dans le résumé et l'introduction
- éviter les inconsistances, en utilisant toujours le même terme (sous la même forme) pour désigner la même idée tout au long du document
- utiliser des conventions d'écriture de type « commencer le résumé avec la phrase "Ce mémo..." ou "Ce document..."

:::tip
Chaque RFC doit également indiquer clairement la signification des termes MUST, SHOULD, MAY, et de leurs négations, si elle en fait usage.
Ces termes sont appelés "requirement levels" (littéralement, niveaux d'exigences), et sont très utiles pour exprimer clairement un ensemble de règle à suivre.

La [RFC2119 _Key words for use in RFCs to Indicate Requirement Levels_](https://tools.ietf.org/html/rfc2119) donne une définition par défaut valable pour la plupart des cas.
N'hésitez pas à la rappeler si vous décidez d'écrire un code de style pour votre entreprise.
Cela le rendra plus clair, et plus facile à éditer.
:::

### Édition d'une RFC

Une RFC est donc là pour exprimer un ensemble d'idées (voir, des règles) de manières claire et non ambiguë.
Ce qui exige de trouver un bon équilibre entre le fond et la forme.
Objectif qui n'est pas toujours facile à atteindre.

Les auteurs, en rédigeant la RFC, se focalisent logiquement sur le fond.
Des idées ont été longuement étudiées et débattues.
Le premier objectif des auteurs est donc de retranscrire ces idées sans les trahir.

La forme du document (syntaxe, cohérence, typographie, en-tête, etc.) est, elle, de la responsabilité de l'éditeur.
Celui-ci se charge donc de vérifier le respect des règles de formatage, ainsi que la pertinence du texte.

Toute rédaction d'une RFC entraine forcément une certaine tension entre auteurs et éditeur.
L'éditeur se doit donc de respecter une bonne « balance éditoriale ».
Balance qui est établie grâce à la règle d'or des éditeurs : toujours respecter l'intention première des auteurs (_« do not change the intended meaning of the text »_)

> Jon Postel fut l'éditeur de référence des RFC de leurs débuts, en 1970, jusqu'à sa mort en 1998.
>
> ![Jon Postel au travail, 1994](/illustrations/images/history/Jon_Postel.jpg)
>
> Postel, en établissant et maintenant la consistance et la qualité de très nombreuses RFC, fut un des principaux contributeur aux standards Internet.
> Il fut également le premier membre de l'Internet Society et un des responsables de l'IANA (organisation gérant l'allocation des adresses IP sur l'Internet).
> Toutes ces responsabilités lui vaudront le surnom de "Tsar des protocoles" (_“Protocol Czar”_) ou encore de “Deputy Internet Architect”.
>
> Le tout en tapant avec deux doigts !
> Preuve supplémentaire, s'il en fallait, que votre "style de nerd" ne dit rien de vos talents et de l'importance de vos contributions.

### Poissons d'avril

L'IETF publie chaque année un ou plusieurs poissons d'avril sous forme de RFC.
Alors que les autres blagues du 1er avril sont, à mon gout, tout juste drôles, celles de l'IETF sont toujours bien ficelées, et même parfois assez instructives.

Oui, parce que l'humour, c'est du sérieux !
Une blague, ça se travaille voyez-vous.

Si tout le monde peut proposer une "RFC d'avril" à l'IETF, toutes ne seront pas reçues.
Chaque proposition passe par un vrai processus de relecture.
Cette relecture permet, évidemment, de vérifier que le thème abordé par la RFC soit en lien avec les sujets traités par l'IETF.
Elle assure également que le blague est suffisamment intelligente et drôle.

Forcément, l'humour par l'absurde du résultat est décuplé par une rédaction impeccable et le respect des règles de formatage.
Un vrai humour de nerd, en somme.
Pour autant, un bagage technique n'est pas toujours nécessaire.

Voici mes préférées :

<!-- prettier-ignore -->
| année | RFC | description                          |
|-------|-----|--------------------------------------|
| 1990 | [1149](https://tools.ietf.org/html/rfc1149) | transport de données par pigeon voyageur, sans doute la plus célèbre (et qui a été mise à jour pour IPv6 en 2011, via la [RFC6214](https://tools.ietf.org/html/rfc6214) ... quand je vous dis que c'est du sérieux !)
| 1993 | [1437](https://tools.ietf.org/html/rfc1437) | un nouveau type MIME pour les "formes de vies intelligentes"
| 1994 | [1607](https://tools.ietf.org/html/rfc1607) | _A VIEW FROM THE 21ST CENTURY_ <br> une RFC qui sort un peu de l'ordinaire, et se bonifie avec le temps, puisqu'elle présente un ensemble de correspondances « envoyées de 2023 » avec beaucoup d'humour et une bonne dose de science-fiction hyper optimiste
| 1998 | [2324](https://tools.ietf.org/html/rfc2324) | _Hyper Text Coffee Pot Control Protocol (HTCPCP/1.0)_ <br> parce que l'erreur 418 "I'm a teapot" est plus qu'une simple blague, et qu'on avait vraiment besoin d'un protocole permettant de contrôler notre machine à café (ou notre théière, grâce à la [mise à jour de 2014](https://tools.ietf.org/html/rfc7168))
| 2002 | [3251](https://tools.ietf.org/html/rfc3251) | _Electricity over IP_ <br> il était grand temps de moderniser la transmission d'électricité ... quitte à ce qu'une lampe s'allume presque aussi lentement qu'une bougie
| 2003 | [3514](https://tools.ietf.org/html/rfc3514) | Définition de l'[Evil Bit](https://en.wikipedia.org/wiki/Evil_bit), pour indiquer quand vous envoyez un paquet IP avec de mauvaises intentions ("malicious intent")
| 2004 | [3751](https://tools.ietf.org/html/rfc3751) | Réaction aux délires des sénateurs américains (qui voudraient « détruire la machine » d'un "pirate" à distance) avec beaucoup d'intelligence, en définissant les bases d'un protocole « omniscient » (une blague dans la même veine, mais bien plus poussée et habile, que la création du [pare-feu OpenOffice par Pollux](https://linuxfr.org/news/le-pare-feu-dopenofficeorg-existe) en 2010 suite à la [déclaration lunaire](https://youtu.be/F011hLZHZrM) de Christine Albanel à l'assemblée nationale)
| 2013 | [6919](https://tools.ietf.org/html/rfc6919) | Un de mes chouchou, puisqu'elle étend la RFC2119 et définissant des termes comme _REALLY SHOULD NOT_ et _WOULD PROBABLY_, le tout avec des références à de "vrais" RFC |
| 2017 | [8140](https://tools.ietf.org/html/rfc8140) | _The Arte of ASCII_ <br> Petit bestaire en ASCII, avec une licorne :heart_eyes_cat:

Enfin, je trouve que la [RFC8962](https://tools.ietf.org/html/rfc8962) est, cette année, particulièrement bienvenue et d'actualité.
Il était grand temps que l'IETF fasse à son tour preuve d'autorité, en adoptant un régime policier !

## Chronologie d'ARPAnet et des protocoles Internet

### 1958-1969 : fondations théoriques

- **Années 50** : avec l'intensification guerre froide, l'informatique devient une priorité pour le gouvernement américain
- **1958** : création de l'ARPA (U.S. Advanced Research Project Agency) par le DoD pour « maintenir la supériorité technologique des forces armées américaines en matière de communication, de commandement et de conduite (C³) des opérations »
- **1963** : Joseph C.R. Licklider et David D. Clark (chercheurs au MIT) émettent l'idée d'un réseau décentralisé permettant l'échange de données entre ordinateurs
  - Licklider devient directeur du Information Processing Techniques Office (IPTO).
  - Seuls 2 acteurs maitrisent suffisamment l'échange de données à distance : l’université de Los Angeles (UCLA, Western Data Processing Center) et les Laboratoires Bell.
- **1964** : recherches de Paul Baran (Rand Corporationn, think thank affilié au DoD)
- **1966** : application des théories de « _packet switching_ » de Leonard Kleinrock (MIT) par Lawrence Roberts et Thomas Marill (Computer Corporation of America CCA, Cambridge Massachussetts)
  - cette application permet une première démonstration de faisabilité des idées de Licklider & Clark
- **fin 1966** : Lawrence Roberts rejoint l'ARPA, et rédige le mémo « Multiple Computer Networks and Intercomputer Communication »
- **octobre 1967** : présentation du mémo de Roberts à la conférence ACM de Gatlinburg
- **1969**: Roberts devient responsable du programme « Resource Sharing Computer Networks »

### 1969-1983 : développement d'ARPAnet

> Définition de NCP, Telnet, FTP & SMTP

- **début 1969** : publication de l'appel d'offre
  - développement des interfaces attribué à Bolt Beranek et Newmann (BBN),
- **Août 1969** : IMP (Interface Message Processor)
- **septembre 1969** : premier protocole de communication « hôte-interface » (Host-IMP) (avec l'UCLA)
  - l'UCLA (Leonard Kleinrock) devient le 1er noeud de l'ARPAnet
- **oct 1969** : connexion du SRI (2ᵉ noeud)
- **fin 1969** : deux derniers noeuds sont créés sont la direction de Glen Culler et Burton Fried de l’université de Santa Barbara (UCSB) et Bob Taylor et Ivan Sutherland de l’université de l’Utah (UCU)
- **début 1970** : premières RFC définissant les bases du Network Control Protocol (NCP) ([RFC33](https://tools.ietf.org/html/rfc33), [RFC36](https://tools.ietf.org/html/rfc36))
- **décembre 1970** : finalisation du NCP par le NWG
- **octobre 1972** : première International Conference on Computer Communications (ICCC)
  - l’IPTO réalise une première démonstration publique à Washington, en connectant plus de quarante terminaux informatiques qui donnent accès à des douzaines d’ordinateurs dispersés à travers tout le pays
  - une simulation de contrôle du trafic aérien entre sites distants est également présentée, démontrant ainsi l'utilité immédiate des réseaux
- **fin 1972** : développement des premières applications commerciales
- **1974** : première définition des protocoles TCP/IP
  - première utilisation du terme "Internetting" (par Robert Kahn & Vinton Cerf)

### 1975-1985 : développement des protocoles Internet

- **1980** : lancement du Computer Science Network (CSNET)
- **septembre 1981** : standardisation des protocoles TCP/IP
  - Internet Protocol - [RFC791](https://tools.ietf.org/html/rfc791)
  - Transmission Control Protocol - [RFC793](https://tools.ietf.org/html/rfc793)
- **novembre 1982** : Address Resolution Protocol - [RFC826](https://tools.ietf.org/html/rfc826)
- **1983** : adoption des protocoles TCP/IP par le DARPA, incluant ARPAnet
  - considéré comme une des "dates de naissance" d'Internet
- **novembre 1983** : Domain Name System (DNS - [RFC882](https://tools.ietf.org/html/rfc882) & [883](https://tools.ietf.org/html/rfc883))

### 1985-1990 : National Science Foundation Network (NSFnet)

- **1986** : interconnexion (56kbit/s) des centres de supercalculateurs de la NSF
  - naissance du NSFNet
- **avril 1988** : finalisation de Remote Procedure Call (RCP - [RFC1050](https://tools.ietf.org/html/rfc1050))
- **juin 1988** : finalisation de RIPv1 - [RFC1058](https://tools.ietf.org/html/rfc1058)
  - mise à jour de RCP - [RFC1057](https://tools.ietf.org/html/rfc1057)
- **juin 1989** : créaction des _Federal Internet Exchanges (FIXes)_
  - FIX East, à l'Université du Maryland
  - FIX West, au NASA Ames Research Center de Montain View
- **1990** : cloture du projet ARPAnet

### 1991-aujourd'hui : l'Internet Commercial

- **1991** : première définition d'HTTP ([HTTP v0.9](https://www.w3.org/Protocols/HTTP/AsImplemented.html))
  - naissance du World Wide Web
- **1996** : HTTP/1.0 ([RFC1945](https://tools.ietf.org/html/rfc1945))
- **1997-2014** : HTTP/1.1 ([RFC2068](https://tools.ietf.org/html/rfc2068), [2616](https://tools.ietf.org/html/rfc2616), [7230](https://tools.ietf.org/html/rfc7230) & [7237](https://tools.ietf.org/html/rfc7237))
- **2015** : HTTP/2 ([RFC7540](https://tools.ietf.org/html/rfc7540))
- **2016-aujourd'hui** : conception de HTTP/3
  - **juillet 2016** : [HTTP/2 Semantics Using The QUIC Transport Protocol](https://tools.ietf.org/html/draft-shade-quic-http2-mapping)
  - **2018** : HTTP-over-QUIC est renommé [HTTP/3](https://quicwg.org/base-drafts/draft-ietf-quic-http.html)
  - **décembre 2019** : support expérimental de HTTP/3 dans Chrome 79
  - **janvier 2020** : support expérimental de HTTP/3 dans Firefox 72.0.1
  - **avril 2020** : support de HTTP/3 par défaut dans Chrome 87
  - **avril 2021** : support de HTTP/3 par défaut dans Firefox 88

## Ressources

### Articles

- Barbaroux P. « [L’innovation comme communauté de communautés : une étude de cas historique](https://www.strategie-aims.com/events/conferences/2-xixeme-conference-de-l-aims/communications/24-linnovation-comme-communaute-de-communautes-une-etude-de-cas-historique/download) ». p. 25.
- Crocker S. <em>[Meet the Man Who Invented the Instructions for the Internet](https://www.wired.com/2012/05/steve-crocker/)</em>. (En ligne). 18 mai 2012
- Baran, P. « [On distributed communication networks](https://web.stanford.edu/class/cs244/papers/DistributedCommunicationsNetworks.pdf) », IEEE Transactions on Communications Systems, 12 (March 1964), p. 1-9.

### Commits

- Clark A. « Initial commit, based on Yarn RFCs repo · [reactjs/rfcs@59b512b](https://github.com/reactjs/rfcs/commit/59b512b) ». In : <em>GitHub</em>
- Katz Y. <span>« Initial sketch of the RFC process · [yarnpkg/rfcs@8831cfa](https://github.com/yarnpkg/rfcs/commit/8831cfa) »</span>. In : <em>GitHub</em>

## Script de la chronique

Bon, déjà, faut qu'j'vous dise un truc.\
C'est un truc qui me taraude depuis un moment, donc voila, je vide mon sac...

> Longue inspiration

**J'aime l'autorité.**

Ouai je sais, ça fait bizarre, surtout venant d'un social justice nerd ascendant anarco-islamo-bobo-bolchevick.

Bon, j'vous explique.\
Quand je vous dit autorité, vous pensez sans doute à l'instit qui vous hurlait dessus après un zéro en dictée.\
Ou alors, à des figures plus générales, genre votre patron, l'académie française ou ... Castex, au hasard.

Alors non, ça c'est de l'autoritarisme.\
Faut pas confondre.

Allez, je vous montre avec ma machine à voyager dans le temps.

> Bruitage machine à voyager dans le temps

On est dans les années 60, aux état-unis.\
Le lieu parfait pour parler d'autorité et d'autoritarisme.

Plein de gens combattent l'autoritarisme.\
On a le Civil Rights Movement, qui mit fin de la ségréation en 1964.\
La même année, on a la naissance du Free Speech Mouvement à Berkeley.

Et parallèle de tout ça, d'autres personnes mettent en place un truc qui va totalement changer le monde : Internet.

Bon, quand je dis Internet, je m'emballe hein.

En mars 1964, Paul Baran, un ingénieur en électricité et informatique, finalise 18 mois de recherche.\
Il ne fait alors que formaliser les premiers concepts pour les réseaux, en particulier la commutation de paquets.

Il faudra ensuite plus de 5 ans pour que ces concepts soient mis en œuvre, dans le cadre du projet ARPAnet.\
Le matos est géré par deux sociétés privées : BBN, qui fabrique les premiers routeurs, et AT&T, qui s'occupe de la liaison.

Puis on utilise ce matos pour connecter la UCLA (université de Californie), en septembre 1969.\
Puis, un mois plus tard, le SRI, où Engelbart avait créé la sourie, l'hypertexte et tout le reste ... et ouai, y a des liens entre les épisodes.\
Et puis après, bon, on a fait au plus simple.\
L'université de Santa Barbara (UCSB), parc'que c'est à côté.\
Et puis celle de l’Utah (UCU), parc'qu'apparemment c'était mieux avec les câbles et tout.

Donc là, on a vraiment les 4 premiers nœuds d'ARPAnet.\
Le tout tout début quoi.\
Les fils sont connectés, youpla boum, mais ... en fait, on sait pas trop quoi en foutre.

Bon, heureusement, vous vous en doutez, des chercheurs qui bossaient sur ces 4 premiers sites ont un peu anticipés le truc quand même.\
En février 1969, ils s'étaient même réunis chez BBN pour discuter software et protocoles.\
Et ils se sont donné eux même un petit nom : le Network Working Group (ou NWM).

Mais bon, les grands chercheurs, ils avaient d'autres priorités à l'époque.\
Ça causait intelligence artificielle, big data, graphisme ...\
et puis si vous vous rappelez bien, Engelbart et son équipe, ils étaient déjà en train de changer le monde en augmentant l'intelligence humaine, donc bon, une révolution à la fois quoi.

Du coup, qu'est-ce-qu'y ont fait ...\
Ben ils ont refourgé le bébé à des sous-fifres.\
Genre, des gens qui venaient d'avoir leur diplôme quoi.

En avril 1969, le NWM ne comprenait que 4 membres.\
Moyenne d'âge : 23 ans, à peu près.\
Ils sont super enthousiastes, et en plus, comme ils avaient déjà bossé sur les même trucs, le courant passe super bien, et les idées fusent.\
Ils font plein de réunion, et ils prennent des notes.

Sauf qu'à un moment, il a bien fallu qu'ils fassent un rapport à leurs collègues et supérieurs.

Et là, y avait un problème.\
La hiérarchie, dans les années 60, étaient super strict.\
L'ancienneté, ça comptait énormément.

Steve Crocker, un des membres du NWG, était particulièrement stressé par cette situation.\
Pour utiliser ses propres mots, il avait peur de mettre en colère les adultes.\
De paraitre trop précieux quoi.

Alors il réfléchit, réfléchit, et pendant une nuit d'insomnie\
_\[claque des doigts\]_\
c'est l'illumination.

Plutôt que d'envoyer un traditionnel rapport officiel, ils vont écrire des "demandes de commentaires".\
Autrement dit, des RFC : Request for Comments.

Avec une idée principale : "vous pouvez poser des questions sans y apporter de réponse".

En avril 69, Les RFC 1 et 2 seront écrites pour définir un premier protocole, Host-To-Host, et la numéro 3 pour dire plus concrètement comment écrire une RFC.

Pour eux, c'est juste une solution temporaire.\
Un truc qui va vite disparaitre une fois que les adultes auront repris la main.

Sauf que les RFC sont super efficaces.\
Elles permettent de faire abstraction de toute hiérarchie, pour se focaliser sur le plus important : la compétence des gens, et la pertinence des idées.

Les protocoles TCP/IP seront définis par des RFC, avant d'être adoptées par ARPAnet en 1983, donnant ainsi naissance à Internet.\
Depuis sa création en 1986, l'Internet Ingeniering Task Force (l'IETF) n'écrit que des RFC.\
Une RFC peut définir un protocole standard, mais aussi permettre de discuter d'un problème, faire un rapport d'étape sur un sujet en cours, ou simplement exprimer son intérêt pour un sujet.

C'est pourquoi, quand on dit aujourd'hui, "la RFC numéro machin", on parle, par défaut, d'un document officiel de l'IETF.

Alors forcément, la RFC 3 a été largement réécrite au cours des années.\
Aujourd'hui, le Style Guide pour les RFC de l'IETF fait dans les 24 pages.\
C'est la RFC 7322, excusez du peu.

Plein d'autres organisation utilisent aussi des RFC.\
React, par exemple, passe par des RFC pour discuter et formaliser tous les futurs changements majeurs, avec ses propres règles.

Mais ces règles sont là pour faciliter la rédaction.\
Pour être le plus clair possible.\
Pas pour poser des contraintes bureaucratique qui gênent la lecture et l'écriture.

Et c'est là qu'on revient à la question de l'autorité.

L'IETF, comme tous les organismes de normalisation (W3C, WHATWG, et j'en passe), fait autorité parce que ses standard font sens.\
Parce qu'il ont été écrits par des personnes compétentes, et largement débattus, de manière ouverte.\
Si je prends le dico (Le Petit Robert, dans mon cas), "Faire autorité", ça veut dire : s'imposer auprès de tous comme incontestable, servir de règle.\
Exemple : Un ouvrage qui fait autorité.

S'imposer, ici, ça veut pas dire montrer ses gros muscles et dire "bon, maintenant tu vas faire ce que je veux".\
Ça, c'est l'autoritarisme.

On s'impose _de fait_ comme incontestable.\
Ce sont vos compétences, votre pertinence dans un domaine, qui fait que les autres respecteront votre autorité.\
On vous juge toujours sur vos actes.\
Pas sur ce que vous prétendez être.

Votre boulot, votre position hiérarchique, votre violence, vos privilèges, bref, le pouvoir que vous avez de forcer les autres, n'est jamais pertinent.

Pensez le contraire, et vous le payerez lourdement.
