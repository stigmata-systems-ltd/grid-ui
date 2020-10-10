import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import LayerMapReport from "../../pages/reports/LayerMapReport";
import store from "../../store";
import { layerNoList, getLayerWiseMap } from "../../actions/reportActions";
import {
  CHANGE_LAYER_NUM_REPORT_MAP,
} from "../../actions/types";
const mapDispatchToProps = (dispatch, props) => {
  return {
    reportMapInitData() {
        dispatch(getLayerWiseMap());
        dispatch(layerNoList());
    },
    handleLayerNoChangeReport(obj) {
      dispatch({
        type: CHANGE_LAYER_NUM_REPORT_MAP,
        payload: obj
      })
      dispatch(getLayerWiseMap(obj));
    }
  };
};

const mapStateToProps = (state) => {
  const reports = store.getState().reports;
  return {
    reports: reports,
    gridDetails: reports.layerWiseCompGrid
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LayerMapReport)
);
