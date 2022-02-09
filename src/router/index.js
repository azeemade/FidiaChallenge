import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Other from "../views/Other.vue";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/Other",
    name: "Other",
    component: Other,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
