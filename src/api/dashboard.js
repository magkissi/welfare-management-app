import { promisify } from "../../utils/promisify";
import { dashboardInfo } from "../../utils/sampleData";

export const getDashboardInfo = async () => {
  try {
    const res = await promisify(dashboardInfo);
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
