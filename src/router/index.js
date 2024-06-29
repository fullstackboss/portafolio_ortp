import { createRouter, createWebHistory } from "vue-router";
import inicio from "../views/ViewInicio.vue";
import acerca from "../views/ViewAcerca.vue";
import trabajos from "../views/ViewTrabajos.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "inicio",
      component: inicio,
    },
    {
      path: "/acerca",
      name: "acerca",
      component: acerca,
    },
    {
      path: "/trabajos",
      name: "trabajos",
      component: trabajos,
    },
    {
      path: "/contacto",
      name: "contacto",
      component: () => import("../views/ViewContacto.vue"),
    },
  ],
});

export default router;
