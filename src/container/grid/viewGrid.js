import { connect } from 'react-redux';
import ViewGrid from '../../pages/viewGrid/ViewGrid';
import store from '../../store';
import { gridNoList } from '../../actions/gridActions';
import { GRID_NO_LIST } from '../../actions/types';

const mapDispatchToProps = dispatch => {
  return {
    fetchGridNoData() {
      dispatch(gridNoList());
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

export default connect(mapStateToProps, mapDispatchToProps)(ViewGrid);
