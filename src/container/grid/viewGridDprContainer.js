import { connect } from 'react-redux';
import ViewGridDpr from '../../pages/viewGridDPR/ViewGridDpr';
import store from '../../store';
import {
  gridNoList,
  gridList,
  deleteGrid,
  editGridDetails,
  fetchLayerInfo,
  getLayerList,
  fetchLayerDetails,
  getLayerPhotos,
} from '../../actions/gridActions';
import {
  PHOTO_LAYER_NO_CHANGE,
} from "../../actions/types";

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchGridNoData() {
      dispatch(gridNoList());
      dispatch(getLayerList());
      dispatch(editGridDetails(atob(props.match.params.id)));
      dispatch(fetchLayerDetails(atob(props.match.params.id)));
    },
    fetchGridData() {
      dispatch(gridList());
    },
    onEditClick(i) {
      dispatch(editGridDetails(i));
    },
    onDeleteClick(i) {
      dispatch(deleteGrid(i));
    },
    fetchLayerInfo(i) {
      dispatch(fetchLayerInfo(i));
    },
    handleChangeLayerNumber(obj) {
      dispatch({
        type: PHOTO_LAYER_NO_CHANGE,
        payload: obj,
      })
      dispatch(getLayerPhotos(atob(props.match.params.id), obj.value));
    },
  };
};

const mapStateToProps = state => {
  const grid = store.getState().grid;
  grid.gridNoData.map(function(e, i) {
    e.id = i + 1;
  });
  grid.cgBodyData = [
    {
      RFINumber: grid.RFINumber,
      rfiInspectionDate: grid.rfiInspectionDate,
      rfiApprovalDate: grid.rfiApprovalDate,
      status: grid.cgRFIStatus,
    },
  ];
  return {
    grid,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewGridDpr);
