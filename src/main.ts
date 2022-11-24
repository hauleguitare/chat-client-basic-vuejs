import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import { useLoadTheme } from "./utils/useLoadTheme";

const app = createApp(App);
useLoadTheme();

app.use(router);

app.mount("#app");
