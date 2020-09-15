import { connect } from 'react-redux';
import SubContractor from '../../pages/subContractor/SubContractor';
import store from '../../store';
import { addSubContractor } from '../../actions/subContractorActions';
import {
  ADD_SUBCONTRACTOR,
  SUBCONTRACTOR_NAME,
  SUBCONTRACTOR_CODE,
  SUBCONTRACTOR_CONTACT_PERSON,
  SUBCONTRACTOR_CONTACT_ADDRESS,
  SUBCONTRACTOR_PHONE,
  SUBCONTRACTOR_EMAIL,
  RESET_SUBCONTRACTOR_FORM,
  SUBCONTRACTOR_VALIDATION_ERROR,
} from '../../actions/types';
import { validate } from "./SubContractorValidation";

const mapDispatchToProps = dispatch => {
  return {
    saveSubContractorData() {
      const scr = store.getState().scr;
      const validation = validate(scr);
      if( validation.error === null){
        dispatch(addSubContractor());
        dispatch({ type: RESET_SUBCONTRACTOR_FORM });
      } else {
        dispatch({ 
          type: SUBCONTRACTOR_VALIDATION_ERROR,
          payload: {
            isError: true,
            message: validation.error.details[0].message,
          }
         });
      }

    },

    handleChangeSubName(value) {
      dispatch({
        type: SUBCONTRACTOR_NAME,
        payload: value,
      });
      dispatch({ 
        type: SUBCONTRACTOR_VALIDATION_ERROR,
        payload: {
          isError: false,
          message: "",
        }
       });
    },
    handleChangeSubCode(value) {
      dispatch({
        type: SUBCONTRACTOR_CODE,
        payload: value,
      });
      dispatch({ 
        type: SUBCONTRACTOR_VALIDATION_ERROR,
        payload: {
          isError: false,
          message: "",
        }
       });
    },
    handleChangesubContractorContactPerson(value) {
      dispatch({
        type: SUBCONTRACTOR_CONTACT_PERSON,
        payload: value,
      });
      dispatch({ 
        type: SUBCONTRACTOR_VALIDATION_ERROR,
        payload: {
          isError: false,
          message: "",
        }
       });
    },
    handleChangesubContactAddress(value) {
      dispatch({
        type: SUBCONTRACTOR_CONTACT_ADDRESS,
        payload: value,
      });
      dispatch({ 
        type: SUBCONTRACTOR_VALIDATION_ERROR,
        payload: {
          isError: false,
          message: "",
        }
       });
    },
    handleChangesubPhone(value) {
      dispatch({
        type: SUBCONTRACTOR_PHONE,
        payload: value,
      });
      dispatch({ 
        type: SUBCONTRACTOR_VALIDATION_ERROR,
        payload: {
          isError: false,
          message: "",
        }
       });
    },
    handleChangesubEmail(value) {
      dispatch({
        type: SUBCONTRACTOR_EMAIL,
        payload: value,
      });
      dispatch({ 
        type: SUBCONTRACTOR_VALIDATION_ERROR,
        payload: {
          isError: false,
          message: "",
        }
       });
    },
  };
};

const mapStateToProps = state => {
  const scr = store.getState().scr;
  return {
    scr,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubContractor);
