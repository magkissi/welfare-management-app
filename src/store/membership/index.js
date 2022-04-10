import {
  getMembershipDetails,
  postNewMember,
  deleteMember,
  getMemberDetails,
} from "../../api";

const state = {
  membershipDetails: null,
  fetchingMembershipDetails: false,
  fetchMembershipDetailsError: {},
  memberDetails: null,
  fetchingMemberDetails: false,
  fetchMemberDetailsError: {},
  newMember: null,
  addingNewMember: false,
  addNewMemberError: {},
  deletedMembershipDetails: null,
  deletingMembershipDetails: false,
  deleteMembershipDetailsError: {},
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

  async fetchMemberDetails({ commit }, id) {
    commit("setState", {
      changedState: "fetchingMemberDetails",
      value: true,
    });

    const res = await getMemberDetails(id);
    console.log("actionnn", res.data);

    if (res.success) {
      commit("setState", {
        changedState: "memberDetails",
        value: res.data,
      });
      commit("setState", {
        changedState: "fetchMemberDetailsError",
        value: {
          status: false,
          data: null,
        },
      });
    } else {
      commit("setState", {
        changedState: "fetchMemberDetailsError",
        value: {
          status: true,
          data: res,
        },
      });
    }
    commit("setState", {
      changedState: "fetchingMemberDetails",
      value: false,
    });
  },

  async addNewMember({ commit }, payload) {
    commit("setState", {
      changedState: "addingNewMember",
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
        changedState: "addNewMemberError",
        value: {
          status: false,
          data: null,
        },
      });
    } else {
      commit("setState", {
        changedState: "addNewMemberError",
        value: {
          status: true,
          data: res,
        },
      });
    }
    commit("setState", {
      changedState: "addingNewMember",
      value: false,
    });
  },

  async removeMember({ commit }, id) {
    commit("setState", {
      changedState: "deletingMembershipDetails",
      value: true,
    });

    const res = await deleteMember(id);
    console.log("actionnnDeleteID", res.data);

    if (res.success) {
      commit("setState", {
        changedState: "deletedMembershipDetails",
        value: res.data,
      });
      commit("setState", {
        changedState: "deleteMembershipDetailsError",
        value: {
          status: false,
          data: null,
        },
      });
    } else {
      commit("setState", {
        changedState: "deleteMembershipDetailsError",
        value: {
          status: true,
          data: res,
        },
      });
    }
    commit("setState", {
      changedState: "deletingMembershipDetails",
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
