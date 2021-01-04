import { createRouter, createWebHistory } from "vue-router";
import Files from "../views/Files.vue";

const routes = [
  {
    path: "/",
    name: "Files",
    component: Files,
  },
  {
    path: "/upload",
    name: "Upload",
    component: () => import(/* webpackChunkName: "upload" */ "../views/Upload.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const { query } = to;
  if (!query.dir) {
    query.dir = "/";
    router.replace(to);
  }
  next();
});

export default router;
