import Vue from "vue";
import App from "./App.vue";
import router from "./core/router";
import store from "./core/store";
import "./assets/main.scss";

import vuetify from "./plugins/vuetify";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
