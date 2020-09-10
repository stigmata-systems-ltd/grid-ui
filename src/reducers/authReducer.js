import {
  SET_USERNAME,
  SET_PASSWORD,
  AUTHENTICATE_USER,
  SET_TOKEN,
  RESET_LOGIN_DETAILS,
} from "../actions/types";

const initialState = {
  username: "",
  password: "",
  isLoginError: false,
};

export default function (state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    case SET_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case `${AUTHENTICATE_USER}_PENDING`:
      return {
        ...state,
        isLoginLoading: true,
      };
    case `${AUTHENTICATE_USER}_FULLFILLED`:
      return {
        ...state,
        loginMessage: action.payload,
        isLoginLoading: false,
      };
    case `${AUTHENTICATE_USER}_REJECTED`:
      return {
        ...state,
        isLoginError: true,
        loginMessage: action.payload.response.data.errors.Password[0],
        isLoginLoading: false,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case RESET_LOGIN_DETAILS:
      return {
        ...state,
        username: "",
        password: "",
        isLoginError: false,
      };
    default:
      return state;
  }
}
