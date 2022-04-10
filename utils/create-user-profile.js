import jwtDecode from "jwt-decode";

export default (loginData) => {
  const { access_token: accessToken, refresh_token: refreshToken } = loginData;
  return {
    token: {
      accessToken,
      refreshToken,
    },
    ...jwtDecode(accessToken),
  };
};
