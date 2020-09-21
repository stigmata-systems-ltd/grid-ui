import {
  LIST_SUBCONTRACTOR_REPORT,
  LIST_MASTER_REPORT,
} from '../actions/types';

const initialState = {
  listSubContractorReport: [],
  listMasterReport: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case `${LIST_SUBCONTRACTOR_REPORT}_FULFILLED`:
      return {
        ...state,
        listSubContractorReport: action.payload.data,
      };

    case `${LIST_SUBCONTRACTOR_REPORT}_REJECTED`:
      console.log(action);
      return {
        ...state,
        listSubContractorReport: [],
      };

    case `${LIST_MASTER_REPORT}_FULFILLED`:
      return {
        ...state,
        listMasterReport: action.payload.data,
      };

    case `${LIST_MASTER_REPORT}_REJECTED`:
      console.log(action);
      return {
        ...state,
        listMasterReport: [],
      };

    default:
      return state;
  }
}
