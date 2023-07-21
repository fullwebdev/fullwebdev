const urlLivreENI =
  "https://www.editions-eni.fr/livre/developpement-et-architecture-des-applications-web-modernes-retrouver-les-fondamentaux-9782409029523";

/** @type {import('../../views/cv-nma').CVNMAWording} */
const wording = {
  title: "Noël Macé",
  subtitle: "Développeur/Architecte Web",
  note: "14 ans d'expérience",
  presentation: {
    title: "Présentation",
    abstract: [
      `D'un naturel passionné et investi, je recherche perpétuellement de nouveaux défis techniques, intellectuels et humains.`,
      `Grâce à cela, j'ai au cours des années accumulé une expérience complète et variée dans de nombreux domaines, notamment: le développement et l'architecture applicative, l'administration système et réseaux, la pédagogie, le management et la communication.`,
      `Depuis 2014, mon focus technique se porte essentiellement sur la plateforme Web, ses outils et ses standards.`,
    ],
    langs: {
      title: "Langues",
      content: [
        "Anglais : avancé (C1/C2)",
        "Français : natif & littéraire",
        "Espagnol: notions (A2)",
      ],
    },
    networks: {
      title: "Réseaux",
      content: [
        // {
        //   icon: "/images/icons/mail.svg",
        //   alt: "Email",
        //   text: "contact@noelmace.com",
        //   url: "mailto:contact@noelmace.com",
        // },
        {
          icon: "/images/icons/linkedin.svg",
          alt: "LinkedIn",
          text: "/in/noelmace",
          url: "https://www.linkedin.com/in/noelmace/",
        },
        {
          icon: "/images/icons/github.svg",
          alt: "GitHub",
          text: "noelmace",
          url: "https://github.com/noelmace",
        },
        {
          icon: "/images/icons/web.svg",
          alt: "website",
          text: "fullweb.dev",
          url: "https://fullweb.dev",
        },
        {
          icon: "/images/icons/webpage.svg",
          alt: "page web personnelle",
          text: "noelmace.com",
          url: "https://noelmace.com",
        },
        {
          icon: "/images/icons/youtube.svg",
          alt: "Youtube",
          text: "tube.noelmace.com",
          url: "https://tube.noelmace.com",
        },
      ],
    },
  },
  intro: {
    callToAction: {
      text: `Programmez un entretien sur`,
      url: "calendly.com/noelmace",
      img: {
        src: "/images/icons/calendly.svg",
        alt: "Calendly",
      },
    },
    items: [
      {
        title: "Architecture & Développement Web",
        icon: {
          src: "/images/icons/tools.svg",
          caption: "expertise",
        },
        content: [
          /* HTML */ `Focus sur les
            <strong>standards et principes transverses</strong> (Web Components,
            Web APIs, PWAs, PRPL, a11y, performances, etc.)`,
          /* HTML */ `Maitrise de nombreux frameworks et bibliothèques (<strong
              >Lit, Open WC, Angular, React, Vue, Redux, Gatsby, 11ty,
              etc.</strong
            >)`,
          /* HTML */ `Maitrise avancée de
            <strong>Angular, Angular CLI & Nrwl/Nx</strong> (contributeur de
            2016 à 2018, puis suivi&nbsp;régulier)`,
          /* HTML */ `<strong>Livre</strong> complet sur les principes
            fondamentaux de
            <em
              ><a
                href="https://www.editions-eni.fr/livre/developpement-et-architecture-des-applications-web-modernes-retrouver-les-fondamentaux-9782409029523"
                target="_blank"
                rel="noreferrer noopener"
                >Développement & Architecture des Applications Web Modernes</a
              ></em
            >
            publié aux éditions ENI en 2021`,
          /* HTML */ `Aptitudes fullstack et DevOps (REST, ORM, CI/CD, SGBD,
          Docker, PaaS, Node.js, Python, Java, etc.)`,
        ],
      },
      {
        title: "Pédagogie",
        icon: {
          src: "/images/icons/rails.svg",
          caption: "ligne directrice",
        },
        content: [
          /* HTML */ `<strong>Mentoring</strong> et
            <strong>transmission de compétences</strong> sont les piliers et
            fils conducteurs de l'ensemble de ma&nbsp;carrière`,
          /* HTML */ `Large expérience, en tant que formateur autonome et dans
          la direction et l'accompagnement d'importantes équipes pédagogique ou
          de R&D`,
        ],
      },
      {
        title: "Partage & Découverte",
        icon: {
          src: "/images/icons/motivation.svg",
          caption: "motivations",
        },
        content: [
          /* HTML */ `Forte appétence pour l'<strong>Open Source</strong> et les
            oeuvres&nbsp;libres`,
          /* HTML */ `Nombreux <strong>workshops et conférences</strong> créés
            et&nbsp;présentés`,
        ],
      },
    ],
  },
  experience: {
    title: "Expérience",
    dateIntervals: {
      noEnd: "Depuis",
      start: "De",
      end: "à",
    },
    items: [
      [
        {
          company: { name: "Freelance", details: "fullweb.dev" },
          startDate: "janv. 2020",
          jobTitle: "Consultant, Formateur",
          icon: "/images/web-illustrations/companies-logos/fwd.svg",
          details: "Développement & architecture Web",
        },
        {
          company: { name: "blindnet", details: "start-up" },
          startDate: "févr. 2022",
          endDate: "oct. 2022",
          jobTitle: "Head of DevRel / CTO",
          details: [
            "Promotion de la privacy",
            "Encadrement du développement Web, Java et Scala",
            "accompagnement client et rédaction de documentations",
          ],
          icon: "/images/web-illustrations/companies-logos/blindnet.svg",
        },
        {
          company: {
            name: "Editions ENI",
            details: "maison d'édition de livres d'informatique",
          },
          jobTitle: "Auteur",
          startDate: "mars 2020",
          endDate: "mars 2021",
          icon: "/images/web-illustrations/companies-logos/eni.svg",
          details: [
            /* HTML */ `Rédaction du livre
              <a href=${urlLivreENI} target="_blank" rel="noferrer noopener"
                ><strong
                  >Développement et architecture des applications Web
                  Modernes</strong
                ></a
              >
              (608 pages)`,
            "16500 lignes de code d'exemple, testées et executables",
            "Développement de bibliothèques, outils, scripts et projets permettant de valider et appuyer la rédaction",
          ],
        },
        {
          company: {
            name: "Bonitasoft",
            details: "éditeur logiciel Open Source (BPM)",
          },
          jobTitle: "Developer Advocate Web",
          startDate: "avr. 2019",
          endDate: "oct. 2019",
          icon: "/images/web-illustrations/companies-logos/bonitasoft.png",
          details: [
            "Mission : améliorer la satisfaction utilisateur et l'image de marque des produits Bonitasoft impliquant des technologies Web",
            "<strong>Modernisation et performance</strong> : contribution et accompagnement à une transition de <em>AngularJS</em> aux <em>Web Components</em>",
            "Mise en place d'une stratégie et d'outils facilitant la production de contenus, ainsi que la gestion de 213 évènements (via Gatsby, Netlify CMS, GitHub)",
          ],
        },
        {
          company: { name: "SFEIR", details: "ESN, 500 employés" },
          jobTitle: "Developer Advocate / Architecte Web",
          startDate: "juin 2018",
          endDate: "avr. 2019",
          icon: "/images/web-illustrations/companies-logos/sfeir.jpg",
          details: [
            "<strong>Double mission</strong> : expertise technique (3j/5) et advocacy",
            "Stabilisation et amélioration de la maintenabilité d'une application <strong>Angular, NgRx et Preact</strong> en tant que tech lead pour la Société Générale",
            "Encadrement et montée en compétence d'une équipe de <strong>30 développeurs Angular</strong> (Paris & Hong Kong) pour BNP Paribas",
            "Audit et amélioration des performances de Progressive Web Apps (Vanilla, React, Vue, Angular), migrations AngularJS-Angular, réponses à appels d'offre, etc.",
            "8 conférences et 5 formations délivrées (cf. réalisations)",
          ],
        },
      ],
      [
        {
          company: { name: "Sedona", details: "ESN, 100 employés" },
          jobTitle: "Directeur Technique JS / Architecte Web",
          startDate: "déc. 2015",
          endDate: "mai 2018",
          icon: "/images/web-illustrations/companies-logos/sedona.png",
          details: [
            "<strong>Direction technique de 8 projets</strong> front-end JavaScript (AngularJS, JQuery, PHP et Node.js) menés par 3 équipe de 12 développeurs",
            "Définition de l'architecture front-end web de référence pour Sedona ainsi que le groupe <em>Harmonie Mutuelle</em>",
            "<strong>Réponse à appels d'offre</strong> et <strong>modernisation</strong> de l'usage des technologies Web sur l'ensemble du groupe (marques Sedona, West, RedShift et Inadeo)",
            "<em>(À partir de déc. 2016)</em> suivi, développement et mise en place des codes et outils transverses sur 3 projets, menés par 6 équipes (30 développeurs), en tant qu'<strong>architecte référant Angular</strong> pour le compte de <em>Saint Gobain</em>",
          ],
        },
        {
          company: { name: "Française des Jeux" },
          jobTitle: "Lead Developer AngularJS",
          startDate: "juin 2015",
          endDate: "nov. 2015",
          icon: "/images/web-illustrations/companies-logos/fdj.png",
          details: `Développement des "widgets" de gestion de compte et de l'Euromillions en <strong>AngularJS 1.4 et ES2015</strong> pour le portail fdj.fr, au sein d'une équipe de 8 développeurs.`,
          shortLine: true,
        },
        {
          company: { name: "Freelance", details: "NMC Consulting" },
          jobTitle: "Formateur, Consultant",
          startDate: "mai 2011",
          endDate: "nov. 2015",
          icon: "/images/web-illustrations/companies-logos/nmc.png",
          details: [
            "<strong>38 formations</strong> délivrées en ligne et présentiel",
            "<strong>3 applications</strong> Java (Spring, Struts, Hibernate) & Android développées",
          ],
          shortLine: true,
        },
        {
          company: { name: "Supinfo", details: "International University" },
          jobTitle: "Directeur de l'enseignement Unix",
          startDate: "juin 2010",
          endDate: "avr. 2011",
          icon: "/images/web-illustrations/companies-logos/supinfo.jpg",
          details: [
            "<strong>70 formateurs recrutés</strong> et formés pour l'enseignement de <strong>3 matières (Linux, Apple & Sécurité)</strong> sur les 30 sites du groupe à l'international",
            "<strong>7 unités pédagogiques</strong> définies, rédigées et encadrées",
          ],
          shortLine: true,
        },
        {
          company: { name: "Supinfo" },
          jobTitle: "Enseignant formateur",
          startDate: "oct. 2009",
          endDate: "juin 2010",
          icon: "/images/web-illustrations/companies-logos/supinfo.jpg",
          details:
            "12 unités pégagogiques enseignées sur 18 sites dans<br />3 pays (+ DOM)",
          shortLine: true,
        },
      ],
    ],
  },
  education: {
    title: "Formation",
    items: [
      {
        school: "Supinfo International University",
        diploma: "Master of IT Engineering",
        year: "2010",
      },
      {
        school: "Université Toulouse Jean Jaurès",
        diploma: "DEUG Mathématiques Appliqués aux Sciences Sociales",
        year: "2007",
      },
    ],
  },
  accomplishments: {
    title: "Réalisations",
    groups: [
      {
        title: "Conférences",
        items: [
          {
            headline: "Requiem pour le Web",
            date: "2022",
            links: [
              {
                // date: "30 juin 2022",
                text: "SunnyTech",
                href: "https://sunny-tech.io/schedule/2022-06-30?sessionId=PuYsiu2FRao8oBToZbo7",
              },
            ],
          },
          {
            headline: "Care Bears II: Revenge of the Vengeance",
            date: "2022",
            links: [
              {
                text: "Le Camping des Speakers",
                href: "https://camping-speakers.fr/sessions/comment_ne_pas_etre_un_c/",
              },
              {
                text: "Codeurs en Seine",
                href: "https://www.codeursenseine.com/2022/programme",
              },
            ],
          },
          {
            headline: "Il était une fois... les navigateurs",
            date: "2021-2022",
            context: "9 présentations (dont une keynote)",
          },
          {
            headline: "The Web is on FIRE",
            date: "2019",
            context: "2 conférences & 2 deep-dive (3h)",
          },

          {
            headline: "Brace yourself, Vanilla is coming... back!",
            // date: "3 oct. 2019",
            links: [
              {
                text: "Devfest Toulouse 2019",
                href: "https://2019.devfesttoulouse.fr/sessions/brace_yourself__vanilla_is_coming__back__/",
              },
            ],
          },
          {
            headline: "PRPL: it’s time to learn up with the Fantastic Four!",
            // date: "7 juin 2019",
            links: [
              {
                text: "Best of Web 2019",
                href: "https://www.bestofweb.paris/2019/",
              },
            ],
          },

          {
            headline: "ML driven UX made easy with Guess.js",
            date: "21 fév. 2019",
            links: [
              {
                text: "NantesJS",
                href: "https://nantesjs.org/meetup-37",
              },
            ],
          },
          {
            headline:
              "Réconcilier l’ESN avec la communauté et le logiciel libre",
            // date: "17 nov. 2018",
            links: [
              {
                text: "Capitole du libre 2018",
                href: "https://2018.capitoledulibre.org/programme/#reconcilier-lesn-avec-la-communaute-et-le-logiciel",
              },
            ],
          },
          {
            headline: "Of code & Avocados",
            date: "10 oct. 2018",
            links: [
              {
                text: "Algolia TechLunch",
                href: "https://www.meetup.com/fr-FR/TechLunch/events/msrlfpyxmbjc/",
              },
            ],
          },
          {
            headline: "Angular mono-repositories",
            date: "4 juil. 2018",
            links: [
              {
                text: "Angular X Paris",
                href: "https://www.meetup.com/fr-FR/AngularX-Paris/events/251911007/",
              },
            ],
          },
        ],
      },
      {
        title: "Workshops",
        items: [
          {
            headline: "The Web is on FIRE ",
            // date: "2019-2020",
            links: [
              {
                // date: "14 fév. 2020",
                text: "Devfest Paris 2020",
                href: "https://devfest.gdgparis.com/sessions/the_web_is_still_on_f_i_r_e_workshop_/",
              },
              {
                // date: "6 juin 2019",
                text: "Best of Web 2019",
                href: "https://www.bestofweb.paris/2019/",
              },
            ],
          },
          {
            headline: "Deep dive into Angular CLI 7",
            // date: "6 nov. 2018",
            links: [
              {
                text: "AngularConnect 2018",
                href: "https://angularconnect.com/2018/talks.html#noel-mace",
              },
            ],
          },
          {
            headline: "SFEIR School / Institute",
            date: "2018-2019",
            links: [
              {
                text: "Angular 200 (référant)",
                href: "https://github.com/sfeir-open-source/sfeir-school-angular",
              },
              {
                text: "PWA 200 (référant)",
                href: "https://github.com/sfeir-open-source/sfeir-school-pwa",
              },
              {
                text: "Speaker 200",
                href: "https://github.com/sfeir-open-source/sfeir-school-speaker",
              },
            ],
          },
        ],
      },
      {
        title: "Podcasts",
        items: [
          {
            headline: "Les briques du Web",
            // date: "depuis 2020",
            context: "co-organisateur & chroniqueur",
            href: "https://rdv-speakers.fr/les-briques-du-web/",
          },
          {
            headline: "Rdv des speakers",
            // date: "depuis 2020",
            context: `présentateur & contributeur`,
            href: "https://rdv-speakers.fr/",
          },
        ],
      },
      {
        title: "Publications",
        items: [
          {
            headline:
              "Développement et architecture des applications Web Modernes - Retrouver les fondamentaux",
            // date: "17 mars 2021",
            context: "Éditions ENI",
            href: urlLivreENI,
          },
          /* {
            headline: "blog",
            date: "depuis 2020",
            context: "fullweb.dev",
            href: "https://fullweb.dev/fr/news",
          }, */
          {
            headline: "Shared Behaviors best practice with Mocha",
            // date: "26 août 2019",
            context: "Open Web Components",
            href: "https://dev.to/open-wc/shared-behaviors-best-practices-with-mocha-519d",
          },
          {
            headline: `Livre blanc "Progressive Web Apps"`,
            // date: "30 avr. 2019",
            context: "SFEIR",
            href: "https://www.sfeir.com/fr/livre-blanc-progressive-web-app/",
          },
          {
            headline: "AngularConnect 2018 on-the-spot",
            // date: "10 nov. 2018",
            context: "Medium (SFEIR)",
            href: "https://medium.com/@noelm/angularconnect-2018-on-the-spot-92315b79af79",
          },
          {
            headline: `Manuel de formation "Développement JQuery avancé"`,
            date: "2013",
            context: "M2I",
          },
        ],
      },
      {
        title: "Open Source",
        items: [
          {
            headline: "Daucus",
            // date: "depuis 2020",
            context: "générateur moderne de ressources statiques",
            href: "https://fullweb.dev/daucus/",
          },
          {
            headline: "Modern Helpers",
            // date: "depuis 2020",
            context:
              "helper functions pour le développement d'applications Web modernes",
            href: "https://fullweb.dev/helpers/",
          },
          {
            headline: "Monocli",
            // date: "depuis 2020",
            context: "Meta-CLI orientée monorepo",
            href: "https://github.com/noelmace/monocli",
          },
          {
            headline: "Angular, Angular CLI, ng-packagr & Nrwl/NX",
            date: "2016-2018",
            context: "contributions régulières",
          },
          {
            headline:
              "ngrx, js-framework-benchmark, eslint, vuepress, deckdeckgo, etc.",
            // date: "depuis 2016",
            context: "contributions ponctuelles",
          },
        ],
      },
    ],
  },
  misc: {
    title: "Centres d'intérêt",
    content: [
      "Logiciel Libre, Open Source & Ethical Source",
      "Pédagogie et vulgarisation scientifique",
      "Jeux de rôle et de société",
      "Sciences naturelles, sociales, politiques et&nbsp;cognitives",
      "Legos, maquettes, puzzles",
    ],
  },
};

export default wording;
