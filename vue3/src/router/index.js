import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    props: true,
    name: "About", // to use in <route-link
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  // {
  //   path: "/about/:name",
  //   props: true,
  //   name: "About",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  // url/#/path
  // html5 url/path
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from) => {
  //  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  console.log(to, from);
  return true;
});

export default router;
