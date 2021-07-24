import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "mainLayout",
    redirect: "dashboard",
    component: () => import("@/layouts/MainLayout/MainLayout.vue"),
    children: [
      {
        path: "dashboard",
        name: "Home",
        component: () => import("@/pages/Home/Home.vue"),
        meta: {
          title: "Home Page",
          breadcrumbs: [
            {
              text: "Dashboard",
              disabled: false,
              href: "",
            },
            {
              text: "Home Page",
              disabled: false,
              href: "/#/",
            },
          ],
        },
      },

      {
        path: "/about",
        name: "About",
        component: () => import("@/pages/About/About.vue"),
        meta: {
          title: "Home Page",
          breadcrumbs: [
            {
              text: "Dashboard",
              disabled: false,
              href: "/",
            },
            {
              text: "About",
              disabled: false,
              href: "/#/about",
            },
          ],
        },
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/pages/Login/Login.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
