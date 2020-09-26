import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MasterReport from '../../pages/reports/MasterReport';
import store from '../../store';
import { fetchMasterReport } from '../../actions/reportActions';
import { propTypes } from 'react-bootstrap/esm/Image';
import { FROM_DATE_MASTER, TO_DATE_MASTER } from '../../actions/types';
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchMasterReport() {
      dispatch(fetchMasterReport());
    },
    handleFromDateChange(value) {
      dispatch({
        type: FROM_DATE_MASTER,
        payload: value,
      });
      dispatch(fetchMasterReport());
    },
    handleToDateChange(value) {
      dispatch({
        type: TO_DATE_MASTER,
        payload: value,
      });
      dispatch(fetchMasterReport());
    },
    resetDate() {
      dispatch({
        type: FROM_DATE_MASTER,
        payload: '',
      });
      dispatch({
        type: TO_DATE_MASTER,
        payload: '',
      });
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
  connect(mapStateToProps, mapDispatchToProps)(MasterReport)
);
