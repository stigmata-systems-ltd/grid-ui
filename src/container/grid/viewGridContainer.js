import { connect } from 'react-redux';
import ViewGrid from '../../pages/viewGrid/ViewGrid';
import store from '../../store';
import { gridNoList } from '../../actions/gridActions';
import { gridNumber } from '../../actions/viewGridActions';
import { GRID_NO_LIST } from '../../actions/types';
import { GRID_NUMBER } from '../../actions/types';

const mapDispatchToProps = dispatch => {
  return {
    fetchGridNoData() {
      dispatch(gridNoList());
    },
    fetchGridNumber(){
      dispatch(gridNumber());
    }
  };
};

const mapStateToProps = state => {
  const grid = store.getState().grid;
  return {
    grid,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewGrid);
