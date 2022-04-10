import { postDepositAmount } from "../../api/actions";

const state = {
  deposit: null,
  addingDeposit: false,
  addingDepositError: {},
};
const getters = {};
const actions = {
  async addNewDeposit({ commit }, payload) {
    commit("setState", {
      changedState: "addingDeposit",
      value: true,
    });

    const res = await postDepositAmount(payload);
    console.log("action---payload", payload);
    console.log("action---", res.data);
    if (res.success) {
      commit("setState", {
        changedState: "deposit",
        value: res.data,
      });

      commit("setState", {
        changedState: "addingDepositError",
        value: {
          status: false,
          data: null,
        },
      });
    } else {
      commit("setState", {
        changedState: "addingDepositError",
        value: {
          status: true,
          data: res,
        },
      });
    }
    commit("setState", {
      changedState: "addingDeposit",
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
  actions,
  getters,
  mutations,
  namespaced: true,
};
