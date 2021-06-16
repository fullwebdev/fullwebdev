import { readTemplate, readSource } from "../utils.mjs";

const css = readSource(import.meta, "index.css");

const contributors = [
  [
    {
      name: "Hubert Sablonnière",
      picture: "https://avatars.githubusercontent.com/u/236342",
      github: "hsablonniere",
    },
    {
      name: "Pierre Tibulle",
      picture: "/images/web-illustrations/ptibulle-175.jpg",
      github: "ptibulle",
      noPictureOpts: true,
    },
    {
      name: "Wassim Chegham",
      picture: "https://avatars.githubusercontent.com/u/1699357",
      github: "manekinekko",
    },
  ],
  [
    {
      name: "Amadou Sall",
      picture: "https://avatars.githubusercontent.com/u/8947112",
      github: "ahasall",
    },
    {
      name: "Fabien Zibi",
      picture: "https://avatars.githubusercontent.com/u/1621916",
      github: "dahfazz",
    },
    {
      name: "Gérôme Grignon",
      picture: "https://avatars.githubusercontent.com/u/32737308",
      github: "geromegrignon",
    },
    {
      name: "Jean-François Garreau",
      picture:
        "https://pbs.twimg.com/profile_images/1191342264741695488/N-H7VyYL_200x200.jpg",
      noPictureOpts: true,
      github: "jefBinomed",
    },
    {
      name: "Horacio Gonzalez",
      picture: "https://avatars.githubusercontent.com/u/726476",
      github: "LostInBrittany",
    },
    {
      name: "David Dal Busco",
      picture: "https://avatars.githubusercontent.com/u/16886711",
      github: "peterpeterparker",
    },
    {
      name: "Julien Renaux",
      picture: "https://avatars.githubusercontent.com/u/1388706",
      github: "shprink",
    },
    {
      name: "Vincent Ogloblinsky",
      picture:
        "https://pbs.twimg.com/profile_images/927881186457866240/TF_HzkNO_200x200.jpg",
      noPictureOpts: true,
      github: "vogloblinsky",
    },
    {
      name: "Younes Jaaidi",
      picture: "https://avatars.githubusercontent.com/u/2674658",
      github: "yjaaidi",
    },
  ],
];

export default {
  template: readTemplate(import.meta),
  langs: {
    en: {
      css,
      title: "About us",
      author: {
        title: "Noël Macé",
        subtitle: "Primary Author",
        content: /* HTML */ `<p>
            Passionate about sharing technical knowledge and about meeting and
            helping people, Noël loves to teach and has offered talks on diverse
            topics from the very beginning of his career in technology.
          </p>
          <p>
            He is a web developer, and a former developer advocate, with
            experience in learning design, teaching, software architecture and
            technical management.
          </p>
          <p>
            Based on this wide experience, he now focuses on the developer
            community, where he helps developers around the world master the
            modern capabilities of the Web (among other things) as a freelancer
            and through talks, blog posts and OSS contributions.
          </p>`,
      },
      team: {
        contributors: [
          {
            title: "cooperations",
            people: contributors[0],
          },
          {
            title: "Proofreading, guidance & support",
            people: contributors[1],
          },
        ],
      },
    },
    fr: {
      css,
      title: "À propos",
      author: {
        title: "Noël Macé",
        subtitle: "Auteur principal",
        content: /* HTML */ `<p>
            Apprendre de nouvelles choses, et les transmettre, a toujours été
            une passion pour moi. Passion qui, logiquement, est devenu le moteur
            de ma carrière, et plus globalement, de ma vie.
          </p>
          <p>
            J'ai tout d'abord consacré six ans de ma vie à l'enseignement, en
            tant que formateur et directeur pédagogique, me spécialisant en
            administration système et développement Java. J'ai ensuite décidé,
            en 2014, de me concentrer plus spécifiquement sur le développement
            web, une autre de mes grandes passions.
          </p>
          <p>
            Depuis, je donne régulièrement des conférences, des formations, des
            workshops, et ai même écrit
            <a
              href="https://www.editions-eni.fr/livre/developpement-et-architecture-des-applications-web-modernes-retrouver-les-fondamentaux-9782409029523"
              target="_blank"
              rel="noreferrer noopener"
              >un livre</a
            >.
          </p>
          <p>
            Suite à ce livre, et à mon retour au freelance, j'ai créé ce site
            afin de rassembler et présenter l'ensemble de mes travaux. Ma ligne
            directice : offrir une vision d'ensemble, et des compétences
            pérènnes.
          </p> `,
      },
      team: {
        contributors: [
          {
            title: "Coopérations",
            people: contributors[0],
          },
          {
            title: "Relecture, conseils et soutien",
            people: contributors[1],
          },
        ],
      },
    },
  },
};
