import { ADD_SUBCONTRACTOR, SUBCONTRACTOR_NAME } from '../actions/types';

const initialState = {
  subContractorAdd: {},
  subContractorName: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_SUBCONTRACTOR:
      return {
        ...state,
        subContractorAdd: action.payload,
      };
    case SUBCONTRACTOR_NAME:
      console.log('In Reducer');
      console.log(action.payload);
      return {
        ...state,
        subContractorName: action.payload,
      };
    default:
      return state;
  }
}
