import axios from "axios";

export const getMembershipDetails = async () => {
  try {
    const res = await axios.get("http://localhost:1337/api/memberships");
    const mainData = [];
    const resData = res.data.data;
    resData.forEach((item) => mainData.push(item.attributes));
    console.log("apiii", res.data.data);
    console.log("apiiiineww", mainData);
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

export const postNewMember = async (payload) => {
  try {
    const res = await axios.post(
      "http://localhost:1337/api/memberships",
      payload
    );
    console.log("apiiii", res.data);
    return {
      success: true,
      data: res.data,
    };
  } catch (error) {
    return {
      success: false,
      data: error,
    };
  }
};

// export const deleteNewMember = async () => {
//   try {
//     return {
//       success: true,
//       data: res,
//     };
//   } catch (error) {
//     return {
//       success: false,
//       data: error,
//     };
//   }
// };
