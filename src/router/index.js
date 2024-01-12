import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import showPost from "../views/posts/showPost.vue";
import CreatePost from "../views/posts/CreatePost.vue";
import Tag from "../views/posts/Tag.vue";

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
  {
    path: "/tag/:tag",
    name: "showTag",
    component: Tag,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
