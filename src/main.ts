import { devtools } from "@vue/devtools";
import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.postcss";

if (process.env.NODE_ENV === "development") {
  devtools.connect("http://localhost", 3000);
}

createApp(App).mount("#app");
