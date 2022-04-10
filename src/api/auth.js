import axios from "axios";

const url = process.env.VUE_APP_BASE_URL;

export const login = async (data) => {
  try {
    const { data: signInData } = await axios.post(
      `${url}/authentication`,
      data
    );
    console.log("apiiitoken", signInData);
    // console.log("apiiitoken", signInData.accessToken);
    localStorage.setItem(
      "welfare_access",
      JSON.stringify({
        token: signInData.accessToken,
      })
    );
    return {
      status: 200,
      data: signInData,
    };
  } catch (error) {
    return {
      data: error.response.data.message,
      status: error.response.code,
    };
  }
};

export const register = async (data) => {
  try {
    const { data: singUpData } = await axios.post(`${url}/users`, data);
    console.log("apiiiresgister", singUpData);
    return {
      status: 200,
      data: singUpData,
    };
  } catch (error) {
    return {
      data: error.response.data.detail,
      status: error.response.status,
    };
  }
};

export const getUsers = async () => {
  try {
    const { data: usersData } = await axios.get(`${url}/users`);
    console.log("apiiiresgister", usersData);
    return {
      status: 200,
      data: usersData,
    };
  } catch (error) {
    return {
      data: error.response.data.detail,
      status: error.response.status,
    };
  }
};

export const getUser = async (id) => {
  try {
    const { data: userData } = await axios.get(`${url}/users/${id}`);
    console.log("apiiiresgistedUser", userData);
    return {
      status: 200,
      data: userData,
    };
  } catch (error) {
    return {
      data: error.response.data.detail,
      status: error.response.status,
    };
  }
};
// export const forgotPass = async (payload) => {
//   try {
//     const { data } = await axios.post("/forgot-password", payload);
//     return {
//       status: 200,
//       data,
//     };
//   } catch (error) {
//     return {
//       data: error.response.data.detail,
//       status: error.response.status,
//     };
//   }
// };

// export const resetPass = async (payload, resetCode) => {
//   try {
//     const { data } = await axios.post(
//       `/reset_password?reset_code=${resetCode}`,
//       payload
//     );
//     return {
//       status: 200,
//       data,
//     };
//   } catch (error) {
//     return {
//       data: error.response.data.detail,
//       status: error.response.status,
//     };
//   }
// };

// export const getUserProfileDetails = async () => {
//   try {
//     const { data } = await axios.get("/users/profile");
//     return data;
//   } catch (error) {
//     return {
//       data: error.response.data.detail,
//       status: error.response.status,
//     };
//   }
// };

// export const changePassword = async (payload) => {
//   try {
//     const res = await axios.post("/user/update-password", payload);

//     return {
//       success: true,
//       data: res.data,
//     };
//   } catch (error) {
//     return {
//       success: false,
//       data: error,
//     };
//   }
// };
