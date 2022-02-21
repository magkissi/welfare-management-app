import { promisify } from "../../utils/promisify";
import { membership } from "../../utils/sampleData";

export const getMembershipDetails = async () => {
  try {
    const res = await promisify(membership);
    console.log("mem apiii", res);
    return {
      success: true,
      data: res,
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
    membership.unshift(payload);
    const res = await promisify(payload);
    console.log("apiiii", res);
    return {
      success: true,
      data: res,
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
