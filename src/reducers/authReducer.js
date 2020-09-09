import {
  SET_USERNAME,
  SET_PASSWORD,
  AUTHENTICATE_USER,
  SET_TOKEN,
} from "../actions/types";

const initialState = {
  subContractorAdd: {},
  subContractorName: "",
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
        isLoginLoading: false
      };
    case `${AUTHENTICATE_USER}_REJECTED`:
      return {
        ...state,
        loginMessage: action.payload.response.data.errors,
        isLoginLoading: false,
      };
      case SET_TOKEN:
        return {
          ...state,
          token: action.payload
        };
    default:
      return state;
  }
}
