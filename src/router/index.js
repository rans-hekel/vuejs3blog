import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import showPost from "../views/posts/showPost.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/posts/:id",
    name: "showPost",
    component: showPost,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
