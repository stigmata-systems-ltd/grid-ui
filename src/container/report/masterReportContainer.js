import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MasterReport from '../../pages/reports/MasterReport';
import store from '../../store';
import { fetchMasterReport } from '../../actions/reportActions';
import { propTypes } from 'react-bootstrap/esm/Image';

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchMasterReport() {
      dispatch(fetchMasterReport());
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
