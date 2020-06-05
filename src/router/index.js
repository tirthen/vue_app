import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue"),
    beforeEnter: async (to, from, next) => {
      let token = await localStorage.getItem("token");
      if (token) {
        next();
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    beforeEnter: async (to, from, next) => {
      let token = await localStorage.getItem("token");
      if (token) {
        next();
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "../components/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "Register" */ "../components/Register.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
