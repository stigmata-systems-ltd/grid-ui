import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DashBoard from '../../pages/dashboard/Dashoard';
import store from '../../store';
import {
  fetchLayerData,
  approveLayer,
} from '../../actions/planningManagerActions';
import { fetchDashBoardData } from '../../actions/dashBoardActions';
import { propTypes } from 'react-bootstrap/esm/Image';

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchDashBoardData() {
      dispatch(fetchDashBoardData());
    },
  };
};

const mapStateToProps = state => {
  const db = store.getState().db;
  return {
    db,
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DashBoard)
);
