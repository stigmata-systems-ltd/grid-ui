import axios from "axios";
import store from "../store";
import { SET_TOKEN } from "../actions/types";
import config from '../config';

export const isUserLoggedIn = () => {
  if (localStorage.getItem("refreshToken")) {
    return true;
  } else {
    return false;
  }
};

export const setAuthTokens = (userDetails) => {
  localStorage.setItem("userDetails", JSON.stringify(userDetails));
  localStorage.setItem("accessToken", JSON.stringify(userDetails.token));
  localStorage.setItem(
    "refreshToken",
    JSON.stringify(userDetails.refreshToken)
  );
};
export const logout = ({ history }) => {
  localStorage.removeItem("userDetails");
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  history.push("/");
};
export const setNewTokens = (access, refresh) => {
  localStorage.setItem("accessToken", JSON.stringify(access));
  localStorage.setItem("refreshToken", JSON.stringify(refresh));
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
  axios.interceptors.request.use((axiosConfig) => {
    axiosConfig.headers.Authorization = getAccessToken();
    return axiosConfig;
  });
};

export const setRespInterceptor = () => {
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        return axios
          .post(config.BASE_URL + "/api/Auth/refreshtoken", {
            token: getRefreshToken(),
          })
          .then((res) => {
            const resp = res.data;
            setNewTokens(resp.token, resp.refreshToken);

            // 2) Change Authorization header
            axios.defaults.headers.common["Authorization"] =
              "Bearer " + resp.token;

            // 3) return originalRequest object with Axios.
            return axios(originalRequest);
          })
          .catch(() => {
            window.location.assign("/login");
            localStorage.removeItem("userDetails");
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            store.dispatch({
              type: SET_TOKEN,
              payload: {
                token: "",
                isAuthenticated: false,
              },
            });
          });
      }
      return Promise.reject(error);
    }
  );
};
