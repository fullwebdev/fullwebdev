/** @type {import('../../views/cv-nma').CVNMAWording} */
const wording = {
  title: "Noël Macé",
  subtitle: "Web Developer/Architect",
  note: "13 years experience",
  presentation: {
    title: "Introduction",
    abstract: `TRANSLATION IN PROGRESS. Thank you for your patience.`,
    langs: {
      title: "Languages",
      content: [
        "English: proficient (C1/C2)",
        "French: native & literary",
        "Spanish: basic (A2)",
      ],
    },
    networks: {
      title: "Networks",
      content: [
        // {
        //   icon: "/images/icons/mail.svg",
        //   alt: "Email",
        //   text: "contact@noelmace.com",
        //   url: "mailto:contact@noelmace.com",
        // },
        {
          icon: "/images/icons/twitter.svg",
          alt: "Twitter",
          text: "@noel_mace",
          url: "https://twitter.com/noel_mace",
        },
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
          alt: "personnal web page",
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
      text: `Schedule a meeting with`,
      url: "calendly.com/noelmace",
      img: {
        src: "/images/icons/calendly.svg",
        alt: "Calendly",
      },
    },
    items: [
      {
        title: "Web Architecture & Development",
        icon: {
          src: "/images/icons/tools.svg",
          caption: "expertise",
        },
        content: [
          /* HTML */ `focus sur les
            <strong>standards et principes transverses</strong> (Web Components,
            Web APIs, PWAs, PRPL, a11y, performances, etc.)`,
          /* HTML */ `maitrise de nombreux frameworks et bibliothèques (<strong
              >Lit, Open WC, Angular, React, Vue, Redux, Gatsby, 11ty,
              etc.</strong
            >)`,
          /* HTML */ `maitrise avancée de
            <strong>Angular, Angular CLI & Nrwl/Nx</strong> (contributeur de
            2016 à 2018, puis suivi régulier)`,
          /* HTML */ `<strong>livre</strong> complet sur les principes
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
        ],
      },
      {
        title: "Pedagogy",
        icon: {
          src: "/images/icons/rails.svg",
          caption: "guideline",
        },
        content: [
          /* HTML */ `<strong>mentoring</strong> et
            <strong>transmission de compétences</strong> sont les piliers et
            fils conducteurs de l'ensemble de ma carrière`,
          /* HTML */ `large expérience, en tant que formateur autonome et dans
          la direction et l'accompagnement d'importantes équipes pédagogique ou
          de R&D`,
        ],
      },
      {
        title: "Sharing and Discovering",
        icon: {
          src: "/images/icons/motivation.svg",
          caption: "motivations",
        },
        content: [
          /* HTML */ `forte appétence pour l'<strong>Open Source</strong> et les
            oeuvres libres`,
          /* HTML */ `nombreux <strong>workshops et conférences</strong> créés
            et présentés`,
        ],
      },
    ],
  },
  experience: {
    title: "Experience",
    dateIntervals: {
      noEnd: "Since",
      start: "From",
      end: "to",
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
          jobTitle: "Head of DevRel",
          details:
            "Promotion de la privacy, encadrement et contribution au développement Web, Java et Scala, accompagnement client et rédaction de documentations",
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
            "rédaction du livre <strong>Développement et architecture des applications Web Modernes - Retrouver les fondamentaux</strong> (608 pages)",
            "16500 lignes de code d'exemple, testées et executables",
            "développement de bibliothèques, outils, scripts et projets permettant de valider et appuyer le contenu du livre, ainsi que de faciliter sa rédaction (CI/CD)",
          ],
        },
        {
          company: {
            name: "Bonitasoft",
            details: "éditeur logiciel Open Source (BPM)",
          },
          jobTitle: "Developer Advocate Web",
          startDate: "avril 2019",
          endDate: "oct. 2019",
          icon: "/images/web-illustrations/companies-logos/bonitasoft.png",
          details: [
            "Mission : améliorer la satisfaction utilisateur et l'image de marque des produits Bonitasoft impliquant des technologies Web",
            "<strong>modernisation et performance</strong> : contribution et accompagnement à une transition de <em>AngularJS</em> aux <em>Web Components</em>",
            "mise en place d'une stratégie et d'outils facilitant la production de contenus, ainsi que la gestion de 213 évènements (via Gatsby, Netlify CMS, GitHub)",
          ],
        },
        {
          company: { name: "SFEIR", details: "ESN, 500 employés" },
          jobTitle: "Developer Advocate / Architecte Web",
          startDate: "juin 2018",
          endDate: "avril 2019",
          icon: "/images/web-illustrations/companies-logos/sfeir.jpg",
          details: [
            "<strong>double mission</strong> : expertise technique (3j/5) et advocacy",
            "stabilisation et amélioration de la maintenabilité d'une application <strong>Angular, NgRx et Preact</strong> en tant que tech lead pour la Société Générale",
            "encadrement et montée en compétence d'une équipe de <strong>30 développeurs Angular</strong> (Paris & Hong Kong) pour BNP Paribas",
            "audit et amélioration des performances de Progressive Web Apps (Vanilla, React, Vue, Angular), migrations AngularJS-Angular, réponses à appels d'offre, etc.",
            "gestion communautaire interne et externe (organisation d'évènements et réseaux sociaux d'entreprise)",
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
            "<strong>direction technique de 8 projets</strong> front-end JavaScript (AngularJS, JQuery, PHP et Node.js) menés par 3 équipe de 12 développeurs",
            "définition de l'architecture front-end web de référence pour Sedona ainsi que le groupe <em>Harmonie Mutuelle</em>",
            "<strong>réponse à appels d'offre</strong> et <strong>modernisation</strong> de l'usage des technologies Web sur l'ensemble du groupe (marques Sedona, West, RedShift et Inadeo)",
            "<em>(à partir de déc. 2016)</em> suivi, développement et mise en place des codes et outils transverses sur 3 projets, menés par 6 équipes (30 développeurs), en tant qu'<strong>architecte référant Angular</strong> pour le compte de <em>Saint Gobain</em>",
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
          company: { name: "Freelance" },
          jobTitle: "Formateur, Consultant",
          startDate: "mai 2011",
          endDate: "juin 2015",
          icon: "/images/web-illustrations/companies-logos/nmc.png",
          details: [
            "<strong>38 formations</strong> délivrées en ligne et présentiel",
            "<strong>3 applications</strong> Java (Spring, Struts, Hibernate) & Android développées",
          ],
          shortLine: true,
        },
        {
          company: { name: "Supinfo" },
          jobTitle: "Directeur de l'enseignement Unix",
          startDate: "juin 2010",
          endDate: "avril 2011",
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
            "12 unités pégagogiques enseignées sur 18 sites dans 3 pays (+ DOM)",
          shortLine: true,
        },
      ],
    ],
  },
  education: {
    title: "Education",
    items: [
      {
        school: "Supinfo International University",
        diploma: "Master's Degree of IT Engineering",
        year: "2010",
      },
      {
        school: "Université Toulouse Jean Jaurès",
        diploma:
          "Associate’s Degree in Applied Mathematics and Social Sciences",
        year: "2007",
      },
    ],
  },
  accomplishments: {
    title: "Accomplishment",
    groups: [
      {
        title: "Conferences",
        items: [
          {
            headline: "Requiem pour le Web",
            date: "2022",
            links: [
              {
                // date: "30 juin 2022",
                text: "SunnyTech",
                href:
                  "https://sunny-tech.io/schedule/2022-06-30?sessionId=PuYsiu2FRao8oBToZbo7",
              },
            ],
          },
          {
            headline: "Care Bears II: Revenge of the Vengeance",
            date: "2022",
            links: [
              {
                text: "Le Camping des Speakers",
                href:
                  "https://camping-speakers.fr/sessions/comment_ne_pas_etre_un_c/",
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
            links: [
              {
                // date: "2 juil. 2021",
                text: "Riviera DEV",
                href: "https://2021.rivieradev.fr/session/1029",
              },
              {
                // date: "10 sept. 2021",
                text: "JUG SummerCamp",
                href:
                  "https://www.jugsummercamp.org/edition/12/presentations/zq4HdtYsZFbQghPedwLs",
              },
              {
                // date: "21 janv. 2022",
                text: "Touraine Tech",
                href: "https://2022.touraine.tech/talk/zq4HdtYsZFbQghPedwLs",
              },
              {
                // date: "3 févr. 2022",
                text: "Snowcamp (keynote d'ouverture)",
                href:
                  "https://snowcamp2022.sched.com/event/qa5F/il-etait-une-fois-les-navigateurs-nulb",
              },
              {
                // date: "10 mars 2022",
                text: "Université de Poitiers (master info-com)",
              },
              {
                // date: "13 mai 2022",
                text: "Devoxx UK",
                href: "https://www.devoxx.co.uk/talk/?id=4955",
              },
              {
                // date: "1 juillet 2022",
                text: "SunnyTech",
                href:
                  "https://sunny-tech.io/schedule/2022-07-01?sessionId=zq4HdtYsZFbQghPedwLs",
              },
              {
                // date: "30 sept. 2022",
                text: "LunaConf",
              },
              {
                // date: "14 oct. 2022",
                text: "PHP Forum",
                href: "https://event.afup.org/forum-php-2022/programme/#4041",
              },
            ],
          },
          {
            headline: "The Web is on FIRE",
            date: "2019",
            links: [
              {
                // date: "10 déc. 2019",
                text: "Paris Open Source Summit",
                href: "https://2019.opensourcesummit.paris",
              },
              {
                // date: "4 nov. 2019",
                text: "Devoxx Belgium (3h deep dive)",
                href: "https://devoxx.be/schedule/speaker-details/?id=50822",
              },
              {
                // date: "22 oct. 2019",
                text: "Devfest Nantes",
                href:
                  "https://devfest2019.gdgnantes.com/sessions/the_web_is_on__f_i_r_e________conference_/",
              },
              {
                // date: "20 mars 2019",
                text: "BreizhCamp (Université - 3h)",
                href: "https://2019.breizhcamp.org/conference/programme/",
              },
            ],
          },

          {
            headline: "Brace yourself, Vanilla is coming... back!",
            // date: "3 oct. 2019",
            links: [
              {
                text: "Devfest Toulouse 2019",
                href:
                  "https://2019.devfesttoulouse.fr/sessions/brace_yourself__vanilla_is_coming__back__/",
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
                href:
                  "https://2018.capitoledulibre.org/programme/#reconcilier-lesn-avec-la-communaute-et-le-logiciel",
              },
            ],
          },
          {
            headline: "Of code & Avocados",
            date: "10 oct. 2018",
            links: [
              {
                text: "Algolia TechLunch",
                href:
                  "https://www.meetup.com/fr-FR/TechLunch/events/msrlfpyxmbjc/",
              },
            ],
          },
          {
            headline: "Angular mono-repositories",
            date: "4 juil. 2018",
            links: [
              {
                text: "Angular X Paris",
                href:
                  "https://www.meetup.com/fr-FR/AngularX-Paris/events/251911007/",
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
                href:
                  "https://devfest.gdgparis.com/sessions/the_web_is_still_on_f_i_r_e_workshop_/",
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
                href:
                  "https://github.com/sfeir-open-source/sfeir-school-angular",
              },
              {
                text: "PWA 200 (référant)",
                href: "https://github.com/sfeir-open-source/sfeir-school-pwa",
              },
              {
                text: "Speaker 200",
                href:
                  "https://github.com/sfeir-open-source/sfeir-school-speaker",
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
            href:
              "https://www.editions-eni.fr/livre/developpement-et-architecture-des-applications-web-modernes-retrouver-les-fondamentaux-9782409029523",
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
            href:
              "https://dev.to/open-wc/shared-behaviors-best-practices-with-mocha-519d",
          },
          {
            headline: `Livre blanc "Progressive Web Apps"`,
            // date: "30 avril 2019",
            context: "SFEIR",
            href: "https://www.sfeir.com/fr/livre-blanc-progressive-web-app/",
          },
          {
            headline: "AngularConnect 2018 on-the-spot",
            // date: "10 nov. 2018",
            context: "Medium (SFEIR)",
            href:
              "https://medium.com/@noelm/angularconnect-2018-on-the-spot-92315b79af79",
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
    title: "Hobbies",
    content: [
      "Logiciel Libre, Open Source & Ethical Source",
      "Pédagogie et vulgarisation scientifique",
      "Histoire des technologies et sociétés",
      "Jeux de rôle & de société",
      "Sciences naturelles, sociales, politiques et cognitives",
      "Legos, maquettes, puzzles",
    ],
  },
};

export default wording;
