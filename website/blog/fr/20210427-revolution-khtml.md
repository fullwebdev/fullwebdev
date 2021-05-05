<!-- markdownlint-disable-file code-block-style -->

# Quand Linux et le logiciel libre ont révolutionné le Web

<div class="wc-text-content">

::: tip
Infos complémentaires pour :

- la chronique « Les anecdotes historiques » présentée durant Les briques du Web S01E04 le 27 avril 2021
- le _Chapitre 2 : Suivre les évolutions de la plateforme - section 3. Naissance de Chrome et de Safari_ (p102-104) du livre _[Applications Web Modernes](https://www.editions-eni.fr/livre/developpement-et-architecture-des-applications-web-modernes-retrouver-les-fondamentaux-9782409029523)_.

:::

## Petite intro nostalgeek

Je suis né en 1987, en France.
Deux ans avant la naissance du Web, donc.
Dix ans plus tard, je voulais déjà être "Webmaster", comme on disait alors.
Un créateur de sites Web, en somme.

L'innocence de l'enfance quoi.
J'avais déjà eu quelques occasions de tripatouiller un peu d'HTML sur le PC de mon beau-père, mais pas beaucoup plus.

Faut dire que pendant plusieurs années, mon seul ordi fut un Macintosh 128k.
Un dinosaure fabriqué 3 ans avant ma naissance.
Pas grand-chose à faire là-dessus à part jouer à [Airbone](https://youtu.be/tEH7fml5Jl0) et [Shufflepuck](https://youtu.be/Aon0G5xxDyA), ou utiliser le traitement de texte pour écrire de (très mauvaises) nouvelles de SF.

![Le premier Macintosh était "une révolution" en 1984 ... mais beaucoup moins à la fin des années 90.](/illustrations/images/blog/macintosh-128k.jpg)

Ma passion change un peu avec l'arrivée de mon premier PC en 2000, puis d'un modem 56k avec un abonnement AOL partagé entre copains l'année suivante. ^[Je me rappelle nettement l'achat du premier numéro de _[Micro Hebdo](https://www.abandonware-magazines.org/affiche_mag.php?mag=215&num=6645&album=oui)_ "Internet, mode d'emploi". Je pense avoir acheté quasiment tous les numéros. On est très loin du magazine d'expert cela dit.]
Petit à petit, c'est surtout le logiciel libre qui attire mon attention et avec lui, Linux, avec Mandriva.
À l'époque, ça s'appelait Mandrake, et on achetait les CD chez le marchand de journaux.

![Bon, j'ai pas retrouvé les miens dans les cartons, mais ça ressemblait à ça à CD Linux à l'époque.](/illustrations/images/blog/mandrake-linux-mag.jpg){height=300px}

Je commence alors à bidouiller des PC avec les copains. C'était l'époque des [Lan](https://fr.wikipedia.org/wiki/LAN_party) et des [Install Party](https://fr.wikipedia.org/wiki/Install_party). Debian, Ubuntu, CrunchBang, Gentoo, Arch, Manjaro, et sans doute plein d'autres que j'oublie au passage. J'ai très souvent changé de distribution, mais ne suis jamais revenu à Windows.

Du coup, j'ai logiquement commencé ma carrière côté administration système, après un stage de dev PHP (et une startup ratée quand même, pour faire bien).
Je suis devenu prof, j'ai rejoint des associations de libristes, et j'ai prêché la bonne parole de manchot autour du monde pendant prêt de 6 ans ^[Bon après, pour remplir le frigo, j'ai aussi dû faire beaucoup de Java, du JQuery, et un peu de Python. Mais c'est une autre histoire.].

D'ailleurs, un ancien client utilise toujours plusieurs de mes vieux cours en ligne de manière illégale apparemment.
Je suis sûr que vous pourrez les trouver en fouillant bien, vu que je reçois encore régulièrement des mails d'élèves me demandant des conseils sur Linux, Java ou même Cisco.

> J'ai aussi laissé sur [SlideShare](https://fr.slideshare.net/noelmace) plus d'une centaine de mes supports de l'époque, si vous êtes curieux.

Mais pour le coup, je n'ai plus vraiment de conseil à leur donner.

Certes, j'ai écrit quelques questions de la [_Mandriva Certification for Administrators_](https://www.nextinpact.com/archive/27419-Mandriva-a-SupInfo-un-partenariat-pour-les-c.htm).
J'ai même longtemps formé des personnes pour passer les certifications LPIC (sans jamais oser les passer moi-même ... angoisse de la page blanche, syndrome du parvenu, bref, vous voyez le topo).

Et forcément, je bricole toujours sur du Linux.
J'écris des scripts Bash, Python et Lua régulièrement, pour le plaisir.
Mais je dois bien l'avouer, j'ai un peu perdu la main.

Parce que l'arrivée d'AngularJS 1.3 en 2014 a tout changé.
Mon premier amour était revenu !
J'ai fermé mon entreprise, signé un CDI, puis un autre, et encore un autre ...
7 ans, des dizaines de projets et un livre plus tard, je suis encore loin d'avoir épuisé le sujet.
N'ayant que 24 heures dans une journée, l'administration système est forcément passée au second plan, puis au troisième, au quatrième, et je vous laisse deviner la suite.

De plus, tout un tas d'autres questions m'ont amené à modérer mon amour pour Linux, et l'Open Source en général.

## Cohérence, environnement de bureau, et KDE

Beaucoup de devs vous le diront, Linux est un très bon système pour les pros et les passionnés.
Bon OK, Safari ne tourne que sur Mac, et beaucoup de projets manquent cruellement de support Windows.
Mais dans l'ensemble, ça fait l'affaire.
En tout cas, c'est le cas pour moi depuis prêt de vingt ans (ouch, le temps passe vite).

Pour le grand public, par contre, c'est une autre affaire.
Il faut pas mal de connaissance pour faire fonctionner ensemble tout un tas de trucs développés séparément.
Linux offre, grâce à son ouverture, une très grande liberté.
Liberté qui peut rapidement se transformer en cauchemar pour beaucoup de non spécialistes.

Comment je configure le Wifi ?
Il me faut quel logiciel pour scanner une page ?
Je clique où pour voir mes photos ?

Avec Linux, toutes ces questions peuvent avoir des dizaines, voir des centaines de réponses différentes.
Windows et Mac OS, de leur côté, sont directs.
L'utilisateur est face à un ensemble cohérent construit par une unique entreprise.
Une question, une documentation, une réponse, et l'affaire est dans le sac.

KDE a précisément été créé pour résoudre ce problème.
Pour offrir un environnement cohérent aux Linuxiens et Lunuxiennes.

L'appel de Matthias Ettrich sur le groupe Usenet _de.comp.os.linux.misc_ du 14 octobre 1996 (_[New Project: Kool Desktop Environment. Programmers wanted!](https://groups.google.com/g/de.comp.os.linux.misc/c/SDbiV3Iat_s/m/zv_D_2ctS8sJ?pli=1)_) est, à ma connaissance, la première initiative du genre.

D'autres environnements de bureau naissent à la même époque (entre 1996 et 1997), comme [Enlightenment](https://www.enlightenment.org/), [Xfce](https://www.xfce.org/) et [Gnome](https://www.gnome.org/).
Mais ces projets seront bien moins ambitieux que KDE, qui cherche à couvrir un bien plus large éventail de besoins[^env].

Enlightenment, Xfce et Gnome se contentent de fournir un environnement de bureau léger.
Les autres logiciels sont alors simplement recommandés.

KDE, de son côté, construit petit à petit un écosystème complet utilisant des frameworks communs.
Pour citer la [note de version](https://kde.org/announcements/1-2-3/1.0-beta1/) de la toute première beta :
_« KDE n'est pas simplement un gestionnaire de fenêtres de plus, qui essayerait d'imiter l'apparence d'un environnement de bureau existant. C'est un environnement intégré dont le gestionnaire de fenêtres ne représente qu'une infime partie. »_

Cet environnement offre donc moins de customisation, pour plus de cohérence.
Ce qui permet de construire des distributions Linux avec une facilité d'utilisation proche de Mac OS.

## KDE entre dans la guerre des navigateurs

![Évolution des parts d'utilisation des navigateurs web de 1997 à 2021.](/illustrations/images/history/browser-share/graph-browser-share-1994-2021-webkit.png)

Le projet KDE inclut donc dès le départ (en 1997) un grand nombre d'applications simples, comme un lecteur CD et une calculatrice.
Le gestionnaire de fichier KFM (_KDE File Manager_), en particulier, se distingue en utilisant directement un moteur HTML (_khtmlw_) pour afficher les fichiers et dossiers.
Il permet donc de consulter la majorité des sites web de l'époque.

Mais le Web ne restera pas longtemps aussi minimaliste.
La publication d'Internet Explorer 3.0 en août 1996 marque un tournant majeur en intégrant le CSS et JScript.
Netscape, qui avait lui-même inventé le JavaScript en 1995, supporte le CSS dès 1997, soit très peu de temps après la publication du standard CSS1.
Avec la première édition de la norme [ECMA-262](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/), JavaScript (ou plutôt, ECMAScript) intègre enfin le groupe des langages officiels du Web en juin 1997.

Ces deux langages gagnent alors rapidement en popularité.
Dès lors, un navigateur web doit impérativement intégrer des interpréteurs JavaScript et CSS pour afficher des pages web.

Un tel navigateur complète KDE à la sortie de sa version 2 en octobre 2000.
Il est alors (et est toujours aujourd'hui) nommé Konqueror.

![Logo de Konqueror, le navigateur web de KDE.](/illustrations/images/third-party/konqueror.svg){height=200px}

Mais Konqueror n'aura qu'un rôle secondaire dans la première guerre des navigateurs.
Beaucoup d'utilisateurs Linux continuent de préférer Netscape au navigateur KDE.
Surtout, Linux est très peu utilisé en comparaison de Windows.
Un navigateur spécialement dédié à ce système n'a donc aucune chance de rivaliser avec Internet Explorer, dont l'installation est imposée sur Windows.

En 2001, Internet Explorer l'emporte sur tous ses rivaux.
À lui seul, IE est neuf fois plus utilisé que tous les autres navigateurs réunis.
Mais cette hégémonie ne dure que trois ans.
L'arrivée de nouveaux navigateurs, dignes descendants des perdants de la première compétition, déclenche en 2004 une nouvelle guerre.
Une guerre qui sera bien plus longue et impitoyable.

Netscape, suite à sa défaite, s'est progressivement effacé derrière Mozilla, son remplaçant Open Source.
Après sept ans de développement, Firefox voit finalement le jour en novembre 2004.

Un an plus tôt, Apple était déjà entré dans la bataille avec son propre navigateur, Safari.
Son moteur, WebKit, n'est alors qu'un fork de celui de Konqueror.
Une fois encore, l'association de ce navigateur à un système d'exploitation bien moins populaire que Windows limite fortement sa croissance.
Il faudra donc attendre encore cinq ans avant que l'arrivée de Google Chrome en octobre 2008 change définitivement la donne.

Aujourd'hui, 17% des consultations de sites web sont effectuées via Safari, et donc WebKit.
Son fork Blink, créé pour Chrome en avril 2013, occupe la quasi-totalité de la place restante, via Chrome, bien sûr, mais aussi Opera, Edge et Brave, pour ne citer que les plus connus.

![Usage des moteurs de rendu Web en 2021](/illustrations/images/history/browser-share/graph-browser-share-latest.png){height=400px}

On peut donc se réjouir que Konqueror ait, indirectement, permit de mettre fin au monopole d'Internet Explorer.

De mon point de vue, cette histoire permet également de souligner certaines limites de l'Open Source.

Mais ça, c'est une autre histoire qui mérite son propre épisode.

Rendez-vous donc le 11 mai sur Twitch et ce blog pour la suite.

::: tip

## The KDE Restauration Project

KDE 1 a été [publié en 1998](https://kde.org/announcements/1-2-3/1.0/), mais est toujours en développement en 2021 !

[En 2016](https://web.archive.org/web/20161014044730/http://www.heliocastro.info/?p=291) Helio Castro décidait de démarrer la restauration de cette vieille version pour son plaisir personnel et afin de célébrer les 20 ans de KDE.
Grâce à son travail, il est donc depuis possible de lancer KDE 1.1 sur une distribution moderne.

![KFM sur KDE 1.1](/illustrations/images/blog/kde-1-kfm.png)

`kde1-kdelibs` (qui inclut [`khtmlw`](https://github.com/KDE/kde1-kdelibs/tree/master/khtmlw)), `kdebase` (qui inclut [`kfm`](https://github.com/KDE/kde1-kdebase/tree/master/kfm)) et `qt1` constituent le système de base.
Les dépôts Git associés sont encore disponibles et actifs sur Github, [dans l'organisation KDE](https://github.com/KDE?q=kde1-) ou [sur le profil de Martin Sandsmark](https://github.com/sandsmark).

![Non, vraiment, allez faire un tour sur le profil Github de _sandsmark_, vous ne serez pas déçus !](https://raw.githubusercontent.com/sandsmark/sandsmark/master/sandsmark/martin.gif)

Sur le ArchLinux User Repository (AUR), les paquets `qt1-git`, `kde1-kdelibs-git` et `kde1-kdebase-git` (en plus de `xorg-server` et `xorg-xinit`) permettent donc d'installer KDE 1 facilement.

Une fois ces paquets installés, il vous suffit d'éditer votre fichier `~/.xinit` comme suit et le tour est joué.

```bash
export PATH=/opt/kde1/bin:$PATH
export LD_LIBRARY_PATH=/opt/qt1/lib:/opt/kde1/lib
exec startkde
```

Quinze autres projets (disposants chacun d'un [paquet AUR](https://aur.archlinux.org/packages/?K=kde1) `kde1-*-git` associé) fournissent ensuite tout un tas d'outils complémentaires :

- [_Amor_](https://github.com/sandsmark/kde1-amor) (_“Amusing Misuse Of Resources”_), pour afficher un petit personnage (chat, mario, dark vador, etc.) qui vous aide au quotidien
- [_KDE Games_](https://github.com/KDE/kde1-kdegames), avec pleins de jeux sympas (asteroid, abalone, snake, etc.)
- [_KCM Laptop_](https://github.com/sandsmark/kcmlaptop), pour le support des ordinateurs portables (gestion de la batterie et mise en veille)
- [_KDE Graphics_](https://github.com/KDE/kde1-kdegraphics), pour visualiser des fichiers PostScript, éditer des icones, faire des captures d'écran, etc.
- [_KDE Multimedia_](https://github.com/KDE/kde1-kdemultimedia), pour la lecture de fichiers multimédia
- [_KDE Network_](https://github.com/KDE/kde1-kdenetwork), pour l'utilisation, la gestion et l'analyse du réseau (ping, traceroute, hostname, mails, etc.)
- [_KDE Toys_](https://github.com/KDE/kde1-kdetoys), petits gadgets pour visualiser les phases de la lune, le cycle jour-nuit sur une mappemonde, ou jouer avec sa souri
- [_KDE Utils_](https://github.com/KDE/kde1-kdeutils), collections d'utilitaires basiques (calculatrice, éditeur de texte, formatage de disquettes, gestion des polices, prise de notes, etc.)
- [_KDE Wizard_](https://github.com/sandsmark/kdewizard), un assistant de paramétrage
- [_kGoldrunner_](https://invent.kde.org/sandsmark/kde1-kgoldrunner), un jeu d'action-réflexion
- [_kPackage_](https://github.com/sandsmark/kde1-kpackage), GUI pour la gestion de paquets
- [_kShow_](https://github.com/sandsmark/kde1-kshow/), un visualiseur d'images
- [_kteatime_](https://github.com/sandsmark/kde1-kteatime), un chronomètre (pratique pour le thé)
- [_KTip_](https://github.com/sandsmark/kde1-ktip), les petites astuces de Kandalf (rétro-porté de KDE 2)
- [_kuickshow_](https://github.com/sandsmark/kde1-kuickshow/), encore un autre visualiseur d'images

Forcément, je ne vous recommande pas de faire ça sur votre système de travail quotidien, car je doute que le tout puisse très bien coexister avec d'autres environnements de bureau via un login manager.
Personnellement, je n'ai pas fait joujou avec KDE 1 depuis un moment.
Mais si vous êtes assez fou pour tenter l'opération, faites le moi savoir 😃.

:::

</div>

[^env]:
    Personnellement, j'ai toujours préféré faire mes propres choix, au cas par cas.
    Alors forcément, KDE n'a jamais été mon environnement de travail quotidien.

    Je lui ai longtemps préféré Gnome, mais la version 3 ne me convenait plus (comme ce fut le cas [pour pas mal de monde](https://en.wikipedia.org/wiki/GNOME#Criticism)).
    Je suis donc passé à des systèmes de plus en plus minimalistes, comme Xfce et Openbox.
    Aujourd'hui, j'utilise [mon "propre" environnement](https://github.com/noelmace/dotfiles) avec [AwesomeWM](https://awesomewm.org/) et beaucoup de scripts.
    On ne se refait pas : bidouilleur un jour, bidouilleur toujours.

## Ressources

### KDE

- Knoll L. & Staikos G. « [From KDE to WebKit](https://www.youtube.com/watch?v=Tldf1rT0Rn0) ». Conférence chez Yahoo! (Vidéo). 2006
- Ettrich M. _[New Project: Kool Desktop Environment. Programmers wanted!](https://groups.google.com/g/de.comp.os.linux.misc/c/SDbiV3Iat_s/m/zv_D_2ctS8sJ?pli=1)_. _de.comp.os.linux.misc_. 14 octobre 1996.
- _[Lars Knoll - A Short Intro](https://behindkde.org/lars-knoll)_. _Behind KDE_. 20 novembre 2000.
- Github : _[KDE/kde1-kdelibs - Commits: khtmlw](https://github.com/KDE/kde1-kdelibs/commits/master/khtmlw)_

### Contexte historique

- Eylenburg A. « [Historical market shares of operating systems](https://maps-and-tables.blogspot.com/2016/01/historical-market-shares-of-operating.html) ». _Maps and Tables_. 12 janvier 2019.
- Angwin J. « [Sun Valley: Schmidt Didn’t Want to Build Chrome Initially, He Says](http://archive.wikiwix.com/cache/index2.php?url=http%3A%2F%2Fblogs.wsj.com%2Fdigits%2F2009%2F07%2F09%2Fsun-valley-schmidt-didnt-want-to-build-chrome-initially-he-says%2F) ». _The Wall Street Journal_. 9 juillet 2009.
- Then, E. « [Xfce creator talks Linux, Moblin, netbooks and open-source](https://www.slashgear.com/xfce-creator-talks-linux-moblin-netbooks-and-open-source-0633329/) ». SlashGear. 7 février 2009
- « [Google Chrome Comic](https://www.google.com/googlebooks/chrome/) ». 2 septembre 2008

<hr>

## Script de la chronique

<div class="wc-text-content speak-time">

Voyons voyons, de quoi je vous ai parlé jusque-là...\
les RFC en 1964, c'est fait...\
L'invention de l'ordi personnel en 1962, c'est fait aussi...\
Et puis on a déjà fait l'invention de l'hypertexte en 1945.

Bon alors...
si je continue dans cette voix, on va remonter jusqu'aux babiloniens au bout d'un moment...
Du coup, on va pas faire ça.

Aujourd'hui, j'ai vraiment envi de parler du web, pour changer.

Bon déjà, le web, c'est de l'hypertexte, ça on l'a vu.\
On a des documents HTML. Des pages web quoi ;\
Avec des liens qui permettent de passer d'un document à un autre.\
Et on récupère tout ça sur Internet via le protocole HTTP.

Voila.\
Ça c'est la base.\
Le Web tel qu'il a été imaginé et créé par Tim Berners-Lee au CERN, en 1989.

Pour faire tout ça, il a bien fallu que Tim créé un logiciel.\
Un client, qui permet de consulter des documents HTML envoyés par un serveur HTTP.

Pris d'un élan d'imagination sans précédent, il a nommé ce premier logiciel _World Wild Web_.\
C'était donc le tout premier navigateur Web.

Comme le Web c'est grosso modo développé en même temps que les ordinateurs personnels et Internet, plein de gens vont rapidement l'utiliser, mais pas avec le navigateur de Tim.\
On reviendra là-dessus une autre fois, parce que c'est super intéressant, mais pour faire simple, on a eu ensuite Mosaic, qui c'est fait rétamer par Netscape.

De là, on passe rapidement à la première guerre des navigateurs, qui a été déclenchée par la naissance d'Internet Explorer, en 1995.\
Ça aussi on en parlera une autre fois.

Pour faire court : Netscape perds la guerre en 1997, vire plein de monde, et mets la clef sous la porte.\
Et puis Internet Explorer dansera la gigue sur son cadavre pendant une bonne décennie, jusqu'à ce que la seconde guerre des navigateurs lui fasse ravaler son sifflet face à Firefox, Safari et Chrome.

_(Oui, j'en parlerai aussi un jour ... peut-être)_\
_(Si vous pouvez pas attendre, ben vous achetez mon bouquin, et pi c'est tout.)_

Bref, ça, c'est 30 ans d'histoire des navigateurs en mode ultra accéléré.\
Comme d'ab, il y a plein de petites anecdotes sympa à tirer de cette histoire.

Est-ce que vous saviez par exemple que la seconde guerre des navigateurs a été déclenché par Linux ?

OK, on revient un peu en arrière alors.

À la fin des années 80, alors que le Web est en train de naitre, Amiga, Atari et Commodore 64 son proche de leur fin, et Apple subit une longue série d'échecs.\
Les "compatibles PC" dominent donc largement le marché des ordinateurs personnels.\
Tous les PC fonctionnent sous Windows...\
Tous ?\
Non !\
Un système créé par d'irréductibles developpeurs résiste encore et toujours à l'envahisseur.

Même en 96, soit 5 ans après sa création, installer et utiliser Linux n'est pas à la portée de tous.\
Car il faut assembler plein de logiciels très différents.\
En somme, ça manque de cohérence.

Matthias Ettrich lance alors un appel pour créer un nouveau projet : The Kool Desktop Environment.\
KDE (parce que oui, "Kool" était écrit avec un K)...\
Donc KDE, disais-je, devient rapidement un très gros projet, avec de nombreux contributeurs.

Et heureusement, parce qu'y a du pain sur la planche.

Bon déjà, KDE est un environnement de bureau, avec une barre des tâches, un gestionnaire de fenêtres, etc.\
Mais c'est aussi et surtout un écosystème complet, embarquant tout un tas de logiciels et d'utilitaires.

Tous utilisent la même bibliothèque graphique, Qt.\
Ils ont un look similaire, et se comportent de manière uniforme.

Histoire d'intégrer le Web à cet écosystème, une première bibliothèque de rendu HTML est même créée : the KDE HTML Widget (ou khtmlw).

Entre 97 et 98, la première version de KDE embarque ainsi un gestionnaire de fichier, kfm, qui est "presque" un navigateur web.\
Comme tout le rendu y est fait avec khtmlw, il suffit d'entrer l'adresse d'une page web dans la bare d'adresse pour l'afficher.

À l'époque, le Web était encore très simple.\
Du coup, une compatibilité HTML 3.2 c'était largement suffisant pour consulter la plupart des sites.\
Mais bon, sans JavaScript ni CSS, on ne peut pas vraiment dire que khtmlw (et donc Kfm) était suffisant pour faire un navigateur.

En 1998, Netscape passe en Open Source, et le projet Mozilla est lancé.\
Du coup, la communauté KDE préfère attendre l'arrivée de ce nouveau navigateur, plutôt que d'en créer un nouveau (on peut les comprendre).

Mais Lars Knoll (qui est aujourd'hui le CTO de Qt), ne se démonte pas.\
Il reprend le projet quasiment tout seul, pour le fun.\
Et il en profite, au passage, pour dégager le mot "widget", ce qui donne donc "KHTML", tout court.

Il intègre la gestion du DOM en quelques semaines, puis est rejoint par Harri Porten, qui avait déjà créé un interpréteur JavaScript.\
Finalement, le CSS complète le tout en moins d'un an.

Ils font ça à la cool hein.\
C'est juste des petits projets perso quoi.

Genre je peux vous citer un commit de l'époque pour vous donner une idée :

« Ahhh ... Correction de bugs ... »

Bref, grâce à tout ce travail, KDE 2.0 est livré en octobre 2000 avec un tout nouveau navigateur : Konqueror.\
Le tout deux ans avant la sortie de Mozilla 1.0.

Mais Linux, et donc KDE, ça reste un truc de nerds.\
Konqueror est donc utilisé par peu de monde, alors que Mozilla (et Firefox) commence son ascension.

Sauf que ... l'histoire ne s'arrête pas là.

Le vrai changement se fera en janvier 2003.\
Apple annonce alors avoir repris le projet KHTML pour créer son propre moteur : WebKit.\
Safari, qui utilise toujours WebKit en 2021, grignote petit à petit la place d'Internet Explorer.\
Aujourd'hui, on pourrait donc dire que KHTML est installé sur un ordi sur 6 à une vache prêt.

Sauf que ... l'histoire ne s'arrête **toujours** pas là !!!

En 2006 George Staikos fait une petite conférence sur KHTML avec Lars Knoll chez Yahoo.\
Il dira alors que de nouveaux navigateurs utilisant WebKit verront probablement le jour en 2007.

Ben tu m'étonnes.\
Google annonce rien d'officiel en 2007, mais a déjà commencé à développer Chrome ... en utilisant WebKit.\
La première version est finalement annoncée en 2008, via une BD.

<!-- markdownlint-disable no-emphasis-as-heading -->

_[(j'vous mettrai le lien sur mon blog)](https://www.google.com/googlebooks/chrome/)_

La suite, tout le monde la connait.\
En 2007, l'iphone fait son apparition.\
Il est suivi, un an plus tard, par l'HTC G1, tout premier smartphone Android.\
À présent, la majorité des navigations Web se font sur mobile, via Chrome ou Safari.\
Chrome a forké WebKit en 2013, pour créer Blink.\
Depuis, Chromium sert de base à l'essentiel des alternatives (Edge, Opera, Brave, Vivaldi, et j'en passe).\
Seules exceptions : Safari, grâce à l'iphone, Firefox, qui fait toujours de la résistance, et le cadavre en putréfaction d'Internet Explorer.

Aujourd'hui, prêt de 8 consultations de sites web sur 10 sont faites via Chrome et autres Chromium.\
Si on ajoute Safari, 19 personne sur 20 utilisent un descendant de Konqueror.

Comme quoi, ça vaut le coup de faire des "petits projets" Open Source, même si c'est juste pour le fun.

Bon après, si votre projet a du succès, y a quand même de grandes chances qu'un GAFAM vienne vous le chourer.\
Histoire de renforcer un monopole, nourrir quelques projets inhumains, ou juste faire du pognon dont vous ne verrez jamais la couleur.

Allez, bon courage pour vos projets, mais n'oubliez pas de jeter aussi un coup d'œil au mouvement Ethical Source pour défendre votre travail et vos droits.

</div>
