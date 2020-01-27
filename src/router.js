import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Dashboard from "./views/Dashboard.vue";
import RegisterUser from "./views/RegisterUser.vue";
import LoginUser from "./views/LoginUser.vue";
import VenueCreate from "./views/VenueCreate.vue";
import VenueList from "./views/VenueList.vue";
import VenueShow from "./views/VenueShow.vue";
import User from "./views/User.vue";
import GMap from "./components/Gmap";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/venue/create",
      name: "venue-create",
      component: VenueCreate
    },
    {
      path: "/venue/:id",
      name: "venue-show",
      component: VenueShow,
      props: true
    },
    {
      path: "/venue/list",
      name: "venue-list",
      component: VenueList
    },
    {
      path: "/user/:username",
      name: "user",
      component: User,
      props: true
    },
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/g",
      name: "GMap",
      component: GMap
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      meta: { requiresAuth: true }
    },
    {
      path: "/register",
      name: "register",
      component: RegisterUser
    },
    {
      path: "/login",
      name: "login",
      component: LoginUser
    },

  ]
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem("user");

  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next("/");
  }
  next();
});

export default router;
