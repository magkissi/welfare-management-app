export const getHeaders = () => {
  const requiredHeaders = {};
  requiredHeaders["Content-Type"] = "application/json";
  if (getValidUser()) {
    const { token } = getValidUser();
    if (token) {
      requiredHeaders.Authorization = `Bearer ${token}`;
    }
  }
  return requiredHeaders;
};

export const getValidUser = () => {
  //console.log("token***", localStorage.getItem("welfare_access"));
  const accessDetails = JSON.parse(localStorage.getItem("welfare_access"));
  if (accessDetails.token) {
    return accessDetails;
  }
  return false;
};
