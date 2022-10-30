/** @type {import('../../views/cv-nma').CVNMAWording} */
const wording = {
  title: "Noël Macé",
  subtitle: "Web Developer/Architect",
  note: "13 years experience",
  presentation: {
    title: "Introduction",
    abstract: `I am a passionate and curious developer above all.
    So far, the Web is for me the best playground as it is constantly changing and evolving.
    I especially deploy my full potential when associating my technical and soft skills in an environment conducive to knowledge-sharing and support.`,
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
          /* HTML */ `focus on
            <strong>transversal standards and principles</strong> (Web
            Components, Web APIs, PWAs, PRPL, a11y, performance, etc.)`,
          /* HTML */ `mastery of several frameworks and libraries (<strong
              >Lit, Open WC, Angular, React, Vue, Redux, Gatsby, 11ty,
              etc.</strong
            >)`,
          /* HTML */ `advanced mastery of
            <strong>Angular, Angular CLI & Nrwl/Nx</strong> (contributor from
            2016 to 2018)`,
          /* HTML */ `<strong>book</strong> providing an in-depth approach of
            <em
              ><a
                href="https://www.editions-eni.fr/livre/developpement-et-architecture-des-applications-web-modernes-retrouver-les-fondamentaux-9782409029523"
                target="_blank"
                rel="noreferrer noopener"
                >Modern Web Apps development and architecture</a
              ></em
            >
            published (in French) by ENI Editions in 2021`,
        ],
      },
      {
        title: "Pedagogy",
        icon: {
          src: "/images/icons/rails.svg",
          caption: "guideline",
        },
        content: [
          /* HTML */ `<strong>mentoring</strong> and
            <strong>knowledge-sharing</strong> are the two pillars of my career`,
          /* HTML */ `extensive and wide experience, as an independent teacher
          and trainer, instructional engineer, and director for several
          pedagogical teams and R&D programs`,
        ],
      },
      {
        title: "Sharing and Discovering",
        icon: {
          src: "/images/icons/motivation.svg",
          caption: "motivations",
        },
        content: [
          /* HTML */ `strong passion for <strong>Open Source</strong> and
            Openness in general`,
          /* HTML */ `numerous
            <strong>workshops and conferences</strong> created and presented`,
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
          startDate: "Jan. 2020",
          jobTitle: "Consultant",
          icon: "/images/web-illustrations/companies-logos/fwd.svg",
          details: "Web development and architecture",
        },
        {
          company: { name: "blindnet", details: "start-up" },
          startDate: "Feb. 2022",
          endDate: "Oct. 2022",
          jobTitle: "Head of DevRel",
          details: [
            "Promotion of privacy-by-design development",
            "leading and contributing to the creation of a new DevKit (Web, Java and Scala)",
            "solution engineering and technical writing",
          ],
          icon: "/images/web-illustrations/companies-logos/blindnet.svg",
        },
        {
          company: {
            name: "Editions ENI",
            details: "IT specialized french publisher",
          },
          jobTitle: "Author",
          startDate: "March 2020",
          endDate: "March 2021",
          icon: "/images/web-illustrations/companies-logos/eni.svg",
          details: [
            "writing of the book <strong>Développement et architecture des applications Web Modernes - Retrouver les fondamentaux</strong> (608 pages)",
            "16500 lines of tested and runnable demo code",
            "development of libraries, tools, scripts et projects to validate and support written contents (CI/CD)",
          ],
        },
        {
          company: {
            name: "Bonitasoft",
            details: "Open Source Software company (BPM)",
          },
          jobTitle: "Developer Advocate Web",
          startDate: "April 2019",
          endDate: "Oct. 2019",
          icon: "/images/web-illustrations/companies-logos/bonitasoft.png",
          details: [
            "Mission: improve user satisfaction and brand image of all Bonitasoft products involving web technologies",
            "<strong>modernization and performance</strong>: contribution and support for the transition from <em>AngularJS</em> to <em>Web Components</em>",
            "define and set-up new strategies and tools to facilitate content creation and tracking of numerous technical events (via Gatsby, Netlify CMS, GitHub)",
          ],
        },
        {
          company: {
            name: "SFEIR",
            details: "Consulting Company, 500 employees",
          },
          jobTitle: "Developer Advocate / Web Architect",
          startDate: "June 2018",
          endDate: "April 2019",
          icon: "/images/web-illustrations/companies-logos/sfeir.jpg",
          details: [
            "<strong>dual mission</strong>: technical expertise (3 days /5) and advocacy",
            "stabilization and improvement of the maintainability of an <strong>Angular, NgRx et Preact</strong> web app as a tech lead for the Société Générale company",
            "management and mentoring of a tream composed of <strong>30 Angular developers</strong> (Paris & Hong Kong) for the BNP Paribas company",
            "audits and performance improvements of several Progressive Web Apps (Vanilla, React, Vue, Angular), migration from AngularJS to Angular, respond calls for tenders, etc.",
            "internal and external community management (organization of events and management of the company's internal social network)",
            "8 conferences et 5 training courses delivered (cf. Accomplishments)",
          ],
        },
      ],
      [
        {
          company: {
            name: "Sedona",
            details: "Consulting Company, 100 employees",
          },
          jobTitle: "JS Technical Director / Web Architect",
          startDate: "Dec. 2015",
          endDate: "May 2018",
          icon: "/images/web-illustrations/companies-logos/sedona.png",
          details: [
            "<strong>technical and project management</strong> of 8 front-end JavaScript projects(AngularJS, JQuery, PHP and Node.js) with 3 teams of 12 developers",
            "specification of a new front-end web development reference framework for Sedona and the <em>Harmonie Mutuelle</em> company",
            "<strong>respond to call for tenders</strong> and strong <strong>modernization</strong> of Web technologies usages for the whole group (Sedona, West, RedShift et Inadeo brands)",
            "<em>(from Dec. 2016)</em> develop, set-up and lead 3 projects, conducted by 6 teams (30 developers in total) as the <strong>referring Angular Architect</strong> for <em>Saint Gobain</em>",
          ],
        },
        {
          company: { name: "Française des Jeux" },
          jobTitle: "Lead Developer AngularJS",
          startDate: "June 2015",
          endDate: "Nov. 2015",
          icon: "/images/web-illustrations/companies-logos/fdj.png",
          details: `Leading a team of 8 developers in charge of developing several <strong>AngularJS 1.4 et ES2015</strong> "widgets" providing user account management and the Euromillions game on fdj.fr`,
          shortLine: true,
        },
        {
          company: { name: "Freelance" },
          jobTitle: "Teacher and Consultant",
          startDate: "May 2011",
          endDate: "June 2015",
          icon: "/images/web-illustrations/companies-logos/nmc.png",
          details: [
            "<strong>38 trainings</strong> conducted online and in-person",
            "<strong>3 applications</strong> developped in Java (Spring, Struts, Hibernate) and with the Android SDK",
          ],
          shortLine: true,
        },
        {
          company: { name: "Supinfo" },
          jobTitle: "Unix Main Teacher",
          startDate: "June 2010",
          endDate: "April 2011",
          icon: "/images/web-illustrations/companies-logos/supinfo.jpg",
          details: [
            "<strong>recruiting, managing and training 70 teachers</strong> delivering trainings in <strong>3 areas (Linux, Apple & Sécurité)</strong> on the 30 international sites",
            "<strong>7 teaching units</strong> defined, redacted and managed",
          ],
          shortLine: true,
        },
        {
          company: { name: "Supinfo" },
          jobTitle: "Teacher",
          startDate: "Oct. 2009",
          endDate: "June 2010",
          icon: "/images/web-illustrations/companies-logos/supinfo.jpg",
          details:
            "12 teaching units delivered on 18 sites in 3 countries (+ french overseas departments)",
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
        diploma: "Master's Degree in IT Engineering",
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
    title: "Accomplishments",
    groups: [
      {
        title: "Conferences",
        items: [
          {
            headline: "Requiem for the Web",
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
            headline: "Draw me like one of your web browsers",
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
                text: "Angular 200 (referring teacher)",
                href:
                  "https://github.com/sfeir-open-source/sfeir-school-angular",
              },
              {
                text: "PWA 200 (referring teacher)",
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
            context: "co-organizer & columnist",
            href: "https://rdv-speakers.fr/les-briques-du-web/",
          },
          {
            headline: "Rdv des speakers",
            // date: "depuis 2020",
            context: `prensenter & contributor`,
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
            headline: `"Progressive Web Apps" White Paper`,
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
            headline: `"Advanced JQuery Development" training handbook`,
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
            context:
              "Automate the generation of multiple static outputs from a unique source using the converters and formats of your choice.",
            href: "https://fullweb.dev/daucus/",
          },
          {
            headline: "Modern Helpers",
            // date: "depuis 2020",
            context: "Simple helpers for modern web development.",
            href: "https://fullweb.dev/helpers/",
          },
          {
            headline: "Monocli",
            // date: "depuis 2020",
            context: "Monorepo-oriented meta-CLI",
            href: "https://github.com/noelmace/monocli",
          },
          {
            headline: "Angular, Angular CLI, ng-packagr & Nrwl/NX",
            date: "2016-2018",
            context: "regular contributions",
          },
          {
            headline:
              "ngrx, js-framework-benchmark, eslint, vuepress, deckdeckgo, etc.",
            // date: "depuis 2016",
            context: "ponctual contributions",
          },
        ],
      },
    ],
  },
  misc: {
    title: "Hobbies",
    content: [
      "FOSS Software, Open Source & Ethical Source",
      "Pedagogy et Popular Science",
      "History of technologies and society",
      "Roleplay and cardboard games",
      "Natural, Social, Political and Cognitive Sciences",
      "Legos, models, puzzles",
    ],
  },
};

export default wording;
