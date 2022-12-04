import { readTemplate, readSource } from "../utils.mjs";

const css = readSource(import.meta, "index.css");

export default {
  template: readTemplate(import.meta),
  langs: {
    en: {
      css,
      title: "About",
      author: {
        title: "Noël Macé",
        subtitle: "Senior Web Developer / Architect",
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
    },
    fr: {
      css,
      title: "À propos",
      author: {
        title: "Noël Macé",
        subtitle: "Web Développeur / Architecte Senior",
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
    },
  },
};
