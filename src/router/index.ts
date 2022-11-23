import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: () => {},
    },
  ],
});

export default router;
