import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import DashBoard from "../../pages/dashboard/Dashoard";
import store from "../../store";
import {
  fetchDashBoardData,
  fetchDashBoardMapData,
  getGridList,
  getGridDetailsById,
} from "../../actions/dashBoardActions";
import { propTypes } from "react-bootstrap/esm/Image";
import {
  LIST_DASHBOARD_DETAILS,
  YEAR_CHECK,
  SIX_MONTH_CHECK,
  MONTH_CHECK,
  TILLDATE_CHECK,
  SET_DB_FROM_DATE,
  SET_DB_TO_DATE,
  ON_CHANGE_GRID,
} from "../../actions/types";
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchDashboadInitData() {
      dispatch(fetchDashBoardData());
      dispatch(fetchDashBoardMapData());
      dispatch(getGridList());
    },
    fetchDashBoardData() {
      dispatch(fetchDashBoardData());
    },
    fetchDashBoardMapData() {
      dispatch(fetchDashBoardMapData());
    },
    yearChange() {
      dispatch({
        type: YEAR_CHECK,
      });
      dispatch(fetchDashBoardData());
    },
    sixMonthChange() {
      dispatch({
        type: SIX_MONTH_CHECK,
      });
      dispatch(fetchDashBoardData());
    },
    monthChange() {
      dispatch({
        type: MONTH_CHECK,
      });
      dispatch(fetchDashBoardData());
    },
    tillDateChange() {
      dispatch({
        type: TILLDATE_CHECK,
      });
      dispatch(fetchDashBoardData());
    },
    customDateFrom(value) {
      const db = store.getState().db;
      dispatch({
        type: SET_DB_FROM_DATE,
        payload: value,
      });
      if (db.customDateTo !== "") {
        dispatch(fetchDashBoardData());
      }
    },
    customDateTo(value) {
      const db = store.getState().db;
      dispatch({
        type: SET_DB_TO_DATE,
        payload: value,
      });
      if (db.customDateFrom !== "") {
        dispatch(fetchDashBoardData());
      }
    },
    handleGridNoChange(obj) {
      dispatch({
        type: ON_CHANGE_GRID,
        payload: obj,
      });
      dispatch(getGridDetailsById(obj.value))
    }
  };
};

const mapStateToProps = (state) => {
  const db = store.getState().db;
  return {
    db,
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DashBoard)
);
