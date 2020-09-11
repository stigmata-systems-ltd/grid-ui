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
} from '../../actions/types';

const mapDispatchToProps = dispatch => {
  return {
    saveSubContractorData() {
      dispatch(addSubContractor());
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
    subContractorName: scr.subContractorName,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubContractor);
