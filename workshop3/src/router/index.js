import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import DrinksView from "../views/DrinksView.vue"; // Adjusted import
import DrinkView from "../views/DrinkView.vue"; // Adjusted import
import NotFound from "../views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/drinks", // Adjusted path
      name: "drinks", // Adjusted name
      component: DrinksView, // Adjusted component
    },
    {
      path: "/drink/:id", // Adjusted path
      name: "drink", // Adjusted name
      component: DrinkView, // Adjusted component
    },
    {
      path: "/:pathMatch(.*)*", // Catch-all route for 404
      name: "notFound",
      component: NotFound,
    },
  ],
});

export default router;
