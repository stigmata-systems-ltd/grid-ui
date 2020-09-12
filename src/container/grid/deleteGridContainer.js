import { connect } from 'react-redux';
import DeleteGrid from '../../pages/deleteGrid/deleteGrid';
import store from '../../store';
import { gridNoList, deleteGrid } from '../../actions/gridActions';
import { GRID_NO_LIST, GRID_NO } from '../../actions/types';

const mapDispatchToProps = dispatch => {
  return {
    fetchGridNoData() {
      dispatch(gridNoList());
    },
    deleteGrid() {
      dispatch(deleteGrid());
    },
    onGridNoChange(value) {
      dispatch({
        type: GRID_NO,
        payload: value,
      });
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

export default connect(mapStateToProps, mapDispatchToProps)(DeleteGrid);
