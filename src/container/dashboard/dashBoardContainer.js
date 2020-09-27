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
import {
  LIST_DASHBOARD_DETAILS,
  YEAR_CHECK,
  SIX_MONTH_CHECK,
  MONTH_CHECK,
  TILLDATE_CHECK,
} from '../../actions/types';
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchDashBoardData() {
      dispatch(fetchDashBoardData());
    },
    yearChange() {
      console.log(`YearChange`);
      dispatch({
        type: YEAR_CHECK,
      });
      dispatch(fetchDashBoardData());
    },
    sixMonthChange() {
      console.log(`sixMonthChange`);
      dispatch({
        type: SIX_MONTH_CHECK,
      });
      dispatch(fetchDashBoardData());
    },
    monthChange() {
      console.log(`monthChange`);
      dispatch({
        type: MONTH_CHECK,
      });
      dispatch(fetchDashBoardData());
    },
    tillDateChange() {
      console.log(`tillDateChange`);
      dispatch({
        type: TILLDATE_CHECK,
      });
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
