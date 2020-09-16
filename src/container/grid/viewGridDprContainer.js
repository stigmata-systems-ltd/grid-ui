import { connect } from 'react-redux';
import ViewGridDpr from '../../pages/viewGridDPR/ViewGridDpr';
import store from '../../store';
import {
  gridNoList,
  gridList,
  deleteGrid,
  editGridDetails,
  fetchLayerInfo,
} from '../../actions/gridActions';
import { GRID_NO_LIST } from '../../actions/types';

const mapDispatchToProps = dispatch => {
  return {
    fetchGridNoData() {
      dispatch(gridNoList());
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
      status: grid.rfiApproval,
    },
  ];
  return {
    grid,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewGridDpr);