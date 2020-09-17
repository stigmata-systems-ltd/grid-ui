import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import ListSubContractor from '../../pages/subContractor/ListSubContractor';
import store from '../../store';
import {
  addSubContractor,
  fetchSubContractor,
  deleteSCR,
  editSCR,
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
import { propTypes } from 'react-bootstrap/esm/Image';

const mapDispatchToProps = (dispatch, props) => {
  return {
    saveSubContractorData() {
      dispatch(addSubContractor());
      dispatch({ type: RESET_SUBCONTRACTOR_FORM });
    },
    fetchSCRData() {
      dispatch(fetchSubContractor());
    },
    deleteSCR(i) {
      dispatch(deleteSCR(i)).then(() => {
        dispatch(fetchSubContractor());
      });
    },
    editSCR(i) {
      dispatch(editSCR(i));
      props.history.push("/subcontractor/edit");
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
  };
};

const mapStateToProps = state => {
  const scr = store.getState().scr;
  return {
    scr,
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListSubContractor));
