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
import { getPageAccess } from "../../utils/pageAccess";

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
        dispatch(gridList());
      });
    },
    onViewClick(i) {
      props.history.push("/grid/viewgriddpr/"+btoa(i));
    },
  };
};

const mapStateToProps = state => {
  const grid = store.getState().grid;
  const pageAccess = getPageAccess('GridManagement')[0].pageDetail;
  grid.gridNoData.map(function(e, i) {
    e.id = i + 1;
  });
  return {
    grid,
    pageAccess,
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ViewGrid));
