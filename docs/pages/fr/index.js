import home from "../../js/components/home.js";

export default () =>
  home({
    heroText: "Full Web",
    heroSubText: "Development",
    actionText: "Allons-y !",
    footer: "Copyright © 2020 Noël Macé",
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
  });
