// import { promisify } from "../../utils/promisify";
// import { dashboardInfo } from "../../utils/sampleData";
import axios from "axios";

export const getDashboardInfo = async () => {
  try {
    let mainData = [];
    const res = await axios.get("http://localhost:1337/api/dashboards");
    const resData = res.data.data;
    resData.forEach((item) => mainData.push(item.attributes));
    console.log("apiiii", resData);
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
