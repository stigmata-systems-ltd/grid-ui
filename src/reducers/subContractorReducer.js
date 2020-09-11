import {
  ADD_SUBCONTRACTOR,
  SUBCONTRACTOR_NAME,
  SUBCONTRACTOR_CODE,
  SUBCONTRACTOR_CONTACT_PERSON,
  SUBCONTRACTOR_CONTACT_ADDRESS,
  SUBCONTRACTOR_PHONE,
  SUBCONTRACTOR_EMAIL,
  RESET_SUBCONTRACTOR_FORM,
} from '../actions/types';

const initialState = {
  subContractorAdd: {},
  subContractorName: '',
  message: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case `${ADD_SUBCONTRACTOR}_FULFILLED`:
      console.log(action);
      return {
        ...state,
        subContractorAdd: action.payload,
        message: 'Sub Contractor Added Successfully',
        variant: 'success',
      };
    case `${ADD_SUBCONTRACTOR}_REJECTED`:
      console.log(action);
      return {
        ...state,
        subContractorAdd: action.payload,
        message: 'Error Occurred',
        variant: 'danger',
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
    case RESET_SUBCONTRACTOR_FORM:
      return {
        ...state,
        subContractorName: '',
        subContractorCode: '',
        subContractorContactPerson: '',
        subContractorContactAddres: '',
        subContractorPhone: '',
        subContractorEmail: '',
      };
    default:
      return state;
  }
}
