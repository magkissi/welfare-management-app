import { getDashboardInfo } from "../../api/dashboard";

const state = {
  info: null,
  fectchingInfo: null,
  fetchInfoError: {},
};
const getters = {};
const actions = {
  async fetchDashboardInfo({ commit }) {
    commit("setState", {
      changedState: "fectchingInfo",
      value: true,
    });

    const res = await getDashboardInfo();
    console.log("actionn", res.data);
    if (res.success) {
      commit("setState", {
        changedState: "info",
        value: res.data,
      });
      commit("setState", {
        changedState: "fetchInfoError",
        value: {
          status: false,
          data: null,
        },
      });
    } else {
      commit("setState", {
        changedState: "fetchInfoError",
        value: {
          status: true,
          error: res,
        },
      });
    }
    commit("setState", {
      changedState: "fectchingInfo",
      value: false,
    });
  },
};
const mutations = {
  setState: (state, data) => {
    state[data.changedState] = data.value;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
