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
  CHANGE_ADD_USER_MODAL_STATUS,
  GET_USER_ROLES,
} from "../actions/types";

const initialState = {
  addUser: {},
  userRoles: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
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
      case `${ADD_USER}_PENDING`:
        return {
          ...state,
          isLoading: false,
          isError: false,
          isSuccess: true,
        };
        case `${ADD_USER}_REJECTED`:
      return {
        ...state,
        addUser: action.payload.message,
        isLoading: false,
        isError: true,
        isSuccess: false,
      };
    case `${ADD_USER}_FULFILLED`:
      return {
        ...state,
        addUser: action.payload.message,
        isLoading: false,
        isError: false,
        isSuccess: true,
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
        message: action.payload.data.message,
      };
    case `${DELETE_USER}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        message: action.payload.data.message,
      };
    case CHANGE_ADD_USER_MODAL_STATUS:
      return {
        ...state,
        showAddUserModal: action.payload,
      };
    case `${GET_USER_ROLES}_PENDING`:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case `${GET_USER_ROLES}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: false,
      };
    case `${GET_USER_ROLES}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isError: false,
        userRoles: action.payload.data,
      };
    default:
      return state;
  }
}
