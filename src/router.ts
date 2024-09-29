import { createMemoryHistory, createRouter } from "vue-router";

import Home from "./pages/Home.vue";
import Connect from "./pages/Connect.vue";
import Configure from "./pages/Configure.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/connect", component: Connect },
  { path: "/configure", component: Configure },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
