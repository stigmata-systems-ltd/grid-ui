import { GRID_NO_LIST, GRID_NUMBER, GRID_AREA } from '../actions/types';

const initialState = {
  gridNoData: [],
};

export default function(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case GRID_NO_LIST:
      console.log(action.payload);
      return {
        ...state,
        gridNoData: action.payload,
      };
    case GRID_NUMBER:
      console.log(action.payload);
      return {
        ...state,
        gridNumber: action.payload,
      };
    case GRID_AREA:
      console.log(action.payload);
      return {
        ...state,
        gridArea: action.payload,
      };
    default:
      return state;
  }
}
