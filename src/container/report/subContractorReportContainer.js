import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SubContractorReport from '../../pages/reports/SubContractorReport';
import store from '../../store';
import { fetchSCRReport } from '../../actions/reportActions';
import {
  ADD_SUBCONTRACTOR,
  SUBCONTRACTOR_NAME,
  SUBCONTRACTOR_CODE,
  SUBCONTRACTOR_CONTACT_PERSON,
  SUBCONTRACTOR_CONTACT_ADDRESS,
  SUBCONTRACTOR_PHONE,
  SUBCONTRACTOR_EMAIL,
  RESET_SUBCONTRACTOR_FORM,
  FROM_DATE_SCR,
  TO_DATE_SCR,
} from '../../actions/types';
import { propTypes } from 'react-bootstrap/esm/Image';

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchSCRReport() {
      dispatch(fetchSCRReport());
    },
    handleFromDateChange(value) {
      dispatch({
        type: FROM_DATE_SCR,
        payload: value,
      });
      dispatch(fetchSCRReport());
    },
    handleToDateChange(value) {
      dispatch({
        type: TO_DATE_SCR,
        payload: value,
      });
      dispatch(fetchSCRReport());
    },
  };
};

const mapStateToProps = state => {
  const reports = store.getState().reports;
  return {
    reports,
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SubContractorReport)
);
