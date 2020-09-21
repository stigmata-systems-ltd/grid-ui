import { LIST_SUBCONTRACTOR_REPORT } from '../actions/types';

const initialState = {
  listSubContractorReport: [],
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

    default:
      return state;
  }
}
