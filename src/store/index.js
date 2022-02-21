import Vue from "vue";
import Vuex from "vuex";
import dashboard from "./dashboard";
import membership from "./membership";
import contributions from "./contributions";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    dashboard,
    membership,
    contributions,
  },
});
