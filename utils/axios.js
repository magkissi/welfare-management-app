import axios from "axios";
import { getHeaders } from "./common";
import store from "../src/store";

axios.interceptors.request.use((config) => {
  const headers = { ...config?.headers, ...getHeaders() };
  const updatedConfig = { ...config, headers };
  return updatedConfig;
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error.response);
    const { status } = error.response;
    if (status === 422) {
      store.dispatch("auth/logout");
    } else {
      throw error;
    }
    throw error;
  }
);

export default axios;
