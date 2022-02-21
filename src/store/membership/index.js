import { getMembershipDetails, postNewMember } from "../../api";

const state = {
  membershipDetails: null,
  fetchingMembershipDetails: false,
  fetchMembershipDetailsError: {},
  newMember: null,
  fetchingNewMember: false,
  fetchNewMemberError: {},
};
const getters = {};
const actions = {
  async fetchMembershipDetails({ commit }) {
    commit("setState", {
      changedState: "fetchingMembershipDetails",
      value: true,
    });

    const res = await getMembershipDetails();
    console.log("actionnn", res.data);

    if (res.success) {
      commit("setState", {
        changedState: "membershipDetails",
        value: res.data,
      });
      commit("setState", {
        changedState: "fetchMembershipDetailsError",
        value: {
          status: false,
          data: null,
        },
      });
    } else {
      commit("setState", {
        changedState: "fetchMembershipDetailsError",
        value: {
          status: true,
          data: res,
        },
      });
    }
    commit("setState", {
      changedState: "fetchingMembershipDetails",
      value: false,
    });
  },

  async addNewMember({ commit }, payload) {
    commit("setState", {
      changedState: "fetchingNewMember",
      value: true,
    });
    const res = await postNewMember(payload);
    console.log("actionnew", res.data);

    if (res.success) {
      commit("setState", {
        changedState: "newMember",
        value: res.data,
      });
      commit("setState", {
        changedState: "fetchingNewMemberError",
        value: {
          status: false,
          data: null,
        },
      });
    } else {
      commit("setState", {
        changedState: "fetchingNewMemberError",
        value: {
          status: true,
          data: res,
        },
      });
    }
    commit("setState", {
      changedState: "fetchingNewMember",
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
