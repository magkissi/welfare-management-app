import axios from "../../utils/axios";
// import qs from "qs";

//for summary
export const getAllContributions = async () => {
  try {
    const res = await axios.get(
      "https://welfare-api-staging.herokuapp.com/contributions"
    );

    console.log("apiiGetAlll", res.data.data);
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

export const addDepositToCont = async (payload) => {
  try {
    const res = await axios.post(
      "https://welfare-api-staging.herokuapp.com/contributions",
      payload
    );
    console.log("apiiiiAddCont---", res.data.mainData);
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

//for statement
export const getContribution = async (memberIdentity) => {
  console.log("api iddd", memberIdentity);
  try {
    const res = await axios.get(
      "https://welfare-api-staging.herokuapp.com/contributions",
      memberIdentity
    );
    console.log("getSpecific", res.data.data);
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
