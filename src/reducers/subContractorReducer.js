import {
  ADD_SUBCONTRACTOR,
  SUBCONTRACTOR_NAME,
  SUBCONTRACTOR_CODE,
  SUBCONTRACTOR_CONTACT_PERSON,
  SUBCONTRACTOR_CONTACT_ADDRESS,
  SUBCONTRACTOR_PHONE,
  SUBCONTRACTOR_EMAIL,
} from '../actions/types';

const initialState = {
  subContractorAdd: {},
  subContractorName: '',
};

export default function(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case ADD_SUBCONTRACTOR:
      console.log(action);
      return {
        ...state,
        subContractorAdd: action.payload,
      };
    case SUBCONTRACTOR_NAME:
      return {
        ...state,
        subContractorName: action.payload,
      };
    case SUBCONTRACTOR_CODE:
      return {
        ...state,
        subContractorCode: action.payload,
      };
    case SUBCONTRACTOR_CONTACT_PERSON:
      return {
        ...state,
        subContractorContactPerson: action.payload,
      };
    case SUBCONTRACTOR_CONTACT_ADDRESS:
      return {
        ...state,
        subContractorContactAddres: action.payload,
      };
    case SUBCONTRACTOR_PHONE:
      return {
        ...state,
        subContractorPhone: action.payload,
      };
    case SUBCONTRACTOR_EMAIL:
      return {
        ...state,
        subContractorEmail: action.payload,
      };
    default:
      return state;
  }
}
