import axios from "axios";
import qs from "qs";

export const getAllContributions = async () => {
  try {
    let mainData = [];
    const res = await axios.get("http://localhost:1337/api/contributions");
    console.log("newwww", res.data.data);
    const resData = res.data.data;
    resData.forEach((item) => mainData.push(item.attributes));
    console.log("mainnn", mainData);
    return {
      success: true,
      data: mainData,
    };
  } catch (error) {
    return {
      success: false,
      data: error,
    };
  }
};

export const getContribution = async (memberIdentity) => {
  console.log("api iddd", memberIdentity);
  try {
    const query = qs.stringify({
      filters: {
        memberId: {
          $eq: memberIdentity,
        },
      },
    });
    console.log("eq", query);
    let mainData = [];
    const res = await axios.get(`http://localhost:1337/api/actions?${query}`);

    const resData = res.data.data;
    resData.forEach((item) => mainData.push(item.attributes));
    console.log("mainn", mainData);
    return {
      success: true,
      data: mainData,
    };
  } catch (error) {
    return {
      success: false,
      data: error,
    };
  }
};
