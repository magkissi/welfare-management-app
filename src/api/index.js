import { getDashboardInfo } from "./dashboard";
import {
  getMembershipDetails,
  getMemberDetails,
  postNewMember,
  deleteMember,
} from "./membership";
import {
  getAllContributions,
  getContribution,
  addDepositToCont,
} from "./contributions";
import { postDepositAmount } from "./actions";
import { login, register, getUsers, getUser } from "./auth";

export {
  getDashboardInfo,
  getMembershipDetails,
  postNewMember,
  getAllContributions,
  getContribution,
  postDepositAmount,
  addDepositToCont,
  login,
  register,
  deleteMember,
  getUsers,
  getMemberDetails,
  getUser,
};
