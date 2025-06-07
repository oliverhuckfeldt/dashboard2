import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";

import App from "./App.vue";
import Dashboard from "components/pages/Dashboard.vue";
import Foo from "components/pages/Foo.vue";
import Bar from "components/pages/Bar.vue";

import "./style.css";

const routes = [
  {
    path: "/",
    component: Dashboard,
  },
  {
    path: "/foo",
    component: Foo,
  },
  {
    path: "/bar",
    component: Bar,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
