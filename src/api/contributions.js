import { contributions } from "../../utils/sampleData";
import { promisify } from "../../utils/promisify";

export const getAllContributions = async () => {
  try {
    const uniqueIds = [
      ...new Set(contributions.map((item) => item.membership_ID)),
    ];
    let uniqueData = [];

    uniqueIds.forEach((item) => {
      uniqueData.push({
        membership_ID: item,
        name: "Benjamin Kuma",
        total_contribution: 10000,
        total_redrawal: 2000,
        balance: 5000,
      });
    });
    //let amount = [];
    // const amount = uniqueData.forEach((item) => {
    //   contributions.forEach((user) => {
    //     if (user.membership_ID == item.membership_ID) {
    //       return user;
    //     }
    //   });
    // });
    // console.log("amlunttt", amount);

    console.log("newwww", uniqueData);
    console.log("apiii", uniqueIds);
    const res = await promisify(uniqueData);

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

export const getContribution = async (id) => {
  try {
    let fitered = [];

    contributions.forEach((item) => {
      console.log("fiteridd", item.membership_ID);
      if (item.membership_ID == id) {
        return fitered.push(item);
      }
    });

    const res = await promisify(fitered);

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
