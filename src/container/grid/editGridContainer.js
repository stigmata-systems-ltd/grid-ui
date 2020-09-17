import { connect } from 'react-redux';
import EditGrid from '../../pages/editGrid/editGrid';
import store from '../../store';
import {
  editGrid,
  addLatLang,
  fetchGrid,
  gridNoList,
  fetchLayerDetails,
} from '../../actions/gridActions';
import {
  ADD_GRID,
  GRID_NUMBER,
  GRID_AREA,
  GRID_LAT,
  GRID_LANG,
  GRID_LATLANG,
  GRID_LATLONG_REMOVE,
  RESET_EDIT_GRID_FORM,
} from '../../actions/types';

const mapDispatchToProps = dispatch => {
  return {
    fetchGridNoData() {
      dispatch(gridNoList());
    },
    editGrid() {
      dispatch(editGrid());
      dispatch({ type: RESET_EDIT_GRID_FORM });
    },
    addLatLang() {
      dispatch(addLatLang());
    },
    onGridNoChange(value) {
      dispatch({
        type: GRID_NUMBER,
        payload: value,
      });
      this.setSingleGridDetails();
    },
    handleChangeGridArea(value) {
      dispatch({
        type: GRID_AREA,
        payload: value,
      });
    },
    handleChangeLat(value, i) {
      const grid = store.getState().grid;
      const length = grid.gridLatLong.length;
      grid.gridLatLong[i].latitude = parseInt(value);
      dispatch({
        type: GRID_LATLANG,
        payload: grid.gridLatLong,
      });
    },
    handleChangeLong(value, i) {
      const grid = store.getState().grid;
      const length = grid.gridLatLong.length;
      grid.gridLatLong[i].longitude = parseInt(value);

      dispatch({
        type: GRID_LATLANG,
        payload: grid.gridLatLong,
      });
    },
    handleLatLongRemove(i) {
      const grid = store.getState().grid;
      const gridLatLong = [...grid.gridLatLong];
      gridLatLong.splice(i, 1);
      dispatch({
        type: GRID_LATLONG_REMOVE,
        payload: gridLatLong,
      });
    },
    setSingleGridDetails() {
      const grid = store.getState().grid;
      console.log(`setSingleGridDetails: ${grid.gridNumber}`);
      dispatch(fetchGrid(grid.gridNumber));
      dispatch(fetchLayerDetails(grid.gridNumber));
    },
  };
};

const mapStateToProps = state => {
  const grid = store.getState().grid;
  return {
    grid,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditGrid);
