import { connect } from 'react-redux';
import EditSubContractor from '../../pages/subContractor/EditSubContractor';
import store from '../../store';
import { withRouter } from "react-router-dom";
import {
  addSubContractor,
  updateSubContractor,
  fetchSubContractor
} from '../../actions/subContractorActions';
import {
  ADD_SUBCONTRACTOR,
  SUBCONTRACTOR_NAME,
  SUBCONTRACTOR_CODE,
  SUBCONTRACTOR_CONTACT_PERSON,
  SUBCONTRACTOR_CONTACT_ADDRESS,
  SUBCONTRACTOR_PHONE,
  SUBCONTRACTOR_EMAIL,
  RESET_SUBCONTRACTOR_FORM,
} from '../../actions/types';

const mapDispatchToProps = (dispatch, props) => {
  return {
    updateSubContractor() {
      dispatch(updateSubContractor()).then(() => {
        dispatch({ type: RESET_SUBCONTRACTOR_FORM });
        dispatch(fetchSubContractor());
        props.history.push("/master/subcontractor/list");
      });
    },

    handleChangeSubName(value) {
      dispatch({
        type: SUBCONTRACTOR_NAME,
        payload: value,
      });
    },
    handleChangeSubCode(value) {
      dispatch({
        type: SUBCONTRACTOR_CODE,
        payload: value,
      });
    },
    handleChangesubContractorContactPerson(value) {
      dispatch({
        type: SUBCONTRACTOR_CONTACT_PERSON,
        payload: value,
      });
    },
    handleChangesubContactAddress(value) {
      dispatch({
        type: SUBCONTRACTOR_CONTACT_ADDRESS,
        payload: value,
      });
    },
    handleChangesubPhone(value) {
      dispatch({
        type: SUBCONTRACTOR_PHONE,
        payload: value,
      });
    },
    handleChangesubEmail(value) {
      dispatch({
        type: SUBCONTRACTOR_EMAIL,
        payload: value,
      });
    },
    resetSubContractorData() {
      dispatch({ type: RESET_SUBCONTRACTOR_FORM });
    },
  };
};

const mapStateToProps = state => {
  const scr = store.getState().scr;
  return {
    scr,
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditSubContractor));
