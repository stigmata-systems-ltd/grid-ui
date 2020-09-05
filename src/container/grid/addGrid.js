import { connect } from 'react-redux';
import CreateGrid from '../../pages/createGrid/CreateGrid';
import store from '../../store';
import { addGrid } from '../../actions/gridActions';
import { ADD_GRID, GRID_NUMBER, GRID_AREA } from '../../actions/types';

const mapDispatchToProps = dispatch => {
  console.log('dispatcher');
  return {
    // addGrid() {
    //   dispatch(addGrid());
    // },
    handleChangeGridNumber(value) {
      dispatch({
        type: GRID_NUMBER,
        payload: value,
      });
    },
    handleChangeGridArea(value) {
      dispatch({
        type: GRID_AREA,
        payload: value,
      });
    },
  };
};

const mapStateToProps = state => {
  const grid = store.getState().grid;
  console.log(`Grid State: ${JSON.stringify(grid)}`);
  return {
    grid,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateGrid);
