import {
  ADD_SUBCONTRACTOR,
  SUBCONTRACTOR_NAME,
  SUBCONTRACTOR_CODE,
  SUBCONTRACTOR_CONTACT_PERSON,
  SUBCONTRACTOR_CONTACT_ADDRESS,
  SUBCONTRACTOR_PHONE,
  SUBCONTRACTOR_EMAIL,
  RESET_SUBCONTRACTOR_FORM,
  LIST_SUBCONTRACTOR,
  DELETE_SUBCONTRACTOR,
  EDIT_SUBCONTRACTOR_DETAILS,
  EDIT_SUBCONTRACTOR,
  SUBCONTRACTOR_VALIDATION_ERROR,
} from '../actions/types';

const initialState = {
  subContractorAdd: {},
  subContractorName: '',
  message: '',
  listSCR: [],
  deleteSubContractor: { message: '' },
  editSubContractor: { message: '' },
  subContractorId: '',
  subContractorName: '',
  subContractorCode: '',
  subContractorContactPerson: '',
  subContractorContactAddres: '',
  subContractorPhone: '',
  subContractorEmail: '',
  isValidationErr: false,
  validationMessage: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case `${ADD_SUBCONTRACTOR}_FULFILLED`:
      return {
        ...state,
        subContractorAdd: action.payload,
        message: 'Sub Contractor Added Successfully',
        variant: 'success',
      };
    case `${ADD_SUBCONTRACTOR}_REJECTED`:
      return {
        ...state,
        subContractorAdd: action.payload,
        message: action.payload.response.data.message ?   
          action.payload.response.data.message: 'Error Occurred',
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
        isValidationErr: false,
        validationMessage: '',
      };

    case `${LIST_SUBCONTRACTOR}_FULFILLED`:
      console.log(`List SCR: ${action.payload.data}`);
      const listSCR = action.payload.data.map(e => ({
        subContractorCode: e.code,
        name: e.name,
      }));
      console.log(`List SCR: ${listSCR}`);
      return {
        ...state,
        listSCR,
        listSCRDetails: action.payload.data,
      };
    case `${DELETE_SUBCONTRACTOR}_FULFILLED`:
      console.log(action);
      return {
        ...state,
        deleteSubContractor: { message: 'Sub Contractor Added Successfully' },
        variant: 'success',
      };
    case `${DELETE_SUBCONTRACTOR}_REJECTED`:
      console.log(action);
      return {
        ...state,
        deleteSubContractor: { message: 'Error Occured' },
        variant: 'danger',
      };
    case `${EDIT_SUBCONTRACTOR}_FULFILLED`:
      console.log(action);
      return {
        ...state,
        editSubContractor: {
          message: 'Sub Contractor has been updated Successfully',
        },
        variant: 'success',
      };
    case `${EDIT_SUBCONTRACTOR}_REJECTED`:
      console.log(action);
      return {
        ...state,
        editSubContractor: { message: 'Error Occured' },
        variant: 'danger',
      };

    case EDIT_SUBCONTRACTOR_DETAILS:
      const selectedSCR = action.payload;
      console.log(`Edit SubContractor Details: ${JSON.stringify(selectedSCR)}`);
      return {
        ...state,
        subContractorId: selectedSCR.subContractorId,
        subContractorName: selectedSCR.name,
        subContractorCode: selectedSCR.code,
        subContractorContactPerson: selectedSCR.contact_person,
        subContractorContactAddress: selectedSCR.contact_address,
        subContractorPhone: selectedSCR.phone,
        subContractorEmail: selectedSCR.email,
      };
    case SUBCONTRACTOR_VALIDATION_ERROR:
      return {
        ...state,
        isValidationErr: action.payload.isError,
        validationMessage: action.payload.message,
      };
    default:
      return state;
  }
}
