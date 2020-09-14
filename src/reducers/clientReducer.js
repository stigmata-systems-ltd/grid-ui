import {
  GET_CLIENT_GRID_LIST,
  SET_CLIENT_SELECTED_GRID,
  GET_LAYERS_FOR_BILLING,
} from "../actions/types";

const initialState = {
  gridList: [],
  isLoading: false,
  isError: false,
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
    default:
      return state;
  }
}
