import {
  GRID_NO_LIST,
  GRID_NUMBER,
  GRID_AREA,
  GRID_LAT,
  GRID_LANG,
  GRID_LATLANG,
  GRID_ADD,
  GRID_NO,
  GRID_LATLONG_REMOVE,
  RFI_APPROVAL,
  RFI_NO,
  RFI_APPROVAL_DATE,
  RFI_INSPECTION_DATE,
} from '../actions/types';

const initialState = {
  gridNoData: [],
  gridLatLong: [],
  approvalOptions: [
    { id: 'New', gridNo: 'New' },
    { id: 'Completed', gridNo: 'Completed' },
  ],
};

export default function(state = initialState, action) {
  console.log(`Grid reducer : ${action.type}`);
  console.log(`Grid reducer : ${JSON.stringify(action.payload)}`);
  switch (action.type) {
    case `${GRID_NO_LIST}_FULFILLED`:
      console.log(`GRID NO LIST : ${action.payload}`);
      return {
        ...state,
        gridNoData: action.payload.data,
      };
    case GRID_NUMBER:
      console.log(action.payload);
      return {
        ...state,
        gridNumber: action.payload,
      };
    case RFI_NO:
      console.log(action.payload);
      return {
        ...state,
        RFINumber: action.payload,
      };
    case GRID_AREA:
      console.log(action.payload);
      return {
        ...state,
        gridArea: action.payload,
      };
    case GRID_NO:
      console.log(action.payload);
      return {
        ...state,
        gridNo: action.payload,
      };
    case RFI_APPROVAL:
      console.log(action.payload);
      return {
        ...state,
        rfiApproval: action.payload,
      };
    case RFI_APPROVAL_DATE:
      console.log(action.payload);
      return {
        ...state,
        rfiApprovalDate: action.payload,
      };
    case RFI_INSPECTION_DATE:
      console.log(action.payload);
      return {
        ...state,
        rfiInspectionDate: action.payload,
      };
    case GRID_LATLANG:
      console.log(`In Grid latlang reducer: ${action.payload}`);
      return {
        ...state,
        gridLatLong: action.payload,
      };
    case `${GRID_ADD}_FULFILLED`:
      console.log(action.payload);
      return {
        ...state,
        gridAdd: action.payload,
      };
    case GRID_LATLONG_REMOVE:
      console.log(`In Grid latlang remove reducer: ${action.payload}`);
      return {
        ...state,
        gridLatLong: action.payload,
      };
    default:
      return state;
  }
}
