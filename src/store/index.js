import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import dashboard from "./dashboard";
import membership from "./membership";
import contributions from "./contributions";
import actions from "./actions";
import auth from "./auth";
import { getValidUser } from "../../utils/common";

Vue.use(Vuex);

export default new Vuex.Store({
  getters: {
    isLoggedIn: () => {
      if (getValidUser()) {
        return true;
      }
      return false;
    },
  },
  modules: {
    dashboard,
    membership,
    contributions,
    actions,
    auth,
  },
});
new VuexPersistence({
  key: "welfare",
  paths: ["auth.profile"],
});
