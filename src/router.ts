import { createMemoryHistory, createRouter } from "vue-router";

import Home from "./pages/Home.vue";
import Connect from "./pages/Connect.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/connect", component: Connect },
];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

export default router;