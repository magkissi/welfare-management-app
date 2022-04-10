import {
  getAllContributions,
  getContribution,
  addDepositToCont,
} from "../../api";

const state = {
  allContributions: null,
  fetchingAllContributions: false,
  fetchAllContError: {},
  contribution: null,
  fetchingContribution: false,
  fetchContError: {},
  addedDepositToCont: null,
  addingDepositToCont: false,
  fetchAddedDepositToContError: {},
};
const getters = {};
const actions = {
  async fetchAllContributions({ commit }) {
    commit("setState", {
      changedState: "fetchingAllContributions",
      value: true,
    });

    const res = await getAllContributions();

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

  async fetchContribution({ commit }, memberId) {
    commit("setState", {
      changedState: "fetchingContribution",
      value: true,
    });
    console.log("actionnnnid", memberId);
    const res = await getContribution(memberId);
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

  async addDepositToContribution({ commit }, payload) {
    commit("setState", {
      changedState: "addingDepositToCont",
      value: true,
    });

    const res = await addDepositToCont(payload);
    console.log("actionnnupdate---", res.data);

    if (res.success) {
      commit("setState", {
        changedState: "addedDepositToCont",
        value: res.data,
      });

      commit("setState", {
        changedState: "fetchAddedDepositToContError",
        value: {
          status: false,
          data: null,
        },
      });
    } else {
      commit("setState", {
        changedState: "fetchAddedDepositToContError",
        value: {
          status: true,
          data: res,
        },
      });
    }
    commit("setState", {
      changedState: "addingDepositToCont",
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
