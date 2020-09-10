import { connect } from 'react-redux';
import ViewGrid from '../../pages/viewGrid/ViewGrid';
import store from '../../store';
import { gridNoList } from '../../actions/gridActions';


const mapDispatchToProps = dispatch => {
  console.log('dispatcher');
  return {
    fetchGridNoData() {
      dispatch(gridNoList());
    },
  };
};

const mapStateToProps = state => {
  const grid = store.getState().grid;
  console.log(`Grid State: ${JSON.stringify(grid)}`);
  grid.gridNoData.map(function(e, i) {
    e.id = i + 1;
  });
  console.log(`Grid State: ${JSON.stringify(grid)}`);
  return {
    grid,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewGrid);
