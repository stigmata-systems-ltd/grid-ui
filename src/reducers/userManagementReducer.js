import {
  FIRST_NAME,
  LAST_NAME,
  EMAIL,
  MOBILE_NO,
  USERNAME,
  PASSWORD,
  ROLENAME,
  ADD_USER,
  RESET_CREATE_USER_FORM,
  GET_USERS,
  CHANGE_USER_CONFIRM_MODAL_STATUS,
  SET_SELECTED_USER,
  DELETE_USER,
} from "../actions/types";

const initialState = {
  addUser: {},
  roleList: [
    { id: "New", gridName: "New" },
    { id: "Completed", gridName: "Completed" },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FIRST_NAME:
      return {
        ...state,
        firstName: action.payload,
      };
    case LAST_NAME:
      return {
        ...state,
        lastName: action.payload,
      };
    case EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case MOBILE_NO:
      return {
        ...state,
        mobileNo: action.payload,
      };
    case USERNAME:
      return {
        ...state,
        userName: action.payload,
      };
    case PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case ROLENAME:
      return {
        ...state,
        roleName: action.payload,
      };
    case `${ADD_USER}_FULFILLED`:
      return {
        ...state,
        addUser: action.payload,
        variant: "success",
      };
    case `${ADD_USER}_REJECTED`:
      return {
        ...state,
        addUser: action.payload,
        variant: "danger",
      };
    case RESET_CREATE_USER_FORM:
      return {
        ...state,
        firstName: "",
        lastName: "",
        mobileNo: "",
        email: "",
        userName: "",
        password: "",
        roleName: "",
      };
    case `${GET_USERS}_PENDING`:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case `${GET_USERS}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
      };
    case `${GET_USERS}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: false,
        userList: action.payload.data,
      };
    case CHANGE_USER_CONFIRM_MODAL_STATUS:
      return {
        ...state,
        showDeleteConfirm: action.payload,
      };
    case SET_SELECTED_USER:
      return {
        ...state,
        selectedUser: action.payload,
      };
    case `${DELETE_USER}_PENDING`:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case `${DELETE_USER}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        message: action.payload.data.message
      };
    case `${DELETE_USER}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        message: action.payload.data.message
      };
    default:
      return state;
  }
}
