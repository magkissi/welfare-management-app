import axios from "axios";

export const postDepositAmount = async (payload) => {
  try {
    const token = localStorage.getItem("welfare_access");
    //console.log("apiiMember", token);
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const res = await axios.post(
      "https://welfare-api-staging.herokuapp.com/contributions",
      payload,
      { headers }
    );
    return {
      success: true,
      data: res.data.data,
    };
  } catch (error) {
    return {
      success: false,
      data: error,
    };
  }
};
