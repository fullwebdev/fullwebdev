import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// définition des composants Home et About

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: About }
  ]
});
