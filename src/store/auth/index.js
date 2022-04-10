import { login, register, getUsers } from "../../api";
//import getUserProfile from "../../../utils/create-user-profile";

const state = {
  loginData: { email: null, password: null },
  sendingLoginData: false,
  sendLoginDataError: {},
  signUpData: { email: null, password: null, repeatPassword: null },
  sendingSignUpData: false,
  sendSignUpDataError: {},
  profile: null,
  users: null,
  fetchingUsers: false,
  fetchUsersError: {},
};
const getters = {
  login: (state) => state.loginData,
  register: (state) => state.signUpData,
  profile: (state) => state.profile,
};
const actions = {
  async sendSignUpData({ commit }, payload) {
    commit("setState", {
      changedState: "sendingSignUpData",
      value: true,
    });

    const res = await register(payload);
    console.log("actionnnupdate---", res.data);

    if (res.status == 200) {
      commit("setState", {
        changedState: "signUpData",
        value: res.data,
      });

      commit("setState", {
        changedState: "sendSignUpDataError",
        value: {
          status: false,
          data: null,
        },
      });
    } else {
      commit("setState", {
        changedState: "sendSignUpDataError",
        value: {
          status: true,
          data: res,
        },
      });
    }
    commit("setState", {
      changedState: "sendingSignUpData",
      value: false,
    });
  },
  async fetchUsers({ commit }) {
    commit("setState", {
      changedState: "fetchingUser",
      value: true,
    });

    const res = await getUsers();
    console.log("actionnnUsers---", res.data);

    if (res.status == 200) {
      commit("setState", {
        changedState: "users",
        value: res.data,
      });

      commit("setState", {
        changedState: "fetchUsersError",
        value: {
          status: false,
          data: null,
        },
      });
    } else {
      commit("setState", {
        changedState: "fetchUsersError",
        value: {
          status: true,
          data: res,
        },
      });
    }
    commit("setState", {
      changedState: "fetchingUsers",
      value: false,
    });
  },
  async sendLoginData({ commit }, payload) {
    commit("setState", {
      changedState: "sendingSignUpData",
      value: true,
    });

    const res = await login(payload);
    console.log("actionnnupdate---", res.data);

    if (res.status == 200) {
      commit("setState", {
        changedState: "loginData",
        value: res.data,
      });

      commit("setState", {
        changedState: "sendLoginDataError",
        value: {
          status: false,
          data: null,
        },
      });
    } else {
      commit("setState", {
        changedState: "sendLoginDataError",
        value: {
          status: true,
          message: res.data,
        },
      });
    }
    commit("setState", {
      changedState: "sendingLoginData",
      value: false,
    });
    // const user = getUserProfile(res.data);
    // commit("setState", {
    //   changedState: "profile",
    //   value: user,
    // });
  },
  // async logout({ commit }) {
  //   commit("setState", {
  //     changedState: "profile",
  //     value: null,
  //   });

  //   window.location = "/";
  // },
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
