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
  async fetchAllContributions({ commit }, memberId) {
    commit("setState", {
      changedState: "fetchingAllContributions",
      value: true,
    });

    const res = await getAllContributions(memberId);
    console.log("actionnnfetchAll", res.data);

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

  async fetchContribution({ commit }) {
    commit("setState", {
      changedState: "fetchingContribution",
      value: true,
    });

    const res = await getContribution();
    console.log("actionnnfetchUnique", res.data);

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
