import home from "../../js/components/home.js";
import { html } from "lit-html";

export default () =>
  home({
    heroText: "Full Web",
    heroSubText: "Development",
    actionText: "Allons-y !",
    license: "Distribué sour license MIT & CC BY-NC-SA",
    copyright: "Copyright © 2020 fullwebdev, Noël Macé",
    tagline: "Maitriser l'ensemble du Web moderne",
    features: [
      {
        title: "Accessible",
        details:
          "Notre objectif numéro 1 : abattre les obstacles placés entre vous et la maîtrise du développement Web. Eviter et combattre toute discrimination a ainsi pour nous une grande importance. Ce pourquoi nous mettons notamment en oeuvre toute pratique d'accessibilité du Web nécessaire, et nous efforçons de rendre nos créations les plus intelligibles possible.",
      },
      {
        title: "Prêt pour le futur",
        details:
          "FullWeb.dev est non dogmatique. Se focaliser sur les éléments qui constituent la part commune du développement Web, et étudier les forces et faiblesses de chaque solution en fonction du contexte plutôt que de manière absolue, est, selon nous, le meilleur moyen de garantir la pérennité de vos compétences et projets.",
      },
      {
        title: "Ouvert & Équitable",
        details:
          "Nous partageons l'essentiel de nos création en Open Source avec la communauté, afin de permettre à tous de contribuer à leur amélioration. Dans le cas où une certaine part de notre travail nécessite un accès limité pour une quelconque raison, nous faisons tout notre possible pour garantir que celui-ci ne se fasse au détriment de personne.",
      },
    ],
    content: html`<div class="banner">
      Ce site, et l'ensemble du projet FullWeb.dev est encore très jeune, et
      incomplet. De plus, nous sommes bien entendu loin d'être infaillibles. Si
      vous avez la moindre remarque ou idée (en particulier si vous remarquez un
      problème allant à l'encontre de nos principes), nous serons ravis d'y
      répondre. N'hésitez donc pas à
      <a
        href="https://github.com/fullwebdev/fullwebdev/issues/new"
        target="_blank"
        rel="noopener noreferrer"
        >ouvrir une issue Github</a
      >, ou à nous
      <a
        href="https://twitter.com/messages/compose?recipient_id=191620154"
        target="_blank"
        rel="noopener noreferrer"
        >envoyer un message via Twitter</a
      >.
    </div> `,
  });
