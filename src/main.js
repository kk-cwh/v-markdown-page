import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import VMarkdown from "@zkhh/v-markdown";
// Vue.use(VMarkdown);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
