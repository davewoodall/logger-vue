import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import Box from "./components/shared/Box";
import FfButton from "./components/shared/Button";
require("./stylesheets/app.scss");

Vue.component("box", Box);
Vue.component("ff-button", FfButton);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
