import axios from "axios";
import store from "../store";

export const setAuthTokens = (userDetails) => {
  localStorage.setItem("userDetails", JSON.stringify(userDetails));
  localStorage.setItem("accessToken", JSON.stringify(userDetails.token));
  localStorage.setItem(
    "refreshToken",
    JSON.stringify(userDetails.refreshToken.token)
  );
};
export const logout = ({ history }) => {
  localStorage.removeItem("userDetails");
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  history.push("/");
};
export const getUserDetails = () => {
  return JSON.parse(localStorage.getItem("userDetails"));
};
export const getAccessToken = () => {
  return JSON.parse(localStorage.getItem("accessToken"));
};
export const getRefreshToken = () => {
  return JSON.parse(localStorage.getItem("refreshToken"));
};
export const setAuthHeader = () => {
  axios.interceptors.request.use(function (config) {
    const token = store.getState().auth.token;
    config.headers.Authorization = token;
    return config;
  });
};
