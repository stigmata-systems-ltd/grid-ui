import {
  GET_CLIENT_GRID_LIST,
  SET_CLIENT_SELECTED_GRID,
  GET_LAYERS_FOR_BILLING,
  SET_TRANS_BILLABLE_LAYERS,
  SET_BILLABLE_TABLE_DATA,
  SET_ADD_BILLABLE_ERROR,
  SET_BILLING_MONTH,
  SET_IPC_NUM,
  RESET_BILLING_FORM,
} from "../actions/types";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
  gridList: [],
  selectedGrid: "",
  billableLayers: [],
  billableTableData: [],
  billabelAddError: "",
  billingMonth: "",
  ipcNum: "",
};
export default function (state = initialState, action) {
  switch (action.type) {
    case `${GET_CLIENT_GRID_LIST}_PENDING`:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case `${GET_CLIENT_GRID_LIST}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case `${GET_CLIENT_GRID_LIST}_FULFILLED`:
      return {
        ...state,
        gridList: action.payload.data,
        isLoading: false,
        isError: false,
      };
    case SET_CLIENT_SELECTED_GRID:
      return {
        ...state,
        selectedGrid: action.payload,
      };
    case `${GET_LAYERS_FOR_BILLING}_PENDING`:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case `${GET_LAYERS_FOR_BILLING}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        message: action.payload.data,
      };
    case `${GET_LAYERS_FOR_BILLING}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isError: false,
        billableLayers: action.payload.data,
      };
    case SET_TRANS_BILLABLE_LAYERS:
      return {
        ...state,
        billableLayers: action.payload,
      };
    case SET_BILLABLE_TABLE_DATA:
      return {
        ...state,
        billableTableData: action.payload,
      };
    case SET_ADD_BILLABLE_ERROR:
      return {
        ...state,
        billabelAddError: action.payload,
      };
    case SET_BILLING_MONTH:
      return {
        ...state,
        billingMonth: action.payload,
      };
    case SET_IPC_NUM:
      return {
        ...state,
        ipcNum: action.payload,
      };
    case RESET_BILLING_FORM:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: false,
        message: "",
        selectedGrid: "",
        billableLayers: [],
        billableTableData: [],
        billabelAddError: "",
        billingMonth: "",
        ipcNum: "",
      };
    default:
      return state;
  }
}
