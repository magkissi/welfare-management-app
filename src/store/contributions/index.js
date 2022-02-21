import { getAllContributions, getContribution } from "../../api";

const state = {
  allContributions: null,
  fetchingAllContributions: false,
  fetchAllContError: {},
  contribution: null,
  fetchingContribution: false,
  fetchContError: {},
};
const getters = {};
const actions = {
  async fetchAllContributions({ commit }) {
    commit("setState", {
      changedState: "fetchingAllContributions",
      value: true,
    });

    const res = await getAllContributions();
    console.log("actionnn", res);

    if (res.success) {
      commit("setState", {
        changedState: "allContributions",
        value: res.data,
      });

      commit("setState", {
        changedState: "fetchAllContError",
        value: {
          status: false,
          data: null,
        },
      });
    } else {
      commit("setState", {
        changedState: "fetchAllContError",
        value: {
          status: true,
          data: res,
        },
      });
    }
    commit("setState", {
      changedState: "fetchingAllContributions",
      value: false,
    });
  },

  async fetchContribution({ commit }, id) {
    commit("setState", {
      changedState: "fetchingContribution",
      value: true,
    });

    const res = await getContribution(id);
    console.log("actionnn1234", res.data);

    if (res.success) {
      commit("setState", {
        changedState: "contribution",
        value: res.data,
      });

      commit("setState", {
        changedState: "fetchContError",
        value: {
          status: false,
          data: null,
        },
      });
    } else {
      commit("setState", {
        changedState: "fetchContError",
        value: {
          status: true,
          data: res,
        },
      });
    }
    commit("setState", {
      changedState: "fetchingContribution",
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
