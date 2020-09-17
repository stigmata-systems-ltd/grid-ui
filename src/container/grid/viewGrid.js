import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import ViewGrid from '../../pages/viewGrid/ViewGrid';
import store from '../../store';
import {
  gridNoList,
  gridList,
  deleteGrid,
  editGridDetails,
  viewGrid,
  fetchGrid,
  fetchLayerDetails,
} from '../../actions/gridActions';
import { GRID_NO_LIST } from '../../actions/types';

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchGridNoData() {
      dispatch(gridNoList());
    },
    fetchGridData() {
      dispatch(gridList());
    },
    onEditClick(i) {
      dispatch(editGridDetails(i));
      props.history.push("/editgrid")
    },
    onDeleteClick(i) {
      dispatch(deleteGrid(i)).then(() => {
        dispatch(gridNoList());
      });
    },
    onViewClick(i) {
      dispatch(editGridDetails(i));
      dispatch(fetchLayerDetails(i));
      props.history.push("/viewgriddpr");
    },
  };
};

const mapStateToProps = state => {
  const grid = store.getState().grid;
  grid.gridNoData.map(function(e, i) {
    e.id = i + 1;
  });
  return {
    grid,
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ViewGrid));
