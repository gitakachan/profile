import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Home = () => import("../views/home/Home.vue");
const AboutMe = () => import("../views/aboutMe/AboutMe.vue");
const Experiences = () => import("../views/experiences/Experiences.vue");
const Portfolios = () => import("../views/portfolios/Portfolios.vue");

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about-me",
    name: "AboutMe",
    component: AboutMe,
  },
  {
    path: "/experiences",
    name: "experiences",
    component: Experiences,
  },
  {
    path: "/portfolios",
    name: "portfolios",
    component: Portfolios,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
