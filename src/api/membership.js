import axios from "../../utils/axios";

const url = process.env.VUE_APP_BASE_URL;

export const getMembershipDetails = async () => {
  try {
    const res = await axios.get(`${url}/members`);

    console.log("apiiiinewwget", res.data.data);
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
export const getMemberDetails = async (memberId) => {
  console.log("appiiiMemberId", memberId);
  try {
    const params = {
      memberId: memberId,
    };
    const res = await axios.get(`${url}/members`, { params });

    console.log("apiiiinewwget", res.data.data);
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
export const postNewMember = async (payload) => {
  try {
    const res = await axios.post(`${url}/members`, payload);

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

export const deleteMember = async (id) => {
  try {
    console.log("apiiDeleteId", id);
    const res = axios.delete(`${url}/members/${id}`);
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
