import Vue from "vue";
import Vuex from "vuex";
import Log from "./modules/log/";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Log
  }
});
