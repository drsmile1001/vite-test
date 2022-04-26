import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

loadFonts();

const routes = <RouteRecordRaw[]>[
  {
    path: "/",
    component: () => import("@/Views/Home.vue"),
  },
  {
    path: "/about",
    component: () => import("@/Views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(vuetify).use(router).mount("#app");
