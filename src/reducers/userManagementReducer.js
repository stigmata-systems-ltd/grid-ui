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
  SHOW_ADD_USER_MSG,
  GET_SINGLE_USER,
  SET_USER_EDIT_MODE,
  UPDATE_USER,
  REMOVE_MODAL_ERROR_MSG,
} from "../actions/types";

const initialState = {
  message: "",
  userList: [],
  userRoles: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  isModalError: false,
  isAddUserMsg: false,
  singleUser: {},
  isEditMode: false,
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
        isModalMsg: false,
      };
    case `${ADD_USER}_REJECTED`:
      return {
        ...state,
        message:
          action.payload.response && action.payload.response.data
            ? action.payload.response.data.message
            : "Please check your form data and retry",
        isLoading: false,
        isError: true,
        isSuccess: false,
        isModalMsg: true,
      };
    case `${ADD_USER}_FULFILLED`:
      return {
        ...state,
        message: action.payload.data.message,
        isLoading: false,
        isError: false,
        isSuccess: true,
        isModalMsg: false,
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
    case SHOW_ADD_USER_MSG:
      return {
        ...state,
        isAddUserMsg: action.payload,
      };
    case `${GET_SINGLE_USER}_PENDING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${GET_SINGLE_USER}_REJECTED`:
      return {
        ...state,
        isLoading: false,
      };
    case `${GET_SINGLE_USER}_FULFILLED`:
      const user = action.payload.data;
      return {
        ...state,
        isLoading: false,
        singleUser: user,
        userId: user.userId,
        firstName: user.firstName,
        lastName: user.lastName,
        mobileNo: user.mobileNo,
        email: user.email,
        userName: user.userName,
        roleName: user.roleId,
      };
    case SET_USER_EDIT_MODE:
      return {
        ...state,
        isEditMode: action.payload,
      };
    case `${UPDATE_USER}_PENDING`:
      return {
        ...state,
        isLoading: true,
        isModalMsg: false,
      };
    case `${UPDATE_USER}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        isModalMsg: true,
        message:
          action.payload.response && action.payload.response.data
            ? action.payload.response.data.message
            : "Please check your form data and retry",
      };
    case `${UPDATE_USER}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        isModalMsg: false,
        message: action.payload.data.message,
      };
    case REMOVE_MODAL_ERROR_MSG:
      return {
        ...state,
        isModalMsg: action.payload,
      };

    default:
      return state;
  }
}
