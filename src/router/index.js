import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import showPost from "../views/posts/showPost.vue";
import CreatePost from "../views/posts/CreatePost.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/posts/create",
    name: "createPost",
    component: CreatePost,
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
