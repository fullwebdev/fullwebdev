<!-- markdownlint-disable-file code-block-style -->

# Joies et limites de l'Open Source

<div class="wc-text-content">

::: danger

Cet article n'est encore qu'un brouillon en cours de finalisation.

:::

::: tip

Infos complémentaires pour :

- la chronique « Les anecdotes historiques » présentée durant [Les briques du Web S01E05](https://rdv-speakers.fr/les-briques-du-web/episodes/S01E05/) le 11 mai 2021
- mon livre _[Applications Web Modernes](https://www.editions-eni.fr/livre/developpement-et-architecture-des-applications-web-modernes-retrouver-les-fondamentaux-9782409029523)_.

Cet article (comme la chronique) fait directement suite à l'épisode précédent « [Quand Linux et le logiciel libre ont révolutionné le Web](/blog/revolution-khtml) ».

:::

## Poser des limites à la propriété

Le mouvement du logiciel libre[^foss] est le digne héritier de la sous-culture hacker et d'une certaine vision de la recherche universitaire.
Il repose sur un idéal de collaboration et de partage sans entrave des connaissances.
Une sorte de vision utopique d'un "esprit de ruche" à l'échelle de l'humanité, en quelque sorte.

Notre société, forcément, ne correspond pas à cette utopie.
Il a donc fallut définir des règles.
Des licences libres, donc, qui permettent de garantir par le droit quatre libertés fondamentales :

- la liberté d'utiliser le logiciel
- la liberté de copier le logiciel
- la liberté d'étudier le logiciel
- la liberté de modifier le logiciel et de redistribuer les versions modifiées

L'objectif principal était, au départ, de lutter contre la culture du secret.
De garantir que tout le monde puisse "bidouiller" le logiciel en sa possession, pour l'améliorer, ou simplement pour apprendre.

Le logiciel libre permet à la fois de limiter et d'étendre le droit de propriété intellectuelle.
En utilisant une licence libre, les propriétaires d'un logiciel :

- limitent leur _usus_ (utilisation et contrôle de l'utilisation du bien) ;
- abandonnent leur _abusus_ (aliénation / destruction du bien) ;
- et, souvent, étendent le _fructus_ (récolte des fruits, c’est-à-dire des profits, du bien) à l'ensemble de la société.

Ce faisant, ils établissent une certaine forme légale de bien commun ^[On parle alors de _"biens communs informationnels"_.].

Le mouvement du logiciel libre a même, depuis, donné naissance à la _culture libre_ (Open Culture), étendant cette logique à d'autres domaines, avec la neutralité du net (Open Communication) ainsi que le libre accès aux publications scientifiques (Open Science) et aux documents et procédures gouvernementales (Open Government).

![Open culture as a coherent entity of open fields, de Renée Marianne Filius](/illustrations/images/third-party/Open-culture-as-a-coherent-entity-of-open-fields.png){height=400px}

Toutes ces applications nous montrent bien l'importance d'une telle "collectivisation".
Le libre accès à la connaissance constitue un moyen important d'émancipation.
C'est un droit important que nous nous devons de toujours défendre.

## Main mise sur les communautés

Cela dit, les logiciels ne sont pas des œuvres intellectuelles comme les autres.
Ils sont des outils, avant d'être des vecteurs de savoir.
La structure de notre société dépend énormément de la manière dont ces outils sont conçus et utilisés.

Les grandes entreprises ont tout d'abord été hésitantes face à la naissance de la société de l'information et de l'économie du savoir.
Elles ont donc commencé à produire et accumuler des connaissances, en exerçant tous les ressorts du droit de propriété.
Le logiciel libre et toutes les autres outils de ce mouvement ont permis et continuent de permettre de limiter cette tendance.

D'autres organisations, GAFAM en tête, ont cependant sût se transformer pour exploiter ce mouvement plutôt que la combattre.

Aujourd'hui, les nouvelles idées naissent à un rythme effréné.
Toutes ces idées, y compris les plus secrètes et privées, peuvent être récupérées et partagées en quelques instants.
Les connaissances devenant rapidement obsolètes, leur accumulation devient secondaire.
Maitriser les moyens de communication et d'innovation constitue un avantage économique bien plus grand.
Or, l'innovation et la communication s'effectue essentiellement hors marché, collectivement.

Le capitalisme cognitif[^capcogn] des années 90 et 2000 créait la connaissance (et donc les logiciels) en interne.
En empruntant le vocabulaire des sciences sociales, on peut dire que le capital économique permettait d'engendrer du capital culturel [^capital].
Le hors marché contribuait bien entendu à ce processus, mais restait marginal.

À présent, ce système se transforme en absorbant le hors marché, devenue une source primaire de profit.
Nous entrons dans un nouveau capitalisme "de l'influence" [^capinf].
La première économie n'est plus celle des savoirs, mais des "communautés" [^community].

Les grandes entreprises n'ont plus besoin de "posséder" un logiciel pour en récolter les fruits.
Il leur suffit de détenir l'usufruit[^usufruit] exclusif de ce qui va autour : _l'image de marque_.
Ce capital symbolique, nourrit par le capital économique, permet de s'emparer d'un capital social.

En maitrisant les moyens de communication et d'innovation, l'entreprise détient tous les pouvoirs.
La "communauté" (développeurs bénévoles, utilisateurs et "fans") est privée de son organisation collective spontanée.
Améliorer l'image du produit devient sa seule raison d'être.
Car aucune entreprise n'existe pour "faire le bien".
L'objectif est toujours, quoi qu'on en dise, de faire fructifier le capital des propriétaires de l'entreprise.
Ni celui de ses salariés, ni celui de la société dans son ensemble[^devrel].

La relation entreprise-communauté est toujours déséquilibrée.
L'entreprise possède la marque du produit ainsi que les équipes responsables de son développement.
La communauté fait donc partie de son capital immatériel.
Elle "appartient" à l'entreprise, qui peut en user et en abuser à sa guise.

L'Open Source devient, entre les mains des grands multinationales de la tech, un formidable outil d'appropriation.

## Travail gratuit et burn-out

L'industrie s'approprie tout d'abord le temps et le travail de la communauté.
Les contributeurs, étant privés de réel pouvoir de décision, soumettent leur capacité d'innovation et de production à l'entreprise.
Ils fournissent un travail réel et indispensable, mais n'en récoltent pas les fruits.
C'est les fameux principes du "tu seras payé en exposition" et du "c'est pour le bien de la communauté".

Ce discours est d'autant plus fort que la tech en général est extrêmement élitiste.
L'idée s'est répandue que chacun et chacune doit impérativement fournir un travail gratuit dans son temps libre pour espérer "faire carrière".

Disons-le une bonne fois pour toutes : c'est un mensonge !
Un mensonge toxique et dangereux.

Toxique, car tout le monde ne dispose pas du même "capital temps et sympathie" de départ.
Le recrutement basé sur les "contributions" est forcément discriminatoire.
Il renforce une inégalité de départ.
On notera d'ailleurs que les femmes et personnes racisées sont [encore moins présentes](https://www.wired.com/2017/06/diversity-open-source-even-worse-tech-overall/) dans l'Open Source que dans l'informatique en général.

Dangereux, car ce genre de mentalité pousse un grand nombre de personnes au burn-out.
Personne ne devrait se sentir obligé de continuer à travailler pour d'autres personnes en plus de son emploi.

Et c'est finalement un mensonge, car nous n'augmentons que très rarement et très faiblement notre capital symbolique en contribuant à des projets Open Source "clés" (donc gérés par de grandes entreprises) sur notre temps libre.
La majorité des "stars" de l'Open Source le deviennent soit en étant payées pour leur travail, soit en créant des projets personnels[^perso] qui, par chance, ont eu du succès.
Or, créer un projet personnel (libre ou non) revient à investir dans votre propre capital.

## Prédation et jeux de pouvoir

::: warning

:construction: Écriture en cours :construction:

:::

Et c'est précisément ici que [l'histoire de KDE](/blog/revolution-khtml), et de Linux en général, est instructive.

Les GAFAM, en particulier Google et Amazon, se sont fait une spécialité ces dix dernières années d'utiliser l'Open Source pour leur bénéfice personnel.

Prenons l'exemple de Chrome :

- Peter Krumins « [Code Reuse in Google Chrome Browser](https://catonmat.net/code-reuse-in-google-chrome-browser) ». 5 septembre 2008

<!--
- prédations des petits projets (Google, Linux = Android / Chrome OS, Konqueror = Chrome)
- Maitrise des moyens de communication.
- "passager clandestin" (Amazon)
- tragédie des communs
-->

## Que faire ?

::: warning

:construction: Écriture en cours :construction:

:::

<!--
Erreur : étendre le droit des personnes aux "personnes morales"

Réponse : garantir les 4 libertés au niveau individuel, mais les restreindre sur le plan économique

Licences "à discrimination"
-->

### Récolter les fruits de son travail

::: warning

:construction: Écriture en cours :construction:

:::

#### Fair Source License

- [Fair Source License (site officiel)](https://fair.io)
- Finley K. « [One Startup's Heretical Plan to Turn Open Source Code Into Cash](https://www.wired.com/2016/03/former-open-sourcers-ask-companies-pay-fair-share/) ». _Wired_. 29 mars 2016
- « [Fair Source License](https://codenvy.com/legal/fair-source/) ». _RedHat Codenvy_

#### Commons Clause / CC NC

- [The Commons Clause (site officiel)](https://commonsclause.com/)
- Vaughan-Nichols S. « [Open-source licensing war: Commons Clause](https://www.zdnet.com/article/open-source-licensing-war-commons-clause/) ». _ZDNet_. 28 août 2018
- Maurel L. « [La "Commons Clause" de Redis : une mauvaise réponse à de vraies questions ?](https://scinfolex.com/2018/08/26/la-commons-clause-de-redis-une-mauvaise-reponse-a-de-vraies-questions/) ». _S.I.Lex_. 26 août 2018

#### Server Side Public License (MongoDB & ElasticSearch)

- « [FAQ sur le changement de licence 2021](https://www.elastic.co/fr/pricing/faq/licensing) ». _Elastic.co_
- « [Server Side Public License FAQ](https://www.mongodb.com/licensing/server-side-public-license/faq) ». _mongoDB.com_
- [Page Wikipedia](https://fr.wikipedia.org/wiki/Server_Side_Public_License)

<br>

- Vaughan-Nichols S. « [Open source : AWS riposte face à Elastic et crée un fork d'Elasticsearch](https://www.zdnet.fr/actualites/open-source-aws-riposte-face-a-elastic-et-cree-un-fork-d-elasticsearch-39916773.htm) ». _ZDNet_. 25 janvier 2021
- Vaughan-Nichols S. « [MongoDB : la nouvelle licence SSPL fait grincer des dents dans l’open source](https://www.zdnet.fr/actualites/mongodb-la-nouvelle-licence-sspl-fait-grincer-des-dents-dans-l-open-source-39879413.htm) ». _ZDNet_. 17 janvier 2019
- Cheminat J. « [Le changement de licence chez Elastic fait débat](https://www.lemondeinformatique.fr/actualites/lire-le-changement-de-licence-chez-elastic-fait-debat-81685.html) ». _Le Monde Informatique_. 19 janvier 2021
- VM (Vicky) Brasseur. « [Elasticsearch and Kibana are now business risks](https://anonymoushash.vmbrasseur.com/2021/01/14/elasticsearch-and-kibana-are-now-business-risks) ». _{anonymous => 'hash'}_;. 14 janvier 2021
- Banon S. « [Amazon : INACCEPTABLE - pourquoi nous avons dû changer de licence pour Elastic](https://www.elastic.co/fr/blog/why-license-change-AWS) ». _Elastic Blog_. 19 janvier 2021

### Garantir un usage "éthique"

- Gasperson T. « [Open source project adds “no military use” clause to the GPL](https://www.linux.com/news/open-source-project-adds-no-military-use-clause-gpl/) ». _linux.com_. 14 août en 2016
- (PR) « [Add text to MIT License banning ICE collaborators](https://github.com/lerna/lerna/pull/1616) ». _lerna_. 29 août 2018

#### Ethical Source

- [EthicalSource.dev](https://ethicalsource.dev)

<br>

- Exemple : [CoopCycle](https://coopcycle.org/fr/)
  - « [CoopCycle : une licence pour valoriser le travail des communs](https://blogs.mediapart.fr/coopcycle/blog/261018/coopcycle-une-licence-pour-valoriser-le-travail-des-communs) ». \_Le Club Mediapart. 26 octobre 2018
  - [CoopCycle : La licence du logiciel](https://wiki.coopcycle.org/fr:license:about)

</div>

[^foss]: Le _Logiciel Libre_ est considéré comme un mouvement "philosophique et militant", tandis que l'_Open Source_ se veut "pragmatique et méthodologique". On retrouve toujours aujourd'hui cette distinction dans les milieux les plus militants (style FSF). Cela dit, je pense que le débat doit aujourd'hui se faire à un autre niveau, que je détaille plus loin.
[^capcogn]: La connaissance est devenue un bien marchant bien avant l'informatisation de la société. Fritz Machlup a pu identifier l'existence croissante d'une nouvelle économie du savoir dès 1962. Mais l'arrivée d'Internet et du Web à radicalement changé la société. Jusqu'alors, la production et l'échange de biens matériels prédominait. C'était le capitalisme industriel. À partir des années 90, les "biens immatériels" ont pris le dessus. Certains utilisent alors le terme de "capitalisme cognitif", voir à d'économie "postindustrielle", pour souligner ce changement.
[^capinf]: Ça par contre c'est de moi :wink:.
[^capital]:
    La sociologie (Pierre Bourdieu en particulier) distingue quatre formes de Capital constituant la "richesse" des individus :

    - le capital économique : revenus et patrimoines, biens matériels, moyens de production, ressources financières
    - le capital culturel : savoirs, diplômes, connaissances, biens culturels, modes d'apprentissage
    - le capital social : capacité à mobiliser des ressources à travers des réseaux sociaux
    - le capital symbolique : perceptions par autruit des trois autres formes du capital économique, culturel et social

    Je parle donc bien ici de ressources non économiques

[^community]:
    "Communauté", entre guillemets, car j'évoque bien ici l'expression vide de sens [utilisée à profusion](https://start.lesechos.fr/travailler-mieux/vie-entreprise/creer-sa-communaute-en-entreprise-le-nouveau-dada-des-salaries-1234049) par la start-up nation.

    _« Une communauté, c’est un groupe de personnes intéressées par un sujet commun et qui partagent une vision et une culture qui leur est propre, mais surtout qui réalisent des actions pour atteindre les objectifs qu’elles se sont fixés. »_ - ([Les communautés selon MakeSense](https://france.makesense.org/media/4-piliers-indispensables-creer-developper-communaute/))

    Pour ce qui est des entreprises, il faut lire entre les lignes et comprendre : "dont le travail est exploité pour permettre à notre client d'atteindre ses objectifs".

[^devrel]:
    Capitalisme mis à part, je ne pense pas que cette relation soit toujours et nécessairement néfaste.

    L'entreprise améliore son produit et son organisation en écoutant la communauté.
    Communauté qui, en retour, bénéficie d'un meilleur produit, voir de contreparties supplémentaires (cadeaux, offres promotionnelles, évènements, formations, etc.).
    Cette relation peut donc, dés le départ, être "gagnant-gagnant".

    Les salariés en charge de la "gestion" de la communauté peuvent (je dirais même, doivent) utiliser leur position pour "maximiser le gain" d'un maximum d'individus (contributeurs ou non).
    Transmettre un maximum de compétences, aider un maximum d'individus, et faire grandir les biens communs informationnels.

    C'est précisément ce qui m'a donné envie de devenir Developer Advocate au départ.
    Le Community Management (à ne pas confondre avec le Social Media Management) et la Developer Relation ont une place cruciale dans notre société.
    Elles devraient à mon goût être plus et mieux développées.

    Toute entreprise devrait à minima entretenir un rapport bienveillant et gagnant-gagnant avec ses utilisateurs.
    Ce qui implique de leur offrir un réel pouvoir de décision, tout en évitant d'exploiter leur travail.
    Malheureusement, je constate que cela se fait de plus en plus rare.

[^usufruit]: L'_usufruit_ est l'association de l'_usus_ et du _fructus_.
[^perso]: Beaucoup de projets "personnels" ayant eu du succès ont d'ailleurs été créés via une société, qu'elle fut créée ou non pour l'occasion. Même sans cela, consacrer son temps à créer un produit qui porte votre nom revient à investir votre temps dans une "entreprise" dont vous détenez le "capital immatériel".

## Ressources

- Finley K. « [The WIRED Guide to Open Source Software](https://www.wired.com/story/wired-guide-open-source-software/) ». _Wired_. 24 avril 2019
- Finley K. « [The Woman Bringing Civility to Open Source Projects](https://www.wired.com/story/woman-bringing-civility-to-open-source-projects/) ». _Wired_. 26 septembre 2018

### Logiciels libres et Open Source

- Haff G. « [The mysterious history of the MIT License](https://opensource.com/article/19/4/history-mit-license) ». _opensource.com_. 26 avril 2019
- « [What is "free software" and is it the same as "open source"?](https://opensource.org/faq#free-software) ». _Frequently Answered Questions_, Open Source Initiative

### Communs et logiciel libre

- Broca S. & Coriat B. « [Le logiciel libre et les communs. Deux formes de résistance et d’alternative à l’exclusivisme propriétaire](https://www.cairn.info/revue-internationale-de-droit-economique-2015-3-page-265.htm) », _Revue internationale de droit économique_, 2015/3 (t. XXIX), p. 265-284.
- Couture S., « [Le contrôle des communs numériques à des fins commerciales : le cas des logiciels libres](http://journals.openedition.org/ethiquepublique/2275) », _Éthique publique_, vol. 17, n° 2. 6 mai 2016
- Perret F. & Nieddu M. « [Une régulation de l’hybridation entre marchand et non-marchand : les cas des formes de production de logiciels libres.](https://id.erudit.org/iderudit/1021532ar) », _Revue internationale de l'économie sociale_, n°304, mai 2007

<br>

- Dardot P. & Laval C. [_Commun_](https://www.editionsladecouverte.fr/commun-9782707186737). La Découverte. 2014
- Hardin G. « [The Tragedy of the Commons](https://science.sciencemag.org/content/162/3859/1243.full) ». (1968). _Science_. 13 décembre 1968
  - _Pour une critique détaillée de cet article, voir_ Commun _(Dardot & Laval) à l'entée_ Hardin, Garett _de l'index des principaux noms (p586)._

### Économie et société

- (vidéo) « [Ford, Cars, and a New Revolution](https://youtu.be/UPvwpYeOJnI) » Crash Course History of Science #28. 13 novembre 2018
- Meier O. « [Bourdieu et les formes de Capital](https://www.rse-magazine.com/Pierre-Bourdieu-et-les-formes-de-Capital_a3583.html) ». RSE Magazine. 16 mars 2020
- Bourdieu P. « [L’essence du néolibéralisme](https://www.monde-diplomatique.fr/1998/03/BOURDIEU/3609) ». \_Le Monde Diplomatique. Mars 1998

### Propriétarisation des logiciels

- Gates W. « [An open letter to hobbyists](https://www.digibarn.com/collections/newsletters/homebrew/V2_01/gatesletter.html) ». [_Homebrew Computer Club Newsletter_ Volume 2, Issue 1](https://www.digibarn.com/collections/newsletters/homebrew/V2_01/index.html). 3 février 1976
  - (réponse) Hayes M. « [](https://www.digibarn.com/collections/newsletters/homebrew/V2_02/homebrew_V2_02_p2.jpg) ». [_Homebrew Computer Club Newsletter_ Volume 2, Issue 2](https://www.digibarn.com/collections/newsletters/homebrew/V2_02/index.html). 20 février 1976

<br>

- Nussbaum J.L. « [Apple Computer, Inc. v. Franklin ComputerCorporation Puts the Byte Back into CopyrightProtection for Computer Programs](https://digitalcommons.law.ggu.edu/cgi/viewcontent.cgi) ». _Golden Gate University Law Review_ Volume 14, Issue 2. Janvier 1984
- Hassett R. « [Impact of Apple vs. Franklin Decision](http://internetlegal.com/impact-of-apple-vs-franklin-decision/) ». _InternetLegal.Com_. 1983

### Linus Torvalds

- Gavin C. « [Torvalds: I want to be nice, and curse less, but it's just not in me](https://www.theregister.com/2012/11/07/passion_of_torvalds/) ». _The Register_. 7 novembre 2012
- Torvalds. L. « [Linux 4.19-rc4 released, an apology, and a maintainership note](https://lwn.net/Articles/764901/) ». _lore.kernel.org_. 16 septembre 2018.
- Cohen N. « [After Years of Abusive E-mails, the Creator of Linux Steps Aside](https://www.newyorker.com/science/elements/after-years-of-abusive-e-mails-the-creator-of-linux-steps-aside). _The New Yorker_. 18 septembre 2018
- Gold J. « [Linux community acts after years of complaints like Sarah Sharp's](https://www.networkworld.com/article/2988850/linux-kernel-dev-sarah-sharp-quits-citing-brutal-communications-style.html) ». _Network World_. 21 septembre 2018
- Corbet J. « [Code, conflict, and conduct](https://lwn.net/Articles/765108/) ». _LWN.net_. 18 septembre 2018

::: warning

### Note relative aux écrits de Stallman

Au fil des années, Richard M. Stallman a produit de nombreux articles et conférences.
Beaucoup considèrent encore ces ressources comme des références pour le mouvement du logiciel libre (exemple : « [En quoi l'open source perd de vue l'éthique du logiciel libre](https://www.gnu.org/philosophy/open-source-misses-the-point.html) »).

Cela dit, RMS a toujours eu une personnalité pour le moins problématique.
Toute personne l'ayant rencontré, même rapidement, peut en attester.
Récemment, ses propos inadmissibles relatifs à l'affaire Epstein ont permis de dévoiler son comportement au grand jour.

Les articles suivants (en anglais) sont incontournables pour comprendre la situation :

- Selam G. « [Remove Richard Stallman - And everyone else horrible in tech.](https://selamjie.medium.com/remove-richard-stallman-fec6ec210794) ». _Medium_. 12 septembre 2019
- Selam G. « [Remove Richard Stallman: Appendix A - The stories of thirty years of MIT women alumni.](https://selamjie.medium.com/remove-richard-stallman-appendix-a-a7e41e784f88) ». _Medium_. 16 septembre 2019
- Levy S. « [Richard Stallman and the Fall of the Clueless Nerd](https://www.wired.com/story/richard-stallman-and-the-fall-of-the-clueless-nerd/) ». _Wired_. 18 septembre 2019

La "philosophie" de RMS est forcément le reflet de sa personnalité.
Ses écrits et conférence en rapport avec le logiciel libre ne font pas exception.
Ils doivent donc être lus avec recul et esprit critique.
Heureusement, RMS est très loin d'être le "dernier chevalier du logiciel libre", comme il aime à le croire.
Mieux vaut donc favoriser d'autres sources d'inspirations, et vous référer aux écrits de RMS pour leur seul intérêt historique.

:::

<hr>

## Script de la chronique

<div class="wc-text-content speak-time">

Alors, dans le dernier épisode, j'avais conclu en parlant vite fait des limites de l'Open Source.\
Bon ben du coup, on va reprendre là dessus.

Alors, logiciel libre, bien ou pas bien ?

Bon, t'énerves pas, j't'explique.

Déjà, faut savoir qu'au départ, personne ne cherchait vraiment à protéger les œuvres intellectuelles.

Durant la première partie du 20ᵉ siècle, tout tournait autour de l'industrie.\
C'est l'ère du taylorisme et du fordisme.\
Les ouvriers fabriquent des objets concrets, matériels, à la chaine, en grosse quantité.\

Pour simplifier, les gens considéraient pas vraiment qu'on pouvait "vendre" une "idée".\
On vendait un livre ou une bobine de film, mais pas un texte ou une vidéo.

Faut attendre l'apparition des ordis, dans les années 60 - 70, pour vraiment distinguer l'objet de l'œuvre.\
On peut alors donner une valeur marchande à quelque chose d'immatériel.\
C'est les débuts de ce qu'on appelle l'économie du savoir, qui grandi tranquilou, à son rythme, en même temps qu'Internet (donc de 69 aux années 90).

Finalement, créer ou s'approprier des connaissances devient plus rentable que de produire des objets.

Même chose pour l'informatique.

Au début, l'important, c'est le matos.\
On vent des gros ordis très très chers.\
Très très peu de monde est concerné.\
Du coup, on s'en fout du logiciel.\
Personne ne cherche vraiment à les protéger.\
On partage tout, dans le domaine public.

Puis arrive le microprocesseur, en 69.\
Les ordinateurs deviennent plus simples, donc moins cher, donc moins importants, alors que les logiciels sont de plus en plus complexes.

Il faut investir beaucoup d'argent pour créer, par exemple, un système d'exploitation ou un compilateur.\
Y a donc un marché qui se crée autour du logiciel.

Les années 70 voient apparaitre des entreprises spécialisées, comme Microsoft, SAP et Oracle.

En parallèle, de plus en plus de passionnés bricolent du logiciel pour le plaisir.\
Ils s'amusent avec des petits moyens, entre amis, en club, etc.\
Et naturellement, ils ont pris l'habitude de tout partager.

En anglais, on les appelle des "hobbyists", ou encore des "hackers".\
C'est-à-dire, littéralement, des amateurs, des bidouilleurs.

Bill Gates, qui venait tout juste de créer Microsoft, aime pas trop ça.\
Il écrit alors une "lettre aux hobbyists", qui est un véritable concentré de la culture du secret et de la propriété.\
Un sermon à l'encontre des passionnés, qui, d'après Gates, "volent" et "piratent" l'interpréteur Altair BASIC.\
Inutile de dire que la communauté hackers n'apprécie que très moyennement d'être accusé de la sorte.

Mais la tendance est lancée.\
Un modèle dépassé, issue de l'ère industrielle, s'impose petit à petit.

En 83, Apple porte plainte contre Franklin Computer, qui avait créé un clone compatible Apple II en copiant sa ROM et une portion du système d'exploitation.\
Il est alors décidé que des copyrights peuvent être établis sur les codes ET le code compilé d'un logiciel.

Dès lors, la plupart des logiciels commencent à être distribués sous forme compilée, sans le code source.

Deux tendances qui vont tenter de contrer ça.

La première embrasse l'illégalité, en passant du "hacking" au "cracking".\
On s'échange des logiciels propriétaires "piratés" et de "mods" via BBS, un pseudo ancêtre d'Internet.

L'autre tendance est dans la continuité logique de ce qu'on faisait avant.\
On développe des logiciels, et on les partage librement.\
Généralement, une simple note est associée au code source pour donner à tout le monde le droit de le copier, modifier et distribuer.\
Chaque logiciel définissait, d'une certaine manière, sa propre licence très simple et permissive.

Durant la seconde moitié des années 80, le MIT écrit finalement une licence toute aussi simple et permissive.\
Elle est suffisamment générique et cohérente d'un point de vue légal pour que tout le monde puisse l'utiliser pour son projet.\
Vous la connaissez, vu que c'est maintenant la licence la plus populaire sur Github.

Sauf que pour certains, c'était pas encore assez.\
Garantir la liberté des utilisateurs de logiciel, c'était une philosophie de "hacker".\
Fallait donc partager cette philosophie, et s'assurer qu'elle s'étende autant que possible.

Au début des années 80, Richard Stallman décide de créer un système d'exploitation libre, GNU.\
Quelques années plus tard, ce projet sera mis sous licence GPL, qui introduit le concept de "copyleft".\
C’est-à-dire que c'est une sorte de licence "virale".\
Si tu veux utiliser le code d'un projet sous licence GPL, ton projet doit lui aussi être sous licence libre.

GNU est ensuite associé au Kernel Linux, créé par Linux Torvalds, pour donner GNU/Linux.\
Bon, tout le monde l'appel Linux hein, mais on s'en fout, c'est pas important (à part pour l'égo de Richard).

RMS a transformé une habitude informelle en véritable mouvement, avec la Free Software Foundation, etc.\
Il a, en quelque sorte, servi de porte-étendard à un prolongement de la culture hacker.\
Un mouvement plus large et plus politique, qui s'étendra même à d'autres sujet que le logiciel (creatives commons etc.) et dépassera largement Stallman.

Comme d'habitude, l'informatique a donc démontré que oui, il est possible de changer le monde.\
Linux a très rapidement remplacé les systèmes Unix propriétaire sur la quasi-totalité des serveurs.\
Et puis on a eux Open Office, MySQL, Firefox, WebKit, Chrome, etc, etc, etc.

Le logiciel libre a fait reculer le dogme du secret et du tout puissant droit de propriété.\
Ce qui est une très bonne chose, si vous voulez mon avis.\
Perso, j'apprécie aussi beaucoup que ce mouvement ai fait perdurer une certaine culture du hacking.

Mais, mais, mais...
on est quand même passé à côté de quelques """_PETITES_""" choses.

Bon déjà, y la question de _QUI_ fait le logiciel libre.\
Et la, fatalement, faut qu'on reparle de Linus & Richard.

Les deux sont largement connus pour leur toxicité.\
Torvalds a su évoluer et se remettre en question.\
Il a fait des excuses correctes, a demandé de l'aide, et un vrai bon Code of conduct a été mis en place pour Linux.

Pour Stallman, c'est une autre affaire.\
L'histoire est récente et complexe, donc je n'aurai pas le temps de tout dire ici.\
Pour résumer, disons juste que papi a imposé sa culture du viol une fois de trop.\
La parole s'est libéré, et tout le monde a enfin pû constater tout le tord que le personnage faisait aux gens autour de lui.\
Il a très mal réagit à l'affaire (comme il le fait pour ainsi dire toujours), mais a quand même réintégré la FSF peu de temps après en avoir été viré.

Forcément, ce genre d'histoire amènent à se poser des questions par rapport au mouvement.\
Surtout quand on constate que la communauté de l'Open Source est encore moins diversifiée que l'informatique en général.

Stallman a particulièrement influencé le mouvement, lui donnant une petite touche de toxicité et de dogmatisme qu'on retrouve un peu partout.

Le terme "Open Source" a été créé pour minimiser l'importance de la "philosophie logiciel libre".\
C'est surtout cette vision lisse et apolitique qui s'est imposée.\
Sauf qu'en lissant le discours pour draguer les investisseurs, ce mouvement a juste supprimé toute volonté de changement social.\
Il ne reste qu'une seule et unique idée, en gros : "l'ouverture c'est bien parce que c'est plus efficace pour les marchés et le progrès".\
Et cette idée s'est à son tour érigée au statut de loi divine.

Le truc, c'est que les choses ont énormément changées depuis les années 90.\
La technique, l'économie, Toute la société a changé.

On a voulu construire des biens communs.\
Soustraire le logiciel à la cupidité du marché.\
Faire en sorte qu'on ait notre truc à nous, qui évolue pour le bien de toute la société en permettant à tout le monde de participer.

Aujourd'hui, on est très loin du compte.

Mais dès que quelqu'un essaye de faire bouger les choses, vous aurez toujours une armée d'ayatollahs de l'Open Source pour lui tomber dessus.

En 2006, le client Gnutella GPU (Global Unit Processus) ajoute une clause à sa licence GPL afin d'interdire que le programme soit "modifiés ou exécuté pour nuire à un être humain".\
L'objectif est clairement d'interdire d'utiliser GPU dans un cadre militaire.

Dans l'ensemble, les réactions sont mitigées, mais le débat a été plutôt serein.\
Faut dire qu'à l'époque, y avait ni Twitter, ni Github.\
On trollait souvent entre nous, mais bon, ça restait généralement bon enfant.

Aujourd'hui, les trolls tires à balles réelles.

2018.\
Trump est au pouvoir.\
Son gouvernement met fin au droit d'asile, parc les candidats à l'immigration dans des conditions encore plus inhumaines qu'avant, et des milliers d'enfants sont séparés de leur famille.\
L'opinion publique se mobilise alors massivement contre l'ICE, le département de la sécurité intérieur en charge du controle des frontières et de l'immigration.

Certains développeurs, dont James Kyle, le créateur de Lerna, tentent alors d'ajouter une clause "anti-ICE" à la licence de plusieurs projets Open Source, afin de sensibiliser la communauté à cette cause.\
Et . ils . se . font . démonter !\
À tel point que la modification de la licence est annulée dès le lendemain.

Heureusement (enfin, de mon point de vue), l'idée n'est pas morte pour autant.\
Le mouvement va s'étendre à Github, où plusieurs employés protesteront contre un partenariat avec l'ICE, avant de démissionner.\
Dans le même temps, de nouvelles licences "éthiques" sont créées, comme l'Hippocratic License (en référence au serment d'Hippocrate).\
C'est la naissance de l'Ethical Source, qui dépasse le dogme de l'Open Source en ajoutant des closes éthiques restrictives.\
La question n'est plus seulement de savoir comment on fait le logiciel.\
On doit se demander comment ils sont utilisés, et les dégâts qu'ils peuvent causer à la société.

D'autres événements récents nous amènent enfin à poser la question de la place de l'Open Source dans l'économie.\
Est-il juste que des "passagers clandestins", comme Amazon, fassent leur beurre sur le travail d'autre entreprises sans contribuer en retour ?\
MongoDB et ElastricSearch ont au moins permis de remettre la question sur la table, en utilisant la Server Side Public License.

Finalement, c'est tout l'Open Source qui est remis en question.\
Les GAFAM ont lancé un nouveau mouvement d'enclosure du "bien commun" de l'Open Source.\
En gérant tous les aspects de la communauté, les entreprises deviennent concrètement propriétaires du projet.\
Est-il utile de faire de l'Open Source quand un logiciel est essentiellement utilisé pour imposer un monopole ?\
De nombreux développeurs se tuent à la tâche, gratuitement, pour servir les intérêt d'une corporation.\
On est très loin de l'utopie de partage et collaboration imaginée il y a 30 ans.

On a la chance, aujourd'hui, de voir l'informatique sortir de sa bulle.\
On ne peut plus dire que la "politique" n'a pas sa place dans l'informatique.\
Freiner des 4 fers toute initiative reviens à protéger le statu quo.\
Débattons donc sereinement du futur, en mettant de côté les dogmes imposés par des papis grognons réac et toxiques.

</div>
